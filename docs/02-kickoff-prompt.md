# Kickoff Prompt

Paste everything below the line to the agent after filling in the brief. It assumes
the agent is running in this project folder.

---

Read `agents.md` and the filled-in brief in `docs/01-project-brief.md`, then build
the first pass of this client's website from this template. Use the pre-installed
`ui-ux-pro-max` and `frontend-design` skills for all design decisions.

Work in this order:

1. **Setup.** Run `npm install` if `node_modules` is missing. Fill in
   `src/data/site.ts` from the brief (business details, nav, service areas, primary
   call-to-action) and complete the Project Context block at the top of `agents.md`.
2. **GitHub repo + live preview.** Create the repo now so every milestone is backed
   up and visible online as we go:
   ```bash
   git init && git add -A && git commit -m "Template baseline"
   gh repo create <project-name> --public --source=. --remote=origin --push
   gh api repos/{owner}/{repo}/pages -X POST -f build_type=workflow
   ```
   (Repo must be **public** for free GitHub Pages; it contains no secrets. If `gh api`
   fails, tell me to enable it manually: repo Settings → Pages → Source: "GitHub
   Actions".) The included workflow then publishes every push to
   `https://<owner>.github.io/<project-name>/` — give me that link. Commit and push
   after each milestone below so I can watch progress there. The preview is
   automatically hidden from Google.
3. **Design system first.** Restyle `src/styles/global.css` for this client: colour
   tokens (rename them to brand-meaningful names, keep one token per role), the two
   font roles, radius/shadow/spacing, and one memorable **design signature** tied to
   the business's real subject matter. Update `/design-system` to reflect it and
   record the signature there. Then critique it against the brief — if the design
   could be pasted onto any generic local-service or SaaS site unchanged, revise
   before continuing.
4. **Homepage.** Rebuild the homepage content from the brief using only the design
   system: hero that instantly says who this is, real services from
   `src/data/services.ts` (rewrite the placeholder entries with the client's actual
   services), a proof section with the brief's real proof points, and the closing
   CTA band.
5. **Remaining pages.** About, services index, service detail content, contact page
   FAQs (`src/data/faqs.ts`) — all with real, specific copy. Every page gets a unique
   title and a 150–160 character meta description.
6. **Verify.** Browser QA per `agents.md` (desktop + mobile width, console clean,
   one interaction tested), then `npm run build` and `npm run check` — both clean.
   Push, and confirm the GitHub Pages preview updated and its links work.

Show me the design system page and homepage in the local preview when they're ready
for review, and keep the GitHub Pages preview current after each approved milestone.
Don't deploy to the production host yet — that's a separate step
(`docs/03-ship-runbook.md`).
