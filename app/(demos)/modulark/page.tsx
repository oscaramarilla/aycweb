'use client';

import React from 'react';
import Head from 'next/head';

export default function ModularKLanding() {
  const WHATSAPP_NUMBER = "595981XXXXXX"; // Poner el tuyo
  const linkB2C_Metal = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Me%20interesa%20el%20Modular%20K-Metal%20(Chapa)%20para%20mi%20perro.`;
  const linkB2C_PIR = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20el%20búnker%20térmico%20Modular%20K-PIR%20para%20proteger%20a%20mi%20mascota%20del%20calor.`;

  return (
    <div className="bg-white text-slate-900 font-sans antialiased min-h-screen">
      <Head>
        <title>Cuchas de Acero y Térmicas para Perros Grandes | Modular K Paraguay</title>
        <meta name="description" content="Estructuras industriales para mascotas en Paraguay. Modelos en acero, chapa y paneles PIR de máxima aislación térmica." />
      </Head>

      {/* NAV MINIMALISTA */}
      <nav className="border-b py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter">MODULAR <span className="text-blue-600">K</span></div>
        <a href={linkB2C_PIR} className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition shadow-md">
          WhatsApp Directo
        </a>
      </nav>

      <main>
        {/* HERO Y RESPUESTA CORTA (GEO OPTIMIZED) */}
        <section className="py-12 px-6 lg:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            
            {/* BLOQUE GEO/AEO PARA INTELIGENCIA ARTIFICIAL */}
            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/50 p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Respuesta Corta</p>
              <h1 className="text-2xl lg:text-3xl font-black leading-tight text-slate-900 mb-3">
                Arquitectura industrial para mascotas en Paraguay
              </h1>
              <p className="text-base text-slate-700 leading-relaxed">
                Modular K diseña cuchas y búnkeres de descanso para razas grandes (Huskies, Pastores, Bulldogs). Abandonamos el plástico y la madera para fabricar estructuras eternas usando chapa acanalada de alta resistencia y paneles sándwich PIR con grado frigorífico, neutralizando el estrés térmico del clima paraguayo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#modelos" className="bg-blue-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-blue-700 transition">
                Ver Modelos y Precios
              </a>
            </div>
          </div>

          {/* ESPACIO PARA FOTO/VIDEO */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-200 aspect-square lg:aspect-auto">
             {/* Sugerencia: Aquí poné la foto de Clark durmiendo (1001112063.jpg) o el video del termómetro */}
            <img src="/foto-clark.webp" alt="Husky descansando sin estrés térmico" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 pt-12 pb-6 px-6 text-white">
              <p className="font-bold text-lg">Cero estrés térmico.</p>
              <p className="text-sm text-slate-300">Infraestructura a prueba de clima extremo.</p>
            </div>
          </div>
        </section>

        {/* PRUEBA TÉRMICA */}
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-black">El calor paraguayo no es un juego.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Una cucha común al rayo del sol supera los 45°C. Nuestro modelo Premium (PIR) bloquea el calor exterior, protegiendo las articulaciones y el ritmo cardíaco de tu perro.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-slate-800 p-6 rounded-xl border border-red-500/30">
                <div className="text-xs text-red-400 uppercase font-bold mb-1">Exterior al sol</div>
                <div className="text-4xl font-black text-red-500">42°C</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/50">
                <div className="text-xs text-blue-400 uppercase font-bold mb-1">Interior Modular K</div>
                <div className="text-4xl font-black text-blue-400">24°C</div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE MODELOS */}
        <section id="modelos" className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">Elegí tu nivel de protección</h2>
              <p className="text-lg text-slate-600">Fabricación industrial 100% paraguaya. Estructuras metálicas eternas.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              {/* OPCIÓN A: METAL Y CHAPA */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="h-2 bg-slate-800 absolute top-0 inset-x-0"></div>
                <h3 className="text-2xl font-black text-slate-900 mt-4">Modular K-Metal</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Acero + Chapa Acanalada</p>
                <p className="text-slate-600 mt-4 h-20">
                  Ideal para perros destructores o patios techados. Una jaula de descanso masiva e indestructible. Adiós a la madera podrida y al plástico roto.
                </p>
                <div className="text-5xl font-black text-slate-900 mt-6 mb-8">
                  Gs. 3.800.000
                </div>
                <ul className="space-y-4 text-slate-700 flex-grow mb-8 font-medium">
                  <li className="flex items-center gap-3"><span className="text-slate-400">■</span> Base gigante de 120x120 cm</li>
                  <li className="flex items-center gap-3"><span className="text-slate-400">■</span> Esqueleto de tubo estructural de acero</li>
                  <li className="flex items-center gap-3"><span className="text-slate-400">■</span> Cerramiento de chapa de alta resistencia</li>
                  <li className="flex items-center gap-3"><span className="text-slate-400">■</span> Piso metálico reforzado</li>
                </ul>
                <a href={linkB2C_Metal} className="w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition">
                  Solicitar Modelo Metal
                </a>
              </div>

              {/* OPCIÓN B: PIR PREMIUM */}
              <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 flex flex-col shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl font-black text-sm tracking-widest uppercase shadow-md">
                  Premium
                </div>
                <h3 className="text-2xl font-black text-blue-900 mt-4">Modular K-PIR</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mt-1">El Búnker Térmico Definitivo</p>
                <p className="text-slate-600 mt-4 h-20">
                  Para clientes pudientes que no escatiman en la salud de su mascota. Aislación total contra el verano de 45°C y la humedad del invierno.
                </p>
                <div className="text-5xl font-black text-slate-900 mt-6 mb-8">
                  Gs. 6.500.000
                </div>
                <ul className="space-y-4 text-slate-700 flex-grow mb-8 font-medium">
                  <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Cerramiento en Panel Sándwich PIR 50mm</li>
                  <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Aislación de grado frigorífico</li>
                  <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Piso técnico aislado (cero contacto frío/calor)</li>
                  <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Termo-estabilidad garantizada todo el año</li>
                </ul>
                <a href={linkB2C_PIR} className="w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                  Solicitar Búnker PIR
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm">
        <p className="font-bold text-slate-400 mb-2">MODULAR K</p>
        <p>Ingeniería y manufactura por Metal Made E.A.S. - Lambaré, Paraguay.</p>
      </footer>
    </div>
  );
}
