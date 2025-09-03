import { StrictMode } from 'react';
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
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if (import.meta.env.PROD) {
  // Report Web Vitals
  (async () => {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
    onCLS(console.log);
    onFID(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
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