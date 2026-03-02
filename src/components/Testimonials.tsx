import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "María González",
    role: { es: "CEO, TechStart MX", en: "CEO, TechStart MX" },
    text: {
      es: "Artefacto transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas en menos de 3 meses.",
      en: "Artefacto completely transformed our digital presence. Results exceeded our expectations in less than 3 months.",
    },
  },
  {
    name: "Carlos Herrera",
    role: { es: "Director de Marketing, Grupo Avanza", en: "Marketing Director, Grupo Avanza" },
    text: {
      es: "El paquete integral fue exactamente lo que necesitábamos. Un solo equipo manejan todo con una calidad excepcional.",
      en: "The integral package was exactly what we needed. One team handles everything with exceptional quality.",
    },
  },
  {
    name: "Ana Rodríguez",
    role: { es: "Fundadora, EcoVerde", en: "Founder, EcoVerde" },
    text: {
      es: "Su equipo de desarrollo web creó un sitio que no solo se ve increíble, sino que también convierte visitantes en clientes.",
      en: "Their web development team created a site that not only looks incredible but also converts visitors into customers.",
    },
  },
  {
    name: "Roberto Méndez",
    role: { es: "COO, Industrias Progreso", en: "COO, Industrias Progreso" },
    text: {
      es: "Los servicios de RH nos ayudaron a estructurar nuestro equipo y mejorar la retención de talento en un 40%.",
      en: "Their HR services helped us structure our team and improve talent retention by 40%.",
    },
  },
];

const Testimonials = () => {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];

  return (
    <section id="testimonios" className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("testimonials.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Quote className="h-10 w-10 text-primary/30 mx-auto mb-8" />
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light italic">
              "{item.text[lang]}"
            </p>
            <div>
              <p className="font-display font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role[lang]}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="rounded-full border border-border p-2 text-muted-foreground active:text-primary transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-border p-2 text-muted-foreground active:text-primary transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
