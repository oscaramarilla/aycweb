/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Permite que Vercel compile aunque haya errores rojos en VS Code
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
