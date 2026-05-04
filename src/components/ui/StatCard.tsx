import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, number, label, delay = 0 }) => {
  const numericValue = parseFloat(number.replace(/[^\d.]/g, ''));
  const suffix = number.replace(/[\d.]/g, '');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group text-center py-6 sm:py-8"
    >
      <div className="text-rx-gold/30 mb-3 flex justify-center group-hover:text-rx-gold/60 transition-colors duration-500">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 tracking-tight">
        {isNaN(numericValue) ? (
          number
        ) : (
          <AnimatedCounter 
            end={numericValue} 
            suffix={suffix}
            duration={1.5}
          />
        )}
      </div>
      <div className="text-white/30 text-xs font-mono uppercase tracking-widest">{label}</div>
    </motion.div>
  );
};

export default StatCard;