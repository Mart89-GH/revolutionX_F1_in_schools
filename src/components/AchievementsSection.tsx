import React from 'react';
import { Trophy, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  return (
    <section id="logros" className="py-20 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-rx-gold mb-4">Nuestros Logros</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Excelencia demostrada en competiciones de F1 in Schools a nivel regional y nacional.
          </p>
        </motion.div>

        {/* Logro Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-rx-gold/20 to-rx-gold/10 p-8 rounded-2xl border-2 border-rx-gold/50 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-rx-gold p-4 rounded-full">
                <Zap className="w-12 h-12 text-rx-black" />
              </div>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-rx-gold mb-4">
              Coche Más Rápido - Categoría Entry
            </h3>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              Comunidad de Madrid 2025
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              RevolutionX ha demostrado su excelencia técnica al conseguir el tiempo más rápido 
              en la categoría Entry de toda la Comunidad de Madrid, estableciendo un nuevo estándar 
              de rendimiento y precisión en el diseño.
            </p>
          </div>
        </motion.div>

        {/* Otros Logros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🏆",
              title: "Clasificación Nacional",
              description: "Clasificados para la competición nacional F1 in Schools"
            },
            {
              icon: "🎯",
              title: "Precisión Técnica",
              description: "Reconocimiento por la precisión en el diseño y manufactura"
            },
            {
              icon: "🚀",
              title: "Innovación",
              description: "Premio a la innovación en soluciones aerodinámicas"
            }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-rx-dark p-6 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-all text-center"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="font-display text-xl text-rx-gold mb-3">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;