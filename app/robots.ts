import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Herramientas internas — no deben indexarse ni aparecer en SERPs
        disallow: [
          '/controlroom',
          '/autoppto',
          '/contrato',
          '/legales',
          '/costos',
        ],
      },
    ],
    sitemap: 'https://aycweb.com/sitemap.xml',
  };
}
