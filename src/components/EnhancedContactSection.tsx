import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Send, Instagram, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import EnhancedContactForm from './EnhancedContactForm';
import { whyCollaborate } from '../data/contactData';

const EnhancedContactSection = () => {
  const { t } = useTranslation();

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: 'revolutionx.f1@gmail.com',
      sub: 'Respuesta en 24-48h',
      href: 'mailto:revolutionx.f1@gmail.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@revolutionx_f1',
      sub: 'Contenido exclusivo',
      href: 'https://instagram.com/revolutionx_f1',
      external: true,
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'IES José Saramago',
      sub: 'Madrid, España',
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lunes a Viernes',
      sub: '9:00 - 17:00 CET',
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-rx-black relative">
      <div className="absolute inset-0 bg-mesh" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          icon={MessageSquare}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          sectionNumber="06"
        />

        {/* Contact Methods — minimal row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16 sm:mb-24"
        >
          {contactCards.map((card, index) => {
            const Wrapper = card.href ? 'a' : 'div';
            const wrapperProps = card.href ? {
              href: card.href,
              ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
            } : {};
            
            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className="card-glass p-5 sm:p-6 text-center group hover:shadow-glow transition-all duration-500"
              >
                <card.icon className="w-5 h-5 text-rx-gold/40 mx-auto mb-3 group-hover:text-rx-gold/70 transition-colors duration-500" />
                <h3 className="font-display text-sm text-white font-medium mb-1">{card.title}</h3>
                <p className="text-white/50 text-xs mb-0.5 break-all">{card.value}</p>
                <p className="text-white/20 text-[11px]">{card.sub}</p>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Split section: Form + Why Collaborate */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="card-glass p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Send className="w-4 h-4 text-rx-gold/40" />
              <h3 className="font-display text-xl text-white font-medium tracking-tight" data-translate="true">
                {t('contact.form.title', 'Contacto Directo')}
              </h3>
            </div>
            <EnhancedContactForm />
          </motion.div>

          {/* Why Collaborate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="card-glass p-6 sm:p-8 md:p-10"
          >
            <h3 className="font-display text-xl text-white font-medium mb-8 tracking-tight" data-translate="true">
              {t('contact.whyCollaborate')}
            </h3>

            <div className="space-y-4 mb-8">
              {whyCollaborate.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-3 h-3 text-rx-gold/30 mt-1.5 flex-shrink-0 group-hover:text-rx-gold/60 transition-colors duration-300" />
                  <span className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <p className="text-rx-gold/70 font-medium text-center text-sm mb-1.5">
                ¡Su apoyo marca la diferencia!
              </p>
              <p className="text-white/25 text-xs text-center leading-relaxed">
                Contáctenos hoy para explorar oportunidades de colaboración
                personalizadas según sus objetivos empresariales.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-4 tracking-tight" data-translate="true">
            {t('contact.startToday')}
          </h3>
          <p className="text-white/30 text-sm sm:text-base mb-8 leading-relaxed" data-translate="true">
            Estamos listos para discutir cómo su empresa puede beneficiarse
            de una asociación estratégica con RevolutionX.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:revolutionx.f1@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Enviar email a revolutionx.f1@gmail.com"
            >
              <Mail className="w-4 h-4" />
              Enviar email
            </a>
            <a
              href="https://instagram.com/revolutionx_f1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              aria-label="Visitar perfil de Instagram @revolutionx_f1"
            >
              <Instagram className="w-4 h-4" />
              @revolutionx_f1
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
