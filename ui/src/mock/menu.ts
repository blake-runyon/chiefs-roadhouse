import { Column, Formatter } from "../types/common";
import { MenuItem } from "../types/menu";

export const mockMenuItemsColumn: Column[] = [
  {
    header: 'Name',
    field: 'name',
    formatter: Formatter.STRING
  },
  {
    header: 'Price',
    field: 'price',
    formatter: Formatter.MONEY
  },
  {
    header: 'Description',
    field: 'description',
    formatter: Formatter.STRING
  },
  {
    header: 'Avaliable?',
    field: 'avaliable',
    formatter: Formatter.BOOLEAN
  },
]

export const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 9.99,
    description: "A juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a toasted bun.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/classic-cheeseburger.jpg"]
  },
  {
    id: 2,
    name: "Crispy Chicken Sandwich",
    price: 8.99,

    description: "Crispy fried chicken breast topped with lettuce, tomato, and mayonnaise, served on a brioche bun.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/crispy-chicken-sandwich.jpg"]
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 12.99,
    description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil leaves.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/margherita-pizza.jpg"]
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 7.99,
    description: "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/caesar-salad.jpg"]
  },
  {
    id: 5,
    name: "Chocolate Milkshake",
    price: 5.99,
    description: "Creamy chocolate milkshake topped with whipped cream and a cherry.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/chocolate-milkshake.jpg"]
  },
  {
    id: 6,
    name: "French Fries",
    price: 3.99,
    description: "Crispy golden fries seasoned to perfection.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/french-fries.jpg"]
  },
  {
    id: 7,
    name: "Onion Rings",
    price: 4.99,
    description: "Deep-fried battered onion rings, served with dipping sauce.",
    avaliable: false,
    businessId: 1,
    images: ["https://example.com/images/onion-rings.jpg"]
  },
  {
    id: 8,
    name: "Grilled Cheese Sandwich",
    price: 6.99,
    description: "Melted cheddar cheese between slices of buttered toast.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/grilled-cheese-sandwich.jpg"]
  },
  {
    id: 9,
    name: "Chicken Tenders",
    price: 9.99,
    description: "Crispy chicken tenders served with your choice of dipping sauce.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/chicken-tenders.jpg"]
  },
  {
    id: 10,
    name: "Mushroom Swiss Burger",
    price: 10.99,
    description: "Beef patty topped with sautéed mushrooms, Swiss cheese, lettuce, and mayonnaise.",
    avaliable: true,
    businessId: 1,
    images: ["https://example.com/images/mushroom-swiss-burger.jpg"]
  },
  {
    id: 11,
    name: "Mushroom Swiss Burger",
    price: 10.99,
    description: "Beef patty topped with sautéed mushrooms, Swiss cheese, lettuce, and mayonnaise.",
    avaliable: true,
    businessId: 2,
    images: ["https://example.com/images/mushroom-swiss-burger.jpg"]
  },
]
