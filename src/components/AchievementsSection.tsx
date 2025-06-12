import React from 'react';
import { Award, Zap, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import FeatureCard from './ui/FeatureCard';
import { mainAchievement, achievements, competitionResults, recognitions } from '../data/achievementsData';
import * as Icons from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="logros" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={Award}
          title="Nuestros Logros"
          subtitle="Excelencia demostrada en competiciones de F1 in Schools a nivel regional y nacional, estableciendo nuevos estándares de rendimiento y precisión técnica."
        />

        {/* Main Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-rx-gold/20 via-rx-gold/10 to-transparent p-12 rounded-3xl border-2 border-rx-gold/50 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/5 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="flex justify-center mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-rx-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Zap className="w-10 h-10 text-rx-black" />
                </div>
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-5xl text-rx-gold mb-6 font-bold">
                {mainAchievement.title}
              </h3>
              <div className="inline-block bg-rx-gold/20 px-6 py-2 rounded-full mb-6">
                <span className="text-rx-gold font-semibold text-lg">{mainAchievement.category}</span>
              </div>
              <p className="text-2xl md:text-3xl text-white mb-6 font-light">
                {mainAchievement.event}
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
              <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {mainAchievement.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competition Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20">
            <div className="flex items-center justify-center mb-6">
              <Medal className="w-8 h-8 text-rx-gold mr-3" />
              <h3 className="font-display text-2xl text-rx-gold">
                Historial de Competiciones
              </h3>
            </div>
            <div className="space-y-4">
              {competitionResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                  <div className="flex items-center space-x-4">
                    <Star className="w-5 h-5 text-rx-gold" />
                    <div>
                      <p className="text-white font-semibold">{result.event}</p>
                      <p className="text-gray-400 text-sm">{result.category}</p>
                    </div>
                  </div>
                  <div className="text-rx-gold font-bold text-lg">
                    {result.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = Icons[achievement.icon as keyof typeof Icons] as React.ComponentType<any>;
            return (
              <FeatureCard
                key={index}
                icon={IconComponent}
                title={achievement.title}
                description={achievement.description}
                delay={index * 0.2}
              />
            );
          })}
        </div>

        {/* Additional Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display text-2xl text-rx-gold mb-8">
            Reconocimientos y Menciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-rx-gold/5 p-6 rounded-lg border border-rx-gold/20">
                <h4 className="text-white font-semibold mb-2">{recognition.title}</h4>
                <p className="text-gray-300 text-sm">{recognition.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;