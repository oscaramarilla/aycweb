"use client";

import React, { useState } from 'react';

export default function GeneradorContrato() {
  // Estados para guardar los datos del cliente en tiempo real
  const [datos, setDatos] = useState({
    empresa: '',
    ruc: '',
    direccion: '',
    representante: '',
    servicio: 'Pack Digital Express',
  });

  const [generando, setGenerando] = useState(false);

  // Lógica de precios según el servicio seleccionado
  const planes = {
    "Pack Digital Express": { precio: "1.500.000", anticipo: "750.000", saldo: "750.000" },
    "Automatización Empresarial": { precio: "4.500.000", anticipo: "2.250.000", saldo: "2.250.000" },
    "Motor de Cotizaciones PRO": { precio: "8.000.000", anticipo: "4.000.000", saldo: "4.000.000" }
  };

  const planSeleccionado = planes[datos.servicio as keyof typeof planes];

  // 🔥 FUNCIÓN INFALIBLE BLINDADA (Fuerza descarga directa y pasa el filtro de TypeScript)
  const generarPDF = async () => {
    setGenerando(true);
    try {
      // Importación dinámica para evitar errores de SSR en Next.js
      const html2pdf = (await import('html2pdf.js')).default;
      
      const elemento = document.getElementById('vista-pdf-oculta');
      
      // 🛡️ BLINDAJE 1: Validamos que el elemento exista para que TS no llore (HTMLElement | null)
      if (!elemento) {
        alert("Error: No se pudo cargar la vista del documento.");
        setGenerando(false);
        return;
      }

      const nombreArchivo = `Contrato_SOW_${datos.empresa ? datos.empresa.replace(/\s+/g, '_') : 'AYCweb'}.pdf`;

      // 🛡️ BLINDAJE 2: Tipo "any" para que TS apruebe los formatos exactos
      const opciones: any = {
        margin:       10,
        filename:     nombreArchivo,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Esto fuerza la descarga en móviles y PCs directo a la carpeta de descargas
      await html2pdf().set(opciones).from(elemento).save();
      
    } catch (error) {
      console.error("Error generando PDF:", error);
      alert("Hubo un error al generar el documento. Intenta nuevamente.");
    } finally {
      setGenerando(false);
    }
  };

  // Link de WhatsApp dinámico
  const empresaNombre = datos.empresa || 'mi empresa';
  const whatsappLink = `https://wa.me/595985864209?text=${encodeURIComponent(`Hola Oscar, ya generé el contrato por el ${datos.servicio} para ${empresaNombre}. Te paso el comprobante del anticipo para agendar el inicio del proyecto.`)}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ==========================================
          VISTA WEB PRINCIPAL (Lo que ve el usuario)
          ========================================== */}
      <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Columna Izquierda (FORMULARIO) */}
        <div className="w-full lg:w-2/5 order-2 lg:order-1 space-y-8">
          
          <div>
            <h1 className="text-4xl font-black text-white mb-4">Generador de SOW</h1>
            <p className="text-zinc-400 mb-8">Completa los datos corporativos. El contrato se actualizará en tiempo real. Descárgalo en PDF y envíanos el comprobante.</p>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-4 mb-8 shadow-lg">
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Nombre de la Empresa o Cliente</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ej: Metalúrgica del Sur S.A." onChange={e => setDatos({...datos, empresa: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-blue-400 uppercase mb-1">RUC</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ej: 80012345-6" onChange={e => setDatos({...datos, ruc: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Representante Legal</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Nombre de quien firma" onChange={e => setDatos({...datos, representante: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Dirección Física</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Ej: Av. Principal 123, Asunción" onChange={e => setDatos({...datos, direccion: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Servicio a Contratar</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-colors cursor-pointer" onChange={e => setDatos({...datos, servicio: e.target.value})}>
                  <option value="Pack Digital Express">Pack Digital Express (Gs. 1.500.000)</option>
                  <option value="Automatización Empresarial">Automatización Empresarial (Gs. 4.500.000)</option>
                  <option value="Motor de Cotizaciones PRO">Motor de Cotizaciones PRO (Gs. 8.000.000)</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl shadow-inner">
              <h3 className="text-white font-bold mb-4">Siguientes Pasos (Onboarding Ágil)</h3>
              <ol className="list-decimal pl-4 space-y-3 text-sm text-zinc-300">
                <li>Haz clic en <strong>"Generar y Descargar PDF"</strong>.</li>
                <li>Realiza la transferencia del <strong>50% de anticipo (Gs. {planSeleccionado.anticipo})</strong> a la cuenta asignada.</li>
                <li>Envíanos el PDF descargado y el comprobante por WhatsApp.</li>
                <li className="text-blue-400 font-bold">¡Listo! La recepción del anticipo valida el documento y activa tu proyecto.</li>
              </ol>
              
              <div className="mt-6 flex flex-col gap-3">
                <button 
                  onClick={generarPDF} 
                  disabled={generando}
                  className="w-full bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed font-black py-4 rounded-xl shadow-xl transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                  {generando ? "⏳ Generando documento..." : "🖨️ Generar y Descargar PDF"}
                </button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl text-center shadow-lg transition-all active:scale-95">
                  💬 Enviar Comprobante por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha (VISTA PREVIA EN WEB) */}
        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          <div className="sticky top-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-blue-400 font-bold text-sm tracking-wide uppercase">Previsualización del Contrato</p>
            </div>
            
            <div className="bg-white text-black p-6 sm:p-10 font-serif rounded-xl shadow-2xl border border-zinc-800 max-h-[800px] overflow-y-auto">
              <div className="border-b-2 border-zinc-300 pb-4 mb-6 text-center">
                <h1 className="text-xl sm:text-2xl font-black">AYCweb.com</h1>
                <p className="text-xs sm:text-sm font-sans text-zinc-600 font-bold tracking-widest uppercase mt-1">Automatizaciones Corporativas</p>
                <p className="text-xs mt-2 text-zinc-500">Titular: Oscar Emigdio Amarilla Cáceres - RUC: 4499507-5</p>
              </div>

              <h2 className="text-lg font-bold text-center mb-6 uppercase underline">
                Orden de Servicio Digital (SOW)
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-justify leading-relaxed">
                <p>
                  <strong>REUNIDOS:</strong><br/>
                  De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.<br/>
                  De otra parte, <strong className="bg-yellow-100">{datos.empresa || '[NOMBRE DE LA EMPRESA]'}</strong>, con RUC <strong className="bg-yellow-100">{datos.ruc || '[RUC]'}</strong> y domicilio en <strong className="bg-yellow-100">{datos.direccion || '[DIRECCIÓN]'}</strong> (en adelante "El Cliente").
                </p>

                <p>
                  <strong>PRIMERA: OBJETO Y ALCANCE</strong><br/>
                  AYCweb se compromete al desarrollo y despliegue del sistema: <strong className="bg-yellow-100 text-blue-800">{datos.servicio}</strong>. El alcance estricto de este servicio se rige por la descripción oficial del plan vigente. Toda funcionalidad adicional será presupuestada por separado mediante un control de cambios.
                </p>

                <p>
                  <strong>SEGUNDA: INVERSIÓN Y FORMA DE PAGO</strong><br/>
                  La inversión total para el desarrollo es de <strong>Gs. {planSeleccionado.precio}</strong>. El pago se estructura así:<br/>
                  1. <strong>Anticipo (50%):</strong> La suma de <strong>Gs. {planSeleccionado.anticipo}</strong> abonada para asegurar el espacio en el calendario de producción.<br/>
                  2. <strong>Saldo (50%):</strong> El remanente de <strong>Gs. {planSeleccionado.saldo}</strong> a ser cancelado contra la notificación de finalización para la puesta en producción.
                </p>

                <p>
                  <strong>TERCERA: RESPONSABILIDADES Y DEMORAS</strong><br/>
                  El Cliente se compromete a entregar los accesos, textos y aprobaciones a tiempo. Si El Cliente demora más de <strong>15 días</strong> en proveer el material necesario, AYCweb podrá pausar el proyecto o dar por finalizado el hito, habilitando el cobro del saldo por el trabajo ya ejecutado.
                </p>

                <p>
                  <strong>CUARTA: CONDICIONES LEGALES DE CONTRATACIÓN</strong><br/>
                  Al realizar el pago del anticipo o remitir este documento, El Cliente declara haber leído y aceptado los <strong>Términos Generales de Contratación</strong> disponibles en <em>aycweb.com/contrato</em>, los cuales regulan la Propiedad Intelectual, la Ley 7593/2025 de Protección de Datos Personales y limitación de responsabilidad. El acuerdo se perfecciona mediante la confirmación por escrito acompañada del comprobante de transferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          VISTA OCULTA EXCLUSIVA PARA EL PDF
          (Esto es lo que captura html2pdf y lo baja al celular)
          ========================================== */}
      <div className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none">
        <div id="vista-pdf-oculta" className="bg-white text-black p-10 font-serif w-[800px] mx-auto">
          <div className="border-b-2 border-zinc-300 pb-4 mb-8 text-center">
            <h1 className="text-2xl font-black">AYCweb.com | Automatizaciones Corporativas</h1>
            <p className="text-sm">Titular: Oscar Emigdio Amarilla Cáceres - RUC: 4499507-5</p>
            <p className="text-sm">Cel: +595 985 864209 | Lambaré, Paraguay</p>
          </div>

          <h2 className="text-xl font-bold text-center mb-8 uppercase underline">
            Orden de Prestación de Servicios Digitales (SOW)
          </h2>

          <div className="space-y-6 text-justify leading-relaxed">
            <p>
              <strong>REUNIDOS:</strong><br/>
              De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.<br/>
              De otra parte, <strong>{datos.empresa || '_________________________'}</strong>, con RUC <strong>{datos.ruc || '_________________'}</strong> y domicilio en <strong>{datos.direccion || '_________________________'}</strong> (en adelante "El Cliente"), representada en este acto por <strong>{datos.representante || '_________________________'}</strong>.
            </p>

            <p>
              <strong>PRIMERA: OBJETO Y ALCANCE</strong><br/>
              AYCweb se compromete al desarrollo y despliegue del sistema: <strong>{datos.servicio}</strong>. El alcance estricto de este servicio, sus características y revisiones permitidas se rigen por la descripción oficial del plan vigente. Toda funcionalidad adicional será presupuestada por separado mediante un control de cambios por escrito.
            </p>

            <p>
              <strong>SEGUNDA: INVERSIÓN Y FORMA DE PAGO</strong><br/>
              La inversión total para el desarrollo es de <strong>Gs. {planSeleccionado.precio}</strong>. El pago se estructura así:<br/>
              1. <strong>Anticipo (50%):</strong> La suma de <strong>Gs. {planSeleccionado.anticipo}</strong> abonada a la firma para agendar el inicio del proyecto. Este monto asegura el espacio en el calendario de producción y no es reembolsable en caso de cancelación por parte del Cliente.<br/>
              2. <strong>Saldo (50%):</strong> El remanente de <strong>Gs. {planSeleccionado.saldo}</strong> a ser cancelado contra la entrega y notificación de finalización para la puesta en producción.
            </p>

            <p>
              <strong>TERCERA: RESPONSABILIDADES Y DEMORAS DEL CLIENTE</strong><br/>
              El Cliente se compromete a entregar los accesos, textos, logotipos y aprobaciones en los tiempos requeridos. Si El Cliente demora más de <strong>15 días</strong> en proveer el material o feedback necesario para avanzar, AYCweb tendrá el derecho de pausar el proyecto o dar por finalizado el hito, habilitando el cobro del saldo por el trabajo ya ejecutado hasta la fecha.
            </p>

            <p>
              <strong>CUARTA: CONDICIONES LEGALES Y MARCO REGULATORIO</strong><br/>
              Al realizar el pago del anticipo o remitir este documento, El Cliente declara haber leído y aceptado los <strong>Términos Generales de Contratación</strong> (Contrato Marco - MSA) disponibles en <em>www.aycweb.com/contrato</em>, los cuales forman parte integral e inseparable de este acuerdo. Dichos términos regulan el licenciamiento y Propiedad Intelectual, la aplicación de la Ley 7593/2025 de Protección de Datos Personales, y los límites de responsabilidad. El presente acuerdo se perfecciona mediante la confirmación por escrito acompañada del comprobante de transferencia bancaria del anticipo.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-20 text-center">
            <div>
              <div className="border-b border-black mb-2"></div>
              <p className="font-bold">Oscar Emigdio Amarilla C.</p>
              <p className="text-sm">AYCweb.com | RUC: 4499507-5</p>
            </div>
            <div>
              <div className="border-b border-black mb-2"></div>
              <p className="font-bold">{datos.representante || 'Firma de El Cliente'}</p>
              <p className="text-sm">{datos.empresa || 'Representante Legal'}</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
