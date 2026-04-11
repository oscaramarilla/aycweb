import Image from "next/image";
import Link from "next/link";
import { AYCWEB_CONTACT } from "@/lib/config/contact";
import BottomNavbar from "@/components/BottomNavbar"; // IMPORTAR EL NUEVO COMPONENTE

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsg = encodeURIComponent(AYCWEB_CONTACT.globalMessages.generalInquiry);

  return (
    <>
      
      {/* Añadimos padding bottom solo en móvil para que el BottomNavbar no tape contenido */}
      <main className="flex-grow pt-20 pb-20 md:pb-0">{children}</main>

      {/* FOOTER - Se mantiene igual pero con z-index controlado */}
      <footer className="bg-slate-950 py-10 border-t border-slate-800/50 text-center text-slate-500 text-xs relative z-10 mb-16 md:mb-0">
         {/* ... (contenido del footer que ya tenías) ... */}
         <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-3">
            <div className="w-6 h-6 relative opacity-30 grayscale mb-2">
               <Image src="/logo-ayc.webp" alt="AYCweb Logo" fill className="object-contain" />
            </div>
            <p className="font-bold text-slate-400 text-sm">AYCweb - Sistemas Digitales B2B</p>
            <p>Oscar Emigdio Amarilla Caceres | RUC: 4499507-5</p>
            <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
         </div>
      </footer>

      {/* EL NUEVO BOTÓN DE NAVEGACIÓN MÓVIL */}
      <BottomNavbar />

      {/* Botón Flotante WhatsApp - Lo subimos un poco para que no choque con el BottomNavbar */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all z-40 md:bottom-8 hover:scale-110 active:scale-95 group md:z-50"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      </a>
    </>
  );
}
