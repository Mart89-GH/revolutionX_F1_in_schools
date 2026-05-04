import type { i18n } from 'i18next';

export const updateDocumentLanguage = (language: string) => {
  const htmlElement = document.documentElement;
  const titleElement = document.getElementById('page-title');
  const metaTitleElement = document.getElementById('meta-title');
  const metaDescriptionElement = document.getElementById('meta-description');

  // Update HTML lang attribute
  htmlElement.lang = language;

  // Update page title and meta tags based on language
  if (language === 'en') {
    if (titleElement) titleElement.textContent = 'RevolutionX - STEM Racing Team | IES José Saramago';
    if (metaTitleElement) metaTitleElement.setAttribute('content', 'RevolutionX - STEM Racing Team | IES José Saramago');
    if (metaDescriptionElement) metaDescriptionElement.setAttribute('content', 'Leading STEM Racing team from IES José Saramago. Innovation in engineering, design and technology for international competitions.');
  } else {
    if (titleElement) titleElement.textContent = 'RevolutionX - Equipo STEM Racing | IES José Saramago';
    if (metaTitleElement) metaTitleElement.setAttribute('content', 'RevolutionX - Equipo STEM Racing | IES José Saramago');
    if (metaDescriptionElement) metaDescriptionElement.setAttribute('content', 'Equipo líder de STEM Racing del IES José Saramago. Innovación en ingeniería, diseño y tecnología para competiciones internacionales.');
  }

  // Update URL structure
  const currentPath = window.location.pathname;
  let newPath = currentPath;

  if (language === 'en' && !currentPath.startsWith('/en')) {
    newPath = '/en' + currentPath;
  } else if (language === 'es' && currentPath.startsWith('/en')) {
    newPath = currentPath.replace(/^\/en/, '') || '/';
  }

  if (newPath !== currentPath) {
    window.history.pushState({}, '', newPath);
  }
};

export const detectLanguageFromURL = (): string => {
  const path = window.location.pathname;
  return path.startsWith('/en') ? 'en' : 'es';
};

export const initializeLanguage = (i18n: i18n) => {
  const urlLanguage = detectLanguageFromURL();
  const storedLanguage = localStorage.getItem('i18nextLng');

  // Priority: URL > Stored > Browser > Default
  const targetLanguage = urlLanguage || storedLanguage || navigator.language.split('-')[0] || 'es';

  if (i18n.language !== targetLanguage) {
    i18n.changeLanguage(targetLanguage);
  }

  return targetLanguage;
};