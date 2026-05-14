import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Zap, Star, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import FeatureCard from './ui/FeatureCard';
import { mainAchievement, achievements, competitionResults } from '../data/achievementsData';
import * as Icons from 'lucide-react';

const AchievementsSection = () => {
  const { t } = useTranslation();
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://legendary-panda-7b91a1.netlify.app';

  // Structured data for main achievement (SportsEvent)
  const sportsEventData = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'STEM Racing - Campeonato Autonómico de Madrid',
    description: 'RevolutionX won 1st place in the STEM Racing Regional Championship Madrid',
    startDate: '2025-04-15',
    endDate: '2025-04-17',
    location: {
      '@type': 'Place',
      name: 'Madrid',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Madrid',
        addressCountry: 'ES'
      }
    },
    competitor: {
      '@type': 'SportsTeam',
      name: 'RevolutionX',
      url: baseUrl
    },
    organizer: {
      '@type': 'Organization',
      name: 'STEM Racing',
      url: 'https://www.f1inschools.com'
    }
  };

  return (
    <section id="logros" className="section-padding bg-rx-black relative">
      {/* SportsEvent Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(sportsEventData)}
      </script>

      <div className="absolute inset-0 bg-mesh" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={Award}
          title={t('achievements.title')}
          subtitle={t('achievements.subtitle')}
          sectionNumber="03"
          data-translate="true"
        />

        {/* Main Achievement — Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          {/* Giant Number */}
          <div className="relative inline-block mb-8">
            <span className="font-display text-[10rem] sm:text-[14rem] font-bold text-white/[0.03] leading-none select-none">
              1º
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-rx-gold/60" />
            </div>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 tracking-tight" data-translate="true">
            {t('achievements.mainTitle')}
          </h3>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-rx-gold/10 border border-rx-gold/20 text-rx-gold text-xs font-mono uppercase tracking-wider" data-translate="true">
              {t('achievements.category')}
            </span>
          </div>
          <p className="text-white/50 text-lg sm:text-xl mb-8 font-light" data-translate="true">
            {t('achievements.event')}
          </p>
          <div className="glow-line max-w-[80px] mx-auto mb-8" />
          <p className="text-white/40 text-base max-w-2xl mx-auto leading-relaxed">
            {mainAchievement.description}
          </p>
        </motion.div>

        {/* Competition Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="space-y-3">
            {competitionResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-4 sm:p-5 card-glass !rounded-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-rx-gold/40" />
                  <div>
                    <p className="text-white text-sm font-medium">{result.event}</p>
                    <p className="text-white/30 text-xs">{result.category}</p>
                  </div>
                </div>
                <span className="text-rx-gold font-display font-bold text-base">
                  {result.position}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent: LucideIcon = Icons[achievement.icon as keyof typeof Icons] as LucideIcon;
            return (
              <FeatureCard
                key={index}
                icon={IconComponent}
                title={achievement.title}
                description={achievement.description}
                delay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
