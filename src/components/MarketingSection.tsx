import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import StatCard from './ui/StatCard';
import InstagramFeed from './InstagramFeed';
import { marketingOpportunities, marketingChannels, brandBenefits, impactMetrics } from '../data/marketingData';
import * as Icons from 'lucide-react';

const MarketingSection = () => {
  const { t } = useTranslation();

  return (
    <section id="marketing" className="section-padding bg-rx-black relative">
      <div className="absolute inset-0 bg-mesh-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={TrendingUp}
          title={t('marketing.title')}
          subtitle={t('marketing.subtitle')}
          sectionNumber="05"
        />

        {/* Impact Metrics — big numbers row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-24">
          {impactMetrics.map((metric, index) => {
            const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <StatCard
                key={index}
                icon={IconComponent}
                number={metric.number}
                label={metric.label}
                delay={index * 0.06}
              />
            );
          })}
        </div>

        {/* Instagram Feed */}
        <div className="max-w-2xl mx-auto mb-24">
          <InstagramFeed />
        </div>

        {/* Marketing Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-24">
          {marketingOpportunities.map((opportunity, index) => {
            const IconComponent = Icons[opportunity.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="card-glass p-6 sm:p-8 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rx-gold/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-rx-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display text-white font-medium mb-2 tracking-tight">
                      {opportunity.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {opportunity.description}
                    </p>
                    <span className="inline-block text-rx-gold/60 text-xs font-mono">
                      {opportunity.metrics}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marketing Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <h3 className="font-display text-2xl sm:text-3xl text-white font-medium text-center mb-12 tracking-tight" data-translate="true">
            {t('marketing.channels')}
          </h3>
          <div className="space-y-2">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="flex items-center justify-between p-4 sm:p-5 card-glass !rounded-xl">
                <div>
                  <h4 className="text-white text-sm font-medium">{channel.channel}</h4>
                  <p className="text-white/30 text-xs mt-0.5">{channel.reach}</p>
                </div>
                <span className="text-rx-gold/60 font-mono text-xs">
                  {channel.engagement}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="card-glass p-8 sm:p-12 max-w-5xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl text-white font-medium mb-10 text-center tracking-tight" data-translate="true">
            {t('marketing.benefits')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brandBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-rx-gold/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.04] text-center">
            <h4 className="text-rx-gold font-display text-base font-medium mb-2 tracking-tight" data-translate="true">
              {t('marketing.roi')}
            </h4>
            <p className="text-white/30 text-sm" data-translate="true">
              {t('marketing.roiDescription')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;