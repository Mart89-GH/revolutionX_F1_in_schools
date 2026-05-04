import { useTranslation } from 'react-i18next';
import { Cog, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import TechnicalFeatureCard from './ui/TechnicalFeatureCard';
import InteractiveSpeedometer from './InteractiveSpeedometer';
import F1GameElement from './F1GameElement';
import { technicalFeatures, specifications, developmentPhases } from '../data/technicalData';

const TechnicalSection = () => {
  const { t } = useTranslation();

  return (
    <section id="tecnico" className="section-padding bg-rx-black relative">
      <div className="absolute inset-0 bg-mesh-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={Cog}
          title={t('technical.title')}
          subtitle={t('technical.subtitle')}
          sectionNumber="02"
          data-translate="true"
        />

        {/* Interactive Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-24">
          <InteractiveSpeedometer />
          <F1GameElement />
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-4 h-4 text-rx-gold/40" />
            <h3 className="font-display text-xl sm:text-2xl text-white font-medium tracking-tight" role="heading" aria-level={3} data-translate="true">
              {t('technical.specifications')}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-rx-black p-5 sm:p-6 hover:bg-white/[0.02] transition-colors duration-300">
                <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest block mb-2">{spec.label}</span>
                <span className="text-rx-gold font-mono font-medium text-base">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mb-24">
          {technicalFeatures.map((feature, index) => (
            <TechnicalFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="font-display text-xl sm:text-2xl text-white font-medium tracking-tight mb-12" role="heading" aria-level={3} data-translate="true">
            {t('technical.process')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[10%] w-[80%] h-px bg-gradient-to-r from-rx-gold/20 via-rx-gold/10 to-rx-gold/20" />
            
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
                  <span className="text-rx-gold font-mono text-sm font-medium">0{index + 1}</span>
                </div>
                <h4 className="text-white font-display text-base font-medium mb-2 tracking-tight" role="heading" aria-level={4}>
                  {phase.title}
                </h4>
                <p className="text-white/30 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;