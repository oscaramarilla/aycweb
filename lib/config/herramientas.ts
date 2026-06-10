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
    href: "/es/calculadora",
    badge: "Gratis",
  },
];