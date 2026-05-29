import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTA: Se eliminó "output: 'export'" porque es incompatible con el proxy/middleware
  // de Next.js. La exportación estática no soporta lógica de servidor (autenticación,
  // redirecciones dinámicas, etc.). Para Android/Capacitor usar el build normal (.next/).
  compress: true,

  async redirects() {
    return [
      { source: '/productos',   destination: '/empresas',         permanent: true },
      { source: '/soluciones',  destination: '/profesionales',    permanent: true },
      { source: '/precios',     destination: '/empresas',         permanent: true },
      { source: '/god-spot',    destination: '/obras',            permanent: true },
      { source: '/pago',        destination: '/onboarding',       permanent: true },
      { source: '/controlroom', destination: '/admin/controlroom',permanent: true },
      { source: '/costos',      destination: '/admin/costos',     permanent: true },
      { source: '/contrato',    destination: '/admin/contrato',   permanent: true },
      // Migración de rutas huérfanas a [lang]/(funnels) — mayo 2026
      { source: '/diagnostico-comercial', destination: '/es/diagnostico-comercial', permanent: true },
      { source: '/motor/demo',            destination: '/es/demo-cotizador',        permanent: true },
      // Protección coherencia de precios B2B Premium — rutas legacy /os → /es/empresas
      { source: '/os',        destination: '/es/empresas', permanent: true },
      { source: '/os/:path*', destination: '/es/empresas', permanent: true },
    ];
  },
};

export default nextConfig;
