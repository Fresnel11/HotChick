import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-display text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground font-display uppercase tracking-wider">{t("notFound.title")}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 rounded-xl hover:bg-primary/90 transition-all uppercase"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
