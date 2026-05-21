import Link from "next/link";

export default async function RecursosIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const POSTS = [
    { slug: "por-que-hub-de-ventas", title: "¿Por qué un Hub de Ventas?" },
    { slug: "procesos-contratacion", title: "Procesos de contratación" },
    { slug: "descargo-de-responsabilidad", title: "Descargo de responsabilidad" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Recursos</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Artículos, guías y plantillas para operaciones y ventas.</p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <article key={p.slug} className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
              <h3 className="font-black text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 mb-4">Breve introducción al artículo {p.title}.</p>
              <Link href={`/${lang}/recursos/${p.slug}`} className="text-emerald-400 font-bold">
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
