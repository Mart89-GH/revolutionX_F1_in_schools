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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl border-2 border-rx-gold/30 hover:border-rx-gold/60 transition-all duration-300 flex flex-col min-h-[280px] shadow-xl hover:shadow-2xl"
    >
      <div className="flex-1 flex items-center justify-center mb-6">
        <img
          src={sponsor.logo}
          alt={`Logo de ${sponsor.name}`}
          className="max-w-full max-h-32 object-contain filter drop-shadow-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="font-display text-lg text-rx-black font-semibold mb-2">
          {sponsor.name}
        </h3>
        <div className="inline-block bg-rx-gold/20 px-3 py-1 rounded-full mb-3">
          <span className="text-rx-black text-xs font-medium">{sponsor.category}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {sponsor.description}
        </p>
      </div>
    </motion.div>
  );
};

export default SponsorCard;