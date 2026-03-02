import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Animated accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent origin-right"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {t("hero.subtitle")}
          </span>
        </motion.div>

        {/* Giant typography */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold leading-[0.85] tracking-tighter"
          >
            {t("hero.title1")}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold leading-[0.85] tracking-tighter text-gradient"
          >
            {t("hero.title2")}
          </motion.h1>
        </div>

        {/* Description + CTA row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-md text-base text-muted-foreground leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <a
              href="#contacto"
              className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--gold)/0.5)] hover:scale-105"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-primary"
            >
              {t("hero.secondary")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
