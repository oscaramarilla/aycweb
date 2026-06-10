**Resumen**: Sistema de blog basado en datos (`lib/data/articulos.ts`) con render por bloques + comentarios anónimos con Supabase y notificaciones vía n8n.

## Arquitectura del blog (sistema vigente)

- Datos / fuente de verdad: `lib/data/articulos.ts`
  - Interface `Articulo` + unión discriminada `BloqueArticulo`.
- Listado: `app/[lang]/(marketing)/recursos/page.tsx` (grilla de `components/ResourceCard.tsx`).
- Página del artículo: `app/[lang]/(marketing)/recursos/[slug]/page.tsx`.
- Render de bloques: `components/blog/ArticuloBloques.tsx`.

> Nota: El sistema MDX previo (`recursos/blog/[slug]` + `recursos/content/*.mdx` + `next-mdx-remote`/`@mdx-js/react`) fue **eliminado**. No deben convivir dos sistemas de blog.

### Cómo se renderiza un artículo

`recursos/[slug]/page.tsx` soporta dos modos:

1. **Modo bloques** (preferido): si `articulo.bloques` existe, renderiza con `<ArticuloBloques>`.
2. **Fallback**: si no hay `bloques`, renderiza `articulo.contenido` como texto plano (`whitespace-pre-line`).

Tipos de bloque disponibles (`BloqueArticulo`):

- `prosa` — `{ texto }` (soporta `**negritas**` inline vía helper propio, sin librería de markdown).
- `ficha` — `{ titulo, items: { clave, valor }[] }`.
- `tabla` — `{ titulo?, columnas[], filas[][] }`.
- `timeline` — `{ titulo?, pasos: { titulo, descripcion }[] }`.
- `faq` — `{ titulo?, items: { pregunta, respuesta }[] }` (acordeón nativo `<details>`).
- `cta` — `{ titulo, texto, href, boton }` (el componente antepone `/${lang}` al `href`).

### SEO

`recursos/[slug]/page.tsx` genera JSON-LD `BlogPosting` siempre y `FAQPage` cuando hay bloque `faq` (misma fuente de verdad que el render).

### Para agregar un artículo nuevo

1. Agregar un objeto `Articulo` a `articulos` en `lib/data/articulos.ts`.
2. Definir `bloques` (recomendado) o `contenido`.
3. `generateStaticParams` y el sitemap se actualizan solos.

---

## Comentarios anónimos (Supabase + n8n)

- Formulario cliente: `components/AnonymousCommentForm.tsx`
- Lista: `components/blog/CommentsList.tsx`
- API: `app/api/submit-comment/route.ts`
- Supabase SQL: `db/supabase/anonymous_comments.sql`

### Pasos para poner en marcha

1. Variables de entorno (no subir claves a Git):

```
SUPABASE_URL=https://...your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key-or-anon-if-intentional
```

2. Crear la tabla en Supabase: ejecutar `db/supabase/anonymous_comments.sql` en el SQL editor.

3. n8n flow (esquema):

- Trigger: Supabase webhook / Realtime on INSERT en `anonymous_comments`.
- Opcional: Nodo OpenAI/Gemini para clasificar SPAM/LEGÍTIMO y extraer intención.
- Acción: Si legítimo, enviar mensaje por WhatsApp Business API con el texto y slug.

4. Notas de seguridad:

- Preferible usar `SUPABASE_SERVICE_KEY` en el servidor para escribir (mantener privado).
- Si exponen la tabla públicamente, coloca `status` en `pending` y valida manualmente.
