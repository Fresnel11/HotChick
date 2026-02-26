import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/chick_hero.webp";
import heroImage2 from "@/assets/photo-1568901346375-23c9450c58cd.webp";
import heroImage3 from "@/assets/clipboard-image-1772002456.webp";
import heroImage4 from "@/assets/hero_jus.webp";
import heroImage5 from "@/assets/donut_hero.webp";
import heroImage6 from "@/assets/photo-1622483767028-3f66f32aef97.webp";
import teamImage from "@/assets/equipe_hotchick.webp";
import { menuItems } from "@/data/menuData";
import ProductCard from "@/components/ProductCard";
import StatsBar from "@/components/StatsBar";
import TestimonialsSection from "@/components/TestimonialsSection";

const heroImages = [
  { src: heroImage, alt: "Crispy chicken meals" },
  { src: heroImage2, alt: "Gourmet Chicken Burger" },
  { src: heroImage3, alt: "Golden Fried Tenders" },
  { src: heroImage5, alt: "Crispy French Fries" },
  { src: heroImage4, alt: "Fresh Chicken Wrap" },
  { src: heroImage6, alt: "Refreshing Beverages" },
];

const popularItems = menuItems.filter((i) => [1, 4, 9, 13].includes(i.id));

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Lighter overlays (from-foreground/60 instead of 85) */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent z-[1]" />

        <div className="relative container z-10">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex >= 4 ? "drink" : "food"}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit shadow-lg shadow-black/5">
                  <Flame className="w-5 h-5 text-primary fill-primary/10" />
                  <span className="font-display text-primary-foreground tracking-[0.2em] text-xs font-bold drop-shadow-sm">
                    {currentImageIndex >= 4 ? t("hero.drinkBadge") : t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 drop-shadow-xl space-y-4 md:space-y-5">
                  <div>{currentImageIndex >= 4 ? t("hero.drinkTitle") : t("hero.title")}</div>
                  <div>{currentImageIndex >= 4 ? t("hero.drinkTitleAccent") : t("hero.titleAccent")}</div>
                  <div>
                    <span className="text-gradient">
                      {currentImageIndex >= 4 ? t("hero.drinkSubtitle") : t("hero.subtitle")}
                    </span>
                    {currentImageIndex >= 4 ? t("hero.drinkSubtitleEnd") : t("hero.subtitleEnd")}
                  </div>
                </h1>

                <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-md leading-relaxed drop-shadow-md">
                  {currentImageIndex >= 4 ? t("hero.drinkDescription") : t("hero.description")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-wider text-lg px-8 py-4 rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/30"
                  >
                    {t("hero.orderNow")}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground font-display tracking-wider text-lg px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-all backdrop-blur-md"
                  >
                    {t("hero.viewMenu")}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators (Dots) moved up (bottom-32) - Responsive position to avoid overlap on mobile */}
        <div className="absolute bottom-20 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
                ? "bg-primary w-10"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Popular Dishes */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="font-display text-primary tracking-[0.3em] text-sm">
              {t("popular.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-2">
              {t("popular.title")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t("popular.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-14"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-display tracking-wider px-8 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {t("popular.seeAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="font-display text-primary tracking-[0.3em] text-sm">
              {t("team.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-2">
              {t("team.title")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t("team.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
              <img
                src={teamImage}
                alt="Équipe HotChick"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-md mx-auto">
              {t("cta.description")}
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-foreground text-background font-display tracking-wider text-lg px-10 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-xl"
            >
              {t("cta.order")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
