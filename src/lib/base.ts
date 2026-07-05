// Base-path helpers. Cloudflare Pages serves this site from the domain root, so
// base is "/" in production and local dev. Keep internal hrefs and assets going
// through withBase() so the code stays safe if a subpath preview is ever added.

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an internal path ("/contact/") with the deploy base path.
 *  Absolute URLs and same-page anchors pass through safely. */
export const withBase = (path: string) =>
  /^https?:\/\//.test(path) ? path : path.startsWith("#") ? `${base}/${path}` : `${base}${path}`;

/** The current pathname with the base stripped - use for nav highlighting and canonical URLs. */
export function pathnameWithoutBase(pathname: string) {
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return (stripped.replace(/\/$/, "") || "/");
}
