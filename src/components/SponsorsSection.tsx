import React from 'react';
import { Heart, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Universidad Europea",
      logo: "/Universidad-europea-logo.png",
      textColor: "text-white",
      hasBlackBg: true
    },
    {
      name: "Perfumería Palárabe",
      logo: "/perfumeria_palarabe.png",
      textColor: "text-white",
      hasBlackBg: true
    },
    {
      name: "Ayuntamiento de Majadahonda",
      logo: "/Ayuntamiento_de_Majadahonda.png",
      textColor: "text-white",
      hasBlackBg: true
    },
    {
      name: "Pañalón",
      logo: "/Logo_Panalon.png",
      textColor: "text-white",
      hasBlackBg: true
    },
    {
      name: "Guitarras Elvira",
      logo: "/Logo_Elvira2.png",
      textColor: "text-white",
      hasBlackBg: true
    },
    {
      name: "Titanes Atletismo",
      logo: "/Logo_Titanes2.png",
      textColor: "text-white",
      hasBlackBg: true
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
              className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl border-2 border-rx-gold/30 hover:border-rx-gold/60 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] shadow-xl hover:shadow-2xl"
            >
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  className="max-w-full max-h-32 object-contain filter drop-shadow-lg"
                />
              </div>
              <h3 className="font-display text-lg text-rx-black text-center font-semibold">
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </div>

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
            de ingenieros e innovadores.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
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