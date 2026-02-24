import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviewsData";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-display text-primary tracking-[0.3em] text-sm">
            WHAT PEOPLE SAY
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-2">
            LOVED BY <span className="text-gradient">THOUSANDS</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Don't just take our word for it — hear from our community of
            chicken lovers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      idx < review.rating
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                "{review.comment}"
              </p>

              {/* Menu item tag */}
              <span className="inline-block bg-primary/10 text-primary text-xs font-display tracking-wider px-3 py-1 rounded-full mb-4">
                {review.menuItem}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-sm font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display text-sm tracking-wide">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
