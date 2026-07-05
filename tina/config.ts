import { defineConfig } from "tinacms";

type TinaListItem = {
  name?: string;
  label?: string;
};

const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_REF_NAME ||
  "main";

const singleDocumentActions = {
  create: false,
  delete: false,
};

const listLabel =
  (fallback: string) =>
  (item: TinaListItem | undefined): { label: string } => ({
    label: item?.name || item?.label || fallback,
  });

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
  {
    type: "string",
    name: "dietary",
    label: "Dietary marker",
    options: ["VG", "V"],
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

const pizzaFields: any[] = [
  {
    type: "object",
    name: "pizzas",
    label: "Main pizzas",
    list: true,
    ui: {
      itemProps: listLabel("Pizza"),
    },
    fields: menuItemFields,
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
          { type: "string", name: "tagline", label: "Tagline" },
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
        ],
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
        fields: pizzaFields,
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
    ],
  },
});
