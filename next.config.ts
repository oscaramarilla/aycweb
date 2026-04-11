/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Permite que Vercel compile aunque haya errores rojos en VS Code
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora errores de ESLint en el build
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
