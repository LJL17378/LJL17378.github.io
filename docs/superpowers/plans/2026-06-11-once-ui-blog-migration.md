# Once UI Blog Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild and deploy `ljl17378.github.io` as a static Once UI-based Next.js technical blog while preserving all 31 Hexo posts and a complete rollback path.

**Architecture:** Use Magic Portfolio's Once UI design system and component foundation, remove server-only portfolio features, and add an AST-based Markdown content layer over the original Hexo source. Export the App Router site statically and deploy `out/` with GitHub Pages Actions.

**Tech Stack:** Next.js 16, React 19, TypeScript, Once UI, MDX/unified remark and rehype plugins, Node test runner, GitHub Actions Pages.

---

### Task 1: Back Up The Existing Site

**Files:**
- Create: `backups/<timestamp>/project-source.tar.gz`
- Create: `backups/<timestamp>/deployed-site.bundle`
- Create: `docs/migration-report.md`

- [ ] Record the old deployment commit and remote repository state.
- [ ] Archive source files while excluding `node_modules`, `.next`, `out`, and backup output.
- [ ] Create a Git bundle from `.deploy_git`.
- [ ] Push the old production commit to `backup/pre-once-ui-<timestamp>`.
- [ ] Verify that both local backup artifacts can be listed/read.

### Task 2: Replace The Rejected Prototype With Once UI

**Files:**
- Replace: `app/`, `components/`, `lib/`, `package.json`, `package-lock.json`, `next.config.mjs`
- Create: `src/app/`, `src/components/`, `src/resources/`, `src/types/`
- Preserve: `source/`, `_config.yml`, `_config.stellar.yml`

- [ ] Add a smoke test that expects Once UI configuration and static export settings.
- [ ] Import the Magic Portfolio foundation and required attribution/license.
- [ ] Remove work, gallery, password protection, dynamic OG, and request-time features.
- [ ] Configure the root production URL and static image handling.
- [ ] Run the smoke test and a minimal production build.

### Task 3: Build The Markdown Migration Pipeline

**Files:**
- Create: `src/content/posts.ts`
- Create: `src/content/markdown.ts`
- Create: `src/content/assets.ts`
- Create: `scripts/migrate-content.mjs`
- Create: `tests/content.test.mjs`
- Create: `content/posts/*.md`
- Create: `public/posts-assets/*`

- [ ] Add failing tests for 31 posts, unique slugs, preserved fenced code, raw example handling, and valid assets.
- [ ] Implement front matter normalization and stable slug generation.
- [ ] Implement AST-based Markdown normalization without broad HTML escaping.
- [ ] Copy local assets and rewrite only resolvable local asset URLs.
- [ ] Run migration twice and verify deterministic output.
- [ ] Run content tests and inspect representative difficult posts.

### Task 4: Implement Blog Pages

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`
- Create: `src/app/archive/page.tsx`
- Create: `src/app/tags/page.tsx`
- Create: `src/app/tags/[tag]/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/components/blog/*`
- Modify: `src/resources/content.tsx`
- Modify: `src/resources/once-ui.config.ts`

- [ ] Add route generation tests for every post and tag.
- [ ] Build the article-first home page approved in the visual design.
- [ ] Build the Chinese long-form article layout and table of contents.
- [ ] Add archive, tag, tag detail, and about pages.
- [ ] Add responsive navigation, theme switching, metadata, sitemap, and RSS.
- [ ] Preserve visible Once UI / Magic Portfolio attribution.

### Task 5: Verify The Static Site

**Files:**
- Create: `scripts/audit-site.mjs`
- Create: `tests/routes.test.mjs`

- [ ] Run unit and content tests.
- [ ] Run `npm run build` and confirm all routes export.
- [ ] Audit exported HTML for missing files, broken internal links, and migration artifacts.
- [ ] Serve `out/` locally and inspect home, difficult posts, archives, tags, and about on desktop and mobile.
- [ ] Fix every discovered issue and repeat the complete verification suite.

### Task 6: Deploy With Rollback Protection

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Modify: `.gitignore`
- Modify: `README.md`
- Modify: `docs/migration-report.md`

- [ ] Initialize/connect the source repository without discarding old deployment history.
- [ ] Commit the verified source and workflow.
- [ ] Push to `main` only after the remote backup branch exists.
- [ ] Wait for GitHub Pages deployment to complete.
- [ ] Smoke test production routes, assets, CSS, and representative posts.
- [ ] Record the new commit, workflow result, production checks, and rollback command.
