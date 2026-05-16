/**
 * pdfService.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Motor SaaS – Capa de servicio para generación de PDFs.
 * Desacoplado de la UI: ningún componente React debe importar jsPDF directamente.
 *
 * Exporta:
 *  - generarPdfAberturas()  → PDF de cotización de aberturas de aluminio
 *  - generarPdfPresupuesto() → re-exportado desde pdfBuilderService (genérico)
 */

import { jsPDF } from "jspdf";

// ─── Re-exportar el servicio genérico existente ───────────────────────────────
export { generarPdfPresupuesto } from "./pdfBuilderService";

// ─── Tipos del dominio de Aberturas ──────────────────────────────────────────

export type ProductoAbertura =
  | "puerta_2h_incolor"
  | "puerta_4h_incolor"
  | "guia_desplazada_1h"
  | "guia_desplazada_2h";

export interface ClienteAberturas {
  nombre: string;
  contacto: string;
  ruc: string;
  telefono: string;
  ubicacion: string;
  fecha: string;
}

export interface ItemTecnicoAberturas {
  categoria: "Fabricación" | "Premarco" | "Colocación";
  nombre: string;
  codigo?: string;
  formula: string;
  cantidad: number;
  precioUnitario: number;
  total: number;
}

export interface ResultadoCotizacionAberturas {
  productoNombre: string;
  ancho: number;
  alto: number;
  cantidad: number;
  m2: number;
  subtotalFabricacion: number;
  subtotalPremarco: number;
  subtotalColocacion: number;
  costoUnitario: number;
  margenGs: number;
  precioVentaUnitario: number;
  precioVentaRedondeado: number;
  totalGeneral: number;
  items: ItemTecnicoAberturas[];
}

export interface GenerarPdfAberturasParams {
  cliente: ClienteAberturas;
  resultado: ResultadoCotizacionAberturas;
  incluirPremarco: boolean;
  incluirColocacion: boolean;
  mostrarDesglose: boolean;
}

// ─── Helpers internos ─────────────────────────────────────────────────────────

function gs(valor: number): string {
  return Math.round(valor || 0).toLocaleString("es-PY");
}

function money(valor: number): string {
  return `Gs. ${gs(valor)}`;
}

// ─── Función principal de generación de PDF ───────────────────────────────────

/**
 * Genera y descarga el PDF de presupuesto de aberturas de aluminio.
 * Toda la lógica de jsPDF está aquí, fuera de la capa de UI.
 */
