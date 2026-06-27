import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { slugify } from 'transliteration'

const root = process.cwd()
const sourceDirectory = path.join(root, 'source', '_posts')
const outputDirectory = path.join(root, 'content', 'posts')
const assetDirectory = path.join(root, 'public', 'posts-assets')

const database = JSON.parse(await readFile(path.join(root, 'db.json'), 'utf8'))
const records = new Map(
  database.models.Post.map((post) => [
    path.basename(post.source),
    {
      date: post.date,
      updated: post.updated,
      slug: post.slug,
    },
  ]),
)

function createSlug(filename, title) {
  const preferred = records.get(filename)?.slug || title || path.basename(filename, '.md')
  return (
    slugify(preferred, {
      lowercase: true,
      separator: '-',
      replace: [
        ['&&', ' and '],
        ['+', ' plus '],
      ],
    }) || `post-${Buffer.from(filename).toString('hex').slice(0, 12)}`
  )
}

function inferTags(title, body) {
  const text = `${title} ${body.slice(0, 1200)}`.toLowerCase()
  const rules = [
    ['AI', /\bai\b|agent|tool call|chatbot|生成式/],
    ['React', /react|jotai|tanstack query|shadcn/],
    ['Vue', /\bvue\b|组合式api|ref\(|reactive/],
    ['Next.js', /next\.?js|nextjs|tanstack start/],
    ['JavaScript', /javascript|\bjs\b|闭包|promise|正则/],
    ['CSS', /\bcss\b|样式|flex/],
    ['Taro', /taro|小程序|webview/],
    ['Flutter', /flutter|dart/],
    ['Node.js', /nestjs|node\.?js|bff/],
    ['WebRTC', /webrtc|whep|whip/],
    ['工程化', /eslint|prettier|pwa|webextensions|openspec/],
    ['面试', /八股|面试|leetcode/],
  ]

  const tags = rules.filter(([, pattern]) => pattern.test(text)).map(([tag]) => tag)
  return tags.length ? tags.slice(0, 4) : ['随笔']
}

function makeSummary(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~()!\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150)
}

function fenceDangerousBlocks(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const output = []
  let fence = null
  let dangerous = null

  for (const line of lines) {
    const fenceMatch = line.match(/^\s*(```+|~~~+)/)
    if (fenceMatch && !dangerous) {
      fence = fence ? null : fenceMatch[1][0]
      output.push(line)
      continue
    }

    if (!fence && !dangerous) {
      const opening = line.match(/^\s*<(style|script|template)(?:\s[^>]*)?>\s*$/i)
      if (opening) {
        dangerous = opening[1].toLowerCase()
        output.push(`\`\`\`${dangerous === 'style' ? 'css' : dangerous === 'script' ? 'javascript' : 'html'}`)
        output.push(line)
        continue
      }
    }

    if (dangerous) {
      output.push(line)
      if (new RegExp(`^\\s*</${dangerous}>\\s*$`, 'i').test(line)) {
        output.push('```')
        dangerous = null
      }
      continue
    }

    output.push(line)
  }

  if (dangerous) output.push('```')
  return output.join('\n')
}

function rewriteLocalAssets(markdown, localAssets) {
  return markdown.replace(/(!\[[^\]]*\]\()([^)]+)(\))/g, (match, start, url, end) => {
    const clean = url.trim().replace(/^\.\//, '')
    return localAssets.has(clean) ? `${start}/posts-assets/${clean}${end}` : match
  })
}

await rm(outputDirectory, { recursive: true, force: true })
await mkdir(outputDirectory, { recursive: true })
await mkdir(assetDirectory, { recursive: true })

const entries = await readdir(sourceDirectory, { withFileTypes: true })
const assets = entries.filter((entry) => entry.isFile() && !entry.name.endsWith('.md'))
const localAssets = new Set(assets.map((entry) => entry.name))

for (const asset of assets) {
  await cp(path.join(sourceDirectory, asset.name), path.join(assetDirectory, asset.name))
}

const usedSlugs = new Set()
for (const entry of entries.filter((item) => item.isFile() && item.name.endsWith('.md'))) {
  const raw = await readFile(path.join(sourceDirectory, entry.name), 'utf8')
  const parsed = matter(raw)
  const title = String(parsed.data.title || path.basename(entry.name, '.md')).trim()
  let slug = createSlug(entry.name, title)

  if (usedSlugs.has(slug)) {
    let suffix = 2
    while (usedSlugs.has(`${slug}-${suffix}`)) suffix += 1
    slug = `${slug}-${suffix}`
  }
  usedSlugs.add(slug)

  const body = rewriteLocalAssets(fenceDangerousBlocks(parsed.content.trim()), localAssets)
  const record = records.get(entry.name)
  const publishedAt = new Date(record?.date || '2024-01-01T00:00:00.000Z')
    .toISOString()
    .slice(0, 10)
  const updatedAt = new Date(record?.updated || record?.date || publishedAt)
    .toISOString()
    .slice(0, 10)

  const migrated = matter.stringify(`${body}\n`, {
    title,
    slug,
    publishedAt,
    updatedAt,
    summary: String(parsed.data.description || makeSummary(body)),
    tags: Array.isArray(parsed.data.tags)
      ? parsed.data.tags.map(String)
      : inferTags(title, body),
    cover: parsed.data.cover ? String(parsed.data.cover) : undefined,
    draft: parsed.data.draft === true,
    sourceFile: entry.name,
  })

  await writeFile(path.join(outputDirectory, `${slug}.md`), migrated)
}

console.log(`Migrated ${usedSlugs.size} posts and ${assets.length} local assets.`)
