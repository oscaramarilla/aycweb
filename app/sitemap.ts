export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { articulos } from '@/lib/data/articulos';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aycweb.com';
  const defaultLocale = 'es';
  const base = `${baseUrl}/${defaultLocale}`;

  const articuloUrls: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${base}/recursos/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    // ── Raíz canónica (redirige a /es via proxy/middleware) ───────────────────
    { url: baseUrl,                                lastModified: new Date(), changeFrequency: 'yearly',  priority: 1.0 },

    // ── Núcleo del sitio ──────────────────────────────────────────────────────
    { url: `${base}`,                              lastModified: new Date(), changeFrequency: 'yearly',  priority: 1.0 },
    { url: `${base}/empresas`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/profesionales`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/nosotros`,                     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/obras`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/onboarding`,                   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },

    // ── Páginas adicionales ───────────────────────────────────────────────────
    { url: `${base}/servicios`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/os`,                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/flete`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/sectores`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/casos`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/sos`,                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ventas`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contacto`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/experiencia`,                  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },

    // ── Motores / Herramientas públicas ───────────────────────────────────────
    { url: `${base}/motor-logistico`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/motor-saas`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/oscar`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Verticales de industria ───────────────────────────────────────────────
    { url: `${base}/mascotas-premium`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/metal-mad`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/modulares-kingspan`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },

    // ── Biblioteca de Autoridad (Blog B2B) ────────────────────────────────────
    { url: `${base}/recursos`,                     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    ...articuloUrls,
  ];
}
