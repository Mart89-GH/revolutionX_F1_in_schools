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

export interface Recognition {
  title: string;
  description: string;
}

export const mainAchievement = {
  title: "",
  category: "",
  event: "",
  description: ""
};

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "",
    description: ""
  },
  {
    icon: "Target",
    title: "",
    description: ""
  },
  {
    icon: "Rocket",
    title: "",
    description: ""
  }
];

export const competitionResults: CompetitionResult[] = [
  { event: "", position: "", category: "" },
  { event: "", position: "", category: "" },
  { event: "", position: "", category: "" }
];

export const recognitions: Recognition[] = [
  { title: "", description: "" },
  { title: "", description: "" }
];