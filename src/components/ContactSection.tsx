import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-rx-gold mb-4">Colabora con Nosotros</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Únete a RevolutionX y sé parte de la próxima generación de innovadores en ingeniería y tecnología.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-rx-dark p-8 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-colors"
          >
            <h3 className="font-display text-2xl text-rx-gold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-rx-gold" />
                <a href="mailto:contacto@rebolutionx.com" className="text-gray-300 hover:text-rx-gold transition">
                  revolutionx.f1@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-rx-dark p-8 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-colors"
          >
            <h3 className="font-display text-2xl text-rx-gold mb-6">Beneficios del Patrocinio</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-rx-gold">→</span>
                <span>Exposición en competiciones internacionales</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-rx-gold">→</span>
                <span>Presencia en medios especializados</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-rx-gold">→</span>
                <span>Asociación con innovación y tecnología</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-rx-gold">→</span>
                <span>Acceso a talento joven en ingeniería</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;