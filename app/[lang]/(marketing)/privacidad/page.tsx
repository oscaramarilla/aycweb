import type { Metadata } from "next";
import Link from "next/link";
import { getPrivacidadDict, PRIVACIDAD_I18N, type PrivacidadLocale } from "@/lib/config/privacidad";

const BASE_URL = "https://www.aycweb.com";
const PAGE_PATH = "/privacidad";
const LOCALES = Object.keys(PRIVACIDAD_I18N) as PrivacidadLocale[];

type Props = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getPrivacidadDict(lang);
  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/${lang}${PAGE_PATH}`,
      languages: Object.fromEntries([
        ...LOCALES.map((l) => [l, `${BASE_URL}/${l}${PAGE_PATH}`]),
        ["x-default", `${BASE_URL}/es${PAGE_PATH}`],
      ]),
    },
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { lang } = await params;
  const dict = getPrivacidadDict(lang);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* HERO */}
      <section className="px-6 pt-28 pb-12 text-center border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full mb-5">
            {dict.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
            {dict.title}
          </h1>
          <p className="text-sm text-slate-500">{dict.updated}</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          {dict.sections.map((s) => (
            <div key={s.h}>
              <h2 className="mb-3 text-lg font-black text-white">{s.h}</h2>
              <p className="text-[15px] leading-7 text-slate-400">{s.p}</p>
            </div>
          ))}

          <div className="border-t border-white/[0.06] pt-8">
            <Link
              href={`/${lang}/legal`}
              className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              → Terms of Service / Términos y Condiciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
