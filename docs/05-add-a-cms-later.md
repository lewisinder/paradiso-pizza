# Adding a CMS Later (TinaCMS)

The template deliberately ships **without** a CMS: content lives in typed data files
(`src/data/*.ts`), which keeps the one-day build fast and the repo clean. Most small
clients are happy for content changes to go through you — each change is one quick
agent edit plus a git push.

Add a CMS only when a client genuinely wants to edit content themselves.

## Lessons from the Advanced Carpets build (read before starting)

- **Do the CMS as a separate project phase after launch**, never during the one-day
  build. It roughly doubles the moving parts (React, admin app, cloud credentials).
- **TinaCloud credentials block deploys.** The host's build fails until
  `TINA_CLIENT_ID` and `TINA_TOKEN` (from app.tina.io) are set as environment
  variables on the host (Netlify or Cloudflare Pages settings). Create the TinaCloud
  project and set the variables *before* pushing the Tina changes.
- The dev/build commands change (`tinacms dev -c "astro dev"` wraps the site), so
  `package.json` scripts and `netlify.toml` need updating together.

## The shape of the work (prompt for the agent)

> Add TinaCMS to this Astro site so the client can edit page content:
> 1. Install `tinacms`, `@tinacms/cli`, and `@tinacms/astro`; add the Tina
>    integration to `astro.config.mjs`.
> 2. Move the editable content into Tina collections backed by JSON/Markdown files
>    under `content/` — mirror the existing shapes in `src/data/site.ts`,
>    `services.ts`, and `faqs.ts`, and re-point those modules at the Tina content so
>    components don't change.
> 3. Wrap the dev/build scripts (`tinacms dev -c ...` / `tinacms build`) and update
>    the host's build settings (`netlify.toml` / Cloudflare Pages build command)
>    accordingly.
> 4. Tell me exactly which environment variables to set on the host and what to set
>    up at app.tina.io before I push.

Because all content already lives in data files with clear types, this migration is
mechanical — that's why the template keeps content out of the markup.

## Alternatives worth considering

- **Decap CMS** — simpler, file-based, no cloud account, but a dated editing UI.
- **Just keep doing it yourself** — for a $-a-month retainer, you make the edits.
  Many clients prefer this, and it keeps you in the relationship.
