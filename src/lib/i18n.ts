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
