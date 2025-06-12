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

export const teamStats = [
  { icon: "Users", number: "6", label: "Miembros del Equipo" },
  { icon: "Award", number: "1º", label: "Puesto Regional" },
  { icon: "Target", number: "100%", label: "Compromiso" },
  { icon: "Zap", number: "2025", label: "Año Activo" }
];