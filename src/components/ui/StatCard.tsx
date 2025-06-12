import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, number, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-rx-gold/10 p-6 rounded-lg border border-rx-gold/20 text-center hover:bg-rx-gold/15 transition-colors duration-300"
    >
      <div className="text-rx-gold mb-2 flex justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-2xl font-bold text-rx-gold mb-1">{number}</div>
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  );
};

export default StatCard;