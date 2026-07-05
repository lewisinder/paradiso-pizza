import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const productionSite = process.env.PUBLIC_SITE_URL ?? "https://paradisopizza.co.nz";

export default defineConfig({
  site: productionSite,
  base: "/",
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
