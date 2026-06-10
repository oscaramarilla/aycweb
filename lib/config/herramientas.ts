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
      "Calculá cuánto dinero pierde tu operación por cotizar en Excel.",
    href: "/es/calculadora",
    badge: "Gratis",
  },
  {
    id: "generador-flujo-comercial",
    titulo: "Generador de Flujo Comercial",
    descripcion:
      "Respondé 5 preguntas y obtené un mapa visual de cómo debería fluir tu operación ideal, paso a paso.",
    href: "https://wa.me/595971122859?text=Quiero%20generar%20mi%20flujo%20comercial%20ideal",
    badge: "Interactivo",
    esExterno: true,
  },
  {
    id: "checklist-sistematizacion",
    titulo: "Checklist de Sistematización",
    descripcion:
      "Descargá la lista de verificación para saber si tu operación está lista para un sistema digital o todavía necesita orden interno.",
    href: "/docs/Matriz-Cotizacion.pdf",
    badge: "PDF",
    esExterno: false,
  },
];
