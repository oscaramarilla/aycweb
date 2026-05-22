import Link from "next/link";
import { getArticuloBySlug, articulos } from "../../../../../lib/data/articulos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
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
        <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
          {articulo.contenido}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href={`/${lang}/recursos`} className="text-emerald-400 font-bold">
            ← Volver a recursos
          </Link>
        </div>
      </section>
    </div>
  );
}
