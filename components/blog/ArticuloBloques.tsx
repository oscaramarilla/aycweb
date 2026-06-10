import Link from "next/link";
import type { BloqueArticulo } from "@/lib/data/articulos";

type ArticuloBloquesProps = {
  bloques: BloqueArticulo[];
  lang: string;
  whatsappLink: string;
};

function renderInline(text: string) {
  return text.split("**").map((segment, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-slate-100">
        {segment}
      </strong>
    ) : (
      <span key={index}>{segment}</span>
    )
  );
}

function renderProsa(bloque: Extract<BloqueArticulo, { tipo: "prosa" }>) {
  return (
    <div className="space-y-5 text-slate-300 leading-relaxed">
      <p>{renderInline(bloque.texto)}</p>
    </div>
  );
}

function renderFicha(bloque: Extract<BloqueArticulo, { tipo: "ficha" }>) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm shadow-slate-950/20">
      <h2 className="text-xl font-semibold text-slate-100 mb-4">{bloque.titulo}</h2>
      <dl className="grid gap-4 sm:grid-cols-3">
        {bloque.items.map((item) => (
          <div key={item.clave} className="rounded-3xl bg-slate-950/60 p-4">
            <dt className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">{item.clave}</dt>
            <dd className="text-base font-semibold text-slate-100">{item.valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function renderTabla(bloque: Extract<BloqueArticulo, { tipo: "tabla" }>) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-sm shadow-slate-950/20">
      {bloque.titulo ? (
        <div className="border-b border-slate-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-100">{bloque.titulo}</h2>
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-950/80">
            <tr>
              {bloque.columnas.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-6 py-4 text-left font-semibold text-slate-300"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/80">
            {bloque.filas.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {fila.map((celda, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} className="px-6 py-4 text-slate-300">
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function renderTimeline(bloque: Extract<BloqueArticulo, { tipo: "timeline" }>) {
  return (
    <section className="space-y-6">
      {bloque.titulo ? (
        <h2 className="text-xl font-semibold text-slate-100">{bloque.titulo}</h2>
      ) : null}
      <div className="space-y-4">
        {bloque.pasos.map((paso, index) => (
          <div key={index} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">
              Paso {index + 1}
            </p>
            <h3 className="text-lg font-semibold text-slate-100">{paso.titulo}</h3>
            <p className="mt-2 text-slate-300 leading-relaxed">{paso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function renderFaq(bloque: Extract<BloqueArticulo, { tipo: "faq" }>) {
  return (
    <section className="space-y-4">
      {bloque.titulo ? (
        <h2 className="text-xl font-semibold text-slate-100">{bloque.titulo}</h2>
      ) : null}
      <div className="space-y-3">
        {bloque.items.map((item, index) => (
          <details
            key={item.pregunta}
            className="group rounded-3xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-slate-700"
          >
            <summary className="flex cursor-pointer items-center justify-between text-left text-slate-100 font-semibold list-none gap-4">
              <span>{item.pregunta}</span>
              <span className="text-slate-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-slate-300 leading-relaxed">{renderInline(item.respuesta)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function renderCta(
  bloque: Extract<BloqueArticulo, { tipo: "cta" }>,
  lang: string,
  whatsappLink: string
) {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.5)]">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-slate-100">{bloque.titulo}</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">{bloque.texto}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`/${lang}${bloque.href}`}
            className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-emerald-400"
          >
            {bloque.boton}
          </Link>
          <a
            href={whatsappLink}
            className="text-sm font-semibold text-slate-300 underline underline-offset-4 transition hover:text-slate-100"
          >
            o consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ArticuloBloques({ bloques, lang, whatsappLink }: ArticuloBloquesProps) {
  return (
    <div className="space-y-10">
      {bloques.map((bloque, index) => {
        switch (bloque.tipo) {
          case "prosa":
            return (
              <div key={index} className="space-y-6">
                {renderProsa(bloque)}
              </div>
            );
          case "ficha":
            return <div key={index}>{renderFicha(bloque)}</div>;
          case "tabla":
            return <div key={index}>{renderTabla(bloque)}</div>;
          case "timeline":
            return <div key={index}>{renderTimeline(bloque)}</div>;
          case "faq":
            return <div key={index}>{renderFaq(bloque)}</div>;
          case "cta":
            return <div key={index}>{renderCta(bloque, lang, whatsappLink)}</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}
