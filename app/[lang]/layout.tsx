import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadataBase = new URL('https://aycweb.com');

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: {
      template: '%s | AYCweb',
      default: 'AYCweb',
    },
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
        'pt-BR': '/pt-br',
      },
      // x-default as a top-level alternates value is not part of `languages`,
      // but Next supports an `alternates` entry — include canonical fallback below as needed.
      canonical: `https://aycweb.com/${lang}`,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <html lang={lang} className="scroll-smooth">
      <body className="antialiased bg-stone-950 text-stone-50">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
