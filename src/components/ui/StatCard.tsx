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
  // Extract numeric value for animation
  const numericValue = parseFloat(number.replace(/[^\d.]/g, ''));
  const suffix = number.replace(/[\d.]/g, '');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="bg-rx-gold/10 p-6 rounded-lg border border-rx-gold/20 text-center hover:bg-rx-gold/15 transition-all duration-300 cursor-pointer"
    >
      <motion.div 
        className="text-rx-gold mb-2 flex justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <div className="text-2xl font-bold text-rx-gold mb-1">
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
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  );
};

export default StatCard;