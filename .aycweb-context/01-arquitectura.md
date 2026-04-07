# ARQUITECTURA AYCWEB - REGLAS DE CÓDIGO

## 1. Capa de UI (`/app`, `/components`)
- Prohibido hacer cálculos complejos de negocio aquí.
- Los componentes deben ser funcionales y recibir datos vía props o hooks.
- Usar Tailwind CSS para estilos. Cero CSS personalizado a menos que sea estrictamente necesario.

## 2. Capa de Dominio (`/lib/domain`)
- Clases y tipos puros de TypeScript.
- Sin dependencias de React, Next.js ni APIs externas.
- Aquí viven las calculadoras de precios (ej. descuentos por volumen de Kingspan o Metal Mad).

## 3. Capa de Servicios (`/lib/services`)
- Orquestan el dominio y la infraestructura.
- Ejemplos: `WhatsAppDeepLinkService.ts`, `QuoteToPDFService.ts` (generado en memoria vía stream).

## 4. Capa de Infraestructura (`/lib/infrastructure`)
- Todo lo que sale al mundo exterior.
- Llamadas a APIs, clientes HTTP (fetch), manejo de reintentos.
