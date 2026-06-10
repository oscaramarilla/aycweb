# SEO Architecture — AYCweb

Mapa técnico del sistema de SEO programático B2B. Última actualización: 2026-05-30.

---

## Estado actual del build

```
✓ Generating static pages (53/53)

/soluciones          → hub índice (○ Static)
/soluciones/[slug]   → 40 landings B2B (● SSG)
/[lang]/recursos/[slug] → artículos del blog (● SSG)
/[lang]/empresas, profesionales, nosotros, obras → marketing pages (ƒ Dynamic)
/sitemap.xml         → 103+ URLs indexadas
```

Commits clave:
- `fix(seo): unificar canonicals, sitemap y resolver bugs criticos de indexacion` (P0)
- `feat(seo): inyectar 34 landing pages programaticas B2B de alta intencion` (P1)
- `feat(seo): implementar arquitectura hub, hreflang y schemas avanzados` (P2)

---

## SEO Programático B2B — Cómo funciona

### Capa 1: Config (la fuente de verdad)

Cada landing vive en un único archivo TypeScript:

```
lib/config/soluciones/
├── index.ts                        ← Exporta TODAS_SOLUCIONES (40 items)
├── cotizador-industrial.ts
├── cotizador-construccion-paraguay.ts
├── landing-dentista-paraguay.ts
└── ... (37 archivos más)
```

El tipo central es `SolucionConfig` (`lib/config/soluciones/index.ts:27`):

```typescript
interface SolucionConfig {
  slug: string;           // → URL: /soluciones/[slug]
  metaTitle: string;      // → <title> en SERP
  metaDescription: string;// → <meta description>
  hero: { title, subtitle };
  problema: { title, paragraphs[] };
  solucion: { title, pasos: PasoSolucion[] };
  casosRelacionados: string[];  // IDs de CASOS_OBRAS
  faq?: FaqItem[];              // → FAQPage JSON-LD automático
}
```

**Para agregar una nueva landing:**
1. Crear `lib/config/soluciones/mi-nueva-solucion.ts`
2. Agregar export + import en `lib/config/soluciones/index.ts`
3. El sitemap, generateStaticParams y el hub se actualizan solos.

### Capa 2: Generación estática

`app/soluciones/[slug]/page.tsx` usa `generateStaticParams`:

```typescript
export function generateStaticParams() {
  return TODAS_SOLUCIONES.map((s) => ({ slug: s.slug }));
}
```

Next.js pre-renderiza las 40 páginas en build time. Zero costo de servidor en producción.

### Capa 3: Hub de autoridad

`app/soluciones/page.tsx` lista las 40 soluciones agrupadas en 4 categorías:
- Cotizadores por Sector (12)
- Automatización y Ventas B2B (11)
- Landings para Profesionales (8)
- Infraestructura y Transformación Digital (9)

El hub tiene `priority: 0.85` en el sitemap y fluye autoridad a todas las landings hija (estructura hub-and-spoke).

### Capa 4: Sitemap automático

`app/sitemap.ts` construye el sitemap en tiempo de build:

```
marketingUrls    → /es|en|pt-br/(empresas|profesionales|obras|nosotros) × 3 idiomas
solucionesHubUrl → /soluciones                          priority: 0.85
solucionesUrls   → /soluciones/[slug] × 40             priority: 0.90
blogUrls         → /es/recursos/[slug] × N artículos   priority: 0.70
funnelUrls       → /es/diagnostico-comercial            priority: 0.85
```

---

## Schemas implementados

### BreadcrumbList — todas las landings `/soluciones/[slug]`

Implementado en `components/soluciones/SolucionPageTemplate.tsx:41`.
Se genera automáticamente para cada una de las 40 landings:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Inicio",     "item": "https://www.aycweb.com" },
    { "position": 2, "name": "Soluciones", "item": "https://www.aycweb.com/soluciones" },
    { "position": 3, "name": "[hero.title]","item": "https://www.aycweb.com/soluciones/[slug]" }
  ]
}
```

### FAQPage — landings de soluciones + páginas de marketing

**En `/soluciones/[slug]`:** Se genera automáticamente cuando `config.faq` tiene ítems.
Implementado en `SolucionPageTemplate.tsx:52`. Las 40 landings tienen 2 FAQs cada una.

**En páginas de marketing** (schema inyectado en el JSX de cada página):
- `app/[lang]/(marketing)/empresas/page.tsx` — 4 FAQs sobre pricing B2B y sectores
- `app/[lang]/(marketing)/profesionales/page.tsx` — 4 FAQs sobre agenda y profesionales
- `app/[lang]/(marketing)/nosotros/page.tsx` — 4 FAQs sobre AYCweb como empresa

### BlogPosting — artículos del blog

Implementado en `app/[lang]/(marketing)/recursos/[slug]/page.tsx`.
Cada artículo tiene `generateMetadata` con:
- `title`, `description`, `authors`, `alternates.canonical`
- `openGraph.type: "article"` con `publishedTime` y `authors`
- `BlogPosting` JSON-LD con `publisher: { "@id": "https://www.aycweb.com/#organization" }`

### Organization (base)

Definido en `components/seo/SchemaMarkup.tsx`. Se renderiza en el layout raíz.
Incluye nombre, URL, logo y datos de contacto. Ver P2.7 para mejoras pendientes.

---

## Canonicals y hreflang

### Regla canónica

| Ruta | Canonical |
|------|-----------|
| `/soluciones/[slug]` | `https://www.aycweb.com/soluciones/[slug]` |
| `/es/empresas` | `https://www.aycweb.com/es/empresas` |
| `/es/nosotros` | `https://www.aycweb.com/es/nosotros` |
| `/es/recursos/[slug]` | `https://www.aycweb.com/es/recursos/[slug]` |

