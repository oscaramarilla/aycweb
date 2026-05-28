import type { Metadata } from "next";

// Evita indexación de Google: landing de venta directa con precios B2B Premium.
// La ruta canónica pública es /es/empresas.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OscarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
