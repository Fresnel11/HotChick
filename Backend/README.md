# 🍗 HotChick Backend API

Backend Node.js/Express avec Prisma ORM et PostgreSQL (Supabase).

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Générer le client Prisma
npm run prisma:generate

# Créer les tables dans la base de données
npm run prisma:migrate
```

## ⚙️ Configuration

Le fichier `.env` est déjà configuré avec vos identifiants Supabase.

## 🗄️ Prisma

```bash
# Générer le client Prisma
npm run prisma:generate

# Créer une migration
npm run prisma:migrate

# Ouvrir Prisma Studio (interface graphique)
npm run prisma:studio
```

## 🏃 Démarrage

```bash
# Mode développement (avec auto-reload)
npm run dev

# Mode production
npm start
```

Le serveur démarre sur `http://localhost:5000`

## 📡 Endpoints API

### Auth
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/profile` - Profil (protégé)
- `PUT /api/auth/profile` - Modifier profil (protégé)
- `PUT /api/auth/change-password` - Changer mot de passe (protégé)

### Health
- `GET /health` - Vérifier l'état du serveur

## 📁 Structure

```
Backend/
├── prisma/
│   └── schema.prisma      # Schéma Prisma
├── src/
│   ├── config/
│   │   └── prisma.js      # Client Prisma
│   ├── controllers/       # Logique métier
│   ├── middleware/        # Middlewares (auth)
│   ├── routes/           # Routes API
│   ├── services/         # Services (business logic)
│   └── server.js         # Point d'entrée
├── .env                  # Variables d'environnement
└── package.json
```

## 🎯 Modèles Prisma

- **User** - Utilisateurs
- **Address** - Adresses de livraison
- **Order** - Commandes
- **OrderItem** - Détails des commandes
- **Reservation** - Réservations
- **Review** - Avis clients

## 🔐 Sécurité

- Mots de passe hashés avec bcryptjs
- Authentification JWT (7 jours)
- Routes protégées par middleware
- Variables sensibles dans .env
