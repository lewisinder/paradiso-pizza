import { defineConfig } from "tinacms";

type TinaListItem = {
  name?: string;
  label?: string;
  code?: string;
  caption?: string;
  question?: string;
};

const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_REF_NAME ||
  "main";
const tinaBasePath =
  process.env.DEPLOY_TARGET === "github-pages" ? "paradiso-pizza" : undefined;

const singleDocumentActions = {
  create: false,
  delete: false,
};

const listLabel =
  (fallback: string) =>
  (item: TinaListItem | undefined): { label: string } => ({
    label: item?.name || item?.label || item?.code || item?.caption || fallback,
  });

// Badge codes offered on menu items. What each code means (and the legend
// shown on the menu) is edited in the Menu collection's "Dietary legend".
const badgeOptions = [
  { value: "VG", label: "VG — vegetarian" },
  { value: "V", label: "V — vegan" },
  { value: "GFO", label: "GFO — gluten free option" },
];

const badgesField = {
  type: "string",
  name: "badges",
  label: "Dietary badges",
  list: true,
  options: badgeOptions,
  description:
    "Tick every badge that applies. Edit what the codes mean in “Dietary legend”.",
};

const menuItemFields: any[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    type: "string",
    name: "price",
    label: "Price",
    required: true,
  },
  {
    type: "string",
    name: "description",
    label: "Description",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "orderUrl",
    label: "Order URL",
  },
  badgesField,
];

const pizzaItemFields: any[] = [
  ...menuItemFields,
  {
    type: "boolean",
    name: "featured",
    label: "Featured on homepage",
    description: "Show this pizza in the “favourites” cards near the top of the page.",
  },
];

const simpleMenuItemFields: any[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    type: "string",
    name: "price",
    label: "Price",
    required: true,
  },
];

const menuFields: any[] = [
  {
    type: "object",
    name: "legend",
    label: "Dietary legend",
    list: true,
    description: "Explains the badge codes; shown above the pizza list.",
    ui: {
      itemProps: listLabel("Legend entry"),
    },
    fields: [
      { type: "string", name: "code", label: "Code (e.g. VG)", required: true },
      { type: "string", name: "label", label: "Meaning (e.g. vegetarian)", required: true },
    ],
  },
  {
    type: "object",
    name: "pizzas",
    label: "Main pizzas",
    list: true,
    ui: {
      itemProps: listLabel("Pizza"),
    },
    fields: pizzaItemFields,
  },
  {
    type: "object",
    name: "desserts",
    label: "Desserts",
    list: true,
    ui: {
      itemProps: listLabel("Dessert"),
    },
    fields: menuItemFields,
  },
  {
    type: "object",
    name: "addOns",
    label: "Add-ons",
    list: true,
    ui: {
      itemProps: listLabel("Add-on"),
    },
    fields: simpleMenuItemFields,
  },
  {
    type: "object",
    name: "dips",
    label: "Dips",
    list: true,
    ui: {
      itemProps: listLabel("Dip"),
    },
    fields: simpleMenuItemFields,
  },
  {
    type: "object",
    name: "kidsPizzas",
    label: "Kids pizzas",
    list: true,
    ui: {
      itemProps: listLabel("Kids pizza"),
    },
    fields: menuItemFields,
  },
  {
    type: "object",
    name: "kidsDips",
    label: "Kids dips",
    list: true,
    ui: {
      itemProps: listLabel("Kids dip"),
    },
    fields: simpleMenuItemFields,
  },
  {
    type: "object",
    name: "kidsAddOns",
    label: "Kids add-ons",
    list: true,
    ui: {
      itemProps: listLabel("Kids add-on"),
    },
    fields: simpleMenuItemFields,
  },
];

