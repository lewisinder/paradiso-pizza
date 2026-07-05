import type { APIRoute } from "astro";
import { site } from "@/data/site";

// Served at /sitemap.xml.
// Auto-discovers every static page under src/pages/ so new pages are included
// without touching this file. Utility / noindex pages are excluded so they
// never get submitted to search engines.
const EXCLUDE = new Set(["/404", "/design-system", "/thank-you"]);

const pageModules = import.meta.glob("./**/*.astro");

// "./index.astro" -> "/", "./privacy.astro" -> "/privacy/"
function toRoute(filePath: string): string {
  let route = filePath.replace(/^\.\//, "/").replace(/\.astro$/, "");
  route = route.replace(/\/index$/, "/");
  if (route === "") route = "/";
  if (route !== "/" && !route.endsWith("/")) route += "/";
  return route;
}

export const GET: APIRoute = (context) => {
  const base = (context.site?.href ?? site.url).replace(/\/$/, "");

  const routes = Array.from(
    new Set(Object.keys(pageModules).map(toRoute)),
  )
    .filter((route) => !EXCLUDE.has(route.replace(/\/$/, "") || "/"))
    .sort();

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => `  <url><loc>${base}${route}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
