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
 * Genera el texto de resumen para WhatsApp.
 */
export function buildResumenWhatsApp(
  resultado: ResultadoCotizacion,
  nombreCliente?: string,
  empresa?: string
): string {
  const fecha = new Date().toLocaleDateString("es-PY");

  const encabezado = [
    `🧾 *COTIZACIÓN – Motor AYCweb*`,
    `📅 Fecha: ${fecha}`,
    nombreCliente ? `👤 Cliente: ${nombreCliente}` : "",
    empresa ? `🏢 Empresa: ${empresa}` : "",
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
    `Subtotal: ${formatearMoneda(resultado.subtotal, resultado.moneda)}`,
    resultado.descuento > 0
      ? `Descuento: -${formatearMoneda(resultado.descuento, resultado.moneda)}`
      : "",
    `IVA (10%): ${formatearMoneda(resultado.iva, resultado.moneda)}`,
    `*TOTAL: ${formatearMoneda(resultado.total, resultado.moneda)}*`,
    "",
    `_Cotización generada con Motor AYCweb · aycweb.com_`,
  ]
    .filter(Boolean)
    .join("\n");

  return `${encabezado}${lineasItems}${totales}`;
}
