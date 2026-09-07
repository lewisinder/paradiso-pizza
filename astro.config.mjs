import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tina from "@tinacms/astro/integration";
import { tinaAdminDevRedirect } from "@tinacms/astro/vite";

const productionSite = process.env.PUBLIC_SITE_URL ?? "https://paradisopizza.co.nz";

export default defineConfig({
  site: productionSite,
  base: "/",
  output: "static",
  adapter: cloudflare(),
  integrations: [tina()],
  // The sitemap is served from src/pages/sitemap.xml.ts at /sitemap.xml.
  // Astro can ignore a harness-injected PORT; this keeps in-editor previews working.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : {},
  vite: {
    plugins: [tinaAdminDevRedirect()],
    ssr: {
      noExternal: ["@tinacms/astro", "@tinacms/bridge"],
    },
  },
});
