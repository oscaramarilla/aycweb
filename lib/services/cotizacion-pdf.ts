/**
 * lib/services/cotizacion-pdf.ts
 * ─────────────────────────────────────────────────────────────
 * Generador de PDF de cotización / contrato corporativo – AYCweb.
 *
 * Usa jspdf + jspdf-autotable (ya presentes en el proyecto) por ser la
 * opción más liviana y compatible con server-side (Node runtime), evitando
 * dependencias pesadas como @react-pdf/renderer.
 *
 * El diseño es limpio, elegante y profesional: banda de marca, datos del
 * cliente, desglose de costos, cronograma de hitos, tiempos de entrega y
 * cláusulas legales estándar.
 */

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { LEGAL_INFO } from "@/lib/config/legal";
import { formatearMoneda } from "@/lib/domain/cotizacion";
import type { CotizacionB2B } from "@/lib/domain/cotizador-b2b";

// ─── Paleta corporativa ───────────────────────────────────────────────────────
const COLORS = {
  brand: [16, 185, 129] as [number, number, number], // emerald-500
  ink: [15, 23, 42] as [number, number, number], // slate-900
  muted: [100, 116, 139] as [number, number, number], // slate-500
  line: [226, 232, 240] as [number, number, number], // slate-200
  zebra: [241, 245, 249] as [number, number, number], // slate-100
};

const MARGIN = 16; // mm

