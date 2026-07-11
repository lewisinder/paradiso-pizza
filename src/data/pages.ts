import notFoundContent from "@/content/pages/not-found.json";
import thankYouContent from "@/content/pages/thank-you.json";

export type UtilityPage = {
  overline: string;
  heading: string;
  message: string;
  homeButtonLabel: string;
  phoneNote?: string;
  emailNote?: string;
};

export const notFoundPage = notFoundContent as UtilityPage;
export const thankYouPage = thankYouContent as UtilityPage;
