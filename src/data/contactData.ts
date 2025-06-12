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
    title: "",
    value: "",
    description: "",
    action: ""
  },
  {
    icon: "MapPin",
    title: "",
    value: "",
    description: "",
    action: null
  },
  {
    icon: "Clock",
    title: "",
    value: "",
    description: "",
    action: null
  }
];

export const collaborationAreas: CollaborationArea[] = [
  {
    title: "",
    description: "",
    icon: "🔧"
  },
  {
    title: "",
    description: "",
    icon: "💰"
  },
  {
    title: "",
    description: "",
    icon: "👥"
  },
  {
    title: "",
    description: "",
    icon: "🎓"
  }
];

export const whyCollaborate: string[] = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];