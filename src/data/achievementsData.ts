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
  event: "Comunidad de Madrid 2025",
  description: "RevolutionX ha demostrado su excelencia técnica al conseguir el tiempo más rápido en la categoría Entry de toda la Comunidad de Madrid, estableciendo un nuevo estándar de rendimiento y precisión en el diseño aerodinámico."
};

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "Clasificación Nacional",
    description: "Clasificados para la competición nacional F1 in Schools representando a la Comunidad de Madrid"
  },
  {
    icon: "Target",
    title: "Precisión Técnica",
    description: "Reconocimiento por la precisión en el diseño y manufactura con tolerancias milimétricas"
  },
  {
    icon: "Rocket",
    title: "Innovación en Diseño",
    description: "Diseño optimizado basado en principios aerodinámicos de coches de F1 actuales"
  }
];

export const competitionResults: CompetitionResult[] = [
  { event: "Regional Madrid 2025", position: "1º Puesto", category: "Coche Más Rápido - Entry" },
  { event: "Regional Madrid 2025", position: "Top 1", category: "Clasificación General" },
  { event: "Nacional España 2025", position: "Clasificado", category: "Representación Madrid" }
];