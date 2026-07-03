// ─────────────────────────────────────────────────────────────────────────────
// SITE DATA — the single source of truth for business details.
// Every component reads from here. On build day, fill this in from the
// project brief (docs/01-project-brief.md) before touching anything else.
// ─────────────────────────────────────────────────────────────────────────────

export type NavItem = { label: string; href: string };

export const site = {
  // Identity
  name: "Business Name",
  legalName: "Business Name Ltd",
  tagline: "What this business does, in one plain sentence.",
  // Must match `site` in astro.config.mjs — the client's real domain at launch.
  url: "https://www.example.com",
  // Default meta description for pages that don't set their own (150–160 chars).
  description:
    "One factual sentence about the business, what it offers, and where it operates. Search engines show this under the page title.",

  // Contact
  email: "hello@example.com",
  phone: "+64210000000", // international format, used in links and structured data
  phoneDisplay: "021 000 0000", // human-readable, shown on the page

  // Location / service area (used in structured data and the footer)
  address: {
    locality: "Town or city",
    region: "Region",
    country: "NZ",
  },
  areas: ["Service area one", "Service area two", "Service area three"],

  // Contact form (Web3Forms): create a free access key at web3forms.com using
  // the CLIENT'S email address — enquiries go straight to that inbox. The key
  // is designed to be public in the HTML; it only lets people send mail to
  // that one address.
  formAccessKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",

  // The one action the site drives visitors toward
  primaryCta: { label: "Get in touch", href: "/contact/" },

  // Header navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavItem[],

  // Social profiles (used in footer and structured data). Leave empty if none.
  social: [] as { label: string; href: string }[],
};
