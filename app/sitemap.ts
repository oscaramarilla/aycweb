export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

const locales = ['es', 'en', 'pt-br'];
const routes = ['', '/empresas', '/profesionales', '/obras', '/nosotros', '/onboarding'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aycweb.com';

  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' ? 'yearly' : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: route === '' ? 1.0 : 0.8,
    }))
  );
}
