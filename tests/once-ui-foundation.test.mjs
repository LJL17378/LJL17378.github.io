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

test('keeps Chinese tag routes readable and decodes route params before matching', async () => {
  const home = await readFile('src/app/page.tsx', 'utf8')
  const tags = await readFile('src/app/tags/page.tsx', 'utf8')
  const tagPage = await readFile('src/app/tags/[tag]/page.tsx', 'utf8')

  assert.doesNotMatch(home, /encodeURIComponent\(tag\)/)
  assert.doesNotMatch(tags, /encodeURIComponent\(tag\)/)
  assert.match(tagPage, /decodeTagParam\(tag\)/)
})

test('article table of contents follows reading position and keeps the active item visible', async () => {
  const toc = await readFile('src/components/TableOfContents.tsx', 'utf8')

  assert.match(toc, /IntersectionObserver/)
  assert.match(toc, /aria-current/)
  assert.match(toc, /nav\.scrollTo/)
  assert.doesNotMatch(toc, /scrollIntoView/)
})
