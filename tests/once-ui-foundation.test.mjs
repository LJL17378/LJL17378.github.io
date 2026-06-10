import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('uses Once UI as the site design system', async () => {
  const packageJson = JSON.parse(await readFile('package.json', 'utf8'))

  assert.ok(packageJson.dependencies['@once-ui-system/core'])
})

test('exports a root-domain static GitHub Pages site', async () => {
  const nextConfig = await readFile('next.config.mjs', 'utf8')

  assert.match(nextConfig, /output:\s*['"]export['"]/)
  assert.match(nextConfig, /trailingSlash:\s*true/)
  assert.doesNotMatch(nextConfig, /basePath/)
})
