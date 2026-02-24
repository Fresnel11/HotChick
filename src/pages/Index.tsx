import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-chicken.jpg";
import { menuItems } from "@/data/menuData";
import ProductCard from "@/components/ProductCard";
import StatsBar from "@/components/StatsBar";
import TestimonialsSection from "@/components/TestimonialsSection";

const heroImages = [
  { src: heroImage, alt: "Crispy chicken meals" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop", alt: "Gourmet Chicken Burger" },
  { src: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=2000&auto=format&fit=crop", alt: "Golden Fried Tenders" },
  { src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2000&auto=format&fit=crop", alt: "Fresh Chicken Wrap" },
  { src: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2000&auto=format&fit=crop", alt: "Crispy French Fries" },
  { src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2000&auto=format&fit=crop", alt: "Refreshing Beverages" },
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
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </AnimatePresence>
        </div>

        {/* Lighter overlays (from-foreground/60 instead of 85) */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent z-[1]" />

        <div className="relative container z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <Flame className="w-5 h-5 text-primary" />
              <span className="font-display text-primary tracking-[0.3em] text-sm drop-shadow-sm">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6 drop-shadow-xl"
            >
              {t("hero.title")}
              <br />
              {t("hero.titleAccent")}
              <br />
              <span className="text-gradient">{t("hero.subtitle")}</span>{t("hero.subtitleEnd")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-md leading-relaxed drop-shadow-md"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
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
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators (Dots) moved up (bottom-32) */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
