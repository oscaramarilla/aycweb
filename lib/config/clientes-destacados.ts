// ─── CAPA CONFIG: Clientes destacados para prueba social ──────────────────────
// Fuente única de verdad para la franja de prueba social (FranjaClientes).
// La UI en components/social/FranjaClientes.tsx consume este array.
// Los urlObra apuntan a los anchors de /es/obras.

export type PaletteColor = "blue" | "emerald" | "amber" | "violet" | "teal";

export interface ClienteDestacado {
  /** Nombre comercial o profesional */
  nombre: string;
  /** Sector / industria del cliente */
  sector: string;
  /** Ruta al logo en /public. Si ausente, se usa iniciales en círculo */
  logoPath?: string;
  /** Logro medible, corto, para mostrar debajo del nombre */
  resultadoCorto: string;
  /** URL a la sub-página de obra. Ej.: /es/obras#oriplast-mobiliario-escolar */
  urlObra: string;
  /** Color de la paleta para el círculo de iniciales */
  paletteColor: PaletteColor;
  /** Dos o tres letras para el avatar de fallback (cuando no hay logo) */
  iniciales: string;
}

export const CLIENTES_DESTACADOS: ClienteDestacado[] = [
  {
    nombre: "MetalMadeas",
    sector: "Estructuras metálicas y cabinas PIR",
    resultadoCorto: "Presupuestos técnicos en 3 min con PDF",
    urlObra: "/es/obras#metal-mad-modular-k",
    paletteColor: "amber",
    iniciales: "MM",
  },
  {
    nombre: "Oriplast",
    sector: "Mobiliario Escolar B2B",
    resultadoCorto: "Cotizaciones de 2 h a 3 min",
    urlObra: "/es/obras#oriplast-mobiliario-escolar",
    paletteColor: "blue",
    iniciales: "OP",
  },
  {
    nombre: "Dra. Bianca Amarilla",
    sector: "Odontología",
    resultadoCorto: "Agenda ordenada y pacientes precalificados",
    urlObra: "/es/obras#dra-bianca-odontologia",
    paletteColor: "emerald",
    iniciales: "BA",
  },
  {
    nombre: "Dr. Nicolás Ángel Silvero",
    sector: "Medicina especializada",
    resultadoCorto: "Agendamiento sin llamadas, más conversiones",
    urlObra: "/es/obras#dr-nicolas-silvero-medicina",
    paletteColor: "violet",
    iniciales: "NS",
  },
  {
    nombre: "Dr. José Lahaye",
    sector: "Salud especializada",
    resultadoCorto: "Captación digital sin depender de derivaciones",
    urlObra: "/es/obras#dr-jose-lahaye-salud",
    paletteColor: "teal",
    iniciales: "JL",
  },
];
