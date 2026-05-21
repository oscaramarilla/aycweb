import Link from "next/link";

export default function RecursoSlug({ params }: { params: { lang: string; slug: string } }) {
  const { slug, lang } = params;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{slug.replace(/-/g, " ")}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Artículo detallado sobre {slug}.</p>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <p className="text-slate-300 leading-relaxed mb-4">
          En este artículo desarrollamos los puntos clave relacionados con {slug.replace(/-/g, " ")}. El objetivo es dar
          un marco práctico para que equipos comerciales y operativos ejecuten con menos errores.
        </p>

        <h2 className="text-2xl font-black mt-6 mb-3">Resumen ejecutivo</h2>
        <p className="text-slate-300 mb-6">Puntos principales y recomendaciones inmediatas para aplicar en 7 días.</p>

        <Link href={`/${lang}/recursos`} className="text-emerald-400 font-bold">
          ← Volver a recursos
        </Link>
      </section>
    </div>
  );
}
