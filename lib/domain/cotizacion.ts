/**
 * lib/domain/cotizacion.ts
 * ─────────────────────────────────────────────────────────────
 * Motor genérico de cotización – Motor AYCweb SaaS.
 *
 * Esta lógica es la misma que corre en producción para clientes reales.
 * El demo público usa este mismo módulo con el catálogo de muestra.
 *
 * Sin dependencias externas. Pura lógica de negocio testeable.
 */

// ─── Tipos públicos ───────────────────────────────────────────────────────────

export interface ItemCotizacion {
  productoId: string;
  nombre: string;
  cantidad: number;
  precioUnitario: number; // En la moneda definida por el contexto
  subtotal: number;
}

export interface ResultadoCotizacion {
  items: ItemCotizacion[];
  subtotal: number;
  descuento: number;
  subtotalConDescuento: number;
  iva: number;           // 10% IVA Paraguay por defecto
  total: number;
  cantidadTotal: number; // Suma de todas las unidades
  moneda: "USD" | "PYG";
}

export interface ConfigCotizacion {
  tasaIVA?: number;       // Default: 0.10 (10%)
  tasaDescuento?: number; // Default: 0
  moneda?: "USD" | "PYG";
}

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Calcula el resultado completo de una cotización dado un array de items.
 *
 * @param items - Lista de productos con cantidad y precio unitario
 * @param config - Parámetros opcionales: IVA, descuento, moneda
 * @returns ResultadoCotizacion con todos los subtotales
 */
export function calcularCotizacion(
  items: Omit<ItemCotizacion, "subtotal">[],
  config: ConfigCotizacion = {}
): ResultadoCotizacion {
  const { tasaIVA = 0.10, tasaDescuento = 0, moneda = "USD" } = config;

  // Calcular subtotales por item
  const itemsConSubtotal: ItemCotizacion[] = items.map((item) => ({
    ...item,
    subtotal: item.cantidad * item.precioUnitario,
  }));

  // Totales
  const subtotal = itemsConSubtotal.reduce((acc, item) => acc + item.subtotal, 0);
  const descuento = subtotal * tasaDescuento;
  const subtotalConDescuento = subtotal - descuento;
  const iva = subtotalConDescuento * tasaIVA;
  const total = subtotalConDescuento + iva;
  const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0);

  return {
    items: itemsConSubtotal,
    subtotal,
    descuento,
    subtotalConDescuento,
    iva,
    total,
    cantidadTotal,
    moneda,
  };
}

// ─── Formatters ───────────────────────────────────────────────────────────────

/**
 * Formatea un número como moneda según el contexto de la cotización.
 */
export function formatearMoneda(
  valor: number,
  moneda: "USD" | "PYG" = "USD"
): string {
  if (moneda === "USD") {
    return `USD ${valor.toLocaleString("es-PY", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  }
  return `Gs. ${Math.round(valor).toLocaleString("es-PY")}`;
}

/**
 * Genera el texto de resumen para WhatsApp, en el idioma indicado.
 */
export function buildResumenWhatsApp(
  resultado: ResultadoCotizacion,
  nombreCliente?: string,
  empresa?: string,
  lang: string = "es"
): string {
  const locale = lang === "pt-br" ? "pt-BR" : lang === "en" ? "en-US" : "es-PY";
  const fecha = new Date().toLocaleDateString(locale);

  const LABELS: Record<string, { title: string; date: string; client: string; company: string; subtotal: string; discount: string; tax: string; total: string; footer: string }> = {
    es: {
      title: "🧾 *COTIZACIÓN – Motor AYCweb*",
      date: "📅 Fecha",
      client: "👤 Cliente",
      company: "🏢 Empresa",
      subtotal: "Subtotal",
      discount: "Descuento",
      tax: "IVA (10%)",
      total: "TOTAL",
      footer: "_Cotización generada con Motor AYCweb · aycweb.com_",
    },
    en: {
      title: "🧾 *QUOTATION – Motor AYCweb*",
      date: "📅 Date",
      client: "👤 Client",
      company: "🏢 Company",
      subtotal: "Subtotal",
      discount: "Discount",
      tax: "VAT (10%)",
      total: "TOTAL",
      footer: "_Quote generated with Motor AYCweb · aycweb.com_",
    },
    'pt-br': {
      title: "🧾 *COTAÇÃO – Motor AYCweb*",
      date: "📅 Data",
      client: "👤 Cliente",
      company: "🏢 Empresa",
      subtotal: "Subtotal",
      discount: "Desconto",
      tax: "IVA (10%)",
      total: "TOTAL",
      footer: "_Cotação gerada com Motor AYCweb · aycweb.com_",
    },
  };

  const localeKey = lang === "pt-br" ? "pt-br" : lang === "en" ? "en" : "es";
  const labels = LABELS[localeKey];

  const encabezado = [
    labels.title,
    `${labels.date}: ${fecha}`,
    nombreCliente ? `${labels.client}: ${nombreCliente}` : "",
    empresa ? `${labels.company}: ${empresa}` : "",
    "",
  ]
    .filter(Boolean)
    .join("\n");

  const lineasItems = resultado.items
    .map(
      (item) =>
        `• ${item.nombre} × ${item.cantidad} → ${formatearMoneda(item.subtotal, resultado.moneda)}`
    )
    .join("\n");

  const totales = [
    "",
    `${labels.subtotal}: ${formatearMoneda(resultado.subtotal, resultado.moneda)}`,
    resultado.descuento > 0
      ? `${labels.discount}: -${formatearMoneda(resultado.descuento, resultado.moneda)}`
      : "",
    `${labels.tax}: ${formatearMoneda(resultado.iva, resultado.moneda)}`,
    `*${labels.total}: ${formatearMoneda(resultado.total, resultado.moneda)}*`,
    "",
    labels.footer,
  ]
    .filter(Boolean)
    .join("\n");

  return `${encabezado}${lineasItems}${totales}`;
}