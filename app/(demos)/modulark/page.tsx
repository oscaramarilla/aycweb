'use client';

import React from 'react';
import Head from 'next/head';

export default function ModularKPremium() {
  // CONFIGURACIÓN: Reemplazá con tu número real de WhatsApp
  const WHATSAPP_NUMBER = "595981XXXXXX"; 
  const linkB2C = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20más%20información%20sobre%20la%20cucha%20térmica%20Modular%20K%20para%20mi%20perro.`;
  const linkB2B = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Me%20interesa%20la%20alianza%20B2B%20para%20mi%20veterinaria/petshop.`;

  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      <Head>
        <title>Cuchas Térmicas Premium para Perros Grandes | Modular K Paraguay</title>
      </Head>

      {/* NAV INDEPENDIENTE (Sin confusión de mobiliario escolar) */}
      <nav className="border-b py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="font-bold text-xl tracking-tighter">MODULAR <span className="text-blue-600">K</span></div>
        <a href={linkB2C} className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition">
          WhatsApp Directo
        </a>
      </nav>

      {/* HERO: Directo y Profesional */}
      <section className="py-16 px-6 lg:py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-black leading-tight text-slate-900">
            Cuchas térmicas premium para perros grandes en Paraguay
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Protección contra calor extremo, humedad y el frío del suelo. Fabricadas con estructura industrial de Steel Framing y aislación PIR de alta densidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={linkB2C} className="bg-blue-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition">
              Cotizar por WhatsApp
            </a>
            <a href="#modelos" className="border-2 border-slate-200 text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition">
              Ver Modelos y Medidas
            </a>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
          <img src="/modulo-k.webp" alt="Prueba de cámara térmica Modular K" className="w-full h-auto" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-6 text-white text-sm">
            Prueba real en Lambaré: Exterior 42°C | Interior 24°C
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRUEBA REAL (El factor confianza) */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Prueba térmica irrefutable</h2>
          <p className="text-lg text-slate-600">
            En Paraguay, una cucha común puede convertirse en un horno. Modular K está diseñado para reducir el estrés térmico y proteger la salud de razas grandes todo el año.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-sm text-slate-400 uppercase font-bold">Exterior</div>
              <div className="text-3xl font-black text-red-500">42°C</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-500">
              <div className="text-sm text-slate-400 uppercase font-bold">Interior K</div>
              <div className="text-3xl font-black text-green-600">24°C</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-sm text-slate-400 uppercase font-bold">Material</div>
              <div className="text-xl font-bold">PIR 50mm</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-sm text-slate-400 uppercase font-bold">Ubicación</div>
              <div className="text-xl font-bold">Lambaré</div>
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS Y PRECIOS (Filtrado de compradores serios) */}
      <section id="modelos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-8 space-y-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Modular K-Wood</h3>
            <p className="text-slate-500">Edición Carpintería: Bastidor de madera densa con aislación interna ISO y terciada sellada.</p>
            <div className="text-4xl font-black text-slate-900">Gs. 3.800.000</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ Base 120x120 cm</li>
              <li>✓ Aislación térmica interior</li>
              <li>✓ Piso técnico incluido</li>
            </ul>
            <a href={linkB2C} className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-bold">Solicitar Wood</a>
          </div>

          <div className="border-2 border-blue-600 rounded-2xl p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold uppercase">Recomendado</div>
            <h3 className="text-2xl font-bold">Modular K-PIR</h3>
            <p className="text-slate-500">Edición Industrial: Estructura de Steel Framing y Panel Sándwich PIR de 50mm (Grado frigorífico).</p>
            <div className="text-4xl font-black text-slate-900">Gs. 6.500.000</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ Máxima durabilidad (Acero)</li>
              <li>✓ Aislación PIR de alto rendimiento</li>
              <li>✓ Cero mantenimiento exterior</li>
            </ul>
            <a href={linkB2C} className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold">Solicitar PIR</a>
          </div>
        </div>
      </section>

      {/* ALIANZAS B2B */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">¿Tenés una Veterinaria o Pet Shop?</h2>
          <p className="text-blue-200">Sumate a nuestra red de aliados. Ofrecemos márgenes de ganancia competitivos y logística de entrega directa para tus clientes.</p>
          <a href={linkB2B} className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg">Consultar Alianza B2B</a>
        </div>
      </section>

      <footer className="py-12 border-t text-center text-slate-400 text-sm">
        Modular K es una división de infraestructura para mascotas de Metal Made E.A.S.
      </footer>
    </div>
  );
}
