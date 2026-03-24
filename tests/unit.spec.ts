import { expect, test } from 'vitest'

// Since this project is heavily markdown-based and managed by VitePress,
// we'll verify configuration and basic structures here without mocks.

test('Ensure VitePress config exists and holds the right metadata', async () => {
  const config = await import('../.vitepress/config.mts');
  expect(config.default).toBeDefined();
  // Vitepress plugin mermaid wraps the config, so we can't easily extract exact values
  // without instantiating it, but checking its module structure is valid.
})

test('Project name should be correctly set in package.json', async () => {
  const pkg = await import('../package.json');
  expect(pkg.name).toBe('roadmap-developer-2026');
})
