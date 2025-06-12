import React from 'react';
import { Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import TeamMemberCard from './ui/TeamMemberCard';
import StatCard from './ui/StatCard';
import { teamMembers, teamStats } from '../data/teamData';
import * as Icons from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="equipo" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={Users}
          title="Nuestro Equipo"
          subtitle="Un equipo multidisciplinar de jóvenes talentos comprometidos con la excelencia en ingeniería, diseño y estrategia empresarial."
        />

        {/* Team Excellence Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 text-center">
            <Award className="w-12 h-12 text-rx-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl text-rx-gold mb-4">
              Excelencia Académica y Técnica
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nuestro equipo está formado por estudiantes destacados del IES José Saramago, 
              seleccionados por su excelencia académica y pasión por la ingeniería. Cada miembro 
              aporta habilidades especializadas que nos permiten competir al más alto nivel.
            </p>
          </div>
        </motion.div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {teamStats.map((stat, index) => {
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;