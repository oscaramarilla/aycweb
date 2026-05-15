"use client"
import React, { useState } from 'react';

export default function InvestorArbitrageDashboard() {
  // Datos macro (Idealmente inyectados desde el servidor)
  const [macroData] = useState({
    btcPrice: 80473,
    hashprice: 36.53,
    industrialTariff: 0.055, // Tarifa ANDE
    globalAvgTariff: 0.12, 
  });

  // Input del inversor/cliente
  const [investmentKwh, setInvestmentKwh] = useState(13000); // 10x el consumo base

  // Cálculos de valor
  const costInParaguay = investmentKwh * macroData.industrialTariff;
  const costGlobal = investmentKwh * macroData.globalAvgTariff;
  const savings = costGlobal - costInParaguay;

  return (
    <div className="bg-stone-950 p-8 rounded-xl border border-amber-500/20 font-mono text-stone-100 max-w-4xl mx-auto mt-10">
      <div className="mb-8 border-b border-stone-800 pb-4">
        <h2 className="text-2xl text-amber-400 mb-2">Arbitraje Estructural: Ventaja PY</h2>
        <p className="text-sm text-stone-400">Demostración en tiempo real del diferencial de costo energético operativo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Panel de Inversión */}
        <div className="bg-stone-900/50 p-6 border border-stone-800 rounded-lg">
          <label className="block text-xs text-stone-500 uppercase tracking-widest mb-3">
            Volumen de Energía (kWh/mes)
          </label>
          <input 
            type="number" 
            value={investmentKwh}
            onChange={(e) => setInvestmentKwh(Number(e.target.value))}
            className="w-full bg-stone-950 border border-stone-700 p-3 text-lg focus:border-amber-500 outline-none transition-colors"
          />
        </div>

        {/* Panel de Resultados */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-stone-900/30 border border-stone-800 rounded-lg">
            <span className="text-sm text-stone-400">Costo Promedio Global</span>
            <span className="text-lg text-rose-400">${costGlobal.toLocaleString('en-US')}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-stone-900/30 border border-stone-800 rounded-lg">
            <span className="text-sm text-stone-400">Costo Operativo AYC (ANDE)</span>
            <span className="text-lg text-emerald-400">${costInParaguay.toLocaleString('en-US')}</span>
          </div>
        </div>
      </div>

      {/* El Cierre Comercial */}
      <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-lg text-center">
        <h3 className="text-sm text-amber-400 uppercase tracking-widest mb-2">Valor Generado (Arbitraje Mensual)</h3>
        <p className="text-4xl font-bold text-amber-300 mb-4">${savings.toLocaleString('en-US')}</p>
        <p className="text-sm text-stone-300 mb-6">
          Este diferencial nos permite aplicar un <span className="font-bold text-white">35% de descuento real</span> en cotizaciones corporativas pagadas con cripto.
        </p>
        <button className="bg-amber-500 text-stone-950 px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
          Aplicar Descuento a mi Proyecto
        </button>
      </div>
    </div>
  );
}
