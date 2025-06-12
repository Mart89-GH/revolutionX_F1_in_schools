export interface TechnicalFeature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface DevelopmentPhase {
  step: string;
  title: string;
  description: string;
}

export const technicalFeatures: TechnicalFeature[] = [
  {
    icon: "Wrench",
    title: "Diseño Avanzado",
    description: "Utilizamos las últimas tecnologías CAD y simulación CFD para optimizar cada componente del vehículo con precisión milimétrica.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Zap",
    title: "Innovación Continua",
    description: "Desarrollo constante de soluciones innovadoras en aerodinámica y selección de materiales avanzados para maximizar el rendimiento.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Wind",
    title: "Optimización Aerodinámica",
    description: "Análisis CFD avanzado y pruebas en túnel de viento para maximizar el rendimiento y la eficiencia del diseño aerodinámico.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Activity",
    title: "Pruebas y Validación",
    description: "Riguroso proceso de pruebas y validación para garantizar el máximo rendimiento en competición y cumplir con los estándares más exigentes.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=1920"
  }
];

export const specifications: Specification[] = [
  { label: "Longitud máxima", value: "210 mm" },
  { label: "Ancho máximo", value: "65 mm" },
  { label: "Altura máxima", value: "50 mm" },
  { label: "Peso mínimo", value: "8 gramos" },
  { label: "Material principal", value: "Balsa de alta calidad" },
  { label: "Acabado", value: "Pintura aerodinámica especializada" }
];

export const developmentPhases: DevelopmentPhase[] = [
  { step: "01", title: "Investigación", description: "Análisis de aerodinámica y materiales" },
  { step: "02", title: "Diseño", description: "Modelado CAD y simulaciones CFD" },
  { step: "03", title: "Prototipado", description: "Fabricación y pruebas iniciales" },
  { step: "04", title: "Optimización", description: "Refinamiento y validación final" }
];