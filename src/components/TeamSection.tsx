import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import TeamMemberCard from './ui/TeamMemberCard';
import StatCard from './ui/StatCard';
import { teamMembers, teamStats } from '../data/teamData';
import * as Icons from 'lucide-react';

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="equipo" className="section-padding bg-rx-black relative">
      <div className="absolute inset-0 bg-mesh-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={Users}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          sectionNumber="01"
          data-translate="true"
        />

        {/* Team Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <Award className="w-8 h-8 text-rx-gold/40 mx-auto mb-6" />
          <h3 className="font-display text-2xl sm:text-3xl text-white font-medium mb-4 tracking-tight" data-translate="true">
            {t('team.excellence.title')}
          </h3>
          <p className="text-white/40 text-base leading-relaxed" data-translate="true">
            {t('team.excellence.description')}
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          {teamStats.map((stat, index) => {
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;