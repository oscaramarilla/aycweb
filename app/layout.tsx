import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

// Configuración de Fuente Profesional Optimizada
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 🧠 EL CEREBRO SEO TÉCNICO B2B PARAGUAY
export const metadata: Metadata = {
  title: {
    default: "AYCweb Paraguay - Desarrollo Web PRO & Automatización B2B",
    template: "%s | AYCweb E.A.S.",
  },
  description: "Transformamos negocios manuales en máquinas de ventas digitales automáticas en Paraguay. Sistemas web de alto rendimiento, PageSpeed 99/100, SEO Técnico y Copyrighting B2B. Garantía de Resultados 100%.",
  keywords: ["desarrollo web paraguay", "automatización B2B paraguay", "seo paraguay", "nextjs paraguay", "landing page asuncion", "aycweb oscar amarilla"],
  authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
  creator: "AYCweb E.A.S.",
  publisher: "AYCweb E.A.S.",
  
  openGraph: {
    title: "AYCweb - Ecosistemas Digitales PRO en Paraguay",
    description: "Sistemas web de alto rendimiento y automatización B2B. Dejá de trabajar en manual y escalá tu facturación.",
    url: "https://aycweb.com",
    siteName: "AYCweb E.A.S.",
    images: [
      {
        url: "/og-image.webp", // Asegurate de tener esta imagen en /public
        width: 1200,
        height: 630,
        alt: "AYCweb Paraguay Desarrollo Web PRO",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "AYCweb Paraguay - Automatización B2B PRO",
    description: "Sistemas web Next.js ultra-rápidos para empresas serias en Paraguay.",
    images: ["/og-image.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b", // zinc-950
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Número actualizado y mensaje corporativo para el botón global
  const whatsappNumber = "595982451828";
  const whatsappMsg = encodeURIComponent("¡Hola equipo de AYC! Estoy en su web y quiero sistematizar mis empresas.");

  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
        
        {/* NAVEGACIÓN - ENFOQUE MÓVIL (MOBILE-FIRST) */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-zinc-950/90 border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* ESPACIO PARA LOGO (Centrado en móvil, a la izquierda en PC) */}
            <Link href="/" className="flex items-center justify-center mt-1 md:mt-0 gap-2">
              <div className="w-8 h-8 relative flex items-center justify-center">
                 <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white italic">
                AYCweb
              </span>
            </Link>
            
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

        {/* BOTÓN FLOTANTE DE WHATSAPP GLOBAL ACTUALIZADO */}
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all z-50 flex items-center justify-center hover:scale-110 active:scale-95 group"
          aria-label="Contactar por WhatsApp"
        >
          {/* Tooltip visible en PC al pasar el mouse */}
          <span className="absolute -top-10 right-0 bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Hablar con un Asesor
          </span>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}
