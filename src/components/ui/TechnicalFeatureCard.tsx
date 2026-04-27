import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { TechnicalFeature } from '../../data/technicalData';

interface TechnicalFeatureCardProps {
  feature: TechnicalFeature;
  index: number;
}

const TechnicalFeatureCard: React.FC<TechnicalFeatureCardProps> = ({ feature, index }) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.FC<LucideProps>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4), ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden h-[320px] sm:h-[380px]"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={feature.image}
          alt={`${feature.title}: ${feature.description}`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rx-black via-rx-black/60 to-transparent" />
      </div>

      {/* Content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <IconComponent className="w-4 h-4 text-rx-gold" aria-label={`Icono de característica: ${feature.title}`} role="img" />
          </div>
          <h3 className="text-lg font-display text-white font-medium tracking-tight">
            {feature.title}
          </h3>
        </div>
        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TechnicalFeatureCard;