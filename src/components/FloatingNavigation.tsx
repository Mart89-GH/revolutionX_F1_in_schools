import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Users, Cog, Award, Handshake, TrendingUp, MessageSquare, Instagram } from 'lucide-react';

const FloatingNavigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'equipo', label: t('nav.team'), icon: Users },
    { id: 'tecnico', label: t('nav.technical'), icon: Cog },
    { id: 'logros', label: t('nav.achievements'), icon: Award },
    { id: 'patrocinadores', label: t('nav.sponsors'), icon: Handshake },
    { id: 'marketing', label: t('nav.marketing'), icon: TrendingUp },
    { id: 'contacto', label: t('nav.contact'), icon: MessageSquare },
  ];

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

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

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Floating Menu Button */}
      <motion.div
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={toggleMenu}
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rx-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-rx-gold/25 transition-all duration-300 border-2 border-rx-gold/20 focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 sm:w-7 sm:h-7 text-rx-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 sm:w-7 sm:h-7 text-rx-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-rx-black/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
              <motion.div
                className="bg-gradient-to-br from-rx-dark to-rx-black rounded-2xl sm:rounded-3xl border border-rx-gold/30 p-6 sm:p-10 max-w-sm sm:max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="text-center mb-8 sm:mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl text-rx-gold mb-3">Navegación</h3>
                  <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto"></div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rx-gold/50 ${
                          isActive 
                            ? 'bg-rx-gold/20 border border-rx-gold/50 text-rx-gold shadow-lg' 
                            : 'bg-rx-gold/5 border border-rx-gold/10 text-white hover:bg-rx-gold/10 hover:border-rx-gold/30'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                        <span className="font-medium text-base sm:text-lg">{item.label}</span>
                      </motion.button>
                    );
                  })}
                  
                  {/* Instagram Link */}
                  <motion.a
                    href="https://instagram.com/revolutionx_f1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium text-base sm:text-lg">Instagram</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavigation;