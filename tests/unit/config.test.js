import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('VitePress Configuration', () => {
  it('should have a valid config file', () => {
    const configPath = path.resolve(__dirname, '../../.vitepress/config.mts')
    expect(fs.existsSync(configPath)).toBe(true)
  })

  it('should have a valid package.json with version', () => {
    const pkgPath = path.resolve(__dirname, '../../package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    expect(pkg.name).toBe('roadmap-developer-2026')
    expect(pkg.version).toBeDefined()
  })
})
