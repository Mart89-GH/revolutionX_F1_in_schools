export interface MarketingOpportunity {
  icon: string;
  title: string;
  description: string;
  metrics: string;
}

export interface MarketingChannel {
  channel: string;
  reach: string;
  engagement: string;
}

export const marketingOpportunities: MarketingOpportunity[] = [
  {
    icon: "Target",
    title: "Alcance Global",
    description: "Exposición internacional en competiciones F1 in Schools con presencia en medios especializados y cobertura digital",
    metrics: "Audiencia potencial: +50,000 espectadores"
  },
  {
    icon: "Users",
    title: "Networking Estratégico",
    description: "Conexión directa con líderes de la industria automotriz, educativa y futuros talentos en ingeniería",
    metrics: "Red de contactos: Industria + Academia"
  },
  {
    icon: "Rocket",
    title: "Innovación Tecnológica",
    description: "Asociación con tecnologías de vanguardia, metodologías de diseño avanzadas y procesos de I+D",
    metrics: "Tecnologías: CAD, CFD, Manufactura"
  },
  {
    icon: "Globe",
    title: "Impacto Social",
    description: "Apoyo al desarrollo educativo y profesional de jóvenes talentos en STEM con proyección internacional",
    metrics: "Impacto: Educación + Sociedad"
  }
];

export const marketingChannels: MarketingChannel[] = [
  { channel: "Competiciones Presenciales", reach: "Audiencia especializada", engagement: "Alto" },
  { channel: "Redes Sociales", reach: "Comunidad F1 Schools", engagement: "Medio-Alto" },
  { channel: "Medios Especializados", reach: "Sector educativo/técnico", engagement: "Alto" },
  { channel: "Eventos Institucionales", reach: "Autoridades y empresas", engagement: "Muy Alto" }
];

export const brandBenefits: string[] = [
  "Exposición en competiciones internacionales",
  "Presencia en medios especializados del sector",
  "Asociación con innovación y tecnología avanzada",
  "Acceso a talento joven en ingeniería y diseño",
  "Networking con líderes de la industria automotriz",
  "Responsabilidad social corporativa demostrable",
  "Posicionamiento como empresa innovadora",
  "Conexión con el futuro de la ingeniería"
];

export const impactMetrics = [
  { icon: "Eye", number: "50K+", label: "Audiencia Potencial" },
  { icon: "Award", number: "3", label: "Niveles Competición" },
  { icon: "BarChart", number: "100%", label: "ROI en Talento" },
  { icon: "Globe", number: "Internacional", label: "Alcance Global" }
];