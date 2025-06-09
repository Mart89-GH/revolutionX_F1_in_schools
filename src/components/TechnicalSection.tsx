import React from 'react';
import { Wrench, Zap, Wind, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnicalSection = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diseño Avanzado",
      description: "Utilizamos las últimas tecnologías CAD y simulación CFD para optimizar cada componente.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovación Continua",
      description: "Desarrollo constante de soluciones innovadoras en aerodinámica y materiales.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Optimización Aerodinámica",
      description: "Análisis CFD avanzado para maximizar el rendimiento y la eficiencia.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pruebas y Validación",
      description: "Riguroso proceso de pruebas para garantizar el máximo rendimiento.",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  return (
    <section id="tecnico" className="py-20 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-rx-gold mb-4">Innovación Técnica</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Combinamos ingeniería de precisión con tecnologías de vanguardia para crear soluciones revolucionarias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-rx-dark p-6 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-all group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rx-black/80 to-transparent"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-rx-gold mr-3">{feature.icon}</div>
                <h3 className="text-2xl font-display text-rx-gold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;