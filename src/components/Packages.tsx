import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Check, X, ArrowRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface PackageDef {
  key: string;
  features: { key: string; included: boolean }[];
  highlighted?: boolean;
}

const packages: PackageDef[] = [
  {
    key: "starter",
    features: [
      { key: "marketing", included: true },
      { key: "social", included: true },
      { key: "hr", included: false },
      { key: "web", included: false },
      { key: "analytics", included: false },
      { key: "support", included: false },
      { key: "strategy", included: false },
    ],
  },
  {
    key: "growth",
    features: [
      { key: "marketing", included: true },
      { key: "social", included: true },
      { key: "hr", included: true },
      { key: "web", included: false },
      { key: "analytics", included: true },
      { key: "support", included: false },
      { key: "strategy", included: false },
    ],
  },
  {
    key: "integral",
    highlighted: true,
    features: [
      { key: "marketing", included: true },
      { key: "social", included: true },
      { key: "hr", included: true },
      { key: "web", included: true },
      { key: "analytics", included: true },
      { key: "support", included: true },
      { key: "strategy", included: true },
    ],
  },
];

const Packages = () => {
  const { t } = useLang();
  const isMobile = useIsMobile();

  return (
    <section id="paquetes" className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("packages.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("packages.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.key}
              initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : i * 0.15 }}
              className={`relative rounded-2xl border p-8 transition-colors duration-300 ${pkg.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/10 to-card scale-[1.02]"
                  : "border-border bg-card hover:border-muted-foreground/30"
                }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                  <Star className="h-3 w-3" />
                  {t("packages.integral.badge")}
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-2">
                {t(`packages.${pkg.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                {t(`packages.${pkg.key}.desc`)}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f.key} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/40"}>
                      {t(`packages.feature.${f.key}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`group flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors duration-300 ${pkg.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {t("packages.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
