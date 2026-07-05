import { defineConfig } from "astro/config";

const productionSite = process.env.PUBLIC_SITE_URL ?? "https://paradisopizza.co.nz";

export default defineConfig({
  site: productionSite,
  base: "/",
  output: "static",
  // The sitemap is served from src/pages/sitemap.xml.ts at /sitemap.xml.
  // Astro can ignore a harness-injected PORT; this keeps in-editor previews working.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : {},
});
