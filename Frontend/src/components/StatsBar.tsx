import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, MapPin, Star } from "lucide-react";

interface StatItemProps {
  icon: any;
  value: string;
  label: string;
  index: number;
}

const StatItem = ({ icon: Icon, value, label, index }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numerical value and suffix/prefix
  const numericMatch = value.match(/(\d+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(numericMatch ? numericMatch[0] : "", "");
  const prefix = value.startsWith("#") ? "#" : "";
  const displaySuffix = prefix ? suffix.replace("#", "") : suffix;

  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (latest) => {
    if (value.includes(".")) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toString();
  });

  useEffect(() => {
    if (isInView && value !== "#1") {
      spring.set(numericValue);
    } else if (value === "#1") {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
      className="text-center"
    >
      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
      <div className="font-display text-2xl md:text-3xl text-foreground flex items-center justify-center">
        {prefix}
        {value === "#1" ? (
          <span>{numericValue}</span>
        ) : (
          <motion.span>{displayValue}</motion.span>
        )}
        {displaySuffix}
      </div>
      <p className="text-muted-foreground text-xs md:text-sm font-display tracking-wider mt-1">
        {label}
      </p>
    </motion.div>
  );
};

const stats = [
  { icon: Star, value: "4.9", labelKey: "stats.rating" },
  { icon: Users, value: "50K+", labelKey: "stats.customers" },
  { icon: MapPin, value: "12", labelKey: "stats.locations" },
  { icon: Award, value: "#1", labelKey: "stats.best" },
];

const StatsBar = () => {
  const { t } = useTranslation();
  return (
    <section className="relative -mt-12 z-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-2xl shadow-foreground/5 border border-border/50 p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.labelKey}
                icon={stat.icon}
                value={stat.value}
                label={t(stat.labelKey)}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
