# Tina visual CMS

TinaCMS is installed and configured for visual editing. Editors open `/admin/`,
select a document, and click content in the site preview to jump to the matching
field. Structured fields are also available in the left-hand form.

## Editable content

- Homepage copy, imagery, calls to action, feature cards, and section headings
- Full menu categories and items
- Business name, contact details, social links, navigation, and opening hours
- Google review summary and selected reviews
- Footer wording and links
- Thank-you and 404 pages
- Privacy policy and its SEO metadata

The source documents are under `src/content/`. Tina commits production edits back
to GitHub, and a push to `main` deploys the new version through Cloudflare Workers.

## Local editing

Run `npm run dev`, then open `http://localhost:4321/admin/index.html`. Local mode
writes edits directly to the content files. Use `npm run build:local` for a build
that does not require Tina Cloud.

## Production requirements

Tina Cloud needs `TINA_PUBLIC_CLIENT_ID`, `TINA_TOKEN`, and `TINA_SEARCH_TOKEN`.
GitHub Actions also needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
Cloudflare Workers is required because the visual preview uses a same-origin server
route; Cloudflare Pages' static Astro adapter does not provide that route.
