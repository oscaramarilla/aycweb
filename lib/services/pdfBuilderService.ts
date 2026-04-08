import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface AutoTableFn {
  (options: Record<string, unknown>): void;
  previous: { finalY: number };
}

interface JsPDFWithAutoTable extends jsPDF {
  autoTable: AutoTableFn;
}

export async function buildAndExportPdf(data: {
  cliente: string;
  productos: { descripcion: string; cantidad: number; precio: number }[];
  imagenUrl?: string;
}) {
  const { cliente, productos, imagenUrl } = data;
  const total = productos.reduce((sum, p) => sum + p.cantidad * p.precio, 0);

  const doc = new jsPDF();

  // Header y Título (adaptado a la nueva estructura)
  doc.setFontSize(18);
  doc.text("Presupuesto de ", 10, 20);
  doc.setFont("helvetica", "bold");
  doc.text(cliente, 60, 20);
  doc.setFont("helvetica", "normal");

  // Imagen del producto
  if (imagenUrl) {
    try {
      const response = await fetch(imagenUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      await new Promise<void>((resolve) => {
        reader.onloadend = () => {
          doc.addImage(reader.result as string, "JPEG", 150, 10, 50, 40);
          resolve();
        };
      });
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  // Información de los items (adaptado a la nueva estructura)
  (doc as JsPDFWithAutoTable).autoTable({
    startY: 60,
    head: [["Descripción", "Cantidad", "Precio Unitario", "Subtotal"]],
    body: productos.map((p) => [
      p.descripcion,
      p.cantidad,
      p.precio.toLocaleString("es-PY"),
      (p.cantidad * p.precio).toLocaleString("es-PY"),
    ]),
    theme: "striped",
    headStyles: { fillColor: [20, 20, 20] },
  });

  // Total
  const finalY = (doc as JsPDFWithAutoTable).autoTable.previous.finalY;
  doc.setFontSize(12);
  doc.text(`Total: Gs. ${total.toLocaleString("es-PY")}`, 140, finalY + 10);

  doc.save("presupuesto.pdf");
}



