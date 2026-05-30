// ============================================================
// LAYOUT: [lang]/(funnels)/diagnostico-comercial
// ============================================================
// Este layout existe exclusivamente para proveer metadata SEO
// a la ruta, ya que page.tsx usa "use client" y no puede
// exportar metadata directamente.
// ============================================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico de Fricción Comercial | AYCweb Paraguay",
  description:
    "Completá 3 preguntas en 2 minutos y recibí un diagnóstico personalizado sobre las fricciones en tu operación comercial. Sin costo, sin compromiso. AYCweb – Infraestructura Digital B2B Paraguay.",
  keywords: [
    "diagnóstico comercial paraguay",
    "sistematizar operación comercial",
    "automatizar ventas b2b paraguay",
    "consultoría digital paraguay",
    "AYCweb",
  ],
  openGraph: {
    title: "Diagnóstico de Fricción Comercial – AYCweb",
    description:
      "3 preguntas · 2 minutos · Diagnóstico personalizado gratuito para identificar fricciones en tu operación comercial.",
    url: "https://www.aycweb.com/es/diagnostico-comercial",
    siteName: "AYCweb",
    images: [
      {
        url: "https://www.aycweb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diagnóstico de Fricción Comercial – AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico de Fricción Comercial – AYCweb",
    description:
      "3 preguntas · 2 minutos · Diagnóstico personalizado gratuito para identificar fricciones en tu operación comercial.",
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