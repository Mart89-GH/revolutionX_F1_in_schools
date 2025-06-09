import React from 'react';
import { Target, Users, Rocket, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const MarketingSection = () => {
  const opportunities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Exposición internacional en competiciones F1 in Schools"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking",
      description: "Conexión con líderes de la industria y futuros talentos"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovación",
      description: "Asociación con tecnologías de vanguardia"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impacto Social",
      description: "Apoyo al desarrollo de jóvenes talentos en ingeniería"
    }
  ];

  return (
    <section id="marketing" className="py-20 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-rx-gold mb-4">Oportunidades de Patrocinio</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Únete a nuestra visión de innovación y excelencia en la ingeniería del futuro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-rx-dark p-6 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-all"
            >
              <div className="text-rx-gold mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-display text-rx-gold mb-2">{opportunity.title}</h3>
              <p className="text-gray-300">{opportunity.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-2xl text-rx-gold mb-6">Niveles de Patrocinio Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Platino', 'Oro', 'Plata'].map((nivel, index) => (
              <div key={index} className="bg-rx-dark p-6 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-all">
                <h4 className="text-xl font-display text-rx-gold mb-2">Patrocinador {nivel}</h4>
                <p className="text-gray-300">Contacta con nosotros para conocer los beneficios específicos de cada nivel</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;