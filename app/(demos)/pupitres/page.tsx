"use client";

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, TrendingDown, BookOpen, PenTool, CheckCircle2, 
  MessageCircle, Download, Wrench, Ruler, Layers, ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function MobiliarioEscolarFunnel() {
  // Estados para la calculadora
  const [qtyCiclo1, setQtyCiclo1] = useState(0); 
  const [qtyCiclo2, setQtyCiclo2] = useState(0); 
  const [qtyCiclo3, setQtyCiclo3] = useState(0); 

  // Precios base (Minorista) y Mayorista
  const PRICE_CICLO_1 = 760000;
  const PRICE_CICLO_2 = 790000;
  const PRICE_CICLO_3 = 810000;
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

  const handleWhatsApp = () => {
    const text = `Hola Oscar. Vengo de la web. Quiero equipar mi institución con mobiliario escolar. \n\nCantidades:\n- 1er Ciclo: ${qtyCiclo1}\n- 2do Ciclo: ${qtyCiclo2}\n- 3er Ciclo/Medio: ${qtyCiclo3}\n\nTotal unidades: ${calculations.totalQty}\nCotización estimada: Gs. ${calculations.finalTotal.toLocaleString('es-PY')}`;
    window.open(`https://wa.me/595982855219?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION - Título Fuerte + Foto Real */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* REEMPLAZAR CON TU FOTO REAL DEL TALLER O AULA */}
          <div className="w-full h-full bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('/tu-foto-hero.jpg')" }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Fabricación Nacional Paraguaya
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Mobiliario Escolar <span className="text-amber-400">Indestructible</span> para Colegios Exigentes.
            </h1>
            <p className="text-lg text-slate-300">
              Conjuntos ergonómicos con acero reforzado y 2 años de garantía real. Deja de gastar presupuesto en reparar pupitres endebles cada año.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#cotizador" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Cotizar Equipamiento
              </a>
              <a href="/manual-tecnico.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                <Download size={18} /> Ficha Técnica
              </a>
            </div>
          </div>
          {/* REEMPLAZAR CON TU FOTO DEL PRODUCTO ESTRELLA */}
          <div className="hidden md:block">
             <div className="w-full h-96 bg-slate-800 rounded-2xl border-4 border-slate-700 shadow-2xl flex items-center justify-center">
                <span className="text-slate-500">[Espacio para foto HD de pupitre CJA-05]</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. PRUEBA SOCIAL (Confianza B2B) */}
      <section className="border-b bg-slate-50 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Infraestructura elegida por instituciones de alto nivel</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* AGREGAR LOGOS DE COLEGIOS/CLIENTES */}
            <div className="h-12 w-32 bg-slate-300 rounded"></div>
            <div className="h-12 w-32 bg-slate-300 rounded"></div>
            <div className="h-12 w-32 bg-slate-300 rounded"></div>
            <div className="h-12 w-32 bg-slate-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS CLAVE (Escaneables con Iconos) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Fabricados para soportar el ciclo escolar (y a los alumnos).</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Como dueños de colegios, sabemos que el mobiliario sufre. Nuestra ingeniería resuelve los 4 problemas típicos de la infraestructura educativa.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">2 Años de Garantía</h3>
            <p className="text-slate-600 text-sm">Respondemos directamente nosotros. Sin intermediarios ni trabas comerciales.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4">
              <Layers size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Acero Reforzado</h3>
            <p className="text-slate-600 text-sm">Chasis tubular que no se dobla ni pierde estabilidad con el balanceo diario.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-4">
              <Ruler size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Ergonomía por Ciclo</h3>
            <p className="text-slate-600 text-sm">Alturas adaptadas estrictamente al percentil de crecimiento del alumno (CJA 03 al 06).</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Inclusión Total</h3>
            <p className="text-slate-600 text-sm">Normativa de Mesas Accesibles (MA-02) incluidas en nuestro manual de layout.</p>
          </div>
        </div>
      </section>

      {/* 4. ESPECIFICACIONES TÉCNICAS (El bloque para cerrar al Administrador) */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">El secreto está en los materiales, no en el marketing.</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              No somos revendedores, somos industriales. Nuestro mobiliario no requiere recambio anual porque está soldado y pintado con especificaciones técnicas superiores a las exigidas por el estado.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={20} />
                <div>
                  <strong className="block text-white">Pintura Electroestática Epoxi</strong>
                  <span className="text-slate-400 text-sm">Horneada a 180°C. Resiste rayones, solventes y no se descascara.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={20} />
                <div>
                  <strong className="block text-white">Soldadura MIG Continua</strong>
                  <span className="text-slate-400 text-sm">Evita fisuras estructurales en los puntos de apoyo críticos.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={20} />
                <div>
                  <strong className="block text-white">Topes Poliméricos de Alta Fricción</strong>
                  <span className="text-slate-400 text-sm">Las sillas no resbalan ni rayan el piso de las aulas. Apilables hasta 5 unidades.</span>
                </div>
              </li>
            </ul>
          </div>
          {/* FOTOS DE TALLER / PRODUCCIÓN */}
          <div className="grid grid-cols-2 gap-4">
             <div className="h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 text-sm text-center p-2">Foto Soldadura</div>
             <div className="h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 text-sm text-center p-2">Foto Pintura</div>
             <div className="h-48 bg-slate-800 rounded-lg border border-slate-700 col-span-2 flex items-center justify-center text-slate-500 text-sm text-center p-2">Foto Apilamiento en Aula</div>
          </div>
        </div>
      </section>

      {/* 5. EL COTIZADOR (Embudo Mejorado) */}
      <section id="cotizador" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simulador de Inversión Institucional</h2>
            <p className="text-lg text-slate-600">Calcula tu presupuesto al instante. Los precios se ajustan automáticamente por volumen (30+ unidades).</p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-200">
            
            <div className="space-y-4 mb-8">
              {/* Inputs */}
              {[
                { label: '1er Ciclo (CJA-03/04)', base: PRICE_CICLO_1, val: qtyCiclo1, set: setQtyCiclo1 },
                { label: '2do Ciclo (CJA-04/05)', base: PRICE_CICLO_2, val: qtyCiclo2, set: setQtyCiclo2 },
                { label: '3er Ciclo y Nivel Medio (CJA-05/06)', base: PRICE_CICLO_3, val: qtyCiclo3, set: setQtyCiclo3 }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="font-bold text-slate-800 text-lg">{item.label}</h3>
                    <p className="text-sm text-slate-500 font-medium">Tarifa Minorista: Gs. {item.base.toLocaleString('es-PY')} c/u</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-400">Cantidad:</span>
                    <input 
                      type="number" min="0" 
                      className="w-24 p-3 border-2 border-slate-200 rounded-lg text-center font-bold text-xl focus:border-blue-500 focus:ring-0 transition-colors"
                      value={item.val || ''} 
                      onChange={(e) => item.set(Number(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Upselling Bar Dinámica */}
            <div className="mb-8 min-h-[80px]">
              {calculations.totalQty === 0 ? (
                <div className="bg-slate-100 border border-slate-200 text-slate-500 p-4 rounded-xl text-center flex items-center justify-center gap-2">
                  <Wrench size={20} /> Ingresa la cantidad de alumnos para iniciar la simulación.
                </div>
              ) : !calculations.isBulk ? (
                <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-xl flex items-start gap-4 shadow-inner">
                  <div className="bg-amber-200 p-2 rounded-full shrink-0"><TrendingDown size={20} className="text-amber-700"/></div>
                  <div>
                    <h4 className="font-bold">¡Estás perdiendo el descuento mayorista!</h4>
                    <p className="text-sm mt-1">
                      Te faltan solo <strong>{calculations.unitsToDiscount} conjuntos</strong> para llegar a 30. 
                      Alcanzando la meta, el precio de TODOS los conjuntos se desploma a <strong>Gs. 530.000 c/u</strong>.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl flex items-start gap-4 shadow-inner">
                  <div className="bg-emerald-200 p-2 rounded-full shrink-0"><CheckCircle2 size={20} className="text-emerald-700"/></div>
                  <div>
                    <h4 className="font-bold">¡Tarifa Institucional Desbloqueada!</h4>
                    <p className="text-sm mt-1">Has superado las 30 unidades. Todos tus conjuntos aplican al costo de fábrica de <strong>Gs. 530.000</strong>.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Totales y CTA */}
            <div className="border-t-2 border-slate-100 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <span className="block text-slate-500 font-semibold mb-1 uppercase tracking-wider text-sm">Inversión Total Estimada</span>
                  <div className="text-4xl md:text-5xl font-black text-slate-900">
                    Gs. {calculations.finalTotal.toLocaleString('es-PY')}
                  </div>
                  {calculations.savings > 0 && (
                    <div className="text-emerald-600 font-bold text-md mt-2 flex items-center gap-1">
                      <TrendingDown size={18} /> Has ahorrado Gs. {calculations.savings.toLocaleString('es-PY')}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={handleWhatsApp}
                  disabled={calculations.totalQty === 0}
                  className="w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle size={24} />
                  Solicitar Presupuesto Formal
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES (SEO) */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes Institucionales</h2>
        
        <div className="space-y-4">
          {[
            { q: "¿Hacen entregas a instituciones en todo el país?", a: "Sí, coordinamos logística desde nuestra fábrica en Asunción/Lambaré para proveer a colegios privados e institutos en todo el territorio nacional." },
            { q: "¿Cuánto tiempo dura un pupitre AYC?", a: "Gracias al uso de acero reforzado y pintura termoendurecible, nuestros pupitres superan ampliamente el ciclo de vida de los muebles estándar, eliminando la necesidad de recambio anual." },
            { q: "¿Cómo aplico a la tarifa institucional de 530.000 Gs?", a: "El precio mayorista se activa automáticamente al cotizar 30 unidades o más, sin importar si combinas diferentes tamaños (ej. 15 del ciclo 1 y 15 del ciclo 3)." }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-2"><ArrowRight size={18} className="text-amber-500"/> {faq.q}</h4>
              <p className="text-slate-600 pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
