import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Users, Cog, Award, Handshake, TrendingUp, MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import AccessibilitySkipLink from './AccessibilitySkipLink';

const MainNavigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = useMemo(() => [
    { id: 'equipo', label: t('nav.team'), icon: Users },
    { id: 'tecnico', label: t('nav.technical'), icon: Cog },
    { id: 'logros', label: t('nav.achievements'), icon: Award },
    { id: 'patrocinadores', label: t('nav.sponsors'), icon: Handshake },
    { id: 'marketing', label: t('nav.marketing'), icon: TrendingUp },
    { id: 'contacto', label: t('nav.contact'), icon: MessageCircle },
  ], [t]);

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    setShowScrollTop(scrollPosition > 500);

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

      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rx-black/95 backdrop-blur-md border-b border-rx-gold/20 touch-manipulation">
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 xs:h-16 sm:h-20">
            {/* Logo y nombre */}
            <div className="flex items-center space-x-2 xs:space-x-3">
              <img src="/revolutionx-logo.png" alt="RevolutionX Logo" className="h-7 xs:h-8 sm:h-10 w-auto" />
              <span className="font-display text-rx-gold text-base xs:text-lg sm:text-xl font-semibold">RevolutionX</span>
            </div>

            {/* Enlaces de navegación para pantallas grandes */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1.5 xl:space-x-2 px-2.5 xl:px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id ? 'text-rx-gold bg-rx-gold/10' : 'text-gray-300 hover:text-rx-gold hover:bg-rx-gold/5'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium text-sm xl:text-base">{item.label}</span>
                </button>
              ))}
              <a
                href="https://instagram.com/revolutionx_f1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 xl:space-x-2 px-2.5 xl:px-3 py-2 rounded-lg text-gray-300 hover:text-rx-gold hover:bg-rx-gold/5 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span className="font-medium text-sm xl:text-base">Instagram</span>
              </a>
            </div>

            {/* Botón de menú para móviles */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 xs:p-2 rounded-lg bg-rx-gold/10 hover:bg-rx-gold/20 transition-colors duration-300 focus-ring"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6 text-rx-gold" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6 text-rx-gold" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-rx-gold/10"
            >
              <div className="px-3 xs:px-4 py-3 xs:py-4 space-y-1.5 xs:space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-2 xs:space-x-3 p-2.5 xs:p-3 rounded-lg transition-all duration-300 ${activeSection === item.id ? 'bg-rx-gold/20 text-rx-gold' : 'text-gray-300 hover:bg-rx-gold/10 hover:text-rx-gold'}`}
                  >
                    <item.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                    <span className="font-medium text-sm xs:text-base">{item.label}</span>
                  </button>
                ))}
                <a
                  href="https://instagram.com/revolutionx_f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-2 xs:space-x-3 p-2.5 xs:p-3 rounded-lg text-gray-300 hover:bg-rx-gold/10 hover:text-rx-gold transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5" />
                  <span className="font-medium text-sm xs:text-base">Instagram</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Botón Volver Arriba */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-3 xs:bottom-28 xs:right-4 sm:bottom-32 sm:right-6 z-40 p-2 xs:p-2.5 sm:p-3 bg-rx-gold/20 hover:bg-rx-gold/30 text-rx-gold rounded-full shadow-lg hover:shadow-rx-gold/25 border border-rx-gold/30 transition-all duration-300 focus-ring touch-manipulation"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;