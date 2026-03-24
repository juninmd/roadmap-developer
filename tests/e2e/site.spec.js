import { test, expect } from '@playwright/test'

test('homepage has expected title', async ({ page }) => {
  await page.goto('/')
  // We expect the title to be Roadmap Developer 2026 based on .vitepress/config.mts
  await expect(page).toHaveTitle(/Roadmap Developer 2026/)
})

test('navigation contains main sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'Comum' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Frontend' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Backend' })).toBeVisible()
})

test('can navigate to frontend roadmap', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Frontend' }).click()
  // Wait for the URL to change to the frontend route
  await expect(page).toHaveURL(/.*\/roadmaps\/frontend\/frontend/)
  // Check that the heading is present
  await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible()
})
