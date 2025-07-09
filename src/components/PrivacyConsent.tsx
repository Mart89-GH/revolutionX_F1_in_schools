import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check, X, Settings, Info } from 'lucide-react';
import { dataPrivacy, PrivacySettings } from '../utils/dataPrivacy';

const PrivacyConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<PrivacySettings>({
    dataCollection: false,
    analytics: false,
    personalization: false,
    marketing: false
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('privacy-consent');
    if (!hasConsent) {
      setShowConsent(true);
    } else {
      setSettings(dataPrivacy.getPrivacySettings());
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings = {
      dataCollection: true,
      analytics: true,
      personalization: true,
      marketing: true
    };
    
    dataPrivacy.updatePrivacySettings(allSettings);
    localStorage.setItem('privacy-consent', 'accepted');
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const minimalSettings = {
      dataCollection: false,
      analytics: false,
      personalization: false,
      marketing: false
    };
    
    dataPrivacy.updatePrivacySettings(minimalSettings);
    localStorage.setItem('privacy-consent', 'minimal');
    setShowConsent(false);
  };

  const handleCustomSettings = () => {
    dataPrivacy.updatePrivacySettings(settings);
    localStorage.setItem('privacy-consent', 'custom');
    setShowConsent(false);
  };

  const updateSetting = (key: keyof PrivacySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-rx-dark to-rx-black rounded-2xl border border-rx-gold/30 p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-rx-gold/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-rx-gold" />
              </div>
              <div>
                <h3 className="text-xl font-display text-rx-gold font-semibold">
                  Privacidad y Cookies
                </h3>
                <p className="text-gray-400 text-sm">RevolutionX AI Assistant</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Utilizamos tecnologías como cookies y almacenamiento local para mejorar 
                tu experiencia con nuestro asistente de IA. Puedes personalizar tus 
                preferencias de privacidad.
              </p>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center space-x-2 text-rx-gold hover:text-yellow-300 transition-colors text-sm"
              >
                <Info className="w-4 h-4" />
                <span>{showDetails ? 'Ocultar' : 'Ver'} detalles</span>
              </button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">Funcionalidad Básica</p>
                          <p className="text-gray-400 text-xs">Necesario para el funcionamiento</p>
                        </div>
                        <div className="w-10 h-6 bg-rx-gold rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">Recopilación de Datos</p>
                          <p className="text-gray-400 text-xs">Historial de conversaciones</p>
                        </div>
                        <button
                          onClick={() => updateSetting('dataCollection', !settings.dataCollection)}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.dataCollection ? 'bg-rx-gold' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.dataCollection ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">Análisis de Rendimiento</p>
                          <p className="text-gray-400 text-xs">Métricas de uso anónimas</p>
                        </div>
                        <button
                          onClick={() => updateSetting('analytics', !settings.analytics)}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.analytics ? 'bg-rx-gold' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.analytics ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">Personalización</p>
                          <p className="text-gray-400 text-xs">Respuestas adaptadas</p>
                        </div>
                        <button
                          onClick={() => updateSetting('personalization', !settings.personalization)}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.personalization ? 'bg-rx-gold' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.personalization ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleAcceptAll}
                className="w-full bg-gradient-to-r from-rx-gold to-yellow-600 text-rx-black font-semibold py-3 px-4 rounded-xl hover:from-yellow-600 hover:to-rx-gold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Aceptar Todo</span>
              </button>

              {showDetails && (
                <button
                  onClick={handleCustomSettings}
                  className="w-full bg-rx-dark border border-rx-gold/30 text-rx-gold font-semibold py-3 px-4 rounded-xl hover:bg-rx-gold/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Guardar Preferencias</span>
                </button>
              )}

              <button
                onClick={handleRejectAll}
                className="w-full bg-gray-600/20 border border-gray-500/30 text-gray-300 font-semibold py-3 px-4 rounded-xl hover:bg-gray-600/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Solo Esencial</span>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-rx-gold/20">
              <p className="text-gray-400 text-xs text-center">
                Puedes cambiar estas preferencias en cualquier momento. 
                <br />
                <a href="/privacy" className="text-rx-gold hover:text-yellow-300 underline">
                  Política de Privacidad
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyConsent;