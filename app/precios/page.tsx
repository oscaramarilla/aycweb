import { Metadata } from "next";
import PreciosClient from "./PreciosClient";

export const metadata: Metadata = {
  title: "Planes y Precios B2B | AYCweb Paraguay",
  description:
    "Inversión clara desde USD $75. MVP Starter, Infraestructura Flash y Motor Operativo. Sin costos ocultos. Setup en 48-72hs en Paraguay.",
};

export default function PricingPage() {
  return <PreciosClient />;
}
