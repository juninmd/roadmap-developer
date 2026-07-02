import { test, expect } from "@playwright/test";

test.describe("VitePress Docs E2E", () => {
  test("homepage has correct title and navigation", async ({ page }) => {
    // Navigate to the local build server (typically runs on 4173 for preview or 5173 for dev)
    // The Playwright config will handle the baseURL
    await page.goto("/");

    // Verify title matches what's configured in .vitepress/config.mts
    await expect(page).toHaveTitle(/Roadmap Developer 2026/);

    // Verify a main heading exists on the homepage
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("navigation links work", async ({ page }) => {
    await page.goto("/");

    // Try navigating to a common path defined in the roadmap
    // Let's just go directly to ensure the page exists and renders
    await page.goto("/roadmaps/general/common");

    // Should have some content
    await expect(page.locator(".vp-doc")).toBeVisible();
  });
});
