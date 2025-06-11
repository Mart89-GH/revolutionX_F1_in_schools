import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
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
            en ingeniería y tecnología. Juntos construiremos el futuro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rx-dark to-rx-black p-10 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-rx-gold" />
              </div>
              <h3 className="font-display text-2xl text-rx-gold font-semibold">
                Información de Contacto
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                <Mail className="w-6 h-6 text-rx-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Correo Electrónico</p>
                  <a 
                    href="mailto:revolutionx.f1@gmail.com" 
                    className="text-rx-gold hover:text-yellow-300 transition font-medium text-lg"
                  >
                    revolutionx.f1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                <p className="text-gray-400 text-sm mb-2">Centro Educativo</p>
                <p className="text-white font-medium">IES José Saramago</p>
                <p className="text-gray-300">Madrid, España</p>
              </div>
            </div>
          </motion.div>

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
                Beneficios del Patrocinio
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Exposición en competiciones internacionales",
                "Presencia en medios especializados",
                "Asociación con innovación y tecnología",
                "Acceso a talento joven en ingeniería",
                "Networking con líderes de la industria",
                "Impacto positivo en la educación STEM"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rx-gold rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-rx-gold/10 rounded-lg border border-rx-gold/20">
              <p className="text-rx-gold font-medium text-center">
                ¡Contáctenos hoy para explorar oportunidades de colaboración!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;