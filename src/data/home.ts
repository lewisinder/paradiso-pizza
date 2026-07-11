import homeContent from "@/content/pages/home.json";

export type HomePhoto = {
  image: string;
  alt: string;
  caption?: string;
};

type HomeContent = {
  seo: { title: string; description?: string };
  hero: {
    overline: string;
    titleLines: string[];
    lead: string;
    menuButtonLabel: string;
    orderButtonLabel: string;
    image: string;
    imageAlt: string;
    imageCaption?: string;
  };
  featured: {
    heading: string;
    lead: string;
    orderLinkLabel: string;
    buttonLabel: string;
  };
  menuSection: {
    heading: string;
    mainTabLabel: string;
    kidsTabLabel: string;
    pizzasHeading: string;
    dessertsHeading: string;
    addOnsHeading: string;
    dipsHeading: string;
    dipsPrice?: string;
    note?: string;
    kidsMastheadSmall: string;
    kidsMastheadTitle: string;
    kidsDipsHeading: string;
    kidsDipsPrice?: string;
    kidsAddOnsHeading: string;
  };
  reviews: { overline: string; heading: string; score: string; countText: string };
  facebook: {
    overline: string;
    heading: string;
    lead: string;
    buttonLabel: string;
    fallbackLead: string;
    fallbackLinkLabel: string;
  };
  about: { heading: string; paragraphs: string[]; photos: HomePhoto[] };
  cta: {
    heading: string;
    lead: string;
    orderButtonLabel: string;
    callButtonLabel: string;
  };
};

export const home = homeContent as HomeContent;
