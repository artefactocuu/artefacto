import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("contact.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t("contact.desc")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contacto@artefacto.com"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--gold)/0.5)] hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              {t("contact.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:contacto@artefacto.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              contacto@artefacto.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
