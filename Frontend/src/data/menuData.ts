// ── Chicken ──────────────────────────────────────────────────────────────────
import bigHotchick from "@/assets/Chicken/unwatermarked_big_hotchick.png";
import tendersFries from "@/assets/Chicken/unwatermarked_Crispy_chicken_tenders_with_fries.png";
import chickenBucket from "@/assets/Chicken/unwatermarked_Crispy_fried_chicken_bucket.png";
import spicyWings from "@/assets/Chicken/unwatermarked_Spicy_fried_chicken_wings.png";

// ── Burgers ───────────────────────────────────────────────────────────────────
import crispyBurger from "@/assets/burger/unwatermarked_Crispychickenburger.png";
import doubleBurger from "@/assets/burger/unwatermarked_Double_Chicken_Burger.png";
import spicyBurger from "@/assets/burger/unwatermarked_Spicy_Chicken_Burger.png";

// ── Wraps ─────────────────────────────────────────────────────────────────────
import classicWrap from "@/assets/Wraps/unwatermarked_wraps.png";
import spicyWrap from "@/assets/Wraps/unwatermarked_spicy_wraps.png";

// ── Sides ─────────────────────────────────────────────────────────────────────
import nuggets from "@/assets/Sides/unwatermarked_Crispy_chicken_nuggets.png";
import fries from "@/assets/Sides/unwatermarked_Golden_crispy_french_fries.png";
import loadedFries from "@/assets/Sides/unwatermarked_Loaded_fries_with_melted_cheese_and_sauce.png";
import onionRings from "@/assets/Sides/unwatermarked_Onion_Ring.png";

// ── Jus Naturels ──────────────────────────────────────────────────────────────
import jusAnanas from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_ananas.png";
import jusBissap from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_bissap.png";
import jusCitron from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_citron.png";
import cocktailAnanasCitronMenthe from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_cocktail_anana_citron_menthe.png";
import cocktailGingembeCitronMiel from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_cocktail_gingembre_citron_miel.png";
import cocktailMangueOrange from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_cocktail_mangue_orange.png";
import cocktailPasteque from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_cocktail_pasteque_citron.png";
import jusGingembre from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_gimgembre.png";
import jusMenthe from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_menthe.png";
import jusPasteque from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_pasteque.png";
import jusTamarin from "@/assets/boisson/unwatermarked_jus_naturel_fais_maison_tamarin.png";

// ── Limonades ─────────────────────────────────────────────────────────────────
import limonadePassion from "@/assets/limonades/unwatermarked_limonade_au_fruit_de_la_passion.png";
import limonadeFraise from "@/assets/limonades/unwatermarked_limonade_fraise.png";
import limonadeNaturel from "@/assets/limonades/unwatermarked_limonade_naturel.png";

// ── Milkshakes ────────────────────────────────────────────────────────────────
import milkshakeBanane from "@/assets/millkshake/milkshake_banane.jpg";
import milkshakeCaramel from "@/assets/millkshake/milkshake_caramel.jpg";
import milkshakeChocolat from "@/assets/millkshake/milkshake_chocolat.png";
import milkshakeFraise from "@/assets/millkshake/milkshake_fraise.png";
import milkshakeOreo from "@/assets/millkshake/milkshake_oreo.jpg";
import milkshakeVanille from "@/assets/millkshake/milkshake_vanille.png";

// ── Desserts ──────────────────────────────────────────────────────────────────
import brownie from "@/assets/Desserts/unwatermarked_Brownie.png";
import iceCream from "@/assets/Desserts/unwatermarked_Ice_Cream.png";
import donuts from "@/assets/Desserts/unwatermarked_donuts.png";
import fruitsCup from "@/assets/Desserts/unwatermarked_fruits_cup.png";
import pancake from "@/assets/Desserts/unwatermarked_pancake.png";

