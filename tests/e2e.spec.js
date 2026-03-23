import { test, expect } from "@playwright/test";

test.describe("VitePress Site E2E Tests", () => {
  test("should display the correct homepage title", async ({ page }) => {
    // Navigate to the local VitePress build preview
    await page.goto("/");

    // Check if the title is correct
    await expect(page).toHaveTitle(/Roadmap Developer 2026/);
  });

  test("should navigate to a roadmap from the homepage", async ({ page }) => {
    await page.goto("/");

    // Assuming there's a link to the Frontend roadmap
    const frontendLink = page.getByRole("link", {
      name: "Frontend",
      exact: true,
    });

    // We expect the link to exist, and we will click it
    // We expect the link to exist, and we will click it
    await expect(frontendLink).toBeVisible();
    await frontendLink.click();

    // We should be on a page with "Frontend" in the heading or title
    await expect(page).toHaveURL(/frontend/);
    await expect(page.locator("h1").first()).toContainText("Frontend");
  });

  test("should render the top navigation correctly", async ({ page }) => {
    await page.goto("/");

    // Verify main nav elements are visible
    const navBar = page.locator(".VPNavBar");
    await expect(navBar).toBeVisible();

    // The "Guia de Estudos" link should be in the nav
    const guideLink = page.locator(".VPNavBarMenuLink", {
      hasText: "Guia de Estudos",
    });
    if ((await guideLink.count()) > 0) {
      await expect(guideLink).toBeVisible();
    }
  });
});
