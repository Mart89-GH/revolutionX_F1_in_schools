import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-center mb-12 sm:mb-16 md:mb-20 ${className}`}
    >
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-rx-gold mr-3 sm:mr-4" aria-label={`Icono de sección: ${title}`} role="img" />
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-rx-gold" role="heading" aria-level={2}>
          {title}
        </h2>
      </div>
      <div className="h-px w-20 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-6 sm:mb-8"></div>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;