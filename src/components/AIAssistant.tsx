import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente de RevolutionX. Puedo responder cualquier pregunta sobre nuestro equipo, logros, tecnología, patrocinadores y oportunidades de colaboración. ¿En qué puedo ayudarte?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about RevolutionX
  const knowledgeBase = {
    team: {
      members: [
        { name: "Saúl Morán", role: "Jefe de Proyectos", responsibilities: "Coordinación general del equipo, gestión de recursos y plazos, toma de decisiones estratégicas" },
        { name: "Víctor Jiménez", role: "Ingeniero de Diseño", responsibilities: "Diseño del chasis, optimización aerodinámica, modelado CAD avanzado" },
        { name: "Martín Cendra", role: "Ingeniero de Simulación", responsibilities: "Análisis CFD, pruebas de rendimiento, validación de diseños" },
        { name: "Ibrahim Aharrar", role: "Ingeniero de Manufactura", responsibilities: "Procesos de fabricación, control de calidad, optimización de producción" },
        { name: "Yago Álvarez", role: "Director de Marketing", responsibilities: "Estrategia de marca, relaciones públicas, gestión de patrocinadores" },
        { name: "Pablo Bianchi", role: "Especialista en Marketing Digital", responsibilities: "Redes sociales, contenido digital, comunicación online" },
        { name: "Jose Ramón Berzosa", role: "Profesor a cargo del equipo", responsibilities: "Ayudar al equipo a contactar con instituciones educativas y gubernamentales" }
      ],
      stats: { members: 7, position: "1º Puesto Regional", commitment: "100%", year: "2025" }
    },
    achievements: {
      main: "Coche Más Rápido en Categoría Entry - Comunidad de Madrid 2025",
      description: "RevolutionX estableció un nuevo récord de velocidad en la categoría Entry, demostrando excelencia técnica y precisión en el diseño aerodinámico",
      results: [
        { event: "Regional Madrid 2025", position: "1º Puesto", category: "Coche Más Rápido - Entry" },
        { event: "Regional Madrid 2025", position: "Top 1", category: "Clasificación General" },
        { event: "Nacional España 2025", position: "Clasificado", category: "Representación Madrid" }
      ]
    },
    technical: {
      specifications: {
        length: "185 mm",
        width: "69 mm",
        height: "44 mm",
        weight: "72.8 gramos",
        material: "PLA",
        finish: "pintura aerosol"
      },
      technologies: ["Diseño CAD avanzado", "Simulación CFD", "Optimización aerodinámica", "Manufactura de precisión"],
      process: ["Investigación", "Diseño", "Prototipado", "Optimización"]
    },
    sponsors: [
      { name: "Universidad Europea", category: "Educación Superior", description: "Apoyo en formación técnica y desarrollo profesional" },
      { name: "Perfumería Palárabe", category: "Comercio Local", description: "Patrocinador local comprometido con la educación" },
      { name: "Ayuntamiento de Majadahonda", category: "Administración Pública", description: "Apoyo institucional y promoción del talento local" },
      { name: "Pañalón", category: "Empresa Local", description: "Compromiso con el desarrollo de jóvenes talentos" },
      { name: "Guitarras Elvira", category: "Artesanía Musical", description: "Apoyo a la creatividad y la innovación juvenil" },
      { name: "Titanes Atletismo", category: "Deporte", description: "Promoción de valores deportivos y trabajo en equipo" }
    ],
    contact: {
      email: "revolutionx.f1@gmail.com",
      instagram: "@revolutionx_f1",
      location: "IES José Saramago, Madrid, España",
      schedule: "Lunes a Viernes, 9:00 - 17:00 CET"
    },
    marketing: {
      opportunities: [
        { title: "Exposición Global", description: "Presencia en competiciones internacionales", metrics: "+50K audiencia potencial" },
        { title: "Networking Estratégico", description: "Conexión con líderes de la industria", metrics: "Industria + Academia" },
        { title: "Innovación Tecnológica", description: "Asociación con tecnologías avanzadas", metrics: "CAD, CFD, Manufactura" },
        { title: "Impacto Social", description: "Apoyo al desarrollo educativo STEM", metrics: "Educación + Sociedad" }
      ],
      benefits: [
        "Exposición en competiciones internacionales",
        "Presencia en medios especializados",
        "Asociación con innovación tecnológica",
        "Acceso a talento joven en ingeniería",
        "Networking con líderes de la industria",
        "Responsabilidad social corporativa",
        "Posicionamiento como empresa innovadora"
      ]
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hola') || message.includes('buenos') || message.includes('saludos')) {
      return '¡Hola! Bienvenido a RevolutionX. Soy tu asistente virtual y estoy aquí para ayudarte con cualquier pregunta sobre nuestro equipo de F1 in Schools. ¿Qué te gustaría saber?';
    }
    
    // Team questions
    if (message.includes('equipo') || message.includes('miembros') || message.includes('integrantes')) {
      const teamInfo = knowledgeBase.team.members.map(member => 
        `• ${member.name} - ${member.role}: ${member.responsibilities}`
      ).join('\n');
      return `Nuestro equipo está formado por ${knowledgeBase.team.stats.members} miembros especializados:\n\n${teamInfo}\n\nSomos estudiantes del IES José Saramago comprometidos con la excelencia en ingeniería.`;
    }
    
    // Individual team member questions
    const teamMember = knowledgeBase.team.members.find(member => 
      message.includes(member.name.toLowerCase()) || message.includes(member.role.toLowerCase())
    );
    if (teamMember) {
      return `${teamMember.name} es nuestro ${teamMember.role}. Sus principales responsabilidades incluyen: ${teamMember.responsibilities}. Es una pieza clave en el éxito de RevolutionX.`;
    }
    
    // Achievements questions
    if (message.includes('logros') || message.includes('premios') || message.includes('ganado') || message.includes('primero')) {
      return `¡Estamos muy orgullosos de nuestros logros! Nuestro principal achievement es: ${knowledgeBase.achievements.main}.\n\n${knowledgeBase.achievements.description}\n\nResultados de competiciones:\n${knowledgeBase.achievements.results.map(r => `• ${r.event}: ${r.position} - ${r.category}`).join('\n')}`;
    }
    
    // Technical questions
    if (message.includes('técnico') || message.includes('especificaciones') || message.includes('coche') || message.includes('diseño')) {
      const specs = knowledgeBase.technical.specifications;
      return `Nuestro vehículo cuenta con especificaciones técnicas de alta precisión:\n\n• Longitud: ${specs.length}\n• Ancho: ${specs.width}\n• Altura: ${specs.height}\n• Peso: ${specs.weight}\n• Material: ${specs.material}\n• Acabado: ${specs.finish}\n\nUtilizamos tecnologías avanzadas como: ${knowledgeBase.technical.technologies.join(', ')}.`;
    }
    
    // Sponsors questions
    if (message.includes('patrocinadores') || message.includes('sponsors') || message.includes('empresas')) {
      const sponsorsList = knowledgeBase.sponsors.map(sponsor => 
        `• ${sponsor.name} (${sponsor.category}): ${sponsor.description}`
      ).join('\n');
      return `Contamos con el apoyo de ${knowledgeBase.sponsors.length} patrocinadores comprometidos:\n\n${sponsorsList}\n\n¡Siempre estamos abiertos a nuevas colaboraciones!`;
    }
    
    // Contact questions
    if (message.includes('contacto') || message.includes('email') || message.includes('teléfono') || message.includes('ubicación')) {
      return `Puedes contactarnos a través de:\n\n• Email: ${knowledgeBase.contact.email}\n• Instagram: ${knowledgeBase.contact.instagram}\n• Ubicación: ${knowledgeBase.contact.location}\n• Horario: ${knowledgeBase.contact.schedule}\n\n¡Estaremos encantados de responder a tus consultas!`;
    }
    
    // Marketing/collaboration questions
    if (message.includes('colaborar') || message.includes('patrocinio') || message.includes('marketing') || message.includes('beneficios')) {
      const opportunities = knowledgeBase.marketing.opportunities.map(opp => 
        `• ${opp.title}: ${opp.description} (${opp.metrics})`
      ).join('\n');
      return `Colaborar con RevolutionX ofrece múltiples beneficios:\n\n${opportunities}\n\nAdemás, obtendrás: ${knowledgeBase.marketing.benefits.slice(0, 4).join(', ')} y mucho más. ¡Contáctanos para explorar oportunidades personalizadas!`;
    }
    
    // F1 in Schools questions
    if (message.includes('f1 in schools') || message.includes('competición') || message.includes('formula 1')) {
      return 'F1 in Schools es la competición de tecnología STEM más grande del mundo. Los estudiantes diseñan, fabrican y prueban coches de F1 en miniatura usando las mismas tecnologías que los equipos profesionales. RevolutionX compite a nivel regional y nacional, representando la excelencia del IES José Saramago.';
    }
    
    // Speed/performance questions
    if (message.includes('velocidad') || message.includes('rápido') || message.includes('tiempo') || message.includes('récord')) {
      return 'Nuestro vehículo logró el tiempo más rápido en la categoría Entry de la Comunidad de Madrid 2025, estableciendo un nuevo récord de rendimiento. Esto se debe a nuestro diseño aerodinámico optimizado, análisis CFD avanzado y manufactura de precisión.';
    }
    
    // Default response
    return 'Gracias por tu pregunta. Puedo ayudarte con información sobre nuestro equipo, logros técnicos, patrocinadores, oportunidades de colaboración, especificaciones del vehículo, y cómo contactarnos. ¿Podrías ser más específico sobre qué aspecto de RevolutionX te interesa?';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = generateResponse(inputText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-rx-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-rx-gold/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-7 h-7 text-rx-black" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-gradient-to-br from-rx-dark to-rx-black rounded-2xl border border-rx-gold/30 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rx-gold to-yellow-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-rx-black/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-rx-black" aria-label="Asistente virtual RevolutionX" role="img" />
                </div>
                <div>
                  <h3 className="font-semibold text-rx-black text-sm">Asistente RevolutionX</h3>
                  <p className="text-rx-black/70 text-xs">Powered by Llama 3</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-rx-black/20 rounded-full flex items-center justify-center hover:bg-rx-black/30 transition-colors"
              >
                <X className="w-4 h-4 text-rx-black" aria-label="Cerrar asistente" role="img" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser ? 'bg-rx-gold' : 'bg-rx-gold/20'
                    }`}>
                      {message.isUser ? (
                        <User className="w-3 h-3 text-rx-black" aria-label="Usuario" role="img" />
                      ) : (
                        <Bot className="w-3 h-3 text-rx-gold" aria-label="Asistente" role="img" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.isUser 
                        ? 'bg-rx-gold text-rx-black' 
                        : 'bg-rx-gold/10 text-white border border-rx-gold/20'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-rx-black/70' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-rx-gold/20 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-rx-gold" aria-label="Asistente pensando" role="img" />
                    </div>
                    <div className="bg-rx-gold/10 border border-rx-gold/20 rounded-2xl px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 text-rx-gold animate-spin" aria-label="Cargando respuesta" role="img" />
                        <span className="text-sm text-gray-300">Pensando...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-rx-gold/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Pregunta sobre RevolutionX..."
                  className="flex-1 bg-rx-black/50 border border-rx-gold/20 rounded-xl px-3 py-2 text-white text-sm focus:border-rx-gold/50 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="w-10 h-10 bg-rx-gold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 text-rx-black" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;