const homepageFields: any[] = [
  {
    type: "object",
    name: "seo",
    label: "Search snippet (SEO)",
    fields: [
      { type: "string", name: "title", label: "Browser tab / search title" },
      {
        type: "string",
        name: "description",
        label: "Search description",
        description:
          "Optional. Leave empty to use the meta description from Site settings.",
        ui: { component: "textarea" },
      },
    ],
  },
  {
    type: "object",
    name: "hero",
    label: "Top of page (hero)",
    fields: [
      { type: "string", name: "overline", label: "Small word above the title" },
      {
        type: "string",
        name: "titleLines",
        label: "Big scrawled title (one line per entry)",
        list: true,
      },
      {
        type: "string",
        name: "lead",
        label: "Intro sentence",
        ui: { component: "textarea" },
      },
      { type: "string", name: "menuButtonLabel", label: "Menu button label" },
      { type: "string", name: "orderButtonLabel", label: "Order button label" },
      { type: "image", name: "image", label: "Hero picture" },
      { type: "string", name: "imageAlt", label: "Hero picture description (alt text)" },
      { type: "string", name: "imageCaption", label: "Hero picture caption" },
    ],
  },
  {
    type: "object",
    name: "featured",
    label: "Favourites section",
    description: "Pick which pizzas appear here on each pizza in the Menu collection.",
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "lead", label: "Subheading" },
      { type: "string", name: "orderLinkLabel", label: "Order link label (on each card)" },
      { type: "string", name: "buttonLabel", label: "Button label" },
    ],
  },
  {
    type: "object",
    name: "menuSection",
    label: "Menu section",
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "mainTabLabel", label: "Main menu tab label" },
      { type: "string", name: "kidsTabLabel", label: "Kids menu tab label" },
      { type: "string", name: "pizzasHeading", label: "Pizza column heading" },
      { type: "string", name: "dessertsHeading", label: "Desserts heading" },
      { type: "string", name: "addOnsHeading", label: "Add-ons heading" },
      { type: "string", name: "dipsHeading", label: "Dips heading" },
      { type: "string", name: "dipsPrice", label: "Dips price (shown next to heading)" },
      {
        type: "string",
        name: "note",
        label: "Menu footnote",
        description: "Each line shows on its own line.",
        ui: { component: "textarea" },
      },
      { type: "string", name: "kidsMastheadSmall", label: "Kids sheet small masthead" },
      { type: "string", name: "kidsMastheadTitle", label: "Kids sheet title" },
      { type: "string", name: "kidsDipsHeading", label: "Kids dips heading" },
      { type: "string", name: "kidsDipsPrice", label: "Kids dips price" },
      { type: "string", name: "kidsAddOnsHeading", label: "Kids add-ons heading" },
    ],
  },
  {
    type: "object",
    name: "reviews",
    label: "Reviews section",
    fields: [
      { type: "string", name: "overline", label: "Small word above the heading" },
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "score", label: "Rating score (e.g. 5.0)" },
      { type: "string", name: "countText", label: "Rating caption (e.g. based on 71 reviews)" },
    ],
  },
  {
    type: "object",
    name: "facebook",
    label: "Facebook section",
    fields: [
      { type: "string", name: "overline", label: "Small word above the heading" },
      { type: "string", name: "heading", label: "Heading" },
      {
        type: "string",
        name: "lead",
        label: "Intro sentence",
        ui: { component: "textarea" },
      },
      { type: "string", name: "buttonLabel", label: "Button label" },
      {
        type: "string",
        name: "fallbackLead",
        label: "Fallback text (before the link, shown if the feed is blocked)",
      },
      { type: "string", name: "fallbackLinkLabel", label: "Fallback link label" },
    ],
  },
  {
    type: "object",
    name: "about",
    label: "About section",
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      {
        type: "string",
        name: "paragraphs",
        label: "Paragraphs",
        list: true,
        ui: { component: "textarea" },
      },
      {
        type: "object",
        name: "photos",
        label: "Photos",
        list: true,
        ui: {
          itemProps: listLabel("Photo"),
        },
        fields: [
          { type: "image", name: "image", label: "Photo" },
          { type: "string", name: "alt", label: "Photo description (alt text)" },
          { type: "string", name: "caption", label: "Caption" },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "cta",
    label: "Order call-to-action (bottom of page)",
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      {
        type: "string",
        name: "lead",
        label: "Intro sentence",
        ui: { component: "textarea" },
      },
      { type: "string", name: "orderButtonLabel", label: "Order button label" },
      {
        type: "string",
        name: "callButtonLabel",
        label: "Call button label (phone number is added automatically)",
      },
    ],
  },
];

