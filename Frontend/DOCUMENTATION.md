# 📖 Documentation HotChick - Application Frontend

## 🎯 Vue d'ensemble

HotChick est une application web e-commerce moderne pour un restaurant de poulet frit au Bénin. L'application permet aux clients de consulter le menu, passer des commandes, réserver des tables et localiser les restaurants.

---

## ✨ Fonctionnalités Principales

### 🏠 1. Page d'Accueil

#### Hero Section
- **Carrousel d'images automatique** : 6 images en rotation toutes les 5 secondes avec transition en fondu
- **Contenu dynamique** : Texte adapté selon l'image affichée (poulet ou boissons)
- **Navigation manuelle** : Indicateurs cliquables pour changer d'image
- **Animations fluides** : Transitions Framer Motion pour le texte et les images
- **Responsive** : Optimisé pour mobile et desktop

#### Barre de Statistiques
- Note moyenne : 4.9/5
- Clients satisfaits : 10,000+
- Nombre de restaurants : 6
- Badge "Meilleur Poulet 2025"

#### Section Plats Populaires
- Affichage de 4 produits vedettes
- Cartes produits avec image, nom, description, prix et note
- Bouton pour accéder au menu complet
- Animations au scroll

#### Section Équipe
- Photo de l'équipe professionnelle
- Design avec effet de glow et bordure stylisée
- Présentation de l'engagement de l'équipe

#### Témoignages Clients
- 6 avis clients authentiques
- Affichage du nom, date et commentaire
- Animations au scroll
- Design moderne avec avatars

#### Call-to-Action (CTA)
- Bannière d'appel à l'action pour commander
- Fond dégradé avec effets visuels
- Bouton direct vers le menu

---

### 🍗 2. Page Menu

#### Catalogue Complet
- **48 produits** répartis en **10 catégories** :
  - Chicken (4 items)
  - Burgers (3 items)
  - Wraps (2 items)
  - Accompagnements (4 items)
  - Jus Naturels (11 items)
  - Limonades (3 items)
  - Milkshakes (6 items)
  - Boissons de Marques (10 items)
  - Desserts (5 items)

#### Filtrage et Tri
- **Filtrage par catégorie** : Boutons pour chaque catégorie + "Tous"
- **Barre de recherche** : Recherche en temps réel par nom ou description
- **Système de tri** :
  - Par défaut
  - Nom (A → Z)
  - Prix croissant
  - Prix décroissant

#### Affichage Organisé
- **Groupement par catégorie** : Sections distinctes avec titres stylisés
- **Grille responsive** : 1-4 colonnes selon la taille d'écran
- **Cartes produits** : Image, nom, description, prix, note
- **Lazy loading** : Chargement optimisé des images

#### Détails Produit
- Modal avec informations complètes
- Image en grand format
- Description détaillée
- Bouton "Ajouter au panier"

---

### 🛒 3. Système de Panier

