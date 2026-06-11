'use client';

import React from 'react';
import Head from 'next/head';

export default function ModularKLanding() {
  // Configuración de Enlaces
  const linkOnboarding = "https://aycweb.com/onboarding";
  const WHATSAPP_NUMBER = "595985864209"; 
  const wsText = encodeURIComponent("Hola, quiero cotizar un Modular K para mi perro.\nRaza:\nPeso aproximado:\n¿Va a estar al sol o bajo techo?:\nCiudad:");
  const linkWhatsAppGeneral = `https://wa.me/${WHATSAPP_NUMBER}?text=${wsText}`;

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
      <Head>
        <title>La Cucha Térmica Premium en Paraguay | Modular K by AYCweb</title>
        <meta name="description" content="Protección térmica premium para perros grandes. Estructuras metálicas eternas con aislación PIR." />
      </Head>

      {/* NAV Y CLARIFICACIÓN DE MARCA */}
      <nav className="border-b py-3 px-6 flex flex-col sm:flex-row justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex flex-col">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            AYCweb &gt; Línea Infraestructura
          </div>
          <div className="font-black text-2xl tracking-tighter">MODULAR <span className="text-blue-600">K</span></div>
        </div>
        <a href={linkWhatsAppGeneral} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition shadow-md">
          Consultas por WhatsApp
        </a>
      </nav>

      <main>
        {/* HERO: EMOCIONAL Y DIRECTO */}
        <section className="py-12 px-6 lg:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              La cucha térmica premium para perros grandes en Paraguay.
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Protegé a tu Husky, Pastor, Bulldog o raza grande del calor extremo, la humedad y las cuchas descartables. Modular K combina estructura metálica y aislación PIR tipo frigorífica para crear un refugio resistente, fresco y duradero.
            </p>
            <p className="text-sm font-semibold text-slate-500 bg-slate-100 p-3 rounded-lg inline-block">
              Modulark es una división especializada de ingeniería de AYCweb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={linkOnboarding} className="bg-blue-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-blue-700 transition">
                Iniciar Onboarding / Cotizar
              </a>
              <a href="#modelos" className="border-2 border-slate-300 text-slate-700 text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition">
                Ver Modelos y Medidas
              </a>
            </div>
          </div>

          {/* FOTO PRINCIPAL */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-square lg:aspect-auto">
            <img src="/foto-clark.webp" alt="Perro descansando en Modular K" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 pt-16 pb-6 px-6 text-white">
              <p className="font-bold text-xl">Pensado para durar años, no temporadas.</p>
            </div>
          </div>
        </section>

        {/* PRUEBA TÉRMICA REAL */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-black">Test Térmico Real</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Medición hecha en Paraguay, a pleno sol, utilizando termómetro infrarrojo de precisión.
              </p>
            </div>

            {/* FOTOS DE PRUEBA REEMPLAZADAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Foto 1: Cucha Común */}
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <img 
                  src="/test-cucha-comun.webp" 
                  alt="Termómetro marcando calor en cucha de plástico" 
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-600 shadow-inner" 
                />
                <p className="font-bold text-red-400">Exterior expuesto: +42 °C</p>
              </div>

              {/* Foto 2: Exterior Modular */}
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <img 
                  src="/test-modular-exterior.webp" 
                  alt="Termómetro marcando calor en el exterior del Modular K" 
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-600 shadow-inner" 
                />
                <p className="font-bold text-slate-300">Exterior Modular K: +42 °C</p>
              </div>

              {/* Foto 3: Interior PIR */}
              <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] transform hover:scale-105 transition-transform">
                <img 
                  src="/test-modular-interior.webp" 
                  alt="Termómetro marcando temperatura fresca en el interior aislado" 
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-500/30 shadow-lg" 
                />
                <p className="font-bold text-blue-400 text-xl">Interior PIR: 24 °C</p>
              </div>

            </div>

            <div className="inline-block bg-blue-900/50 border border-blue-500 px-8 py-4 rounded-full">
              <p className="text-2xl font-black text-white">Diferencia térmica comprobada: <span className="text-blue-400">-18 °C</span></p>
            </div>
          </div>
        </section>

        {/* SALUD Y CONTEXTO DEL PRECIO */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Una inversión en salud y tranquilidad</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-left">
            El calor en perros es un problema real. Signos como jadeo fuerte, búsqueda constante de sombra y agitación son síntomas de estrés por calor. Modular K <strong>ayuda a reducir la exposición al calor extremo</strong> creando un refugio fresco, sombreado y aislado.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-left">
            <p className="text-lg font-medium text-slate-800">
              Una cucha común se compra por precio. <br/>
              <span className="font-black text-blue-700">Modular K se compra por duración, seguridad térmica y evitar gastos veterinarios.</span>
            </p>
          </div>
        </section>

        {/* COMPARATIVA DE MODELOS */}
        <section id="modelos" className="py-16 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 text-center mb-12">Elegí la solución exacta para tu perro</h2>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* MODELO METAL */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-xl transition-shadow relative">
                <h3 className="text-2xl font-black text-slate-900 mt-2">Modular K-Metal</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Acero + Chapa Acanalada</p>
                <div className="bg-slate-100 p-4 rounded-lg mt-4 mb-6">
                  <p className="text-sm font-bold">Ideal para:</p>
                  <p className="text-slate-600">Perros destructores, patios techados, uso rudo.</p>
                  <p className="text-sm font-bold mt-2">Beneficio principal:</p>
                  <p className="text-slate-600">Resistencia extrema.</p>
                </div>
                <div className="space-y-1 mb-8">
                  <div className="text-4xl font-black text-slate-900">Gs. 3.800.000</div>
                  <div className="text-sm font-semibold text-slate-400">~ USD $500 | ~ EUR €460</div>
                </div>
                <a href={linkOnboarding} className="mt-auto w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition">
                  Agendar Consulta para Metal
                </a>
                <p className="text-center text-xs text-slate-400 mt-4 font-bold">Si tu problema es que tu perro rompe todo, elegí Metal.</p>
              </div>

              {/* MODELO PIR */}
              <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 flex flex-col shadow-2xl relative">
                <div className="absolute -top-4 right-8 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-sm tracking-widest uppercase shadow-md">
                  Premium
                </div>
                <h3 className="text-2xl font-black text-blue-900 mt-2">Modular K-PIR</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mt-1">El Refugio Térmico Definitivo</p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4 mb-6 border border-blue-100">
                  <p className="text-sm font-bold text-blue-900">Ideal para:</p>
                  <p className="text-blue-800">Dueños que quieren el máximo nivel de protección, perros sensibles al calor, patios expuestos.</p>
                  <p className="text-sm font-bold text-blue-900 mt-2">Beneficio principal:</p>
                  <p className="text-blue-800">Protección térmica y confort absoluto.</p>
                </div>
                <div className="space-y-1 mb-8">
                  <div className="text-4xl font-black text-slate-900">Gs. 6.500.000</div>
                  <div className="text-sm font-semibold text-slate-400">~ USD $850 | ~ EUR €780</div>
                </div>
                <a href={linkOnboarding} className="mt-auto w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                  Agendar Consulta para PIR
                </a>
                <p className="text-center text-xs text-blue-600/70 mt-4 font-bold">Si tu problema principal es el calor paraguayo, elegí PIR.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESPECIFICACIONES Y LOGÍSTICA */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Especificaciones Técnicas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-200">
                  <th className="p-4 font-bold text-slate-700">Característica</th>
                  <th className="p-4 font-bold text-slate-700">Modular K-Metal</th>
                  <th className="p-4 font-bold text-blue-700 bg-blue-50">Modular K-PIR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Dimensiones (Base)</td>
                  <td className="p-4">120 x 120 cm</td>
                  <td className="p-4 bg-blue-50/30">120 x 120 cm</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Material Exterior</td>
                  <td className="p-4">Chapa acanalada galvanizada</td>
                  <td className="p-4 bg-blue-50/30 font-bold">Panel Sándwich PIR 50mm</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Aislación Térmica</td>
                  <td className="p-4">Ventilación Cruzada</td>
                  <td className="p-4 bg-blue-50/30 font-bold text-blue-600">Grado Frigorífico (0.022 W/mK)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Piso</td>
                  <td className="p-4">Metálico reforzado</td>
                  <td className="p-4 bg-blue-50/30">Técnico Aislado (Cero transferencia)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* LOGÍSTICA */}
          <div className="mt-16 bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Proceso de Compra y Entrega</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-bold text-blue-600 text-lg mb-2">1. Consulta</p>
                <p className="text-slate-600">Asesoramiento vía WhatsApp u Onboarding para elegir el modelo ideal según tu patio y mascota.</p>
              </div>
              <div>
                <p className="font-bold text-blue-600 text-lg mb-2">2. Fabricación</p>
                <p className="text-slate-600">Producción industrial a medida en nuestro taller. Tiempo estimado: 15 a 20 días.</p>
              </div>
              <div>
                <p className="font-bold text-blue-600 text-lg mb-2">3. Entrega</p>
                <p className="text-slate-600">Logística coordinada hasta tu domicilio. Instalación llave en mano disponible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-center mb-10">Preguntas Frecuentes</h2>
            
            <div>
              <h3 className="font-bold text-lg text-slate-900">¿No es demasiado cerrado para el perro?</h3>
              <p className="text-slate-600 mt-2">No. Se diseña con ventilación estratégica, entrada amplia y te asesoramos sobre la orientación adecuada según tu patio.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-slate-900">¿Sirve para perros destructores?</h3>
              <p className="text-slate-600 mt-2">Sí. El modelo <strong>Metal</strong> está soldado y pensado para resistencia extrema contra mordeduras y rasguños.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900">¿El modelo PIR enfría como aire acondicionado?</h3>
              <p className="text-slate-600 mt-2">No. No enfría activamente; gracias a la bajísima conductividad del núcleo Kingspan, reduce la transferencia de calor drásticamente, manteniendo el interior mucho más estable, fresco y sombreado que una cucha común.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900">¿Se puede personalizar medida y color?</h3>
              <p className="text-slate-600 mt-2">Totalmente. Al ser fabricantes, adaptamos la estructura según el tamaño exacto de tu raza, el espacio en tu patio y la estética de tu casa.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA COPY */}
        <section className="bg-blue-600 text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-black">La cucha definitiva para perros grandes en Paraguay.</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              El calor, la humedad y las cuchas comunes no están diseñadas para razas grandes. Modular K nace desde la metalúrgica para crear un refugio más fresco, sólido y duradero.
            </p>
            <p className="text-2xl font-black bg-white/10 p-4 rounded-lg inline-block">
              No es una cucha decorativa. Es infraestructura de descanso.
            </p>
            <div>
              <a href={linkOnboarding} className="inline-block bg-white text-blue-900 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition shadow-2xl mt-4">
                Comenzar Cotización
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm">
        <p className="font-bold text-slate-400 mb-2">MODULAR K by AYCweb</p>
        <p>Ingeniería de software e infraestructura física - Asunción & Lambaré, Paraguay.</p>
      </footer>
    </div>
  );
}
