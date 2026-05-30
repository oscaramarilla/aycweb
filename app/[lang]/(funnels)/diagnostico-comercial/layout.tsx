// ============================================================
// LAYOUT: [lang]/(funnels)/diagnostico-comercial
// ============================================================
// Este layout existe exclusivamente para proveer metadata SEO
// a la ruta, ya que page.tsx usa "use client" y no puede
// exportar metadata directamente.
// ============================================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico Comercial Express | AYCweb Paraguay",
  description:
    "Completá 6 preguntas en 5 minutos y recibí un diagnóstico personalizado sobre cómo sistematizar tu operación comercial. Sin costo, sin compromiso. AYCweb – Infraestructura Digital B2B Paraguay.",
  keywords: [
    "diagnóstico comercial paraguay",
    "sistematizar operación comercial",
    "automatizar ventas b2b paraguay",
    "consultoría digital paraguay",
    "AYCweb",
  ],
  openGraph: {
    title: "Diagnóstico Comercial Express – AYCweb",
    description:
      "6 preguntas · 5 minutos · Diagnóstico personalizado gratuito para sistematizar tu operación comercial.",
    url: "https://www.aycweb.com/es/diagnostico-comercial",
    siteName: "AYCweb",
    images: [
      {
        url: "https://www.aycweb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diagnóstico Comercial Express – AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico Comercial Express – AYCweb",
    description:
      "6 preguntas · 5 minutos · Diagnóstico personalizado gratuito para sistematizar tu operación comercial.",
    images: ["https://www.aycweb.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.aycweb.com/es/diagnostico-comercial",
  },
};

export default function DiagnosticoComercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
