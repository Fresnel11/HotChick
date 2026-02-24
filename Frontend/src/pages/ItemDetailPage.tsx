import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowLeft, User, Mail, MessageSquare, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menuData";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Review {
    id: string;
    name: string;
    email: string;
    rating: number;
    comment: string;
    date: string;
}

// ── Seed reviews per item (shown before any user review) ──────────────────────
const SEED_REVIEWS: Record<number, Review[]> = {
    1: [{ id: "s1", name: "Koffi A.", email: "", rating: 5, comment: "Le meilleur poulet de tout Cotonou ! Croustillant à souhait.", date: "2025-02-10" },
    { id: "s2", name: "Marie L.", email: "", rating: 5, comment: "Mariné parfaitement, juteux à l'intérieur. Je recommande les yeux fermés.", date: "2025-02-14" }],
    5: [{ id: "s3", name: "Elie M.", email: "", rating: 5, comment: "Le meilleur burger que j'aie jamais mangé à Cotonou !", date: "2025-01-28" },
    { id: "s4", name: "Fatou D.", email: "", rating: 4, comment: "Très bonne sauce, un peu épicé pour moi mais délicieux quand même.", date: "2025-02-05" }],
    12: [{ id: "s5", name: "Carlos V.", email: "", rating: 5, comment: "Les Loaded Fries sont criminellement bonnes. Le cheddar fondu c'est 🔥", date: "2025-02-18" }],
    18: [{ id: "s6", name: "Aïcha B.", email: "", rating: 5, comment: "Le meilleur cocktail gingembre-citron-miel que j'ai bu. Très tonique !", date: "2025-01-15" },
    { id: "s7", name: "Jean-Paul K.", email: "", rating: 5, comment: "Frais, naturel, équilibré. On en reprend toujours un deuxième !", date: "2025-02-01" }],
    30: [{ id: "s8", name: "Sandra N.", email: "", rating: 5, comment: "Le milkshake chocolat est ÉPAIS exactement comme je l'aime.", date: "2025-02-20" }],
    34: [{ id: "s9", name: "Lionel T.", email: "", rating: 5, comment: "Brownie fondant incroyable ! Le cœur chaud est parfait.", date: "2025-02-12" }],
};

// ── Helper: localStorage key per item ─────────────────────────────────────────
const reviewKey = (id: number) => `hotchick_reviews_${id}`;

const loadReviews = (itemId: number): Review[] => {
    try {
        const stored = localStorage.getItem(reviewKey(itemId));
        const user: Review[] = stored ? JSON.parse(stored) : [];
        const seed = SEED_REVIEWS[itemId] ?? [];
        return [...seed, ...user];
    } catch {
        return SEED_REVIEWS[itemId] ?? [];
    }
};

const saveReview = (itemId: number, review: Review) => {
    try {
        const stored = localStorage.getItem(reviewKey(itemId));
        const existing: Review[] = stored ? JSON.parse(stored) : [];
        localStorage.setItem(reviewKey(itemId), JSON.stringify([...existing, review]));
    } catch {
        // ignore
    }
};

