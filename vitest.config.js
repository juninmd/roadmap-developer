import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["utils/**/*.test.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["utils/**/*.js"],
    },
    environment: "node",
  },
});
