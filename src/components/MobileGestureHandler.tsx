import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface MobileGestureHandlerProps {
  children: React.ReactNode;
}

const MobileGestureHandler: React.FC<MobileGestureHandlerProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sections = ['equipo', 'tecnico', 'logros', 'patrocinadores', 'marketing', 'contacto'];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePanEnd = (_event: Event, info: PanInfo) => {
    if (!isMobile) return;

    const threshold = 50;
    const velocity = info.velocity.y;

    if (Math.abs(info.offset.y) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.y > 0 || velocity > 0) {
        // Swipe down - go to previous section
        if (currentSection > 0) {
          const newSection = currentSection - 1;
          setCurrentSection(newSection);
          scrollToSection(sections[newSection]);
        }
      } else {
        // Swipe up - go to next section
        if (currentSection < sections.length - 1) {
          const newSection = currentSection + 1;
          setCurrentSection(newSection);
          scrollToSection(sections[newSection]);
        }
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <motion.div
      onPanEnd={handlePanEnd}
      className="touch-pan-y"
    >
      {children}

      {/* Mobile Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {sections.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => {
              setCurrentSection(index);
              scrollToSection(section);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index
                ? 'bg-rx-gold scale-125'
                : 'bg-rx-gold/30 hover:bg-rx-gold/60'
              }`}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MobileGestureHandler;