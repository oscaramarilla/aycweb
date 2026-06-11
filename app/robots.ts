import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

// Herramientas internas — no deben indexarse ni aparecer en SERPs
const INTERNAL_PATHS = ['/autoppto', '/legales'];

export default function robots(): MetadataRoute.Robots {
  const localizedDisallows = INTERNAL_PATHS.flatMap((path) =>
    routing.locales.map((locale) =>
      locale === routing.defaultLocale ? path : `/${locale}${path}`
    )
  );

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          ...localizedDisallows,
        ],
      },
    ],
    sitemap: 'https://aycweb.com/sitemap.xml',
  };
}
