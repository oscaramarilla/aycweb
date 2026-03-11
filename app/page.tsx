"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Home() {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("Mesa personalizada modelo AyC 2026");
  const [precio, setPrecio] = useState("550000");
  const [cantidad, setCantidad] = useState("2");

  const handleGenerarPDF = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Crear el documento en blanco
    const doc = new jsPDF();
    const fecha = new Date().toLocaleDateString("es-PY");

    // 2. Título y Datos del Cliente
    doc.setFontSize(22);
    doc.setTextColor(30, 58, 138); // Azul oscuro corporativo
    doc.text("Presupuesto Oficial", 14, 20);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Fecha: ${fecha}`, 14, 30);
    doc.setTextColor(0, 0, 0);
    doc.text(`Cliente: ${cliente}`, 14, 40);

    // 3. Cálculos
    const precioNum = Number(precio);
    const cantNum = Number(cantidad);
    const total = precioNum * cantNum;

    // 4. Crear la tabla de productos
    autoTable(doc, {
      startY: 50,
      head: [["Descripción del Producto", "Cantidad", "Precio Unit. (Gs)", "Total (Gs)"]],
      body: [
        [
          producto, 
          cantidad, 
          precioNum.toLocaleString("es-PY"), 
          total.toLocaleString("es-PY")
        ],
      ],
      theme: "striped",
      headStyles: { fillColor: [37, 99, 235] }, // Azul brillante
    });

    // 5. Mostrar el Gran Total abajo
    const finalY = (doc as any).lastAutoTable.finalY || 70;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total a Pagar: Gs. ${total.toLocaleString("es-PY")}`, 14, finalY + 15);

    // 6. Descargar el archivo automáticamente
    doc.save(`Presupuesto_${cliente.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-blue-900 tracking-tight">AYC<span className="text-orange-500">web</span></h1>
          <p className="text-sm text-gray-500">Generador Rápido de Presupuestos</p>
        </div>

        <form onSubmit={handleGenerarPDF} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre del Cliente / Empresa</label>
            <input 
              type="text" 
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Ej. SIT PARAGUAY SA"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Producto</label>
            <input 
              type="text" 
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Cant.</label>
              <input 
                type="number" 
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div className="w-2/3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Precio Unitario (Gs.)</label>
              <input 
                type="number" 
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-4 transition-colors shadow-md"
          >
            Generar Presupuesto PDF
          </button>
        </form>
      </div>
    </main>
  );
}
