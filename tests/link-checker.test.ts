import { describe, it, expect, vi } from "vitest";
import { extractMarkdownLinks, checkLinks } from "../utils/link-checker";

describe("extractMarkdownLinks", () => {
  it("should extract a single valid link", () => {
    const markdown = "Check out [my website](https://example.com)";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["https://example.com"]);
  });

  it("should extract multiple links", () => {
    const markdown = "Here is [link 1](url1) and [link 2](url2).";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["url1", "url2"]);
  });

  it("should handle incomplete links gracefully", () => {
    const markdown = "This [is not]( a link because space. This [is](url)";
    const links = extractMarkdownLinks(markdown);
    expect(links.length).toBe(1);
  });

  it("should ignore brackets without parenthesis immediately after", () => {
    const markdown =
      "This is [bracketed] text, not a link. But [this is](link).";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["link"]);
  });

  it("should return empty array for no links", () => {
    const markdown = "Just plain text.";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual([]);
  });

  it("should handle empty links", () => {
    const markdown = "An empty [link]().";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual([]);
  });

  // Wikipedia link with balanced parentheses
  it("should handle URLs containing balanced parentheses (e.g. Wikipedia)", () => {
    const markdown =
      "Here is a Wikipedia page: [Foo (bar)](https://en.wikipedia.org/wiki/Foo_(bar)) for testing.";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["https://en.wikipedia.org/wiki/Foo_(bar)"]);
  });

  // Nested brackets in link text
  it("should handle nested brackets in link text", () => {
    const markdown = "Check out [a [b] c](https://example.com/nested).";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["https://example.com/nested"]);
  });

  // Code fences and inline code
  it("should ignore links inside fenced code blocks and inline code", () => {
    const markdown = [
      "Here is normal markdown.",
      "```markdown",
      "[a](https://example.com/ignored-fence)",
      "```",
      "Inline code `[inline](https://example.com/ignored-inline)`.",
      "Real link: [real](https://example.com/real).",
    ].join("\n");
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["https://example.com/real"]);
  });

  it("should return empty array when links are only inside code fence", () => {
    const markdown = "```\n[a](https://example.com/test)\n```";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual([]);
  });

  // Reference-style links
  it("should extract reference-style links [x][ref] and [ref]: url", () => {
    const markdown = [
      "Here is a [link text][ref1] and another [ref2][].",
      "Also shortcut [ref3].",
      "[ref1]: https://example.com/ref1",
      "[ref2]: https://example.com/ref2",
      "[ref3]: https://example.com/ref3",
    ].join("\n");
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual([
      "https://example.com/ref1",
      "https://example.com/ref2",
      "https://example.com/ref3",
    ]);
  });

  // Autolinks
  it("should extract autolinks <https://...>", () => {
    const markdown =
      "Check this autolink <https://example.com/autolink> please.";
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual(["https://example.com/autolink"]);
  });

  // URLs wrapped in angle brackets or with titles
  it("should handle angle brackets or titles inside inline link parentheses", () => {
    const markdown =
      '[titled](https://example.com/titled "Some Title") and [angled](<https://example.com/angled>)';
    const links = extractMarkdownLinks(markdown);
    expect(links).toEqual([
      "https://example.com/titled",
      "https://example.com/angled",
    ]);
  });
});

describe("checkLinks", () => {
  it("should check 200 OK links with HEAD", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
    } as Response);

    const urls = ["https://example.com/ok"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/ok",
        ok: true,
        status: 200,
      },
    ]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://example.com/ok",
      expect.objectContaining({ method: "HEAD" }),
    );
  });

  it("should handle 404 Not Found", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as Response);

    const urls = ["https://example.com/not-found"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/not-found",
        ok: false,
        status: 404,
      },
    ]);
  });

  it("should fallback to GET when HEAD returns 405 Method Not Allowed", async () => {
    const mockFetch = vi
      .fn()
      .mockImplementation(async (_url: string, init?: RequestInit) => {
        if (init?.method === "HEAD") {
          return {
            ok: false,
            status: 405,
          } as Response;
        }
        return {
          ok: true,
          status: 200,
        } as Response;
      });

    const urls = ["https://example.com/no-head"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/no-head",
        ok: true,
        status: 200,
      },
    ]);
    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch.mock.calls[0][1]?.method).toBe("HEAD");
    expect(mockFetch.mock.calls[1][1]?.method).toBe("GET");
  });

  it("should fallback to GET when HEAD throws network error", async () => {
    const mockFetch = vi
      .fn()
      .mockImplementation(async (_url: string, init?: RequestInit) => {
        if (init?.method === "HEAD") {
          throw new Error("HEAD not supported");
        }
        return {
          ok: true,
          status: 200,
        } as Response;
      });

    const urls = ["https://example.com/head-error"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/head-error",
        ok: true,
        status: 200,
      },
    ]);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it("should handle redirect status codes properly", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 301,
    } as Response);

    const urls = ["https://example.com/redirect"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/redirect",
        ok: true,
        status: 301,
      },
    ]);
  });

  it("should handle timeout gracefully without crashing", async () => {
    const mockFetch = vi.fn().mockImplementation(
      () =>
        new Promise((_, reject) => {
          const err = new Error("The operation was aborted");
          err.name = "AbortError";
          setTimeout(() => reject(err), 20);
        }),
    );

    const urls = ["https://example.com/timeout"];
    const results = await checkLinks(urls, {
      fetchFn: mockFetch,
      timeoutMs: 10,
    });

    expect(results).toEqual([
      {
        url: "https://example.com/timeout",
        ok: false,
        status: 0,
        error: "Request timeout",
      },
    ]);
  });

  it("should handle general network error gracefully", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("ENOTFOUND"));

    const urls = ["https://example.com/bad-domain"];
    const results = await checkLinks(urls, { fetchFn: mockFetch });

    expect(results).toEqual([
      {
        url: "https://example.com/bad-domain",
        ok: false,
        status: 0,
        error: "ENOTFOUND",
      },
    ]);
  });

  it("should handle anchors and relative or invalid URLs", async () => {
    const urls = ["#heading-1", "/relative/path", "ftp://example.com"];

    const results = await checkLinks(urls);

    expect(results[0]).toEqual({
      url: "#heading-1",
      ok: true,
      status: 200,
    });
    expect(results[1]).toEqual({
      url: "/relative/path",
      ok: false,
      status: 0,
      error: "Invalid or relative URL",
    });
    expect(results[2]).toEqual({
      url: "ftp://example.com",
      ok: false,
      status: 0,
      error: "Unsupported protocol: ftp:",
    });
  });

  it("should limit concurrency when processing multiple URLs", async () => {
    let activeRequests = 0;
    let maxSimultaneous = 0;

    const mockFetch = vi.fn().mockImplementation(async () => {
      activeRequests++;
      if (activeRequests > maxSimultaneous) {
        maxSimultaneous = activeRequests;
      }
      await new Promise((resolve) => setTimeout(resolve, 20));
      activeRequests--;
      return { ok: true, status: 200 } as Response;
    });

    const urls = [
      "https://example.com/1",
      "https://example.com/2",
      "https://example.com/3",
      "https://example.com/4",
      "https://example.com/5",
      "https://example.com/6",
      "https://example.com/7",
    ];

    const results = await checkLinks(urls, {
      concurrency: 3,
      fetchFn: mockFetch,
    });

    expect(results.length).toBe(7);
    expect(maxSimultaneous).toBeLessThanOrEqual(3);
    for (const res of results) {
      expect(res.ok).toBe(true);
      expect(res.status).toBe(200);
    }
  });
});
