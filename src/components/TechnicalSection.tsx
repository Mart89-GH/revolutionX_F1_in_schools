import React from 'react';
import { Wrench, Zap, Wind, Activity, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnicalSection = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diseño Avanzado",
      description: "Utilizamos las últimas tecnologías CAD y simulación CFD para optimizar cada componente del vehículo.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovación Continua",
      description: "Desarrollo constante de soluciones innovadoras en aerodinámica y selección de materiales avanzados.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Optimización Aerodinámica",
      description: "Análisis CFD avanzado y túnel de viento para maximizar el rendimiento y la eficiencia del diseño.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pruebas y Validación",
      description: "Riguroso proceso de pruebas y validación para garantizar el máximo rendimiento en competición.",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  return (
    <section id="tecnico" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Cog className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Innovación Técnica
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Combinamos ingeniería de precisión con tecnologías de vanguardia para crear 
            soluciones revolucionarias en el mundo de F1 in Schools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-rx-dark to-rx-black rounded-2xl overflow-hidden border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rx-black via-rx-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-rx-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-rx-gold/30">
                        <div className="text-rx-gold">{feature.icon}</div>
                      </div>
                      <h3 className="text-2xl font-display text-white font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;