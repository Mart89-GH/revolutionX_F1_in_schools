import React from 'react';
import { Heart, Handshake, Building, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Universidad Europea",
      logo: "/Universidad-europea-logo.png",
      category: "Educación Superior",
      description: "Apoyo en formación técnica y desarrollo profesional"
    },
    {
      name: "Perfumería Palárabe",
      logo: "/perfumeria_palarabe.png",
      category: "Comercio Local",
      description: "Patrocinador local comprometido con la educación"
    },
    {
      name: "Ayuntamiento de Majadahonda",
      logo: "/Ayuntamiento_de_Majadahonda.png",
      category: "Administración Pública",
      description: "Apoyo institucional y promoción del talento local"
    },
    {
      name: "Pañalón",
      logo: "/Logo_Panalon.png",
      category: "Empresa Local",
      description: "Compromiso con el desarrollo de jóvenes talentos"
    },
    {
      name: "Guitarras Elvira",
      logo: "/Logo_Elvira2.png",
      category: "Artesanía Musical",
      description: "Apoyo a la creatividad y la innovación juvenil"
    },
    {
      name: "Titanes Atletismo",
      logo: "/Logo_Titanes2.png",
      category: "Deporte",
      description: "Promoción de valores deportivos y trabajo en equipo"
    }
  ];

  const sponsorshipLevels = [
    {
      title: "Patrocinador Principal",
      benefits: ["Logo prominente en el vehículo", "Presencia en todos los materiales", "Networking exclusivo"],
      color: "from-rx-gold/20 to-rx-gold/10"
    },
    {
      title: "Patrocinador Oficial",
      benefits: ["Logo en materiales promocionales", "Mención en redes sociales", "Certificado de colaboración"],
      color: "from-gray-600/20 to-gray-600/10"
    },
    {
      title: "Colaborador",
      benefits: ["Reconocimiento público", "Acceso a eventos", "Impacto social positivo"],
      color: "from-amber-600/20 to-amber-600/10"
    }
  ];

  return (
    <section id="patrocinadores" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Handshake className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Nuestros Patrocinadores
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Agradecemos profundamente el apoyo de nuestros patrocinadores, quienes hacen posible 
            nuestros logros y el desarrollo continuo de nuestro proyecto en F1 in Schools.
          </p>
        </motion.div>

        {/* Estadísticas de Impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { icon: <Users className="w-6 h-6" />, number: "6", label: "Patrocinadores Activos" },
            { icon: <Building className="w-6 h-6" />, number: "3", label: "Sectores Representados" },
            { icon: <Heart className="w-6 h-6" />, number: "100%", label: "Compromiso Local" },
            { icon: <Handshake className="w-6 h-6" />, number: "2025", label: "Año de Colaboración" }
          ].map((stat, index) => (
            <div key={index} className="bg-rx-gold/10 p-6 rounded-lg border border-rx-gold/20 text-center">
              <div className="text-rx-gold mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-rx-gold mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Grid de Patrocinadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl border-2 border-rx-gold/30 hover:border-rx-gold/60 transition-all duration-300 flex flex-col min-h-[280px] shadow-xl hover:shadow-2xl"
            >
              <div className="flex-1 flex items-center justify-center mb-6">
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  className="max-w-full max-h-32 object-contain filter drop-shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-lg text-rx-black font-semibold mb-2">
                  {sponsor.name}
                </h3>
                <div className="inline-block bg-rx-gold/20 px-3 py-1 rounded-full mb-3">
                  <span className="text-rx-black text-xs font-medium">{sponsor.category}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Niveles de Patrocinio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12">
            Oportunidades de Colaboración
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorshipLevels.map((level, index) => (
              <div key={index} className={`bg-gradient-to-br ${level.color} p-6 rounded-2xl border border-rx-gold/20`}>
                <h4 className="font-display text-xl text-rx-gold mb-4 text-center">{level.title}</h4>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <span className="text-rx-gold mt-1 text-sm">●</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-4xl mx-auto"
        >
          <Heart className="w-12 h-12 text-rx-gold mx-auto mb-6" />
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-4">
            ¿Quiere ser parte del proyecto?
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Únase a nuestro equipo de patrocinadores y forme parte de la próxima generación 
            de ingenieros e innovadores. Su apoyo hace posible que jóvenes talentos desarrollen 
            habilidades técnicas y profesionales de alto nivel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-lg">
            <span className="text-gray-400">Contáctenos en:</span>
            <a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="text-rx-gold hover:text-yellow-300 transition font-semibold underline decoration-rx-gold/50 hover:decoration-yellow-300"
            >
              revolutionx.f1@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;