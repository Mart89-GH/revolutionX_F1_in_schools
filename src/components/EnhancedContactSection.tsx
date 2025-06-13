import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { contactMethods, collaborationAreas, whyCollaborate } from '../data/contactData';
import * as Icons from 'lucide-react';

const EnhancedContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Colaboración con RevolutionX - ${formData.company || 'Consulta'}`;
    const body = `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
    const mailtoLink = `mailto:revolutionx.f1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={MessageSquare}
          title="Colabore con Nosotros"
          subtitle="Únase a RevolutionX y forme parte de la próxima generación de innovadores en ingeniería y tecnología. Juntos construiremos el futuro de la movilidad y la educación STEM."
        />

        {/* Enhanced Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          {/* Email */}
          <motion.a
            href="mailto:revolutionx.f1@gmail.com"
            className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rx-gold/30 transition-colors">
              <Mail className="w-6 h-6 text-rx-gold" />
            </div>
            <h3 className="font-display text-lg text-rx-gold font-semibold mb-2">Email</h3>
            <p className="text-white font-medium mb-2">revolutionx.f1@gmail.com</p>
            <p className="text-gray-400 text-sm">Respuesta en 24-48h</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/revolutionx_f1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display text-lg text-purple-300 font-semibold mb-2">Instagram</h3>
            <p className="text-white font-medium mb-2">@revolutionx_f1</p>
            <p className="text-gray-400 text-sm">Contenido exclusivo</p>
          </motion.a>

          {/* Location */}
          <motion.div
            className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rx-gold/30 transition-colors">
              <MapPin className="w-6 h-6 text-rx-gold" />
            </div>
            <h3 className="font-display text-lg text-rx-gold font-semibold mb-2">Ubicación</h3>
            <p className="text-white font-medium mb-2">IES José Saramago</p>
            <p className="text-gray-400 text-sm">Madrid, España</p>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(3)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rx-gold/30 transition-colors">
              <Clock className="w-6 h-6 text-rx-gold" />
            </div>
            <h3 className="font-display text-lg text-rx-gold font-semibold mb-2">Horario</h3>
            <p className="text-white font-medium mb-2">Lunes a Viernes</p>
            <p className="text-gray-400 text-sm">9:00 - 17:00 CET</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
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
                Contacto Directo
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg px-4 py-3 text-white focus:border-rx-gold/50 focus:outline-none transition-colors"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg px-4 py-3 text-white focus:border-rx-gold/50 focus:outline-none transition-colors"
                    placeholder="su@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Empresa/Organización
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg px-4 py-3 text-white focus:border-rx-gold/50 focus:outline-none transition-colors"
                  placeholder="Nombre de su empresa"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg px-4 py-3 text-white focus:border-rx-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntenos sobre su interés en colaborar con RevolutionX..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-rx-gold to-yellow-600 text-rx-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-rx-gold transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Why Collaborate */}
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
              {whyCollaborate.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-rx-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                </motion.div>
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

        {/* Final Call to Action */}
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
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="flex items-center space-x-2 bg-rx-gold/20 hover:bg-rx-gold/30 px-6 py-3 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>revolutionx.f1@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://instagram.com/revolutionx_f1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 font-medium hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              <span>@revolutionx_f1</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;