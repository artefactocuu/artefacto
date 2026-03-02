import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const projects = [
  {
    title: "Panabelo",
    category: { es: "Identidad Visual", en: "Visual Identity" },
    image: "/portfolio/brand-identity.png",
  },
  {
    title: "Product Shoot",
    category: { es: "Fotografía de Producto", en: "Product Photography" },
    image: "/portfolio/product-photo.jpg",
  },
  {
    title: "Fashion Post",
    category: { es: "Redes Sociales", en: "Social Media" },
    image: "/portfolio/social-media.png",
  },
  {
    title: "Lifestyle Session",
    category: { es: "Dirección Creativa", en: "Creative Direction" },
    image: "/portfolio/creative-direction.jpg",
  },
  {
    title: "Editorial Shoot",
    category: { es: "Creación de Contenido", en: "Content Creation" },
    image: "/portfolio/content-creation.jpg",
  },
  {
    title: "Almatech Packaging",
    category: { es: "Campaña Digital", en: "Digital Campaign" },
    image: "/portfolio/digital-campaign.png",
  },
];

const Portfolio = () => {
  const { lang, t } = useLang();
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: isMobile,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Track current slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const activeProject = projects[current];

  return (
    <section id="portafolio" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            {t("portfolio.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t("portfolio.title")}</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Embla viewport */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex will-change-transform">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="flex-[0_0_90%] md:flex-[0_0_70%] min-w-0 px-2 md:px-3"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border will-change-transform transition-opacity duration-300 ${i === current
                        ? "border-primary/40 opacity-100"
                        : "border-border/50 opacity-40"
                      }`}
                    style={!isMobile && i !== current ? { transform: "scale(0.95)" } : undefined}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Gradient overlay on active */}
                    {i === current && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border/60 bg-background/90 p-2.5 md:p-3 text-muted-foreground active:text-primary transition-colors duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border/60 bg-background/90 p-2.5 md:p-3 text-muted-foreground active:text-primary transition-colors duration-200"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Active project info + dots */}
        <div className="mt-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs text-primary font-medium uppercase tracking-[0.2em] mb-2">
                {activeProject.category[lang]}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                {activeProject.title}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                  }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
