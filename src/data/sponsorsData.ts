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
    name: "Ayuntamiento de Majadahonda",
    logo: "/Logo Ayuntamiento de Majadahonda.jpeg",
    category: "Administración Pública",
    description: "Apoyando al talento joven del municipio"
  },
  {
    name: "Pañalón",
    logo: "/Logo_Panalon.png",
    category: "Empresa Local",
    description: "Compromiso con el desarrollo de jóvenes talentos"
  },
  {
    name: "Black and White",
    logo: "/Logo Black&White_logo.jpeg",
    category: "Impresión y Merchandising",
    description: "Empresa de impresión sobre camisetas, merchandising y productos personalizados"
  },
  {
    name: "Lorena Solutions",
    logo: "/Logo Lorena Solutions.png",
    category: "Soluciones Empresariales",
    description: "Compañía que ofrece soluciones a empresas"
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
    name: "El Postrecito de Isabel",
    logo: "/Logo El Postrecito de Isabel.jpeg",
    category: "Dulces y Postres",
    description: "Elaboración de dulces y postres irresistibles"
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
