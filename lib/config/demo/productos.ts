/**
 * lib/config/demo/productos.ts
 * ─────────────────────────────────────────────────────────────
 * Catálogo de muestra para el demo público del Motor AYCweb.
 * Sector: Muebles a Medida (genérico, sirve para cualquier rubro).
 *
 * Este mismo archivo (con los productos del cliente real) es lo que
 * se instala en producción. El demo usa datos ficticios pero el motor
 * es idéntico al que opera en MetalMad, OriplastPy, etc.
 */

export interface ProductoDemo {
  id: string;
  nombre: string;
  descripcion: string;
  precioUSD: number;
  categoria: "Living" | "Dormitorio" | "Oficina" | "Cocina" | "Almacenamiento";
  emoji: string;
  plazoEntrega: string;
}

export const CATALOGO_DEMO: ProductoDemo[] = [
  {
    id: "mesa-comedor-6",
    nombre: "Mesa de Comedor 6 Pax",
    descripcion: "Madera maciza con tapa alistonada, patas torneadas. Medida estándar 180×90 cm.",
    precioUSD: 280,
    categoria: "Living",
    emoji: "🍽️",
    plazoEntrega: "15 días hábiles",
  },
  {
    id: "escritorio-gerencial",
    nombre: "Escritorio Gerencial",
    descripcion: "Estructura en melamine 25mm, sobre en MDF lacado. Incluye cajonera lateral.",
    precioUSD: 320,
    categoria: "Oficina",
    emoji: "💼",
    plazoEntrega: "12 días hábiles",
  },
  {
    id: "armario-3p",
    nombre: "Armario 3 Puertas Corredizas",
    descripcion: "Interior con doble barra y cajones. Frente en espejo con perfil de aluminio anodizado.",
    precioUSD: 450,
    categoria: "Dormitorio",
    emoji: "🚪",
    plazoEntrega: "18 días hábiles",
  },
  {
    id: "estanteria-modular",
    nombre: "Estantería Modular (5 módulos)",
    descripcion: "Sistema de estantes flotantes con soporte oculto. Acabado en roble natural.",
    precioUSD: 180,
    categoria: "Almacenamiento",
    emoji: "📚",
    plazoEntrega: "10 días hábiles",
  },
  {
    id: "cama-king",
    nombre: "Cama King Size con Respaldo",
    descripcion: "Estructura en madera sólida, respaldo tapizado en tela bouclé. 200×200 cm.",
    precioUSD: 380,
    categoria: "Dormitorio",
    emoji: "🛏️",
    plazoEntrega: "20 días hábiles",
  },
  {
    id: "cocina-2m",
    nombre: "Cocina Integral 2 metros",
    descripcion: "Módulos altos y bajos en melamina alta presión, mesada en granito nacional.",
    precioUSD: 520,
    categoria: "Cocina",
    emoji: "🍳",
    plazoEntrega: "25 días hábiles",
  },
  {
    id: "biblioteca-medida",
    nombre: "Biblioteca a Medida",
    descripcion: "Piso a techo con escalera corrediza. Madera de pino con terminación satinada.",
    precioUSD: 240,
    categoria: "Almacenamiento",
    emoji: "📖",
    plazoEntrega: "14 días hábiles",
  },
  {
    id: "mesa-centro",
    nombre: "Mesa de Centro con Bandeja",
    descripcion: "Tapa en vidrio templado 10mm, base en acero inoxidable. 120×60 cm.",
    precioUSD: 160,
    categoria: "Living",
    emoji: "🪑",
    plazoEntrega: "8 días hábiles",
  },
];

export const CATEGORIAS_DEMO = [
  "Living",
  "Dormitorio",
  "Oficina",
  "Cocina",
  "Almacenamiento",
] as const;

export type CategoriaDemo = (typeof CATEGORIAS_DEMO)[number];
