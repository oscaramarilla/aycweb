import { StaticImageData } from "next/image";

export type CallToAction = {
  text: string;
  link: string;
};

export type HeroSection = {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
  callToAction: CallToAction;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string; // Consider using a more specific type if you have a set of known icons
};

export type LandingPageConfig = {
  contact?: {
    whatsappNumber: string;
  };
  hero: HeroSection;
  features?: FeatureItem[];
  benefits?: string[]; // Assuming benefits are just strings for now
  seo?: {
    title: string;
    description: string;
    keywords: string;
    author: string;
  };
  // Add other sections as needed
};

export const ModularesKingspanConfig: LandingPageConfig = {
  contact: {
    whatsappNumber: "+595985864209", // Ejemplo de número de WhatsApp
  },
  hero: {
    title: "Oficinas Modulares Kingspan: Aislamiento térmico superior y montaje en 48hs.",
    subtitle: "Innovación y eficiencia para tu proyecto",
    image: "/images/modulares-kingspan-hero.webp",
    callToAction: {
      text: "¡Cotiza tu proyecto ahora!",
      link: "",
    },
  },
  features: [
    {
      title: "Aislamiento térmico superior",
      description: "Los paneles Kingspan ofrecen un rendimiento térmico excepcional, reduciendo los costos de energía.",
      icon: "thermal_insulation", // Placeholder
    },
    {
      title: "Rapidez de instalación",
      description: "Construcción modular que permite un montaje rápido y eficiente, minimizando los tiempos de obra.",
      icon: "speed", // Placeholder
    },
    {
      title: "Diseño adaptable",
      description: "Flexibilidad en el diseño para adaptarse a cualquier necesidad arquitectónica y funcional.",
      icon: "design", // Placeholder
    },
    {
      title: "Sostenibilidad y ahorro energético",
      description: "Soluciones que contribuyen a la sostenibilidad, con materiales reciclables y alta eficiencia energética.",
      icon: "sustainability", // Placeholder
    },
  ],
  seo: {
    title: "Modulares Kingspan - Paneles Aislantes y Construcción Modular",
    description: "Descubre las soluciones de construcción modular con paneles Kingspan. Aislamiento térmico, rapidez y eficiencia para tu proyecto.",
    keywords: "Kingspan, modulares, paneles aislantes, construcción modular, eficiencia energética, aislamiento térmico",
    author: "AYCweb",
  },
};
