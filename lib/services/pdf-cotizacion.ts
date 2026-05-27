/**
 * lib/services/pdf-cotizacion.ts
 * ─────────────────────────────────────────────────────────────
 * Servicio de generación de PDF para cotizaciones – Motor AYCweb.
 *
 * Usa jsPDF (ya instalado). Sin dependencias de React.
 * El mismo servicio que corre en los clientes reales.
 *
 * Branding: AYCweb dark mode profesional.
 */

import { jsPDF } from "jspdf";
import type { ResultadoCotizacion } from "@/lib/domain/cotizacion";
import { formatearMoneda } from "@/lib/domain/cotizacion";

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface DatosClienteCotizacion {
  nombre: string;
  empresa?: string;
  telefono?: string;
  email?: string;
  notas?: string;
}

export interface GenerarPdfCotizacionParams {
  titulo?: string;          // Título del presupuesto (e.g., "Muebles a Medida")
  cliente: DatosClienteCotizacion;
  resultado: ResultadoCotizacion;
  validezDias?: number;     // Default: 7
  condiciones?: string;     // Condiciones comerciales custom
  nombreArchivo?: string;   // Default: "Cotizacion_AYCweb.pdf"
}

// ─── Helpers internos ─────────────────────────────────────────────────────────

/** Formatea número con separador de miles en es-PY */
const fmt = (n: number, moneda: "USD" | "PYG"): string =>
  formatearMoneda(n, moneda);

// Colores corporativos AYCweb
const COLORS = {
  dark:    [17, 24, 39]  as [number, number, number],
  blue:    [37, 99, 235] as [number, number, number],
  white:   [255, 255, 255] as [number, number, number],
  gray50:  [249, 250, 251] as [number, number, number],
  gray200: [229, 231, 235] as [number, number, number],
  gray400: [156, 163, 175] as [number, number, number],
  gray500: [107, 114, 128] as [number, number, number],
  emerald: [16, 185, 129]  as [number, number, number],
};

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Genera y descarga un PDF de cotización profesional con branding AYCweb.
 */
