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
    role: "Ingeniero de Simulación",
    responsibilities: [
      "Análisis de dinámica de fluidos computacional (CFD)",
      "Simulaciones de rendimiento y optimización",
      "Validación de diseños mediante pruebas virtuales",
      "Análisis de datos y mejora continua"
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
    role: "Gestión de recursos",
    responsibilities: [
      "Administración de presupuestos y financiamiento",
      "Organización de recursos materiales y humanos",
      "Coordinación logística de proyectos",
      "Mantenimiento de registros y documentación"
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
