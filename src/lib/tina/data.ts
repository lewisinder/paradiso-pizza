import { requestWithMetadata } from "@tinacms/astro/data";
import client from "../../../tina/__generated__/client";

const primary = { priority: "primary" as const };

export const getHomepage = (isPrimary = false) =>
  requestWithMetadata(
    client.queries.homepage({ relativePath: "home.json" }),
    isPrimary ? primary : undefined,
  );

export const getMainMenu = () =>
  requestWithMetadata(client.queries.mainMenu({ relativePath: "main.json" }));

export const getKidsMenu = () =>
  requestWithMetadata(client.queries.kidsMenu({ relativePath: "kids.json" }));

export const getSiteSettings = () =>
  requestWithMetadata(client.queries.siteSettings({ relativePath: "settings.json" }));

export const getGoogleReviews = () =>
  requestWithMetadata(client.queries.googleReviews({ relativePath: "google.json" }));

export const getUtilityPage = (filename: "not-found" | "thank-you", isPrimary = false) =>
  requestWithMetadata(
    client.queries.utilityPages({ relativePath: `${filename}.json` }),
    isPrimary ? primary : undefined,
  );

export const getPrivacyPage = (isPrimary = false) =>
  requestWithMetadata(
    client.queries.privacyPage({ relativePath: "privacy.mdx" }),
    isPrimary ? primary : undefined,
  );
