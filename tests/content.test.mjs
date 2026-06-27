import assert from 'node:assert/strict'
import { access, readFile, readdir } from 'node:fs/promises'
import test from 'node:test'

const postsDirectory = new URL('../content/posts/', import.meta.url)

test('migrates every Hexo post with unique slugs and dates', async () => {
  const files = (await readdir(postsDirectory)).filter((file) => file.endsWith('.md'))
  assert.equal(files.length, 31)
  assert.equal(new Set(files).size, files.length)

  for (const file of files) {
    const source = await readFile(new URL(file, postsDirectory), 'utf8')
    assert.match(source, /^---\n[\s\S]*title:/)
    assert.match(source, /\npublishedAt: ['"]?\d{4}-\d{2}-\d{2}['"]?/)
  }
})

test('preserves code examples instead of escaping the whole article', async () => {
  const files = await readdir(postsDirectory)
  const dayThree = files.find((file) => file.includes('day3'))
  assert.ok(dayThree)

  const source = await readFile(new URL(dayThree, postsDirectory), 'utf8')
  assert.match(source, /```(?:tsx|typescript|javascript|jsx)/)
  assert.doesNotMatch(source, /&lt;script setup&gt;/)
})

test('does not corrupt hyphenated URLs in generated summaries', async () => {
  const files = await readdir(postsDirectory)
  const dayTwo = files.find((file) => file.includes('day2'))
  assert.ok(dayTwo)

  const source = await readFile(new URL(dayTwo, postsDirectory), 'utf8')
  assert.match(source, /my-img/)
  assert.doesNotMatch(source, /my img/)
})

test('copies every local post asset to a stable public directory', async () => {
  const assets = [
    'flex_terms.png',
    'image-1.png',
    'image-2.png',
    'image-3.png',
    'image-4.png',
    'image-5.png',
    'image-6.png',
    'image.png',
  ]

  for (const asset of assets) {
    await access(new URL(`../public/posts-assets/${asset}`, import.meta.url))
  }
})

test('omits the optional cover field when a source post has no cover', async () => {
  const migrationScript = await readFile(
    new URL('../scripts/migrate-content.mjs', import.meta.url),
    'utf8',
  )

  assert.doesNotMatch(migrationScript, /cover:[^\n]+undefined/)
  assert.match(migrationScript, /\.\.\.\(parsed\.data\.cover/)
})
