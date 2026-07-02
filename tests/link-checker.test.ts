import { describe, it, expect } from "vitest";
import { extractMarkdownLinks } from "../utils/link-checker";

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
    // Note: our simple parser accepts spaces inside parenthesis if trimmed,
    // but the test is to ensure it doesn't break
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
});
