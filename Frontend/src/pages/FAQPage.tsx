import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: t("faq.ordering.category"),
      questions: [
        { q: t("faq.ordering.q1"), a: t("faq.ordering.a1") },
        { q: t("faq.ordering.q2"), a: t("faq.ordering.a2") },
        { q: t("faq.ordering.q3"), a: t("faq.ordering.a3") },
        { q: t("faq.ordering.q4"), a: t("faq.ordering.a4") },
      ],
    },
    {
      category: t("faq.delivery.category"),
      questions: [
        { q: t("faq.delivery.q1"), a: t("faq.delivery.a1") },
        { q: t("faq.delivery.q2"), a: t("faq.delivery.a2") },
        { q: t("faq.delivery.q3"), a: t("faq.delivery.a3") },
        { q: t("faq.delivery.q4"), a: t("faq.delivery.a4") },
      ],
    },
    {
      category: t("faq.payment.category"),
      questions: [
        { q: t("faq.payment.q1"), a: t("faq.payment.a1") },
        { q: t("faq.payment.q2"), a: t("faq.payment.a2") },
        { q: t("faq.payment.q3"), a: t("faq.payment.a3") },
      ],
    },
    {
      category: t("faq.menu.category"),
      questions: [
        { q: t("faq.menu.q1"), a: t("faq.menu.a1") },
        { q: t("faq.menu.q2"), a: t("faq.menu.a2") },
        { q: t("faq.menu.q3"), a: t("faq.menu.a3") },
      ],
    },
    {
      category: t("faq.reservation.category"),
      questions: [
        { q: t("faq.reservation.q1"), a: t("faq.reservation.a1") },
        { q: t("faq.reservation.q2"), a: t("faq.reservation.a2") },
        { q: t("faq.reservation.q3"), a: t("faq.reservation.a3") },
      ],
    },
  ];

  let globalIndex = 0;

  return (
    <main className="py-12 md:py-20 bg-muted min-h-screen">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-display text-primary tracking-[0.3em] text-sm">
            {t("faq.badge")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-2">
            {t("faq.title")}
          </h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            {t("faq.description")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h2 className="font-display text-2xl text-primary mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((item) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex === currentIndex ? null : currentIndex
                          )
                        }
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-display text-lg pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === currentIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