La `metadataBase` en `app/layout.tsx` está configurada en `https://www.aycweb.com` (con www).
El sitemap y robots.txt también usan www.

### hreflang implementado

Las 4 páginas de marketing principales tienen `alternates.languages`:
```typescript
languages: {
  "es":      "https://www.aycweb.com/es/[ruta]",
  "en":      "https://www.aycweb.com/en/[ruta]",
  "pt-BR":   "https://www.aycweb.com/pt-br/[ruta]",
  "x-default": "https://www.aycweb.com/es/[ruta]",
}
```

Páginas con hreflang: `empresas`, `profesionales`, `nosotros`, `obras`.

---

## Grupos de landing pages (40 total)

### Cotizadores por sector (12)

| Slug | Query objetivo |
|------|---------------|
| `cotizador-industrial` | cotizador industrial paraguay |
| `cotizador-muebles-medida` | cotizador muebles a medida paraguay |
| `cotizador-construccion-paraguay` | cotizador empresa constructora paraguay |
| `cotizador-logistica-transporte` | cotizador flete logístico empresa paraguay |
| `cotizador-servicios-profesionales` | cotizador consultora firma de servicios |
| `cotizador-agroindustria-paraguay` | cotizador agro paraguay |
| `cotizador-distribuidora-paraguay` | cotizador distribuidora mayorista paraguay |
| `cotizador-ferreteria-materiales` | sistema cotizaciones ferretería paraguay |
| `cotizador-metalurgica-estructuras` | cotizador metalúrgica estructuras metálicas |
| `cotizador-carpinteria-madera` | cotizador carpintería muebles madera paraguay |
| `cotizador-imprenta-graficos` | cotizador imprenta diseño gráfico |
| `cotizador-electricista-instalaciones` | presupuesto automático instalación eléctrica |

### Automatización y ventas B2B (11)

| Slug | Query objetivo |
|------|---------------|
| `automatizar-ventas-b2b` | automatizar ventas b2b empresa |
| `reemplazar-excel-cotizaciones` | reemplazar excel cotizaciones empresa |
| `whatsapp-ventas-empresa` | whatsapp ventas empresa paraguay |
| `automatizar-cotizaciones-whatsapp` | automatizar cotizaciones whatsapp empresa |
| `automatizar-propuestas-comerciales` | automatizar propuestas comerciales b2b |
| `generar-pdf-presupuesto-automatico` | generar pdf presupuesto automático paraguay |
| `eliminar-excel-operacion-empresarial` | dejar de usar excel empresa paraguay |
| `sistema-seguimiento-ventas-paraguay` | sistema seguimiento ventas b2b paraguay |
| `sistema-gestion-clientes-pymes` | sistema gestión clientes pymes paraguay |
| `pipeline-ventas-automatizado` | pipeline ventas automatizado empresa paraguay |
| `dashboard-operativo-empresa` | dashboard operativo empresas paraguay |

### Landings para profesionales (8)

| Slug | Query objetivo |
|------|---------------|
| `landing-medica-paraguay` | landing page médico clínica paraguay |
| `landing-dentista-paraguay` | página web dentista odontólogo paraguay |
| `landing-abogado-paraguay` | landing page abogado bufete paraguay |
| `landing-arquitecto-paraguay` | sitio web arquitecto paraguay |
| `landing-psicologo-paraguay` | página web psicólogo terapeuta paraguay |
| `landing-veterinaria-paraguay` | página web veterinaria paraguay |
| `landing-nutricionista-paraguay` | landing nutricionista paraguay |
| `landing-contador-paraguay` | página web estudio contable paraguay |

### Infraestructura y transformación digital (9)

| Slug | Query objetivo |
|------|---------------|
| `infraestructura-digital-pymes` | infraestructura digital pymes paraguay |
| `transformacion-digital-empresa-mediana` | transformación digital empresa mediana paraguay |
| `agencia-digital-b2b-paraguay` | agencia digital b2b paraguay |
| `desarrollo-web-empresas-paraguay` | desarrollo web empresas paraguay |
| `automatizacion-empresarial-paraguay` | automatización empresarial paraguay |
| `software-cotizacion-paraguay` | software cotización empresas paraguay |
| `presupuesto-automatico-empresa` | sistema presupuesto automático empresa |
| `whatsapp-business-empresa-paraguay` | whatsapp business api empresa paraguay |
| `crm-ligero-empresa-paraguay` | crm ligero empresa pyme paraguay |

