import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Languages } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import hotchickLogo from "@/assets/hotchick_logo1.png";

const Navbar = () => {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const links = [
    { to: "/", label: t("nav.menu") }, // Wait, usually "Home" is separate, but user had Home and Menu.
    { to: "/menu", label: "Menu" }, // In config I had nav.menu: "Menu" (FR) / "Menu" (EN)
  ];

  // Let's refine the links based on labels from config
  const navLinks = [
    { to: "/", label: i18n.language === "fr" ? "Accueil" : "Home" },
    { to: "/menu", label: t("nav.menu") },
    { to: "/locations", label: t("nav.locations") },
    { to: "/reservation", label: i18n.language === "fr" ? "Réserver" : "Reserve" },
    { to: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 md:gap-2 group">
          <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
            <img src={hotchickLogo} alt="HotChick" className="w-20 h-20" />
          </motion.div>
          <span className="font-display text-2xl md:text-3xl text-gray-900 tracking-wider">
            HOT<span className="text-primary">CHICK</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-display text-sm tracking-widest uppercase transition-colors ${isActive(link.to) ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
            >
              {link.label}
              {isActive(link.to) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-xs font-display tracking-widest uppercase text-gray-700"
          >
            <Languages className="w-4 h-4 text-primary" />
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-display text-sm tracking-wider uppercase hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <ShoppingCart className="w-4 h-4" />
            {t("nav.cart")}
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-display uppercase text-gray-700"
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
          <Link to="/cart" className="relative text-gray-900">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="text-gray-900">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`font-display text-lg tracking-wider uppercase py-2 block ${isActive(link.to) ? "text-primary" : "text-gray-700"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
