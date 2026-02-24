import { useState } from "react";
import { Plus, Star, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menuData";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ItemDetailModal from "@/components/ItemDetailModal";

const ProductCard = ({ item }: { item: MenuItem }) => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const [detailOpen, setDetailOpen] = useState(false);

  const handleAdd = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const translatedName = t(`menu.item_${item.id}.name`);
    addItem({ id: item.id, name: translatedName, price: item.price, image: item.image });
    toast.success(`${translatedName} ${i18n.language === "fr" ? "ajouté au panier" : "added to cart"}`);
  };

  const translatedName = t(`menu.item_${item.id}.name`);
  const translatedDesc = t(`menu.item_${item.id}.desc`);
  const catKey = item.category.toLowerCase().replace(/\s+/g, "_");

  return (
    <>
      <div
        className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 border border-border/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
        onClick={() => setDetailOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={translatedName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-display tracking-wider px-3 py-1 rounded-full shadow-lg">
            {t(`menu.categories.${catKey}`)}
          </span>

          {/* Rating badge — uses item.rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-display font-bold">{item.rating.toFixed(1)}</span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500">
            <motion.button
              onClick={(e) => { e.stopPropagation(); setDetailOpen(true); }}
              whileTap={{ scale: 0.9 }}
              className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-card text-foreground font-display tracking-wider px-4 py-3 rounded-xl shadow-xl flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              {i18n.language === "fr" ? "DÉTAILS" : "DETAILS"}
            </motion.button>
            <motion.button
              onClick={(e) => handleAdd(e)}
              whileTap={{ scale: 0.9 }}
              className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-primary text-primary-foreground font-display tracking-wider px-4 py-3 rounded-xl shadow-xl uppercase"
            >
              {t("hero.orderNow")}
            </motion.button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg tracking-wide mb-1">{translatedName}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{translatedDesc}</p>
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-primary">
              {item.price.toLocaleString()} <span className="text-sm">FCFA</span>
            </span>
            <button
              onClick={(e) => handleAdd(e)}
              className="flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-2 rounded-xl font-display text-sm tracking-wider hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              {t("menu.addToCart")}
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ItemDetailModal item={detailOpen ? item : null} onClose={() => setDetailOpen(false)} />
    </>
  );
};

export default ProductCard;
