import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PrivacyPolicy from './components/PrivacyPolicy';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilitySkipLink from './components/AccessibilitySkipLink';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import MainNavigation from './components/MainNavigation';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import LoadingSpinner from './components/ui/LoadingSpinner';
import OptimizedImage from './components/ui/OptimizedImage';
import OpenRouterAIAssistant from './components/OpenRouterAIAssistant';
import MobileGestureHandler from './components/MobileGestureHandler';
import ParallaxSection from './components/ParallaxSection';
import BreadcrumbProvider, { useBreadcrumbs } from './components/BreadcrumbProvider';


// Lazy load heavy components for better performance
const TeamSection = lazy(() => 
  import('./components/TeamSection').then(module => ({ default: module.default }))
);
const TechnicalSection = lazy(() => 
  import('./components/TechnicalSection').then(module => ({ default: module.default }))
);
const AchievementsSection = lazy(() => 
  import('./components/AchievementsSection').then(module => ({ default: module.default }))
);
const SponsorsSection = lazy(() => 
  import('./components/SponsorsSection').then(module => ({ default: module.default }))
);
const MarketingSection = lazy(() => 
  import('./components/MarketingSection').then(module => ({ default: module.default }))
);
const ContactSection = lazy(() => 
  import('./components/ContactSection').then(module => ({ default: module.default }))
);

function App() {
  const { t, i18n } = useTranslation();
  const breadcrumbContext = useBreadcrumbs();
  const { breadcrumbs, setBreadcrumbs } = breadcrumbContext;

  useEffect(() => {
    // Set initial breadcrumbs based on sections
    setBreadcrumbs([
      { name: 'Inicio', item: 'https://legendary-panda-7b91a1.netlify.app/' },
      { name: t('nav.team'), item: 'https://legendary-panda-7b91a1.netlify.app/#equipo' },
      { name: t('nav.technical'), item: 'https://legendary-panda-7b91a1.netlify.app/#tecnico' },
      { name: t('nav.achievements'), item: 'https://legendary-panda-7b91a1.netlify.app/#logros' },
      { name: t('nav.sponsors'), item: 'https://legendary-panda-7b91a1.netlify.app/#patrocinadores' },
      { name: t('nav.marketing'), item: 'https://legendary-panda-7b91a1.netlify.app/#marketing' },
      { name: t('nav.contact'), item: 'https://legendary-panda-7b91a1.netlify.app/#contacto' }
    ]);
  }, [t, setBreadcrumbs]);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <MobileGestureHandler>
          <div className="bg-rx-black text-white min-h-screen font-body overflow-x-hidden relative z-0">
            <SEOHead 
              currentLanguage={i18n.language}
              alternateLanguages={[
                { lang: 'es-ES', url: 'https://legendary-panda-7b91a1.netlify.app/es' },
                { lang: 'en-US', url: 'https://legendary-panda-7b91a1.netlify.app/en' }
              ]}
              breadcrumb={breadcrumbs}
            />
            <AccessibilitySkipLink />
            <ScrollProgressIndicator />
            <MainNavigation />
            <PerformanceMonitor />
            
            <main id="main-content" role="main" className="pt-16 sm:pt-20">
              {/* Enhanced Hero Section */}
              <ParallaxSection speed={0.5}>
                <section 
                  className="relative h-screen flex items-center justify-center text-center overflow-hidden" 
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
                            y: [0, -10, 0],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random(),
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-4"
                  >
                    <motion.div
                      className="w-32 sm:w-48 md:w-56 mx-auto mb-6 sm:mb-8"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <OptimizedImage
                        src="/revolutionx-logo.svg"
                        alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
                        width={224}
                        height={224}
                        priority
                        className="drop-shadow-2xl"
                      />
                    </motion.div>
                    
                    <motion.h1 
                      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-rx-gold bg-clip-text text-transparent bg-gradient-to-r from-rx-gold via-yellow-200 to-rx-gold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      data-translate="true"
                    >
                      {t('hero.title')}
                    </motion.h1>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-3 sm:space-y-4"
                    >
                      <h2 className="font-display text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-wide" data-translate="true">
                        {t('hero.subtitle')}
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4" data-translate="true">
                        {t('hero.description')}
                      </p>
                      <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto my-4 sm:my-6" aria-hidden="true"></div>
                      <p className="text-xs sm:text-base md:text-lg text-rx-gold font-medium px-4" data-translate="true">
                        {t('hero.sponsorMessage')}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      className="mt-8 sm:mt-12"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-rx-gold/80" />
                    </motion.div>
                  </motion.div>
                </section>
              </ParallaxSection>

              {/* All Sections with Lazy Loading and Parallax */}
              <Suspense fallback={<LoadingSpinner />}>
                <ParallaxSection speed={0.3}>
                  <TeamSection />
                </ParallaxSection>
                
                <ParallaxSection speed={0.4}>
                  <TechnicalSection />
                </ParallaxSection>
                
                <ParallaxSection speed={0.2}>
                  <AchievementsSection />
                </ParallaxSection>
                
                <ParallaxSection speed={0.3}>
                  <SponsorsSection />
                </ParallaxSection>
                
                <ParallaxSection speed={0.4}>
                  <MarketingSection />
                </ParallaxSection>
                
                <ParallaxSection speed={0.2}>
                  <ContactSection />
                </ParallaxSection>
              </Suspense>
            </main>

            <footer className="bg-gradient-to-t from-rx-black to-rx-dark border-t border-rx-gold/20 py-6 sm:py-8 relative z-10" role="contentinfo">
              <div className="container mx-auto px-4 sm:px-6 text-center">
                <div className="mb-3 sm:mb-4">
                  <motion.div
                    className="w-8 h-8 sm:w-12 sm:h-12 mx-auto"
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <OptimizedImage
                      src="/revolutionx-logo.png"
                      alt="RevolutionX Logo"
                      width={48}
                      height={48}
                      className="opacity-60"
                    />
                  </motion.div>
                </div>
                <p className="text-gray-400 text-xs px-4">
                  © {new Date().getFullYear()} RevolutionX - IES José Saramago. {t('footer.rights')}
                </p>
                <nav className="mt-4" aria-label="Enlaces del pie de página">
                  <ul className="flex justify-center space-x-4 text-sm">
                    <li>
                      <button
                        onClick={() => (document.getElementById('privacy-policy') as HTMLDialogElement)?.showModal()}
                        className="text-gray-400 hover:text-rx-gold focus:outline-none focus:ring-2 focus:ring-rx-gold focus:ring-offset-2 focus:ring-offset-black"
                        aria-label="Ver política de privacidad"
                      >
                        Política de Privacidad
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </footer>

            {/* Modal de Política de Privacidad */}
            <dialog
              id="privacy-policy"
              className="bg-rx-dark text-white p-4 rounded-lg w-full max-w-4xl mx-auto backdrop:bg-black backdrop:opacity-80"
              aria-labelledby="privacy-title"
            >
              <div className="relative">
                <button
                  onClick={() => (document.getElementById('privacy-policy') as HTMLDialogElement)?.close()}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-rx-gold focus:ring-offset-2 focus:ring-offset-black p-2"
                  aria-label="Cerrar política de privacidad"
                >
                  ✕
                </button>
                <PrivacyPolicy />
              </div>
            </dialog>
            
            {/* OpenRouter AI Assistant */}
            <OpenRouterAIAssistant />
          </div>
        </MobileGestureHandler>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;