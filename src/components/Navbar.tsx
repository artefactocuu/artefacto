import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Globe, Menu, X } from "lucide-react";
import ArtefactoLogo from "@/components/ArtefactoLogo";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  const links = [
    { key: "nav.services", href: "#servicios" },
    { key: "nav.packages", href: "#paquetes" },
    { key: "nav.portfolio", href: "#portafolio" },
    { key: "nav.testimonials", href: "#testimonios" },
    { key: "nav.contact", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[hsl(var(--border)/0.5)] ${isMobile
          ? "bg-[hsl(var(--surface)/0.95)]"
          : "backdrop-blur-xl bg-[hsl(var(--surface)/0.7)]"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-3">
          <ArtefactoLogo className="h-8 w-8 text-foreground" />
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>ARTEFACTO</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground active:text-primary transition-colors duration-200"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-[hsl(var(--surface)/0.95)]">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground active:text-primary transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
