# Website in a Day — Starter Template

A ready-to-build foundation for one-day client websites: **Astro (static HTML, great
for Google) → GitHub → Netlify or Cloudflare Pages** (pick per client — the template
works identically on both), designed to be driven end-to-end by an AI coding agent.
Copy this folder, fill in the brief, paste the kickoff prompt, and build.

## What's in the box

| Piece | What it is |
| --- | --- |
| `src/` | A complete working site skeleton: home, about, services (list + detail), contact, thank-you, 404, and a `/design-system` page |
| `src/styles/global.css` | The design system: every colour/font/spacing token and every class the site is allowed to use |
| `src/data/` | All business details and content as simple data files — the agent edits these, not scattered markup |
| `.claude/skills/` | The two design skills pre-installed: `ui-ux-pro-max` and `frontend-design` (sources + reinstall: [docs/06-install-skills.md](docs/06-install-skills.md)) |
| `.github/workflows/` | Auto-deploys every push to a GitHub Pages preview — watch progress live, doubles as a backup |
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
   the GitHub repo first thing, so from the first milestone onwards you can watch
   the site take shape at `https://<your-username>.github.io/<project-name>/` —
   that preview updates on every push, acts as an off-machine backup, and is
   automatically hidden from Google.
5. Review the design system page and homepage in the preview, give feedback, iterate.
6. When it looks right, follow [docs/03-ship-runbook.md](docs/03-ship-runbook.md) to
   put the real site on Netlify or Cloudflare Pages (the agent can run it for you).
7. Before telling the client it's live, run
   [docs/04-launch-checklist.md](docs/04-launch-checklist.md).

## The two rules that keep builds clean

1. **The design system page is the contract.** `/design-system` shows every token,
   type role, and component. Pages are built only from what's on that page. Change the
   look by changing tokens in `global.css` — never with one-off styles.
2. **Content lives in data files.** Business details in `src/data/site.ts`, services
   in `src/data/services.ts`, FAQs in `src/data/faqs.ts`. Changing content never means
   hunting through page markup — and it keeps the door open for a CMS later
   (see [docs/05-add-a-cms-later.md](docs/05-add-a-cms-later.md)).

## Useful commands (the agent runs these)

```bash
npm install      # once, after copying the folder
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
npm run check    # type/error check
```
