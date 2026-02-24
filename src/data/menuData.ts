import chickenTenders from "@/assets/chicken-tenders.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenWrap from "@/assets/chicken-wrap.jpg";
import fries from "@/assets/fries.jpg";
import drink from "@/assets/drink.jpg";
import dessert from "@/assets/dessert.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const categories = ["All", "Chicken", "Burgers", "Wraps", "Fries", "Drinks", "Desserts"];

export const menuItems: MenuItem[] = [
  { id: 1, name: "Classic Crispy Tenders", description: "Hand-breaded golden chicken tenders served with our signature dipping sauce.", price: 9.99, image: chickenTenders, category: "Chicken" },
  { id: 2, name: "Spicy Hot Tenders", description: "Our tenders tossed in a fiery cayenne glaze for those who crave the heat.", price: 10.99, image: chickenTenders, category: "Chicken" },
  { id: 3, name: "Family Bucket (12pc)", description: "12 pieces of golden crispy chicken, perfect for sharing with the family.", price: 24.99, image: chickenTenders, category: "Chicken" },
  { id: 4, name: "The OG Chicken Burger", description: "Crispy chicken fillet, fresh lettuce, pickles and our creamy HotChick sauce.", price: 11.99, image: chickenBurger, category: "Burgers" },
  { id: 5, name: "Spicy Inferno Burger", description: "A fiery chicken burger with jalapeños, pepper jack cheese and sriracha mayo.", price: 12.99, image: chickenBurger, category: "Burgers" },
  { id: 6, name: "Double Stack Burger", description: "Two crispy fillets stacked high with cheese, bacon and signature sauce.", price: 14.99, image: chickenBurger, category: "Burgers" },
  { id: 7, name: "Classic Chicken Wrap", description: "Crispy chicken strips wrapped with fresh veggies and ranch dressing.", price: 9.49, image: chickenWrap, category: "Wraps" },
  { id: 8, name: "Spicy Caesar Wrap", description: "Spiced chicken with romaine, parmesan and creamy caesar dressing in a warm tortilla.", price: 10.49, image: chickenWrap, category: "Wraps" },
  { id: 9, name: "Crispy Fries", description: "Golden, perfectly salted fries. The ultimate sidekick.", price: 3.99, image: fries, category: "Fries" },
  { id: 10, name: "Loaded Cheese Fries", description: "Our crispy fries smothered in melted cheddar and bacon bits.", price: 5.99, image: fries, category: "Fries" },
  { id: 11, name: "Classic Cola", description: "Ice-cold refreshing cola to complement your meal.", price: 2.49, image: drink, category: "Drinks" },
  { id: 12, name: "Fresh Lemonade", description: "Freshly squeezed lemonade with a hint of mint.", price: 3.49, image: drink, category: "Drinks" },
  { id: 13, name: "Chocolate Brownie", description: "Rich, fudgy brownie with a warm gooey center.", price: 4.99, image: dessert, category: "Desserts" },
  { id: 14, name: "Cookie Dough Sundae", description: "Vanilla ice cream topped with cookie dough chunks and chocolate drizzle.", price: 5.99, image: dessert, category: "Desserts" },
];
