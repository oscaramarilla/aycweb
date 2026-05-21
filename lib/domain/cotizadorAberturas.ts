import type {
  ProductoAbertura,
  ItemTecnicoAberturas,
  ResultadoCotizacionAberturas,
} from "@/lib/services/pdfService";

// Re-exportamos el tipo para que los consumidores puedan importarlo desde aquí
export type { ProductoAbertura };

// ---------------------------------------------------------------------------
// Catálogo de productos
// ---------------------------------------------------------------------------

export type ProductoKey = ProductoAbertura;

export interface ProductoInfo {
  nombre: string;
  nombreCorto: string;
  anchoDefault: number;
  altoDefault: number;
  descripcion: string;
}

export const PRODUCTOS: Record<ProductoKey, ProductoInfo> = {
  puerta_2h_incolor: {
    nombre: "Puerta corrediza 2 hojas incolor",
    nombreCorto: "Puerta 2 hojas",
    anchoDefault: 170,
    altoDefault: 210,
    descripcion: "Sistema corredizo de aluminio con vidrio incolor.",
  },
  puerta_4h_incolor: {
    nombre: "Puerta corrediza 4 hojas incolor",
    nombreCorto: "Puerta 4 hojas",
    anchoDefault: 400,
    altoDefault: 210,
    descripcion: "Sistema corredizo de mayor apertura con vidrio incolor.",
  },
  guia_desplazada_1h: {
    nombre: "Puerta guía desplazada 1 hoja",
    nombreCorto: "Guía 1 hoja",
    anchoDefault: 100,
    altoDefault: 210,
    descripcion: "Sistema de puerta con guía desplazada de una hoja.",
  },
  guia_desplazada_2h: {
    nombre: "Puerta guía desplazada 2 hojas",
    nombreCorto: "Guía 2 hojas",
    anchoDefault: 200,
    altoDefault: 210,
    descripcion: "Sistema de puerta con guía desplazada de dos hojas.",
  },
};

// ---------------------------------------------------------------------------
// Tabla de precios unitarios (Gs.)
// ---------------------------------------------------------------------------

export const PRECIOS = {
  marcoLateral: 176000,
  hojaSuperiorInferior: 168000,
  zocaloInferior: 368000,
  hojaLateralSinTubo: 165000,
  engancheInterno: 155000,
  engancheExterno: 145000,
  guiaSuperior: 261000,
  contraVidrioHorizontal: 55000,
  contraVidrioVertical: 47000,
  hojaLateralConTubo: 290000,
  complemento: 72000,
  cerradura: 75000,
  dreno: 5000,
  deslizante: 3000,
  rueditas: 15000,
  tornillo: 500,
  manoObraFabricacion: 30000,
  premarco: 70000,
  conector: 2000,
  patitaChumbador: 1000,
  escuadra: 7500,
  tubo50x50: 300000,
  vidrioIncolor8mm: 235000,
  ferreteria: 20000,
  silicona: 35000,
  contraMarco: 70000,
  penil: 1000,
  terminacionPiso: 70000,
  manoObraColocacion: 100000,
} as const;

// ---------------------------------------------------------------------------
// Parámetros de entrada para calcularCotizacion
// ---------------------------------------------------------------------------

export interface ParamsCotizacion {
  producto: ProductoKey;
  ancho: number;
  alto: number;
  cantidad: number;
  margenPorcentaje: number;
  redondeo: number;
  incluirPremarco: boolean;
  incluirColocacion: boolean;
  descuentoGs: number;
  adicionalGs: number;
}

// ---------------------------------------------------------------------------
// Helpers internos
// ---------------------------------------------------------------------------

function calcularM2(ancho: number, alto: number): number {
  return (ancho * alto) / 10000;
}

function redondear(valor: number, salto: number): number {
  if (!salto || salto <= 0) return Math.round(valor);
  return Math.ceil(valor / salto) * salto;
}

function agregarItem(
  items: ItemTecnicoAberturas[],
  categoria: ItemTecnicoAberturas["categoria"],
  nombre: string,
  codigo: string | undefined,
  formula: string,
  cantidad: number,
  precioUnitario: number
): number {
  const total = cantidad * precioUnitario;
  items.push({ categoria, nombre, codigo, formula, cantidad, precioUnitario, total });
  return total;
}

// ---------------------------------------------------------------------------
// Función principal de cálculo
// ---------------------------------------------------------------------------

