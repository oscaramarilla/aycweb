"use client";

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, TrendingDown, BookOpen, CheckCircle2, 
  MessageCircle, Download, Wrench, ArrowRight, XCircle, Hammer
} from 'lucide-react';

export default function MobiliarioEscolarFunnel() {
  // Estados para la calculadora
  const [qtyCiclo1, setQtyCiclo1] = useState(0); 
  const [qtyCiclo2, setQtyCiclo2] = useState(0); 
  const [qtyCiclo3, setQtyCiclo3] = useState(0); 

  // Precios base y Mayorista (Lógica B2B)
  const PRICE_CICLO_1 = 760000;
  const PRICE_CICLO_2 = 790000;
  const PRICE_CICLO_3 = 810000;
  const BULK_PRICE = 530000;
  const BULK_THRESHOLD = 30;

  // Motor de Cálculo Automatizado
  const calculations = useMemo(() => {
    const totalQty = qtyCiclo1 + qtyCiclo2 + qtyCiclo3;
    const isBulk = totalQty >= BULK_THRESHOLD;
    
    const standardTotal = (qtyCiclo1 * PRICE_CICLO_1) + (qtyCiclo2 * PRICE_CICLO_2) + (qtyCiclo3 * PRICE_CICLO_3);
    const finalTotal = isBulk ? (totalQty * BULK_PRICE) : standardTotal;
    const savings = standardTotal - finalTotal;
    const unitsToDiscount = isBulk ? 0 : BULK_THRESHOLD - totalQty;

    return { totalQty, isBulk, standardTotal, finalTotal, savings, unitsToDiscount };
  }, [qtyCiclo1, qtyCiclo2, qtyCiclo3]);

  // Redirección a WhatsApp con formato exacto
  const handleWhatsApp = () => {
    const text = `Hola Oscar. Vengo de la web. Quiero equipar mi institución con mobiliario escolar. \n\nCantidades:\n- 1er Ciclo: ${qtyCiclo1}\n- 2do Ciclo: ${qtyCiclo2}\n- 3er Ciclo/Medio: ${qtyCiclo3}\n\nTotal unidades: ${calculations.totalQty}\nCotización estimada: Gs. ${calculations.finalTotal.toLocaleString('es-PY')}`;
    window.open(`https://wa.me/595982855219?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION - Primer Impacto SEO */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/pupitres-escolares-paraguay-aulas-asuncion.jpg" 
            alt="Aulas equipadas con pupitres escolares en Asunción Paraguay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
              Fábrica Directa en Paraguay
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Mobiliario Escolar <span className="text-amber-400">de Alto Rendimiento</span> para Instituciones Exigentes.
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Conjuntos ergonómicos con acero reforzado, diseñados para resistir generaciones. Precio directo de fábrica, desde Lambaré a todo el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#cotizador" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-xl text-center transition-colors text-lg shadow-lg shadow-amber-500/20">
                Cotizar Equipamiento
              </a>
              <a href="/manual-tecnico.pdf" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-semibold py-4 px-8 rounded-xl text-center flex items-center justify-center gap-2 transition-colors">
                <Download size={20} /> Ficha Técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRUEBA SOCIAL - Logos de Colegios */}
      <section className="border-b bg-slate-50 py-12 relative -mt-10 z-10">
        <div className="max-w-6xl mx-auto px-4 bg-white rounded-2xl shadow-lg py-8 border border-slate-100 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Infraestructura elegida por instituciones de alto nivel</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale font-bold text-xl text-slate-300">
            {/* Reemplazar estos textos por imágenes de logos <img src="..." className="h-12 object-contain" /> */}
            <span>COLEGIO CLIENTE 1</span>
            <span>COLEGIO CLIENTE 2</span>
            <span>COLEGIO CLIENTE 3</span>
            <span>+20 AULAS EQUIPADAS</span>
          </div>
        </div>
      </section>

      {/* 3. EL DOLOR DEL CLIENTE - Contraste */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como dueños de colegios, sabemos que el mobiliario sufre.</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">Invertir en conjuntos endebles significa recomprar cada año. Nuestra ingeniería elimina el recambio anual resolviendo los problemas críticos de la infraestructura educativa.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/comparativa-calidad-pupitres-escolares-paraguay.jpg" 
              alt="Comparativa de pupitres de mala calidad vs acero reforzado AYC" 
              className="w-full rounded-2xl shadow-2xl border border-slate-200"
            />
            {/* Etiquetas sobre la imagen para enfatizar el contraste */}
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <XCircle size={14}/> Estándar
            </div>
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <CheckCircle2 size={14}/> Calidad AYC
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-amber-100 p-4 rounded-xl text-amber-700 shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">2 Años de Garantía Real</h3>
                <p className="text-slate-600">Respondemos directamente nosotros. Sin intermediarios, asegurando que tu inversión inicial esté protegida legalmente.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 p-4 rounded-xl text-slate-700 shrink-0">
                <Hammer size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Acero Reforzado</h3>
                <p className="text-slate-600">Chasis tubular que no se dobla, no se agrieta y mantiene su estabilidad frente al balanceo diario de los estudiantes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-700 shrink-0">
                <BookOpen size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Inclusión y Ergonomía</h3>
                <p className="text-slate-600">Alturas adaptadas por ciclo escolar y cumplimiento estricto con las normativas de Mesas Accesibles (MA-02).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EL COTIZADOR INTERACTIVO (El Motor de Ventas B2B) */}
      <section id="cotizador" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simulador de Inversión Institucional</h2>
            <p className="text-lg text-slate-400">Calcula tu presupuesto al instante. Los precios bajan drásticamente al equipar aulas completas.</p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-slate-700 text-slate-900">
            
            <div className="space-y-4 mb-8">
              {/* Input Ciclo 1 */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <img src="/images/sillas-mesas-escolares-primer-ciclo-paraguay.jpg" alt="Pupitre 1er Ciclo" className="w-16 h-16 rounded-lg object-cover border border-slate-300 bg-white" />
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">1er Ciclo (CJA-03/04)</h3>
                    <p className="text-sm text-slate-500 font-medium">Tarifa Minorista: Gs. 760.000 c/u</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-400 uppercase">Cant:</span>
                  <input type="number" min="0" value={qtyCiclo1 || ''} onChange={(e) => setQtyCiclo1(Number(e.target.value))} placeholder="0" className="w-24 p-3 border-2 border-slate-300 rounded-lg text-center font-bold text-xl focus:border-amber-500 focus:ring-0 outline-none" />
                </div>
              </div>

              {/* Input Ciclo 2 */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <img src="/images/pupitre-mediano-educacion-basica-fabricante.jpg" alt="Pupitre 2do Ciclo" className="w-16 h-16 rounded-lg object-cover border border-slate-300 bg-white" />
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">2do Ciclo (CJA-04/05)</h3>
                    <p className="text-sm text-slate-500 font-medium">Tarifa Minorista: Gs. 790.000 c/u</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-400 uppercase">Cant:</span>
                  <input type="number" min="0" value={qtyCiclo2 || ''} onChange={(e) => setQtyCiclo2(Number(e.target.value))} placeholder="0" className="w-24 p-3 border-2 border-slate-300 rounded-lg text-center font-bold text-xl focus:border-amber-500 focus:ring-0 outline-none" />
                </div>
              </div>

              {/* Input Ciclo 3 */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <img src="/images/pupitre-universitario-colegios-paraguay-cja05.jpg" alt="Pupitre 3er Ciclo y Medio" className="w-16 h-16 rounded-lg object-cover border border-slate-300 bg-white" />
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">3er Ciclo y Nivel Medio</h3>
                    <p className="text-sm text-slate-500 font-medium">Tarifa Minorista: Gs. 810.000 c/u</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-400 uppercase">Cant:</span>
                  <input type="number" min="0" value={qtyCiclo3 || ''} onChange={(e) => setQtyCiclo3(Number(e.target.value))} placeholder="0" className="w-24 p-3 border-2 border-slate-300 rounded-lg text-center font-bold text-xl focus:border-amber-500 focus:ring-0 outline-none" />
                </div>
              </div>
            </div>

            {/* BARRA DE UPSELLING PSICOLÓGICO */}
            <div className="mb-8">
              {calculations.totalQty === 0 ? (
                <div className="bg-slate-100 border border-slate-200 text-slate-500 p-4 rounded-xl text-center flex items-center justify-center gap-2">
                  <Wrench size={20} /> Ingresa la cantidad de alumnos para iniciar la simulación.
                </div>
              ) : !calculations.isBulk ? (
                <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-xl flex items-start gap-4 shadow-inner">
                  <div className="bg-amber-200 p-2 rounded-full shrink-0"><TrendingDown size={20} className="text-amber-800"/></div>
                  <div>
                    <h4 className="font-bold text-lg">¡Estás perdiendo el descuento mayorista!</h4>
                    <p className="text-sm mt-1 text-amber-800">
                      Te faltan solo <strong>{calculations.unitsToDiscount} conjuntos</strong> para llegar a 30 unidades. 
                      Alcanzando la meta, el precio de TODOS los conjuntos se desploma a <strong>Gs. 530.000 c/u</strong>.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl flex items-start gap-4 shadow-inner">
                  <div className="bg-emerald-200 p-2 rounded-full shrink-0"><CheckCircle2 size={24} className="text-emerald-700"/></div>
                  <div>
                    <h4 className="font-bold text-lg">¡Tarifa Institucional Desbloqueada!</h4>
                    <p className="text-sm mt-1">Has superado las 30 unidades. Todos tus conjuntos aplican al costo de fábrica de <strong>Gs. 530.000</strong>.</p>
                  </div>
                </div>
              )}
            </div>

            {/* TOTALES Y CTA WHATSAPP */}
            <div className="border-t-2 border-slate-100 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <span className="block text-slate-500 font-bold mb-1 uppercase tracking-wider text-sm">Inversión Total Estimada</span>
                  <div className="text-4xl md:text-5xl font-black text-slate-900">
                    Gs. {calculations.finalTotal.toLocaleString('es-PY')}
                  </div>
                  {calculations.savings > 0 && (
                    <div className="text-emerald-600 font-bold text-md mt-2 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full inline-flex border border-emerald-200">
                      <TrendingDown size={18} /> Has ahorrado Gs. {calculations.savings.toLocaleString('es-PY')}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={handleWhatsApp}
                  disabled={calculations.totalQty === 0}
                  className="w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle size={24} />
                  Solicitar Presupuesto Formal
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ESPECIFICACIONES TÉCNICAS */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fabricación: Materiales que marcan la diferencia.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">No somos revendedores, somos industriales. Nuestro mobiliario no requiere recambio anual porque está fabricado con especificaciones técnicas superiores.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
            <img src="/images/estructura-acero-pupitres-reforzados-metal-mad.jpg" alt="Soldadura MIG en estructuras de acero" className="w-full h-48 object-cover bg-slate-200" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><CheckCircle2 className="text-amber-500" size={20}/> Soldadura MIG Continua</h3>
              <p className="text-slate-600 text-sm">Chasis tubular ensamblado sin puntos débiles. Evita fisuras estructurales en las bases de apoyo críticas.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
            <img src="/images/fabrica-mobiliario-escolar-pintura-epoxi-lambare.jpg" alt="Pintura electroestática epoxi horneada" className="w-full h-48 object-cover bg-slate-200" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><CheckCircle2 className="text-amber-500" size={20}/> Pintura Epoxi a 180°C</h3>
              <p className="text-slate-600 text-sm">Recubrimiento electroestático horneado que resiste rayones profundos, solventes de limpieza y nunca se descascara.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
            {/* Si no tienes una 3ra imagen, este diseño sin foto también funciona perfecto para balancear */}
            <div className="h-48 bg-slate-900 flex items-center justify-center text-white p-6 text-center flex-col gap-4">
               <BookOpen size={48} className="text-amber-500" />
               <span className="font-bold text-lg">Cumplimiento MA-02</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><CheckCircle2 className="text-amber-500" size={20}/> Normas de Inclusión</h3>
              <p className="text-slate-600 text-sm">Cada lote de producción garantiza la disponibilidad de Mesas Accesibles (MA-02) para usuarios en silla de ruedas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES (SEO Long-Tail) */}
      <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Preguntas Frecuentes Institucionales</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
              <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-slate-800">
                <ArrowRight size={20} className="text-amber-500 shrink-0"/> 
                ¿Hacen entregas de pupitres escolares en todo Paraguay?
              </h4>
              <p className="text-slate-600 pl-8 leading-relaxed">
                Sí, coordinamos logística directamente desde nuestra fábrica en Lambaré para proveer a colegios privados, universidades e institutos en todo el territorio nacional, asegurando que el producto llegue intacto a su institución.
              </p>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
              <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-slate-800">
                <ArrowRight size={20} className="text-amber-500 shrink-0"/> 
                ¿Qué incluye exactamente la garantía de 2 años?
              </h4>
              <p className="text-slate-600 pl-8 leading-relaxed">
                Cubre fallas crónicas de manufactura: desprendimientos de soldadura, piezas flojas de origen o pintura que presente defectos. Al ser industria nacional, no dependes de importadores; nosotros respondemos de manera directa e inmediata.
              </p>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
              <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-slate-800">
                <ArrowRight size={20} className="text-amber-500 shrink-0"/> 
                ¿Cómo aplico a la tarifa institucional mayorista?
              </h4>
              <p className="text-slate-600 pl-8 leading-relaxed">
                El precio mayorista de Gs. 530.000 se activa de forma automática en el cotizador al alcanzar o superar los 30 conjuntos. Lo mejor es que puedes combinar diferentes tamaños (por ejemplo, 15 conjuntos del ciclo primario y 15 conjuntos del nivel medio) para llegar al cupo.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
