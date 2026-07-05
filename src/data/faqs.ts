// FAQs shown on the contact page (and anywhere else useful).
// These also feed FAQPage structured data, which can earn richer search listings.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "A question customers actually ask before getting in touch?",
    answer:
      "A plain, direct answer. No sales language - just the information the customer needs.",
  },
  {
    question: "Another common question, e.g. about pricing or timing?",
    answer: "A plain, direct answer.",
  },
  {
    question: "A third question, e.g. about service area or availability?",
    answer: "A plain, direct answer.",
  },
];
