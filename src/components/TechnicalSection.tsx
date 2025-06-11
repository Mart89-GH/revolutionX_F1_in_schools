import React from 'react';
import { Wrench, Zap, Wind, Activity, Cog, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnicalSection = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diseño Avanzado",
      description: "Utilizamos las últimas tecnologías CAD y simulación CFD para optimizar cada componente del vehículo con precisión milimétrica.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovación Continua",
      description: "Desarrollo constante de soluciones innovadoras en aerodinámica y selección de materiales avanzados para maximizar el rendimiento.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Optimización Aerodinámica",
      description: "Análisis CFD avanzado y pruebas en túnel de viento para maximizar el rendimiento y la eficiencia del diseño aerodinámico.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pruebas y Validación",
      description: "Riguroso proceso de pruebas y validación para garantizar el máximo rendimiento en competición y cumplir con los estándares más exigentes.",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const specifications = [
    { label: "Longitud máxima", value: "210 mm" },
    { label: "Ancho máximo", value: "65 mm" },
    { label: "Altura máxima", value: "50 mm" },
    { label: "Peso mínimo", value: "8 gramos" },
    { label: "Material principal", value: "Balsa de alta calidad" },
    { label: "Acabado", value: "Pintura aerodinámica especializada" }
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

        {/* Especificaciones Técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-rx-gold mr-3" />
              <h3 className="font-display text-2xl text-rx-gold">
                Especificaciones Técnicas del Vehículo
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-rx-black/30 p-4 rounded-lg border border-rx-gold/20">
                  <p className="text-gray-400 text-sm mb-1">{spec.label}</p>
                  <p className="text-rx-gold font-semibold text-lg">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
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

        {/* Proceso de Desarrollo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12">
            Proceso de Desarrollo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Investigación", desc: "Análisis de aerodinámica y materiales" },
              { step: "02", title: "Diseño", desc: "Modelado CAD y simulaciones CFD" },
              { step: "03", title: "Prototipado", desc: "Fabricación y pruebas iniciales" },
              { step: "04", title: "Optimización", desc: "Refinamiento y validación final" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-rx-gold/50">
                  <span className="text-rx-gold font-display font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;