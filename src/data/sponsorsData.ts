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
    name: "Universidad Europea",
    logo: "/Universidad-europea-logo.png",
    category: "Educación Superior",
    description: "Apoyo en formación técnica y desarrollo profesional"
  },
  {
    name: "Perfumería Palárabe",
    logo: "/perfumeria_palarabe.png",
    category: "Comercio Local",
    description: "Patrocinador local comprometido con la educación"
  },
  {
    name: "Ayuntamiento de Majadahonda",
    logo: "/Ayuntamiento_de_Majadahonda.png",
    category: "Administración Pública",
    description: "Apoyo institucional y promoción del talento local"
  },
  {
    name: "Pañalón",
    logo: "/Logo_Panalon.png",
    category: "Empresa Local",
    description: "Compromiso con el desarrollo de jóvenes talentos"
  },
  {
    name: "Guitarras Elvira",
    logo: "/Logo_Elvira2.png",
    category: "Artesanía Musical",
    description: "Apoyo a la creatividad y la innovación juvenil"
  },
  {
    name: "Titanes Atletismo",
    logo: "/Logo_Titanes2.png",
    category: "Deporte",
    description: "Promoción de valores deportivos y trabajo en equipo"
  },
  {
    name: "Moñita",
    logo: "/Logo_Monita.png",
    category: "Ingeniería y Arquitectura Textil",
    description: "Diseño, fabricación e instalación de carpas, estructuras textiles y arquitectura textil con materiales certificados"
  },
  {
    name: "F1 Bearings",
    logo: "/logo-f1bearings.png",
    category: "Fabricación de Rodamientos",
    description: "Rodamientos de alta calidad para equipos de STEM Racing"
  }
];

export const sponsorshipLevels: SponsorshipLevel[] = [
  {
    title: "Patrocinador Principal",
    benefits: ["Logo prominente en el vehículo", "Presencia en todos los materiales", "Networking exclusivo"],
    color: "from-rx-gold/20 to-rx-gold/10"
  },
  {
    title: "Patrocinador Oficial",
    benefits: ["Logo en materiales promocionales", "Mención en redes sociales", "Certificado de colaboración"],
    color: "from-gray-600/20 to-gray-600/10"
  },
  {
    title: "Colaborador",
    benefits: ["Reconocimiento público", "Acceso a eventos", "Impacto social positivo"],
    color: "from-amber-600/20 to-amber-600/10"
  }
];

export const sponsorStats = [
  { icon: "Users", number: "8", label: "Patrocinadores Activos" },
  { icon: "Building", number: "8", label: "Sectores Representados" },
  { icon: "Heart", number: "100%", label: "Compromiso Local" },
  { icon: "Handshake", number: "2025", label: "Año de Colaboración" }
];
