import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const OG_LOCALES: Record<Locale, string> = {
  es: "es_PY",
  en: "en_US",
  pt: "pt_BR",
  de: "de_DE",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "meta" });
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  return {
    metadataBase: new URL("https://aycweb.com"),
    title: {
      default: t("title"),
      template: "%s | AYCweb",
    },
    description: t("description"),
    keywords: t("keywords").split(", "),
    authors: [{ name: "Oscar Amarilla Cáceres", url: "https://aycweb.com" }],
    alternates: {
      canonical: prefix || "/",
      languages: {
        es: "/",
        en: "/en",
        pt: "/pt",
        de: "/de",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://aycweb.com${prefix}`,
      siteName: "AYCweb",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AYCweb - Infraestructura Digital B2B",
        },
      ],
      locale: OG_LOCALES[locale as Locale],
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={cn("scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col font-sans relative selection:bg-blue-500/30">

        {/* Grilla sutil futurista de fondo */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
