import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Spanish translations
const es = {
  translation: {
    // Navigation
    nav: {
      team: 'Equipo',
      technical: 'Técnico',
      achievements: 'Logros',
      sponsors: 'Patrocinadores',
      marketing: 'Marketing',
      contact: 'Contacto'
    },
    // Hero Section
    hero: {
      title: 'RevolutionX',
      subtitle: 'Equipo F1 in Schools',
      description: 'Innovación y excelencia en ingeniería del IES José Saramago',
      sponsorMessage: 'Su marca puede ser parte de nuestra historia de éxito'
    },
    // Team Section
    team: {
      title: 'Nuestro Equipo',
      subtitle: 'Un equipo multidisciplinar de jóvenes talentos comprometidos con la excelencia en ingeniería, diseño y estrategia empresarial.',
      excellence: {
        title: 'Excelencia Académica y Técnica',
        description: 'Nuestro equipo está formado por estudiantes destacados del IES José Saramago, seleccionados por su excelencia académica y pasión por la ingeniería. Cada miembro aporta habilidades únicas que nos permiten competir al más alto nivel.'
      },
      stats: {
        members: 'Miembros del Equipo',
        position: 'Puesto Regional',
        commitment: 'Compromiso',
        year: 'Año Activo'
      },
      responsibilities: 'Responsabilidades Principales'
    },
    // Technical Section
    technical: {
      title: 'Innovación Técnica',
      subtitle: 'Combinamos ingeniería de precisión con tecnologías de vanguardia para crear soluciones revolucionarias en el mundo de F1 in Schools.',
      specifications: 'Especificaciones Técnicas del Vehículo',
      process: 'Proceso de Desarrollo',
      speedometer: {
        title: 'Desafío de Tiempo',
        description: '¿Puedes igualar nuestro tiempo récord de',
        objective: 'Objetivo',
        start: 'Iniciar',
        stop: 'Parar',
        retry: 'Reintentar',
        measuring: 'Midiendo...',
        testSpeed: 'Probar Velocidad'
      },
      game: {
        title: 'Desafío de Tiempo',
        description: '¿Puedes igualar nuestro tiempo récord de',
        start: 'Iniciar',
        stop: 'Parar',
        retry: 'Reintentar',
        difference: 'Diferencia',
        bestTime: 'Mejor tiempo'
      }
    },
    // Achievements Section
    achievements: {
      title: 'Nuestros Logros',
      subtitle: 'Excelencia demostrada en competiciones de F1 in Schools a nivel regional y nacional, estableciendo nuevos estándares de rendimiento y precisión técnica.',
      mainTitle: 'Coche Más Rápido',
      category: 'Categoría Entry',
      event: 'Comunidad de Madrid 2025',
      history: 'Historial de Competiciones'
    },
    // Sponsors Section
    sponsors: {
      title: 'Nuestros Patrocinadores',
      subtitle: 'Agradecemos profundamente el apoyo de nuestros patrocinadores, quienes hacen posible nuestros logros y el desarrollo continuo de nuestro proyecto en F1 in Schools.',
      collaboration: 'Oportunidades de Colaboración',
      question: '¿Quiere ser parte del proyecto?',
      description: 'Únase a nuestro equipo de patrocinadores y forme parte de la próxima generación de ingenieros e innovadores.',
      contact: 'Contáctenos en:'
    },
    // Marketing Section
    marketing: {
      title: 'Oportunidades de Patrocinio',
      subtitle: 'Únase a nuestra visión de innovación y excelencia en la ingeniería del futuro. Descubra los beneficios estratégicos de asociarse con RevolutionX.',
      channels: 'Canales de Exposición',
      benefits: 'Beneficios Estratégicos del Patrocinio',
      roi: 'Retorno de Inversión Garantizado',
      roiDescription: 'Su inversión en RevolutionX no solo apoya el talento joven, sino que posiciona su marca como líder en innovación y responsabilidad social corporativa.'
    },
    // Contact Section
    contact: {
      title: 'Colabore con Nosotros',
      subtitle: 'Únase a RevolutionX y forme parte de la próxima generación de innovadores en ingeniería y tecnología.',
      form: {
        name: 'Nombre completo',
        email: 'Email',
        company: 'Empresa/Organización',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        privacy: 'Acepto la política de privacidad',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado correctamente!',
        error: 'Error al enviar el mensaje'
      },
      whyCollaborate: '¿Por Qué Colaborar?',
      startToday: 'Comience su Colaboración Hoy'
    },
    // AI Assistant
    ai: {
      title: 'RevolutionX AI',
      greeting: '¡Hola! Soy el asistente de RevolutionX. Puedo responder cualquier pregunta sobre nuestro equipo, logros, tecnología, patrocinadores y oportunidades de colaboración. ¿En qué puedo ayudarte?',
      placeholder: 'Pregunta sobre RevolutionX...',
      thinking: 'Procesando con Llama 3...',
      settings: {
        model: 'Modelo',
        streaming: 'Streaming',
        performance: 'Performance',
        tokens: 'Tokens',
        apiKey: 'API Key',
        reconnect: 'Reconectar',
        clear: 'Limpiar'
      },
      status: {
        connected: 'Conectado',
        disconnected: 'Desconectado',
        connecting: 'Conectando...',
        apiKeyRequired: 'API Key requerida'
      }
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  }
};

// English translations
const en = {
  translation: {
    // Navigation
    nav: {
      team: 'Team',
      technical: 'Technical',
      achievements: 'Achievements',
      sponsors: 'Sponsors',
      marketing: 'Marketing',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      title: 'RevolutionX',
      subtitle: 'Equipo F1 in Schools',
      description: 'Innovación y excelencia en ingeniería del IES José Saramago',
      sponsorMessage: 'Su marca puede ser parte de nuestra historia de éxito'
    },
    // Team Section
    team: {
      title: 'Nuestro Equipo',
      subtitle: 'Un equipo multidisciplinar de jóvenes talentos comprometidos con la excelencia en ingeniería, diseño y estrategia empresarial.',
      excellence: {
        title: 'Excelencia Académica y Técnica',
        description: 'Nuestro equipo está formado por estudiantes destacados del IES José Saramago, seleccionados por su excelencia académica y pasión por la ingeniería. Cada miembro aporta habilidades únicas que nos permiten competir al más alto nivel.'
      },
      stats: {
        members: 'Team Members',
        position: 'Regional Position',
        commitment: 'Commitment',
        year: 'Active Year'
      },
      responsibilities: 'Main Responsibilities'
    },
    // Technical Section
    technical: {
      title: 'Innovación Técnica',
      subtitle: 'Combinamos ingeniería de precisión con tecnologías de vanguardia para crear soluciones revolucionarias en el mundo de F1 in Schools.',
      specifications: 'Especificaciones Técnicas del Vehículo',
      process: 'Proceso de Desarrollo',
      speedometer: {
        title: 'Time Challenge',
        description: 'Puedes igualar nuestro tiempo record de..',
        objective: 'Objetivo',
        start: 'Iniciar',
        stop: 'Detener',
        retry: 'Reintentar',
        measuring: 'Mediendo...',
        testSpeed: 'Probar Velocidad'
      },
      game: {
        title: 'Time Challenge',
        description: 'Puedes igualar nuestro tiempo record de..',
        start: 'Start',
        stop: 'Stop',
        retry: 'Retry',
        difference: 'Difference',
        bestTime: 'Best time'
      }
    },
    // Achievements Section
    achievements: {
      title: 'Nuestros Logros',
      subtitle: 'Excelencia demostrada en competiciones de F1 in Schools a nivel regional y nacional, estableciendo nuevos estándares de rendimiento y precisión técnica.',
      mainTitle: 'Vehículo más rápido',
      category: 'Categoría entry',
      event: 'Comunidad de Madrid 2025',
      history: 'Historial de Competiciones'
    },
    // Sponsors Section
    sponsors: {
      title: 'Nuestros Patrocinadores',
      subtitle: 'Agradecemos profundamente el apoyo de nuestros patrocinadores, quienes hacen posible nuestros logros y el desarrollo continuo de nuestro proyecto en F1 in Schools.',
      collaboration: 'Oportunidades de colaboración',
      question: '¿Quieres ser parte del proyecto?',
      description: 'Únete a nuestro equipo de patrocinadores contribuye al desarrollo de la próxima generación de ingenieros y innovadores.',
      contact: 'Contáctanos en:'
    },
    // Marketing Section
    marketing: {
      title: 'Oportunidades de Patrocinio',
      subtitle: 'Únete a nuestra visión de innovación y excelencia en ingeniería futura. Descubre los beneficios estratégicos de colaborar con RevolutionX.',
      channels: 'Canales de Exposición',
      benefits: 'Beneficios Estratégicos de Patrocinio',
      roi: 'Retorno de Inversión Garantizado',
      roiDescription: 'Su inversión en RevolutionX no solo apoya el talento joven, sino que posiciona su marca como líder en innovación y responsabilidad social corporativa.'
    },
    // Contact Section
    contact: {
      title: 'Colabora con Nosotros',
      subtitle: 'Únete a RevolutionX y sé parte de la próxima generación de innovadores en ingeniería y tecnología.',
      form: {
        name: 'Nombre Completo',
        email: 'Email',
        company: 'Company/Organization',
        phone: 'Phone',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado con éxito!',
        error: 'Error al enviar mensaje'
      },
      whyCollaborate: '¿Por qué Colaborar?',
      startToday: 'Comienza tu Colaboración Hoy'
    },
    // AI Assistant
    ai: {
      title: 'RevolutionX IA',
      greeting: 'Hola! Soy el asistente de RevolutionX. Puedo responder cualquier pregunta sobre nuestro equipo, logros, tecnología, patrocinadores y oportunidades de colaboración. ¿Cómo puedo ayudarte?',
      placeholder: 'Pregunta sobre RevolutionX...',
      thinking: 'Procesando con Chatgpt 3.5 turbo...',
      settings: {
        model: 'Modelo',
        streaming: 'Streaming',
        performance: 'Performance',
        tokens: 'Tokens',
        apiKey: 'Clave API',
        reconnect: 'Reconectar',
        clear: 'Limpiar'
      },
      status: {
        connected: 'Conectado',
        disconnected: 'Desconectado',
        connecting: 'Conectando...',
        apiKeyRequired: 'Clave API requerida'
      }
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es,
      en
    },
    fallbackLng: 'es',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;