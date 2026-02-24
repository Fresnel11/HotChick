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
                subtitle: "JUYEUX",
                subtitleEnd: " À L'INTÉRIEUR.",
                description: "Perfection dorée, panée à la main. Élu restaurant de poulet numéro 1 — découvrez la différence.",
                orderNow: "COMMANDER",
                viewMenu: "VOIR LE MENU",
                badge: "POULET CROUSTILLANT PREMIUM"
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
                    fries: "Frites",
                    drinks: "Boissons",
                    desserts: "Desserts"
                },
                item_1: { name: "Tenders Croustillants Classiques", desc: "Tenders de poulet dorés panés à la main servis avec notre sauce signature." },
                item_2: { name: "Tenders Épicés", desc: "Nos tenders enrobés d'un glaçage au piment de Cayenne pour ceux qui aiment le piquant." },
                item_3: { name: "Family Bucket (12pc)", desc: "12 pièces de poulet croustillant doré, parfait pour partager en famille." },
                item_4: { name: "L'OG Chicken Burger", desc: "Filet de poulet croustillant, laitue fraîche, cornichons et notre sauce crémeuse HotChick." },
                item_5: { name: "Spicy Inferno Burger", desc: "Un burger au poulet piquant avec jalapeños, fromage pepper jack et mayo sriracha." },
                item_6: { name: "Double Stack Burger", desc: "Deux filets croustillants empilés avec du fromage, du bacon et notre sauce signature." },
                item_7: { name: "Wrap Poulet Classique", desc: "Aiguillettes de poulet croustillantes avec légumes frais et sauce ranch." },
                item_8: { name: "Wrap César Épicé", desc: "Poulet épicé avec romaine, parmesan et sauce césar onctueuse dans une tortilla chaude." },
                item_9: { name: "Frites Croustillantes", desc: "Frites dorées, parfaitement salées. L'accompagnement ultime." },
                item_10: { name: "Loaded Cheese Fries", desc: "Nos frites croustillantes nappées de cheddar fondu et d'éclats de bacon." },
                item_11: { name: "Cola Classique", desc: "Cola rafraîchissant bien glacé pour accompagner votre repas." },
                item_12: { name: "Citronnade Fraîche", desc: "Citronnade fraîchement pressée avec un soupçon de menthe." },
                item_13: { name: "Brownie au Chocolat", desc: "Brownie riche et fondant avec un cœur coulant." },
                item_14: { name: "Cookie Dough Sundae", desc: "Glace vanille nappée de morceaux de pâte à cookie et coulis de chocolat." },
                addToCart: "Ajouter"
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
                badge: "PREMIUM CRISPY CHICKEN"
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
                    fries: "Fries",
                    drinks: "Drinks",
                    desserts: "Desserts"
                },
                item_1: { name: "Classic Crispy Tenders", desc: "Hand-breaded golden chicken tenders served with our signature dipping sauce." },
                item_2: { name: "Spicy Hot Tenders", desc: "Our tenders tossed in a fiery cayenne glaze for those who crave the heat." },
                item_3: { name: "Family Bucket (12pc)", desc: "12 pieces of golden crispy chicken, perfect for sharing with the family." },
                item_4: { name: "The OG Chicken Burger", desc: "Crispy chicken fillet, fresh lettuce, pickles and our creamy HotChick sauce." },
                item_5: { name: "Spicy Inferno Burger", desc: "A fiery chicken burger with jalapeños, pepper jack cheese and sriracha mayo." },
                item_6: { name: "Double Stack Burger", desc: "Two crispy fillets stacked high with cheese, bacon and signature sauce." },
                item_7: { name: "Classic Chicken Wrap", desc: "Crispy chicken strips wrapped with fresh veggies and ranch dressing." },
                item_8: { name: "Spicy Caesar Wrap", desc: "Spiced chicken with romaine, parmesan and creamy caesar dressing in a warm tortilla." },
                item_9: { name: "Crispy Fries", desc: "Golden, perfectly salted fries. The ultimate sidekick." },
                item_10: { name: "Loaded Cheese Fries", desc: "Our crispy fries smothered in melted cheddar and bacon bits." },
                item_11: { name: "Classic Cola", desc: "Ice-cold refreshing cola to complement your meal." },
                item_12: { name: "Fresh Lemonade", desc: "Freshly squeezed lemonade with a hint of mint." },
                item_13: { name: "Chocolate Brownie", desc: "Rich, fudgy brownie with a warm gooey center." },
                item_14: { name: "Cookie Dough Sundae", desc: "Vanilla ice cream topped with cookie dough chunks and chocolate drizzle." },
                addToCart: "Add"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr", // Default language
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