export async function generarPdfCotizacion(
  params: GenerarPdfCotizacionParams
): Promise<void> {
  const {
    titulo = "Cotización de Productos",
    cliente,
    resultado,
    validezDias = 7,
    condiciones,
    nombreArchivo = "Cotizacion_AYCweb.pdf",
  } = params;

  const pdf = new jsPDF("p", "mm", "a4");
  const PW = pdf.internal.pageSize.getWidth();   // 210 mm
  const PH = pdf.internal.pageSize.getHeight();  // 297 mm
  const M = 14;    // margen
  const CW = PW - M * 2; // content width = 182 mm

  let y = 16;

  /** Añade nueva página si no alcanza el espacio */
  const guard = (needed = 20) => {
    if (y + needed > PH - 18) {
      pdf.addPage();
      y = 16;
    }
  };

  // ── 1. ENCABEZADO (header oscuro AYCweb) ─────────────────────────────────
  pdf.setFillColor(...COLORS.dark);
  pdf.roundedRect(M, y, CW, 32, 3, 3, "F");

  // Logo text "AYCweb"
  pdf.setTextColor(...COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.text("AYCweb", M + 6, y + 13);

  // Tagline
  pdf.setFontSize(8);
  pdf.setFont("helvetica", "normal");
  pdf.text("Motor de Cotización Inteligente", M + 6, y + 20);
  pdf.text("aycweb.com · Asunción, Paraguay", M + 6, y + 26);

  // PRESUPUESTO label (derecha)
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("PRESUPUESTO", PW - M - 6, y + 12, { align: "right" });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  const fecha = new Date().toLocaleDateString("es-PY");
  pdf.text(`Fecha: ${fecha}`, PW - M - 6, y + 20, { align: "right" });
  pdf.text(`Validez: ${validezDias} días`, PW - M - 6, y + 26, { align: "right" });

  y += 44;

  // ── 2. DATOS DEL CLIENTE ─────────────────────────────────────────────────
  pdf.setTextColor(...COLORS.dark);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.text("Preparado para:", M, y);

  y += 6;

  pdf.setDrawColor(...COLORS.gray200);
  pdf.setFillColor(...COLORS.gray50);
  pdf.roundedRect(M, y, CW, 28, 3, 3, "FD");

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(...COLORS.dark);

  const clientRows: [string, string][] = [
    ["Cliente:", cliente.nombre || "—"],
    ["Empresa:", cliente.empresa || "—"],
    ["Teléfono:", cliente.telefono || "—"],
    ["Email:", cliente.email || "—"],
  ];

  clientRows.forEach(([label, value], i) => {
    const col = i % 2 === 0 ? M + 5 : M + CW / 2 + 5;
    const row = y + 8 + Math.floor(i / 2) * 10;
    pdf.setFont("helvetica", "bold");
    pdf.text(label, col, row);
    pdf.setFont("helvetica", "normal");
    pdf.text(value, col + 24, row);
  });

  y += 40;

  // ── 3. TÍTULO DEL PRESUPUESTO ────────────────────────────────────────────
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.setTextColor(...COLORS.dark);
  pdf.text(titulo, M, y);
  y += 10;

  // ── 4. TABLA DE ITEMS ────────────────────────────────────────────────────

  // Header de tabla
  pdf.setFillColor(...COLORS.dark);
  pdf.rect(M, y, CW, 8, "F");
  pdf.setTextColor(...COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);

  const colDesc = M + 4;
  const colCant = M + CW * 0.6;
  const colUnit = M + CW * 0.75;
  const colTotal = PW - M - 4;

  pdf.text("Descripción", colDesc, y + 5.5);
  pdf.text("Cant.", colCant, y + 5.5, { align: "center" });
  pdf.text("Precio Unit.", colUnit, y + 5.5, { align: "right" });
  pdf.text("Subtotal", colTotal, y + 5.5, { align: "right" });

  y += 8;

  // Filas de items
  resultado.items.forEach((item, idx) => {
    guard(10);

    // Fondo alternado
    if (idx % 2 === 0) {
      pdf.setFillColor(248, 250, 252);
      pdf.rect(M, y, CW, 9, "F");
    }

    pdf.setDrawColor(...COLORS.gray200);
    pdf.line(M, y + 9, PW - M, y + 9);

    pdf.setTextColor(...COLORS.dark);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);

    // Truncar nombre si es muy largo
    const nombreTruncado =
      item.nombre.length > 46 ? item.nombre.slice(0, 46) + "…" : item.nombre;

    pdf.text(nombreTruncado, colDesc, y + 6);
    pdf.text(String(item.cantidad), colCant, y + 6, { align: "center" });
    pdf.text(fmt(item.precioUnitario, resultado.moneda), colUnit, y + 6, { align: "right" });

    pdf.setFont("helvetica", "bold");
    pdf.text(fmt(item.subtotal, resultado.moneda), colTotal, y + 6, { align: "right" });

    y += 9;
  });

  y += 6;

  // ── 5. TOTALES ───────────────────────────────────────────────────────────
  guard(50);

  const totalBoxW = 80;
  const totalBoxX = PW - M - totalBoxW;

  pdf.setDrawColor(...COLORS.gray200);
  pdf.setFillColor(...COLORS.gray50);
  pdf.roundedRect(totalBoxX, y, totalBoxW, 42, 3, 3, "FD");

  // Subtotal
  pdf.setTextColor(...COLORS.gray500);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.text("Subtotal:", totalBoxX + 5, y + 9);
  pdf.setTextColor(...COLORS.dark);
  pdf.setFont("helvetica", "bold");
  pdf.text(fmt(resultado.subtotal, resultado.moneda), PW - M - 4, y + 9, { align: "right" });

  // Descuento (si hay)
  if (resultado.descuento > 0) {
    pdf.setTextColor(...COLORS.gray500);
    pdf.setFont("helvetica", "normal");
    pdf.text("Descuento:", totalBoxX + 5, y + 18);
    pdf.setTextColor(220, 38, 38);
    pdf.setFont("helvetica", "bold");
    pdf.text(`-${fmt(resultado.descuento, resultado.moneda)}`, PW - M - 4, y + 18, { align: "right" });
  }

  // IVA
  pdf.setTextColor(...COLORS.gray500);
  pdf.setFont("helvetica", "normal");
  pdf.text("IVA (10%):", totalBoxX + 5, y + 27);
  pdf.setTextColor(...COLORS.dark);
  pdf.setFont("helvetica", "bold");
  pdf.text(fmt(resultado.iva, resultado.moneda), PW - M - 4, y + 27, { align: "right" });

  // Separador
  pdf.setDrawColor(...COLORS.gray200);
  pdf.line(totalBoxX + 4, y + 31, PW - M - 4, y + 31);

  // TOTAL
  pdf.setFillColor(...COLORS.blue);
  pdf.roundedRect(totalBoxX + 2, y + 33, totalBoxW - 4, 7, 2, 2, "F");
  pdf.setTextColor(...COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("TOTAL:", totalBoxX + 6, y + 38);
  pdf.setFontSize(10);
  pdf.text(fmt(resultado.total, resultado.moneda), PW - M - 5, y + 38, { align: "right" });

  y += 56;

  // Notas del cliente
  if (cliente.notas) {
    guard(24);
    pdf.setTextColor(...COLORS.dark);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.text("Notas:", M, y);
    y += 6;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(...COLORS.gray500);
    const notasLines = pdf.splitTextToSize(cliente.notas, CW);
    pdf.text(notasLines, M, y);
    y += notasLines.length * 4 + 10;
  }

  // ── 6. CONDICIONES COMERCIALES ───────────────────────────────────────────
  guard(30);

  pdf.setTextColor(...COLORS.dark);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("Condiciones Comerciales", M, y);

  y += 6;

  const condTexto =
    condiciones ||
    "Forma de pago: 50% de anticipo para inicio de fabricación. Saldo contra entrega. " +
    `Presupuesto válido por ${validezDias} días desde la fecha de emisión. ` +
    "Precios sujetos a variación de materiales. " +
    "Flete e instalación según alcance acordado.";

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.5);
  pdf.setTextColor(...COLORS.gray500);
  const condLines = pdf.splitTextToSize(condTexto, CW);
  pdf.text(condLines, M, y);

  y += condLines.length * 3.8 + 14;

  // ── 7. FIRMA Y PIE DE PÁGINA ─────────────────────────────────────────────
  guard(22);

  pdf.setDrawColor(...COLORS.gray400);
  pdf.line(PW / 2 - 30, y, PW / 2 + 30, y);
  y += 5;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.setTextColor(...COLORS.dark);
  pdf.text("Dpto. Comercial", PW / 2, y, { align: "center" });
  y += 4;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.setTextColor(...COLORS.gray500);
  pdf.text("Documento generado automáticamente por Motor AYCweb · aycweb.com", PW / 2, y, {
    align: "center",
  });
  y += 3;
  pdf.text(
    "🔒 Este motor de cotización está disponible para tu empresa desde USD 50/mes",
    PW / 2,
    y,
    { align: "center" }
  );

  // ── 8. GUARDAR ───────────────────────────────────────────────────────────
  const archivo = nombreArchivo
    .replace(/\s+/g, "_")
    .replace(/[^\w.-]/g, "");

  pdf.save(archivo);
}
