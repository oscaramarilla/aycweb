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
  // 🔥 NUEVO NÚMERO DE WHATSAPP OSCAR AMARILLA
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Estoy en la web de AYC y busco sistematizar mi negocio.");

  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
        
        {/* NAVEGACIÓN */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-zinc-950/90 border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <Link href="/" className="flex items-center justify-center mt-1 md:mt-0 gap-2">
              <div className="w-8 h-8 relative flex items-center justify-center">
                 <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white italic">AYCweb</span>
            </Link>
            
            {/* 🔥 MENÚ MEJORADO: Nombres claros y orientados a resultados */}
            <nav className="flex items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-sm font-semibold text-zinc-300 w-full md:w-auto pb-1 md:pb-0 flex-wrap">
              <Link href="/servicios" className="hover:text-white transition-colors">Qué hacemos</Link>
              <Link href="/casos" className="hover:text-white transition-colors">Casos de Éxito</Link>
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <Link href="/experiencia" className="hover:text-white transition-colors text-blue-400">Nuestra Autoridad</Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <div className="flex-grow">
          {children}
        </div>

        {/* FOOTER CORPORATIVO CON DATOS LEGALES (RUC) */}
        <footer className="bg-black py-8 border-t border-zinc-900 text-center text-zinc-500 text-xs">
           <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
              <p className="font-bold text-zinc-400">AYCweb - Sistemas Digitales B2B</p>
              <p>Oscar Emigdio Amarilla Caceres | RUC: 4499507-5</p>
              <p>© {new Date().getFullYear()} Todos los derechos reservados. Asunción, Paraguay.</p>
           </div>
        </footer>

        {/* BOTÓN FLOTANTE DE WHATSAPP OSCAR */}
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all z-50 flex items-center justify-center hover:scale-110 active:scale-95 group"
          aria-label="Contactar a Oscar por WhatsApp"
        >
          <span className="absolute -top-10 right-0 bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Hablar con Oscar
          </span>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
