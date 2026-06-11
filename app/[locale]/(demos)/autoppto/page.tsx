"use client";
import { useState } from "react";
import { generarPdfPresupuesto } from "@/lib/services/pdfBuilderService";

export default function CotizadorPage() {
  const [cliente, setCliente] = useState("");
  const [imagenUrl, setImagenUrl] = useState("https://metalmadeas.com/productos/pupitre.jpg");
  
  const [productos, setProductos] = useState([
    { descripcion: "Pack Digital Express o Pack Automatizacion Empresarial o PRO  ", cantidad: 2, precio: 550000 }
  ]);

  const agregarFila = () => {
    setProductos([...productos, { descripcion: "", cantidad: 1, precio: 0 }]);
  };

  const quitarFila = (index: number) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  };

  const actualizarProducto = (index: number, campo: string, valor: string | number) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index] = { ...nuevosProductos[index], [campo]: valor };
    setProductos(nuevosProductos);
  };

  const handleGenerarPDF = async (e: React.FormEvent) => {
    e.preventDefault();

    const items = productos.map((producto) => ({
      descripcion: producto.descripcion,
      cantidad: producto.cantidad,
      precioUnitario: producto.precio,
      subtotal: producto.cantidad * producto.precio,
    }));

    const total = items.reduce((sum, item) => sum + item.subtotal, 0);

    await generarPdfPresupuesto({
      empresa: {
        nombre: cliente,
        ruc: "",
        direccion: "",
        telefono: "",
        logo: imagenUrl,
      },
      titulo: `Presupuesto de ${cliente}`,
      items,
      total,
    });
  };

  return (
    <main className="min-h-screen bg-zinc-50 p-6 flex flex-col items-center justify-center font-sans py-12">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl border border-zinc-200">
        <div className="text-center mb-8">
          <span className="bg-blue-100 text-blue-800 font-black tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-4 inline-block">
            Motor V3.0 PRO
          </span>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight mb-2">Cotizador Automatico Cliente</h1>
          <p className="text-sm text-zinc-500">Generador de PDF Presupuesto B2B</p>
        </div>
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 flex items-center justify-center">
            {imagenUrl ? (
              <img src={imagenUrl} alt="Vista previa" className="object-cover w-full h-full" crossOrigin="anonymous" />
            ) : (
              <span className="text-zinc-400 text-xs text-center p-2">Sin imagen</span>
            )}
          </div>
        </div>
        <form onSubmit={handleGenerarPDF} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-zinc-600 uppercase mb-1">Cliente / Institución</label>
            <input 
              type="text" 
              value={cliente} 
              onChange={(e) => setCliente(e.target.value)}
              className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none text-black" 
              required
            />
          </div>
          <div className="space-y-4">
            <label className="block text-xs font-bold text-zinc-600 uppercase border-b pb-2">Lista de Productos</label>
            {productos.map((producto, index) => (
              <div key={index} className="flex gap-3 items-start bg-zinc-50 p-4 rounded-xl border border-zinc-200 relative group transition-all hover:border-blue-300">
                <div className="flex-grow space-y-3">
                  <input 
                    type="text" 
                    placeholder="Descripción (Ej. Pupitre modelo escolar)"
                    value={producto.descripcion}
                    onChange={(e) => actualizarProducto(index, "descripcion", e.target.value)}
                    className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-black"
                    required
                  />
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      placeholder="Cant."
                      value={producto.cantidad}
                      onChange={(e) => actualizarProducto(index, "cantidad", Number(e.target.value))}
                      className="w-24 border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-black"
                      required
                    />
                    <input 
                      type="number" 
                      placeholder="Precio Unitario"
                      value={producto.precio}
                      onChange={(e) => actualizarProducto(index, "precio", Number(e.target.value))}
                      className="flex-grow border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-black"
                      required
                    />
                  </div>
                </div>
                {productos.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => quitarFila(index)}
                    className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-lg font-bold text-sm transition-colors h-full mt-1"
                    title="Eliminar producto"
                  >
                    X
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              onClick={agregarFila}
              className="w-full border-2 border-dashed border-zinc-300 text-zinc-600 font-bold py-3 rounded-xl hover:bg-zinc-100 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              + Agregar otro producto
            </button>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-600 uppercase mb-1 mt-4">URL de la Foto (Opcional)</label>
            <input 
              type="text" 
              value={imagenUrl} 
              onChange={(e) => setImagenUrl(e.target.value)}
              className="w-full border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-zinc-700"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg mt-6">
            📄 Generar Presupuesto Oficial
          </button>
        </form>
      </div>
    </main>
  );
}