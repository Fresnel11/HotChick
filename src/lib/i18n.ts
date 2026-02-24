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
