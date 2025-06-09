import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Universidad Europea",
      logo: "/Universidad-europea-logo.png",
      textColor: "text-white"
    },
    {
      name: "Perfumería Palárabe",
      logo: "/perfumeria_palarabe.png",
      textColor: "text-white"
    },
    {
      name: "Ayuntamiento de Majadahonda",
      logo: "/Ayuntamiento_de_Majadahonda.png",
      textColor: "text-white"
    },
    {
      name: "Pañalón",
      logo: "/Logo_Panalon.png",
      textColor: "text-white"
    },
    {
      name: "Guitarras Elvira",
      logo: "/Logo_Elvira2.png",
      textColor: "text-white"
    },
    {
      name: "Titanes Atletismo",
      logo: "/Logo_Titanes2.png",
      textColor: "text-white"
    }
  ];

  return (
    <section id="patrocinadores" className="py-20 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-rx-gold mr-3" />
            <h2 className="font-display text-4xl md:text-5xl text-rx-gold">Nuestros Patrocinadores</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Agradecemos el apoyo de nuestros patrocinadores que hacen posible nuestros logros en F1 in Schools.
          </p>
        </motion.div>

        {/* Grid de Patrocinadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-lg border border-rx-gold/30 hover:border-rx-gold/60 transition-all flex flex-col items-center justify-center min-h-[200px]"
            >
              <img
                src={sponsor.logo}
                alt={`Logo de ${sponsor.name}`}
                className="max-w-full max-h-32 object-contain mb-4"
              />
              <h3 className={`font-display text-lg ${sponsor.textColor} text-center`}>
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            ¿Quieres ser parte del proyecto como patrocinador? Contáctanos en:{' '}
            <a href="mailto:revolutionx.f1@gmail.com" className="text-rx-gold hover:text-yellow-300 transition">
              revolutionx.f1@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;