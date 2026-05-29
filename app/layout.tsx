import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  description:
    "Construimos ecosistemas digitales que automatizan ventas y operaciones para empresas y profesionales en Paraguay. Cotizadores dinámicos, generación de PDFs y motores operativos B2B.",
  keywords: [
    "desarrollo web paraguay",
    "automatización B2B paraguay",
    "sistemas operativos empresas",
    "cotizadores dinámicos paraguay",
    "infraestructura digital B2B",
    "software empresarial paraguay",
    "AYC SRL",
    "AYCweb",
  ],
  authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
  creator: "AYCweb - Oscar Amarilla Cáceres",
  publisher: "AYCweb",
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
  alternates: {
    canonical: "https://aycweb.com",
  },
  openGraph: {
    title: "AYCweb | Firma de Infraestructura Digital B2B",
    description:
      "Sistemas operativos y comerciales de alto rendimiento para empresas y profesionales en Paraguay. Automatizamos ventas, cotizaciones y operaciones.",
    url: "https://aycweb.com",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYCweb - Infraestructura Digital B2B Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYCweb | Infraestructura Digital B2B Paraguay",
    description:
      "Cotizadores dinámicos, generación de PDFs y motores operativos para empresas en Paraguay.",
    images: ["/og-image.jpg"],
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
    <html lang="es" className={cn("scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="antialiased text-slate-50 min-h-screen flex flex-col font-sans relative selection:bg-blue-500/30 leading-relaxed">
        
        {/* Grilla sutil futurista de fondo */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

        <LanguageProvider>
          {/* ACÁ YA NO VA EL NAVBAR */}
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
