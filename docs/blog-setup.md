**Resumen**: Implementación de blog MDX + comentarios anónimos con Supabase y notificaciones vía n8n.

- Ruta del contenido: `app/[lang]/(marketing)/recursos/content/*.mdx`
- Página del artículo: `app/[lang]/(marketing)/recursos/blog/[slug]/page.tsx`
- Formulario cliente: `components/AnonymousCommentForm.tsx`
- API: `app/api/submit-comment/route.ts`
- Supabase SQL: `db/supabase/anonymous_comments.sql`

Pasos para poner en marcha

1. Variables de entorno

Agregar en producción y local (no subir claves a Git):

```
SUPABASE_URL=https://...your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key-or-anon-if-intentional
```

2. Crear la tabla en Supabase

Copiar y ejecutar `db/supabase/anonymous_comments.sql` en SQL editor de Supabase.

3. n8n flow (esquema)

- Trigger: Supabase webhook / Realtime on INSERT en `anonymous_comments`.
- Opcional: Nodo OpenAI/Gemini para clasificar SPAM/LEGÍTIMO y extraer intención.
- Acción: Si legítimo, enviar mensaje por WhatsApp Business API con el texto y slug.

4. Notas de seguridad

- Preferible usar `SUPABASE_SERVICE_KEY` en el servidor para escribir (mantener privado).
- Si exponen la tabla públicamente, coloca `status` en `pending` y valida/manualmente.

5. Siguientes pasos sugeridos

- Añadir un renderer MDX real (`@next/mdx`, `next-mdx-remote` o `mdx-bundler`).
- Añadir moderación automática mediante revisión por IA en n8n.

6. Instalación MDX (App Router)

Recomiendo `next-mdx-remote` para renderizado en Server Components con App Router.

Instala las dependencias locales:

```bash
npm install next-mdx-remote @mdx-js/react
```

Luego puedes usar `serialize` en el servidor y `MDXRemote` (rsc) para renderizar MDX, como está implementado en `app/[lang]/(marketing)/recursos/blog/[slug]/page.tsx`.
