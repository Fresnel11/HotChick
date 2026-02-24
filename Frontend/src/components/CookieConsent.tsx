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
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="container max-w-5xl">
          <div className="bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Simple Banner */}
            {!showSettings && (
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl mb-2">
                      {isFr ? "🍪 Nous utilisons des cookies" : "🍪 We use cookies"}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                      {isFr
                        ? "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies."
                        : "We use cookies to enhance your experience, analyze traffic, and personalize content. By clicking 'Accept All', you consent to our use of cookies."}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={acceptAll}
                        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-display text-sm tracking-wider hover:bg-primary/90 transition-all"
                      >
                        {isFr ? "TOUT ACCEPTER" : "ACCEPT ALL"}
                      </button>
                      <button
                        onClick={rejectAll}
                        className="bg-muted text-foreground px-6 py-2.5 rounded-xl font-display text-sm tracking-wider hover:bg-muted/80 transition-all border border-border"
                      >
                        {isFr ? "TOUT REFUSER" : "REJECT ALL"}
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex items-center gap-2 text-muted-foreground px-4 py-2.5 rounded-xl font-display text-sm tracking-wider hover:text-foreground transition-all"
                      >
                        <Settings className="w-4 h-4" />
                        {isFr ? "PERSONNALISER" : "CUSTOMIZE"}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={rejectAll}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Settings Panel */}
            {showSettings && (
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl md:text-2xl">
                    {isFr ? "Paramètres des cookies" : "Cookie Settings"}
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-muted rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-display text-sm tracking-wider mb-1">
                        {isFr ? "COOKIES NÉCESSAIRES" : "NECESSARY COOKIES"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {isFr
                          ? "Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés."
                          : "These cookies are essential for the website to function and cannot be disabled."}
                      </p>
                    </div>
                    <div className="shrink-0 w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-muted rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-display text-sm tracking-wider mb-1">
                        {isFr ? "COOKIES ANALYTIQUES" : "ANALYTICS COOKIES"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {isFr
                          ? "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site."
                          : "These cookies help us understand how visitors interact with our website."}
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`shrink-0 w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.analytics ? "bg-primary justify-end" : "bg-border justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-muted rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-display text-sm tracking-wider mb-1">
                        {isFr ? "COOKIES MARKETING" : "MARKETING COOKIES"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {isFr
                          ? "Ces cookies sont utilisés pour afficher des publicités pertinentes."
                          : "These cookies are used to display relevant advertisements."}
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`shrink-0 w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.marketing ? "bg-primary justify-end" : "bg-border justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={savePreferences}
                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-display text-sm tracking-wider hover:bg-primary/90 transition-all"
                  >
                    {isFr ? "ENREGISTRER" : "SAVE PREFERENCES"}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="bg-muted text-foreground px-6 py-2.5 rounded-xl font-display text-sm tracking-wider hover:bg-muted/80 transition-all border border-border"
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
