# M∃RLIN 的博客

`https://ljl17378.github.io` 的 Next.js 静态博客。

## Stack

- Next.js 16 static export
- Once UI / Magic Portfolio design system
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

## License

Blog content belongs to LJL17378. The visual foundation is based on Magic Portfolio / Once UI under CC BY-NC 4.0; attribution is retained in the site footer.
