// ─────────────────────────────────────────────────────────────────────────────
// SERVICES - repeated content lives as typed data, never hardcoded markup.
// Pages map over this array; one component renders each item.
// Adding a service = adding one entry here. This also keeps a later move
// to a CMS clean.
// ─────────────────────────────────────────────────────────────────────────────

export type Service = {
  slug: string;
  name: string;
  // One line shown on cards and in meta descriptions (aim for 150–160 chars on detail pages).
  summary: string;
  // Paragraphs for the detail page. Plain, specific, useful.
  description: string[];
  // Short bullet points: what's included, what to expect.
  includes: string[];
  // Lucide icon name - must exist in the icon map in ServiceCard.astro.
  icon: string;
};

export const services: Service[] = [
  {
    slug: "service-one",
    name: "Service One",
    summary: "One plain sentence saying what this service is and who it's for.",
    description: [
      "First paragraph: what the service is and the problem it solves, in the customer's language.",
      "Second paragraph: how it works - the process, timeframes, and what the customer needs to do.",
    ],
    includes: [
      "A concrete thing that's included",
      "Another concrete thing",
      "A third concrete thing",
    ],
    icon: "wrench",
  },
  {
    slug: "service-two",
    name: "Service Two",
    summary: "One plain sentence saying what this service is and who it's for.",
    description: [
      "First paragraph: what the service is and the problem it solves.",
      "Second paragraph: how it works and what to expect.",
    ],
    includes: ["What's included, item one", "Item two", "Item three"],
    icon: "clipboard-check",
  },
  {
    slug: "service-three",
    name: "Service Three",
    summary: "One plain sentence saying what this service is and who it's for.",
    description: [
      "First paragraph: what the service is and the problem it solves.",
      "Second paragraph: how it works and what to expect.",
    ],
    includes: ["What's included, item one", "Item two", "Item three"],
    icon: "sparkles",
  },
];