export async function generarPdfAberturas(params: GenerarPdfAberturasParams): Promise<void> {
  const { cliente, resultado, incluirPremarco, incluirColocacion, mostrarDesglose } = params;

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  let y = 16;

  const addPageIfNeeded = (neededSpace = 20) => {
    if (y + neededSpace > pageHeight - 18) {
      pdf.addPage();
      y = 16;
    }
  };

  // ── Encabezado ──────────────────────────────────────────────────────────────
  pdf.setFillColor(17, 24, 39);
  pdf.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.text("AYCweb", margin + 6, y + 11);

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.text("Sistema de Cotización para Aberturas", margin + 6, y + 18);
  pdf.text("Asunción, Paraguay - Automatización comercial B2B", margin + 6, y + 23);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("PRESUPUESTO", pageWidth - margin - 6, y + 12, { align: "right" });

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Fecha: ${cliente.fecha}`, pageWidth - margin - 6, y + 20, { align: "right" });

  y += 38;

  // ── Datos del cliente ────────────────────────────────────────────────────────
  pdf.setTextColor(17, 24, 39);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.text("Preparado para:", margin, y);

  y += 6;

  pdf.setDrawColor(229, 231, 235);
  pdf.setFillColor(249, 250, 251);
  pdf.roundedRect(margin, y, contentWidth, 30, 3, 3, "FD");

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Cliente: ${cliente.nombre || "___________________"}`, margin + 5, y + 8);
  pdf.text(`RUC/CI: ${cliente.ruc || "___________________"}`, margin + 105, y + 8);
  pdf.text(`Contacto: ${cliente.contacto || "___________________"}`, margin + 5, y + 17);
  pdf.text(`Telefono: ${cliente.telefono || "___________________"}`, margin + 105, y + 17);
  pdf.text(`Ubicacion/obra: ${cliente.ubicacion || "___________________"}`, margin + 5, y + 26);

  y += 42;

  // ── Detalle del trabajo ──────────────────────────────────────────────────────
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.text("Detalle del trabajo:", margin, y);

  y += 6;

  pdf.setFillColor(255, 255, 255);
  pdf.roundedRect(margin, y, contentWidth, 34, 3, 3, "D");

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Producto: ${resultado.productoNombre}`, margin + 5, y + 8);
  pdf.text(`Cantidad: ${resultado.cantidad}`, margin + 105, y + 8);
  pdf.text(`Medidas: ${resultado.ancho} x ${resultado.alto} cm`, margin + 5, y + 17);
  pdf.text(`Superficie: ${resultado.m2.toFixed(2)} m2`, margin + 105, y + 17);
  pdf.text(`Premarco: ${incluirPremarco ? "Incluido" : "No incluido"}`, margin + 5, y + 26);
  pdf.text(`Colocacion: ${incluirColocacion ? "Incluida" : "No incluida"}`, margin + 105, y + 26);

  y += 46;

  // ── Tabla de subtotales ──────────────────────────────────────────────────────
  pdf.setFillColor(17, 24, 39);
  pdf.rect(margin, y, contentWidth, 9, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("Concepto", margin + 4, y + 6);
  pdf.text("Subtotal", pageWidth - margin - 4, y + 6, { align: "right" });

  y += 9;

  const filas: [string, number][] = [
    ["Fabricacion de abertura", resultado.subtotalFabricacion],
    ["Premarco", resultado.subtotalPremarco],
    ["Vidrio, terminaciones y colocacion", resultado.subtotalColocacion],
  ];

  pdf.setTextColor(17, 24, 39);
  pdf.setFont("helvetica", "normal");

  filas.forEach(([label, value]) => {
    pdf.setDrawColor(229, 231, 235);
    pdf.line(margin, y + 8, pageWidth - margin, y + 8);
    pdf.text(label, margin + 4, y + 6);
    pdf.setFont("helvetica", "bold");
    pdf.text(money(value), pageWidth - margin - 4, y + 6, { align: "right" });
    pdf.setFont("helvetica", "normal");
    y += 9;
  });

  y += 8;

  // ── Totales ──────────────────────────────────────────────────────────────────
  pdf.setFillColor(249, 250, 251);
  pdf.roundedRect(pageWidth - margin - 80, y, 80, 34, 3, 3, "FD");

  pdf.setTextColor(107, 114, 128);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text("Precio unitario", pageWidth - margin - 5, y + 8, { align: "right" });

  pdf.setTextColor(17, 24, 39);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text(money(resultado.precioVentaRedondeado), pageWidth - margin - 5, y + 16, { align: "right" });

  pdf.setTextColor(107, 114, 128);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text("Total general", pageWidth - margin - 5, y + 25, { align: "right" });

  pdf.setTextColor(17, 24, 39);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text(money(resultado.totalGeneral), pageWidth - margin - 5, y + 32, { align: "right" });

  y += 46;

  // ── Desglose técnico (opcional) ──────────────────────────────────────────────
  if (mostrarDesglose) {
    addPageIfNeeded(40);

    pdf.setTextColor(17, 24, 39);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("Desglose tecnico interno", margin, y);

    y += 8;

    pdf.setFillColor(229, 231, 235);
    pdf.rect(margin, y, contentWidth, 8, "F");

    pdf.setFontSize(7);
    pdf.text("Cat.", margin + 2, y + 5);
    pdf.text("Item", margin + 22, y + 5);
    pdf.text("Cant.", margin + 115, y + 5, { align: "right" });
    pdf.text("Unit.", margin + 145, y + 5, { align: "right" });
    pdf.text("Total", pageWidth - margin - 2, y + 5, { align: "right" });

    y += 8;

    resultado.items.forEach((item) => {
      addPageIfNeeded(8);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7);
      pdf.setTextColor(17, 24, 39);

      const itemName = item.nombre.length > 40 ? item.nombre.slice(0, 40) + "..." : item.nombre;

      pdf.text(item.categoria, margin + 2, y + 5);
      pdf.text(itemName, margin + 22, y + 5);
      pdf.text(item.cantidad.toFixed(2), margin + 115, y + 5, { align: "right" });
      pdf.text(gs(item.precioUnitario), margin + 145, y + 5, { align: "right" });

      pdf.setFont("helvetica", "bold");
      pdf.text(gs(item.total), pageWidth - margin - 2, y + 5, { align: "right" });

      pdf.setDrawColor(243, 244, 246);
      pdf.line(margin, y + 7, pageWidth - margin, y + 7);

      y += 8;
    });

    y += 6;
  }

  // ── Condiciones comerciales ──────────────────────────────────────────────────
  addPageIfNeeded(42);

  pdf.setTextColor(17, 24, 39);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.text("Condiciones comerciales", margin, y);

  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(75, 85, 99);

  const condiciones =
    "Forma de pago: 50% de anticipo para confirmacion de orden. Saldo contra entrega o instalacion. " +
    "Precio sujeto a verificacion final de medidas en obra, disponibilidad de materiales y condiciones de instalacion. " +
    "Validez del presupuesto: 7 dias.";

  const condicionesLines = pdf.splitTextToSize(condiciones, contentWidth);
  pdf.text(condicionesLines, margin, y);

  y += condicionesLines.length * 4 + 18;

  // ── Firma ────────────────────────────────────────────────────────────────────
  addPageIfNeeded(25);

  pdf.setDrawColor(156, 163, 175);
  pdf.line(pageWidth / 2 - 35, y, pageWidth / 2 + 35, y);

  y += 5;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.setTextColor(17, 24, 39);
  pdf.text("Dpto. Comercial", pageWidth / 2, y, { align: "center" });

  y += 5;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(107, 114, 128);
  pdf.text("Sistema generado por AYCweb", pageWidth / 2, y, { align: "center" });

  // ── Guardar ──────────────────────────────────────────────────────────────────
  const nombreArchivo = `Presupuesto_Aberturas_${cliente.nombre || "Cliente"}.pdf`
    .replace(/\s+/g, "_")
    .replace(/[^\w.-]/g, "");

  pdf.save(nombreArchivo);
}
