import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
      className={`text-center mb-20 ${className}`}
    >
      <div className="flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-rx-gold mr-4" />
        <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
          {title}
        </h2>
      </div>
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;