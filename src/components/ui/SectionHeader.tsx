import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  sectionNumber?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  className = "",
  sectionNumber
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`relative mb-16 sm:mb-20 md:mb-28 ${className}`}
    >
      {/* Section number as decorative background element */}
      {sectionNumber && (
        <span className="absolute -top-8 -left-2 text-[8rem] sm:text-[10rem] font-display font-bold text-white/[0.02] select-none pointer-events-none leading-none">
          {sectionNumber}
        </span>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-rx-gold/10">
            <Icon className="w-4 h-4 text-rx-gold" aria-label={`Icono de sección: ${title}`} role="img" />
          </div>
          <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.2em]">
            {subtitle}
          </span>
        </div>
        
        <h2 className="font-display text-display-sm sm:text-display font-bold text-white leading-[0.9] tracking-tight" role="heading" aria-level={2}>
          {title}
        </h2>

        <div className="mt-6 sm:mt-8 glow-line max-w-[120px]" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;