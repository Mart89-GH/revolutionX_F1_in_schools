import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cog, Award, Handshake, TrendingUp, MessageSquare, Instagram, Mail, MapPin, Clock } from 'lucide-react';

const CompactSections = () => {
  return (
    <div className="bg-gradient-to-b from-rx-dark to-rx-black">
      {/* Team Section */}
      <section id="equipo" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Nuestro Equipo</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Jóvenes talentos comprometidos con la excelencia en ingeniería y diseño
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { name: "Saúl Morán", role: "Jefe de Proyectos", desc: "Coordinación y gestión estratégica" },
              { name: "Víctor Jiménez", role: "Ingeniero de Diseño", desc: "Diseño CAD y optimización" },
              { name: "Martín Cendra", role: "Ingeniero de Simulación", desc: "Análisis CFD y validación" },
              { name: "Ibrahim Aharrar", role: "Ingeniero de Manufactura", desc: "Fabricación y calidad" },
              { name: "Yago Álvarez", role: "Director de Marketing", desc: "Estrategia de marca" },
              { name: "Pablo Bianchi", role: "Marketing Digital", desc: "Redes sociales y contenido" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 rounded-xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300"
              >
                <h3 className="text-rx-gold font-semibold text-sm sm:text-base mb-1">{member.name}</h3>
                <p className="text-white text-xs sm:text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section id="tecnico" className="py-12 sm:py-16 bg-gradient-to-b from-rx-black to-rx-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Cog className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Innovación Técnica</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Tecnología de vanguardia y precisión en cada componente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-xl border border-rx-gold/20"
            >
              <h3 className="text-rx-gold font-semibold text-lg mb-3">Especificaciones</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Longitud:</span>
                  <span className="text-white">185 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Peso:</span>
                  <span className="text-white">72.8 g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Material:</span>
                  <span className="text-white">PLA</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-xl border border-rx-gold/20"
            >
              <h3 className="text-rx-gold font-semibold text-lg mb-3">Tecnologías</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Diseño CAD avanzado</li>
                <li>• Simulación CFD</li>
                <li>• Optimización aerodinámica</li>
                <li>• Manufactura de precisión</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="logros" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Nuestros Logros</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="bg-gradient-to-br from-rx-gold/20 via-rx-gold/10 to-transparent p-6 sm:p-8 rounded-2xl border border-rx-gold/50 text-center">
              <h3 className="font-display text-xl sm:text-2xl text-rx-gold mb-3 font-bold">
                Coche Más Rápido
              </h3>
              <div className="inline-block bg-rx-gold/20 px-4 py-1 rounded-full mb-3">
                <span className="text-rx-gold font-semibold text-sm">Categoría Entry</span>
              </div>
              <p className="text-lg text-white mb-3">Comunidad de Madrid 2025</p>
              <p className="text-gray-200 text-sm leading-relaxed">
                Tiempo récord estableciendo nuevos estándares de rendimiento
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { number: "1º", label: "Puesto Regional" },
              { number: "100%", label: "Precisión" },
              { number: "2025", label: "Año Activo" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-rx-gold/10 p-4 rounded-lg border border-rx-gold/20 text-center"
              >
                <div className="text-xl font-bold text-rx-gold mb-1">{stat.number}</div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="patrocinadores" className="py-12 sm:py-16 bg-gradient-to-b from-rx-dark to-rx-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Patrocinadores</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Empresas que apoyan nuestro proyecto de innovación
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { name: "Universidad Europea", logo: "/Universidad-europea-logo.png" },
              { name: "Perfumería Palárabe", logo: "/perfumeria_palarabe.png" },
              { name: "Ayuntamiento Majadahonda", logo: "/Ayuntamiento_de_Majadahonda.png" },
              { name: "Pañalón", logo: "/Logo_Panalon.png" },
              { name: "Guitarras Elvira", logo: "/Logo_Elvira2.png" },
              { name: "Titanes Atletismo", logo: "/Logo_Titanes2.png" }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl border border-rx-gold/30 hover:border-rx-gold/60 transition-all duration-300 flex items-center justify-center min-h-[100px]"
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  className="max-w-full max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section id="marketing" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Oportunidades</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Beneficios estratégicos de colaborar con RevolutionX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Exposición Global", desc: "Presencia en competiciones internacionales", metric: "+50K audiencia" },
              { title: "Networking", desc: "Conexión con líderes de la industria", metric: "Industria + Academia" },
              { title: "Innovación", desc: "Asociación con tecnologías avanzadas", metric: "CAD, CFD, I+D" },
              { title: "Impacto Social", desc: "Apoyo al desarrollo educativo STEM", metric: "Educación + Sociedad" }
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rx-dark to-rx-black p-6 rounded-xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300"
              >
                <h3 className="text-rx-gold font-semibold text-lg mb-2">{opportunity.title}</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{opportunity.desc}</p>
                <div className="bg-rx-gold/10 px-3 py-1 rounded-lg border border-rx-gold/20">
                  <p className="text-rx-gold text-xs font-medium">{opportunity.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 bg-gradient-to-b from-rx-dark to-rx-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-rx-gold mr-3" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-rx-gold">Contacto</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Únase a RevolutionX y forme parte del futuro de la ingeniería
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
            <motion.a
              href="mailto:revolutionx.f1@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-4 rounded-xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center group"
            >
              <Mail className="w-8 h-8 text-rx-gold mx-auto mb-3" />
              <h3 className="text-rx-gold font-semibold text-sm mb-2">Email</h3>
              <p className="text-white text-xs break-all">revolutionx.f1@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://instagram.com/revolutionx_f1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <Instagram className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <h3 className="text-purple-300 font-semibold text-sm mb-2">Instagram</h3>
              <p className="text-white text-xs">@revolutionx_f1</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-4 rounded-xl border border-rx-gold/20 text-center"
            >
              <MapPin className="w-8 h-8 text-rx-gold mx-auto mb-3" />
              <h3 className="text-rx-gold font-semibold text-sm mb-2">Ubicación</h3>
              <p className="text-white text-xs">IES José Saramago</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-6 rounded-xl border border-rx-gold/30 max-w-3xl mx-auto"
          >
            <h3 className="font-display text-xl text-rx-gold mb-3">¿Listo para Colaborar?</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Su apoyo hace posible que jóvenes talentos desarrollen habilidades técnicas de alto nivel
            </p>
            <a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="inline-flex items-center space-x-2 bg-rx-gold/20 hover:bg-rx-gold/30 px-6 py-3 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contáctenos</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompactSections;