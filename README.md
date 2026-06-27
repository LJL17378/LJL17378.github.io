# M∃RLIN 的博客

`https://ljl17378.github.io` 的 Next.js 静态博客。

## Stack

- Next.js 16 static export
- Heo-inspired theme adapted from NotionNext v4.10.3
- Once UI component foundation
- Unified, Remark, and Rehype Markdown pipeline
- GitHub Pages Actions deployment

## Local development

```bash
npm ci
npm run migrate
npm run dev
```

## Verification

```bash
npm test
npm run build
npm run audit
```

The original Hexo Markdown under `source/_posts` is the canonical migration input. Generated normalized content is stored under `content/posts`.

The site does not use the Notion API, `NOTION_PAGE_ID`, or a Notion database. Markdown remains the only content source.

## License

Blog content belongs to LJL17378. The theme adapts visual and interaction ideas from [NotionNext's Heo theme](https://github.com/NotionNext/NotionNext) under the MIT license; see `LICENSE.notionnext`. The Once UI attribution is retained in the site footer and `LICENSE.magic-portfolio`.