export function calcularCotizacion(params: ParamsCotizacion): ResultadoCotizacionAberturas {
  const {
    producto,
    ancho,
    alto,
    cantidad,
    margenPorcentaje,
    redondeo,
    incluirPremarco,
    incluirColocacion,
    descuentoGs,
    adicionalGs,
  } = params;

  const productoData = PRODUCTOS[producto];
  const items: ItemTecnicoAberturas[] = [];
  const m2 = calcularM2(ancho, alto);

  let subtotalFabricacion = 0;
  let subtotalPremarco = 0;
  let subtotalColocacion = 0;

  // ── Fabricación ──────────────────────────────────────────────────────────

  if (producto === "puerta_2h_incolor") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Marco lateral", "IN003", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.marcoLateral);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto / 550", alto / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche externo sin tubo", "IN008", "alto / 550", alto / 550, PRECIOS.engancheExterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho / 550", ancho / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 4 / 550", (alto * 4) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "2 unidades", 2, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Dreno", "NYL452", "3 unidades", 3, PRECIOS.dreno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "8 unidades", 8, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tornillos", undefined, "16 unidades", 16, PRECIOS.tornillo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "1 unidad", 1, PRECIOS.manoObraFabricacion);
  }

  if (producto === "puerta_4h_incolor") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Marco lateral", "IN003", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.marcoLateral);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral sin tubo", "IN006", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralSinTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche externo sin tubo", "IN008", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheExterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho / 550", ancho / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 8 / 550", (alto * 8) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Dreno", "NYL452", "4 unidades", 4, PRECIOS.dreno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "16 unidades", 16, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tornillos", undefined, "24 unidades", 24, PRECIOS.tornillo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "2 unidades", 2, PRECIOS.manoObraFabricacion);
  }

  if (producto === "guia_desplazada_1h") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto / 550", alto / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto / 550", alto / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "4 unidades", 4, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "2 unidades", 2, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tubo 50 x 50", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.tubo50x50);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "1 unidad", 1, PRECIOS.manoObraFabricacion);
  }

  if (producto === "guia_desplazada_2h") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 4 / 550", (alto * 4) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "8 unidades", 8, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tubo 50 x 50", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.tubo50x50);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "2 unidades", 2, PRECIOS.manoObraFabricacion);
  }

  // ── Premarco ─────────────────────────────────────────────────────────────

  if (incluirPremarco && (producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor")) {
    subtotalPremarco += agregarItem(items, "Premarco", "Premarco de aluminio", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.premarco);
    subtotalPremarco += agregarItem(items, "Premarco", "Conector", undefined, "2 unidades", 2, PRECIOS.conector);
    subtotalPremarco += agregarItem(
      items,
      "Premarco",
      "Patita chumbador",
      undefined,
      producto === "puerta_4h_incolor" ? "16 unidades" : "8 unidades",
      producto === "puerta_4h_incolor" ? 16 : 8,
      PRECIOS.patitaChumbador
    );
    subtotalPremarco += agregarItem(items, "Premarco", "Escuadra", undefined, "2 unidades", 2, PRECIOS.escuadra);
  }

  // ── Colocación ───────────────────────────────────────────────────────────

  if (incluirColocacion) {
    const factorVidrio = producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor" ? 0.8 : 1;

    subtotalColocacion += agregarItem(
      items,
      "Colocación",
      "Vidrio incolor 8mm",
      undefined,
      factorVidrio === 0.8 ? "m² × 80%" : "m²",
      m2 * factorVidrio,
      PRECIOS.vidrioIncolor8mm
    );
    subtotalColocacion += agregarItem(items, "Colocación", "Ferretería", undefined, "1 unidad", 1, PRECIOS.ferreteria);
    subtotalColocacion += agregarItem(items, "Colocación", "Silicona", undefined, "m² / 1.6", m2 / 1.6, PRECIOS.silicona);

    if (producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor") {
      subtotalColocacion += agregarItem(items, "Colocación", "Contramarco", undefined, "(ancho + alto + alto) / 550", (ancho + alto + alto) / 550, PRECIOS.contraMarco);
      subtotalColocacion += agregarItem(
        items,
        "Colocación",
        "Penil",
        undefined,
        producto === "puerta_4h_incolor" ? "15 unidades" : "10 unidades",
        producto === "puerta_4h_incolor" ? 15 : 10,
        PRECIOS.penil
      );
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación de piso", undefined, "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m²", m2, PRECIOS.manoObraColocacion);
    } else {
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación lateral", undefined, "ancho × 4 / 550", (ancho * 4) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m² × 2", m2 * 2, PRECIOS.manoObraColocacion);
    }
  }

  // ── Totales ───────────────────────────────────────────────────────────────

  const costoUnitario = Math.max(0, subtotalFabricacion + subtotalPremarco + subtotalColocacion + adicionalGs - descuentoGs);
  const margenGs = costoUnitario * (margenPorcentaje / 100);
  const precioVentaUnitario = costoUnitario + margenGs;
  const precioVentaRedondeado = redondear(precioVentaUnitario, redondeo);
  const totalGeneral = precioVentaRedondeado * cantidad;

  return {
    productoNombre: productoData.nombre,
    ancho,
    alto,
    cantidad,
    m2,
    subtotalFabricacion,
    subtotalPremarco,
    subtotalColocacion,
    costoUnitario,
    margenGs,
    precioVentaUnitario,
    precioVentaRedondeado,
    totalGeneral,
    items,
  } satisfies ResultadoCotizacionAberturas;
}

// ---------------------------------------------------------------------------
// Helpers de formato (reutilizables desde la UI)
// ---------------------------------------------------------------------------

export function gs(valor: number): string {
  return Math.round(valor || 0).toLocaleString("es-PY");
}

export function moneda(valor: number): string {
  return `Gs. ${gs(valor)}`;
}
