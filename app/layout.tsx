import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image"; // Importamos Image de Next.js para tu futuro logo
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AYC | Automatizaciones Corporativas",
  description: "Construimos máquinas de tiempo y dinero para empresas B2B.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen flex flex-col`}>
        
        {/* NAVEGACIÓN - ENFOQUE MÓVIL (MOBILE-FIRST) */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-zinc-950/90 border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* ESPACIO PARA LOGO (Centrado en móvil, a la izquierda en PC) */}
            <Link href="/" className="flex items-center justify-center mt-1 md:mt-0">
              {/* Opción 1: Logo en texto (Actual) */}
              <span className="font-black text-3xl tracking-tighter text-white">
                AYC<span className="text-blue-500">.</span>
              </span>
              
              {/* Opción 2: Logo en Imagen. 
                  (Cuando tengas tu logo.png en la carpeta 'public', borra el 'span' de arriba y descomenta esta línea) */}
              {/* <Image src="/tu-logo.png" alt="AYC Logo" width={120} height={40} className="object-contain" /> */}
            </Link>
            
            {/* ENLACES DE MENÚ (Visibles siempre, optimizados para celular) */}
            {/* ENLACES DE MENÚ (Visibles siempre, optimizados para celular) */}
            <nav className="flex items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-sm font-semibold text-zinc-300 w-full md:w-auto pb-1 md:pb-0 flex-wrap">
              <Link href="/experiencia" className="hover:text-white transition-colors text-blue-400">Trayectoria B2G</Link>
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <Link href="/casos" className="hover:text-white transition-colors">Casos Reales</Link>
              <Link href="/servicios" className="hover:text-white transition-colors">Sistemas SaaS</Link>
              <Link href="/sectores" className="hover:text-white transition-colors">Industrias</Link>
            </nav>

          </div>
        </header>

        {/* CONTENIDO DINÁMICO DE LAS PÁGINAS */}
        <div className="flex-grow">
          {children}
        </div>

        {/* BOTÓN FLOTANTE DE WHATSAPP GLOBAL (Tu única vía de conversión ahora) */}
        <a 
          href="https://wa.me/595985864209?text=Hola%20equipo%20de%20AYC,%20estoy%20en%20su%20web%20y%20quiero%20sistematizar%20mis%20empresas." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all z-50 flex items-center justify-center hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}

