import kidsMenu from "@/content/menu/kids.json";
import mainMenu from "@/content/menu/main.json";

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
};

type KidsMenuContent = {
  kidsPizzas: MenuItem[];
  kidsDips: MenuItem[];
  kidsAddOns: MenuItem[];
};

const menuContent = mainMenu as MenuContent;
const kidsMenuContent = kidsMenu as KidsMenuContent;

export const legend = menuContent.legend;
export const pizzas = menuContent.pizzas;
export const desserts = menuContent.desserts;
export const addOns = menuContent.addOns;
export const dips = menuContent.dips;
export const kidsPizzas = kidsMenuContent.kidsPizzas;
export const kidsDips = kidsMenuContent.kidsDips;
export const kidsAddOns = kidsMenuContent.kidsAddOns;

const legendLabels = new Map(legend.map(({ code, label }) => [code, label]));

// Screen readers get the meaning ("vegetarian"), sighted users the code ("VG").
export const badgeLabel = (code: string) => legendLabels.get(code) ?? code;
