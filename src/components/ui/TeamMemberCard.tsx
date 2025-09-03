import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mr-4">
          <User className="w-6 h-6 text-rx-gold" aria-label={`Foto de perfil de ${member.name}`} role="img" />
        </div>
        <div>
          <h3 className="text-xl font-display text-rx-gold font-semibold">
            {member.name}
          </h3>
          <p className="text-gray-400 text-sm font-medium">
            {member.role}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
          Responsabilidades Principales
        </h4>
        <ul className="space-y-3">
          {member.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-gray-300">
              <span className="text-rx-gold mt-1 text-sm">●</span>
              <span className="text-sm leading-relaxed">{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default React.memo(TeamMemberCard, (prevProps, nextProps) => {
  return (
    prevProps.member.name === nextProps.member.name &&
    prevProps.member.role === nextProps.member.role &&
    prevProps.index === nextProps.index &&
    JSON.stringify(prevProps.member.responsibilities) === JSON.stringify(nextProps.member.responsibilities)
  );
});