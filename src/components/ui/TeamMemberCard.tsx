import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group card-glass p-6 sm:p-8 hover:shadow-glow"
    >
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar with initials */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rx-gold/20 to-rx-gold/5 flex items-center justify-center border border-rx-gold/20 group-hover:border-rx-gold/40 transition-colors duration-500">
          <span className="font-display text-sm font-semibold text-rx-gold">
            {initials}
          </span>
        </div>
        <div>
          <h3 className="font-display text-lg text-white font-medium tracking-tight">
            {member.name}
          </h3>
          <p className="text-rx-gold/70 text-xs font-mono uppercase tracking-wider">
            {member.role}
          </p>
        </div>
      </div>
      
      <div className="space-y-2.5">
        {member.responsibilities.map((resp, idx) => (
          <div key={idx} className="flex items-start gap-3 text-white/40 group-hover:text-white/60 transition-colors duration-500">
            <span className="w-1 h-1 bg-rx-gold/40 rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{resp}</span>
          </div>
        ))}
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