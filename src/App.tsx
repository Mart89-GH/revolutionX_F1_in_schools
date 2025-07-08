import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilitySkipLink from './components/AccessibilitySkipLink';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import FloatingNavigation from './components/FloatingNavigation';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import ParallaxSection from './components/ParallaxSection';
import InteractiveSpeedometer from './components/InteractiveSpeedometer';
import F1GameElement from './components/F1GameElement';
import LoadingSpinner from './components/ui/LoadingSpinner';
import OptimizedImage from './components/ui/OptimizedImage';

// Lazy load heavy components for better performance
const TeamSection = lazy(() => import('./components/TeamSection'));
const TechnicalSection = lazy(() => import('./components/TechnicalSection'));
const AchievementsSection = lazy(() => import('./components/AchievementsSection'));
const SponsorsSection = lazy(() => import('./components/SponsorsSection'));
const MarketingSection = lazy(() => import('./components/MarketingSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const InstagramFeed = lazy(() => import('./components/InstagramFeed'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="bg-rx-black text-white min-h-screen font-body overflow-x-hidden">
          <SEOHead />
          <AccessibilitySkipLink />
          <ScrollProgressIndicator />
          <FloatingNavigation />
          <PerformanceMonitor />
          
          <main id="main-content" role="main">
            {/* Enhanced Hero Section */}
            <section 
              className="relative min-h-screen flex items-center justify-center text-center overflow-hidden" 
              aria-label="Inicio"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-rx-black via-rx-dark to-rx-black opacity-95"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/10 via-transparent to-transparent"></div>
                
                {/* Optimized Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  {[...Array(8)].map((_, i) => (
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
                <motion.div
                  className="w-48 sm:w-64 md:w-72 mx-auto mb-8 sm:mb-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <OptimizedImage
                    src="/revolutionx-logo.png"
                    alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
                    width={288}
                    height={288}
                    priority
                    className="drop-shadow-2xl"
                  />
                </motion.div>
                
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
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto my-6 sm:my-8" aria-hidden="true"></div>
                  <p className="text-sm sm:text-lg md:text-xl text-rx-gold font-medium px-4">
                    Su marca puede ser parte de nuestra historia de éxito
                  </p>
                </motion.div>
                
                <motion.div
                  className="mt-12 sm:mt-16"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-rx-gold/80" />
                </motion.div>
              </motion.div>
            </section>

            <Suspense fallback={<LoadingSpinner />}>
              {/* Fixed sections with proper spacing and z-index */}
              <div className="relative z-10">
                <ParallaxSection speed={0.1}>
                  <TeamSection />
                </ParallaxSection>
              </div>

              <div className="relative z-10">
                <ParallaxSection speed={0.1}>
                  <TechnicalSection />
                </ParallaxSection>
              </div>

              {/* Interactive Performance Section */}
              <div className="relative z-10">
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
              </div>

              <div className="relative z-10">
                <ParallaxSection speed={0.1}>
                  <AchievementsSection />
                </ParallaxSection>
              </div>

              <div className="relative z-10">
                <ParallaxSection speed={0.1}>
                  <SponsorsSection />
                </ParallaxSection>
              </div>

              <div className="relative z-10">
                <ParallaxSection speed={0.1}>
                  <MarketingSection />
                </ParallaxSection>
              </div>

              {/* Enhanced Social Media Section */}
              <div className="relative z-10">
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
              </div>

              <div className="relative z-10">
                <ContactSection />
              </div>
            </Suspense>
          </main>

          <footer className="bg-gradient-to-t from-rx-black to-rx-dark border-t border-rx-gold/20 py-8 sm:py-12 relative z-10" role="contentinfo">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <div className="mb-4 sm:mb-6">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <OptimizedImage
                    src="/revolutionx-logo.png"
                    alt="RevolutionX Logo"
                    width={64}
                    height={64}
                    className="opacity-60"
                  />
                </motion.div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm px-4">
                © {new Date().getFullYear()} RevolutionX - IES José Saramago. Todos los derechos reservados.
              </p>
              <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-500">
                <a href="/privacy" className="hover:text-rx-gold transition-colors">
                  Política de Privacidad
                </a>
                <a href="/terms" className="hover:text-rx-gold transition-colors">
                  Términos de Uso
                </a>
                <a href="/accessibility" className="hover:text-rx-gold transition-colors">
                  Accesibilidad
                </a>
              </div>
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;