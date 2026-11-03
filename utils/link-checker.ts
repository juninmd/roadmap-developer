export interface LinkCheckResult {
  url: string;
  ok: boolean;
  status: number;
  error?: string;
}

export interface CheckLinksOptions {
  concurrency?: number;
  timeoutMs?: number;
  fetchFn?: typeof fetch;
}

/**
 * Removes fenced code blocks (``` or ~~~) and inline code (`)
 * while preserving character positions / replacing with whitespace
 * or empty space so that links inside code are ignored.
 */
function stripCodeBlocks(markdown: string): string {
  return markdown
    .replace(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g, (match) =>
      " ".repeat(match.length),
    )
    .replace(/(`+)([\s\S]*?)\1/g, (match) => " ".repeat(match.length));
}

/**
 * Extracts links from markdown content in document order.
 * Handles inline links [text](url), reference links [text][ref] / [ref]: url,
 * autolinks <https://...>, nested brackets, and URLs containing balanced parentheses.
 * Ignores code fences and inline code.
 */
export function extractMarkdownLinks(content: string): string[] {
  const links: string[] = [];
  const sanitized = stripCodeBlocks(content);

  // 1. Pre-parse reference link definitions: [ref]: url or [ref]: <url>
  const refDefMap = new Map<string, string>();
  const refDefRegex = /^[ \t]*\[([^\]]+)\]:[ \t]+<?([^\s>]+)>?/gm;
  let refDefMatch: RegExpExecArray | null;
  while ((refDefMatch = refDefRegex.exec(sanitized)) !== null) {
    const label = refDefMatch[1].trim().toLowerCase();
    const targetUrl = refDefMatch[2].trim();
    if (label && targetUrl) {
      refDefMap.set(label, targetUrl);
    }
  }

  // 2. Scan through markdown sequentially to extract links in document order
  let currentIndex = 0;
  while (currentIndex < sanitized.length) {
    const char = sanitized[currentIndex];

    // Check autolink: <http(s)://...>
    if (char === "<") {
      const closingAngle = sanitized.indexOf(">", currentIndex);
      if (closingAngle !== -1) {
        const potentialUrl = sanitized
          .substring(currentIndex + 1, closingAngle)
          .trim();
        if (
          potentialUrl.startsWith("http://") ||
          potentialUrl.startsWith("https://")
        ) {
          links.push(potentialUrl);
          currentIndex = closingAngle + 1;
          continue;
        }
      }
    }

    if (char === "[") {
      const linkStart = currentIndex;
      let bracketDepth = 1;
      let linkTextEnd = -1;

      for (let i = linkStart + 1; i < sanitized.length; i++) {
        if (sanitized[i] === "[") {
          bracketDepth++;
        } else if (sanitized[i] === "]") {
          bracketDepth--;
          if (bracketDepth === 0) {
            linkTextEnd = i;
            break;
          }
        }
      }

      if (linkTextEnd === -1) {
        currentIndex = linkStart + 1;
        continue;
      }

      // Check if this is a reference definition line e.g. [ref]:
      if (
        linkTextEnd + 1 < sanitized.length &&
        sanitized[linkTextEnd + 1] === ":"
      ) {
        currentIndex = linkTextEnd + 2;
        continue;
      }

      // Check if followed immediately by '(' for inline link: [text](url)
      if (
        linkTextEnd + 1 < sanitized.length &&
        sanitized[linkTextEnd + 1] === "("
      ) {
        const urlStart = linkTextEnd + 1; // index of '('
        let parenDepth = 1;
        let urlEnd = -1;

        for (let i = urlStart + 1; i < sanitized.length; i++) {
          if (sanitized[i] === "(") {
            parenDepth++;
          } else if (sanitized[i] === ")") {
            parenDepth--;
            if (parenDepth === 0) {
              urlEnd = i;
              break;
            }
          }
        }

        if (urlEnd === -1) {
          currentIndex = urlStart + 1;
          continue;
        }

        let rawUrl = sanitized.substring(urlStart + 1, urlEnd).trim();
        // Handle <url> inside parentheses
        if (rawUrl.startsWith("<") && rawUrl.endsWith(">")) {
          rawUrl = rawUrl.substring(1, rawUrl.length - 1).trim();
        }
        // Handle optional title in url e.g. (https://example.com "title")
        const spaceIdx = rawUrl.indexOf(" ");
        if (spaceIdx !== -1) {
          rawUrl = rawUrl.substring(0, spaceIdx).trim();
        }

        if (rawUrl) {
          links.push(rawUrl);
        }

        currentIndex = urlEnd + 1;
        continue;
      }

      // Check if followed by '[ref]' for reference link: [text][ref] or [ref][]
      if (
        linkTextEnd + 1 < sanitized.length &&
        sanitized[linkTextEnd + 1] === "["
      ) {
        const refStart = linkTextEnd + 1;
        const refEnd = sanitized.indexOf("]", refStart);
        if (refEnd !== -1) {
          let refLabel = sanitized
            .substring(refStart + 1, refEnd)
            .trim()
            .toLowerCase();
          // Collapsed reference [foo][] uses link text
          if (!refLabel) {
            refLabel = sanitized
              .substring(linkStart + 1, linkTextEnd)
              .trim()
              .toLowerCase();
          }
          if (refDefMap.has(refLabel)) {
            links.push(refDefMap.get(refLabel)!);
          }
          currentIndex = refEnd + 1;
          continue;
        }
      }

      // Check shortcut reference link: [ref] where ref is defined in refDefMap
      const shortcutLabel = sanitized
        .substring(linkStart + 1, linkTextEnd)
        .trim()
        .toLowerCase();
      if (refDefMap.has(shortcutLabel)) {
        links.push(refDefMap.get(shortcutLabel)!);
      }

      currentIndex = linkTextEnd + 1;
      continue;
    }

    currentIndex++;
  }

  return links;
}

/**
 * Validates URLs with HEAD request, falling back to GET if needed.
 * Features:
 * - 10s timeout via AbortController (configurable)
 * - Concurrency control (default: 5)
 * - Relative URLs / anchors explicitly ignored or handled
 * - Safe error handling (one failure does not break the batch)
 */
export async function checkLinks(
  urls: string[],
  options: CheckLinksOptions = {},
): Promise<LinkCheckResult[]> {
  const {
    concurrency = 5,
    timeoutMs = 10000,
    fetchFn = globalThis.fetch,
  } = options;
  const results: LinkCheckResult[] = new Array(urls.length);

  async function checkSingleUrl(url: string): Promise<LinkCheckResult> {
    const trimmed = url.trim();

    // Check if anchor
    if (trimmed.startsWith("#")) {
      return {
        url: trimmed,
        ok: true,
        status: 200,
      };
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(trimmed);
      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
        return {
          url: trimmed,
          ok: false,
          status: 0,
          error: `Unsupported protocol: ${parsedUrl.protocol}`,
        };
      }
    } catch {
      // Relative or invalid URL
      return {
        url: trimmed,
        ok: false,
        status: 0,
        error: "Invalid or relative URL",
      };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      // Try HEAD first
      let response: Response;
      try {
        response = await fetchFn(trimmed, {
          method: "HEAD",
          signal: controller.signal,
          headers: {
            "User-Agent": "Roadmap-Link-Checker/1.0",
          },
        });

        // If HEAD is not allowed (e.g. 405 Method Not Allowed, 501, 403), retry with GET
        if (
          response.status === 405 ||
          response.status === 501 ||
          response.status === 403
        ) {
          response = await fetchFn(trimmed, {
            method: "GET",
            signal: controller.signal,
            headers: {
              "User-Agent": "Roadmap-Link-Checker/1.0",
            },
          });
        }
      } catch (headError: unknown) {
        // If HEAD failed with network error or abort, try GET if not aborted
        if (controller.signal.aborted) {
          throw headError;
        }
        response = await fetchFn(trimmed, {
          method: "GET",
          signal: controller.signal,
          headers: {
            "User-Agent": "Roadmap-Link-Checker/1.0",
          },
        });
      }

      return {
        url: trimmed,
        ok: response.ok,
        status: response.status,
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.name === "AbortError"
            ? "Request timeout"
            : err.message
          : "Unknown error";

      return {
        url: trimmed,
        ok: false,
        status: 0,
        error: errorMessage,
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // Limited concurrency execution pool
  let queueIndex = 0;
  async function worker(): Promise<void> {
    while (queueIndex < urls.length) {
      const currentIndex = queueIndex++;
      results[currentIndex] = await checkSingleUrl(urls[currentIndex]);
    }
  }

  const poolSize = Math.max(1, Math.min(concurrency, urls.length));
  const workers = Array.from({ length: poolSize }, () => worker());
  await Promise.all(workers);

  return results;
}
