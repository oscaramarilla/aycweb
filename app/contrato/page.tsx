"use client";

import React from 'react';

export default function BorradorContrato() {
  return (
    <main className="min-h-screen bg-zinc-950 py-8 px-4 md:py-12 font-sans selection:bg-blue-500/30">
      
      {/* Barra superior de estado (Mobile friendly) */}
      <div className="max-w-3xl mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 font-bold text-sm tracking-wide uppercase">Borrador para Revisión</span>
        </div>
        <button className="w-full sm:w-auto px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold rounded-lg transition-colors border border-zinc-700">
          Descargar PDF Preview
        </button>
      </div>

      {/* Contenedor del Documento (Efecto Papel) */}
      <div className="max-w-3xl mx-auto bg-white text-zinc-900 p-6 sm:p-10 md:p-14 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Sello de agua sutil de AYC */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none text-[150px] font-black tracking-tighter">
          AYC
        </div>

        {/* Encabezado */}
        <div className="border-b-2 border-zinc-200 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-zinc-950 tracking-tight">AYCweb.com</h1>
            <p className="text-sm text-zinc-500 font-bold tracking-widest uppercase mt-1">Automatizaciones Corporativas</p>
          </div>
          <div className="text-sm text-zinc-600 sm:text-right">
            <p className="font-bold text-zinc-900">Oscar Emigdio Amarilla Cáceres</p>
            <p>RUC: 4499507-5</p>
            <p>Cel: +595 985 864209</p>
            <p>Lambaré, Paraguay</p>
          </div>
        </div>

        {/* Título del Contrato */}
        <h2 className="text-xl sm:text-2xl font-black text-center mb-8 uppercase tracking-wide">
          Contrato de Desarrollo e Implementación de Software
        </h2>

        {/* Cuerpo del Contrato */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
          
          <section>
            <h3 className="font-bold text-zinc-950 mb-2 uppercase text-sm tracking-widest border-l-4 border-blue-500 pl-3">Reunidos</h3>
            <p>
              De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.<br/>
              De otra parte, <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[NOMBRE DE LA EMPRESA O CLIENTE]</span>, con RUC <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[RUC]</span> y domicilio en <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[DIRECCIÓN]</span> (en adelante "El Cliente").
            </p>
          </section>

          <section>
            <h3 className="font-bold text-zinc-950 mb-2 uppercase text-sm tracking-widest border-l-4 border-blue-500 pl-3">Cláusula 1: Objeto</h3>
            <p>
              AYCweb se compromete al desarrollo, programación y despliegue del sistema tecnológico denominado: <strong><span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[DESCRIPCIÓN DEL SISTEMA]</span></strong>, diseñado a medida para optimizar los procesos operativos de El Cliente.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-zinc-950 mb-2 uppercase text-sm tracking-widest border-l-4 border-blue-500 pl-3">Cláusula 2: Inversión y Forma de Pago (A Crédito)</h3>
            <p className="mb-3">
              La inversión total para el desarrollo y entrega del sistema es de <strong>Gs. <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[PRECIO TOTAL]</span></strong>. El Cliente abonará dicho monto bajo la modalidad <strong>A CRÉDITO</strong>, estructurado de la siguiente manera:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Anticipo (50%):</strong> La suma de <strong>Gs. <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[MONTO ANTICIPO]</span></strong> abonada a la firma del contrato físico, para dar inicio oficial a la programación.</li>
              <li><strong>Saldo a Crédito:</strong> El remanente de <strong>Gs. <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[SALDO PENDIENTE]</span></strong> será financiado en <strong><span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[N° CUOTAS]</span></strong> cuotas mensuales consecutivas de <strong>Gs. <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[MONTO CUOTA]</span></strong>.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-zinc-950 mb-2 uppercase text-sm tracking-widest border-l-4 border-blue-500 pl-3">Cláusula 3: Mantenimiento (SaaS)</h3>
            <p>
              Para garantizar el funcionamiento ininterrumpido en la nube, El Cliente abonará una cuota mensual de mantenimiento de <strong>Gs. <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[MONTO MANTENIMIENTO]</span></strong>, la cual incluye alojamiento en servidores, dominio y soporte técnico.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-zinc-950 mb-2 uppercase text-sm tracking-widest border-l-4 border-blue-500 pl-3">Cláusula 4: Confidencialidad</h3>
            <p>
              AYCweb garantiza la absoluta confidencialidad de los datos comerciales procesados por El Cliente. El sistema se entrega bajo licencia de uso exclusivo para la empresa contratante.
            </p>
          </section>
          
        </div>

        {/* Firmas */}
        <div className="mt-16 pt-8 border-t-2 border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
          <div>
            <div className="border-b border-zinc-400 w-4/5 mx-auto mb-2"></div>
            <p className="font-bold text-zinc-900">Oscar Emigdio Amarilla C.</p>
            <p className="text-sm text-zinc-500">AYCweb.com</p>
          </div>
          <div>
            <div className="border-b border-zinc-400 w-4/5 mx-auto mb-2"></div>
            <p className="font-bold text-zinc-900"><span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-300 font-mono text-sm">[FIRMA CLIENTE]</span></p>
            <p className="text-sm text-zinc-500">Representante Legal</p>
          </div>
        </div>
      </div>

      {/* Botón flotante para el cliente (Fija en la parte inferior en móviles) */}
      <div className="max-w-3xl mx-auto mt-8 sticky bottom-6 px-4">
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <p className="text-zinc-300 text-sm text-center sm:text-left">
            ¿Los datos son correctos? Solicita la visita de nuestro courier para la firma oficial.
          </p>
          <a 
            href="https://wa.me/595985864209?text=Hola%20Oscar,%20revisé%20el%20borrador.%20Podemos%20coordinar%20la%20firma%20con%20tu%20courier." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] text-center flex items-center justify-center gap-2"
          >
            <span>Coordinar Firma ✍️</span>
          </a>
        </div>
      </div>

    </main>
  );
}
