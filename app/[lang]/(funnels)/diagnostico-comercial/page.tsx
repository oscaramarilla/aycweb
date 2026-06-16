import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import DiagnosticoClient from "@/components/diagnostico/DiagnosticoClient";

const BASE_URL = "https://www.aycweb.com";
const PAGE_PATH = "/diagnostico-comercial";
const LOCALES = ["es", "en", "pt-br", "de"] as const;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const title = `${d["diag.quizH1a"]} ${d["diag.quizH1b"]} | AYCweb`;
  return {
    title,
    description: d["diag.quizSub"],
    alternates: {
      canonical: `${BASE_URL}/${lang}${PAGE_PATH}`,
      languages: Object.fromEntries([
        ...LOCALES.map((l) => [l, `${BASE_URL}/${l}${PAGE_PATH}`]),
        ["x-default", `${BASE_URL}/es${PAGE_PATH}`],
      ]),
    },
  };
}

export default async function DiagnosticoComercialPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <DiagnosticoClient dict={dict} lang={lang} />;
}
