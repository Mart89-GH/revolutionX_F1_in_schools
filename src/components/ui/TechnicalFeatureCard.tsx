import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TechnicalFeature } from '../../data/technicalData';

interface TechnicalFeatureCardProps {
  feature: TechnicalFeature;
  index: number;
}

const TechnicalFeatureCard: React.FC<TechnicalFeatureCardProps> = ({ feature, index }) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <motion.div
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
            alt={`${feature.title}: ${feature.description}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rx-black via-rx-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-rx-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-rx-gold/30">
                <IconComponent className="w-6 h-6 text-rx-gold" aria-label={`Icono de característica: ${feature.title}`} role="img" />
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
  );
};

export default TechnicalFeatureCard;