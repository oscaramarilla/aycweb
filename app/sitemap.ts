import { MetadataRoute } from 'next';
import { articulos } from '@/lib/data/articulos';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://aycweb.com';

// Rutas con traducción completa: se emiten en los 4 idiomas con hreflang.
const LOCALIZED_PATHS: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '',                      changeFrequency: 'yearly',  priority: 1.0 },
  { path: '/empresas',             changeFrequency: 'monthly', priority: 0.9 },
  { path: '/profesionales',        changeFrequency: 'monthly', priority: 0.9 },
  { path: '/invertir-en-paraguay', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/recursos',             changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/obras',                changeFrequency: 'monthly', priority: 0.8 },
  { path: '/nosotros',             changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/onboarding',           changeFrequency: 'yearly',  priority: 0.6 },
];

// Rutas en español solamente (funnels y demos locales).
const SPANISH_ONLY_PATHS: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/precios',           changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sos',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/casos',             changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/ventas',            changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contacto',          changeFrequency: 'monthly', priority: 0.7 },
  { path: '/oscar',             changeFrequency: 'monthly', priority: 0.6 },
  { path: '/motor-logistico',   changeFrequency: 'monthly', priority: 0.6 },
  { path: '/motor-saas',        changeFrequency: 'monthly', priority: 0.6 },
  { path: '/flete',             changeFrequency: 'monthly', priority: 0.6 },
  { path: '/mascotas-premium',  changeFrequency: 'monthly', priority: 0.5 },
  { path: '/metal-mad',         changeFrequency: 'monthly', priority: 0.5 },
  { path: '/modulares-kingspan',changeFrequency: 'monthly', priority: 0.5 },
];

function localeUrl(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${BASE_URL}${prefix}${path}` || BASE_URL;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Una entrada por idioma y ruta, con hreflang cruzado.
  const localizedUrls: MetadataRoute.Sitemap = LOCALIZED_PATHS.flatMap((p) =>
    routing.locales.map((locale) => ({
      url: localeUrl(locale, p.path),
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: locale === routing.defaultLocale ? p.priority : p.priority - 0.1,
      alternates: {
        languages: Object.fromEntries([
          ...routing.locales.map((l) => [l, localeUrl(l, p.path)]),
          ['x-default', localeUrl(routing.defaultLocale, p.path)],
        ]),
      },
    }))
  );

  const spanishUrls: MetadataRoute.Sitemap = SPANISH_ONLY_PATHS.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articuloUrls: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${BASE_URL}/recursos/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...localizedUrls, ...spanishUrls, ...articuloUrls];
}
