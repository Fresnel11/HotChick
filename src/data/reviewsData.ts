export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  menuItem: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "SM",
    rating: 5,
    comment: "The crispiest chicken I've ever tasted! The OG Burger is absolutely insane. This place is a game changer.",
    date: "2 days ago",
    menuItem: "The OG Chicken Burger",
  },
  {
    id: 2,
    name: "James R.",
    avatar: "JR",
    rating: 5,
    comment: "Family Bucket was perfect for our weekend. Every piece was golden and juicy. Will definitely order again!",
    date: "1 week ago",
    menuItem: "Family Bucket (12pc)",
  },
  {
    id: 3,
    name: "Aisha K.",
    avatar: "AK",
    rating: 5,
    comment: "Best chicken wraps in town, hands down. The Spicy Caesar is chef's kiss. Fast delivery too!",
    date: "3 days ago",
    menuItem: "Spicy Caesar Wrap",
  },
  {
    id: 4,
    name: "Marcus T.",
    avatar: "MT",
    rating: 4,
    comment: "Loaded Cheese Fries are addictive. Great portion sizes and the quality is always consistent.",
    date: "5 days ago",
    menuItem: "Loaded Cheese Fries",
  },
  {
    id: 5,
    name: "Elena P.",
    avatar: "EP",
    rating: 5,
    comment: "Cookie Dough Sundae is heavenly! Perfect way to finish a meal. HotChick never disappoints.",
    date: "1 week ago",
    menuItem: "Cookie Dough Sundae",
  },
  {
    id: 6,
    name: "David L.",
    avatar: "DL",
    rating: 5,
    comment: "The Spicy Inferno Burger lives up to its name! Perfect heat level and amazing crunch. 10/10!",
    date: "4 days ago",
    menuItem: "Spicy Inferno Burger",
  },
];
