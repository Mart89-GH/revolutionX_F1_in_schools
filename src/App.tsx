import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PrivacyPolicy from './components/PrivacyPolicy';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilitySkipLink from './components/AccessibilitySkipLink';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import MainNavigation from './components/MainNavigation';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import LoadingSpinner from './components/ui/LoadingSpinner';
import OpenRouterAIAssistant from './components/OpenRouterAIAssistant';
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
        <div className="bg-rx-black text-white min-h-screen font-body overflow-x-hidden relative z-0">
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

          <main id="main-content" role="main">
            {/* Hero */}
            <HeroSection />

            {/* Sections with dividers */}
            <Suspense fallback={<LoadingSpinner />}>
              <TeamSection />
              <div className="section-divider" />
              
              <TechnicalSection />
              <div className="section-divider" />
              
              <AchievementsSection />
              <div className="section-divider" />
              
              <SponsorsSection />
              <div className="section-divider" />
              
              <MarketingSection />
              <div className="section-divider" />
              
              <ContactSection />
            </Suspense>
          </main>

          {/* Ultra-minimal footer */}
          <footer className="py-8 sm:py-12 border-t border-white/[0.04] relative z-10" role="contentinfo">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/20 text-xs">
                © {new Date().getFullYear()} RevolutionX — IES José Saramago. {t('footer.rights')}
              </p>
              <nav aria-label="Enlaces del pie de página">
                <button
                  onClick={() => (document.getElementById('privacy-policy') as HTMLDialogElement)?.showModal()}
                  className="text-white/20 hover:text-white/40 text-xs transition-colors duration-300 focus-ring"
                  aria-label="Ver política de privacidad"
                >
                  Política de Privacidad
                </button>
              </nav>
            </div>
          </footer>

          {/* Privacy Policy Modal */}
          <dialog
            id="privacy-policy"
            className="bg-rx-dark text-white p-6 rounded-2xl w-full max-w-4xl mx-auto backdrop:bg-black/80 border border-white/[0.06]"
            aria-labelledby="privacy-title"
          >
            <div className="relative">
              <button
                onClick={() => (document.getElementById('privacy-policy') as HTMLDialogElement)?.close()}
                className="absolute top-0 right-0 text-white/30 hover:text-white/60 transition-colors duration-300 p-2 focus-ring"
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
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;