export interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  image?: string;
  email?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Saúl Morán",
    role: "Jefe de Proyectos",
    responsibilities: [
      "Coordinación general del equipo y planificación estratégica",
      "Gestión de recursos, presupuestos y cronogramas",
      "Supervisión de objetivos y rendimiento del equipo",
      "Representación en eventos y competiciones"
    ]
  },
  {
    name: "Víctor Jiménez",
    role: "Ingeniero de Diseño",
    responsibilities: [
      "Diseño aerodinámico avanzado del chasis",
      "Optimización mediante software CAD profesional",
      "Desarrollo de soluciones innovadoras de diseño",
      "Documentación técnica y planos de fabricación"
    ]
  },
  {
    name: "Martín Cendra",
    role: "Team Manager",
    responsibilities: [
      "Gestión integral del equipo y liderazgo operativo",
      "Coordinación de actividades y reuniones del equipo",
      "Supervisión del cumplimiento de objetivos y plazos",
      "Comunicación interna y motivación del equipo"
    ]
  },
  {
    name: "Ibrahim Aharrar",
    role: "Ingeniero de Manufactura",
    responsibilities: [
      "Supervisión de procesos de fabricación 3D",
      "Control de calidad y tolerancias técnicas",
      "Optimización de materiales y acabados",
      "Mantenimiento y calibración de equipos"
    ]
  },
  {
    name: "Yago Álvarez",
    role: "Director de Marketing",
    responsibilities: [
      "Desarrollo de estrategia de marca y posicionamiento",
      "Gestión de relaciones con patrocinadores",
      "Coordinación de eventos y presentaciones",
      "Análisis de mercado y oportunidades"
    ]
  },
  {
    name: "Martina Corredor",
    role: "Head of Strategy, Engineering & External Relations",
    responsibilities: [
      "Desarrollo y supervisión de la estrategia técnica del equipo",
      "Liderazgo de iniciativas de ingeniería e innovación",
      "Gestión de relaciones externas con patrocinadores e instituciones",
      "Representación oficial del equipo en eventos y competiciones"
    ]
  },
  {
    name: "Claudia de Paz",
    role: "Gestión de Redes Sociales",
    responsibilities: [
      "Creación de contenido para plataformas sociales",
      "Gestión de comunidades online",
      "Monitoreo de métricas de engagement",
      "Planificación de calendarios de contenido"
    ]
  },
  {
    name: "Álvaro Cardona",
    role: "Ingeniero de Apoyo",
    responsibilities: [
      "Soporte técnico y solución de problemas",
      "Mantenimiento de equipos y herramientas",
      "Colaboración en desarrollo de proyectos",
      "Investigación y pruebas de nuevas tecnologías"
    ]
  }
];

export const teamStats = [
  { icon: "Users", number: "8", label: "Miembros del Equipo" },
  { icon: "Award", number: "1º", label: "Puesto Regional" },
  { icon: "Target", number: "100%", label: "Compromiso" },
  { icon: "Calendar", number: "2024", label: "Año de Fundación" }
];
