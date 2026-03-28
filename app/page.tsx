import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asegurate de tener Tailwind configurado aquí

// Configuración de Fuente Profesional Optimizada
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimización de renderizado
});

// 🧠 EL CEREBRO SEO TÉCNICO B2B PARAGUAY
export const metadata: Metadata = {
  // Título dinámico para SEO
  title: {
    default: "AYCweb Paraguay - Desarrollo Web PRO & Automatización B2B",
    template: "%s | AYCweb E.A.S.",
  },
  description: "Transformamos negocios manuales en máquinas de ventas digitales automáticas en Paraguay. Sistemas web de alto rendimiento, PageSpeed 99/100, SEO Técnico y Copyrighting B2B. Garantía de Resultados 100%.",
  keywords: ["desarrollo web paraguay", "automatización B2B paraguay", "seo paraguay", "nextjs paraguay", "landing page asuncion", "aycweb oscar amarilla"],
  authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
  creator: "AYCweb E.A.S.",
  publisher: "AYCweb E.A.S.",
  
  // Metadatos para OpenGraph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "AYCweb - Ecosistemas Digitales PRO en Paraguay",
    description: "Sistemas web de alto rendimiento y automatización B2B. Dejá de trabajar en manual y escalá tu facturación.",
    url: "https://aycweb.com/os", // Landing OS como principal comercial
    siteName: "AYCweb E.A.S.",
    images: [
      {
        url: "/og-image.webp", // Asegurate de crear una imagen OG PRO en /public (1200x630)
        width: 1200,
        height: 630,
        alt: "AYCweb Paraguay Desarrollo Web PRO",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  
  // Metadatos para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "AYCweb Paraguay - Automatización B2B PRO",
    description: "Sistemas web Next.js ultra-rápidos para empresas serias en Paraguay.",
    images: ["/og-image.webp"],
  },

  // Configuración de Favicons (Asegurate de poner favicon.ico en /public)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  // Robots para SEO
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

// Configuración de Viewport para Responsividad Perfecta
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
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-zinc-950 text-zinc-50 min-h-screen">
        {children}
        {/* Aquí podrías inyectar scripts globales de analítica (GTM, Pixel) en el futuro */}
      </body>
    </html>
  );
}
