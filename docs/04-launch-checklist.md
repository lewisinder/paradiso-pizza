# Launch Checklist

Run through this before telling the client the site is live. The agent can verify
most of it — paste this file and ask it to check everything and report back.

## Content & correctness

- [ ] No placeholder text anywhere ("Business Name", "Service One", "Town or city",
      example.com, 021 000 0000…). Search the whole `src/` folder to be sure.
- [ ] Phone number and email are correct and clickable (`tel:` / `mailto:` links).
- [ ] Every service in `src/data/services.ts` is real and correctly described.
- [ ] Legal name and service areas in the footer are right.
- [ ] Favicon replaced with the client's mark (`public/assets/favicon.svg`).

## SEO

- [ ] Production domain set identically in `astro.config.mjs` (`site`) and
      `src/data/site.ts` (`url`).
- [ ] Every page has a unique title and a 150–160 character meta description.
- [ ] `https://<domain>/robots.txt` loads and points to the sitemap.
- [ ] `https://<domain>/sitemap-index.xml` loads and lists only real pages
      (no design-system or thank-you).
- [ ] View page source on the homepage: the actual content (headings, services,
      phone number) is visible in the raw HTML — this is what Google reads.
- [ ] Structured data is valid: test the homepage at
      https://search.google.com/test/rich-results
- [ ] Sitemap submitted in Google Search Console.

## Forms

- [ ] Web3Forms access key created with the **client's** email and set in
      `src/data/site.ts` (no "REPLACE_WITH" placeholder left).
- [ ] Test enquiry submitted on the **live** site → arrives in the client's inbox
      (first one may land in spam — mark it "not spam").
- [ ] Thank-you page shows after submitting.

## Quality (the agent verifies in a browser)

- [ ] No console errors on any page.
- [ ] Mobile (375px) and desktop: no clipping, overlap, or horizontal scroll.
- [ ] Mobile nav opens, closes, and every link works.
- [ ] All internal links resolve (no 404s); 404 page itself renders.
- [ ] Images have alt text; no missing-image icons anywhere.
- [ ] Keyboard test: tab through the homepage — skip link appears first, focus is
      always visible, the form is reachable and submittable.
- [ ] Lighthouse (Chrome DevTools or https://pagespeed.web.dev) on the live URL:
      aim for 90+ on Performance, Accessibility, Best Practices, and SEO. A static
      Astro site scoring below that usually means an oversized image.

## Handover

- [ ] Client has the live URL and knows enquiries arrive by email.
- [ ] You have noted the repo name and the host (Netlify site / Cloudflare Pages
      project) in your records.
- [ ] Content changes are agreed to go through you (or plan the CMS —
      see `05-add-a-cms-later.md`).
