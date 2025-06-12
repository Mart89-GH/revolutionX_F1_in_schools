export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  description: string;
  action: string | null;
}

export interface CollaborationArea {
  title: string;
  description: string;
  icon: string;
}

export const contactMethods: ContactMethod[] = [
  {
    icon: "Mail",
    title: "Correo Electrónico",
    value: "revolutionx.f1@gmail.com",
    description: "Respuesta en 24-48 horas",
    action: "mailto:revolutionx.f1@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Ubicación",
    value: "IES José Saramago",
    description: "Madrid, España",
    action: null
  },
  {
    icon: "Clock",
    title: "Horario de Contacto",
    value: "Lunes a Viernes",
    description: "9:00 - 17:00 CET",
    action: null
  }
];

export const collaborationAreas: CollaborationArea[] = [
  {
    title: "Patrocinio Técnico",
    description: "Apoyo en materiales, herramientas y tecnología para el desarrollo del vehículo",
    icon: "🔧"
  },
  {
    title: "Patrocinio Financiero",
    description: "Inversión directa para cubrir gastos de competición, viajes y equipamiento",
    icon: "💰"
  },
  {
    title: "Mentoring Profesional",
    description: "Asesoramiento técnico y profesional por parte de expertos de la industria",
    icon: "👥"
  },
  {
    title: "Colaboración Educativa",
    description: "Programas de formación, visitas técnicas y experiencias profesionales",
    icon: "🎓"
  }
];

export const whyCollaborate: string[] = [
  "Exposición en competiciones internacionales de prestigio",
  "Presencia en medios especializados del sector educativo",
  "Asociación directa con innovación y tecnología de vanguardia",
  "Acceso privilegiado a talento joven en ingeniería",
  "Networking exclusivo con líderes de la industria",
  "Impacto positivo demostrable en la educación STEM",
  "Posicionamiento como empresa socialmente responsable",
  "Retorno de inversión en imagen y reputación corporativa"
];