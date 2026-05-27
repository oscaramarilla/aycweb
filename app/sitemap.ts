export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { TODAS_SOLUCIONES } from "@/lib/config/soluciones";

const locales = ["es", "en", "pt-br"];
const routes = [
  "",
  "/empresas",
  "/profesionales",
  "/obras",
  "/nosotros",
  "/onboarding",
];

const BASE_URL = "https://aycweb.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Rutas marketing con prefijo de idioma ─────────────────────────────────
  const marketingUrls = locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: (
        route === "" ? "yearly" : "monthly"
      ) as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: route === "" ? 1.0 : 0.8,
    }))
  );

  // ── Landings SEO /soluciones/[slug] (sin prefijo de idioma) ──────────────
  const solucionesUrls: MetadataRoute.Sitemap = TODAS_SOLUCIONES.map((s) => ({
    url: `${BASE_URL}/soluciones/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.9, // Alta prioridad: páginas SEO específicas por dolor/sector
  }));

  return [...marketingUrls, ...solucionesUrls];
}
