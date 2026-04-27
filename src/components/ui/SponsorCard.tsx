import React from 'react';
import { motion } from 'framer-motion';
import { Sponsor } from '../../data/sponsorsData';

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group card-glass p-6 sm:p-8 flex flex-col min-h-[240px] hover:shadow-glow"
    >
      <div className="flex-1 flex items-center justify-center mb-6">
        <img
          src={sponsor.logo}
          alt={`Logo de ${sponsor.name}`}
          className="max-w-full max-h-24 object-contain brightness-75 group-hover:brightness-100 transition-all duration-500"
        />
      </div>
      <div className="text-center">
        <h3 className="font-display text-base text-white font-medium mb-1.5 tracking-tight">
          {sponsor.name}
        </h3>
        <span className="inline-block text-rx-gold/50 text-[11px] font-mono uppercase tracking-widest mb-2">
          {sponsor.category}
        </span>
        <p className="text-white/30 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {sponsor.description}
        </p>
      </div>
    </motion.div>
  );
};

export default React.memo(SponsorCard, (prevProps, nextProps) => {
  return (
    prevProps.sponsor.name === nextProps.sponsor.name &&
    prevProps.sponsor.logo === nextProps.sponsor.logo &&
    prevProps.sponsor.category === nextProps.sponsor.category &&
    prevProps.sponsor.description === nextProps.sponsor.description &&
    prevProps.index === nextProps.index
  );
});