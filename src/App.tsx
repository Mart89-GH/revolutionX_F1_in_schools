import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
import HeroSection from './components/HeroSection';
import { useBreadcrumbs } from './components/BreadcrumbProvider';


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
  const { breadcrumbs, setBreadcrumbs } = useBreadcrumbs();
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;

  useEffect(() => {
    // Set initial breadcrumbs based on sections
    setBreadcrumbs([
      { name: 'Inicio', item: `${baseUrl}/` },
      { name: t('nav.team'), item: `${baseUrl}/#equipo` },
      { name: t('nav.technical'), item: `${baseUrl}/#tecnico` },
      { name: t('nav.achievements'), item: `${baseUrl}/#logros` },
      { name: t('nav.sponsors'), item: `${baseUrl}/#patrocinadores` },
      { name: t('nav.marketing'), item: `${baseUrl}/#marketing` },
      { name: t('nav.contact'), item: `${baseUrl}/#contacto` }
    ]);
  }, [t, setBreadcrumbs, baseUrl]);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <MobileGestureHandler>
          <div className="dark:bg-rx-black dark:text-white light:bg-white light:text-rx-black min-h-screen font-body overflow-x-hidden relative z-0">
            <SEOHead
              currentLanguage={i18n.language}
              alternateLanguages={[
                { lang: 'es-ES', url: `${baseUrl}/es` },
                { lang: 'en-US', url: `${baseUrl}/en` }
              ]}
              breadcrumb={breadcrumbs}
            />
            <AccessibilitySkipLink />
            <ScrollProgressIndicator />
            <MainNavigation />
            <PerformanceMonitor />

            <main id="main-content" role="main" className="pt-16 sm:pt-20">
              {/* Enhanced Hero Section */}
              <HeroSection />

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

            <footer className="dark:bg-gradient-to-t dark:from-rx-black dark:to-rx-dark light:bg-gradient-to-t light:from-gray-100 light:to-white border-t border-rx-gold/20 py-6 sm:py-8 relative z-10" role="contentinfo">
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
                <p className="dark:text-gray-400 light:text-gray-600 text-xs px-4">
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