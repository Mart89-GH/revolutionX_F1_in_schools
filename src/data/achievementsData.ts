export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface CompetitionResult {
  event: string;
  position: string;
  category: string;
}

export const mainAchievement = {
  title: "Coche Más Rápido",
  category: "Categoría Entry",
  event: "Comunidad de Madrid 2024",
  description: "RevolutionX ha demostrado su excelencia técnica al conseguir el tiempo más rápido en la categoría Entry de toda la Comunidad de Madrid, combinando innovación en diseño aerodinámico, precisión en manufactura y optimización mediante simulaciones CFD avanzadas."
};

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "Clasificación Nacional",
    description: "Clasificación directa para la competición nacional STEM Racing 2024, representando a la Comunidad de Madrid tras obtener el primer puesto regional"
  },
  {
    icon: "Target",
    title: "Excelencia Técnica",
    description: "Reconocimiento especial por la precisión en diseño y manufactura, alcanzando tolerancias de ±0.1mm y optimización aerodinámica mediante CFD"
  },
  {
    icon: "Rocket",
    title: "Innovación en Diseño",
    description: "Desarrollo de un diseño revolucionario que incorpora los últimos avances en aerodinámica de F1, validado mediante más de 100 simulaciones computacionales"
  }
];

export const competitionResults: CompetitionResult[] = [
  { event: "Regional Madrid 2024", position: "1º Puesto", category: "Coche Más Rápido - Entry" },
  { event: "Regional Madrid 2024", position: "1º Puesto", category: "Clasificación General" },
  { event: "Nacional España 2024", position: "Clasificado", category: "Representación Madrid" }
];