import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import SponsorCard from './ui/SponsorCard';
import StatCard from './ui/StatCard';
import { sponsors, sponsorshipLevels, sponsorStats } from '../data/sponsorsData';
import * as Icons from 'lucide-react';

const SponsorsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="patrocinadores" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={Handshake}
          title={t('sponsors.title')}
          subtitle={t('sponsors.subtitle')}
        />

        {/* Sponsor Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {sponsorStats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons] as React.ComponentType<any>;
            return (
              <StatCard
                key={index}
                icon={IconComponent}
                number={stat.number}
                label={stat.label}
                delay={index * 0.1}
              />
            );
          })}
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} index={index} />
          ))}
        </div>

        {/* Sponsorship Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12" data-translate="true">
            {t('sponsors.collaboration')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorshipLevels.map((level, index) => (
              <div key={index} className={`bg-gradient-to-br ${level.color} p-6 rounded-2xl border border-rx-gold/20`}>
                <h4 className="font-display text-xl text-rx-gold mb-4 text-center">{level.title}</h4>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <span className="text-rx-gold mt-1 text-sm">●</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-4xl mx-auto"
        >
          <Heart className="w-12 h-12 text-rx-gold mx-auto mb-6" />
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-4" data-translate="true">
            {t('sponsors.question')}
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" data-translate="true">
            {t('sponsors.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-lg">
            <span className="text-gray-400" data-translate="true">{t('sponsors.contact')}</span>
            <a 
              href="mailto:revolutionx.f1@gmail.com" 
              className="text-rx-gold hover:text-yellow-300 transition font-semibold underline decoration-rx-gold/50 hover:decoration-yellow-300"
            >
              revolutionx.f1@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;