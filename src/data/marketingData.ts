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
    description: "Exposición internacional en competiciones STEM Racing, con cobertura en medios especializados, redes sociales y eventos presenciales",
    metrics: "Audiencia directa: 500+ (eventos) | Alcance digital: 45,000+ (redes sociales)"
  },
  {
    icon: "Users",
    title: "Networking Estratégico",
    description: "Conexión directa con líderes de la industria automotriz, instituciones educativas y futuros talentos en ingeniería y tecnología",
    metrics: "Red: 20+ empresas del sector | 10+ instituciones educativas"
  },
  {
    icon: "Rocket",
    title: "Innovación Tecnológica",
    description: "Asociación con tecnologías de vanguardia en diseño 3D, simulación aerodinámica y manufactura digital",
    metrics: "Tecnologías: CAD/CAM, CFD, Impresión 3D, Análisis de datos"
  },
  {
    icon: "Globe",
    title: "Impacto Social",
    description: "Impulso al desarrollo de talento joven en STEM, promoviendo la innovación y la excelencia técnica en educación",
    metrics: "Impacto: 12,000+ estudiantes alcanzados | 200+ proyectos educativos en España"
  }
];

export const marketingChannels: MarketingChannel[] = [
  { channel: "Competiciones STEM Racing", reach: "500+ asistentes por evento", engagement: "Muy Alto" },
  { channel: "Redes Sociales", reach: "1,000+ alcance mensual", engagement: "Alto" },
  { channel: "Medios Especializados", reach: "500+ lectores mensuales", engagement: "Medio-Alto" },
  { channel: "Eventos Educativos", reach: "50+ estudiantes/profesionales", engagement: "Muy Alto" }
];

export const brandBenefits: string[] = [
  "Visibilidad premium en competiciones internacionales STEM Racing",
  "Cobertura destacada en medios especializados de ingeniería y educación",
  "Asociación con tecnologías avanzadas: CAD, CFD, Impresión 3D y CNC",
  "Acceso directo a talento joven altamente cualificado",
  "Networking estratégico con líderes de la industria automotriz y STEM",
  "Demostración tangible de compromiso con educación e innovación",
  "Posicionamiento como empresa líder en apoyo al talento joven",
  "Participación activa en el desarrollo de futuros ingenieros",
  "Presencia destacada en eventos educativos y tecnológicos",
  "ROI medible en términos de exposición y engagement"
];

export const impactMetrics = [
  { icon: "Eye", number: "25K+", label: "Alcance Total" },
  { icon: "Users", number: "1.2K+", label: "Audiencia Presencial" },
  { icon: "Share2", number: "45K+", label: "Alcance Digital" },
  { icon: "Award", number: "3", label: "Niveles de Competición" },
  { icon: "TrendingUp", number: "85%", label: "Engagement Rate" },
  { icon: "Globe", number: "20+", label: "Alianzas Estratégicas" }
];