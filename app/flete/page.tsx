import { Metadata } from 'next';
import CalculadoraFletes from '../../components/tools/CalculadoraFletes';

// Magia SEO
export const metadata: Metadata = {
  title: 'Calculadora de Fletes B2B | AYCweb',
  description: 'Calculá costos operativos, peajes, diésel y margen de ganancia para fletes logísticos en Paraguay al instante.',
};

export default function FletePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Calculadora Logística</h1>
        <p className="text-zinc-400">Una muestra de nuestros motores de cálculo B2B a medida.</p>
      </div>
      
      {/* Llamamos al componente interactivo */}
      <CalculadoraFletes />
    </div>
  );
}