// ── Star component ─────────────────────────────────────────────────────────────
const StarRating = ({
    value,
    onChange,
    readOnly = false,
    size = "md",
}: {
    value: number;
    onChange?: (v: number) => void;
    readOnly?: boolean;
    size?: "sm" | "md" | "lg";
}) => {
    const [hovered, setHovered] = useState(0);
    const sz = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`${sz} transition-colors ${star <= (hovered || value) ? "fill-accent text-accent" : "text-muted-foreground/40"
                        } ${!readOnly ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
                    onMouseEnter={() => !readOnly && setHovered(star)}
                    onMouseLeave={() => !readOnly && setHovered(0)}
                    onClick={() => !readOnly && onChange?.(star)}
                />
            ))}
        </div>
    );
};

// ── Form errors type ─────────────────────────────────────────────────────────
type FormErrors = { name?: string; email?: string; rating?: string; comment?: string };

// ── Page ──────────────────────────────────────────────────────────────────────
const ItemDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();

    const item = menuItems.find((m) => m.id === Number(id));

    const [reviews, setReviews] = useState<Review[]>([]);
    const [form, setForm] = useState({ name: "", email: "", rating: 0, comment: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (item) setReviews(loadReviews(item.id));
        window.scrollTo(0, 0);
    }, [item]);

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="font-display text-2xl">Plat introuvable</p>
                <Link to="/menu" className="text-primary underline">← Retour au menu</Link>
            </div>
        );
    }

    const translatedName = t(`menu.item_${item.id}.name`);
    const translatedDesc = t(`menu.item_${item.id}.desc`);
    const catKey = item.category.toLowerCase().replace(/\s+/g, "_");
    const avgRating = reviews.length
        ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
        : item.rating;

    const handleAdd = () => {
        addItem({ id: item.id, name: translatedName, price: item.price, image: item.image });
        toast.success(`${translatedName} ${i18n.language === "fr" ? "ajouté au panier !" : "added to cart!"}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs: FormErrors = {};
        if (!form.name.trim()) errs.name = "Requis";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email invalide";
        if (!form.rating) errs.rating = "Requis";
        if (!form.comment.trim()) errs.comment = "Requis";
        if (Object.keys(errs).length) { setErrors(errs); return; }

        const newReview: Review = {
            id: Date.now().toString(),
            name: form.name.trim(),
            email: form.email.trim(),
            rating: form.rating,
            comment: form.comment.trim(),
            date: new Date().toISOString().split("T")[0],
        };
        saveReview(item.id, newReview);
        setReviews((prev) => [...prev, newReview]);
        setForm({ name: "", email: "", rating: 0, comment: "" });
        setErrors({});
        setSubmitted(true);
        toast.success(i18n.language === "fr" ? "Avis publié ! Merci 🙏" : "Review posted! Thank you 🙏");
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <main className="min-h-screen bg-muted py-10">
            <div className="container max-w-5xl">
                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-display tracking-wider text-sm mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {i18n.language === "fr" ? "RETOUR AU MENU" : "BACK TO MENU"}
                </button>

                {/* Hero card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 mb-10"
                >
                    <div className="grid md:grid-cols-2">
                        {/* Image */}
                        <div className="relative aspect-square md:aspect-auto overflow-hidden">
                            <img src={item.image} alt={translatedName} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-display tracking-wider px-3 py-1 rounded-full">
                                {t(`menu.categories.${catKey}`)}
                            </span>
                        </div>

                        {/* Info */}
                        <div className="p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="font-display text-3xl md:text-4xl tracking-wide mb-3">{translatedName}</h1>

                                {/* Rating summary */}
                                <div className="flex items-center gap-3 mb-5">
                                    <StarRating value={Math.round(avgRating)} readOnly size="md" />
                                    <span className="font-display text-lg font-bold">{avgRating.toFixed(1)}</span>
                                    <span className="text-muted-foreground text-sm">({reviews.length} {i18n.language === "fr" ? "avis" : "reviews"})</span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-8">{translatedDesc}</p>
                            </div>

                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <span className="font-display text-3xl text-primary">
                                    {item.price.toLocaleString()} <span className="text-lg">FCFA</span>
                                </span>
                                <button
                                    onClick={handleAdd}
                                    className="flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-wider px-6 py-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/30"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    {t("menu.addToCart").toUpperCase()}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews section */}
                <div className="grid md:grid-cols-5 gap-8">
                    {/* Review form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="md:col-span-2"
                    >
                        <div className="bg-card rounded-2xl border border-border/50 shadow-md p-6">
                            <h2 className="font-display text-xl tracking-wider mb-1">
                                {i18n.language === "fr" ? "LAISSER UN AVIS" : "LEAVE A REVIEW"}
                            </h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                {i18n.language === "fr" ? "Partagez votre expérience avec ce plat." : "Share your experience with this dish."}
                            </p>

                            {submitted && (
                                <div className="bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 mb-5 text-sm font-display text-primary tracking-wide">
                                    {i18n.language === "fr" ? "✓ Avis publié ! Merci pour votre retour." : "✓ Review posted! Thanks for your feedback."}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="font-display text-xs tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        {i18n.language === "fr" ? "NOM" : "NAME"} *
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder={i18n.language === "fr" ? "Votre nom" : "Your name"}
                                        className={`w-full px-4 py-2.5 rounded-xl border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${errors.name ? "border-red-500" : "border-border"}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="font-display text-xs tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                        <Mail className="w-3.5 h-3.5" />
                                        EMAIL *
                                    </label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder={i18n.language === "fr" ? "votre@email.com" : "your@email.com"}
                                        className={`w-full px-4 py-2.5 rounded-xl border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${errors.email ? "border-red-500" : "border-border"}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Star rating */}
                                <div>
                                    <label className="font-display text-xs tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                        <Star className="w-3.5 h-3.5" />
                                        {i18n.language === "fr" ? "NOTE" : "RATING"} *
                                    </label>
                                    <StarRating
                                        value={form.rating}
                                        onChange={(v) => setForm({ ...form, rating: v })}
                                        size="lg"
                                    />
                                    {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
                                </div>

                                {/* Comment */}
                                <div>
                                    <label className="font-display text-xs tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        {i18n.language === "fr" ? "AVIS" : "COMMENT"} *
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={form.comment}
                                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                                        placeholder={i18n.language === "fr" ? "Partagez votre avis sur ce plat…" : "Share your thoughts on this dish…"}
                                        className={`w-full px-4 py-2.5 rounded-xl border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none ${errors.comment ? "border-red-500" : "border-border"}`}
                                    />
                                    {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display tracking-wider py-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20"
                                >
                                    <Send className="w-4 h-4" />
                                    {i18n.language === "fr" ? "PUBLIER MON AVIS" : "PUBLISH REVIEW"}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Reviews list */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-3 space-y-4"
                    >
                        <h2 className="font-display text-xl tracking-wider mb-1">
                            {i18n.language === "fr" ? `LES AVIS (${reviews.length})` : `REVIEWS (${reviews.length})`}
                        </h2>

                        {reviews.length === 0 && (
                            <div className="bg-card rounded-2xl border border-border/50 p-8 text-center text-muted-foreground text-sm">
                                {i18n.language === "fr" ? "Aucun avis pour l'instant. Soyez le premier !" : "No reviews yet. Be the first!"}
                            </div>
                        )}

                        {[...reviews].reverse().map((review, i) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="bg-card rounded-2xl border border-border/50 shadow-sm p-5"
                            >
                                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="font-display text-primary font-bold text-sm">
                                                {review.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-display text-sm font-semibold tracking-wide">{review.name}</p>
                                            <p className="text-muted-foreground text-xs">{review.date}</p>
                                        </div>
                                    </div>
                                    <StarRating value={review.rating} readOnly size="sm" />
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ItemDetailPage;
