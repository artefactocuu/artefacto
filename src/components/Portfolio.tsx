import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechCorp Rebrand",
    category: { es: "Marketing Digital", en: "Digital Marketing" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "FoodieApp Social",
    category: { es: "Redes Sociales", en: "Social Media" },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
  {
    title: "StartupX Website",
    category: { es: "Desarrollo Web", en: "Web Development" },
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    title: "GlobalHR Platform",
    category: { es: "Recursos Humanos", en: "Human Resources" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const { lang, t } = useLang();

  return (
    <section id="portafolio" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("portfolio.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("portfolio.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                    {project.category[lang]}
                  </p>
                  <h3 className="font-display text-xl font-bold flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4" />
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
