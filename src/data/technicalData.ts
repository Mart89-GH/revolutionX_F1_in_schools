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
    title: "",
    description: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Zap",
    title: "",
    description: "",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Wind",
    title: "",
    description: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: "Activity",
    title: "",
    description: "",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=1920"
  }
];

export const specifications: Specification[] = [
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" }
];

export const developmentPhases: DevelopmentPhase[] = [
  { step: "01", title: "", description: "" },
  { step: "02", title: "", description: "" },
  { step: "03", title: "", description: "" },
  { step: "04", title: "", description: "" }
];