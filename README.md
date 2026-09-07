# Website in a Day — Starter Template

A ready-to-build foundation for one-day client websites: **Astro (static HTML, great
for Google) → Tina visual editing → GitHub → Cloudflare Workers**, designed to be
driven end-to-end by an AI coding agent. Copy this folder, fill in the brief, paste
the kickoff prompt, and build.

## What's in the box

| Piece | What it is |
| --- | --- |
| `src/` | A complete working site skeleton: home, about, services (list + detail), contact, thank-you, 404, and a `/design-system` page |
| `src/styles/global.css` | The design system: every colour/font/spacing token and every class the site is allowed to use |
| `src/data/` | All business details and content as simple data files — the agent edits these, not scattered markup |
| `.claude/skills/` | The two design skills pre-installed: `ui-ux-pro-max` and `frontend-design` (sources + reinstall: [docs/06-install-skills.md](docs/06-install-skills.md)) |
| `.github/workflows/` | Auto-deploys every push to a Cloudflare Worker when Cloudflare secrets are configured |
| `agents.md` | Standing instructions the agent follows on every build |
| `docs/` | The build-day paperwork: brief, kickoff prompt, ship runbook, launch checklist, CMS playbook, skills guide |

SEO is wired in already: unique titles/descriptions per page, canonical URLs, Open
Graph tags, LocalBusiness + FAQ structured data, sitemap, robots.txt, and everything
renders as plain HTML that Google can read without running JavaScript.

## How to start a new project

1. **Copy this whole folder** and rename the copy for the client
   (e.g. `smiths-plumbing`). Never build inside the template itself.
2. **Open the copy in Claude Code.**
3. **Fill in [docs/01-project-brief.md](docs/01-project-brief.md)** — the answers to
   ~12 plain questions about the business. This is the only writing you have to do.
4. **Paste the kickoff prompt** from
   [docs/02-kickoff-prompt.md](docs/02-kickoff-prompt.md) to the agent. It sets up
   the GitHub repo first thing. Add the Cloudflare deploy secrets so pushes to
   `main` publish automatically.
5. Review the design system page and homepage in the preview, give feedback, iterate.
6. When it looks right, follow [docs/03-ship-runbook.md](docs/03-ship-runbook.md) to
   put the real site on Cloudflare Workers (the agent can run it for you).
7. Before telling the client it's live, run
   [docs/04-launch-checklist.md](docs/04-launch-checklist.md).

## The two rules that keep builds clean

1. **The design system page is the contract.** `/design-system` shows every token,
   type role, and component. Pages are built only from what's on that page. Change the
   look by changing tokens in `global.css` — never with one-off styles.
2. **Content lives in Tina documents.** Business details, page copy, menu items,
   reviews, footer text, opening hours, utility pages, and the privacy policy are
   backed by JSON or Markdown under `src/content/` and editable visually at `/admin/`.

## Useful commands (the agent runs these)

```bash
npm install      # once, after copying the folder
npm run dev      # local preview + Tina CMS at http://localhost:4321/admin/index.html
npm run dev:astro # Astro only, without Tina
npm run build    # production build into dist/
npm run build:cms # Tina Cloud admin build + production build, requires Tina credentials
npm run check    # type/error check
```

## Tina CMS

This site has Tina visual editing. The editable documents live in:

- `src/content/pages/home.json`
- `src/content/site/settings.json`
- `src/content/menu/main.json`
- `src/content/menu/kids.json`
- `src/content/reviews/google.json`
- `src/content/pages/{not-found,thank-you}.json`
- `src/content/privacy/privacy.mdx`

Open `/admin/`, then choose **Main menu** or **Kids menu** from the navigation.
Each opens the matching menu tab in the visual preview. Click an item on the preview
to jump directly to its name, price, description, badges, and ordering fields. The
selected menu tab is preserved while Tina refreshes the preview after edits.

Homepage is intentionally not forced as the primary form. This lets Tina keep the
document the editor selected instead of switching back to Homepage whenever the
one-page preview loads.

For local editing, run:

```bash
npm run dev
```

Then open:

```text
http://localhost:4321/admin/index.html
```

For production editing through Tina Cloud, set these GitHub Actions secrets. The
workflow builds Tina and deploys the Astro application to Cloudflare Workers:

```bash
TINA_PUBLIC_CLIENT_ID=...
TINA_TOKEN=...
TINA_SEARCH_TOKEN=...
CLOUDFLARE_API_TOKEN=...
CLOUDFLARE_ACCOUNT_ID=...
```
