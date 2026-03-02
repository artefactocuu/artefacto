import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Megaphone, Share2, Users, Code } from "lucide-react";

const iconMap = [Megaphone, Share2, Users, Code];
const serviceKeys = ["marketing", "social", "hr", "web"];

const Services = () => {
  const { t } = useLang();

  return (
    <section id="servicios" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("services.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("services.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = iconMap[i];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-15px_hsl(var(--gold)/0.2)]"
              >
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.${key}.desc`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
