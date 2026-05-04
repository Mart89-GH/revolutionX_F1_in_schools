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
    <section id="patrocinadores" className="section-padding bg-rx-black relative">
      <div className="absolute inset-0 bg-mesh-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={Handshake}
          title={t('sponsors.title')}
          subtitle={t('sponsors.subtitle')}
          sectionNumber="04"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          {sponsorStats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <StatCard
                key={index}
                icon={IconComponent}
                number={stat.number}
                label={stat.label}
                delay={index * 0.08}
              />
            );
          })}
        </div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Sponsor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-24">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} index={index} />
          ))}
        </div>

        {/* Sponsorship Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl sm:text-3xl text-white font-medium text-center mb-12 tracking-tight" data-translate="true">
            {t('sponsors.collaboration')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {sponsorshipLevels.map((level, index) => (
              <div key={index} className="card-glass p-6 sm:p-8">
                <h4 className="font-display text-lg text-rx-gold font-medium mb-5 text-center tracking-tight">{level.title}</h4>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/40">
                      <span className="w-1 h-1 bg-rx-gold/40 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Heart className="w-6 h-6 text-rx-gold/40 mx-auto mb-6" />
          <h3 className="font-display text-2xl sm:text-3xl text-white font-medium mb-4 tracking-tight" data-translate="true">
            {t('sponsors.question')}
          </h3>
          <p className="text-white/40 text-base mb-8 leading-relaxed" data-translate="true">
            {t('sponsors.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-base">
            <span className="text-white/30" data-translate="true">{t('sponsors.contact')}</span>
            <a
              href="mailto:revolutionx.f1@gmail.com"
              className="text-rx-gold hover:text-rx-gold-light transition-colors duration-300 font-medium"
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