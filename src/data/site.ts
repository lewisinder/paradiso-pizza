import siteSettings from "@/content/site/settings.json";

export type NavItem = { label: string; href: string };

type SiteSettings = {
  name: string;
  legalName: string;
  tagline: string;
  url: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  areas: string[];
  orderUrl: string;
  hours: string[];
  openingHoursSpecification: {
    dayOfWeek: string | string[];
    opens: string;
    closes?: string;
  }[];
  formAccessKey: string;
  primaryCta: {
    label: string;
    href: string;
  };
  nav: NavItem[];
  social: {
    label: string;
    href: string;
  }[];
};

export const site = siteSettings as SiteSettings;
