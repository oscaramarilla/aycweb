import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface AutoTableFn {
  (options: Record<string, unknown>): void;
  previous: { finalY: number };
}

interface JsPDFWithAutoTable extends jsPDF {
  autoTable: AutoTableFn;
}

interface Empresa {
  nombre: string;
  ruc: string;
  direccion: string;
  telefono: string;
  logo?: string;
}

interface PdfItem {
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

interface GenerarPdfPresupuestoParams {
  empresa: Empresa;
  titulo: string;
  items: PdfItem[];
  total: number;
  notas?: string;
}

const formatCurrency = (value: number) => value.toLocaleString("es-PY", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const loadImageAsDataUrl = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert image to data URL"));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export async function generarPdfPresupuesto(params: GenerarPdfPresupuestoParams) {
  const { empresa, titulo, items, total, notas } = params;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(titulo, 10, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Empresa: ${empresa.nombre}`, 10, 30);

  if (empresa.ruc) {
    doc.text(`RUC: ${empresa.ruc}`, 10, 36);
  }

  if (empresa.direccion) {
    doc.text(`Dirección: ${empresa.direccion}`, 10, 42);
  }

  if (empresa.telefono) {
    doc.text(`Teléfono: ${empresa.telefono}`, 10, 48);
  }

  if (empresa.logo) {
    try {
      const imageDataUrl = await loadImageAsDataUrl(empresa.logo);
      const imageType = empresa.logo.toLowerCase().endsWith(".png") ? "PNG" : "JPEG";
      doc.addImage(imageDataUrl, imageType, 150, 10, 50, 40);
    } catch (error) {
      console.error("Error loading logo image:", error);
    }
  }

  (doc as JsPDFWithAutoTable).autoTable({
    startY: 60,
    head: [["Descripción", "Cantidad", "Precio Unitario", "Subtotal"]],
    body: items.map((item) => [
      item.descripcion,
      item.cantidad,
      formatCurrency(item.precioUnitario),
      formatCurrency(item.subtotal),
    ]),
    theme: "striped",
    headStyles: { fillColor: [20, 20, 20] },
  });

  const finalY = (doc as JsPDFWithAutoTable).autoTable.previous.finalY;
  doc.setFontSize(12);
  doc.text(`Total: Gs. ${formatCurrency(total)}`, 140, finalY + 10);

  if (notas) {
    doc.setFontSize(10);
    doc.text("Notas:", 10, finalY + 22);
    doc.text(notas, 10, finalY + 28, { maxWidth: 180 });
  }

  doc.save("presupuesto.pdf");
}



