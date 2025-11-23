import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Type } from 'lucide-react';
import { updateDocumentLanguage } from '../utils/languageUtils';
import { translateElements, restoreOriginalText } from '../services/translationService';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [autoTranslate, setAutoTranslate] = useState(false);


  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = async (langCode: string) => {
    i18n.changeLanguage(langCode);
    updateDocumentLanguage(langCode);
    setIsOpen(false);

    if (autoTranslate && langCode !== 'es') {
      const textElements = document.querySelectorAll('[data-translate="true"]');
      await translateElements(textElements, langCode);
    } else if (!autoTranslate || langCode === 'es') {
      const textElements = document.querySelectorAll('[data-translate="true"]');
      restoreOriginalText(textElements);
    }
  };

  const toggleAutoTranslate = () => {
    const newState = !autoTranslate;
    setAutoTranslate(newState);

    if (!newState || i18n.language === 'es') {
      const textElements = document.querySelectorAll('[data-translate="true"]');
      restoreOriginalText(textElements);
    } else if (newState && i18n.language !== 'es') {
      changeLanguage(i18n.language);
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <motion.button
        onClick={() => toggleAutoTranslate()}
        className={`flex items-center space-x-2 bg-rx-dark/80 backdrop-blur-sm border ${autoTranslate ? 'border-rx-gold' : 'border-rx-gold/30'} rounded-lg px-3 py-2 text-white hover:border-rx-gold/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rx-gold/50`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle auto translation"
      >
        <Type className={`w-4 h-4 ${autoTranslate ? 'text-rx-gold' : 'text-rx-gold/50'}`} />
      </motion.button>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-rx-dark/80 backdrop-blur-sm border border-rx-gold/30 rounded-lg px-3 py-2 text-white hover:border-rx-gold/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Language selector"
      >
        <Globe className="w-4 h-4 text-rx-gold" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <span className="text-sm">{currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 text-rx-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-rx-dark border border-rx-gold/30 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[140px]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-rx-gold/10 transition-colors ${currentLanguage.code === language.code ? 'bg-rx-gold/20 text-rx-gold' : 'text-white'
                  }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;