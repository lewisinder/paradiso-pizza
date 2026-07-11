import menu from "@/content/menu/menu.json";

export type MenuBadge = "VG" | "V" | "GFO";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  orderUrl?: string;
  badges?: MenuBadge[];
  featured?: boolean;
};

export type LegendEntry = { code: string; label: string };

type MenuContent = {
  legend: LegendEntry[];
  pizzas: MenuItem[];
  desserts: MenuItem[];
  addOns: MenuItem[];
  dips: MenuItem[];
  kidsPizzas: MenuItem[];
  kidsDips: MenuItem[];
  kidsAddOns: MenuItem[];
};

const menuContent = menu as MenuContent;

export const legend = menuContent.legend;
export const pizzas = menuContent.pizzas;
export const desserts = menuContent.desserts;
export const addOns = menuContent.addOns;
export const dips = menuContent.dips;
export const kidsPizzas = menuContent.kidsPizzas;
export const kidsDips = menuContent.kidsDips;
export const kidsAddOns = menuContent.kidsAddOns;

const legendLabels = new Map(legend.map(({ code, label }) => [code, label]));

// Screen readers get the meaning ("vegetarian"), sighted users the code ("VG").
export const badgeLabel = (code: string) => legendLabels.get(code) ?? code;
