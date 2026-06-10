# Blog Migration Report

## Target

- Production: `https://ljl17378.github.io`
- Repository: `git@github.com:LJL17378/LJL17378.github.io.git`
- Migration date: 2026-06-11

## Old Production Backup

- Old production commit: `fd48464540a405012106d59e5ff0bb00943256eb`
- Remote backup branch: `backup/pre-once-ui-20260611-025007`
- Local backup directory: `/Volumes/formac/个人/myBlog-backups/20260611-025007`
- Source archive SHA-256: `7f8901fb06e7efa39b8f2eb7b54ba2acc34a9479eaa729b93ed142b0181d42fa`
- Deployment bundle SHA-256: `394ea162f020056df5e84b0c1b194c9c80688b4be1ec3daeb8a969f698b95f6e`

The archive was listed successfully. The Git bundle passed `git bundle verify` and records the complete old deployment history.

## Migrated Site

- Source posts: 31
- Local post assets: 8
- Static routes generated: 53
- Exported HTML files audited: 51
- Broken local routes/assets: 0
- Browser checks: desktop home, desktop article, mobile home, and mobile 12,000+ line LeetCode article
- Long article check: 152 headings, 154 code blocks, 93 images, 3 tables, 0 broken images, 0 horizontal overflow

## Dependency Audit

`npm audit --omit=dev` reports three moderate findings inherited through the current Next.js / Once UI dependency chain. npm reports no available fix. The site is exported as static files and does not run a Next.js server in production.

## Rollback

Restore the old site commit to `main`:

```bash
git push --force-with-lease origin \
  backup/pre-once-ui-20260611-025007:main
```

Or restore the complete old history from the verified local bundle:

```bash
git clone \
  /Volumes/formac/个人/myBlog-backups/20260611-025007/deployed-site.bundle \
  restored-old-blog
```
