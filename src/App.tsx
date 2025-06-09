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
        <section className="relative h-screen flex items-center justify-center text-center" aria-label="Inicio">
          <div className="absolute inset-0">
            <img 
              src="/revolutionx-logo.png"
              alt="RevolutionX Logo - Equipo F1 in Schools"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rx-black/80 to-rx-black"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-4"
          >
            <img 
              src="/revolutionx-logo.png"
              alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
              className="w-64 mx-auto mb-8"
            />
            <h1 className="font-display text-6xl md:text-7xl mb-6 text-rx-gold bg-clip-text text-transparent bg-gradient-to-r from-rx-gold via-yellow-200 to-rx-gold animate-gradient">
              RevolutionX F1 in Schools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Innovación y excelencia en F1 in Schools del IES José Saramago
            </p>
            <p className="text-xl md:text-2xl mb-8 text-rx-gold">
              Tu marca puede ser parte de nuestra historia
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-12 h-12 mx-auto text-rx-gold" />
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

      <footer className="bg-rx-black border-t border-rx-gold/20 py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} RevolutionX - IES José Saramago. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;