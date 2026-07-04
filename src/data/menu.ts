// ─────────────────────────────────────────────────────────────────────────────
// MENU — transcribed from Paradiso's printed menu (docs/Assets). The homepage
// and menu pages render these lists; prices are shown exactly as printed.
// When the menu changes, update it here and nowhere else.
// ─────────────────────────────────────────────────────────────────────────────

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  orderUrl?: string;
};

export const pizzas: MenuItem[] = [
  {
    name: "Paradiso",
    price: "$24",
    description: "San Marzano tomato, fior di latte, basil, parmesan",
    orderUrl:
      "https://venues.heybustle.com/NZ/paradiso-pizza/e4793e42-aa2e-4c53-a71b-2aa941c384cd/dbfdebcf-137c-45ac-84c7-71596c9fb5ba/new",
  },
  {
    name: "Beatrice",
    price: "$27",
    description:
      "Lemon crème fraîche, roast mushrooms & leeks, truffle oil, rocket, pesto, parmesan",
    orderUrl:
      "https://venues.heybustle.com/NZ/paradiso-pizza/e4793e42-aa2e-4c53-a71b-2aa941c384cd/b9bac62c-c44d-4065-a9ba-bf0dde0b6d36/new",
  },
  {
    name: "Inferno",
    price: "$27",
    description:
      "San Marzano tomato, chorizo, fior di latte, smoked provolone, hot honey",
    orderUrl:
      "https://venues.heybustle.com/NZ/paradiso-pizza/e4793e42-aa2e-4c53-a71b-2aa941c384cd/265c8c0d-a800-4f8a-9d6e-5b060b93eb85/new",
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
    orderUrl:
      "https://venues.heybustle.com/NZ/paradiso-pizza/e4793e42-aa2e-4c53-a71b-2aa941c384cd/b2d0b708-4db5-41a0-9d49-dd40f91bff73/new",
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
  {
    name: "Acciughina",
    price: "$29",
    description:
      "Burnt peppers & goat cheese cream, pancetta, olives, fior di latte, basil pesto, lime zest & anchovies",
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

export const kidsPizzas: MenuItem[] = [
  {
    name: "Margherita",
    price: "$15",
    description: "Tomato, fior di latte, basil, Parmesan",
  },
  {
    name: "Pepperoni",
    price: "$17",
    description: "Pepperoni, fior di latte, tomato, Parmesan",
  },
  {
    name: "Just Cheese",
    price: "$15",
    description: "mozzarella, Parmesan, cream base",
  },
  {
    name: "Garlic & Cheese",
    price: "$15",
    description: "mozzarella, Parmesan, garlic butter base",
  },
  {
    name: "Hawaiian",
    price: "$17",
    description: "Pineapple, smoked ham, fior di latte, tomato base",
  },
];

export const kidsDips: MenuItem[] = [
  { name: "Roast confit garlic", price: "$5" },
  { name: "Parmesan ranch", price: "$5" },
  { name: "Hot honey ranch", price: "$5" },
  { name: "Russian sauce", price: "$5" },
];

export const kidsAddOns: MenuItem[] = [
  { name: "Chorizo", price: "$6" },
  { name: "Prosciutto", price: "$6" },
  { name: "Pepperoni", price: "$6" },
];
