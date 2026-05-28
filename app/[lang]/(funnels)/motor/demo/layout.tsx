// ============================================================
// LAYOUT: [lang]/(funnels)/motor/demo
// ============================================================
// Este layout existe exclusivamente para proveer metadata SEO
// a la ruta, ya que page.tsx usa "use client" y no puede
// exportar metadata directamente.
// ============================================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor de Cotización en Vivo – Demo | AYCweb Paraguay",
  description:
    "Probá el Motor AYCweb en acción: seleccioná productos, obtené precios en tiempo real, descargá el PDF y envialo por WhatsApp. Esto es exactamente lo que instalamos en tu sitio desde USD 50/mes.",
  keywords: [
    "cotizador online paraguay",
    "motor de cotización web paraguay",
    "cotizador de muebles a medida",
    "demo cotizador B2B paraguay",
    "automatizar cotizaciones empresas paraguay",
    "AYCweb motor demo",
  ],
  openGraph: {
    title: "Motor de Cotización en Vivo – Demo | AYCweb Paraguay",
    description:
      "Seleccioná productos, precios en vivo, PDF descargable y envío por WhatsApp. El mismo motor que instalamos en tu empresa. Desde USD 50/mes.",
    url: "https://aycweb.com/es/motor/demo",
    siteName: "AYCweb",
    images: [
      {
        url: "https://aycweb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Motor de Cotización en Vivo – AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motor de Cotización en Vivo – Demo | AYCweb Paraguay",
    description:
      "Probá en vivo el cotizador que instalamos en empresas paraguayas. PDF + WhatsApp incluidos. Desde USD 50/mes.",
    images: ["https://aycweb.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aycweb.com/es/motor/demo",
  },
};

export default function MotorDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
