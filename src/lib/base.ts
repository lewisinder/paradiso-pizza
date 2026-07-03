// Base-path helpers. On the GitHub Pages preview the site lives under
// /<repo-name>/ instead of the domain root, so EVERY internal href and asset
// path must go through withBase(). On production and in local dev, base is
// "/" and withBase() is a no-op.

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an internal path ("/contact/") with the deploy base path. */
export const withBase = (path: string) => `${base}${path}`;

/** The current pathname with the base stripped — use for nav highlighting and canonical URLs. */
export function pathnameWithoutBase(pathname: string) {
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return (stripped.replace(/\/$/, "") || "/");
}
