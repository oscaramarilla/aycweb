"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Factory,
  Hammer,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  TrendingDown,
  Truck,
  Wrench,
  XCircle,
} from "lucide-react";

type ProductId = "ciclo1" | "ciclo2" | "ciclo3";

type Product = {
  id: ProductId;
  title: string;
  model: string;
  price: number;
  image: string;
  alt: string;
  description: string;
};

type Quantities = Record<ProductId, number>;

const WHATSAPP_NUMBER = "595982855219";

const BULK_PRICE = 530000;
const BULK_THRESHOLD = 30;

const PRODUCTS: Product[] = [
  {
    id: "ciclo1",
    title: "1er Ciclo",
    model: "CJA-03/04",
    price: 760000,
    image: "/images/pupitres/pupitre-primer-ciclo-cja-0304.webp",
    alt: "Pupitre escolar para primer ciclo modelo CJA-03/04 fabricado en Paraguay",
    description: "Altura adaptada para los primeros años escolares.",
  },
  {
    id: "ciclo2",
    title: "2do Ciclo",
    model: "CJA-04/05",
    price: 790000,
    image: "/images/pupitres/pupitre-segundo-ciclo-cja-0405.webp",
    alt: "Pupitre escolar para segundo ciclo modelo CJA-04/05 fabricado en Paraguay",
    description: "Diseñado para aulas de educación escolar básica.",
  },
  {
    id: "ciclo3",
    title: "3er Ciclo y Nivel Medio",
    model: "CJA-05",
    price: 810000,
    image: "/images/pupitres/pupitre-tercer-ciclo-nivel-medio.webp",
    alt: "Pupitre escolar para tercer ciclo y nivel medio fabricado en Paraguay",
    description: "Formato robusto para estudiantes mayores y uso intensivo.",
  },
];

const INITIAL_QUANTITIES: Quantities = {
  ciclo1: 0,
  ciclo2: 0,
  ciclo3: 0,
};

const PRESETS: Array<{
  label: string;
  description: string;
  quantities: Quantities;
}> = [
  {
    label: "Aula chica",
    description: "20 conjuntos",
    quantities: {
      ciclo1: 8,
      ciclo2: 8,
      ciclo3: 4,
    },
  },
  {
    label: "Aula estándar",
    description: "30 conjuntos",
    quantities: {
      ciclo1: 10,
      ciclo2: 10,
      ciclo3: 10,
    },
  },
  {
    label: "Institución",
    description: "100 conjuntos",
    quantities: {
      ciclo1: 35,
      ciclo2: 35,
      ciclo3: 30,
    },
  },
];

function formatGs(value: number) {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
    maximumFractionDigits: 0,
  }).format(value);
}

function safeQuantity(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.floor(value));
}

