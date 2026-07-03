// ─────────────────────────────────────────────────────────────────────────────
// SITE DATA — the single source of truth for business details.
// Every component reads from here. Filled in from docs/01-project-brief.md.
// ─────────────────────────────────────────────────────────────────────────────

export type NavItem = { label: string; href: string };

export const site = {
  // Identity
  name: "Paradiso Pizza",
  legalName: "Paradiso Pizza",
  tagline: "Pizza · Cannoli · Tiramisù, made in the heart of Titirangi.",
  // No domain yet — set the real domain here AND in astro.config.mjs at launch
  // (see docs/03-ship-runbook.md). Until then the GitHub Pages preview is the
  // only public URL and it's noindex, so this placeholder is harmless.
  url: "https://www.example.com",
  // Default meta description for pages that don't set their own (150–160 chars).
  description:
    "Paradiso Pizza makes pizza, cannoli and tiramisù in Titirangi village, West Auckland. Ten pizzas named from Dante, rated 5.0 from 71 Google reviews.",

  // Contact — the brief supplied phone only; leave email empty until the
  // client provides one (components skip it when empty).
  email: "",
  phone: "+64211507740", // international format, used in links and structured data
  phoneDisplay: "021 150 7740", // human-readable, shown on the page

  // Location (used in structured data and the footer)
  address: {
    locality: "Titirangi",
    region: "Auckland",
    country: "NZ",
  },
  areas: ["Titirangi", "West Auckland"],

  // Online ordering (HeyBustle) — the primary action everywhere on the site.
  orderUrl: "https://venues.heybustle.com/NZ/paradiso-pizza",

  // Contact form (Web3Forms): create a free access key at web3forms.com using
  // the CLIENT'S email address — enquiries go straight to that inbox.
  formAccessKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",

  // The one action the site drives visitors toward
  primaryCta: {
    label: "Order now",
    href: "https://venues.heybustle.com/NZ/paradiso-pizza",
  },

  // Header navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavItem[],

  // Social profiles (used in footer and structured data).
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/p/Paradiso-Pizza-61561287820379/",
    },
  ] as { label: string; href: string }[],
};
