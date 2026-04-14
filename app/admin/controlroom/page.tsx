"use client";

import React, { useState } from 'react';

// Tipos de estados de nuestro embudo
const ESTADOS = ['Prospecto', 'Contactado', 'Respondió', 'Demo Agendada', 'Cliente Cerrado'];

export default function CRMVentas() {
  // Estado inicial con un ejemplo
  const [prospectos, setProspectos] = useState([
    { id: 1, empresa: 'Metalúrgica Ejemplo', contacto: 'Juan Pérez', estado: 'Prospecto', valor: '4.500.000', fecha: 'Hoy' }
  ]);

  // Estados para el formulario nuevo
  const [nuevaEmpresa, setNuevaEmpresa] = useState('');
  const [nuevoContacto, setNuevoContacto] = useState('');
  const [nuevoValor, setNuevoValor] = useState('');

  // Función para agregar prospecto
  const agregarProspecto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevaEmpresa) return;
    
    const nuevo = {
      id: Date.now(),
      empresa: nuevaEmpresa,
      contacto: nuevoContacto || 'Sin nombre',
      estado: 'Prospecto',
      valor: nuevoValor || '0',
      fecha: new Date().toLocaleDateString()
    };
    
    setProspectos([...prospectos, nuevo]);
    setNuevaEmpresa('');
    setNuevoContacto('');
    setNuevoValor('');
  };

  // Función para avanzar de etapa
  const moverProspecto = (id: number, nuevoEstado: string) => {
    setProspectos(prospectos.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
  };

  // Función para eliminar
  const eliminarProspecto = (id: number) => {
    setProspectos(prospectos.filter(p => p.id !== id));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans p-6 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black">Embudo de Ventas AYC</h1>
            <p className="text-zinc-400">Control de prospección diaria (Meta: 30 al día)</p>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 px-6 py-3 rounded-xl">
            <p className="text-sm text-blue-400 font-bold uppercase tracking-wider">Total en Pipeline</p>
            <p className="text-2xl font-black text-white">{prospectos.length} Empresas</p>
          </div>
        </div>

        {/* Formulario de Ingreso Rápido */}
        <form onSubmit={agregarProspecto} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-10 flex flex-col md:flex-row gap-4 items-end shadow-xl">
          <div className="w-full md:w-1/3">
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Empresa</label>
            <input type="text" value={nuevaEmpresa} onChange={e => setNuevaEmpresa(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: Importadora ABC" required />
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Contacto / Cargo</label>
            <input type="text" value={nuevoContacto} onChange={e => setNuevoContacto(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: Gerente General" />
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Valor Estimado (Gs)</label>
            <input type="text" value={nuevoValor} onChange={e => setNuevoValor(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: 4.500.000" />
          </div>
          <div className="w-full md:w-auto">
            <button type="submit" className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              + Agregar
            </button>
          </div>
        </form>

        {/* Tablero Kanban */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-8">
          {ESTADOS.map((estado, idx) => (
            <div key={estado} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col min-w-[280px]">
              {/* Título de la Columna */}
              <div className={`p-4 border-b border-zinc-800 rounded-t-2xl ${estado === 'Cliente Cerrado' ? 'bg-green-900/20' : estado === 'Demo Agendada' ? 'bg-blue-900/20' : 'bg-zinc-900'}`}>
                <h3 className="font-bold text-sm uppercase tracking-wider">{estado}</h3>
                <span className="text-xs text-zinc-500">{prospectos.filter(p => p.estado === estado).length} prospectos</span>
              </div>

              {/* Tarjetas */}
              <div className="p-4 space-y-4 flex-1 min-h-[500px]">
                {prospectos.filter(p => p.estado === estado).map(prospecto => (
                  <div key={prospecto.id} className="bg-zinc-950 border border-zinc-700 p-4 rounded-xl shadow-lg relative group">
                    <button onClick={() => eliminarProspecto(prospecto.id)} className="absolute top-2 right-2 text-zinc-600 hover:text-red-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">X</button>
                    
                    <h4 className="font-black text-blue-400 mb-1">{prospecto.empresa}</h4>
                    <p className="text-xs text-zinc-400 mb-3 flex items-center gap-1">👤 {prospecto.contacto}</p>
                    <p className="text-xs font-mono text-green-400 bg-green-400/10 inline-block px-2 py-1 rounded mb-4">Gs. {prospecto.valor}</p>
                    
                    {/* Controles para mover tarjeta */}
                    <select 
                      value={prospecto.estado}
                      onChange={(e) => moverProspecto(prospecto.id, e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs p-2 rounded text-zinc-300 outline-none hover:border-blue-500 transition-colors"
                    >
                      {ESTADOS.map(est => <option key={est} value={est}>Mover a: {est}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
