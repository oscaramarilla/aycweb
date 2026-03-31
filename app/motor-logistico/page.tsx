"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// --- CONSTANTES Y ESTADÍSTICAS LATAM ---
const TIPO_CAMBIO_PYG = 7700; // Tasa de cambio referencial Gs/USD
const FUEL_PRICE_USD = 1.25;  // Promedio LATAM proyectado al 2030 + 10% margen seguridad

// Formatters
const fmtUsd = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
const fmtPyg = (n: number) => new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(n * TIPO_CAMBIO_PYG);

export default function MotorLogisticoLanding() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Probé el Motor Logístico Internacional en su web y quiero implementarlo en mi empresa de transporte. ¿Agendamos una auditoría?");

  // --- ESTADOS DEL MOTOR ---
  const [distancia, setDistancia] = useState<number | "">("");
  const [rendimiento, setRendimiento] = useState<number>(4.5); // km/L (Camión pesado promedio)
  const [choferDia, setChoferDia] = useState<number>(40); // USD por día
  const [mantKm, setMantKm] = useState<number>(0.15); // USD por km (Desgaste, aceite, cubiertas)
  const [peajeUsd, setPeajeUsd] = useState<number>(3); // USD por caseta
  const [kmPorPeaje, setKmPorPeaje] = useState<number>(100); // 1 peaje cada X km
  const [margen, setMargen] = useState<number>(30); // % Ganancia

  // --- RESULTADOS ---
  const [resultados, setResultados] = useState({
    litros: 0,
    costoCombustible: 0,
    dias: 0,
    costoChofer: 0,
    numPeajes: 0,
    costoPeajes: 0,
    costoMant: 0,
    totalOperativo: 0,
    precioVenta: 0,
    ganancia: 0
  });

  // --- MOTOR DE CÁLCULO EN VIVO ---
  useEffect(() => {
    const dist = typeof distancia === "number" ? distancia : 0;
    if (dist <= 0) return;

    const litros = dist / rendimiento;
    const costoCombustible = litros * FUEL_PRICE_USD;
    
    // Cálculo de días (tope seguro 450 km por jornada)
    const dias = Math.ceil(dist / 450) || 1;
    const costoChofer = dias * choferDia;

    const numPeajes = Math.floor(dist / kmPorPeaje);
    const costoPeajes = numPeajes * peajeUsd;

    const costoMant = dist * mantKm;

    const totalOperativo = costoCombustible + costoChofer + costoPeajes + costoMant;
    
    const margenDecimal = margen / 100;
    const precioVenta = totalOperativo / (1 - margenDecimal);
    const ganancia = precioVenta - totalOperativo;

    setResultados({
      litros, costoCombustible, dias, costoChofer, numPeajes, costoPeajes, costoMant, totalOperativo, precioVenta, ganancia
    });
  }, [distancia, rendimiento, choferDia, mantKm, peajeUsd, kmPorPeaje, margen]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO: EL DOLOR Y LA SOLUCIÓN */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-900/50 bg-emerald-950/30 text-sm font-semibold text-emerald-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Software B2B para Flotas Internacionales
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Dejá de cotizar fletes <br/><span className="text-emerald-500">a ciegas.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Probá en vivo nuestro motor logístico. Calcula rentabilidad exacta en USD y moneda local proyectando variables de LATAM al 2030.
          </p>
        </div>
      </section>

      {/* LA CALCULADORA EN VIVO (EL DEMO) */}
      <section className="pb-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Demo: Motor de Rentabilidad</h2>
              <p className="text-zinc-500 text-sm mt-1">Configurado con proyección de combustible LATAM (+10% margen riesgo).</p>
            </div>
            <div className="bg-zinc-950 px-4 py-2 rounded-lg border border-zinc-800 text-right">
              <p className="text-emerald-400 font-mono font-bold text-lg">{fmtUsd(FUEL_PRICE_USD)} / Litro</p>
              <p className="text-zinc-500 text-xs">Diésel Indexado</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* PANEL DE CONTROL (INPUTS) */}
            <div className="col-span-1 lg:col-span-5 p-6 sm:p-8 bg-zinc-900/30 border-r border-zinc-800 space-y-6">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Distancia de la Ruta (Km totales)</label>
                <input
                  type="number"
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Ej: 1200"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl py-4 px-4 text-2xl font-black text-white outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">Rendimiento (Km/L)</label>
                  <input type="number" step="0.1" value={rendimiento} onChange={(e) => setRendimiento(Number(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">Viático Chofer (USD/día)</label>
                  <input type="number" value={choferDia} onChange={(e) => setChoferDia(Number(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">Desgaste Flota (USD/Km)</label>
                  <input type="number" step="0.01" value={mantKm} onChange={(e) => setMantKm(Number(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">Costo Peaje (USD/Caseta)</label>
                  <input type="number" value={peajeUsd} onChange={(e) => setPeajeUsd(Number(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-emerald-500 outline-none" />
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="flex justify-between mb-2">
                  <label className="text-[11px] font-bold uppercase text-blue-400">Margen de Ganancia (%)</label>
                  <span className="text-blue-400 font-bold">{margen}%</span>
                </div>
                <input type="range" min="5" max="60" value={margen} onChange={(e) => setMargen(Number(e.target.value))} className="w-full accent-blue-500" />
              </div>

            </div>

            {/* TABLERO DE RESULTADOS (OUTPUTS) */}
            <div className="col-span-1 lg:col-span-7 p-6 sm:p-8 bg-zinc-950 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

              {distancia ? (
                <div className="space-y-4 relative z-10 animate-in fade-in duration-500">
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Combustible Requerido</p>
                      <p className="text-lg font-bold text-white">{resultados.litros.toFixed(1)} L</p>
                      <p className="text-xs text-zinc-500 mt-1">{fmtUsd(resultados.costoCombustible)} <span className="text-[10px]">({fmtPyg(resultados.costoCombustible)})</span></p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Duración y RRHH</p>
                      <p className="text-lg font-bold text-white">{resultados.dias} Día(s)</p>
                      <p className="text-xs text-zinc-500 mt-1">{fmtUsd(resultados.costoChofer)} <span className="text-[10px]">({fmtPyg(resultados.costoChofer)})</span></p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Costo Operativo Real</p>
                      <p className="text-[10px] text-zinc-600">Desgaste ({fmtUsd(resultados.costoMant)}) + Peajes ({fmtUsd(resultados.costoPeajes)})</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-red-400">{fmtUsd(resultados.totalOperativo)}</p>
                      <p className="text-xs font-mono text-zinc-500">{fmtPyg(resultados.totalOperativo)}</p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Utilidad Neta</p>
                      <p className="text-[10px] text-zinc-600">Dinero libre para la empresa</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-blue-400">{fmtUsd(resultados.ganancia)}</p>
                      <p className="text-xs font-mono text-zinc-500">{fmtPyg(resultados.ganancia)}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Precio Final Sugerido</p>
                    <p className="text-5xl font-black text-white">{fmtUsd(resultados.precioVenta)}</p>
                    <p className="text-sm font-mono text-zinc-400 mt-2 bg-zinc-900 inline-block px-3 py-1 rounded-lg border border-zinc-800">
                      Equivalente: {fmtPyg(resultados.precioVenta)}
                    </p>
                  </div>

                </div>
              ) : (
                <div className="text-center py-16 opacity-50">
                  <div className="text-4xl mb-4">⚙️</div>
                  <p className="text-lg font-bold text-white">Ingresá la distancia en Km</p>
                  <p className="text-sm text-zinc-400 max-w-xs mx-auto mt-2">El motor calculará costos, desgaste y rentabilidad en tiempo real con variables internacionales.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CIERRE Y ANCLAJE DE PRECIO */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu competencia sigue perdiendo plata en Excel.</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Integrar este motor a medida en tu empresa tiene una inversión base de <strong className="text-white">USD $1.500</strong>. Un costo que se recupera en la primera semana al dejar de cotizar viajes a pérdida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
            >
              Agendar Auditoría B2B
            </a>
            <a href="https://aycweb.com" className="bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 text-white font-bold py-4 px-10 rounded-xl transition-all">
              Ver ecosistema completo
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
