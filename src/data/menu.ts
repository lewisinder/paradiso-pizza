import menu from "@/content/menu/menu.json";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  orderUrl?: string;
  dietary?: "VG" | "V";
};

type MenuContent = {
  pizzas: MenuItem[];
  desserts: MenuItem[];
  addOns: MenuItem[];
  dips: MenuItem[];
  kidsPizzas: MenuItem[];
  kidsDips: MenuItem[];
  kidsAddOns: MenuItem[];
};

const menuContent = menu as MenuContent;

export const pizzas = menuContent.pizzas;
export const desserts = menuContent.desserts;
export const addOns = menuContent.addOns;
export const dips = menuContent.dips;
export const kidsPizzas = menuContent.kidsPizzas;
export const kidsDips = menuContent.kidsDips;
export const kidsAddOns = menuContent.kidsAddOns;
