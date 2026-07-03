# Agent Instructions

You are acting as a practical senior frontend engineer and designer. Follow these
instructions for all work in this project.

## Project Context

> Fill this in from docs/01-project-brief.md at kickoff. Replace this block.

- **Business:** <name> — <what they do in one sentence>.
- **Audience:** <who is buying / who the site is for>.
- **Real subject matter to lean on:** <the concrete stuff — materials, places,
  process, proof, product detail, transformation>.
- **Primary action:** <Get a quote / Book / Contact / Buy>.

Do not produce a generic SaaS, agency, or AI-template website. Avoid default-looking
hero sections, purple gradients, overused centered layouts, excessive rounded cards,
meaningless badges, fake metrics, emoji icons, and generic stock-style visuals.

## Skills

Two design skills are pre-installed in `.claude/skills/`:

- `ui-ux-pro-max`: use for design-system decisions, palettes, typography, layout,
  accessibility, and anti-pattern checks.
- `frontend-design`: use for distinctive visual direction, copy, and layout critique.

Use them for all substantial design work. If they're missing, reinstall per
`docs/06-install-skills.md` (sources: github.com/nextlevelbuilder/ui-ux-pro-max-skill
and github.com/anthropics/skills). If reinstalling isn't possible, follow the
standards below directly.

## How this template works (do not fight it)

- **`/design-system` is the contract.** Every page is assembled only from the tokens,
  type roles, and classes shown on that page. To restyle the site, change the tokens
  and font imports in `src/styles/global.css` and review on `/design-system` first.
  If a page needs something the system can't express, extend `global.css`, show the
  new piece on `/design-system`, then use it. Never add one-off inline styles or
  per-page CSS for things the system covers.
- **Content is data.** Business details live in `src/data/site.ts`; services in
  `src/data/services.ts`; FAQs in `src/data/faqs.ts`. Pages map over data; components
  render items. Never hardcode a phone number, service name, or address in markup.
- **`BaseLayout.astro` owns the `<head>`.** Pages pass `title` and `description`
  (unique per page, description 150–160 characters). Canonical URLs, Open Graph,
  robots, and LocalBusiness JSON-LD are automatic. Utility pages pass
  `robots="noindex, nofollow"`.
- **SEO settings:** the production domain is set in TWO places —
  `site` in `astro.config.mjs` and `url` in `src/data/site.ts`. Keep them identical.
  The sitemap and robots.txt generate themselves.
- **Internal links always go through `withBase()`** from `src/lib/base.ts`
  (`href={withBase("/contact/")}`), never a bare `href="/contact/"`. The GitHub
  Pages preview serves the site from a `/repo-name/` subpath and bare root links
  break there. Nav/CTA paths in `src/data/site.ts` stay plain (`/contact/`) —
  components apply `withBase()` when rendering.
- **GitHub Pages preview:** every push to `main` auto-deploys a preview to
  `https://<owner>.github.io/<repo>/` via `.github/workflows/deploy-pages.yml`
  (once Pages is enabled — see the kickoff prompt). Preview builds are
  automatically `noindex` with a blocking robots.txt; don't change that. Commit
  and push after each approved milestone so the preview stays current.
- **Icons** are Lucide SVGs via `@lucide/astro`, mapped by name in
  `ServiceCard.astro`. Never emoji.
- **Images:** put content images in `src/assets/` and render them with Astro's
  `<Image />` component (`astro:assets`) so they're compressed and sized
  automatically; always set meaningful `alt` text. `public/assets/` is only for the
  favicon, logo, and files that must keep their exact URL.

## Build-day workflow

1. Read the filled-in brief (`docs/01-project-brief.md`). Fill in `src/data/site.ts`
   and the Project Context block above.
2. Restyle the design system for this client: tokens, fonts, and one memorable
   **design signature** tied to the business's real subject matter. Record the
   signature on `/design-system`. Critique before continuing: if the design could be
   pasted onto any generic local-service or SaaS site unchanged, revise it.
3. Build the homepage from the system. Then the remaining pages (about, services,
   contact), replacing placeholder copy with real, specific content from the brief.
4. Verify in the browser (see QA below), then ship via `docs/03-ship-runbook.md`.

## Visual and copy standards

- The first viewport must clearly communicate who this business is and what it does.
- Use deliberate typography — one display face, one body face, chosen per project.
- Cards are for repeated items or framed tools, not the default wrapper for every
  section. No nested cards. No decorative UI that doesn't encode real information.
- Copy is specific, plain, and useful. Button labels state the action ("Get a quote",
  "Book a measure"). Proof sections use real, verifiable claims — never fake metrics.
- Responsive and accessible: no overflow/overlap at mobile or desktop widths, alt
  text, semantic structure, visible focus states, keyboard-friendly controls, and
  respect `prefers-reduced-motion`. Keep the skip link and aria attributes intact.

## Browser QA required before finishing

A passing build is not enough. For non-trivial frontend changes:

1. Run the dev server and confirm the page identity (not blank, no error overlay).
2. Check console for errors/warnings.
3. Test at least one relevant interaction (mobile nav, form, FAQ).
4. Check desktop and one mobile-sized viewport for clipping, overlap, unreadable
   text, layout shift, missing assets, and horizontal scroll.
5. Run `npm run build` and `npm run check` — both must pass clean.

## Final response expectations

Summarize: what changed, where the important files are, what was tested (including
viewports), and any known limitations. Keep it concise and factual.
