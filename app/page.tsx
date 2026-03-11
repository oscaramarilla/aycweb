"use client";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("Mesa personalizada modelo AyC 2026");
  const [precio, setPrecio] = useState("550000");
  const [cantidad, setCantidad] = useState("2");

  const handleGenerarPDF = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí pondremos la magia para crear el PDF real
    alert(`¡Listo! Simulando PDF para el cliente: ${cliente} por un total de Gs. ${Number(precio) * Number(cantidad)}`);
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
