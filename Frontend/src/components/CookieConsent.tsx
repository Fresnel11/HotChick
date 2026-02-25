import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { i18n } = useTranslation();
  const isFr = i18n.language === "fr";

  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-3 md:p-6"
      >
        <div className="container max-w-5xl">
          <div className="bg-card border-2 border-border rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            {/* Simple Banner */}
            {!showSettings && (
              <div className="p-4 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base md:text-xl lg:text-2xl mb-1.5 md:mb-2">
                      {isFr ? "🍪 Nous utilisons des cookies" : "🍪 We use cookies"}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed">
                      {isFr
                        ? "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu."
                        : "We use cookies to enhance your experience, analyze traffic, and personalize content."}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <button
                        onClick={acceptAll}
                        className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-display text-xs md:text-sm tracking-wider hover:bg-primary/90 transition-all"
                      >
                        {isFr ? "ACCEPTER" : "ACCEPT"}
                      </button>
                      <button
                        onClick={rejectAll}
                        className="bg-muted text-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-display text-xs md:text-sm tracking-wider hover:bg-muted/80 transition-all border border-border"
                      >
                        {isFr ? "REFUSER" : "REJECT"}
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex items-center gap-1.5 md:gap-2 text-muted-foreground px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl font-display text-xs md:text-sm tracking-wider hover:text-foreground transition-all"
                      >
                        <Settings className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">{isFr ? "PERSONNALISER" : "CUSTOMIZE"}</span>
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={rejectAll}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Settings Panel */}
            {showSettings && (
              <div className="p-4 md:p-8">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="font-display text-base md:text-xl lg:text-2xl">
                    {isFr ? "Paramètres des cookies" : "Cookie Settings"}
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  {/* Necessary */}
                  <div className="flex items-start justify-between gap-3 md:gap-4 p-3 md:p-4 bg-muted rounded-lg md:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-xs md:text-sm tracking-wider mb-0.5 md:mb-1">
                        {isFr ? "COOKIES NÉCESSAIRES" : "NECESSARY COOKIES"}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                        {isFr
                          ? "Ces cookies sont essentiels au fonctionnement du site."
                          : "These cookies are essential for the website to function."}
                      </p>
                    </div>
                    <div className="shrink-0 w-10 h-5 md:w-12 md:h-6 bg-primary rounded-full flex items-center justify-end px-0.5 md:px-1">
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-3 md:gap-4 p-3 md:p-4 bg-muted rounded-lg md:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-xs md:text-sm tracking-wider mb-0.5 md:mb-1">
                        {isFr ? "COOKIES ANALYTIQUES" : "ANALYTICS COOKIES"}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                        {isFr
                          ? "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site."
                          : "These cookies help us understand how visitors interact with our website."}
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`shrink-0 w-10 h-5 md:w-12 md:h-6 rounded-full flex items-center transition-all ${
                        preferences.analytics ? "bg-primary justify-end" : "bg-border justify-start"
                      } px-0.5 md:px-1`}
                    >
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-3 md:gap-4 p-3 md:p-4 bg-muted rounded-lg md:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-xs md:text-sm tracking-wider mb-0.5 md:mb-1">
                        {isFr ? "COOKIES MARKETING" : "MARKETING COOKIES"}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                        {isFr
                          ? "Ces cookies sont utilisés pour afficher des publicités pertinentes."
                          : "These cookies are used to display relevant advertisements."}
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`shrink-0 w-10 h-5 md:w-12 md:h-6 rounded-full flex items-center transition-all ${
                        preferences.marketing ? "bg-primary justify-end" : "bg-border justify-start"
                      } px-0.5 md:px-1`}
                    >
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button
                    onClick={savePreferences}
                    className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-display text-xs md:text-sm tracking-wider hover:bg-primary/90 transition-all"
                  >
                    {isFr ? "ENREGISTRER" : "SAVE"}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="bg-muted text-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-display text-xs md:text-sm tracking-wider hover:bg-muted/80 transition-all border border-border"
                  >
                    {isFr ? "TOUT ACCEPTER" : "ACCEPT ALL"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
