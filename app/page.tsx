"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Home() {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("Mesa personalizada modelo AyC 2026");
  const [precio, setPrecio] = useState("550000");
  const [cantidad, setCantidad] = useState("2");
  
  // 🔗 AHORA USAMOS LA URL COMPLETA DE TU WEB PRINCIPAL
  const [imagenUrl, setImagenUrl] = useState("https://metalmadeas.com/productos/pupitre.jpg");

  const handleGenerarPDF = async (e: React.FormEvent) => {
    e.preventDefault();

    const doc = new jsPDF();
    const fecha = new Date().toLocaleDateString("es-PY");

    // ==========================================
    // 🎨 FORMATO CORPORATIVO DEL PDF (HEADER)
    // ==========================================
    doc.setFontSize(28);
    doc.setTextColor(30, 58, 138); 
    doc.setFont("helvetica", "bold");
    doc.text("PRESUPUESTO", 14, 25);

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("METAL MAD E.A.S.", 140, 20);
    doc.text("RUC: 80123456-7", 140, 25);
    doc.text("Lambaré, Paraguay", 140, 30);
    doc.text("WhatsApp: +595 982 451828", 140, 35);

    doc.setDrawColor(200, 200, 200);
    doc.line(14, 42, 196, 42);

    // ==========================================
    // 👤 DATOS DEL CLIENTE
    // ==========================================
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text("Facturar a:", 14, 55);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Cliente / Institución: ${cliente}`, 14, 63);
    doc.text(`Fecha de Emisión: ${fecha}`, 14, 70);

    const precioNum = Number(precio);
    const cantNum = Number(cantidad);
    const total = precioNum * cantNum;

    // ==========================================
    // 📊 TABLA DE PRODUCTOS
    // ==========================================
    autoTable(doc, {
      startY: 85,
      head: [["Descripción del Producto", "Cant.", "Precio Unit. (Gs)", "Subtotal (Gs)"]],
      body: [
        [
          producto, 
          cantidad, 
          precioNum.toLocaleString("es-PY"), 
          total.toLocaleString("es-PY")
        ],
      ],
      theme: "striped",
      headStyles: { fillColor: [30, 58, 138], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 10, cellPadding: 6 },
      columnStyles: {
        0: { cellWidth: 80 }, 
        1: { halign: 'center' },
        2: { halign: 'right' },
        3: { halign: 'right', fontStyle: 'bold' },
      }
    });

    const finalY = (doc as any).lastAutoTable.finalY || 120;

    // ==========================================
    // 🖼️ INYECTAR IMAGEN CON PASE VIP (CORS)
    // ==========================================
    try {
      const img = new window.Image();
      // ¡EL PASE VIP PARA QUE EL NAVEGADOR NO BLOQUEE LA FOTO!
      img.crossOrigin = "Anonymous"; 
      img.src = imagenUrl;
      
      await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
      });
      
      doc.addImage(img, 'JPEG', 14, finalY + 15, 60, 45);
    } catch(error) {
      console.warn("No se pudo cargar la imagen en el PDF por seguridad del navegador.");
    }

    // Dibujar el TOTAL
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 58, 138);
    doc.text(`Total a Pagar: Gs. ${total.toLocaleString("es-PY")}`, 110, finalY + 30);

    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.setFont("helvetica", "normal");
    doc.text("Garantía: 3 años contra defectos de fabricación.", 14, 275);
    doc.text("Este presupuesto tiene validez por 15 días desde su emisión.", 14, 280);

    doc.save(`Presupuesto_${cliente.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <main className="min-h-screen bg-zinc-50 p-6 flex flex-col items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg border border-zinc-200">
        
        <div className="text-center mb-8">
          <span className="bg-blue-100 text-blue-800 font-black tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-4 inline-block">
            Motor V2.1
          </span>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight mb-2">MM Cotizador</h1>
          <p className="text-sm text-zinc-500">Generador de PDF con formato institucional</p>
        </div>

        {/* Vista previa de la foto en la web */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 flex items-center justify-center">
            {/* Fallback visual si la URL está vacía */}
            {imagenUrl ? (
              <img src={imagenUrl} alt="Vista previa" className="object-cover w-full h-full" crossOrigin="anonymous" />
            ) : (
              <span className="text-zinc-400 text-xs">Sin imagen</span>
            )}
          </div>
        </div>

        <form onSubmit={handleGenerarPDF} className="space-y-5">
          
          <div>
            <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">Cliente / Institución</label>
            <input 
              type="text" value={cliente} onChange={(e) => setCliente(e.target.value)}
              placeholder="Ej. Colegio San José"
              className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">Producto</label>
            <input 
              type="text" value={producto} onChange={(e) => setProducto(e.target.value)}
              className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">Cant.</label>
              <input 
                type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)}
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" required
              />
            </div>
            <div className="w-2/3">
              <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">Precio Unitario (Gs.)</label>
              <input 
                type="number" value={precio} onChange={(e) => setPrecio(e.target.value)}
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">URL de la Foto (Opcional)</label>
            <input 
              type="text" value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)}
              className="w-full border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-zinc-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-4 rounded-xl mt-6 transition-all shadow-lg hover:scale-[1.02]"
          >
            Descargar Presupuesto Oficial
          </button>
        </form>
      </div>
    </main>
  );
}
