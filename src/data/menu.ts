// ─────────────────────────────────────────────────────────────────────────────
// MENU — transcribed from Paradiso's printed menu (docs/Assets). The homepage
// and menu pages render these lists; prices are shown exactly as printed.
// When the menu changes, update it here and nowhere else.
// ─────────────────────────────────────────────────────────────────────────────

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export const pizzas: MenuItem[] = [
  {
    name: "Paradiso",
    price: "$24",
    description: "San Marzano tomato, fior di latte, basil, parmesan",
  },
  {
    name: "Beatrice",
    price: "$27",
    description:
      "Lemon crème fraîche, roast mushrooms & leeks, truffle oil, rocket, pesto, parmesan",
  },
  {
    name: "Inferno",
    price: "$27",
    description:
      "San Marzano tomato, chorizo, fior di latte, smoked provolone, hot honey",
  },
  {
    name: "Virgilio",
    price: "$28",
    description: "Gorgonzola dolce, fior di latte, pecorino, parmesan, honey, pears",
  },
  {
    name: "Dante",
    price: "$29",
    description:
      "Free range pork and fennel sausage, confit garlic spread, parmesan, fior di latte, onion jam",
  },
  {
    name: "Ginevra",
    price: "$24",
    description: "Confit garlic cream, fior di latte, cheddar, parmesan",
  },
  {
    name: "Cerberus",
    price: "$28",
    description: "San Marzano tomato, fior di latte, prosciutto, rocket, parmesan",
  },
  {
    name: "Seneca",
    price: "$28",
    description: "San Marzano tomato, smoked ham, pineapple, parmesan, fior di latte",
  },
  {
    name: "Francesca V",
    price: "$26",
    description: "Roast pumpkin, green goddess, pistachio & parsley salsa",
  },
  {
    name: "Marinara",
    price: "$20",
    description: "San Marzano tomato, garlic, oregano, extra virgin olive oil",
  },
];

export const desserts: MenuItem[] = [
  {
    name: "Tiramisù",
    price: "$14",
    description: "The classic — made in house",
  },
  {
    name: "Cannoli",
    price: "$8 ea",
    description:
      "Ricotta, orange zest, pistachio & choc chips — or limoncello filling",
  },
];

export const addOns: MenuItem[] = [
  { name: "Chorizo", price: "$6" },
  { name: "Hot honey", price: "$3" },
  { name: "Prosciutto", price: "$6" },
  { name: "Pepperoni", price: "$5" },
  { name: "Smoked ham", price: "$5" },
  { name: "Pork & fennel sausage", price: "$7" },
  { name: "Gorgonzola", price: "$4.50" },
];

export const dips: MenuItem[] = [
  { name: "Roast confit garlic", price: "$5" },
  { name: "Parmesan ranch", price: "$5" },
  { name: "Russian sauce", price: "$5" },
];
