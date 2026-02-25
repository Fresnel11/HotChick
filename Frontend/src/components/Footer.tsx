import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hotchickLogo from "@/assets/hotchick_logo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    { to: "/", label: i18n.language === "fr" ? "Accueil" : "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/locations", label: t("nav.locations") },
    { to: "/reservation", label: i18n.language === "fr" ? "Réserver" : "Reserve" },
    { to: "/cart", label: t("nav.cart") },
  ];

  return (
    <footer className="bg-dark-surface text-dark-surface-foreground/70 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={hotchickLogo} alt="HotChick logo" className="h-10 w-auto" />
              <span className="font-display text-2xl text-dark-surface-foreground tracking-wider">
                HOT<span className="text-primary">CHICK</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-dark-surface-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-dark-surface-foreground text-lg tracking-wider mb-4">{t("footer.links")}</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-dark-surface-foreground text-lg tracking-wider mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {t("footer.address")}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                (555) 123-4567
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-dark-surface-foreground text-lg tracking-wider mb-4">{t("footer.hours")}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>{t("footer.monFri")}</p>
                  <p>{t("footer.satSun")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} HotChick. {t("footer.rights")}</p>
          {/* <p className="text-dark-surface-foreground/40">{t("footer.crafted")}</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
