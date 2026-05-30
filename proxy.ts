/**
 * proxy.ts — AYCweb
 *
 * Convención Next.js 16+: este archivo reemplaza a "middleware.ts" (deprecado).
 * Protege rutas internas/administrativas mediante autenticación HTTP Basic.
 *
 * Rutas protegidas:
 *   /controlroom  → panel de control interno
 *   /panel        → panel de administración
 *   /autoppto     → herramienta interna de presupuestos
 *   /legales      → documentos legales internos
 *   /admin/*      → cualquier subruta administrativa
 *
 * Variables de entorno requeridas en producción:
 *   ADMIN_USER — nombre de usuario administrador
 *   ADMIN_PASS — contraseña administrador
 */

import { NextRequest, NextResponse } from "next/server";
import { locales } from "./lib/i18n";

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const isProduction = process.env.NODE_ENV === "production";

/** Respuesta 401 con cabecera WWW-Authenticate para disparar el diálogo del navegador */
function unauthorizedResponse() {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Acceso restringido — AYCweb</title></head>
<body style="font-family:sans-serif;text-align:center;padding:4rem">
  <h1>🔒 Acceso restringido</h1>
  <p>Necesitás credenciales válidas para acceder a esta sección.</p>
  <a href="/">← Volver al inicio</a>
</body>
</html>`,
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="AYCweb Admin"',
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}

/** Respuesta 500 cuando las variables de entorno no están configuradas en producción */
function serverErrorResponse(message: string) {
  return new NextResponse(
    JSON.stringify({ error: message }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

/** Valida las credenciales HTTP Basic contra las variables de entorno */
function checkCredentials(authorization: string | null): boolean {
  if (!authorization || !authorization.startsWith("Basic ")) {
    return false;
  }

  const encoded = authorization.split(" ")[1] || "";
  let decoded = "";

  try {
    decoded = Buffer.from(encoded, "base64").toString("utf-8");
  } catch {
    return false;
  }

  const colonIndex = decoded.indexOf(":");
  if (colonIndex === -1) return false;

  const user = decoded.slice(0, colonIndex);
  const pass = decoded.slice(colonIndex + 1);

  return user === ADMIN_USER && pass === ADMIN_PASS;
}

export function proxy(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;

    // Si la ruta es administrativa, aplicamos autenticación HTTP Basic
    if (
      pathname.startsWith("/controlroom") ||
      pathname.startsWith("/panel") ||
      pathname.startsWith("/autoppto") ||
      pathname.startsWith("/legales") ||
      pathname.startsWith("/admin")
    ) {
      // En producción, las variables de entorno son obligatorias
      if (isProduction && (!process.env.ADMIN_USER || !process.env.ADMIN_PASS)) {
        return serverErrorResponse(
          "Protección administrativa no configurada. Establecé ADMIN_USER y ADMIN_PASS en las variables de entorno."
        );
      }

      const auth = req.headers.get("authorization");

      if (!checkCredentials(auth)) {
        return unauthorizedResponse();
      }

      return NextResponse.next();
    }

    // Lógica i18n: evita rutas estáticas, Next internals, y el hub SEO sin locale
    const isIgnored =
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname === "/soluciones" ||           // Hub SEO raíz — sin prefijo de idioma por diseño
      pathname.startsWith("/soluciones/") ||  // Landings SEO /soluciones/* — sin prefijo de idioma
      pathname === "/favicon.ico" ||
      /\.(?:svg|png|jpg|jpeg|gif|webp|ico)$/.test(pathname);

    if (!isIgnored) {
      const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
      );

      if (!pathnameHasLocale) {
        // Forzamos siempre el idioma por defecto (es) para evitar canibalización SEO
        const best = "es";
        req.nextUrl.pathname = `/${best}${pathname}`;
        return NextResponse.redirect(req.nextUrl);
      }
    }

    return NextResponse.next();
  } catch {
    // Si algo falla inesperadamente, dejamos pasar la petición para evitar un 500
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/controlroom/:path*",
    "/panel/:path*",
    "/autoppto/:path*",
    "/legales/:path*",
    "/admin/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
