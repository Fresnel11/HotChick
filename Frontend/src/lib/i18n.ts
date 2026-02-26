import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    fr: {
        translation: {
            nav: {
                menu: "Menu",
                cart: "Panier",
                locations: "Nos points de vente",
                contact: "Contact"
            },
            hero: {
                title: "CROUSTILLANT À",
                titleAccent: "L'EXTÉRIEUR.",
                subtitle: "JUTEUX",
                subtitleEnd: " À L'INTÉRIEUR.",
                description: "Perfection dorée, panée à la main. Élu restaurant de poulet numéro 1 — découvrez la différence.",
                orderNow: "COMMANDER",
                viewMenu: "VOIR LE MENU",
                badge: "POULET CROUSTILLANT PREMIUM",
                drinkBadge: "FRAÎCHEUR NATURELLE",
                drinkTitle: "FRAÎCHEUR",
                drinkTitleAccent: "INSTANTANÉE.",
                drinkSubtitle: "DÉCOUVREZ",
                drinkSubtitleEnd: " NOS JUS NATURELS.",
                drinkDescription: "Des ingrédients frais, des saveurs locales. Le compagnon parfait pour votre poulet croustillant."
            },
            stats: {
                rating: "Note moyenne",
                customers: "Clients satisfaits",
                locations: "Restaurants",
                best: "Meilleur Poulet 2025"
            },
            popular: {
                badge: "LES FAVORIS",
                title: "LES PLUS POPULAIRES",
                description: "Les plats que nos clients adorent. Goûtez-les et vous comprendrez pourquoi.",
                seeAll: "VOIR TOUT LE MENU"
            },
            cta: {
                title: "FAIM ? COMMANDEZ MAINTENANT.",
                description: "Évitez la file. Faites-vous livrer votre poulet croustillant chaud et frais.",
                order: "COMMANDER"
            },
            footer: {
                description: "Poulet croustillant premium préparé avec amour. Élu restaurant de poulet #1 — chaque bouchée est une expérience.",
                links: "LIENS RAPIDES",
                contact: "CONTACT",
                hours: "HORAIRES",
                rights: "Tous droits réservés.",
                crafted: "Conçu avec 🔥 et amour",
                address: "123 Rue du Croustillant, Ville des Saveurs",
                monFri: "Lun – Ven : 11h00 – 23h00",
                satSun: "Sam – Dim : 10h00 – 00h00"
            },
            testimonials: {
                badge: "CE QUE LES GENS DISENT",
                title: "AIMÉ PAR DES ",
                titleAccent: "MILLIERS",
                description: "Ne vous contentez pas de nous croire sur parole — écoutez notre communauté d'amateurs de poulet.",
                review1: "Le poulet le plus croustillant que j'aie jamais goûté ! L'OG Burger est absolument dément. Cet endroit change la donne.",
                review2: "Le Family Bucket était parfait pour notre week-end. Chaque morceau était doré et juteux. Je recommanderai à coup sûr !",
                review3: "Les meilleurs wraps au poulet de la ville, sans aucun doute. Le Spicy Caesar est un pur délice. Livraison rapide en plus !",
                review4: "Les Loaded Cheese Fries sont addictives. Les portions sont généreuses et la qualité est toujours constante.",
                review5: "Le Cookie Dough Sundae est paradisiaque ! Le moyen idéal de finir un repas. HotChick ne déçoit jamais.",
                review6: "Le Spicy Inferno Burger porte bien son nom ! Niveau de piment parfait et croquant incroyable. 10/10 !",
                daysAgo: "il y a {{count}} jours",
                weeksAgo: "il y a {{count}} semaines",
                aDayAgo: "hier",
                aWeekAgo: "il y a 1 semaine"
            },
            menu: {
                categories: {
                    all: "Tous",
                    chicken: "Poulet",
                    burgers: "Burgers",
                    wraps: "Wraps",
                    sides: "Accompagnements",
                    jus_naturels: "Jus Naturels",
                    limonades: "Limonades",
                    milkshakes: "Milkshakes",
                    boissons_de_marques: "Boissons de Marques",
                    desserts: "Desserts"
                },
                sortBy: "Trier par",
                sortDefault: "Par défaut",
                sortNameAsc: "Nom (A → Z)",
                sortPriceAsc: "Prix croissant",
                sortPriceDesc: "Prix décroissant",
                searchPlaceholder: "Rechercher un plat…",
                noResults: "Aucun résultat pour cette recherche.",
                // Chicken
                item_1: { name: "Big HotChick", desc: "Notre pièce maîtresse — un poulet entier ultra-croustillant mariné 24h et frit à la perfection." },
                item_2: { name: "Crispy Tenders & Frites", desc: "Tenders dorés panés à la main, servis avec des frites croustillantes et notre sauce signature." },
                item_3: { name: "Family Bucket (12pcs)", desc: "12 pièces de poulet croustillant doré, idéales pour partager en famille." },
                item_4: { name: "Spicy Wings", desc: "Ailes de poulet nappées d'une sauce épicée cayenne-miel, grillées pour un croustillant parfait." },
                // Burgers
                item_5: { name: "Crispy Chicken Burger", desc: "Filet de poulet croustillant, laitue fraîche, cornichons et notre sauce crémeuse HotChick." },
                item_6: { name: "Spicy Chicken Burger", desc: "Burger de poulet enflammé avec jalapeños, cheddar pimenté et mayo sriracha." },
                item_7: { name: "Double Chicken Burger", desc: "Deux filets croustillants superposés avec fromage fondu, bacon et sauce signature." },
                // Wraps
                item_8: { name: "Classic Wrap", desc: "Lamelles de poulet croustillantes avec légumes frais et sauce ranch dans une galette chaude." },
                item_9: { name: "Spicy Wrap", desc: "Poulet épicé, romaine, parmesan et sauce caesar crémeuse dans une galette chaude." },
                // Sides
                item_10: { name: "Chicken Nuggets (6pcs)", desc: "Nuggets de poulet croustillants, parfaits pour accompagner votre repas." },
                item_11: { name: "Frites Croustillantes", desc: "Frites dorées parfaitement salées — le compagnon idéal." },
                item_12: { name: "Loaded Fries", desc: "Nos frites croustillantes noyées sous du cheddar fondu, sauce signature et persil frais." },
                item_13: { name: "Onion Rings", desc: "Rondelles d'oignon enrobées d'une chapelure épicée et frites à la perfection." },
                // Jus Naturels
                item_14: { name: "Jus d'Ananas", desc: "Jus d'ananas frais pressé maison, sucré naturellement et rafraîchissant." },
                item_15: { name: "Jus de Bissap", desc: "Infusion d'hibiscus maison, légèrement sucrée et profondément parfumée." },
                item_16: { name: "Jus de Citron", desc: "Citron pressé maison, équilibré entre acidité et douceur, servi frais." },
                item_17: { name: "Cocktail Ananas-Citron-Menthe", desc: "Alliance rafraîchissante d'ananas, citron et menthe fraîche." },
                item_18: { name: "Cocktail Gingembre-Citron-Miel", desc: "Tonique naturel au gingembre, adouci au miel et au citron frais." },
                item_19: { name: "Cocktail Mangue-Orange", desc: "Fusion tropicale de mangue et d'orange fraîchement pressées." },
                item_20: { name: "Cocktail Pastèque-Citron", desc: "Pastèque juteuse et citron frais pour une boisson ultra-hydratante." },
                item_21: { name: "Jus de Gingembre", desc: "Jus de gingembre frais, légèrement épicé et tonifiant." },
                item_22: { name: "Jus de Menthe", desc: "Infusion de menthe fraîche, glacée et ultra-désaltérante." },
                item_23: { name: "Jus de Pastèque", desc: "Pastèque fraîchement mixée, légère et naturellement sucrée." },
                item_24: { name: "Jus de Tamarin", desc: "Jus de tamarin acidulé préparé maison, riche en saveurs authentiques." },
                // Limonades
                item_25: { name: "Limonade Fruit de la Passion", desc: "Limonade pétillante au fruit de la passion, aromatique et rafraîchissante." },
                item_26: { name: "Limonade Fraise", desc: "Limonade fraîche à la fraise, légèrement sucrée et débordante de saveur." },
                item_27: { name: "Limonade Naturelle", desc: "Limonade classique maison, citronnée, sucrée et parfaitement équilibrée." },
                // Milkshakes
                item_28: { name: "Milkshake Banane", desc: "Milkshake onctueux à la banane fraîche, crémeux et réconfortant." },
                item_29: { name: "Milkshake Caramel", desc: "Milkshake au caramel fondant, riche en douceur et en gourmandise." },
                item_30: { name: "Milkshake Chocolat", desc: "Milkshake au chocolat intense, épais et irrésistiblement crémeux." },
                item_31: { name: "Milkshake Fraise", desc: "Milkshake à la fraise fraîche, fruité, léger et délicieusement sucré." },
                item_32: { name: "Milkshake Oreo", desc: "Milkshake vanille avec éclats de biscuits Oreo, une gourmandise absolue." },
                item_33: { name: "Milkshake Vanille", desc: "Milkshake à la vanille pure, doux, crémeux et classique." },
                // Desserts
                item_34: { name: "Brownie", desc: "Brownie fondant au chocolat avec un cœur tiède et gluant, servi chaud." },
                item_35: { name: "Ice Cream", desc: "Glace onctueuse à la vanille, simplement parfaite pour finir en beauté." },
                item_36: { name: "Donuts", desc: "Donuts moelleux glacés au chocolat ou au sucre, irrésistibles." },
                item_37: { name: "Fruits Cup", desc: "Coupe de fruits frais de saison, légère et naturellement sucrée." },
                item_38: { name: "Pancakes", desc: "Pancakes moelleux nappés de sirop d'érable et de beurre fondant." },
                // Boissons de Marques
                item_39: { name: "Coca-Cola", desc: "Le classique intemporel : un Coca-Cola bien glacé pour accompagner votre repas." },
                item_40: { name: "Coca-Cola Zéro", desc: "Le goût du Coca-Cola sans le sucre — savoureux et rafraîchissant sans compromis." },
                item_41: { name: "Fanta", desc: "Fanta orange pétillant, sucré et rafraîchissant — un incontournable pour toute la famille." },
                item_42: { name: "Sprite", desc: "Sprite citron-citron vert, vif et pétillant — la boisson parfaite pour désaltérer." },
                item_43: { name: "Pepsi", desc: "Pepsi Cola bien glacé, sa saveur unique et pétillante pour une pause rafraîchissante." },
                item_44: { name: "Schweppes", desc: "Schweppes Tonic pétillant et légèrement amer — idéal pour accompagner vos plats épicés." },
                item_45: { name: "Ice Tea Lipton", desc: "Ice Tea Lipton pêche, légèrement sucré et infiniment rafraîchissant." },
                item_46: { name: "Malta Guinness", desc: "Malta Guinness, la boisson maltée sans alcool, riche en vitamines et en énergie." },
                item_47: { name: "Monster Energy", desc: "Monster Energy, la boisson énergisante pour booster votre journée — format canette." },
                item_48: { name: "Red Bull", desc: "Red Bull, la boisson qui vous donne des ailes — idéale pour rester au top de votre énergie." },
                addToCart: "Ajouter"
            },
            menuPage: {
                badge: "NOTRE CARTE",
                title: "DÉCOUVREZ VOS SAVEURS",
                description: "Chaque plat est préparé avec des ingrédients de qualité et passion."
            },
            cart: {
                emptyTitle: "VOTRE PANIER EST VIDE",
                emptyText: "On dirait que vous n'avez encore rien ajouté.",
                browse: "PARCOURIR LE MENU",
                title: "VOTRE PANIER",
                total: "TOTAL",
                checkout: "PASSER À LA CAISSE"
            },
            checkout: {
                title: "CAISSE",
                successTitle: "COMMANDE PASSÉE !",
                successText: "Merci {{name}} ! Votre commande est en préparation.",
                backHome: "RETOUR À L'ACCUEIL",
                nameLabel: "NOM *",
                namePlaceholder: "Votre nom complet",
                phoneLabel: "TÉLÉPHONE *",
                typeLabel: "TYPE DE COMMANDE",
                delivery: "LIVRAISON",
                pickup: "À EMPORTER",
                addressLabel: "ADRESSE *",
                addressPlaceholder: "Adresse de livraison",
                timeLabel: "HEURE SOUHAITÉE",
                summaryItems: "{{count}} article(s)",
                placeOrder: "PASSER LA COMMANDE",
                errorFields: "Veuillez remplir tous les champs obligatoires"
            },
            notFound: {
                title: "Oups ! Page non trouvée",
                backHome: "Retour à l'accueil"
            },
            team: {
                badge: "NOTRE ÉQUIPE",
                title: "PROFESSIONNELS PASSIONNÉS",
                description: "Une équipe dévouée qui travaille chaque jour pour vous offrir la meilleure expérience culinaire."
            },
            faq: {
                badge: "AIDE",
                title: "QUESTIONS FRÉQUENTES",
                description: "Trouvez rapidement les réponses à vos questions.",
                ordering: {
                    category: "Commande",
                    q1: "Comment passer une commande ?",
                    a1: "Parcourez notre menu, ajoutez vos plats au panier, puis cliquez sur 'Passer à la caisse'. Remplissez vos informations et validez votre commande.",
                    q2: "Puis-je modifier ma commande après validation ?",
                    a2: "Contactez-nous immédiatement au +229 XX XX XX XX. Si la préparation n'a pas commencé, nous pourrons modifier votre commande.",
                    q3: "Quel est le montant minimum de commande ?",
                    a3: "Le montant minimum de commande est de 2000 FCFA pour la livraison. Aucun minimum pour le retrait en restaurant.",
                    q4: "Puis-je commander pour plus tard ?",
                    a4: "Oui, lors de la commande, sélectionnez l'heure souhaitée pour la livraison ou le retrait."
                },
                delivery: {
                    category: "Livraison",
                    q1: "Quels sont les délais de livraison ?",
                    a1: "En moyenne 30-45 minutes selon votre localisation. Vous recevrez une estimation précise lors de la commande.",
                    q2: "Quelles sont les zones de livraison ?",
                    a2: "Nous livrons dans toute la ville de Cotonou, Porto-Novo, Parakou et Abomey-Calavi. Consultez notre page Localisations pour plus de détails.",
                    q3: "Quels sont les frais de livraison ?",
                    a3: "Les frais varient de 500 à 1500 FCFA selon la distance. Livraison gratuite pour les commandes supérieures à 10000 FCFA.",
                    q4: "Comment suivre ma commande ?",
                    a4: "Vous recevrez un SMS avec le statut de votre commande : en préparation, en route, livrée."
                },
                payment: {
                    category: "Paiement",
                    q1: "Quels modes de paiement acceptez-vous ?",
                    a1: "Nous acceptons le paiement en espèces à la livraison, MTN Mobile Money, Moov Money et les cartes bancaires.",
                    q2: "Le paiement en ligne est-il sécurisé ?",
                    a2: "Oui, toutes les transactions sont cryptées et sécurisées. Nous ne conservons aucune information bancaire.",
                    q3: "Puis-je avoir une facture ?",
                    a3: "Oui, une facture électronique vous sera envoyée par email après chaque commande."
                },
                menu: {
                    category: "Menu & Produits",
                    q1: "Vos produits contiennent-ils des allergènes ?",
                    a1: "Nos plats peuvent contenir du gluten, des œufs, du lait et des arachides. Contactez-nous pour des informations spécifiques.",
                    q2: "Proposez-vous des options végétariennes ?",
                    a2: "Oui, nous avons des accompagnements, salades et desserts végétariens. Consultez notre menu pour plus de détails.",
                    q3: "Puis-je personnaliser mon plat ?",
                    a3: "Oui, vous pouvez ajouter des notes spéciales lors de la commande (sans oignons, extra sauce, etc.)."
                },
                reservation: {
                    category: "Réservation",
                    q1: "Comment réserver une table ?",
                    a1: "Rendez-vous sur notre page Réservation, sélectionnez le restaurant, la date, l'heure et le nombre de personnes.",
                    q2: "Puis-je annuler ma réservation ?",
                    a2: "Oui, vous pouvez annuler jusqu'à 2 heures avant l'heure prévue en nous contactant.",
                    q3: "Organisez-vous des événements privés ?",
                    a3: "Oui, nous proposons des formules pour anniversaires, réunions d'entreprise et événements. Contactez-nous pour un devis."
                }
            }
        }
    },
    en: {
        translation: {
            nav: {
                menu: "Menu",
                cart: "Cart",
                locations: "Locations",
                contact: "Contact"
            },
            hero: {
                title: "CRISPY ON",
                titleAccent: "THE OUTSIDE.",
                subtitle: "JUICY",
                subtitleEnd: " INSIDE.",
                description: "Hand-breaded, golden-fried perfection. Voted #1 chicken restaurant — experience the difference.",
                orderNow: "ORDER NOW",
                viewMenu: "VIEW MENU",
                badge: "PREMIUM CRISPY CHICKEN",
                drinkBadge: "NATURAL FRESHNESS",
                drinkTitle: "REFRESH",
                drinkTitleAccent: "INSTANTLY.",
                drinkSubtitle: "DISCOVER",
                drinkSubtitleEnd: " OUR NATURAL JUICES.",
                drinkDescription: "Fresh ingredients, local flavors. The perfect companion for your crispy chicken."
            },
            stats: {
                rating: "Average Rating",
                customers: "Happy Customers",
                locations: "Locations",
                best: "Best Chicken 2025"
            },
            popular: {
                badge: "FAN FAVORITES",
                title: "MOST POPULAR",
                description: "The dishes our customers can't stop ordering. Try them and you'll understand why.",
                seeAll: "SEE FULL MENU"
            },
            cta: {
                title: "HUNGRY? ORDER NOW.",
                description: "Skip the line. Get your crispy chicken delivered hot and fresh.",
                order: "ORDER NOW"
            },
            footer: {
                description: "Premium crispy chicken crafted with love. Voted #1 chicken restaurant — every bite is an experience.",
                links: "QUICK LINKS",
                contact: "CONTACT",
                hours: "HOURS",
                rights: "All rights reserved.",
                crafted: "Crafted with 🔥 and love",
                address: "123 Crispy Lane, Flavor Town",
                monFri: "Mon – Fri: 11:00 AM – 11:00 PM",
                satSun: "Sat – Sun: 10:00 AM – 12:00 AM"
            },
            testimonials: {
                badge: "WHAT PEOPLE SAY",
                title: "LOVED BY ",
                titleAccent: "THOUSANDS",
                description: "Don't just take our word for it — hear from our community of chicken lovers.",
                review1: "The crispiest chicken I've ever tasted! The OG Burger is absolutely insane. This place is a game changer.",
                review2: "Family Bucket was perfect for our weekend. Every piece was golden and juicy. Will definitely order again!",
                review3: "Best chicken wraps in town, hands down. The Spicy Caesar is chef's kiss. Fast delivery too!",
                review4: "Loaded Cheese Fries are addictive. Great portion sizes and the quality is always consistent.",
                review5: "Cookie Dough Sundae is heavenly! Perfect way to finish a meal. HotChick never disappoints.",
                review6: "The Spicy Inferno Burger lives up to its name! Perfect heat level and amazing crunch. 10/10!",
                daysAgo: "{{count}} days ago",
                weeksAgo: "{{count}} weeks ago",
                aDayAgo: "1 day ago",
                aWeekAgo: "1 week ago"
            },
            menu: {
                categories: {
                    all: "All",
                    chicken: "Chicken",
                    burgers: "Burgers",
                    wraps: "Wraps",
                    sides: "Sides",
                    jus_naturels: "Natural Juices",
                    limonades: "Lemonades",
                    milkshakes: "Milkshakes",
                    boissons_de_marques: "Brand Drinks",
                    desserts: "Desserts"
                },
                sortBy: "Sort by",
                sortDefault: "Default",
                sortNameAsc: "Name (A → Z)",
                sortPriceAsc: "Price: Low to High",
                sortPriceDesc: "Price: High to Low",
                searchPlaceholder: "Search a dish…",
                noResults: "No results for this search.",
                // Chicken
                item_1: { name: "Big HotChick", desc: "Our masterpiece — a whole ultra-crispy chicken marinated 24h and fried to perfection." },
                item_2: { name: "Crispy Tenders & Fries", desc: "Hand-breaded golden tenders served with crispy fries and our signature dipping sauce." },
                item_3: { name: "Family Bucket (12pcs)", desc: "12 pieces of golden crispy chicken, perfect for sharing with the family." },
                item_4: { name: "Spicy Wings", desc: "Chicken wings glazed with a cayenne-honey spicy sauce, fried to crispy perfection." },
                // Burgers
                item_5: { name: "Crispy Chicken Burger", desc: "Crispy chicken fillet, fresh lettuce, pickles and our creamy HotChick sauce." },
                item_6: { name: "Spicy Chicken Burger", desc: "Fiery chicken burger with jalapeños, pepper jack cheese and sriracha mayo." },
                item_7: { name: "Double Chicken Burger", desc: "Two crispy fillets stacked with melted cheese, bacon and signature sauce." },
                // Wraps
                item_8: { name: "Classic Wrap", desc: "Crispy chicken strips wrapped with fresh veggies and ranch dressing in a warm tortilla." },
                item_9: { name: "Spicy Wrap", desc: "Spiced chicken, romaine, parmesan and creamy caesar dressing in a warm tortilla." },
                // Sides
                item_10: { name: "Chicken Nuggets (6pcs)", desc: "Crispy chicken nuggets, perfect as a side or a snack." },
                item_11: { name: "Crispy Fries", desc: "Golden, perfectly salted fries — the ultimate sidekick." },
                item_12: { name: "Loaded Fries", desc: "Our crispy fries smothered in melted cheddar, signature sauce and fresh parsley." },
                item_13: { name: "Onion Rings", desc: "Onion rings coated in a spiced breadcrumb and fried to crispy perfection." },
                // Natural Juices
                item_14: { name: "Pineapple Juice", desc: "Freshly pressed homemade pineapple juice, naturally sweet and refreshing." },
                item_15: { name: "Bissap Juice", desc: "Homemade hibiscus infusion, lightly sweetened and deeply aromatic." },
                item_16: { name: "Lemon Juice", desc: "Homemade squeezed lemon juice, balanced between acidity and sweetness, served fresh." },
                item_17: { name: "Pineapple-Lemon-Mint Cocktail", desc: "Refreshing blend of pineapple, lemon and fresh mint." },
                item_18: { name: "Ginger-Lemon-Honey Cocktail", desc: "Natural ginger tonic, sweetened with honey and fresh lemon." },
                item_19: { name: "Mango-Orange Cocktail", desc: "Tropical fusion of freshly pressed mango and orange." },
                item_20: { name: "Watermelon-Lemon Cocktail", desc: "Juicy watermelon and fresh lemon for an ultra-hydrating drink." },
                item_21: { name: "Ginger Juice", desc: "Fresh ginger juice, slightly spicy and invigorating." },
                item_22: { name: "Mint Juice", desc: "Fresh mint infusion, iced and ultra-refreshing." },
                item_23: { name: "Watermelon Juice", desc: "Freshly blended watermelon, light and naturally sweet." },
                item_24: { name: "Tamarind Juice", desc: "Tangy homemade tamarind juice, rich in authentic flavors." },
                // Lemonades
                item_25: { name: "Passion Fruit Lemonade", desc: "Sparkling passion fruit lemonade, aromatic and refreshing." },
                item_26: { name: "Strawberry Lemonade", desc: "Fresh strawberry lemonade, lightly sweetened and bursting with flavor." },
                item_27: { name: "Classic Lemonade", desc: "Homemade classic lemonade, lemony, sweet and perfectly balanced." },
                // Milkshakes
                item_28: { name: "Banana Milkshake", desc: "Smooth fresh banana milkshake, creamy and comforting." },
                item_29: { name: "Caramel Milkshake", desc: "Melting caramel milkshake, rich in sweetness and indulgence." },
                item_30: { name: "Chocolate Milkshake", desc: "Intense chocolate milkshake, thick and irresistibly creamy." },
                item_31: { name: "Strawberry Milkshake", desc: "Fresh strawberry milkshake, fruity, light and deliciously sweet." },
                item_32: { name: "Oreo Milkshake", desc: "Vanilla milkshake with Oreo cookie crumbles — pure indulgence." },
                item_33: { name: "Vanilla Milkshake", desc: "Pure vanilla milkshake, smooth, creamy and classic." },
                // Desserts
                item_34: { name: "Brownie", desc: "Fudgy chocolate brownie with a warm gooey center, served hot." },
                item_35: { name: "Ice Cream", desc: "Smooth vanilla ice cream — simply perfect to finish your meal." },
                item_36: { name: "Donuts", desc: "Soft donuts glazed with chocolate or sugar, irresistible." },
                item_37: { name: "Fruits Cup", desc: "Fresh seasonal fruit cup, light and naturally sweet." },
                item_38: { name: "Pancakes", desc: "Fluffy pancakes drizzled with maple syrup and melted butter." },
                // Brand Drinks
                item_39: { name: "Coca-Cola", desc: "The timeless classic: an ice-cold Coca-Cola to complement your meal." },
                item_40: { name: "Coca-Cola Zero", desc: "The Coca-Cola taste without the sugar — delicious and refreshing without compromise." },
                item_41: { name: "Fanta", desc: "Sparkling orange Fanta, sweet and refreshing — a must-have for the whole family." },
                item_42: { name: "Sprite", desc: "Sprite lemon-lime, crisp and sparkling — the perfect drink to quench your thirst." },
                item_43: { name: "Pepsi", desc: "Ice-cold Pepsi Cola, its unique bubbly taste for a refreshing break." },
                item_44: { name: "Schweppes", desc: "Sparkling Schweppes Tonic, lightly bitter — ideal to accompany your spicy dishes." },
                item_45: { name: "Lipton Ice Tea", desc: "Lipton Peach Ice Tea, lightly sweetened and infinitely refreshing." },
                item_46: { name: "Malta Guinness", desc: "Malta Guinness, the non-alcoholic malt drink, rich in vitamins and energy." },
                item_47: { name: "Monster Energy", desc: "Monster Energy, the energy drink to power your day — can format." },
                item_48: { name: "Red Bull", desc: "Red Bull gives you wings — ideal to stay at the top of your energy." },
                addToCart: "Add"
            },
            menuPage: {
                badge: "OUR MENU",
                title: "FIND YOUR FLAVOR",
                description: "Every dish crafted with premium ingredients and passion."
            },
            cart: {
                emptyTitle: "YOUR CART IS EMPTY",
                emptyText: "Looks like you haven't added anything yet.",
                browse: "BROWSE MENU",
                title: "YOUR CART",
                total: "TOTAL",
                checkout: "PROCEED TO CHECKOUT"
            },
            checkout: {
                title: "CHECKOUT",
                successTitle: "ORDER PLACED!",
                successText: "Thanks {{name}}! Your order is being prepared.",
                backHome: "BACK TO HOME",
                nameLabel: "NAME *",
                namePlaceholder: "Your full name",
                phoneLabel: "PHONE *",
                typeLabel: "ORDER TYPE",
                delivery: "DELIVERY",
                pickup: "PICKUP",
                addressLabel: "ADDRESS *",
                addressPlaceholder: "Delivery address",
                timeLabel: "PREFERRED TIME",
                summaryItems: "{{count}} item(s)",
                placeOrder: "PLACE ORDER",
                errorFields: "Please fill all required fields"
            },
            notFound: {
                title: "Oops! Page not found",
                backHome: "Return to Home"
            },
            team: {
                badge: "OUR TEAM",
                title: "PASSIONATE PROFESSIONALS",
                description: "A dedicated team working every day to bring you the best culinary experience."
            },
            faq: {
                badge: "HELP",
                title: "FREQUENTLY ASKED QUESTIONS",
                description: "Find quick answers to your questions.",
                ordering: {
                    category: "Ordering",
                    q1: "How do I place an order?",
                    a1: "Browse our menu, add items to your cart, then click 'Checkout'. Fill in your information and confirm your order.",
                    q2: "Can I modify my order after confirmation?",
                    a2: "Contact us immediately at +229 XX XX XX XX. If preparation hasn't started, we can modify your order.",
                    q3: "What is the minimum order amount?",
                    a3: "The minimum order for delivery is 2000 FCFA. No minimum for restaurant pickup.",
                    q4: "Can I order for later?",
                    a4: "Yes, when ordering, select your preferred time for delivery or pickup."
                },
                delivery: {
                    category: "Delivery",
                    q1: "What are the delivery times?",
                    a1: "Average 30-45 minutes depending on your location. You'll receive a precise estimate when ordering.",
                    q2: "What are the delivery zones?",
                    a2: "We deliver throughout Cotonou, Porto-Novo, Parakou and Abomey-Calavi. Check our Locations page for details.",
                    q3: "What are the delivery fees?",
                    a3: "Fees range from 500 to 1500 FCFA depending on distance. Free delivery for orders over 10000 FCFA.",
                    q4: "How can I track my order?",
                    a4: "You'll receive an SMS with your order status: preparing, on the way, delivered."
                },
                payment: {
                    category: "Payment",
                    q1: "What payment methods do you accept?",
                    a1: "We accept cash on delivery, MTN Mobile Money, Moov Money and bank cards.",
                    q2: "Is online payment secure?",
                    a2: "Yes, all transactions are encrypted and secure. We don't store any banking information.",
                    q3: "Can I get an invoice?",
                    a3: "Yes, an electronic invoice will be sent to your email after each order."
                },
                menu: {
                    category: "Menu & Products",
                    q1: "Do your products contain allergens?",
                    a1: "Our dishes may contain gluten, eggs, milk and peanuts. Contact us for specific information.",
                    q2: "Do you offer vegetarian options?",
                    a2: "Yes, we have vegetarian sides, salads and desserts. Check our menu for details.",
                    q3: "Can I customize my dish?",
                    a3: "Yes, you can add special notes when ordering (no onions, extra sauce, etc.)."
                },
                reservation: {
                    category: "Reservation",
                    q1: "How do I reserve a table?",
                    a1: "Go to our Reservation page, select the restaurant, date, time and number of people.",
                    q2: "Can I cancel my reservation?",
                    a2: "Yes, you can cancel up to 2 hours before the scheduled time by contacting us.",
                    q3: "Do you organize private events?",
                    a3: "Yes, we offer packages for birthdays, corporate meetings and events. Contact us for a quote."
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
