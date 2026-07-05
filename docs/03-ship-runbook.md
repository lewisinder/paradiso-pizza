# Ship Runbook — Git → GitHub → Netlify or Cloudflare Pages

Run this once the design system + pages are approved. The agent can execute all of
it — paste this file to the agent, replace `<repo-name>` with the client's project
name, and tell it which host you're using. The template works identically on both;
pick per client (Cloudflare Pages has no bandwidth cap on the free tier; Netlify's
free tier caps at 100GB/month — both are far more than a local business site needs).

## 0. Prerequisites (one-time on your machine)

- GitHub CLI logged in: `gh auth status` (if not: `gh auth login`)
- An account with your chosen host: netlify.com or dash.cloudflare.com (free tiers)

## 1. Set the real domain and the form key

Before the first deploy:

- Set the production domain in **both** places (they must match):
  - `astro.config.mjs` → `site: "https://www.clientdomain.co.nz"`
  - `src/data/site.ts` → `url: "https://www.clientdomain.co.nz"`
  - If the domain isn't decided yet, use the URL the host gives you in step 3 and
    update both places later when the real domain is connected.
- Set up the contact form: create a free access key at
  [web3forms.com](https://web3forms.com) using the **client's email address**
  (enquiries will be emailed straight there) and paste it into `formAccessKey` in
  `src/data/site.ts`.

## 2. Git + GitHub

Normally already done at kickoff (the build-day flow creates the repo up front so
the GitHub Pages preview tracks progress). If not:

```bash
git init
git add -A
git commit -m "Initial build: design system + site"
gh repo create <repo-name> --public --source=. --remote=origin --push
```

The GitHub Pages preview at `https://<owner>.github.io/<repo-name>/` keeps
auto-updating on every push after launch too — it doubles as an always-current
backup of the site, and it's permanently hidden from Google, so it never competes
with the real domain.

## 3a. Deploy — Netlify

**Dashboard:** app.netlify.com → Add new site → Import from GitHub → pick the repo.
Build command and publish folder are read automatically from `netlify.toml`
(`npm run build` → `dist`). Deploy.

**Or CLI:**

```bash
npm i -g netlify-cli
netlify login
netlify init        # link the GitHub repo; accept build = "npm run build", publish = "dist"
netlify deploy --build --prod
```

## 3b. Deploy — Cloudflare Pages

**Dashboard:** dash.cloudflare.com → Workers & Pages → Create → Pages →
Connect to Git → pick the repo. Choose the **Astro** framework preset, or set build
command `npm run build` and output directory `dist`. Deploy.

**Or direct upload from GitHub Actions:**

1. Create a Cloudflare API token with Cloudflare Pages edit access.
2. Add these repository secrets in GitHub:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
3. Push to `main`, or run the `Deploy to Cloudflare Pages` workflow manually.

The workflow builds with `npm run build` and uploads `dist/` to the configured
Cloudflare Pages project.

## 4. Test the contact form (don't skip)

On the **live** site (the form redirects to the production thank-you page, so
localhost won't behave fully):

1. Submit a test enquiry.
2. Confirm it arrives in the client's email inbox (check spam the first time —
   and mark it "not spam" if it's there).
3. Confirm the thank-you page showed after submitting.

## 5. Custom domain

- **Netlify:** Domain settings → add the domain, follow the DNS instructions.
- **Cloudflare Pages:** the site → Custom domains → add the domain. If the domain's
  DNS is already on Cloudflare (common), this is one click.

HTTPS is automatic on both. Then confirm the domain in `astro.config.mjs` and
`src/data/site.ts` matches, commit, and push.

## 6. Google

- Submit the site at [Google Search Console](https://search.google.com/search-console)
  (verify the domain, then submit `https://<domain>/sitemap-index.xml`).
- If the business is local, create/claim the **Google Business Profile** and link the
  new site — for local trades this drives more enquiries than the website itself.

Then run `docs/04-launch-checklist.md` before telling the client it's live.
