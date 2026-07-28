import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

test('uses a Heo-inspired shell without a global image background', async () => {
  const layout = await readFile('src/app/layout.tsx', 'utf8')
  const home = await readFile('src/app/page.tsx', 'utf8')
  const styles = await readFile('src/resources/custom.css', 'utf8')

  assert.doesNotMatch(layout, /background-grid/)
  assert.match(home, /heo-hero/)
  assert.match(home, /home-layout/)
  assert.match(styles, /\.heo-hero[^}]*blog-background\.jpg/s)
})

test('provides Heo navigation, search, mobile navigation, and card covers', async () => {
  const header = await readFile('src/components/Header.tsx', 'utf8')
  const postCard = await readFile('src/components/PostCard.tsx', 'utf8')

  assert.match(header, /SearchOverlay/)
  assert.match(header, /mobile-nav-drawer/)
  assert.match(header, /aria-label="搜索文章"/)
  assert.match(postCard, /post-card-cover/)
  assert.match(postCard, /cover-palette-/)
})

test('uses the Bili info card web component in the home sidebar', async () => {
  const home = await readFile('src/app/page.tsx', 'utf8')
  const component = await readFile('src/components/BiliInfoCard.tsx', 'utf8')
  const styles = await readFile('src/resources/custom.css', 'utf8')
  const declarations = await readFile('src/types/custom-elements.d.ts', 'utf8')

  assert.match(home, /<BiliInfoCard \/>/)
  assert.match(component, /https:\/\/bili-info-card\.vercel\.app\/bilibili-user-card\.js/)
  assert.match(component, /<bilibili-user-card uid=\{BILI_UID\}/)
  assert.match(styles, /\.bili-widget bilibili-user-card/)
  assert.match(styles, /--bic-max-width:\s*100%/)
  assert.match(declarations, /"bilibili-user-card"/)
})

test('retains the NotionNext MIT notice for the Heo design reference', async () => {
  const footer = await readFile('src/components/Footer.tsx', 'utf8')
  const license = await readFile('LICENSE.notionnext', 'utf8')

  assert.match(footer, /NotionNext Heo/)
  assert.match(license, /Copyright \(c\) 2021-present, tangly1024/)
  await access('LICENSE.magic-portfolio')
})
