import React from 'react';
import { Cog, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import TechnicalFeatureCard from './ui/TechnicalFeatureCard';
import InteractiveSpeedometer from './InteractiveSpeedometer';
import F1GameElement from './F1GameElement';
import { technicalFeatures, specifications, developmentPhases } from '../data/technicalData';

const TechnicalSection = () => {
  return (
    <section id="tecnico" className="py-24 bg-gradient-to-b from-rx-dark to-rx-black">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={Cog}
          title="Innovación Técnica"
          subtitle="Combinamos ingeniería de precisión con tecnologías de vanguardia para crear soluciones revolucionarias en el mundo de F1 in Schools."
        />

        {/* Interactive Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <InteractiveSpeedometer />
          <F1GameElement />
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-rx-gold mr-3" />
              <h3 className="font-display text-2xl text-rx-gold">
                Especificaciones Técnicas del Vehículo
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-rx-black/30 p-4 rounded-lg border border-rx-gold/20">
                  <p className="text-gray-400 text-sm mb-1">{spec.label}</p>
                  <p className="text-rx-gold font-semibold text-lg">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {technicalFeatures.map((feature, index) => (
            <TechnicalFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12">
            Proceso de Desarrollo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-rx-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-rx-gold/50">
                  <span className="text-rx-gold font-display font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;