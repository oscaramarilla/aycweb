import Image from "next/image";
import Link from "next/link";

// === COMPONENTES PEQUEÑOS ===

// Icono SVG de WhatsApp
const WpIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

// Icono SVG de Instagram
const IgIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Un botón de WhatsApp reutilizable con estilo dental
const WhatsAppButton = ({ text = "AGENDA TU EVALUACIÓN POR WHATSAPP" }: { text?: string }) => (
  <Link 
    href="https://wa.me/5959XXXXXXXX?text=Hola%20Dra.%20Bianca,%20vengo%20de%20la%20web%20y%20quiero%20mejorar%20mi%20sonrisa."
    target="_blank"
    className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-full font-sans font-semibold text-lg hover:bg-emerald-800 transition-colors shadow-md"
  >
    <WpIcon className="w-6 h-6" />
    {text}
  </Link>
);

// El botón flotante inteligente que aparece en la esquina
const FloatingWhatsApp = () => (
  <Link 
    href="https://wa.me/5959XXXXXXXX?text=Hola%20Dra.%20Bianca,%20vengo%20de%20la%20web%20y%20quiero%20mejorar%20mi%20sonrisa."
    target="_blank"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <WpIcon className="w-8 h-8" />
  </Link>
);

// === LANDING PAGE PRINCIPAL ===

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <FloatingWhatsApp />
      
      {/* 1. HERO SECTION: EL IMPACTO VISUAL (Estilo Apa) */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Capa oscura para legibilidad */}
        <div className="relative z-20 max-w-4xl px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            BIANCA AMARILLA. <br/><span className="text-amber-500">DISEÑADORA DE SONRISAS.</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90">
            Transformamos tu confianza, un detalle a la vez. En Lambaré, Paraguay.
          </p>
          <div className="pt-8">
            <WhatsAppButton text="QUIERO MEJORAR MI SONRISA" />
          </div>
        </div>
      </section>

      {/* 2. SOBRE MÍ: HUMANIZACIÓN */}
      <section id="sobre-mi" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-200 flex items-center justify-center">
             {/* Placeholder para la imagen: Reemplazar después con <Image /> de next */}
             <span className="text-slate-500">Aquí irá la foto de Bianca</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800">
              TU BIENESTAR ES MI PASIÓN
            </h2>
            <p className="font-sans text-lg text-slate-700 leading-relaxed">
              Entendemos que tu sonrisa es tu mejor carta de presentación. Mi enfoque en Lambaré es crear una experiencia dental suave, libre de ansiedad, diseñada para resaltar tu belleza natural con la última tecnología. No solo curamos, elevamos.
            </p>
            <p className="font-sans text-lg text-slate-700 leading-relaxed">
              Como odontóloga recién graduada, traigo la frescura y la pasión para construir una "familia dental". Mi compromiso es ofrecerte un diseño de sonrisa personalizado que se adapte a tu estilo de vida.
            </p>
            <div className="pt-6">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS DESTACADOS: 'WANT-BASED' */}
      <section id="servicios" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800">
              DISEÑO DENTAL AVANZADO
            </h2>
            <p className="font-sans text-lg text-slate-600">
              Servicios pensados para tu estética y confianza, alejados del dolor.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 space-y-4 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-800">Diseño de Sonrisa</h3>
              <p className="font-sans text-slate-600 leading-relaxed">Un plan personalizado para equilibrar la estética de tus dientes con la forma de tu rostro.</p>
            </div>
            {/* Servicio 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 space-y-4 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-800">Blanqueamiento</h3>
              <p className="font-sans text-slate-600 leading-relaxed">Resalta el brillo natural de tu sonrisa de forma segura y eficaz, sin sensibilidad.</p>
            </div>
            {/* Servicio 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 space-y-4 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-800">Carillas de Porcelana</h3>
              <p className="font-sans text-slate-600 leading-relaxed">La solución de élite para corregir imperfecciones y lograr la sonrisa de tus sueños.</p>
            </div>
          </div>
          <div className="text-center pt-8">
            <WhatsAppButton text="MÁS INFORMACIÓN DE SERVICIOS" />
          </div>
        </div>
      </section>

      {/* 4. PRUEBA SOCIAL: TESTIMONIOS */}
      <section id="testimonios" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800">
              SONRISAS QUE CUENTAN HISTORIAS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Testimonio 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <p className="font-sans text-slate-600 italic leading-relaxed">"¡Bianca me devolvió la confianza! El blanqueamiento fue súper rápido y el resultado increíble. ¡Mi sonrisa brilla más que nunca!"</p>
              <p className="font-sans font-semibold text-amber-600">– María González, Asunción</p>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <p className="font-sans text-slate-600 italic leading-relaxed">"Me encantó la atención de la Dra. Bianca. Es súper profesional y suave. ¡Recomiendo totalmente el diseño de sonrisa!"</p>
              <p className="font-sans font-semibold text-amber-600">– Carlos Benítez, Lambaré</p>
            </div>
            {/* Testimonio 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <p className="font-sans text-slate-600 italic leading-relaxed">"¡Por fin una odontóloga que me entiende! Me hice carillas de porcelana con Bianca y el resultado superó mis expectativas."</p>
              <p className="font-sans font-semibold text-amber-600">– Sofía Pérez, Limpio</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER: DATOS LOCALES Y CONTACTO */}
      <footer className="py-12 px-4 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">DRA. BIANCA AMARILLA</h4>
            <p className="font-sans text-emerald-100">Diseño de sonrisas personalizado.</p>
          </div>
          <div className="space-y-4">
            <p className="font-sans text-emerald-100">📍 Lambaré, Paraguay.</p>
            <p className="font-sans text-emerald-100">📞 (+595) 9XX XXX XXX</p>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-6 text-emerald-100">
            <Link href="https://www.instagram.com/biancaamarilla?igsh=cW45anFsaTY1YW1m" target="_blank" className="hover:text-white transition-colors">
              <IgIcon className="w-8 h-8" />
            </Link>
            <Link href="https://wa.me/5959XXXXXXXX?text=Hola%20Dra.%20Bianca,%20vengo%20de%20la%20web%20y%20quiero%20mejorar%20mi%20sonrisa." target="_blank" className="hover:text-white transition-colors">
              <WpIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
