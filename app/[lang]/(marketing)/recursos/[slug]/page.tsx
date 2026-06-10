import type { Metadata } from "next";
import Link from "next/link";
import ArticuloBloques from "@/components/blog/ArticuloBloques";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";
import { getWhatsAppText } from "@/lib/config/contacto";
import { getArticuloBySlug, articulos } from "../../../../../lib/data/articulos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const articulo = getArticuloBySlug(slug);
  if (!articulo) return {};

  const canonicalUrl = `https://www.aycweb.com/${lang}/recursos/${slug}`;

  return {
    title: articulo.titulo,
    description: articulo.descripcion,
    authors: [{ name: articulo.autor }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: articulo.titulo,
      description: articulo.descripcion,
      url: canonicalUrl,
      siteName: "AYCweb",
      locale: "es_PY",
      type: "article",
      publishedTime: articulo.fechaPublicacion,
      authors: [articulo.autor],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: articulo.titulo,
      description: articulo.descripcion,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function RecursoSlug({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug, lang } = await params;
  const articulo = getArticuloBySlug(slug);

  if (!articulo) {
    notFound();
  }

  const canonicalUrl = `https://www.aycweb.com/${lang}/recursos/${slug}`;
  const whatsappLink = buildWhatsAppLink(getWhatsAppText("recursos", lang));
  const faqItems = articulo.bloques?.flatMap((bloque) =>
    bloque.tipo === "faq" ? bloque.items : []
  ) ?? [];
  const faqJsonLd = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.pregunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.respuesta,
          },
        })),
      }
    : null;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: articulo.titulo,
    description: articulo.descripcion,
    author: {
      "@type": "Person",
      name: articulo.autor,
      url: `https://www.aycweb.com/${lang}/nosotros`,
    },
    publisher: { "@id": "https://www.aycweb.com/#organization" },
    datePublished: articulo.fechaPublicacion,
    dateModified: articulo.fechaPublicacion,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    inLanguage: "es",
    image: "https://www.aycweb.com/og-image.jpg",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-3 block">
            {articulo.categoria} · {articulo.tiempoLectura}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">{articulo.titulo}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">{articulo.descripcion}</p>
          <p className="text-slate-600 text-sm mt-3">
            {articulo.autor} · {articulo.fechaPublicacion}
          </p>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto">
        {articulo.bloques ? (
          <ArticuloBloques bloques={articulo.bloques} lang={lang} whatsappLink={whatsappLink} />
        ) : (
          <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
            {articulo.contenido}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href={`/${lang}/recursos`} className="text-emerald-400 font-bold">
            ← Volver a recursos
          </Link>
        </div>
      </section>
    </div>
  );
}
