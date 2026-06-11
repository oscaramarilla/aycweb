import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const whatsappNumber = "595985864209";

const companySites = [
  { name: "Metal Mad E.A.S.", url: "metalmadeas.com" },
  { name: "AYC S.R.L.", url: "ayc.com.py" },
  { name: "Oriplast", url: "oriplastpy.com" },
  { name: "AYCweb Matriz", url: "aycweb.com" },
];

const professionalSites = [
  { name: "La Tableta", url: "latabletapy.com" },
  { name: "Dra. Bianca Amarilla", url: "drabiancapy.com" },
  { name: "La Roca Emprendimientos", url: "larocaemprendimientos.com" },
  { name: "Dr. José Lahaye", url: "drjoselahaye.com" },
];

export default async function NosotrosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const whatsappMsg = encodeURIComponent(t("waMsg"));

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <section className="relative z-10 border-b border-white/[0.06] px-6 pb-16 pt-28 text-center md:pb-24 md:pt-40">
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            {t("hero.badge")}
          </span>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white">
              {t("story.title")}
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              {t("story.p1")}
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              {t("story.p2")}
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              {t("story.p3")}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
            <p className="mb-8 text-xl font-bold italic leading-relaxed text-white md:text-2xl">
              {t("quote.text")}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                OA
              </div>
              <div>
                <p className="font-bold text-white">Oscar Amarilla</p>
                <p className="text-sm text-slate-500">{t("quote.founderRole")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.06] bg-[#05070d] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
              {t("production.title")}
            </h2>
            <p className="text-slate-400">
              {t("production.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">🏭</span>
                <h3 className="text-2xl font-bold text-white">{t("production.companiesTitle")}</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {companySites.map((site) => (
                  <a
                    key={site.url}
                    href={`https://${site.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-blue-900/30 bg-slate-900/50 p-6 text-center transition hover:border-blue-500/60 hover:bg-blue-900/20"
                  >
                    <div className="mb-1 font-bold text-white">{site.name}</div>
                    <div className="text-xs text-slate-500">{site.url}</div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">🧑‍⚕️</span>
                <h3 className="text-2xl font-bold text-white">
                  {t("production.prosTitle")}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {professionalSites.map((site) => (
                  <a
                    key={site.url}
                    href={`https://${site.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-emerald-900/30 bg-slate-900/50 p-6 text-center transition hover:border-emerald-500/60 hover:bg-emerald-900/20"
                  >
                    <div className="mb-1 font-bold text-white">{site.name}</div>
                    <div className="text-xs text-slate-500">{site.url}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            {t("cta.subtitle")}
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
