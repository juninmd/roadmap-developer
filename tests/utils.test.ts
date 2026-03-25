import { describe, it, expect } from "vitest";
import { formatTitle } from "./utils";

describe("formatTitle", () => {
  it("formats title correctly", () => {
    expect(formatTitle(" Hello World ")).toBe("hello-world");
  });
});
