export interface Sponsor {
  name: string;
  logo: string;
  category: string;
  description: string;
  website?: string;
}

export interface SponsorshipLevel {
  title: string;
  benefits: string[];
  color: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  },
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  },
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  },
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  },
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  },
  {
    name: "",
    logo: "",
    category: "",
    description: ""
  }
];

export const sponsorshipLevels: SponsorshipLevel[] = [
  {
    title: "",
    benefits: ["", "", ""],
    color: "from-rx-gold/20 to-rx-gold/10"
  },
  {
    title: "",
    benefits: ["", "", ""],
    color: "from-gray-600/20 to-gray-600/10"
  },
  {
    title: "",
    benefits: ["", "", ""],
    color: "from-amber-600/20 to-amber-600/10"
  }
];

export const sponsorStats = [
  { icon: "Users", number: "", label: "" },
  { icon: "Building", number: "", label: "" },
  { icon: "Heart", number: "", label: "" },
  { icon: "Handshake", number: "", label: "" }
];