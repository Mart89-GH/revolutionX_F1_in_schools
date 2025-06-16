import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TeamSection from './components/TeamSection';
import TechnicalSection from './components/TechnicalSection';
import AchievementsSection from './components/AchievementsSection';
import SponsorsSection from './components/SponsorsSection';
import MarketingSection from './components/MarketingSection';
import ContactSection from './components/ContactSection';
import FloatingNavigation from './components/FloatingNavigation';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import ParallaxSection from './components/ParallaxSection';
import InteractiveSpeedometer from './components/InteractiveSpeedometer';
import InstagramFeed from './components/InstagramFeed';
import F1GameElement from './components/F1GameElement';

function App() {
  return (
    <div className="bg-rx-black text-white min-h-screen font-body overflow-x-hidden">
      <ScrollProgressIndicator />
      <FloatingNavigation />
      
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden" aria-label="Inicio">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-rx-black via-rx-dark to-rx-black opacity-95"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/10 via-transparent to-transparent"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-rx-gold/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8"
          >
            <motion.img 
              src="/revolutionx-logo.png"
              alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
              className="w-48 sm:w-64 md:w-72 mx-auto mb-8 sm:mb-12 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.5 }
              }}
            />
            
            <motion.h1 
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 sm:mb-8 text-rx-gold bg-clip-text text-transparent bg-gradient-to-r from-rx-gold via-yellow-200 to-rx-gold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              RevolutionX
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="font-display text-lg sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                Equipo F1 in Schools
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Innovación y excelencia en ingeniería del IES José Saramago
              </p>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto my-6 sm:my-8"></div>
              <p className="text-sm sm:text-lg md:text-xl text-rx-gold font-medium px-4">
                Su marca puede ser parte de nuestra historia de éxito
              </p>
            </motion.div>
            
            <motion.div
              className="mt-12 sm:mt-16"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-rx-gold/80" />
            </motion.div>
          </motion.div>
        </section>

        <ParallaxSection speed={0.3}>
          <TeamSection />
        </ParallaxSection>

        <ParallaxSection speed={0.2}>
          <TechnicalSection />
        </ParallaxSection>

        {/* Interactive Performance Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-rx-dark to-rx-black">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-rx-gold mb-6 sm:mb-8">
                Rendimiento Récord
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                Experimenta la velocidad que nos llevó al primer puesto
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              <div className="flex justify-center">
                <InteractiveSpeedometer />
              </div>
              <div className="flex justify-center">
                <F1GameElement />
              </div>
            </div>
          </div>
        </section>

        <ParallaxSection speed={0.1}>
          <AchievementsSection />
        </ParallaxSection>

        <ParallaxSection speed={0.2}>
          <SponsorsSection />
        </ParallaxSection>

        <ParallaxSection speed={0.3}>
          <MarketingSection />
        </ParallaxSection>

        {/* Enhanced Social Media Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-rx-black to-rx-dark">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-rx-gold mb-6 sm:mb-8">
                Síguenos en Redes
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                Mantente al día con nuestras últimas actualizaciones y contenido exclusivo
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <InstagramFeed />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="bg-gradient-to-t from-rx-black to-rx-dark border-t border-rx-gold/20 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4 sm:mb-6">
            <motion.img 
              src="/revolutionx-logo.png"
              alt="RevolutionX Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-60"
              whileHover={{ 
                opacity: 1, 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm px-4">
            © {new Date().getFullYear()} RevolutionX - IES José Saramago. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;