export interface HerramientaB2B {
  id: string;
  titulo: string;
  descripcion: string;
  href: string;
  badge: string;
  esExterno?: boolean;
}

export const HERRAMIENTAS_B2B: HerramientaB2B[] = [
  {
    id: "calculadora-ineficiencia",
    titulo: "Calculadora de Ineficiencia",
    descripcion:
      "Calcula cuánto dinero pierde tu operación por cotizar en Excel.",
    href: "/es/diagnostico-comercial",
    badge: "Gratis",
  },
  {
    id: "generador-api-whatsapp",
    titulo: "Generador API WhatsApp",
    descripcion:
      "Crea enlaces directos con mensajes pre-cargados para tus campañas.",
    href: "https://wa.link/",
    badge: "Gratis",
    esExterno: true,
  },
  {
    id: "matriz-cotizacion-pdf",
    titulo: "Matriz de Cotización PDF",
    descripcion:
      "Plantilla base para estructurar presupuestos de alta conversión.",
    href: "#",
    badge: "Plantilla",
  },
];