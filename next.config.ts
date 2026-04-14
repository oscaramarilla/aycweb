import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      { source: '/productos', destination: '/empresas', permanent: true },
      { source: '/soluciones', destination: '/profesionales', permanent: true },
      { source: '/precios', destination: '/empresas', permanent: true },
      { source: '/god-spot', destination: '/obras', permanent: true },
      { source: '/pago', destination: '/onboarding', permanent: true },
      { source: '/controlroom', destination: '/admin/controlroom', permanent: true },
      { source: '/costos', destination: '/admin/costos', permanent: true },
      { source: '/contrato', destination: '/admin/contrato', permanent: true },
    ];
  },
};

export default nextConfig;
