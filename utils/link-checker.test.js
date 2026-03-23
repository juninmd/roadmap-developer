import { describe, it, expect } from "vitest";
import { extractLinks, validateLinks } from "./link-checker";

describe("Link Checker Utility", () => {
  describe("extractLinks", () => {
    it("should return empty array for empty content", () => {
      expect(extractLinks("")).toEqual([]);
      expect(extractLinks(null)).toEqual([]);
    });

    it("should extract a single markdown link correctly", () => {
      const content = "This is a [test link](https://example.com) in text.";
      const expected = [{ text: "test link", url: "https://example.com" }];
      expect(extractLinks(content)).toEqual(expected);
    });

    it("should extract multiple markdown links correctly", () => {
      const content =
        "Link 1: [Google](https://google.com), Link 2: [GitHub](https://github.com)";
      const expected = [
        { text: "Google", url: "https://google.com" },
        { text: "GitHub", url: "https://github.com" },
      ];
      expect(extractLinks(content)).toEqual(expected);
    });

    it("should skip malformed opening brackets", () => {
      const content =
        "Missing closing parens [link](http://example.com Missing bracket text link](http://example.com)";
      const expected = [];
      expect(extractLinks(content)).toEqual(expected);
    });

    it("should skip unclosed bracket", () => {
      const content = "Just a bracket [ and nothing else";
      const expected = [];
      expect(extractLinks(content)).toEqual(expected);
    });

    it("should skip missing ending parens or intermediate brackets", () => {
      const content = "Incomplete [link text missing paren [another one](";
      const expected = [];
      expect(extractLinks(content)).toEqual(expected);
    });

    it("should handle empty link text or urls", () => {
      const content = "Empty URL [link]() Empty Text [](http://example.com)";
      const expected = [
        { text: "link", url: "" },
        { text: "", url: "http://example.com" },
      ];
      expect(extractLinks(content)).toEqual(expected);
    });
  });

  describe("validateLinks", () => {
    it("should return empty array for invalid input", () => {
      expect(validateLinks(null)).toEqual([]);
      expect(validateLinks(undefined)).toEqual([]);
      expect(validateLinks({})).toEqual([]);
    });

    it("should mark valid HTTP/HTTPS links as valid", () => {
      const links = [
        { text: "Google", url: "https://google.com" },
        { text: "Example", url: "http://example.com" },
      ];
      const result = validateLinks(links);
      expect(result).toHaveLength(2);
      expect(result[0].isValid).toBe(true);
      expect(result[1].isValid).toBe(true);
    });

    it("should mark empty URLs as invalid", () => {
      const links = [
        { text: "Empty", url: "" },
        { text: "Spaces", url: "   " },
      ];
      const result = validateLinks(links);
      expect(result[0].isValid).toBe(false);
      expect(result[0].error).toBe("Empty URL");
      expect(result[1].isValid).toBe(false);
      expect(result[1].error).toBe("Empty URL");
    });

    it("should mark valid relative markdown paths as valid", () => {
      const links = [
        { text: "Doc", url: "doc.md" },
        { text: "Root", url: "/index.md" },
        { text: "Parent", url: "../parent.md" },
        { text: "Current", url: "./current.md" },
      ];
      const result = validateLinks(links);
      result.forEach((r) => expect(r.isValid).toBe(true));
    });

    it("should mark anchors as valid", () => {
      const links = [{ text: "Section", url: "#section-1" }];
      const result = validateLinks(links);
      expect(result[0].isValid).toBe(true);
    });

    it("should mark arbitrary strings as invalid", () => {
      const links = [{ text: "Random", url: "random-string-no-extension" }];
      const result = validateLinks(links);
      expect(result[0].isValid).toBe(false);
      expect(result[0].error).toBe("Invalid URL format");
    });
  });
});
