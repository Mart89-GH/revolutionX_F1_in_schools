import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Correo Electrónico",
      value: "revolutionx.f1@gmail.com",
      description: "Respuesta en 24-48 horas",
      action: "mailto:revolutionx.f1@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "IES José Saramago",
      description: "Madrid, España",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario de Contacto",
      value: "Lunes a Viernes",
      description: "9:00 - 17:00 CET",
      action: null
    }
  ];

  const collaborationAreas = [
    {
      title: "Patrocinio Técnico",
      description: "Apoyo en materiales, herramientas y tecnología para el desarrollo del vehículo",
      icon: "🔧"
    },
    {
      title: "Patrocinio Financiero",
      description: "Inversión directa para cubrir gastos de competición, viajes y equipamiento",
      icon: "💰"
    },
    {
      title: "Mentoring Profesional",
      description: "Asesoramiento técnico y profesional por parte de expertos de la industria",
      icon: "👥"
    },
    {
      title: "Colaboración Educativa",
      description: "Programas de formación, visitas técnicas y experiencias profesionales",
      icon: "🎓"
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Colabore con Nosotros
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Únase a RevolutionX y forme parte de la próxima generación de innovadores 
            en ingeniería y tecnología. Juntos construiremos el futuro de la movilidad 
            y la educación STEM.
          </p>
        </motion.div>

        {/* Información de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-rx-gold">{method.icon}</div>
              </div>
              <h3 className="font-display text-lg text-rx-gold font-semibold mb-2">
                {method.title}
              </h3>
              {method.action ? (
                <a 
                  href={method.action}
                  className="text-white hover:text-rx-gold transition font-medium block mb-2"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-white font-medium mb-2">{method.value}</p>
              )}
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Áreas de Colaboración */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rx-dark to-rx-black p-10 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-rx-gold" />
              </div>
              <h3 className="font-display text-2xl text-rx-gold font-semibold">
                Áreas de Colaboración
              </h3>
            </div>
            
            <div className="space-y-6">
              {collaborationAreas.map((area, index) => (
                <div key={index} className="p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{area.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Beneficios del Patrocinio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rx-dark to-rx-black p-10 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-rx-gold" />
              </div>
              <h3 className="font-display text-2xl text-rx-gold font-semibold">
                ¿Por Qué Colaborar?
              </h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Exposición en competiciones internacionales de prestigio",
                "Presencia en medios especializados del sector educativo",
                "Asociación directa con innovación y tecnología de vanguardia",
                "Acceso privilegiado a talento joven en ingeniería",
                "Networking exclusivo con líderes de la industria",
                "Impacto positivo demostrable en la educación STEM",
                "Posicionamiento como empresa socialmente responsable",
                "Retorno de inversión en imagen y reputación corporativa"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rx-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-rx-gold/10 rounded-lg border border-rx-gold/20">
              <p className="text-rx-gold font-medium text-center mb-2">
                ¡Su apoyo marca la diferencia!
              </p>
              <p className="text-gray-300 text-sm text-center">
                Contáctenos hoy para explorar oportunidades de colaboración 
                personalizadas según sus objetivos empresariales.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-4">
            Comience su Colaboración Hoy
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Estamos listos para discutir cómo su empresa puede beneficiarse 
            de una asociación estratégica con RevolutionX.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-lg">
            <span className="text-gray-400">Escribanos a:</span>
            <a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="text-rx-gold hover:text-yellow-300 transition font-semibold underline decoration-rx-gold/50 hover:decoration-yellow-300 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>revolutionx.f1@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;