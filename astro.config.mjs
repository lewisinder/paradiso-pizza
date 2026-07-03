import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Two build targets:
// - Production (default): served from the client's real domain root.
//   `site` must be the client's real production domain before launch — it
//   drives canonical URLs, the sitemap, robots.txt, and structured data.
// - GitHub Pages preview (DEPLOY_TARGET=github-pages, set by the workflow in
//   .github/workflows/deploy-pages.yml): served from
//   https://<owner>.github.io/<repo>/ as a live preview + backup while
//   building. Preview builds are automatically noindex (see BaseLayout).
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "owner/repo").split("/");

export default defineConfig({
  site: isGithubPages ? `https://${owner}.github.io` : "https://www.example.com",
  base: isGithubPages ? `/${repo}/` : "/",
  output: "static",
  integrations: [
    sitemap({
      // Utility pages stay out of the sitemap.
      filter: (page) => !page.includes("/design-system") && !page.includes("/thank-you"),
    }),
  ],
  // Astro can ignore a harness-injected PORT; this keeps in-editor previews working.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : {},
});
