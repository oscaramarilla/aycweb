import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AYCweb | Infraestructura Digital B2B",
  description: "Automatizamos cotizaciones, contratos y captura de leads para empresas en Paraguay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
