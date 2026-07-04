import { site } from "@/data/site";
import type { Faq } from "@/data/faqs";
import { addOns, desserts, dips, pizzas } from "@/data/menu";

const menuItems = [...pizzas, ...desserts, ...addOns, ...dips];

// Restaurant structured data (JSON-LD), rendered on every page by BaseLayout.
// Google reads this to understand who the business is, where it operates,
// and what it offers.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    servesCuisine: ["Pizza", "Italian"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.areas.map((area) => ({ "@type": "Place", name: area })),
    openingHours: site.hours,
    hasMenu: {
      "@type": "Menu",
      name: "Paradiso Pizza menu",
      hasMenuItem: menuItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "NZD",
        },
      })),
    },
    acceptsReservations: false,
    ...(site.email ? { email: site.email } : {}),
    ...(site.social.length > 0 ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

// FAQPage structured data for pages that render FAQs.
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
