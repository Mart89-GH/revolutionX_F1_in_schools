import { StrictMode } from 'react';
import type { Metric } from 'web-vitals';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BreadcrumbProvider } from './components/BreadcrumbProvider';
import './index.css';
import './i18n';

// Register service worker for PWA functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        console.error('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if (import.meta.env.PROD && import.meta.env.DEV) {
  // Report Web Vitals in development only
  (async () => {
    const { onCLS, onFCP, onLCP, onTTFB } = await import('web-vitals');
    const logMetric = (metric: Metric) => console.log(metric);
    onCLS(logMetric);

    onFCP(logMetric);
    onLCP(logMetric);
    onTTFB(logMetric);
  })();
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BreadcrumbProvider>
      <App />
    </BreadcrumbProvider>
  </StrictMode>
);