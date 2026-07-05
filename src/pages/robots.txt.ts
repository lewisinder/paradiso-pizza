import type { APIRoute } from "astro";
import { site } from "@/data/site";

// Served at /robots.txt.
// Production: allows crawling and points to the sitemap from @astrojs/sitemap.
// Preview builds: blocks all crawling - the preview is a duplicate of the real
// site and must never be indexed.
const isPreviewBuild = process.env.DEPLOY_TARGET === "preview";

export const GET: APIRoute = () => {
  const body = isPreviewBuild
    ? ["User-agent: *", "Disallow: /", ""].join("\n")
    : [
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${site.url}/sitemap-index.xml`,
        "",
      ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
