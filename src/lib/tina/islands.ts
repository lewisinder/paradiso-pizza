import type { IslandRegistry } from "@tinacms/astro/experimental";
import Footer from "@/components/Footer.astro";
import Header from "@/components/Header.astro";
import HomepageContent from "@/components/tina/HomepageContent.astro";
import PrivacyContent from "@/components/tina/PrivacyContent.astro";
import UtilityPageContent from "@/components/tina/UtilityPageContent.astro";
import {
  getGoogleReviews,
  getHomepage,
  getMenu,
  getPrivacyPage,
  getSiteSettings,
  getUtilityPage,
} from "@/lib/tina/data";

type HomepageBundle = {
  home: Awaited<ReturnType<typeof getHomepage>>;
  menu: Awaited<ReturnType<typeof getMenu>>;
  reviews: Awaited<ReturnType<typeof getGoogleReviews>>;
  site: Awaited<ReturnType<typeof getSiteSettings>>;
};

type UtilityBundle = {
  page: Awaited<ReturnType<typeof getUtilityPage>>;
  site: Awaited<ReturnType<typeof getSiteSettings>>;
  kind: "not-found" | "thank-you";
};

const getHomepageBundle = async (): Promise<HomepageBundle> => {
  const [home, menu, reviews, site] = await Promise.all([
    getHomepage(true),
    getMenu(),
    getGoogleReviews(),
    getSiteSettings(),
  ]);
  return { home, menu, reviews, site };
};

const getUtilityBundle = async (kind: "not-found" | "thank-you"): Promise<UtilityBundle> => {
  const [page, site] = await Promise.all([getUtilityPage(kind, true), getSiteSettings()]);
  return { page, site, kind };
};

export const islands: IslandRegistry = {
  header: {
    fetch: () => getSiteSettings(),
    component: Header,
    wrapper: { tag: "div" },
    propsFromData: (data, params) => ({
      site: (data as Awaited<ReturnType<typeof getSiteSettings>>).data.siteSettings,
      pathname: params.get("pathname") ?? "/",
    }),
  },
  footer: {
    fetch: () => getSiteSettings(),
    component: Footer,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      site: (data as Awaited<ReturnType<typeof getSiteSettings>>).data.siteSettings,
    }),
  },
  homepage: {
    fetch: () => getHomepageBundle(),
    component: HomepageContent,
    wrapper: { tag: "div" },
    propsFromData: (data) => {
      const bundle = data as HomepageBundle;
      return {
        home: bundle.home.data.homepage,
        menu: bundle.menu.data.menu,
        reviews: bundle.reviews.data.googleReviews,
        site: bundle.site.data.siteSettings,
      };
    },
  },
  utility: {
    fetch: (_request, params) =>
      getUtilityBundle(params.get("kind") === "thank-you" ? "thank-you" : "not-found"),
    component: UtilityPageContent,
    wrapper: { tag: "div" },
    propsFromData: (data) => {
      const bundle = data as UtilityBundle;
      return {
        data: bundle.page.data.utilityPages,
        site: bundle.site.data.siteSettings,
        kind: bundle.kind,
      };
    },
  },
  privacy: {
    fetch: () => getPrivacyPage(true),
    component: PrivacyContent,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      data: (data as Awaited<ReturnType<typeof getPrivacyPage>>).data.privacyPage,
    }),
  },
};
