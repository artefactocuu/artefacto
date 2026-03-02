import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "es" | "en";

interface Translations {
  [key: string]: { es: string; en: string };
}

const translations: Translations = {
  // Navbar
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.packages": { es: "Paquetes", en: "Packages" },
  "nav.portfolio": { es: "Portafolio", en: "Portfolio" },
  "nav.testimonials": { es: "Testimonios", en: "Testimonials" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.subtitle": { es: "Agencia de servicios integrales", en: "Full-service agency" },
  "hero.title1": { es: "Transformamos", en: "We Transform" },
  "hero.title2": { es: "tu empresa", en: "Your Business" },
  "hero.description": {
    es: "Marketing digital, redes sociales, recursos humanos y desarrollo web. Todo lo que tu empresa necesita para crecer, en un solo lugar.",
    en: "Digital marketing, social media, human resources, and web development. Everything your business needs to grow, in one place.",
  },
  "hero.cta": { es: "Comienza ahora", en: "Get Started" },
  "hero.secondary": { es: "Ver servicios", en: "View Services" },

  // Services
  "services.label": { es: "Nuestros servicios", en: "Our Services" },
  "services.title": { es: "Soluciones que impulsan resultados", en: "Solutions That Drive Results" },
  "services.marketing.title": { es: "Marketing Digital", en: "Digital Marketing" },
  "services.marketing.desc": {
    es: "Estrategias de marketing personalizadas que aumentan tu visibilidad y generan leads cualificados.",
    en: "Customized marketing strategies that boost your visibility and generate qualified leads.",
  },
  "services.social.title": { es: "Redes Sociales", en: "Social Media" },
  "services.social.desc": {
    es: "Gestión profesional de tus redes sociales con contenido que conecta y convierte.",
    en: "Professional social media management with content that connects and converts.",
  },
  "services.hr.title": { es: "Recursos Humanos", en: "Human Resources" },
  "services.hr.desc": {
    es: "Soluciones de RH que optimizan tu equipo y cultura organizacional.",
    en: "HR solutions that optimize your team and organizational culture.",
  },
  "services.web.title": { es: "Desarrollo Web", en: "Web Development" },
  "services.web.desc": {
    es: "Sitios web modernos y funcionales que representan la esencia de tu marca.",
    en: "Modern, functional websites that represent the essence of your brand.",
  },

  // Packages
  "packages.label": { es: "Nuestros paquetes", en: "Our Packages" },
  "packages.title": { es: "El plan perfecto para ti", en: "The Perfect Plan for You" },
  "packages.starter.title": { es: "Starter", en: "Starter" },
  "packages.starter.desc": { es: "Ideal para empresas que inician", en: "Ideal for starting businesses" },
  "packages.growth.title": { es: "Growth", en: "Growth" },
  "packages.growth.desc": { es: "Para empresas en crecimiento", en: "For growing businesses" },
  "packages.integral.title": { es: "Integral", en: "Integral" },
  "packages.integral.desc": { es: "Todos los servicios en uno", en: "All services in one" },
  "packages.integral.badge": { es: "Más popular", en: "Most Popular" },
  "packages.cta": { es: "Solicitar información", en: "Request Info" },
  "packages.feature.marketing": { es: "Marketing Digital", en: "Digital Marketing" },
  "packages.feature.social": { es: "Gestión de Redes", en: "Social Media Mgmt" },
  "packages.feature.hr": { es: "Recursos Humanos", en: "Human Resources" },
  "packages.feature.web": { es: "Desarrollo Web", en: "Web Development" },
  "packages.feature.analytics": { es: "Analítica avanzada", en: "Advanced Analytics" },
  "packages.feature.support": { es: "Soporte prioritario", en: "Priority Support" },
  "packages.feature.strategy": { es: "Estrategia personalizada", en: "Custom Strategy" },

  // Portfolio
  "portfolio.label": { es: "Nuestro trabajo", en: "Our Work" },
  "portfolio.title": { es: "Proyectos que hablan por sí solos", en: "Projects That Speak for Themselves" },

  // Testimonials
  "testimonials.label": { es: "Testimonios", en: "Testimonials" },
  "testimonials.title": { es: "Lo que dicen nuestros clientes", en: "What Our Clients Say" },

  // Contact
  "contact.label": { es: "Contacto", en: "Contact" },
  "contact.title": { es: "¿Listo para transformar tu negocio?", en: "Ready to Transform Your Business?" },
  "contact.desc": {
    es: "Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.",
    en: "Contact us today and discover how we can help you achieve your goals.",
  },
  "contact.cta": { es: "Contáctanos", en: "Contact Us" },
  "contact.email": { es: "Envíanos un email", en: "Send us an email" },

  // Footer
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "footer.tagline": { es: "Impulsando empresas hacia el futuro.", en: "Driving businesses into the future." },
};

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  return <LangContext.Provider value={{ lang, toggleLang, t }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
