// ─── LANDING SEO: /soluciones/[slug] ─────────────────────────────────────────
// Genera 6 rutas estáticas en build time.
// El contenido viene 100% de lib/config/soluciones/[slug].ts
// Para agregar o editar una landing: NO tocar este archivo.
//   → editar lib/config/soluciones/[slug].ts

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TODAS_SOLUCIONES } from "@/lib/config/soluciones";
import { CASOS_OBRAS } from "@/lib/config/obras";
import { SolucionPageTemplate } from "@/components/soluciones/SolucionPageTemplate";

// ─── Rutas estáticas ──────────────────────────────────────────────────────────
// Next.js genera una página por cada slug en build time.
export function generateStaticParams() {
  return TODAS_SOLUCIONES.map((s) => ({ slug: s.slug }));
}

// ─── Metadata dinámica (OG + Twitter Card) ────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = TODAS_SOLUCIONES.find((s) => s.slug === slug);

  if (!config) return {};

  const canonicalUrl = `https://www.aycweb.com/soluciones/${slug}`;

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonicalUrl,
      siteName: "AYCweb",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: config.hero.title,
        },
      ],
      locale: "es_PY",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

// ─── Página ───────────────────────────────────────────────────────────────────
export default async function SolucionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Buscar la config de esta landing
  const config = TODAS_SOLUCIONES.find((s) => s.slug === slug);
  if (!config) notFound();

  // Pre-filtrar los casos relacionados (evita importar CASOS_OBRAS en el template)
  const casosRelacionados = CASOS_OBRAS.filter((c) =>
    config.casosRelacionados.includes(c.id)
  );

  return (
    <SolucionPageTemplate config={config} casosRelacionados={casosRelacionados} />
  );
}
