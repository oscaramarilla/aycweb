import type { Metadata } from "next";
import CalculadoraFletes from "@/components/tools/MotorFletes";

export const metadata: Metadata = {
  title: "Motor Inteligente de Fletes | AYCweb",
  description: "Calculadora logística B2B conectada a Petropar. Costos operativos, personal, desgaste y rentabilidad automatizada en Paraguay.",
};

export default function FletePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-black text-white mb-4">
          Arquitectura Logística Digital
        </h1>
        <p className="text-zinc-400 text-lg">
          No vendemos páginas. Construimos infraestructura operativa. <br/>
          Probá en vivo cómo nuestro software convierte el caos logístico en números rentables y transparentes.
        </p>
      </div>

      <CalculadoraFletes />
    </div>
  );
}
