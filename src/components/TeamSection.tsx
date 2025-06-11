import React from 'react';
import { Users, User, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Saúl Morán",
      role: "Jefe de Proyectos",
      responsibilities: [
        "Coordinación general del equipo",
        "Gestión de recursos y plazos",
        "Toma de decisiones estratégicas"
      ]
    },
    {
      name: "Víctor Jiménez",
      role: "Ingeniero de Diseño",
      responsibilities: [
        "Diseño del chasis",
        "Optimización aerodinámica",
        "Modelado CAD avanzado"
      ]
    },
    {
      name: "Martín Cendra",
      role: "Ingeniero de Simulación",
      responsibilities: [
        "Análisis CFD",
        "Pruebas de rendimiento",
        "Validación de diseños"
      ]
    },
    {
      name: "Ibrahim Aharrar",
      role: "Ingeniero de Manufactura",
      responsibilities: [
        "Procesos de fabricación",
        "Control de calidad",
        "Optimización de producción"
      ]
    },
    {
      name: "Yago Álvarez",
      role: "Director de Marketing",
      responsibilities: [
        "Estrategia de marca",
        "Relaciones públicas",
        "Gestión de patrocinadores"
      ]
    },
    {
      name: "Pablo Bianchi",
      role: "Especialista en Marketing Digital",
      responsibilities: [
        "Redes sociales",
        "Contenido digital",
        "Comunicación online"
      ]
    }
  ];

  return (
    <section id="equipo" className="py-24 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-rx-gold mr-4" />
            <h2 className="font-display text-4xl md:text-6xl text-rx-gold">
              Nuestro Equipo
            </h2>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Un equipo multidisciplinar de jóvenes talentos comprometidos con la excelencia 
            en ingeniería, diseño y estrategia empresarial.
          </p>
        </motion.div>

        {/* Destacado del Equipo */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-rx-gold/20 hover:border-rx-gold/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rx-gold/20 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-rx-gold" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;