const utilityPageFields: any[] = [
  { type: "string", name: "overline", label: "Small word above the heading" },
  { type: "string", name: "heading", label: "Heading" },
  {
    type: "string",
    name: "message",
    label: "Message",
    ui: { component: "textarea" },
  },
  { type: "string", name: "homeButtonLabel", label: "Homepage button label" },
  {
    type: "string",
    name: "phoneNote",
    label: "Phone note (a clickable phone number follows this text)",
  },
  {
    type: "string",
    name: "emailNote",
    label: "Email note (a clickable email address follows this text)",
  },
];

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  search: process.env.TINA_SEARCH_TOKEN
    ? {
        tina: {
          indexerToken: process.env.TINA_SEARCH_TOKEN,
        },
      }
    : undefined,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: tinaBasePath,
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "src/content/pages",
        format: "json",
        match: {
          include: "home",
        },
        ui: {
          allowedActions: singleDocumentActions,
        },
        fields: homepageFields,
      },
      {
        name: "menu",
        label: "Menu",
        path: "src/content/menu",
        format: "json",
        match: {
          include: "menu",
        },
        ui: {
          allowedActions: singleDocumentActions,
        },
        fields: menuFields,
      },
      {
        name: "siteSettings",
        label: "Site settings",
        path: "src/content/site",
        format: "json",
        match: {
          include: "settings",
        },
        ui: {
          allowedActions: singleDocumentActions,
        },
        fields: [
          { type: "string", name: "name", label: "Site name", required: true },
          { type: "string", name: "legalName", label: "Legal name" },
          { type: "string", name: "tagline", label: "Tagline (also shown in the footer)" },
          {
            type: "string",
            name: "description",
            label: "Meta description",
            ui: {
              component: "textarea",
            },
          },
          { type: "string", name: "url", label: "Production URL" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "phone", label: "Phone link value" },
          { type: "string", name: "phoneDisplay", label: "Phone display" },
          { type: "string", name: "orderUrl", label: "Main order URL" },
          { type: "string", name: "formAccessKey", label: "Web3Forms access key" },
          {
            type: "string",
            name: "areas",
            label: "Areas served",
            list: true,
          },
          {
            type: "string",
            name: "hours",
            label: "Opening hours",
            list: true,
          },
          {
            type: "object",
            name: "address",
            label: "Address",
            fields: [
              { type: "string", name: "street", label: "Street" },
              { type: "string", name: "locality", label: "Locality" },
              { type: "string", name: "region", label: "Region" },
              { type: "string", name: "postalCode", label: "Postcode" },
              { type: "string", name: "country", label: "Country" },
            ],
          },
          {
            type: "object",
            name: "primaryCta",
            label: "Primary call to action",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "nav",
            label: "Header navigation",
            list: true,
            ui: {
              itemProps: listLabel("Nav item"),
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social links",
            list: true,
            ui: {
              itemProps: listLabel("Social link"),
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "findUsHeading", label: "“Find us” column heading" },
              { type: "string", name: "hoursHeading", label: "“Hours” column heading" },
              { type: "string", name: "contactHeading", label: "“Contact” column heading" },
              { type: "string", name: "orderLinkLabel", label: "Order link label" },
              { type: "string", name: "bottomNote", label: "Bottom note (after the © line)" },
            ],
          },
        ],
      },
      {
        name: "googleReviews",
        label: "Google reviews",
        path: "src/content/reviews",
        format: "json",
        match: {
          include: "google",
        },
        ui: {
          allowedActions: singleDocumentActions,
        },
        fields: [
          {
            type: "object",
            name: "reviews",
            label: "Reviews",
            list: true,
            ui: {
              itemProps: listLabel("Review"),
            },
            fields: [
              { type: "string", name: "name", label: "First name", required: true },
              {
                type: "string",
                name: "review",
                label: "Review text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "color",
                label: "Initial colour",
                options: ["blue", "red", "yellow", "green"],
              },
            ],
          },
        ],
      },
      {
        name: "utilityPages",
        label: "Utility pages (404 & thank you)",
        path: "src/content/pages",
        format: "json",
        match: {
          include: "{not-found,thank-you}",
        },
        ui: {
          allowedActions: singleDocumentActions,
        },
        fields: utilityPageFields,
      },
    ],
  },
});
