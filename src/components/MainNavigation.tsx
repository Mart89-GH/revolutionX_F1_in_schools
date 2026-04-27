import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, ArrowUp } from 'lucide-react';
import AccessibilitySkipLink from './AccessibilitySkipLink';

const MainNavigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: 'equipo', label: t('nav.team') },
    { id: 'tecnico', label: t('nav.technical') },
    { id: 'logros', label: t('nav.achievements') },
    { id: 'patrocinadores', label: t('nav.sponsors') },
    { id: 'marketing', label: t('nav.marketing') },
    { id: 'contacto', label: t('nav.contact') },
  ], [t]);

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    setShowScrollTop(scrollPosition > 500);
    setScrolled(window.scrollY > 50);

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].id);
        break;
      }
    }
  }, [navItems]);

  useEffect(() => {
    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AccessibilitySkipLink />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-rx-black/80 backdrop-blur-2xl border-b border-white/[0.04]' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/revolutionx-logo.png" alt="RevolutionX Logo" className="h-8 sm:h-10 w-auto" />
            </motion.div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-rx-gold bg-rx-gold/10' 
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://instagram.com/revolutionx_f1"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-2 rounded-full text-white/30 hover:text-rx-gold transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white/60 hover:text-white transition-colors duration-300 focus-ring"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-rx-black/95 backdrop-blur-3xl border-t border-white/[0.04]"
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-rx-gold bg-rx-gold/10' 
                        : 'text-white/40 hover:text-white/80 hover:bg-white/[0.03]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://instagram.com/revolutionx_f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/40 hover:text-rx-gold transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 z-40 p-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] text-white/40 hover:text-rx-gold hover:border-rx-gold/30 transition-all duration-300 focus-ring"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;