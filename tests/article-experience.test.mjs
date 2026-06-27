import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('article pages expose reading progress, related posts, and adjacent navigation', async () => {
  const page = await readFile('src/app/blog/[slug]/page.tsx', 'utf8')

  assert.match(page, /ReadingProgress/)
  assert.match(page, /getRelatedPosts/)
  assert.match(page, /getAdjacentPosts/)
  assert.match(page, /related-posts/)
  assert.match(page, /post-adjacent/)
})

test('the table of contents has a mobile drawer without changing browser history', async () => {
  const toc = await readFile('src/components/TableOfContents.tsx', 'utf8')
  const styles = await readFile('src/resources/custom.css', 'utf8')

  assert.match(toc, /mobile-toc-trigger/)
  assert.match(toc, /mobile-toc-drawer/)
  assert.match(toc, /setMobileOpen\(false\)/)
  assert.doesNotMatch(toc, /history\.(?:pushState|replaceState)/)
  assert.match(styles, /\.mobile-toc-trigger/)
})

test('reading progress is calculated from the article body', async () => {
  const progress = await readFile('src/components/ReadingProgress.tsx', 'utf8')

  assert.match(progress, /querySelector<HTMLElement>\("\.article-body"\)/)
  assert.match(progress, /reading-progress-bar/)
  assert.match(progress, /requestAnimationFrame/)
})
