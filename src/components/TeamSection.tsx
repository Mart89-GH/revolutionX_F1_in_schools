import React from 'react';
import { Users } from 'lucide-react';
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
      name: "Víctor Jímenez",
      role: "Ingeniero de Diseño",
      responsibilities: ["Diseño del chasis", "Optimización aerodinámica"]
    },
    {
      name: "Martín Cendra",
      role: "Ingeniero de Simulación",
      responsibilities: ["Análisis CFD", "Pruebas de rendimiento"]
    },
    {
      name: "Ibrahim Aharrar",
      role: "Ingeniero de Manufactura",
      responsibilities: ["Procesos de fabricación", "Control de calidad"]
    },
    {
      name: "Yago Álvarez",
      role: "Director de Marketing",
      responsibilities: ["Estrategia de marca", "Relaciones públicas"]
    },
    {
      name: "Pablo Bianchi",
      role: "Especialista en Marketing Digital",
      responsibilities: ["Redes sociales", "Contenido digital"]
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-b from-rx-black to-rx-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-rx-gold mb-4">Nuestro Equipo</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Un equipo multidisciplinar de jóvenes talentos comprometidos con la excelencia en ingeniería y diseño.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-rx-dark p-6 rounded-lg border border-rx-gold/20 hover:border-rx-gold/50 transition-all"
            >
              <h3 className="text-xl font-display text-rx-gold mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-300 mb-3">{member.role}</h4>
              <ul className="space-y-2 text-gray-400">
                {member.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-rx-gold">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;