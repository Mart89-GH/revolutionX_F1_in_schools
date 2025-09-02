import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 text-center shadow-xl hover:shadow-2xl ${className}`}
    >
      <div className="w-16 h-16 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-rx-gold" aria-label={`Icono de ${title}`} role="img" />
      </div>
      <h4 className="font-display text-xl text-rx-gold mb-4 font-semibold">
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;