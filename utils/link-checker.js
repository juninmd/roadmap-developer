/**
 * Utility to parse and validate markdown links
 * A valid link in this context means it's correctly formatted and has a valid target structure.
 */

/**
 * Extracts links from markdown content without using complex regex to avoid ReDoS
 * @param {string} markdownContent The markdown text to parse
 * @returns {Array<{text: string, url: string}>} Array of extracted links
 */
export function extractLinks(markdownContent) {
  if (!markdownContent) return [];

  const links = [];
  let index = 0;

  while (index < markdownContent.length) {
    // Find the start of a link text
    const bracketStart = markdownContent.indexOf("[", index);
    if (bracketStart === -1) break; // No more links

    // Find the end of the link text
    const bracketEnd = markdownContent.indexOf("](", bracketStart);
    if (bracketEnd === -1) {
      index = bracketStart + 1;
      continue;
    }

    // Find the end of the URL
    const parenEnd = markdownContent.indexOf(")", bracketEnd + 2);
    if (parenEnd === -1) {
      index = bracketEnd + 2;
      continue;
    }

    // Extract text and url
    const text = markdownContent.substring(bracketStart + 1, bracketEnd);
    const url = markdownContent.substring(bracketEnd + 2, parenEnd);

    // Filter out edge cases (e.g., nested brackets, though simplistic)
    if (!text.includes("]") && !url.includes(" ")) {
      links.push({ text, url });
    }

    // Move index past the current link
    index = parenEnd + 1;
  }

  return links;
}

/**
 * Validates an array of links
 * @param {Array<{text: string, url: string}>} links Array of links to validate
 * @returns {Array<{url: string, isValid: boolean, error?: string}>} Validation results
 */
export function validateLinks(links) {
  if (!Array.isArray(links)) return [];

  return links.map((link) => {
    // Empty URLs are invalid
    if (!link.url || link.url.trim() === "") {
      return { url: link.url, isValid: false, error: "Empty URL" };
    }

    // Valid HTTP/HTTPS URLs
    if (link.url.startsWith("http://") || link.url.startsWith("https://")) {
      return { url: link.url, isValid: true };
    }

    // Valid relative markdown paths
    if (
      link.url.endsWith(".md") ||
      link.url.startsWith("/") ||
      link.url.startsWith("../") ||
      link.url.startsWith("./")
    ) {
      return { url: link.url, isValid: true };
    }

    // Valid anchors
    if (link.url.startsWith("#")) {
      return { url: link.url, isValid: true };
    }

    return { url: link.url, isValid: false, error: "Invalid URL format" };
  });
}
