/**
 * Utility to parse and validate markdown links
 * A valid link in this context means it's correctly formatted and has a valid target structure.
 */

/**
 * Extracts links from markdown content
 * @param {string} markdownContent The markdown text to parse
 * @returns {Array<{text: string, url: string}>} Array of extracted links
 */
export function extractLinks(markdownContent) {
  if (!markdownContent) return [];

  // Match standard markdown links: [text](url)
  // Replaced /\[(.*?)\]\((.*?)\)/g with a safer regex to prevent ReDoS
  const regex = /\[([^\]]*)\]\(([^)]*)\)/g;
  const links = [];

  let match;
  while ((match = regex.exec(markdownContent)) !== null) {
    links.push({
      text: match[1],
      url: match[2],
    });
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
