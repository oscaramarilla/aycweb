import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aycweb.com"),
  title: {
    default: "AYCweb Paraguay | Firma de Infraestructura Digital B2B",
    template: "%s | AYCweb",
  },
  description: "Elegimos potenciar empresas y profesionales con sistemas operativos y comerciales de alto rendimiento en Paraguay.",
  keywords: ["desarrollo web paraguay high ticket", "automatización B2B paraguay", "sistemas operativos", "cotizadores dinámicos"],
  authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
  alternates: {
    canonical: "/", // Esto le dice a Google que esta es la URL oficial
  },
  openGraph: {
    title: "AYCweb | Firma de Infraestructura Digital B2B",
    description: "Sistemas operativos y comerciales de alto rendimiento para escalar en Paraguay.",
    url: "https://aycweb.com",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg", // Cambié a JPG por compatibilidad con WhatsApp
        width: 1200,
        height: 630,
        alt: "AYCweb - Infraestructura Digital B2B",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617", 
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col font-sans relative selection:bg-blue-500/30">
        
        {/* Grilla sutil futurista de fondo */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

        <LanguageProvider>
          {/* ACÁ YA NO VA EL NAVBAR */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
