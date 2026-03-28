import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AYCweb Paraguay - Desarrollo Web PRO & Automatización B2B",
    template: "%s | AYCweb E.A.S.",
  },
  description: "Transformamos negocios manuales en máquinas de ventas digitales automáticas en Paraguay. Oscar Amarilla - RUC 4499507-5.",
  keywords: ["desarrollo web paraguay", "automatización B2B paraguay", "seo paraguay"],
  authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Estoy en la web de AYC y busco sistematizar mi negocio.");

  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-zinc-950 text-zinc-50 min-h-screen flex flex-col font-sans">
        
        {/* 🛑 NAVEGACIÓN GLOBAL UNIFICADA Y DEFINITIVA */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-105">
                 {/* Asegúrate de tener public/logo-ayc.webp */}
                 <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white italic">AYCweb</span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-bold text-zinc-400">
              <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <Link href="/sectores" className="hover:text-white transition-colors">Sectores</Link>
              <Link href="/casos" className="hover:text-white transition-colors">Casos</Link>
              <Link href="/experiencia" className="hover:text-white transition-colors">Experiencia</Link>
            </nav>

            <div className="hidden md:block">
               <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black px-5 py-2.5 rounded-lg transition-colors shadow-sm"
               >
                 Agendar Diagnóstico
               </a>
            </div>

          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER CORPORATIVO */}
        <footer className="bg-black py-10 border-t border-zinc-900 text-center text-zinc-500 text-xs">
           <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-3">
              <div className="w-6 h-6 relative opacity-50 grayscale mb-2">
                 <Image src="/logo-ayc.webp" alt="AYCweb Logo" fill className="object-contain" />
              </div>
              <p className="font-bold text-zinc-400 text-sm">AYCweb - Sistemas Digitales B2B</p>
              <p>Oscar Emigdio Amarilla Caceres | RUC: 4499507-5</p>
              <p>© {new Date().getFullYear()} Todos los derechos reservados. Asunción, Paraguay.</p>
           </div>
        </footer>

        {/* BOTÓN FLOTANTE WHATSAPP (Solo el ícono verde de conversión) */}
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all z-50 flex items-center justify-center hover:scale-110 active:scale-95 group"
          aria-label="Contactar a Oscar por WhatsApp"
        >
          <span className="absolute -top-10 right-0 bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Hablar con Oscar
          </span>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
