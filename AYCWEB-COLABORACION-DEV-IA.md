# AYCWEB — Arquitectura Técnica y Guía de Contribución

**Versión:** 1.1 | **Última actualización:** Mayo 2026 | **Status:** Production

---

## 📋 Tabla de Contenidos

1. [Stack Tecnológico](#stack-tecnológico)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Patrones de Arquitectura](#patrones-de-arquitectura)
4. [Flujos de Datos](#flujos-de-datos)
5. [Guía de Contribución](#guía-de-contribución)
6. [Decisiones de Arquitectura](#decisiones-de-arquitectura)
7. [Escalabilidad y Roadmap](#escalabilidad-y-roadmap)

---

## 1. Stack Tecnológico

### Runtime & Framework
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Next.js** | 16.1.6 | Framework React con SSR, SSG, API routes y App Router |
| **React** | 19.2.3 | UI library con Server Components y hooks |
| **TypeScript** | 5.x | Type safety estricto en todo el codebase |
| **Tailwind CSS** | 4.x | Utility-first CSS optimizado con espacios de color OKLCH |
| **Radix UI / shadcn** | 1.4.3 | Componentes accesibles y personalizables |

### Persistencia & Integración
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Supabase** | 2.106.2 | PostgreSQL (Aislamiento de comentarios anónimos y webhooks) |
| **n8n** | Cloud | Orquestación de flujos, OpenAI y WhatsApp Business API |
| **jsPDF** | 4.2.0 | Generación de PDFs dinámicos en cliente (cotizaciones) |

### Herramientas de Desarrollo
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Vitest** | 4.1.7 | Testing automatizado de lógica de dominio y servicios |
| **ESLint** | 9.x | Linting y code quality |

### Build & Deployment
- **Hosting:** Vercel (Serverless functions + Edge, auto-deploy)
- **Dominios:** Squarespace (DNS management)
- **CDN:** Vercel Edge Network (optimización de imágenes y estáticos)
- **i18n:** Segmento dinámico `[lang]/` nativo de Next.js

---

## 2. Estructura de Carpetas

```text
aycweb/
├── app/                      # Next.js App Router
│   ├── [lang]/               # Segmento dinámico para i18n
│   │   ├── (marketing)/      # Grupo: rutas de exploración y contenido
│   │   │   ├── page.tsx      # Home multiidioma
│   │   │   ├── empresas/     
│   │   │   ├── obras/        # Portfolio con métricas de impacto
│   │   │   └── recursos/     # Librería B2B y Blog MDX
│   │   ├── (funnels)/        # Grupo: embudos de conversión directos
│   │   │   ├── diagnostico-comercial/ # Pre-calificación de leads
│   │   │   └── motor/demo/   # Demo interactiva del cotizador
│   │   └── (demos)/          # Demos técnicas aisladas
│   │       ├── aberturas/
│   │       ├── logística/
│   │       └── {...}
│   ├── api/                  # Server routes y Webhooks
│   │   └── submit-comment/   # POST comentarios anónimos a Supabase
│   ├── soluciones/           # Landings SEO programáticas por nicho
│   ├── globals.css           # Tailwind v4 globals + OKLCH variables
│   └── sitemap.ts            # Generación dinámica de sitemap.xml
│
├── components/               # Componentes React (UI)
│   ├── Navbar.tsx            # Navegación responsive
│   ├── obras/                # Tarjetas de impacto y portfolio
│   ├── soluciones/           # SolucionPageTemplate (SEO template)
│   ├── ui/                   # Floating FABs, Modals, Buttons
│   └── AnonymousCommentForm.tsx # Formulario interactivo del blog
│
├── lib/                      # Lógica de negocio core (No-UI)
│   ├── config/               # FUENTES ÚNICAS DE VERDAD (SSOT)
│   │   ├── contacto.ts       # WhatsApp numbers, plantillas de mensajes
│   │   ├── obras.ts          # Datos puros de portfolio y métricas
│   │   └── soluciones/       # Configuraciones de landings SEO
│   ├── services/             # Servicios de integración
│   │   ├── whatsapp-message.ts # Serialización y builder de wa.me
│   │   └── pdfBuilderService.ts # Motor de renderizado PDF
│   ├── domain/               # Motores de cálculo puros (testables)
│   └── i18n.ts               # Lógica de diccionarios e idiomas
│
├── public/                   # Assets estáticos
├── db/                       # Scripts SQL y esquemas de Supabase
├── vitest.config.ts          # Configuración de testing
└── next.config.ts            # Reglas de compilación y middleware
```
