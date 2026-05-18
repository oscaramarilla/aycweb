"use client";

import React, { useState, useMemo } from 'react';
import { ShieldCheck, TrendingDown, BookOpen, PenTool, CheckCircle2 } from 'lucide-react';

export default function MobiliarioEscolarFunnel() {
  // Estados para la calculadora
  const [qtyCiclo1, setQtyCiclo1] = useState(0); // 1er Ciclo (CJA-03/04)
  const [qtyCiclo2, setQtyCiclo2] = useState(0); // 2do Ciclo (CJA-04/05)
  const [qtyCiclo3, setQtyCiclo3] = useState(0); // 3er Ciclo y Medio (CJA-05/06)

  // Precios base (Minorista)
  const PRICE_CICLO_1 = 760000;
  const PRICE_CICLO_2 = 790000;
  const PRICE_CICLO_3 = 810000;
  
  // Precio Mayorista (Plana para cualquier tamaño)
  const BULK_PRICE = 530000;
  const BULK_THRESHOLD = 30;

  // Lógica de cálculo automatizada
  const calculations = useMemo(() => {
    const totalQty = qtyCiclo1 + qtyCiclo2 + qtyCiclo3;
    const isBulk = totalQty >= BULK_THRESHOLD;
    
    const standardTotal = (qtyCiclo1 * PRICE_CICLO_1) + (qtyCiclo2 * PRICE_CICLO_2) + (qtyCiclo3 * PRICE_CICLO_3);
    const finalTotal = isBulk ? (totalQty * BULK_PRICE) : standardTotal;
    const savings = standardTotal - finalTotal;
    const unitsToDiscount = isBulk ? 0 : BULK_THRESHOLD - totalQty;

    return { totalQty, isBulk, standardTotal, finalTotal, savings, unitsToDiscount };
  }, [qtyCiclo1, qtyCiclo2, qtyCiclo3]);

  // Generador de enlace a WhatsApp
  const handleWhatsApp = () => {
    const text = `Hola Oscar. Vengo de la web. Quiero equipar mi institución con mobiliario escolar. \n\nCantidades:\n- 1er Ciclo: ${qtyCiclo1}\n- 2do Ciclo: ${qtyCiclo2}\n- 3er Ciclo/Medio: ${qtyCiclo3}\n\nTotal unidades: ${calculations.totalQty}\nCotización estimada: Gs. ${calculations.finalTotal.toLocaleString('es-PY')}`;
    // Reemplaza el número con tu variable de configuración de AYCweb
    window.open(`https://wa.me/595982855219?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HERO SECTION - Autoridad y SEO */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase">
            Oscar Amarilla "AYC" — Ingeniería en Infraestructura
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mobiliario Escolar de Alto Rendimiento para Instituciones Exigentes
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Desde licitaciones gubernamentales hasta los colegios privados de mayor prestigio. Fabricamos conjuntos escolares diseñados para resistir generaciones, cumpliendo los más estrictos estándares de ergonomía y calidad industrial paraguaya.
          </p>
        </div>
      </section>

      {/* CALCULADORA / EMBUDO SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: La Calculadora */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <h2 className="text-2xl font-bold mb-2 text-slate-800">Cotizador Directo de Fábrica</h2>
          <p className="text-slate-500 mb-6 text-sm">Selecciona las cantidades por ciclo para ver tu inversión.</p>

          <div className="space-y-6">
            {/* Input 1er Ciclo */}
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-700">1er Ciclo (Tamaño Pequeño)</h3>
                <p className="text-xs text-slate-500">Precio base: Gs. 760.000 c/u</p>
              </div>
              <input 
                type="number" min="0" 
                className="w-20 p-2 border rounded-md text-center font-bold text-lg"
                value={qtyCiclo1} onChange={(e) => setQtyCiclo1(Number(e.target.value))}
              />
            </div>

            {/* Input 2do Ciclo */}
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-700">2do Ciclo (Tamaño Mediano)</h3>
                <p className="text-xs text-slate-500">Precio base: Gs. 790.000 c/u</p>
              </div>
              <input 
                type="number" min="0" 
                className="w-20 p-2 border rounded-md text-center font-bold text-lg"
                value={qtyCiclo2} onChange={(e) => setQtyCiclo2(Number(e.target.value))}
              />
            </div>

            {/* Input 3er Ciclo */}
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-700">3er Ciclo y Nivel Medio</h3>
                <p className="text-xs text-slate-500">Precio base: Gs. 810.000 c/u</p>
              </div>
              <input 
                type="number" min="0" 
                className="w-20 p-2 border rounded-md text-center font-bold text-lg"
                value={qtyCiclo3} onChange={(e) => setQtyCiclo3(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Upselling Bar (Barra de progreso para el descuento) */}
          <div className="mt-8">
            {!calculations.isBulk && calculations.totalQty > 0 ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg text-sm flex items-start gap-3">
                <TrendingDown className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                  <strong>¡Atención Administrador!</strong> Te faltan solo <strong>{calculations.unitsToDiscount} conjuntos</strong> para alcanzar las 30 unidades. 
                  Llegando a 30, el precio de TODOS los conjuntos baja a <strong>Gs. 530.000 c/u</strong>.
                </p>
              </div>
            ) : calculations.isBulk ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-sm flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
                <p><strong>¡Tarifa Institucional Mayorista Desbloqueada!</strong> Todos tus conjuntos aplican al costo de fábrica de Gs. 530.000.</p>
              </div>
            ) : null}
          </div>

          {/* Totales */}
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-slate-500">Inversión Total Estimada</span>
              <span className="text-3xl font-black text-slate-900">
                Gs. {calculations.finalTotal.toLocaleString('es-PY')}
              </span>
            </div>
            {calculations.savings > 0 && (
              <div className="text-right text-emerald-600 font-medium text-sm">
                Has ahorrado Gs. {calculations.savings.toLocaleString('es-PY')} con la tarifa mayorista.
              </div>
            )}

            <button 
              onClick={handleWhatsApp}
              disabled={calculations.totalQty === 0}
              className="w-full mt-6 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all shadow-lg"
            >
              Cerrar Presupuesto por WhatsApp
            </button>
          </div>
        </div>

        {/* Columna Derecha: Autoridad y Calidad */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">La infraestructura de tu colegio es tu carta de presentación.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Como dueños de colegios, sabemos que el mobiliario sufre. Invertir en conjuntos endebles significa recomprar cada año. En AYC, forjamos acero y adaptamos biometría para que te olvides del recambio.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">2 Años de Garantía Real</h4>
                <p className="text-slate-600 text-sm mt-1">Estructuras reforzadas de industria nacional que soportan el uso intensivo diario. Respondemos nosotros, sin intermediarios.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Adaptación Antropométrica</h4>
                <p className="text-slate-600 text-sm mt-1">Sillas y mesas diseñadas según la altura de cada ciclo educativo, previniendo problemas posturales en los alumnos.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-emerald-100 p-3 rounded-lg text-emerald-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Manual de Calidad Corporativa</h4>
                <p className="text-slate-600 text-sm mt-1">Toda compra institucional incluye nuestro Manual de Uso y Distribución, garantizando el cumplimiento de normas de inclusión (Mesas Accesibles MA-02).</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
