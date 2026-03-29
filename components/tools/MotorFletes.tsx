"use client";

import React, { useState, useEffect } from 'react';

export default function CalculadoraFletes() {
  // 1. ESTADOS DE ENTRADA (Inputs)
  const [distancia, setDistancia] = useState<number | ''>('');

  // 2. VARIABLES OPERATIVAS (Ajustables por el usuario/administrador)
  const [precioCombustible, setPrecioCombustible] = useState<number>(8000); // Gs. por litro (Diésel)
  const [rendimientoKm, setRendimientoKm] = useState<number>(4); // Km por litro (Camión mediano)
  const [pagoChoferKm, setPagoChoferKm] = useState<number>(600); // Gs. pagados al chofer por Km
  const [mantenimientoKm, setMantenimientoKm] = useState<number>(1000); // Gs. para cubiertas/aceite por Km
  const [margenGanancia, setMargenGanancia] = useState<number>(30); // % de rentabilidad deseada

  // 3. ESTADOS DE SALIDA (Resultados)
  const [costoOperativo, setCostoOperativo] = useState<number>(0);
  const [precioSugerido, setPrecioSugerido] = useState<number>(0);
  const [gananciaNeta, setGananciaNeta] = useState<number>(0);

  // 4. MOTOR DE CÁLCULO
  useEffect(() => {
    if (distancia && typeof distancia === 'number' && distancia > 0) {
      // Cálculo de Combustible
      const litrosNecesarios = distancia / rendimientoKm;
      const costoCombustible = litrosNecesarios * precioCombustible;
      
      // Cálculo de Peajes (Aprox. 1 peaje de 15.000 Gs cada 100km)
      const peajesEstimados = Math.floor(distancia / 100) * 15000;
      
      // Costos Operativos Totales
      const costoChofer = distancia * pagoChoferKm;
      const costoDesgaste = distancia * mantenimientoKm;
      
      const totalOperativo = costoCombustible + peajesEstimados + costoChofer + costoDesgaste;
      
      // Precio de Venta (Fórmula financiera correcta para margen sobre ventas)
      const margenDecimal = margenGanancia / 100;
      const precioVenta = totalOperativo / (1 - margenDecimal);
      
      setCostoOperativo(totalOperativo);
      setPrecioSugerido(precioVenta);
      setGananciaNeta(precioVenta - totalOperativo);
    } else {
      setCostoOperativo(0);
      setPrecioSugerido(0);
      setGananciaNeta(0);
    }
  }, [distancia, precioCombustible, rendimientoKm, pagoChoferKm, mantenimientoKm, margenGanancia]);

  // Formateador de moneda (Guaraníes)
  const formatearGs = (monto: number) => {
    return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(monto);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl font-sans text-zinc-100">
      
      {/* CABECERA */}
      <div className="bg-zinc-900 border-b border-zinc-800 p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 relative z-10">Motor de Cotización Logística</h2>
        <p className="text-zinc-400 text-sm sm:text-base relative z-10">Calcula costos reales y asegura la rentabilidad de cada flete.</p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* COLUMNA IZQUIERDA: INPUTS */}
        <div className="space-y-8">
          
          {/* Dato Principal */}
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <label className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Distancia del Viaje (Ida y Vuelta)</label>
            <div className="relative">
              <input
                type="number"
                value={distancia}
                onChange={(e) => setDistancia(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ej: 350"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl py-4 pl-4 pr-12 text-2xl font-black text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">Km</span>
            </div>
          </div>

          {/* Ajustes Operativos */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-400 uppercase border-b border-zinc-800 pb-2">Variables Operativas</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Precio Diésel (Gs/L)</label>
                <input type="number" value={precioCombustible} onChange={(e) => setPrecioCombustible(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Consumo (Km/L)</label>
                <input type="number" value={rendimientoKm} onChange={(e) => setRendimientoKm(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Mantenimiento (Gs/Km)</label>
                <input type="number" value={mantenimientoKm} onChange={(e) => setMantenimientoKm(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-blue-400 uppercase mb-1">Margen Deseado (%)</label>
                <input type="number" value={margenGanancia} onChange={(e) => setMargenGanancia(Number(e.target.value))} className="w-full bg-blue-950/30 border border-blue-900/50 rounded-lg p-2.5 text-sm text-blue-300 font-bold outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: RESULTADOS */}
        <div className="bg-black rounded-2xl border border-zinc-800 p-6 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {distancia ? (
            <div className="space-y-6 relative z-10 animate-in fade-in duration-500">
              
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Costo Operativo Base</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Combustible, peajes, chofer y desgaste.</p>
                </div>
                <p className="text-xl font-bold text-red-400">{formatearGs(costoOperativo)}</p>
              </div>

              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Ganancia Neta ({margenGanancia}%)</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Utilidad libre de gastos operacionales.</p>
                </div>
                <p className="text-xl font-bold text-blue-400">{formatearGs(gananciaNeta)}</p>
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Precio de Venta Sugerido</p>
                <p className="text-4xl sm:text-5xl font-black text-white">{formatearGs(precioSugerido)}</p>
              </div>

              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Generar Presupuesto PDF
              </button>
            </div>
          ) : (
            <div className="text-center text-zinc-500 py-10 relative z-10">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              <p className="font-bold text-lg text-zinc-400">Ingresa la distancia del viaje</p>
              <p className="text-sm mt-2">El motor calculará los costos operativos y el precio sugerido al instante.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