// jspdf-autotable inyecta `lastAutoTable` en la instancia de jsPDF en runtime.
// Accedemos a finalY de forma segura sin depender de la augmentación de tipos.
function getFinalY(doc: jsPDF): number | undefined {
  return (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
    ?.finalY;
}


// ─── Cláusulas legales estándar ───────────────────────────────────────────────
const CLAUSULAS_LEGALES: { titulo: string; texto: string }[] = [
  {
    titulo: "1. Validez de la oferta",
    texto:
      "Los valores y condiciones de esta cotización tienen una vigencia limitada según la validez indicada. Pasado dicho plazo, los precios quedan sujetos a revisión.",
  },
  {
    titulo: "2. Modalidad de pago",
    texto:
      "El setup se liquida por hitos (20% anticipo, 20% definición, 30% implementación, 30% pruebas) o en modalidad de pago único. El mantenimiento mensual se abona los días 15 de cada mes.",
  },
  {
    titulo: "3. Alcance y revisiones",
    texto:
      "El desarrollo incluye un (1) Sprint de Ajustes antes de la entrega final. Todo requerimiento fuera del alcance acordado será cotizado como horas de desarrollo adicionales.",
  },
  {
    titulo: "4. Propiedad y confidencialidad",
    texto:
      "La base de datos y métricas generadas son propiedad exclusiva del Cliente. El motor lógico y los algoritmos son propiedad intelectual de AYCweb, con licencia de uso mientras el servicio se mantenga activo.",
  },
  {
    titulo: "5. Impuestos",
    texto:
      "Los montos incluyen el IVA (10%) conforme a la legislación tributaria vigente en la República del Paraguay.",
  },
];

// ─── Helpers de fecha ─────────────────────────────────────────────────────────
function formatearFecha(iso: string): string {
  return new Date(iso).toLocaleDateString("es-PY", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatearFechaValidez(iso: string, dias: number): string {
  const f = new Date(iso);
  f.setDate(f.getDate() + dias);
  return f.toLocaleDateString("es-PY", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// ─── Generador principal ──────────────────────────────────────────────────────

/**
 * Genera el PDF de la cotización y lo devuelve como Buffer (Node) listo para
 * descargar o adjuntar en n8n / WhatsApp.
 */
export function generarPdfCotizacion(cot: CotizacionB2B): Buffer {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const moneda = cot.resultado.moneda;

  // ── Banda de marca superior ──────────────────────────────────────────────
  doc.setFillColor(...COLORS.ink);
  doc.rect(0, 0, pageWidth, 30, "F");
  doc.setFillColor(...COLORS.brand);
  doc.rect(0, 30, pageWidth, 1.4, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("AYCweb", MARGIN, 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(180, 190, 200);
  doc.text("Infraestructura digital B2B · Sistemas a medida", MARGIN, 22);

  // Bloque de identificación (derecha)
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("COTIZACIÓN", pageWidth - MARGIN, 13, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(180, 190, 200);
  doc.text(`N.º ${cot.numero}`, pageWidth - MARGIN, 19, { align: "right" });
  doc.text(`Emitida: ${formatearFecha(cot.fechaISO)}`, pageWidth - MARGIN, 24, {
    align: "right",
  });

  let y = 42;

  // ── Datos emisor / cliente ─────────────────────────────────────────────────
  const colW = (pageWidth - MARGIN * 2 - 6) / 2;

  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.muted);
  doc.text("EMITIDO POR", MARGIN, y);
  doc.text("FACTURAR A", MARGIN + colW + 6, y);

  y += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.ink);
  doc.text(LEGAL_INFO.razonSocial, MARGIN, y);
  doc.text(cot.lead.empresa || "—", MARGIN + colW + 6, y);

  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);

  const emisorLineas = [
    `RUC: ${LEGAL_INFO.ruc}`,
    LEGAL_INFO.direccion,
    `Titular: ${LEGAL_INFO.titular}`,
  ];
  const clienteLineas = [
    cot.lead.ruc ? `RUC: ${cot.lead.ruc}` : "RUC: ____________",
    `Contacto: ${cot.lead.nombre || "—"}`,
    `WhatsApp: ${cot.lead.whatsapp || "—"}`,
    cot.lead.email ? `Email: ${cot.lead.email}` : "",
  ].filter(Boolean);

  const maxLineas = Math.max(emisorLineas.length, clienteLineas.length);
  for (let i = 0; i < maxLineas; i++) {
    if (emisorLineas[i]) doc.text(emisorLineas[i], MARGIN, y);
    if (clienteLineas[i]) doc.text(clienteLineas[i], MARGIN + colW + 6, y);
    y += 4.2;
  }

  y += 2;
  doc.setDrawColor(...COLORS.line);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, pageWidth - MARGIN, y);
  y += 6;

  // ── Resumen de plan ────────────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.ink);
  doc.text(`Propuesta: ${cot.plan.nombre}`, MARGIN, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);
  doc.text(
    `Validez hasta: ${formatearFechaValidez(cot.fechaISO, cot.validezDias)}  ·  Tiempo de entrega: ${cot.tiempoEntrega}`,
    MARGIN,
    y + 4.5
  );
  y += 11;

  // ── Tabla de desglose de costos ─────────────────────────────────────────────
  const bodyItems = cot.resultado.items.map((it) => [
    it.nombre,
    String(it.cantidad),
    formatearMoneda(it.precioUnitario, moneda),
    formatearMoneda(it.subtotal, moneda),
  ]);

  autoTable(doc, {
    startY: y,
    head: [["Descripción", "Cant.", "Precio unit.", "Subtotal"]],
    body: bodyItems,
    margin: { left: MARGIN, right: MARGIN },
    styles: {
      font: "helvetica",
      fontSize: 9,
      cellPadding: 3,
      textColor: COLORS.ink,
      lineColor: COLORS.line,
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: COLORS.ink,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "left",
    },
    alternateRowStyles: { fillColor: COLORS.zebra },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: 18, halign: "center" },
      2: { cellWidth: 32, halign: "right" },
      3: { cellWidth: 32, halign: "right" },
    },
  });

  y = (getFinalY(doc) ?? y) + 6;

  // ── Bloque de totales (alineado a la derecha) ───────────────────────────────
  const totalesX = pageWidth - MARGIN - 70;
  const valorX = pageWidth - MARGIN;
  const r = cot.resultado;

  const filasTotales: { label: string; valor: string; resaltar?: boolean }[] = [
    { label: "Subtotal", valor: formatearMoneda(r.subtotal, moneda) },
  ];
  if (r.descuento > 0) {
    filasTotales.push({
      label: `Descuento (${Math.round(cot.tasaDescuentoTotal * 100)}%)`,
      valor: `- ${formatearMoneda(r.descuento, moneda)}`,
    });
    filasTotales.push({
      label: "Subtotal con descuento",
      valor: formatearMoneda(r.subtotalConDescuento, moneda),
    });
  }
  filasTotales.push({ label: "IVA (10%)", valor: formatearMoneda(r.iva, moneda) });

  doc.setFontSize(9);
  for (const fila of filasTotales) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.muted);
    doc.text(fila.label, totalesX, y);
    doc.setTextColor(...COLORS.ink);
    doc.text(fila.valor, valorX, y, { align: "right" });
    y += 5.5;
  }

  // Total destacado
  y += 1;
  doc.setFillColor(...COLORS.brand);
  doc.rect(totalesX - 4, y - 4.5, valorX - totalesX + 4, 8.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.ink);
  doc.text("TOTAL", totalesX, y);
  doc.text(formatearMoneda(r.total, moneda), valorX, y, { align: "right" });
  y += 12;

  if (cot.tasaDescuentoVolumen > 0) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.muted);
    doc.text(`Beneficio aplicado: ${cot.labelDescuentoVolumen}.`, MARGIN, y);
    y += 6;
  }

  // ── Cronograma de hitos (20/20/30/30) ───────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.ink);
  doc.text("Cronograma de pagos del setup (por hitos)", MARGIN, y);
  y += 3;

  autoTable(doc, {
    startY: y,
    head: [["Etapa", "%", "Monto"]],
    body: cot.cronogramaHitos.map((h) => [
      h.etapa,
      `${h.porcentaje}%`,
      formatearMoneda(h.monto, moneda),
    ]),
    margin: { left: MARGIN, right: MARGIN },
    styles: {
      font: "helvetica",
      fontSize: 9,
      cellPadding: 2.5,
      textColor: COLORS.ink,
      lineColor: COLORS.line,
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: COLORS.muted,
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: 24, halign: "center" },
      2: { cellWidth: 36, halign: "right" },
    },
  });

  y = (getFinalY(doc) ?? y) + 8;

  // ── Cláusulas legales (con salto de página si es necesario) ──────────────────
  const pageHeight = doc.internal.pageSize.getHeight();
  if (y > pageHeight - 70) {
    doc.addPage();
    y = 20;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.ink);
  doc.text("Términos y condiciones", MARGIN, y);
  y += 5;

  doc.setFontSize(8);
  for (const cl of CLAUSULAS_LEGALES) {
    if (y > pageHeight - 40) {
      doc.addPage();
      y = 20;
    }
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.ink);
    doc.text(cl.titulo, MARGIN, y);
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.muted);
    const lineas = doc.splitTextToSize(cl.texto, pageWidth - MARGIN * 2);
    doc.text(lineas, MARGIN, y);
    y += lineas.length * 3.8 + 3;
  }

  // ── Firmas ───────────────────────────────────────────────────────────────────
  if (y > pageHeight - 40) {
    doc.addPage();
    y = 30;
  } else {
    y += 6;
  }

  const firmaW = (pageWidth - MARGIN * 2 - 20) / 2;
  doc.setDrawColor(...COLORS.ink);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, MARGIN + firmaW, y);
  doc.line(pageWidth - MARGIN - firmaW, y, pageWidth - MARGIN, y);
  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.ink);
  doc.text("Por AYCweb", MARGIN, y);
  doc.text("Por El Cliente", pageWidth - MARGIN - firmaW, y);
  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.muted);
  doc.text(`${LEGAL_INFO.titular} · RUC ${LEGAL_INFO.ruc}`, MARGIN, y);
  doc.text(cot.lead.empresa || "Nombre / RUC", pageWidth - MARGIN - firmaW, y);

  // ── Pie en todas las páginas ──────────────────────────────────────────────────
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(...COLORS.line);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, pageHeight - 12, pageWidth - MARGIN, pageHeight - 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.muted);
    doc.text(
      `${LEGAL_INFO.razonSocial} · RUC ${LEGAL_INFO.ruc} · aycweb.com`,
      MARGIN,
      pageHeight - 7
    );
    doc.text(`Página ${p} de ${totalPages}`, pageWidth - MARGIN, pageHeight - 7, {
      align: "right",
    });
  }

  const arrayBuffer = doc.output("arraybuffer");
  return Buffer.from(arrayBuffer);
}

/**
 * Devuelve un nombre de archivo seguro para la cotización.
 */
export function nombreArchivoCotizacion(cot: CotizacionB2B): string {
  const empresa = (cot.lead.empresa || "cliente")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 40);
  return `cotizacion-${cot.numero}-${empresa || "cliente"}.pdf`;
}
