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
    title: "",
    description: "",
    metrics: ""
  },
  {
    icon: "Users",
    title: "",
    description: "",
    metrics: ""
  },
  {
    icon: "Rocket",
    title: "",
    description: "",
    metrics: ""
  },
  {
    icon: "Globe",
    title: "",
    description: "",
    metrics: ""
  }
];

export const marketingChannels: MarketingChannel[] = [
  { channel: "", reach: "", engagement: "" },
  { channel: "", reach: "", engagement: "" },
  { channel: "", reach: "", engagement: "" },
  { channel: "", reach: "", engagement: "" }
];

export const brandBenefits: string[] = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

export const impactMetrics = [
  { icon: "Eye", number: "", label: "" },
  { icon: "Award", number: "", label: "" },
  { icon: "BarChart", number: "", label: "" },
  { icon: "Globe", number: "", label: "" }
];