// ── Boissons de Marques ───────────────────────────────────────────────────────────
import fanta from "@/assets/boissons_de_marques/unwatermarked_Fanta.png";
import cocaZero from "@/assets/boissons_de_marques/unwatermarked_coca_cola_zero.png";
import cocaCola from "@/assets/boissons_de_marques/unwatermarked_coco_cola.png";
import iceTea from "@/assets/boissons_de_marques/unwatermarked_ice_tea_lipton.png";
import maltaGuinness from "@/assets/boissons_de_marques/unwatermarked_malta_guinness.png";
import monster from "@/assets/boissons_de_marques/unwatermarked_monster.png";
import pepsi from "@/assets/boissons_de_marques/unwatermarked_pepsi.png";
import redBull from "@/assets/boissons_de_marques/unwatermarked_red_bull.png";
import schweppes from "@/assets/boissons_de_marques/unwatermarked_schweppes.png";
import sprite from "@/assets/boissons_de_marques/unwatermarked_sprite.png";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const categories = [
  "All",
  "Chicken",
  "Burgers",
  "Wraps",
  "Sides",
  "Jus Naturels",
  "Limonades",
  "Milkshakes",
  "Boissons de Marques",
  "Desserts",
];

export const menuItems: MenuItem[] = [
  // ── Chicken ──────────────────────────────────────────────────────────────
  { id: 1, name: "Big HotChick", description: "Notre pièce maîtresse — un poulet entier ultra-croustillant mariné 24h et frit à la perfection.", price: 4500, rating: 4.9, image: bigHotchick, category: "Chicken" },
  { id: 2, name: "Crispy Tenders & Fries", description: "Tenders dorés panés à la main, servis avec des frites croustillantes et notre sauce signature.", price: 3500, rating: 4.7, image: tendersFries, category: "Chicken" },
  { id: 3, name: "Family Bucket (12pcs)", description: "12 pièces de poulet croustillant doré, idéales pour partager en famille.", price: 8500, rating: 4.8, image: chickenBucket, category: "Chicken" },
  { id: 4, name: "Spicy Wings", description: "Ailes de poulet nappées d'une sauce épicée cayenne-miel, grillées pour un croustillant parfait.", price: 3000, rating: 4.6, image: spicyWings, category: "Chicken" },

  // ── Burgers ───────────────────────────────────────────────────────────────
  { id: 5, name: "Crispy Chicken Burger", description: "Filet de poulet croustillant, laitue fraîche, cornichons et notre sauce crémeuse HotChick.", price: 2500, rating: 4.8, image: crispyBurger, category: "Burgers" },
  { id: 6, name: "Spicy Chicken Burger", description: "Burger de poulet enflammé avec jalapeños, cheddar pimenté et mayo sriracha.", price: 2800, rating: 4.7, image: spicyBurger, category: "Burgers" },
  { id: 7, name: "Double Chicken Burger", description: "Deux filets croustillants superposés avec fromage fondu, bacon et sauce signature.", price: 3500, rating: 4.9, image: doubleBurger, category: "Burgers" },

  // ── Wraps ─────────────────────────────────────────────────────────────────
  { id: 8, name: "Classic Wrap", description: "Lamelles de poulet croustillantes enroulées avec légumes frais et sauce ranch dans une galette chaude.", price: 2000, rating: 4.5, image: classicWrap, category: "Wraps" },
  { id: 9, name: "Spicy Wrap", description: "Poulet épicé, romaine, parmesan et sauce caesar crémeuse dans une galette chaude.", price: 2300, rating: 4.6, image: spicyWrap, category: "Wraps" },

  // ── Sides ─────────────────────────────────────────────────────────────────
  { id: 10, name: "Chicken Nuggets (6pcs)", description: "Nuggets de poulet croustillants, parfaits pour accompagner votre repas.", price: 1500, rating: 4.4, image: nuggets, category: "Sides" },
  { id: 11, name: "Crispy Fries", description: "Frites dorées, parfaitement salées — le compagnon idéal.", price: 1000, rating: 4.5, image: fries, category: "Sides" },
  { id: 12, name: "Loaded Fries", description: "Nos frites croustillantes noyées sous du cheddar fondu, sauce signature et persil frais.", price: 1800, rating: 4.8, image: loadedFries, category: "Sides" },
  { id: 13, name: "Onion Rings", description: "Rondelles d'oignon enrobées d'une chapelure épicée et frites à la perfection.", price: 1200, rating: 4.3, image: onionRings, category: "Sides" },

  // ── Jus Naturels ─────────────────────────────────────────────────────────
  { id: 14, name: "Jus d'Ananas", description: "Jus d'ananas frais pressé maison, sucré naturellement et rafraîchissant.", price: 800, rating: 4.6, image: jusAnanas, category: "Jus Naturels" },
  { id: 15, name: "Jus de Bissap", description: "Infusion d'hibiscus maison, légèrement sucrée et profondément parfumée.", price: 700, rating: 4.7, image: jusBissap, category: "Jus Naturels" },
  { id: 16, name: "Jus de Citron", description: "Citron pressé maison, équilibré entre acidité et douceur, servi frais.", price: 700, rating: 4.4, image: jusCitron, category: "Jus Naturels" },
  { id: 17, name: "Cocktail Ananas-Citron-Menthe", description: "Alliance rafraîchissante d'ananas, citron et menthe fraîche.", price: 1000, rating: 4.8, image: cocktailAnanasCitronMenthe, category: "Jus Naturels" },
  { id: 18, name: "Cocktail Gingembre-Citron-Miel", description: "Tonique naturel au gingembre, adouci au miel et au citron frais.", price: 1000, rating: 4.9, image: cocktailGingembeCitronMiel, category: "Jus Naturels" },
  { id: 19, name: "Cocktail Mangue-Orange", description: "Fusion tropicale de mangue et d'orange fraîchement pressées.", price: 1000, rating: 4.7, image: cocktailMangueOrange, category: "Jus Naturels" },
  { id: 20, name: "Cocktail Pastèque-Citron", description: "Pastèque juteuse et citron frais pour une boisson ultra-hydratante.", price: 1000, rating: 4.5, image: cocktailPasteque, category: "Jus Naturels" },
  { id: 21, name: "Jus de Gingembre", description: "Jus de gingembre frais, légèrement épicé et tonifiant.", price: 800, rating: 4.6, image: jusGingembre, category: "Jus Naturels" },
  { id: 22, name: "Jus de Menthe", description: "Infusion de menthe fraîche, glacée et ultra-désaltérante.", price: 700, rating: 4.3, image: jusMenthe, category: "Jus Naturels" },
  { id: 23, name: "Jus de Pastèque", description: "Pastèque fraîchement mixée, légère et naturellement sucrée.", price: 800, rating: 4.7, image: jusPasteque, category: "Jus Naturels" },
  { id: 24, name: "Jus de Tamarin", description: "Jus de tamarin acidulé préparé maison, riche en saveurs authentiques.", price: 800, rating: 4.5, image: jusTamarin, category: "Jus Naturels" },

  // ── Limonades ─────────────────────────────────────────────────────────────
  { id: 25, name: "Limonade Fruit de la Passion", description: "Limonade pétillante au fruit de la passion, aromatique et rafraîchissante.", price: 1000, rating: 4.8, image: limonadePassion, category: "Limonades" },
  { id: 26, name: "Limonade Fraise", description: "Limonade fraîche à la fraise, légèrement sucrée et débordante de saveur.", price: 1000, rating: 4.7, image: limonadeFraise, category: "Limonades" },
  { id: 27, name: "Limonade Naturelle", description: "Limonade classique maison, citronnée, sucrée et parfaitement équilibrée.", price: 800, rating: 4.5, image: limonadeNaturel, category: "Limonades" },

  // ── Milkshakes ────────────────────────────────────────────────────────────
  { id: 28, name: "Milkshake Banane", description: "Milkshake onctueux à la banane fraîche, crémeux et réconfortant.", price: 1500, rating: 4.6, image: milkshakeBanane, category: "Milkshakes" },
  { id: 29, name: "Milkshake Caramel", description: "Milkshake au caramel fondant, riche en douceur et en gourmandise.", price: 1500, rating: 4.7, image: milkshakeCaramel, category: "Milkshakes" },
  { id: 30, name: "Milkshake Chocolat", description: "Milkshake au chocolat intense, épais et irrésistiblement crémeux.", price: 1500, rating: 4.9, image: milkshakeChocolat, category: "Milkshakes" },
  { id: 31, name: "Milkshake Fraise", description: "Milkshake à la fraise fraîche, fruité, léger et délicieusement sucré.", price: 1500, rating: 4.6, image: milkshakeFraise, category: "Milkshakes" },
  { id: 32, name: "Milkshake Oreo", description: "Milkshake vanille avec éclats de biscuits Oreo, une gourmandise absolue.", price: 1800, rating: 4.8, image: milkshakeOreo, category: "Milkshakes" },
  { id: 33, name: "Milkshake Vanille", description: "Milkshake à la vanille pure, doux, crémeux et classique.", price: 1500, rating: 4.4, image: milkshakeVanille, category: "Milkshakes" },

  // ── Desserts ──────────────────────────────────────────────────────────────
  { id: 34, name: "Brownie", description: "Brownie fondant au chocolat avec un cœur tiède et gluant, servi chaud.", price: 1200, rating: 4.8, image: brownie, category: "Desserts" },
  { id: 35, name: "Ice Cream", description: "Glace onctueuse à la vanille, simplement parfaite pour finir en beauté.", price: 1000, rating: 4.5, image: iceCream, category: "Desserts" },
  { id: 36, name: "Donuts", description: "Donuts moelleux glacés au chocolat ou au sucre, irrésistibles.", price: 1000, rating: 4.4, image: donuts, category: "Desserts" },
  { id: 37, name: "Fruits Cup", description: "Coupe de fruits frais de saison, légère et naturellement sucrée.", price: 1200, rating: 4.6, image: fruitsCup, category: "Desserts" },
  { id: 38, name: "Pancakes", description: "Pancakes moelleux nappés de sirop d'érable et de beurre fondant.", price: 1500, rating: 4.7, image: pancake, category: "Desserts" },

  // ── Boissons de Marques ──────────────────────────────────────────────────
  { id: 39, name: "Coca-Cola", description: "Le classique intemporel : un Coca-Cola bien glacé pour accompagner votre repas.", price: 600, rating: 4.7, image: cocaCola, category: "Boissons de Marques" },
  { id: 40, name: "Coca-Cola Zéro", description: "Le goût du Coca-Cola sans le sucre — savoureux et rafraîchissant sans compromis.", price: 600, rating: 4.5, image: cocaZero, category: "Boissons de Marques" },
  { id: 41, name: "Fanta", description: "Fanta orange pétillant, sucré et rafraîchissant — un incontournable pour toute la famille.", price: 600, rating: 4.6, image: fanta, category: "Boissons de Marques" },
  { id: 42, name: "Sprite", description: "Sprite citron-citron vert, vif et pétillant — la boisson parfaite pour désaltérer.", price: 600, rating: 4.5, image: sprite, category: "Boissons de Marques" },
  { id: 43, name: "Pepsi", description: "Pepsi Cola bien glacé, sa saveur unique et pétillante pour une pause rafraîchissante.", price: 600, rating: 4.4, image: pepsi, category: "Boissons de Marques" },
  { id: 44, name: "Schweppes", description: "Schweppes Tonic pétillant et légèrement amer — idéal pour accompagner vos plats épicés.", price: 700, rating: 4.5, image: schweppes, category: "Boissons de Marques" },
  { id: 45, name: "Ice Tea Lipton", description: "Ice Tea Lipton pêche, légèrement sucré et infiniment rafraîchissant.", price: 700, rating: 4.6, image: iceTea, category: "Boissons de Marques" },
  { id: 46, name: "Malta Guinness", description: "Malta Guinness, la boisson maltée sans alcool, riche en vitamines et en énergie.", price: 700, rating: 4.7, image: maltaGuinness, category: "Boissons de Marques" },
  { id: 47, name: "Monster Energy", description: "Monster Energy, la boisson énergisante pour booster votre journée — format canette.", price: 1200, rating: 4.5, image: monster, category: "Boissons de Marques" },
  { id: 48, name: "Red Bull", description: "Red Bull, la boisson qui vous donne des ailes — idéale pour rester au top de votre énergie.", price: 1200, rating: 4.6, image: redBull, category: "Boissons de Marques" },
];
