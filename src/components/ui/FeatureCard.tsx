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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`group card-glass p-6 sm:p-8 flex items-start gap-5 hover:shadow-glow ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-rx-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rx-gold/20 transition-colors duration-500">
        <Icon className="w-5 h-5 text-rx-gold" aria-label={`Icono de ${title}`} role="img" />
      </div>
      <div>
        <h4 className="font-display text-lg text-white font-medium mb-2 tracking-tight">
          {title}
        </h4>
        <p className="text-white/40 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;