# 🚀 Guide d'optimisation des images - HotChick

## 🔍 Problème identifié
Les images prennent trop de temps à charger sur mobile.

## ✅ Solutions appliquées

### 1. **Lazy Loading** (Déjà fait)
- Ajout de `loading="lazy"` sur ProductCard
- Les images ne se chargent que quand elles sont visibles

### 2. **Images Unsplash optimisées**
Les URLs Unsplash utilisent déjà :
- `q=80` : Qualité 80% (bon compromis)
- `w=2000` : Largeur 2000px
- `auto=format` : Format automatique (WebP sur navigateurs compatibles)
- `fit=crop` : Recadrage optimisé

## 🎯 Solutions recommandées

### **Option A : Réduire la taille des images Unsplash**
Modifier les URLs dans `Index.tsx` :

```typescript
const heroImages = [
  { src: heroImage, alt: "Crispy chicken meals" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=70&w=1200&auto=format&fit=crop", alt: "Gourmet Chicken Burger" },
  // Changements : q=70 (au lieu de 80), w=1200 (au lieu de 2000)
];
```

### **Option B : Utiliser un CDN d'images (Cloudinary/Imgix)**
1. Uploader vos images sur Cloudinary
2. Utiliser leurs URLs optimisées automatiquement
3. Exemple : `https://res.cloudinary.com/your-cloud/image/upload/w_800,q_auto,f_auto/image.jpg`

### **Option C : Compresser les images locales**
Vos images dans `/assets/` sont probablement trop lourdes.

**Outils de compression :**
- **TinyPNG** : https://tinypng.com/
- **Squoosh** : https://squoosh.app/
- **ImageOptim** (Mac)

**Tailles recommandées :**
- Images produits : 800x600px, 80-100KB max
- Hero images : 1920x1080px, 200-300KB max
- Logos : 200x200px, 20KB max

### **Option D : Utiliser WebP**
Format moderne, 30% plus léger que JPEG.

```bash
# Convertir toutes les images en WebP
npm install -g sharp-cli
sharp -i src/assets/**/*.{jpg,png} -o src/assets/ -f webp
```

### **Option E : Preload des images critiques**
Dans `index.html` :

```html
<link rel="preload" as="image" href="/assets/hero-chicken.jpg">
```

### **Option F : Progressive JPEG**
Les images se chargent progressivement (flou → net).

## 📊 Résultats attendus

| Solution | Gain de vitesse | Difficulté |
|----------|----------------|------------|
| Lazy loading | +30% | ✅ Fait |
| Réduire taille Unsplash | +40% | Facile |
| Compresser images locales | +50% | Moyen |
| Utiliser WebP | +30% | Moyen |
| CDN (Cloudinary) | +60% | Difficile |

## 🎬 Action immédiate recommandée

1. **Compresser toutes les images dans `/assets/`**
   - Aller sur https://tinypng.com/
   - Uploader toutes vos images
   - Télécharger les versions compressées
   - Remplacer dans le projet

2. **Réduire la qualité Unsplash**
   - Changer `q=80&w=2000` en `q=70&w=1200`

3. **Ajouter des placeholders**
   - Afficher un fond gris pendant le chargement

## 📱 Test de performance

Après optimisation, testez sur :
- **PageSpeed Insights** : https://pagespeed.web.dev/
- **GTmetrix** : https://gtmetrix.com/

Objectif : Score > 90/100 sur mobile
