import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menuData";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface ItemDetailModalProps {
    item: MenuItem | null;
    onClose: () => void;
}

const ItemDetailModal = ({ item, onClose }: ItemDetailModalProps) => {
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();

    const handleAdd = () => {
        if (!item) return;
        const name = t(`menu.item_${item.id}.name`);
        addItem({ id: item.id, name, price: item.price, image: item.image });
        toast.success(`${name} ${i18n.language === "fr" ? "ajouté au panier" : "added to cart"}`);
        onClose();
    };

    const catKey = item?.category.toLowerCase().replace(/\s+/g, "_") ?? "";

    return (
        <AnimatePresence>
            {item && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal panel */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 30 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-card rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg pointer-events-auto">
                            {/* Image */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={t(`menu.item_${item.id}.name`)}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                                {/* Category badge */}
                                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-display tracking-wider px-3 py-1 rounded-full shadow-lg">
                                    {t(`menu.categories.${catKey}`)}
                                </span>

                                {/* Rating badge */}
                                <div className="absolute top-4 right-12 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                                    <span className="text-sm font-display font-bold">{item.rating.toFixed(1)}</span>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-card transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Price on image bottom */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="font-display text-3xl text-primary-foreground drop-shadow-lg">
                                        {item.price.toLocaleString()} <span className="text-base">FCFA</span>
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="font-display text-2xl tracking-wide mb-3">
                                    {t(`menu.item_${item.id}.name`)}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {t(`menu.item_${item.id}.desc`)}
                                </p>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 border-2 border-border text-foreground font-display tracking-wider py-3 rounded-xl hover:bg-muted transition-colors"
                                    >
                                        {i18n.language === "fr" ? "FERMER" : "CLOSE"}
                                    </button>
                                    <button
                                        onClick={handleAdd}
                                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display tracking-wider py-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/30"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        {t("menu.addToCart").toUpperCase()}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ItemDetailModal;
