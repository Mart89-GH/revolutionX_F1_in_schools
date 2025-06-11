import React from 'react';
import { Target, Users, Rocket, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const MarketingSection = () => {
  const opportunities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Exposición internacional en competiciones F1 in Schools con presencia en medios especializados"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking Estratégico",
      description: "Conexión directa con líderes de la industria automotriz y futuros talentos en ingeniería"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovación Tecnológica",
      description: "Asociación con tecnologías de vanguardia y metodologías de diseño avanzadas"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impacto Social",
      description: "Apoyo al desarrollo educativo y profesional de jóvenes talentos en STEM"
    }
  ];

  return (
    <section id="marketing" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Oportunidades de Patrocinio
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Únase a nuestra visión de innovación y excelencia en la ingeniería del futuro. 
            Descubra los beneficios estratégicos de asociarse con RevolutionX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-rx-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <div className="text-rx-gold">{opportunity.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-rx-gold mb-3 font-semibold">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beneficios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-6 text-center">
            Beneficios del Patrocinio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Exposición en competiciones internacionales</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Presencia en medios especializados</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Asociación con innovación y tecnología</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Acceso a talento joven en ingeniería</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Networking con líderes de la industria</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-rx-gold rounded-full"></span>
                <span className="text-gray-300">Responsabilidad social corporativa</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;