export default function MobiliarioEscolarFunnel() {
  const [quantities, setQuantities] = useState<Quantities>(INITIAL_QUANTITIES);

  const calculations = useMemo(() => {
    const totalQty = PRODUCTS.reduce((sum, product) => {
      return sum + quantities[product.id];
    }, 0);

    const standardTotal = PRODUCTS.reduce((sum, product) => {
      return sum + quantities[product.id] * product.price;
    }, 0);

    const isBulk = totalQty >= BULK_THRESHOLD;
    const finalTotal = isBulk ? totalQty * BULK_PRICE : standardTotal;
    const savings = Math.max(0, standardTotal - finalTotal);
    const unitsToDiscount = isBulk ? 0 : BULK_THRESHOLD - totalQty;
    const averageUnitPrice = totalQty > 0 ? Math.round(finalTotal / totalQty) : 0;

    return {
      totalQty,
      standardTotal,
      isBulk,
      finalTotal,
      savings,
      unitsToDiscount,
      averageUnitPrice,
    };
  }, [quantities]);

  const updateQuantity = (id: ProductId, value: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: safeQuantity(value),
    }));
  };

  const adjustQuantity = (id: ProductId, delta: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: safeQuantity(current[id] + delta),
    }));
  };

  const applyPreset = (preset: Quantities) => {
    setQuantities(preset);
  };

  const clearCalculator = () => {
    setQuantities(INITIAL_QUANTITIES);
  };

  const handleWhatsApp = () => {
    if (calculations.totalQty === 0) return;

    const lines = PRODUCTS.map((product) => {
      return `- ${product.title} ${product.model}: ${quantities[product.id]}`;
    }).join("\n");

    const text = `
Hola, vengo de AYCweb / Metal Mad.

Quiero solicitar un presupuesto formal de mobiliario escolar para una institución.

Cantidades estimadas:
${lines}

Total de conjuntos: ${calculations.totalQty}
Inversión estimada: ${formatGs(calculations.finalTotal)}
Precio promedio por conjunto: ${formatGs(calculations.averageUnitPrice)}

${
  calculations.isBulk
    ? `Tarifa institucional aplicada: ${formatGs(BULK_PRICE)} por conjunto.`
    : `Faltan ${calculations.unitsToDiscount} conjuntos para acceder a la tarifa institucional desde ${BULK_THRESHOLD} unidades.`
}

Necesito confirmar disponibilidad, plazo de entrega, condiciones de pago y logística.
    `.trim();

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-28 pt-24 text-white md:pb-36">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/pupitres/hero-aula-equipada-pupitres-escolares-paraguay.webp"
            alt="Aula equipada con pupitres escolares fabricados en Paraguay"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-950 shadow-lg shadow-amber-500/20">
              Fábrica directa en Paraguay
            </span>

            <div className="space-y-5">
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Mobiliario escolar{" "}
                <span className="text-amber-400">de alto rendimiento</span>{" "}
                para instituciones exigentes.
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Conjuntos ergonómicos con estructura metálica reforzada,
                diseñados para resistir años de uso escolar intensivo. Precio
                directo de fábrica, desde Lambaré para todo Paraguay.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cotizador"
                className="rounded-xl bg-amber-400 px-8 py-4 text-center text-lg font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
              >
                Cotizar equipamiento
              </a>

              <a
                href="/docs/pupitres/ficha-tecnica-mobiliario-escolar-metal-mad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                <Download size={20} />
                Ver ficha técnica
              </a>
            </div>

            <div className="grid gap-3 pt-4 text-sm text-slate-300 sm:grid-cols-3">
              <TrustPill icon={<Factory size={18} />} text="Fabricación nacional" />
              <TrustPill icon={<ShieldCheck size={18} />} text="Garantía directa" />
              <TrustPill icon={<Truck size={18} />} text="Entrega coordinada" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-amber-300">
              Compra institucional
            </p>

            <div className="space-y-4">
              <HeroMetric label="Desde 30 unidades" value={formatGs(BULK_PRICE)} />
              <HeroMetric label="Presupuesto formal" value="WhatsApp directo" />
              <HeroMetric label="Aplicación ideal" value="Aulas completas" />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950/70 p-5 text-sm leading-relaxed text-slate-300">
              El objetivo no es vender un pupitre aislado. El objetivo es
              equipar aulas completas con una solución durable, clara y fácil de
              presupuestar.
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE CONFIANZA */}
      <section className="relative z-10 -mt-12 border-b bg-slate-50 px-4 pb-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-slate-400">
            Infraestructura pensada para instituciones educativas
          </p>

          <div className="grid gap-4 text-sm font-black uppercase tracking-wide text-slate-500 md:grid-cols-4">
            <span className="rounded-2xl bg-slate-50 p-4">
              Fabricación nacional
            </span>
            <span className="rounded-2xl bg-slate-50 p-4">
              Proyectos por aula completa
            </span>
            <span className="rounded-2xl bg-slate-50 p-4">
              Presupuesto formal
            </span>
            <span className="rounded-2xl bg-slate-50 p-4">
              Entrega institucional
            </span>
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
          <Image
            src="/images/pupitres/comparativa-pupitre-economico-vs-reforzado.webp"
            alt="Comparativa entre pupitre económico y pupitre escolar reforzado"
            width={1200}
            height={850}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase text-white shadow-md">
            <XCircle size={14} />
            Recambio constante
          </div>

          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-black uppercase text-white shadow-md">
            <CheckCircle2 size={14} />
            Inversión durable
          </div>
        </div>

        <div>
          <span className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-700">
            El problema real
          </span>

          <h2 className="mb-5 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            El mobiliario escolar barato termina saliendo caro.
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-slate-600">
            Cuando una institución compra conjuntos endebles, el costo no
            termina en la primera factura: aparecen reparaciones, reposiciones,
            reclamos, aulas incompletas y pérdida de imagen frente a los padres.
          </p>

          <div className="space-y-6">
            <FeatureItem
              icon={<ShieldCheck size={28} />}
              iconClassName="bg-amber-100 text-amber-700"
              title="Garantía directa"
              text="Respondemos como fabricantes. Sin capas innecesarias entre la institución y el proveedor."
            />

            <FeatureItem
              icon={<Hammer size={28} />}
              iconClassName="bg-slate-100 text-slate-700"
              title="Estructura metálica reforzada"
              text="Chasis tubular pensado para reducir deformaciones, fisuras y pérdida de estabilidad frente al uso diario."
            />

            <FeatureItem
              icon={<BookOpen size={28} />}
              iconClassName="bg-blue-100 text-blue-700"
              title="Ergonomía por ciclo"
              text="Modelos adaptados para diferentes niveles educativos, con opción de mesas accesibles para inclusión."
            />
          </div>
        </div>
      </section>

      {/* COTIZADOR */}
      <section id="cotizador" className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-950">
              Simulador institucional
            </span>

            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Calculá la inversión para equipar tus aulas.
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
              Cargá las cantidades por nivel. Al llegar a 30 unidades, se aplica
              automáticamente la tarifa institucional para todos los conjuntos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-white p-5 text-slate-950 shadow-2xl md:p-10">
            <div className="mb-8 grid gap-3 md:grid-cols-4">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => applyPreset(preset.quantities)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <span className="block font-black text-slate-900">
                    {preset.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    {preset.description}
                  </span>
                </button>
              ))}

              <button
                type="button"
                onClick={clearCalculator}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 font-black text-slate-500 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <RotateCcw size={18} />
                Limpiar
              </button>
            </div>

            <div className="mb-8 space-y-4">
              {PRODUCTS.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  quantity={quantities[product.id]}
                  onChange={(value) => updateQuantity(product.id, value)}
                  onAdjust={(delta) => adjustQuantity(product.id, delta)}
                />
              ))}
            </div>

            <div className="mb-8">
              {calculations.totalQty === 0 ? (
                <div className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 p-5 text-center font-semibold text-slate-500">
                  <Wrench size={20} />
                  Ingresá la cantidad de conjuntos para iniciar la simulación.
                </div>
              ) : !calculations.isBulk ? (
                <div className="flex items-start gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950 shadow-inner">
                  <div className="shrink-0 rounded-full bg-amber-200 p-2">
                    <TrendingDown size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-black">
                      Estás cerca de la tarifa institucional.
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-amber-900">
                      Te faltan{" "}
                      <strong>{calculations.unitsToDiscount} conjuntos</strong>{" "}
                      para llegar a {BULK_THRESHOLD} unidades. Al alcanzar ese
                      volumen, todos los conjuntos pasan a{" "}
                      <strong>{formatGs(BULK_PRICE)} c/u</strong>.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950 shadow-inner">
                  <div className="shrink-0 rounded-full bg-emerald-200 p-2">
                    <CheckCircle2 size={24} />
                  </div>

                  <div>
                    <h4 className="text-lg font-black">
                      Tarifa institucional desbloqueada.
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                      Superaste las {BULK_THRESHOLD} unidades. La simulación ya
                      aplica el precio institucional de{" "}
                      <strong>{formatGs(BULK_PRICE)} por conjunto</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-slate-100 pt-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <span className="mb-1 block text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Inversión total estimada
                  </span>

                  <div className="text-4xl font-black text-slate-950 md:text-5xl">
                    {formatGs(calculations.finalTotal)}
                  </div>

                  {calculations.totalQty > 0 && (
                    <div className="mt-3 text-sm font-bold text-slate-500">
                      Total: {calculations.totalQty} conjuntos · Promedio:{" "}
                      {formatGs(calculations.averageUnitPrice)} c/u
                    </div>
                  )}

                  {calculations.savings > 0 && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
                      <TrendingDown size={18} />
                      Ahorro estimado: {formatGs(calculations.savings)}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={calculations.totalQty === 0}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-white shadow-lg transition hover:bg-[#20bd5a] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 md:w-auto"
                >
                  <MessageCircle size={24} />
                  Solicitar presupuesto formal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIFICACIONES */}
      <section className="bg-slate-50 px-4 py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-700">
            Fabricación
          </span>

          <h2 className="mb-4 text-3xl font-black text-slate-950 md:text-5xl">
            Materiales que marcan la diferencia.
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            No somos revendedores: fabricamos mobiliario pensado para uso
            institucional, con estructura metálica, terminación resistente y
            posibilidad de adaptar lotes por necesidad del proyecto.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <SpecCard
            image="/images/pupitres/soldadura-mig-estructura-pupitre.webp"
            alt="Soldadura MIG en estructura de pupitre escolar"
            title="Soldadura MIG continua"
            text="Chasis tubular ensamblado para reducir puntos débiles en zonas críticas de apoyo y movimiento."
          />

          <SpecCard
            image="/images/pupitres/pintura-epoxi-horneada-pupitre.webp"
            alt="Pintura epoxi horneada en mobiliario escolar"
            title="Pintura epoxi horneada"
            text="Terminación electrostática pensada para mejorar la resistencia frente a limpieza frecuente, roce y desgaste diario."
          />

          <SpecCard
            image="/images/pupitres/mesa-accesible-ma02.webp"
            alt="Mesa accesible para institución educativa"
            title="Opción de mesa accesible"
            text="Disponibilidad de modelos accesibles para instituciones que necesitan contemplar inclusión y movilidad."
          />
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-600">
              Proceso de compra
            </span>

            <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
              De la cotización a la entrega, sin vueltas.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <ProcessStep
              number="01"
              title="Cotización"
              text="Calculás el volumen estimado y enviás la solicitud por WhatsApp."
            />
            <ProcessStep
              number="02"
              title="Confirmación técnica"
              text="Validamos modelos, cantidades, colores, medidas y destino."
            />
            <ProcessStep
              number="03"
              title="Producción"
              text="Se programa el lote según volumen y condiciones acordadas."
            />
            <ProcessStep
              number="04"
              title="Entrega"
              text="Coordinamos logística para que el mobiliario llegue a la institución."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-black text-slate-950 md:text-5xl">
            Preguntas frecuentes institucionales
          </h2>

          <div className="space-y-5">
            <FaqItem
              question="¿Hacen entregas de pupitres escolares en todo Paraguay?"
              answer="Sí. Coordinamos la entrega desde fábrica para instituciones educativas, colegios privados, universidades e institutos dentro del territorio nacional."
            />

            <FaqItem
              question="¿Desde cuántas unidades aplica la tarifa institucional?"
              answer={`La tarifa institucional se activa desde ${BULK_THRESHOLD} unidades. A partir de ese volumen, el simulador aplica ${formatGs(BULK_PRICE)} por conjunto.`}
            />

            <FaqItem
              question="¿Pueden preparar presupuesto formal para administración o dirección?"
              answer="Sí. La solicitud por WhatsApp ya llega con cantidades, modelos y total estimado para acelerar la preparación del presupuesto formal."
            />

            <FaqItem
              question="¿Tienen modelos por nivel educativo?"
              answer="Sí. La página separa modelos para 1er ciclo, 2do ciclo, 3er ciclo y nivel medio, con alturas y formatos adecuados para cada etapa."
            />

            <FaqItem
              question="¿Se puede ajustar color, cantidad o tipo de lote?"
              answer="Sí. En pedidos institucionales se pueden revisar condiciones del lote, colores, cantidades, plazos y detalles técnicos antes de confirmar producción."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              Equipá aulas completas con precio institucional.
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Usá el simulador, definí cantidades estimadas y solicitá un
              presupuesto formal para tu institución.
            </p>
          </div>

          <a
            href="#cotizador"
            className="rounded-2xl bg-amber-400 px-8 py-5 text-center text-lg font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
          >
            Ir al cotizador
          </a>
        </div>
      </section>
    </main>
  );
}

function ProductRow({
  product,
  quantity,
  onChange,
  onAdjust,
}: {
  product: Product;
  quantity: number;
  onChange: (value: number) => void;
  onAdjust: (delta: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={product.image}
              alt={product.alt}
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-900">
              {product.title}{" "}
              <span className="text-slate-500">({product.model})</span>
            </h3>

            <p className="text-sm font-semibold text-slate-500">
              {product.description}
            </p>

            <p className="mt-1 text-sm font-black text-slate-700">
              Tarifa individual: {formatGs(product.price)} c/u
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => onAdjust(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100"
            aria-label={`Restar un conjunto de ${product.title}`}
          >
            <Minus size={18} />
          </button>

          <input
            type="number"
            inputMode="numeric"
            min={0}
            step={1}
            value={quantity === 0 ? "" : quantity}
            onChange={(event) => onChange(Number(event.target.value))}
            placeholder="0"
            className="h-12 w-24 rounded-xl border-2 border-slate-300 bg-white text-center text-xl font-black text-slate-950 outline-none transition focus:border-amber-400"
            aria-label={`Cantidad de ${product.title}`}
          />

          <button
            type="button"
            onClick={() => onAdjust(1)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100"
            aria-label={`Sumar un conjunto de ${product.title}`}
          >
            <Plus size={18} />
          </button>

          <button
            type="button"
            onClick={() => onAdjust(10)}
            className="hidden rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-black text-amber-800 transition hover:bg-amber-100 sm:block"
          >
            +10
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
      <span className="text-amber-300">{icon}</span>
      <span className="font-bold">{text}</span>
    </div>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
      <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <span className="mt-1 block text-2xl font-black text-white">{value}</span>
    </div>
  );
}

function FeatureItem({
  icon,
  iconClassName,
  title,
  text,
}: {
  icon: React.ReactNode;
  iconClassName: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className={`shrink-0 rounded-2xl p-4 ${iconClassName}`}>{icon}</div>
      <div>
        <h3 className="mb-1 text-xl font-black text-slate-950">{title}</h3>
        <p className="leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function SpecCard({
  image,
  alt,
  title,
  text,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
      <div className="relative h-56 w-full bg-slate-200">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 flex items-center gap-2 text-xl font-black text-slate-950">
          <CheckCircle2 className="text-amber-500" size={21} />
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </article>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <span className="mb-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">
        {number}
      </span>

      <h3 className="mb-2 text-xl font-black text-slate-950">{title}</h3>

      <p className="text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-amber-300 md:p-8">
      <h3 className="mb-3 flex items-start gap-3 text-xl font-black text-slate-900">
        <ArrowRight className="mt-1 shrink-0 text-amber-500" size={21} />
        {question}
      </h3>

      <p className="pl-8 leading-relaxed text-slate-600">{answer}</p>
    </article>
  );
}
