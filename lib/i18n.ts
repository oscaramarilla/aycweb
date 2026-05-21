export const locales = ['es', 'en', 'pt-br'] as const;
export const defaultLocale = 'es';

export const hreflangRoutes: Record<string, string> = {
  es: '/es',
  en: '/en',
  'pt-br': '/pt-br',
};

// Lógica limpia para detectar el mejor idioma del navegador
export function getBestLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const preferredLocales = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase());

  for (const pref of preferredLocales) {
    if (pref.startsWith('es')) return 'es';
    if (pref.startsWith('en')) return 'en';
    if (pref.startsWith('pt')) return 'pt-br';
  }

  return defaultLocale;
}

// Carga dinámica de diccionarios
const dictionaries: Record<string, () => Promise<any>> = {
  es: () => import('./dictionaries/es.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  'pt-br': () => import('./dictionaries/pt-br.json').then((m) => m.default),
};

export const getDictionary = async (lang: string) => {
  const locale = (locales as readonly string[]).includes(lang) ? lang : defaultLocale;
  return dictionaries[locale]();
};
