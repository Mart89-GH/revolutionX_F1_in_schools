import React, { useState, useCallback } from 'react';
import { Mail, MessageSquare, Send, Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { whyCollaborate } from '../data/contactData';

const EnhancedContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Colaboración con RevolutionX - ${formData.company || 'Consulta'}`;
    const body = `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
    const mailtoLink = `mailto:revolutionx.f1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }, [formData]);

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-4 sm:px-6">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16"
        >
          {/* Email */}
          <motion.a
            href="mailto:revolutionx.f1@gmail.com"
            className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group hover:shadow-2xl hover:shadow-rx-gold/10 focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-rx-gold/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-rx-gold" />
            </motion.div>
            <h3 className="font-display text-base sm:text-lg text-rx-gold font-semibold mb-2 sm:mb-3">Email</h3>
            <p className="text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm break-all leading-tight">
              revolutionx.f1@gmail.com
            </p>
            <p className="text-gray-400 text-xs">Respuesta en 24-48h</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/revolutionx_f1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-center group hover:shadow-2xl hover:shadow-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </motion.div>
            <h3 className="font-display text-base sm:text-lg text-purple-300 font-semibold mb-2 sm:mb-3">Instagram</h3>
            <p className="text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm">@revolutionx_f1</p>
            <p className="text-gray-400 text-xs">Contenido exclusivo</p>
          </motion.a>

          {/* Location */}
          <motion.div
            className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group hover:shadow-2xl hover:shadow-rx-gold/10"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-rx-gold/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-rx-gold" />
            </motion.div>
            <h3 className="font-display text-base sm:text-lg text-rx-gold font-semibold mb-2 sm:mb-3">Ubicación</h3>
            <p className="text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm">IES José Saramago</p>
            <p className="text-gray-400 text-xs">Madrid, España</p>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group hover:shadow-2xl hover:shadow-rx-gold/10"
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(3)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-rx-gold/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-rx-gold" />
            </motion.div>
            <h3 className="font-display text-base sm:text-lg text-rx-gold font-semibold mb-2 sm:mb-3">Horario</h3>
            <p className="text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Lunes a Viernes</p>
            <p className="text-gray-400 text-xs">9:00 - 17:00 CET</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rx-dark to-rx-black p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-500 shadow-2xl hover:shadow-rx-gold/10"
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-rx-gold/20 rounded-full flex items-center justify-center mr-3 sm:mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Send className="w-5 h-5 sm:w-7 sm:h-7 text-rx-gold" />
              </motion.div>
              <h3 className="font-display text-xl sm:text-2xl text-rx-gold font-semibold">
                Contacto Directo
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-rx-gold/50 focus:outline-none focus:ring-2 focus:ring-rx-gold/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-rx-gold/50 focus:outline-none focus:ring-2 focus:ring-rx-gold/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="su@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                  Empresa/Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-rx-gold/50 focus:outline-none focus:ring-2 focus:ring-rx-gold/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Nombre de su empresa"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-rx-black/50 border border-rx-gold/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-rx-gold/50 focus:outline-none focus:ring-2 focus:ring-rx-gold/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Cuéntenos sobre su interés en colaborar con RevolutionX..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-rx-gold to-yellow-600 text-rx-black font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-yellow-600 hover:to-rx-gold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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
            className="bg-gradient-to-br from-rx-dark to-rx-black p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-500 shadow-2xl hover:shadow-rx-gold/10"
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-rx-gold/20 rounded-full flex items-center justify-center mr-3 sm:mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-rx-gold" />
              </motion.div>
              <h3 className="font-display text-xl sm:text-2xl text-rx-gold font-semibold">
                ¿Por Qué Colaborar?
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {whyCollaborate.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg hover:bg-rx-gold/5 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-rx-gold rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="p-4 sm:p-6 bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 rounded-lg sm:rounded-xl border border-rx-gold/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-rx-gold font-medium text-center mb-2 text-sm sm:text-base">
                ¡Su apoyo marca la diferencia!
              </p>
              <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">
                Contáctenos hoy para explorar oportunidades de colaboración 
                personalizadas según sus objetivos empresariales.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-rx-gold/30 max-w-5xl mx-auto shadow-2xl"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold mb-4 sm:mb-6">
            Comience su Colaboración Hoy
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
            Estamos listos para discutir cómo su empresa puede beneficiarse 
            de una asociación estratégica con RevolutionX.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8">
            <motion.a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="flex items-center space-x-2 sm:space-x-3 bg-rx-gold/20 hover:bg-rx-gold/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all">revolutionx.f1@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://instagram.com/revolutionx_f1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border border-purple-500/30 text-purple-300 font-medium hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>@revolutionx_f1</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;