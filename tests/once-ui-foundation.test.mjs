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
  const styles = await readFile('src/resources/custom.css', 'utf8')

  assert.match(toc, /IntersectionObserver/)
  assert.match(toc, /aria-current/)
  assert.match(toc, /nav\.scrollTo/)
  assert.doesNotMatch(toc, /activeLink\??\.scrollIntoView/)
  assert.match(toc, /event\.preventDefault\(\)/)
  assert.match(toc, /document\.getElementById\(item\.id\)\?\.scrollIntoView/)
  assert.doesNotMatch(toc, /history\.(?:pushState|replaceState)/)
  assert.match(styles, /\.toc-heading\s*\{[^}]*padding:\s*16px 12px 12px 20px/)
  assert.match(styles, /\.toc \.depth-3\s*\{[^}]*margin-left:\s*14px/)
  assert.match(styles, /\.toc \.depth-4\s*\{[^}]*margin-left:\s*28px/)
})

test('code blocks expose language labels, syntax highlighting, and copy controls', async () => {
  const posts = await readFile('src/content/posts.ts', 'utf8')
  const article = await readFile('src/components/ArticleContent.tsx', 'utf8')
  const postPage = await readFile('src/app/blog/[slug]/page.tsx', 'utf8')
  const styles = await readFile('src/resources/custom.css', 'utf8')

  assert.match(posts, /rehypeHighlight/)
  assert.match(posts, /enhanceCodeBlocks/)
  assert.match(posts, /dataCopyCode/)
  assert.match(posts, /code-block-language/)
  assert.match(article, /navigator\.clipboard\.writeText/)
  assert.match(article, /已复制/)
  assert.match(postPage, /<ArticleContent html=\{html\}/)
  assert.match(styles, /\.code-block-toolbar/)
  assert.match(styles, /\.code-copy-button/)
})