#### Gestion du Panier
- **Ajout de produits** : Depuis le menu ou la page détail
- **Modification des quantités** : Boutons +/- pour chaque article
- **Suppression d'articles** : Bouton de suppression individuel
- **Calcul automatique** : Total mis à jour en temps réel
- **Persistance** : Sauvegarde dans localStorage (ne disparaît pas à l'actualisation)

#### Badge de Notification
- Affichage du nombre total d'articles dans la navbar
- Animation lors de l'ajout d'un produit
- Visible sur mobile et desktop

#### Page Panier
- Liste complète des articles
- Récapitulatif du total
- Bouton "Vider le panier"
- Bouton "Passer à la caisse"
- Message si panier vide avec lien vers le menu

---

### 💳 4. Système de Commande (Checkout)

#### Formulaire de Commande
- **Informations client** :
  - Nom complet (requis)
  - Téléphone (requis)
- **Type de commande** :
  - Livraison
  - Retrait en restaurant
- **Adresse de livraison** : Affichée uniquement si livraison sélectionnée
- **Heure souhaitée** : Sélection de l'heure de livraison/retrait

#### Récapitulatif
- Liste des articles commandés
- Quantités et prix
- Total de la commande

#### Validation
- Vérification des champs obligatoires
- Messages d'erreur en cas de champ manquant
- Toast de confirmation après validation

#### Page de Confirmation
- Message de remerciement personnalisé
- Récapitulatif de la commande
- Bouton retour à l'accueil
- Vidage automatique du panier

---

### 📍 5. Page Localisations

#### Liste des Restaurants
- **6 restaurants au Bénin** :
  - 3 à Cotonou (Jonquet, Fidjrossè, Cadjehoun)
  - 1 à Porto-Novo
  - 1 à Parakou
  - 1 à Abomey-Calavi

#### Informations par Restaurant
- Nom et ville
- Adresse complète
- Numéro de téléphone
- Horaires d'ouverture
- Coordonnées GPS
- Tags (FLAGSHIP, NOUVEAU)

#### Cartes Interactives
- Preview de carte stylisée pour chaque restaurant
- Lien direct vers Google Maps
- Design moderne avec icônes

---

### 📅 6. Système de Réservation

#### Formulaire de Réservation
- **Sélection du restaurant** : Liste déroulante des 6 restaurants
- **Informations client** :
  - Nom complet (requis)
  - Téléphone (requis)
- **Date et heure** :
  - Sélecteur de date (minimum aujourd'hui)
  - Créneaux horaires prédéfinis (11h-22h)
- **Nombre de personnes** : Boutons de 1 à 9+
- **Notes spéciales** : Champ optionnel pour demandes particulières

#### Affichage Dynamique
- Adresse du restaurant sélectionné affichée automatiquement
- Validation en temps réel des champs

#### Page de Confirmation
- Message de confirmation personnalisé
- Récapitulatif complet de la réservation :
  - Restaurant et adresse
  - Date et heure
  - Nombre de personnes
  - Notes spéciales
- Bouton "Faire une autre réservation"

---

### ❓ 7. Page FAQ

#### Organisation par Catégories
- **5 catégories principales** :
  1. Commande (4 questions)
  2. Livraison (4 questions)
  3. Paiement (3 questions)
  4. Menu & Produits (3 questions)
  5. Réservation (3 questions)

#### Interface Accordéon
- Questions cliquables pour afficher/masquer les réponses
- Animation fluide d'ouverture/fermeture
- Design épuré et lisible

#### Contenu Complet
- Réponses détaillées à toutes les questions fréquentes
- Informations sur les délais, zones de livraison, modes de paiement
- Conseils sur les allergènes et personnalisation

---

### 🌍 8. Internationalisation (i18n)

#### Support Bilingue
- **Français** (langue par défaut)
- **Anglais**

#### Traductions Complètes
- Navigation et menus
- Contenu des pages (accueil, menu, FAQ, etc.)
- Messages de validation et erreurs
- Descriptions de produits
- Témoignages clients

#### Changement de Langue
- Bouton dans la navbar (FR/EN)
- Changement instantané sans rechargement
- Détection automatique de la langue du navigateur

---

### 🎨 9. Design & UX

#### Système de Design
- **Framework CSS** : Tailwind CSS
- **Composants UI** : shadcn/ui
- **Animations** : Framer Motion
- **Typographie** : Oswald (titres) + Open Sans (texte)
- **Couleurs** :
  - Primaire : Rouge/Orange (#E63946)
  - Secondaire : Orange doré
  - Accent : Jaune

#### Responsive Design
- **Mobile-first** : Optimisé pour smartphones
- **Breakpoints** : sm, md, lg, xl
- **Navigation mobile** : Menu hamburger avec animations
- **Grilles adaptatives** : 1-4 colonnes selon l'écran

#### Animations
- Transitions fluides entre les pages
- Animations au scroll (fade-in, slide-up)
- Hover effects sur les boutons et cartes
- Loading states et feedback visuel

#### Accessibilité
- Labels ARIA pour les éléments interactifs
- Navigation au clavier
- Contraste de couleurs conforme
- Textes alternatifs pour les images

---

### 🔧 10. Fonctionnalités Techniques

#### Navigation
- **React Router** : Routing côté client
- **Scroll to top** : Retour en haut automatique lors du changement de page
- **Bouton scroll to top** : Apparaît après 300px de scroll
- **Liens actifs** : Mise en évidence de la page courante

#### Notifications
- **Toast notifications** : Messages de succès/erreur avec Sonner
- **Feedback visuel** : Confirmation des actions utilisateur

#### Cookies & Consentement
- **Popup GDPR** : Bannière de consentement des cookies
- **3 catégories** : Nécessaires, Analytiques, Marketing
- **Persistance** : Choix sauvegardé dans localStorage
- **Responsive** : Adapté mobile/desktop

#### Performance
- **Images WebP** : Format optimisé pour le web
- **Lazy loading** : Chargement différé des images
- **Polices locales** : @fontsource pour fonctionnement hors ligne
- **Code splitting** : Chargement optimisé des composants

#### SEO & Partage
- **Meta tags** : Open Graph et Twitter Cards
- **Favicon** : Logo HotChick
- **Image de partage** : Logo affiché lors du partage de lien
- **Descriptions** : Meta descriptions pour chaque page

---

## 🚫 Limites Actuelles

### 1. Paiement
- ❌ **Pas de paiement en ligne** : Aucune intégration de passerelle de paiement
- ❌ **Pas de Mobile Money** : MTN, Moov Money non disponibles
- ❌ **Paiement à la livraison uniquement** : Mentionné mais non implémenté

### 2. Authentification
- ❌ **Pas de comptes utilisateurs** : Impossible de créer un compte
- ❌ **Pas d'historique** : Aucune sauvegarde des commandes passées
- ❌ **Pas de profil** : Impossible de sauvegarder ses informations

### 3. Suivi de Commande
- ❌ **Pas de tracking** : Impossible de suivre sa commande en temps réel
- ❌ **Pas de notifications** : Aucun SMS/email de confirmation
- ❌ **Pas de statuts** : Pas d'information sur l'état de préparation

### 4. Backend
- ❌ **Pas de base de données** : Aucune persistance côté serveur
- ❌ **Pas d'API** : Aucune communication avec un backend
- ❌ **Données statiques** : Menu et restaurants codés en dur
- ❌ **Pas de validation serveur** : Validation uniquement côté client

### 5. Commandes
- ❌ **Pas d'envoi réel** : Les commandes ne sont pas transmises au restaurant
- ❌ **Pas de confirmation** : Aucun email/SMS de confirmation
- ❌ **Pas de numéro de commande** : Impossible de référencer une commande

### 6. Réservations
- ❌ **Pas de vérification de disponibilité** : Aucun contrôle des places disponibles
- ❌ **Pas de confirmation** : Réservation non transmise au restaurant
- ❌ **Pas de rappel** : Aucune notification avant la réservation

### 7. Livraison
- ❌ **Pas de calcul de frais** : Frais de livraison non calculés
- ❌ **Pas de zones définies** : Aucune vérification de la zone de livraison
- ❌ **Pas d'estimation de temps** : Délai de livraison non communiqué

### 8. Personnalisation
- ❌ **Pas d'options produit** : Impossible de personnaliser les plats
- ❌ **Pas de choix de sauce** : Sauces non sélectionnables
- ❌ **Pas de niveau de piquant** : Impossible de choisir l'intensité

### 9. Promotions
- ❌ **Pas de codes promo** : Aucun système de réduction
- ❌ **Pas de programme fidélité** : Pas de points ou récompenses
- ❌ **Pas d'offres spéciales** : Aucune promotion affichée

### 10. Analytics
- ❌ **Pas de tracking** : Aucune analyse du comportement utilisateur
- ❌ **Pas de statistiques** : Données de la page d'accueil fictives
- ❌ **Pas de rapports** : Aucun dashboard administrateur

### 11. Contenu
- ❌ **Pas de blog** : Aucune section actualités/articles
- ❌ **Pas de galerie** : Photos limitées aux produits
- ❌ **Pas de vidéos** : Aucun contenu vidéo

### 12. Support Client
- ❌ **Pas de chat** : Aucun système de messagerie en direct
- ❌ **Pas de formulaire de contact** : Impossible d'envoyer un message
- ❌ **Numéros de téléphone fictifs** : Contacts non fonctionnels

---

## 🛠️ Stack Technique

### Frontend
- **React 18** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Vite** : Build tool et dev server
- **Tailwind CSS** : Framework CSS utility-first
- **Framer Motion** : Animations
- **React Router** : Routing
- **i18next** : Internationalisation
- **Sonner** : Toast notifications
- **Lucide React** : Icônes

### Polices
- **Oswald** : Titres et display
- **Open Sans** : Corps de texte
- **@fontsource** : Polices locales (hors ligne)

### Déploiement
- **Netlify** : Hébergement et déploiement continu
- **Git** : Contrôle de version

---

## 📦 Structure du Projet

```
Frontend/
├── public/              # Fichiers statiques
│   ├── favicon.png
│   └── hotchick-og.jpg
├── src/
│   ├── assets/          # Images et médias
│   ├── components/      # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ScrollToTopButton.tsx
│   ├── context/         # Context API
│   │   └── CartContext.tsx
│   ├── data/            # Données statiques
│   │   └── menuData.ts
│   ├── lib/             # Utilitaires
│   │   └── i18n.ts
│   ├── pages/           # Pages de l'application
│   │   ├── Index.tsx
│   │   ├── MenuPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── LocationsPage.tsx
│   │   ├── ReservationPage.tsx
│   │   ├── FAQPage.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Composant racine
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── netlify.toml         # Configuration Netlify
└── package.json         # Dépendances
```

---

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
cd Frontend
npm install
```

### Développement
```bash
npm run dev
```
Accès : http://localhost:5173

### Build Production
```bash
npm run build
```
Fichiers générés dans `dist/`

### Déploiement Netlify
```bash
# Automatique via Git push
git push origin main
```

---

## 📝 Notes Importantes

1. **Données fictives** : Toutes les données (produits, restaurants, témoignages) sont statiques et codées en dur
2. **Pas de backend** : L'application fonctionne entièrement côté client
3. **LocalStorage** : Seul le panier et les préférences cookies sont persistés localement
4. **Prototype** : Cette application est un prototype frontend sans fonctionnalités backend

---

## 🎯 Prochaines Étapes Recommandées

Pour transformer cette application en solution production-ready :

1. **Backend** : Développer une API REST ou GraphQL
2. **Base de données** : Implémenter PostgreSQL/MongoDB
3. **Authentification** : JWT ou OAuth2
4. **Paiement** : Intégrer MTN Mobile Money, Moov Money, Stripe
5. **Notifications** : SMS/Email via Twilio, SendGrid
6. **Admin Dashboard** : Interface de gestion pour le restaurant
7. **Analytics** : Google Analytics, Mixpanel
8. **Tests** : Tests unitaires et E2E
9. **CI/CD** : Pipeline automatisé
10. **Monitoring** : Sentry, LogRocket

---

## 📄 Licence

Tous droits réservés © 2025 HotChick
