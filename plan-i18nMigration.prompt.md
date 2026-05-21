## Plan: Implementar i18n de ruta y hreflang

TL;DR: Implementar un enrutamiento de idiomas con `app/[lang]/...`, crear `middleware.ts` para redirigir la raíz al idioma correcto y usar `generateMetadata` en `app/[lang]/layout.tsx` para emitir las etiquetas `hreflang` con `x-default`.

**Steps**
1. Añadir la lógica de locales y detección de idioma.
   - Crear `lib/i18n.ts` con `locales = ['es', 'en', 'pt-br']`, `defaultLocale = 'es'` y un mapeo de `hreflangRoutes`.
   - Incluir una función para elegir el mejor idioma desde `Accept-Language` con fallback a `es`.
2. Crear `middleware.ts` en la raíz.
   - Detectar si la petición ya tiene prefijo de idioma (`/es`, `/en`, `/pt-br`).
   - Si no lo tiene, leer `request.headers.get('accept-language')` y redirigir a la mejor ruta localizada.
   - Excluir `/api`, `/favicon.ico`, `_next`, `/static` y todos los assets.
3. Crear `app/[lang]/layout.tsx`.
   - Importar `globals.css` y mantener los providers del layout global.
   - Exportar `metadataBase = new URL('https://aycweb.com')`.
   - Implementar `generateMetadata({ params: { lang } })` con `alternates.languages` para `es`, `en`, `pt-BR` y `x-default: '/es'`.
   - Ajustar `<html lang={params.lang}>` dinámico.
4. Mover las páginas públicas bajo el segmento de idioma.
   - Mover `app/(marketing)/page.tsx` a `app/[lang]/(marketing)/page.tsx`.
   - Mover `app/(marketing)/empresas/page.tsx`, `app/(marketing)/profesionales/page.tsx`, `app/(marketing)/obras/page.tsx`, `app/(marketing)/nosotros/page.tsx`, `app/(marketing)/recursos/page.tsx`, `app/(marketing)/onboarding/page.tsx` a la estructura localizada.
   - Mover `app/idigital/page.tsx` a `app/[lang]/idigital/page.tsx`.
   - Repetir para cualquier otra ruta pública que deba estar localizada.
5. Ajustar `app/layout.tsx` global.
   - Mantener fuentes, global CSS y `LanguageProvider`.
   - Eliminar o simplificar `alternates` globales en favor de `app/[lang]/layout.tsx`.
   - Mantener `html lang="es"` como fallback en el layout raíz si se desea.
6. Crear el sistema de diccionarios.
   - Añadir `locales/es.json`, `locales/en.json`, `locales/pt-br.json` con textos localizados.
   - Implementar `getDictionary(lang)` en `lib/i18n.ts` para cargar los textos desde el servidor.
   - Usar ese diccionario en las páginas y componentes de contenido.
7. Verificación final.
   - Ejecutar `npm run build`.
   - Probar `/`, `/es`, `/en`, `/pt-br`.
   - Verificar que `/` redirige a la ruta localizada correcta.
   - Inspeccionar HTML para confirmar `<link rel="alternate" hreflang="es" ...>`, `en`, `pt-BR` y `x-default`.
   - Confirmar que las rutas internas localizadas funcionan.

**Relevant files**
- `middleware.ts` — raíz del proyecto.
- `lib/i18n.ts` — constantes de locales, detección de idioma y carga de diccionarios.
- `app/[lang]/layout.tsx` — metadata dinámica y html `lang`.
- `app/layout.tsx` — layout global y providers.
- `app/[lang]/(marketing)/page.tsx` — página principal localizada.
- `next.config.ts` — opcionalmente agregar `i18n`.

**Decisions**
- Usar la ruta `pt-br` en el path y `pt-BR` como valor `hreflang`.
- Mantener `x-default` apuntando a `/es`.
- El middleware detectará idioma por `Accept-Language` y redirigirá desde `/` a `/es`, `/en` o `/pt-br`.
- Mantener `app/api` y activos estáticos fuera de la migración.

**Further Considerations**
1. El actual `LanguageContext.tsx` puede migrarse a un provider que derive el idioma de `params.lang` en el layout anidado.
2. Si quieres un rollout gradual, comienza con `app/[lang]/(marketing)` y `app/[lang]/idigital`, luego expande.
3. Para SEO consistente, deja que cada idioma tenga su propia metadata `title` y `description` desde los diccionarios.
