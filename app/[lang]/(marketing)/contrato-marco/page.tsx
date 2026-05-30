import type { Metadata } from "next";
import ContratoMarcoClient from "./ContratoMarcoClient";

export const metadata: Metadata = {
  title: "Contrato Marco de Servicios | AYCweb",
  description:
    "Documento operativo privado — Contrato Marco de Prestación de Servicios de Infraestructura Digital de AYCweb.",
  alternates: {
    canonical: "https://www.aycweb.com/es/contrato-marco",
  },
  robots: { index: false, follow: false },
};

export default function ContratoMarcoPage() {
  return <ContratoMarcoClient />;
}
