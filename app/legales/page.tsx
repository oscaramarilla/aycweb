'use client'
import React, { useState } from 'react';

export default function GeneradorContrato() {
  // Estados para los campos dinámicos del formulario
  const [empresa, setEmpresa] = useState('[NOMBRE DE LA EMPRESA]');
  const [ruc, setRuc] = useState('[RUC]');
  const [direccion, setDireccion] = useState('[DIRECCIÓN]');
  const [servicio, setServicio] = useState('Pack Digital Express');
  const [precio, setPrecio] = useState('1.500.000');
  const [anticipo, setAnticipo] = useState('750.000');

  // Función simulada para generar PDF y enviar por WhatsApp
  const handleGenerarPDF = () => {
    alert('Lógica para exportar el div #documento-contrato a PDF (ej. html2pdf o jspdf)');
  };

  const handleEnviarWhatsApp = () => {
    const mensaje = `Hola Oscar, aquí te envío el comprobante del anticipo para iniciar el ${servicio}.`;
    window.open(`https://wa.me/595XXXXXXXXX?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans">
      
      {/* PANEL IZQUIERDO - FORMULARIO Y ONBOARDING */}
      <div className="w-1/3 p-6 border-r border-gray-700 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">AYC.</h2>
          
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-blue-400 font-semibold mb-1">RUC / DOCUMENTO</label>
              <input 
                type="text" 
                placeholder="Ej: 80012345-6" 
                className="w-full p-2 bg-gray-800 rounded border border-gray-600 focus:border-blue-500 outline-none"
                onChange={(e) => setRuc(e.target.value || '[RUC]')}
              />
            </div>
            <div>
              <label className="block text-xs text-blue-400 font-semibold mb-1">NOMBRE DE LA EMPRESA / CLIENTE</label>
              <input 
                type="text" 
                placeholder="Ej: Empresa S.A." 
                className="w-full p-2 bg-gray-800 rounded border border-gray-600 focus:border-blue-500 outline-none"
                onChange={(e) => setEmpresa(e.target.value || '[NOMBRE DE LA EMPRESA]')}
              />
            </div>
            <div>
              <label className="block text-xs text-blue-400 font-semibold mb-1">DIRECCIÓN FÍSICA</label>
              <input 
                type="text" 
                placeholder="Ej: Av. Principal 123, Asunción" 
                className="w-full p-2 bg-gray-800 rounded border border-gray-600 focus:border-blue-500 outline-none"
                onChange={(e) => setDireccion(e.target.value || '[DIRECCIÓN]')}
              />
            </div>
            <div>
              <label className="block text-xs text-blue-400 font-semibold mb-1">SERVICIO A CONTRATAR</label>
              <select 
                className="w-full p-2 bg-gray-800 rounded border border-gray-600 focus:border-blue-500 outline-none"
                onChange={(e) => {
                  setServicio(e.target.options[e.target.selectedIndex].text);
                  // Aquí puedes agregar lógica para cambiar el precio según la opción
                }}
              >
                <option value="express">Pack Digital Express (Gs. 1.500.000)</option>
                <option value="pro">Pack Digital Pro (Gs. 3.000.000)</option>
              </select>
            </div>
          </div>
        </div>

        {/* ONBOARDING ÁGIL MEJORADO */}
        <div className="bg-gray-800 p-5 rounded-lg border border-blue-900">
          <h3 className="text-yellow-500 font-semibold mb-3">Siguientes Pasos (Onboarding Ágil)</h3>
          <ol className="text-sm text-gray-300 flex flex-col gap-2 list-decimal pl-4">
            <li>Haz clic en <strong>"Generar y Descargar PDF"</strong>.</li>
            <li>Realiza la transferencia del <strong>50% de anticipo (Gs. {anticipo})</strong> a la cuenta asignada.</li>
            <li>Envíanos el PDF y el comprobante de transferencia por WhatsApp.</li>
            <li className="text-blue-400 font-semibold">¡Listo! La recepción del anticipo valida este documento y activa tu proyecto en nuestro cronograma.</li>
          </ol>
          
          <div className="mt-5 flex flex-col gap-3">
            <button 
              onClick={handleGenerarPDF}
              className="w-full bg-white text-gray-900 font-bold py-2 rounded flex justify-center items-center gap-2 hover:bg-gray-200 transition"
            >
              🖨️ Generar y Descargar PDF
            </button>
            <button 
              onClick={handleEnviarWhatsApp}
              className="w-full bg-blue-600 text-white font-bold py-2 rounded flex justify-center items-center gap-2 hover:bg-blue-700 transition"
            >
              💬 Enviar Comprobante por WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* PANEL DERECHO - PREVISUALIZACIÓN DEL CONTRATO */}
      <div className="w-2/3 bg-gray-200 p-8 overflow-y-auto flex justify-center">
        {/* Contenedor tipo "Hoja A4" */}
        <div id="documento-contrato" className="bg-white text-black p-10 max-w-2xl shadow-lg text-sm leading-relaxed">
          <h1 className="text-center font-bold text-lg mb-6 underline">CONTRATO DE PRESTACIÓN DE SERVICIOS DIGITALES (SOW)</h1>
          
          <p className="mb-4 font-bold">REUNIDOS:</p>
          <p className="mb-2">De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.</p>
          <p className="mb-6">De otra parte, <strong>{empresa}</strong>, con RUC <strong>{ruc}</strong> y domicilio en <strong>{direccion}</strong> (en adelante "El Cliente").</p>

          <p className="font-bold mb-1">PRIMERA: OBJETO Y ALCANCE</p>
          <p className="mb-4 text-justify">
            AYCweb se compromete al desarrollo y despliegue del sistema: <strong>{servicio}</strong>. El alcance estricto de este servicio, sus características y revisiones permitidas se rigen por la descripción oficial del plan vigente. Toda funcionalidad adicional será presupuestada por separado mediante un control de cambios.
          </p>

          <p className="font-bold mb-1">SEGUNDA: INVERSIÓN Y FORMA DE PAGO</p>
          <p className="mb-2">La inversión total para el desarrollo es de <strong>Gs. {precio}</strong>. El pago se estructura así:</p>
          <ul className="list-decimal pl-5 mb-4 text-justify">
            <li className="mb-1"><strong>Anticipo (50%):</strong> La suma de <strong>Gs. {anticipo}</strong> abonada a la firma para agendar el inicio del proyecto. Este monto asegura el espacio en el calendario de producción y no es reembolsable en caso de cancelación por parte del Cliente.</li>
            <li><strong>Saldo (50%):</strong> El remanente de <strong>Gs. {anticipo}</strong> a ser cancelado contra la entrega y notificación de finalización para la puesta en producción.</li>
          </ul>

          <p className="font-bold mb-1">TERCERA: RESPONSABILIDADES Y TIEMPOS</p>
          <p className="mb-4 text-justify">
            El Cliente se compromete a entregar los accesos, textos, logotipos y aprobaciones en los tiempos requeridos. Si el Cliente demora más de <strong>15 días</strong> en proveer el material necesario o feedback, AYCweb podrá pausar el proyecto o dar por finalizado el hito, habilitando el cobro del saldo por el trabajo ya ejecutado.
          </p>

          <p className="font-bold mb-1">CUARTA: CONDICIONES LEGALES Y DE FIRMA</p>
          <p className="mb-8 text-justify">
            Al realizar el pago del anticipo o remitir este documento, El Cliente declara haber leído y aceptado los <strong>Términos Generales de Contratación</strong> disponibles en <em>aycweb.com/contrato</em>, los cuales forman parte integral de este acuerdo (regulando Propiedad Intelectual, Ley 7593/2025 de Datos Personales, y responsabilidades). El presente acuerdo se perfecciona mediante la confirmación por escrito (WhatsApp/Email) acompañada del comprobante de transferencia del anticipo.
          </p>

          {/* Área de firmas (Más visual que funcional gracias a la nueva redacción) */}
          <div className="flex justify-between mt-12 pt-8">
            <div className="w-[45%] border-t border-black text-center pt-2">
              <p className="font-bold">Oscar Emigdio Amarilla</p>
              <p className="text-xs text-gray-600">AYCweb.com</p>
            </div>
            <div className="w-[45%] border-t border-black text-center pt-2">
              <p className="font-bold">{empresa === '[NOMBRE DE LA EMPRESA]' ? '[FIRMA CLIENTE]' : empresa}</p>
              <p className="text-xs text-gray-600">Representante Legal / Titular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
