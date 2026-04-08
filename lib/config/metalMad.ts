
import { LandingPageConfig } from "@/lib/config/client";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export const MetalMadConfig: LandingPageConfig = {
  hero: {
    title: "Fabricación de Mobiliario Escolar e Institucional de Alta Resistencia y Volumen.",
    subtitle: "Diseño y producción de muebles metálicos para instituciones educativas y corporativas, garantizando durabilidad y funcionalidad.",
    image: "/images/metalmad-hero.webp", // Placeholder, replace with actual image path
    callToAction: {
      text: "Cotizar Mobiliario por Volumen",
      link: "",
    },
  },
  features: [
    {
      title: "Resistencia Estructural Extrema",
      description: "Nuestros muebles están diseñados con estructuras metálicas de alta calidad, garantizando una durabilidad inigualable y resistencia a uso intensivo.",
      icon: "strength", // Placeholder, replace with actual icon
    },
    {
      title: "Componentes Plásticos Inyectados de Máxima Calidad (Oriplast)",
      description: "Utilizamos solo componentes plásticos inyectados de la más alta calidad, provistos por Oriplast, asegurando acabados superiores y una vida útil prolongada.",
      icon: "quality", // Placeholder, replace with actual icon
    },
    {
      title: "Capacidad de Producción para Grandes Volúmenes",
      description: "Estamos equipados para manejar pedidos de gran escala, proveyendo mobiliario para escuelas, universidades y oficinas con eficiencia y rapidez.",
      icon: "production", // Placeholder, replace with actual icon
    },
  ],
  contact: {
    whatsappNumber: AYCWEB_CONTACT.whatsappNumber,
    whatsappMessage: AYCWEB_CONTACT.clientMessages?.metalMad?.b2bClient || "",
  },
  // Add other sections as needed, following the LandingPageConfig structure
};
