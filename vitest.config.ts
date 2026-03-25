import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
  }
})
