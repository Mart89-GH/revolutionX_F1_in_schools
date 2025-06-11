import React from 'react';
import { Trophy, Zap, Award, Target, Rocket, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Clasificación Nacional",
      description: "Clasificados para la competición nacional F1 in Schools representando a la Comunidad de Madrid"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisión Técnica",
      description: "Reconocimiento por la precisión en el diseño y manufactura con tolerancias milimétricas"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovación en Diseño",
      description: "Diseño optimizado basado en principios aerodinámicos de coches de F1 actuales"
    }
  ];

  const competitionResults = [
    { event: "Regional Madrid 2025", position: "1º Puesto", category: "Coche Más Rápido - Entry" },
    { event: "Regional Madrid 2025", position: "Top 3", category: "Clasificación General" },
    { event: "Nacional España 2025", position: "Clasificado", category: "Representación Madrid" }
  ];

  return (
    <section id="logros" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Nuestros Logros
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Excelencia demostrada en competiciones de F1 in Schools a nivel regional y nacional, 
            estableciendo nuevos estándares de rendimiento y precisión técnica.
          </p>
        </motion.div>

        {/* Logro Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-rx-gold/20 via-rx-gold/10 to-transparent p-12 rounded-3xl border-2 border-rx-gold/50 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/5 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="flex justify-center mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-rx-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Zap className="w-10 h-10 text-rx-black" />
                </div>
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-5xl text-rx-gold mb-6 font-bold">
                Coche Más Rápido
              </h3>
              <div className="inline-block bg-rx-gold/20 px-6 py-2 rounded-full mb-6">
                <span className="text-rx-gold font-semibold text-lg">Categoría Entry</span>
              </div>
              <p className="text-2xl md:text-3xl text-white mb-6 font-light">
                Comunidad de Madrid 2025
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
              <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                RevolutionX ha demostrado su excelencia técnica al conseguir el tiempo más rápido 
                en la categoría Entry de toda la Comunidad de Madrid, estableciendo un nuevo estándar 
                de rendimiento y precisión en el diseño aerodinámico.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resultados de Competición */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20">
            <div className="flex items-center justify-center mb-6">
              <Medal className="w-8 h-8 text-rx-gold mr-3" />
              <h3 className="font-display text-2xl text-rx-gold">
                Historial de Competiciones
              </h3>
            </div>
            <div className="space-y-4">
              {competitionResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                  <div className="flex items-center space-x-4">
                    <Star className="w-5 h-5 text-rx-gold" />
                    <div>
                      <p className="text-white font-semibold">{result.event}</p>
                      <p className="text-gray-400 text-sm">{result.category}</p>
                    </div>
                  </div>
                  <div className="text-rx-gold font-bold text-lg">
                    {result.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Otros Logros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-rx-gold">{achievement.icon}</div>
              </div>
              <h4 className="font-display text-xl text-rx-gold mb-4 font-semibold">
                {achievement.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reconocimientos Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-2xl text-rx-gold mb-8">
            Reconocimientos y Menciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-rx-gold/5 p-6 rounded-lg border border-rx-gold/20">
              <h4 className="text-white font-semibold mb-2">Excelencia Académica</h4>
              <p className="text-gray-300 text-sm">Reconocimiento por la integración de conocimientos STEM en el proyecto</p>
            </div>
            <div className="bg-rx-gold/5 p-6 rounded-lg border border-rx-gold/20">
              <h4 className="text-white font-semibold mb-2">Innovación Tecnológica</h4>
              <p className="text-gray-300 text-sm">Mención especial por el uso de tecnologías avanzadas de simulación</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;