import React from 'react';
import { Target, Users, Rocket, Globe, TrendingUp, BarChart, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const MarketingSection = () => {
  const opportunities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Exposición internacional en competiciones F1 in Schools con presencia en medios especializados y cobertura digital",
      metrics: "Audiencia potencial: +50,000 espectadores"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking Estratégico",
      description: "Conexión directa con líderes de la industria automotriz, educativa y futuros talentos en ingeniería",
      metrics: "Red de contactos: Industria + Academia"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovación Tecnológica",
      description: "Asociación con tecnologías de vanguardia, metodologías de diseño avanzadas y procesos de I+D",
      metrics: "Tecnologías: CAD, CFD, Manufactura"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impacto Social",
      description: "Apoyo al desarrollo educativo y profesional de jóvenes talentos en STEM con proyección internacional",
      metrics: "Impacto: Educación + Sociedad"
    }
  ];

  const marketingChannels = [
    { channel: "Competiciones Presenciales", reach: "Audiencia especializada", engagement: "Alto" },
    { channel: "Redes Sociales", reach: "Comunidad F1 Schools", engagement: "Medio-Alto" },
    { channel: "Medios Especializados", reach: "Sector educativo/técnico", engagement: "Alto" },
    { channel: "Eventos Institucionales", reach: "Autoridades y empresas", engagement: "Muy Alto" }
  ];

  const brandBenefits = [
    "Exposición en competiciones internacionales",
    "Presencia en medios especializados del sector",
    "Asociación con innovación y tecnología avanzada",
    "Acceso a talento joven en ingeniería y diseño",
    "Networking con líderes de la industria automotriz",
    "Responsabilidad social corporativa demostrable",
    "Posicionamiento como empresa innovadora",
    "Conexión con el futuro de la ingeniería"
  ];

  return (
    <section id="marketing" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Oportunidades de Patrocinio
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Únase a nuestra visión de innovación y excelencia en la ingeniería del futuro. 
            Descubra los beneficios estratégicos de asociarse con RevolutionX y el retorno 
            de inversión en talento y tecnología.
          </p>
        </motion.div>

        {/* Métricas de Impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
        >
          {[
            { icon: <Eye className="w-6 h-6" />, number: "50K+", label: "Audiencia Potencial" },
            { icon: <Award className="w-6 h-6" />, number: "3", label: "Niveles Competición" },
            { icon: <BarChart className="w-6 h-6" />, number: "100%", label: "ROI en Talento" },
            { icon: <Globe className="w-6 h-6" />, number: "Internacional", label: "Alcance Global" }
          ].map((metric, index) => (
            <div key={index} className="bg-rx-gold/10 p-6 rounded-lg border border-rx-gold/20 text-center">
              <div className="text-rx-gold mb-2 flex justify-center">{metric.icon}</div>
              <div className="text-xl font-bold text-rx-gold mb-1">{metric.number}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {opportunities.map((opportunity, index) => (
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
                  <div className="text-rx-gold">{opportunity.icon}</div>
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
          ))}
        </div>

        {/* Canales de Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl text-rx-gold text-center mb-12">
            Canales de Exposición
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

        {/* Beneficios del Patrocinio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-8 rounded-2xl border border-rx-gold/30 max-w-6xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-rx-gold mb-8 text-center">
            Beneficios Estratégicos del Patrocinio
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
            <h4 className="text-rx-gold font-semibold text-lg mb-2">
              Retorno de Inversión Garantizado
            </h4>
            <p className="text-gray-300">
              Su inversión en RevolutionX no solo apoya el talento joven, sino que posiciona 
              su marca como líder en innovación y responsabilidad social corporativa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;