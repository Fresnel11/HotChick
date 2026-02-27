import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hotchickLogo from "@/assets/hotchick_logo.png";

const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    { to: "/", label: i18n.language === "fr" ? "Accueil" : "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/locations", label: t("nav.locations") },
    { to: "/reservation", label: i18n.language === "fr" ? "Réserver" : "Reserve" },
    { to: "/faq", label: "FAQ" },
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
              {[Instagram, Facebook, Twitter, WhatsApp].map((Icon, i) => (
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
