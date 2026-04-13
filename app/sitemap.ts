import { MetadataRoute } from 'next';
import { articulos } from '@/lib/data/articulos';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aycweb.com';

  const articuloUrls: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${baseUrl}/recursos/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    // ── Núcleo del sitio ──────────────────────────────────────────────────────
    { url: baseUrl,                          lastModified: new Date(), changeFrequency: 'yearly',  priority: 1.0 },
    { url: `${baseUrl}/empresas`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/profesionales`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/nosotros`,            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/obras`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/onboarding`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },

    // ── Páginas adicionales ───────────────────────────────────────────────────
    { url: `${baseUrl}/servicios`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/os`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/flete`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sectores`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/casos`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/sos`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ventas`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contacto`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/experiencia`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },

    // ── Motores / Herramientas públicas ───────────────────────────────────────
    { url: `${baseUrl}/motor-logistico`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/motor-saas`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/oscar`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Verticales de industria ───────────────────────────────────────────────
    { url: `${baseUrl}/mascotas-premium`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/metal-mad`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/modulares-kingspan`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },

    // ── Biblioteca de Autoridad (Blog B2B) ────────────────────────────────────
    { url: `${baseUrl}/recursos`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    ...articuloUrls,
  ];
}
