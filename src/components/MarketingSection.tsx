import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import StatCard from './ui/StatCard';
import InstagramFeed from './InstagramFeed';
import { marketingOpportunities, marketingChannels, brandBenefits, impactMetrics } from '../data/marketingData';
import * as Icons from 'lucide-react';

const MarketingSection = () => {
  const { t } = useTranslation();

  return (
    <section id="marketing" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={TrendingUp}
          title={t('marketing.title')}
          subtitle={t('marketing.subtitle')}
        />

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {impactMetrics.map((metric, index) => {
            const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <StatCard
                key={index}
                icon={IconComponent}
                number={metric.number}
                label={metric.label}
                delay={index * 0.1}
              />
            );
          })}
        </div>

        {/* Instagram Feed Integration */}
        <div className="max-w-2xl mx-auto mb-16">
          <InstagramFeed />
        </div>

        {/* Marketing Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {marketingOpportunities.map((opportunity, index) => {
            const IconComponent = Icons[opportunity.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-rx-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-rx-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display text-rx-gold mb-3 font-semibold">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {opportunity.description}
                    </p>
                    <div className="bg-rx-gold/10 px-4 py-2 rounded-lg border border-rx-gold/20">
                      <p className="text-rx-gold text-sm font-medium">{opportunity.metrics}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marketing Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12" data-translate="true">
            {t('marketing.channels')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20">
              <div className="space-y-4">
                {marketingChannels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-rx-gold/5 rounded-lg border border-rx-gold/10">
                    <div>
                      <h4 className="text-white font-semibold">{channel.channel}</h4>
                      <p className="text-gray-400 text-sm">{channel.reach}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-rx-gold font-medium">Engagement: {channel.engagement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-6xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-8 text-center" data-translate="true">
            {t('marketing.benefits')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {brandBenefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-rx-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {brandBenefits.slice(4).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-rx-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-rx-black/30 rounded-lg border border-rx-gold/20 text-center">
            <h4 className="text-rx-gold font-semibold text-lg mb-2" data-translate="true">
              {t('marketing.roi')}
            </h4>
            <p className="text-gray-300" data-translate="true">
              {t('marketing.roiDescription')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;