---

## Tareas pendientes

### P2.5 — GA4 tracking
**Archivo:** `app/layout.tsx`
Agregar `<Script>` de GA4 con `strategy="afterInteractive"` desde `next/script`.
Eventos a trackear: clic en CTA WhatsApp, submit del formulario de diagnóstico, clic en "Ver Pricing".

```typescript
// En app/layout.tsx, dentro de <body>:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
</Script>
```

### P2.6 — OG images dinámicas por solución
**Archivo a crear:** `app/soluciones/[slug]/opengraph-image.tsx`
Usar `ImageResponse` de `next/og` para generar imágenes 1200×630 con el título de cada landing.
Mejora el CTR cuando las URLs se comparten en LinkedIn o WhatsApp.

```typescript
import { ImageResponse } from "next/og";
import { TODAS_SOLUCIONES } from "@/lib/config/soluciones";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = TODAS_SOLUCIONES.find((s) => s.slug === slug);
  return new ImageResponse(
    <div style={{ background: "#020817", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "white", fontSize: 56, fontWeight: 900, textAlign: "center", maxWidth: 900 }}>
        {config?.hero.title}
      </div>
      <div style={{ color: "#3b82f6", fontSize: 28, marginTop: 20 }}>AYCweb · Paraguay</div>
    </div>
  );
}
```

### P2.7 — SchemaMarkup E-E-A-T
**Archivo:** `components/seo/SchemaMarkup.tsx`
Enriquecer el schema `Organization` con señales de confianza:

```typescript
{
  "@type": "Organization",
  "name": "AYCweb",
  "url": "https://www.aycweb.com",
  "foundingDate": "2012",         // ← agregar
  "sameAs": [                     // ← agregar
    "https://www.linkedin.com/company/aycweb",
    "https://www.instagram.com/aycweb"
  ],
  "knowsLanguage": ["es", "en", "pt"],  // ← agregar
  "areaServed": "PY"              // ← agregar
}
```

Conectar a `lib/config/contacto.ts` como SSOT para evitar duplicar el número de teléfono.

### P1.2 — 10 artículos de blog (deferred)
**Archivo:** `lib/data/articulos.ts`
Agregar 10 artículos con intención de compra bottom-of-funnel. Cada uno debe referenciar casos reales (Metal Mad, Oriplast) y tener 2+ links internos a `/soluciones/`.

Títulos prioritarios:
1. `cotizador-online-empresa-paraguay` — Cómo elegir un cotizador online para tu empresa en Paraguay: guía 2026
2. `cuanto-cuesta-automatizar-ventas-b2b` — Cuánto cuesta automatizar las ventas B2B en Paraguay (con números reales)
3. `whatsapp-business-api-empresa-paraguay` — WhatsApp Business API para empresas paraguayas
4. `como-calcular-roi-cotizador-digital` — Cómo calcular el ROI de reemplazar Excel por un cotizador digital
5. `presupuesto-pdf-automatico-para-obras` — Cómo generar presupuestos PDF automáticos para empresas de construcción
6. `errores-comunes-cotizar-manual` — 7 errores que cometen las empresas paraguayas al cotizar a mano
7. `agenda-digital-clinicas-paraguay` — Por qué las clínicas en Paraguay están perdiendo pacientes sin saberlo
8. `sistemas-digitales-distribuidoras-paraguay` — Qué sistema digital necesita una distribuidora antes de crecer
9. `comparar-agencias-digitales-paraguay` — Cómo elegir entre agencias digitales en Paraguay para una empresa B2B
10. `dashboard-operativo-que-es` — Qué es un dashboard operativo y cuándo lo necesita tu empresa

**Nota arquitectónica:** El template `recursos/[slug]/page.tsx` soporta dos modos: si el artículo define `bloques` (unión discriminada `BloqueArticulo` en `lib/data/articulos.ts`), se renderiza con `components/blog/ArticuloBloques.tsx` (prosa, ficha, tabla, timeline, faq, cta); si no, hace fallback a `contenido` como texto plano (`whitespace-pre-line`). Para links internos a `/soluciones/` u otros recursos ricos, usar el modo `bloques`. El sistema MDX (`recursos/blog`) fue eliminado.

---

## Verificación en producción

Después de cada deploy, validar:

1. **Sitemap:** `https://www.aycweb.com/sitemap.xml` → debe listar 100+ URLs incluyendo `/soluciones` y las 40 landings
2. **Rich Results Test:** `search.google.com/test/rich-results` → probar una URL `/soluciones/[slug]` para confirmar BreadcrumbList + FAQPage
3. **Rich Results Test:** probar un artículo de blog para confirmar BlogPosting schema
4. **Search Console:** submit del sitemap en `search.google.com/search-console` → monitorear Coverage report en 48h
5. **Chrome DevTools:** inspeccionar `<head>` en artículo individual → el `<title>` debe ser único, no el root title
6. **Google Search Console verification:** descomentar `verification: { google: "TU_CODIGO_AQUI" }` en `app/layout.tsx` con el código real
