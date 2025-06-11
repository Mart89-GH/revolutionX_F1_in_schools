import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TeamSection from './components/TeamSection';
import TechnicalSection from './components/TechnicalSection';
import AchievementsSection from './components/AchievementsSection';
import SponsorsSection from './components/SponsorsSection';
import MarketingSection from './components/MarketingSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-rx-black text-white min-h-screen font-body">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden" aria-label="Inicio">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-rx-black via-rx-dark to-rx-black opacity-95"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/10 via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto px-6"
          >
            <motion.img 
              src="/revolutionx-logo.png"
              alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
              className="w-72 mx-auto mb-12 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 text-rx-gold bg-clip-text text-transparent bg-gradient-to-r from-rx-gold via-yellow-200 to-rx-gold leading-tight"
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
              className="space-y-6"
            >
              <h2 className="font-display text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                Equipo F1 in Schools
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Innovación y excelencia en ingeniería del IES José Saramago
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto my-8"></div>
              <p className="text-lg md:text-xl text-rx-gold font-medium">
                Su marca puede ser parte de nuestra historia de éxito
              </p>
            </motion.div>
            
            <motion.div
              className="mt-16"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-10 h-10 mx-auto text-rx-gold/80" />
            </motion.div>
          </motion.div>
        </section>

        <TeamSection />
        <TechnicalSection />
        <AchievementsSection />
        <SponsorsSection />
        <MarketingSection />
        <ContactSection />
      </main>

      <footer className="bg-gradient-to-t from-rx-black to-rx-dark border-t border-rx-gold/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <img 
              src="/revolutionx-logo.png"
              alt="RevolutionX Logo"
              className="w-16 h-16 mx-auto opacity-60"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RevolutionX - IES José Saramago. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;