# Once UI Blog Migration Design

## Goal

Replace the current Hexo site and the rejected custom Next.js prototype with a polished static Next.js blog based on Magic Portfolio / Once UI, then deploy it to `https://ljl17378.github.io` only after migration and deployment checks pass.

## Constraints

- The site is a personal, non-commercial blog.
- The footer must retain a short Once UI / Magic Portfolio attribution.
- The original Hexo source under `source/` is the canonical migration input.
- The current generated site and repository history must be recoverable.
- GitHub Pages must serve the site at the domain root without a repository base path.
- No server-only feature may remain in the production build.

## Visual Design

- Preserve Magic Portfolio's dark, restrained glass surfaces, spacing system, responsive components, and design tokens.
- Replace the portfolio-first information architecture with an article-first technical blog.
- Home page: introduction, author card, featured recent article, recent article grid, and tag entry points.
- Post page: readable Chinese typography, constrained line length, metadata, tags, syntax-highlighted code, images, tables, heading anchors, and desktop table of contents.
- Supporting pages: archive, tags, individual tag listings, and about.
- Light/dark theme support remains available, with dark mode as the primary presentation.

## Content Architecture

- Read all 31 Markdown files directly from `source/_posts`.
- Parse YAML front matter with `gray-matter`.
- Compile Markdown through unified/remark/rehype AST plugins rather than line-based regular expressions.
- Treat HTML, Vue templates, JSX-like examples, and script/style samples as code when they are examples, without executing them.
- Copy all local article images to stable public URLs and validate every local reference.
- Preserve dates, titles, tags, descriptions, and stable slugs. Generate descriptions only when a source description is absent.

## Static Deployment

- Use Next.js App Router with `output: "export"` and trailing slashes.
- Disable or replace Magic Portfolio features that require a server, including dynamic Open Graph generation and request-time APIs.
- Publish the `out/` directory with the official GitHub Pages Actions workflow.
- Configure the production URL as `https://ljl17378.github.io`.

## Backup And Rollback

Before replacement:

1. Create a timestamped archive of the complete local project, excluding dependency/build caches.
2. Create a Git bundle of the currently deployed `.deploy_git` history.
3. Clone or connect to `LJL17378/LJL17378.github.io` and push the old production commit to a timestamped backup branch.
4. Record commit hashes and backup paths in a migration report.

Rollback consists of restoring the old production commit to `main` or republishing the archived generated site.

## Verification

- Automated parser tests cover front matter, post count, slug uniqueness, Markdown constructs, and asset resolution.
- All 31 posts compile.
- Static export succeeds with no server-only routes.
- Link and asset audit reports no missing local files or broken internal routes.
- Browser verification covers desktop and mobile home, post, archive, tags, and about pages.
- Production smoke tests run against `https://ljl17378.github.io` after deployment.
- The old site is not overwritten until all pre-deployment checks pass.

## Acceptance Criteria

- Exactly 31 source posts are present and reachable.
- Code fences, headings, lists, tables, blockquotes, links, and images render correctly.
- No raw migration escape artifacts appear in article output.
- The site is responsive and readable in Chinese.
- GitHub Pages deployment completes successfully.
- A tested rollback path and backup record exist.
