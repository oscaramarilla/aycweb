export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { TODAS_SOLUCIONES } from "@/lib/config/soluciones";
import { articulos } from "@/lib/data/articulos";

const locales = ["es", "en", "pt-br"];
const routes = [
  "",
  "/empresas",
  "/profesionales",
  "/obras",
  "/nosotros",
  "/onboarding",
];

const BASE_URL = "https://www.aycweb.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Rutas marketing con prefijo de idioma ─────────────────────────────────
  const marketingUrls = locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: (
        route === "" ? "weekly" : "monthly"
      ) as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: route === "" ? 1.0 : 0.8,
    }))
  );

  // ── Hub de soluciones (índice de las 40 landings) ────────────────────────
  const solucionesHubUrl: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/soluciones`,
      lastModified: new Date(),
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: 0.85,
    },
  ];

  // ── Landings SEO /soluciones/[slug] (sin prefijo de idioma) ──────────────
  const solucionesUrls: MetadataRoute.Sitemap = TODAS_SOLUCIONES.map((s) => ({
    url: `${BASE_URL}/soluciones/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.9,
  }));

  // ── Artículos del blog (alta señal E-E-A-T) ───────────────────────────────
  const blogUrls: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${BASE_URL}/es/recursos/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.7,
  }));

  // ── Funnel de alta intención ──────────────────────────────────────────────
  const funnelUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/es/diagnostico-comercial`,
      lastModified: new Date(),
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: 0.85,
    },
  ];

  return [...marketingUrls, ...solucionesHubUrl, ...solucionesUrls, ...blogUrls, ...funnelUrls];
}
