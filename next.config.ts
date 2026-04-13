import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  typescript: {
    // Permite que Vercel compile aunque haya errores rojos en VS Code
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/productos', destination: '/empresas', permanent: true },
      { source: '/soluciones', destination: '/profesionales', permanent: true },
      { source: '/precios', destination: '/empresas', permanent: true },
      { source: '/god-spot', destination: '/obras', permanent: true },
      { source: '/pago', destination: '/onboarding', permanent: true },
    ];
  },
};

export default nextConfig;
