import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, ChevronDown } from "lucide-react";
import { menuItems, categories } from "@/data/menuData";
import ProductCard from "@/components/ProductCard";

type SortKey = "default" | "name_asc" | "price_asc" | "price_desc";

const MenuPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  const sortOptions: { key: SortKey; label: string }[] = [
    { key: "default", label: t("menu.sortDefault") },
    { key: "name_asc", label: t("menu.sortNameAsc") },
    { key: "price_asc", label: t("menu.sortPriceAsc") },
    { key: "price_desc", label: t("menu.sortPriceDesc") },
  ];

  const filtered = useMemo(() => {
    let items = activeCategory === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter((i) => {
        const name = t(`menu.item_${i.id}.name`).toLowerCase();
        const desc = t(`menu.item_${i.id}.desc`).toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }

    if (sortKey === "name_asc") return [...items].sort((a, b) => t(`menu.item_${a.id}.name`).localeCompare(t(`menu.item_${b.id}.name`)));
    if (sortKey === "price_asc") return [...items].sort((a, b) => a.price - b.price);
    if (sortKey === "price_desc") return [...items].sort((a, b) => b.price - a.price);
    return items;
  }, [activeCategory, sortKey, search, t]);

  const activeSortLabel = sortOptions.find((o) => o.key === sortKey)?.label ?? "";

  return (
    <main className="py-12 md:py-20 bg-muted min-h-screen">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="font-display text-primary tracking-[0.3em] text-sm">{t("menuPage.badge")}</span>
          <h1 className="font-display text-4xl md:text-5xl mt-2">{t("menuPage.title")}</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">{t("menuPage.description")}</p>
        </motion.div>

        {/* Search + Sort bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("menu.searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm font-display tracking-wide placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-xl font-display text-sm tracking-wider whitespace-nowrap hover:bg-primary/5 transition-colors"
            >
              <span className="text-muted-foreground">{t("menu.sortBy")} :</span>
              <span className="text-foreground">{activeSortLabel}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-xl z-30 overflow-hidden"
                >
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => { setSortKey(opt.key); setSortOpen(false); }}
                      className={`w-full text-left px-5 py-3 font-display text-sm tracking-wide transition-colors ${sortKey === opt.key ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-sm tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-primary/10 border border-border"
                }`}
            >
              {t(`menu.categories.${cat.toLowerCase().replace(/\s+/g, "_")}`).toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-muted-foreground font-display tracking-wider py-20"
            >
              {t("menu.noResults")}
            </motion.p>
          ) : (
            <motion.div
              key={`${activeCategory}-${sortKey}-${search}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default MenuPage;
