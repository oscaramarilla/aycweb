import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AYC Web | Automatización y sistemas digitales para vender más",
  description:
    "Landing de alto enfoque comercial para captar leads, mostrar métodos de pago y cerrar por WhatsApp con mensajes preconfigurados.",
  openGraph: {
    title: "AYC Web | Automatización y sistemas digitales para vender más",
    description:
      "Landing optimizada para conversión, experiencia mobile y alto rendimiento.",
    url: "https://aycweb.com",
    siteName: "AYC Web",
    locale: "es_PY",
    type: "website",
  },
  alternates: {
    canonical: "https://aycweb.com",
  },
};

type Plan = {
  id: string;
  name: string;
  price: string;
  badge?: string;
  summary: string;
  features: string[];
  whatsappText: string;
};

type PaymentMethod = {
  id: string;
  title: string;
  description: string;
  details: string[];
  qrSrc: string;
  qrAlt: string;
  note: string;
};

const WHATSAPP_NUMBER = "595982451828";

const plans: Plan[] = [
  {
    id: "landing-flash",
    name: "Landing Page Flash",
    price: "Gs. 1.500.000",
    badge: "Entrada rápida",
    summary:
      "Ideal para salir ya a vender con una página enfocada en contacto, autoridad y WhatsApp.",
    features: [
      "Landing comercial 100% responsive",
      "Copy orientado a conversión",
      "Botones estratégicos a WhatsApp",
      "Sección de prueba social y objeciones",
      "Bloque de pago con QR y datos visibles",
      "Entrega rápida",
    ],
    whatsappText:
      "Hola Oscar. Quiero avanzar con el plan Landing Page Flash de AYC Web. Ya revisé los datos de pago y quiero continuar.",
  },
  {
    id: "automatizacion-inicial",
    name: "Automatización Inicial",
    price: "Gs. 2.500.000",
    badge: "Más recomendado",
    summary:
      "Para empresas que necesitan algo más que una web: captar, ordenar y acelerar su operación comercial.",
    features: [
      "Todo lo del plan Landing Page Flash",
      "Formulario empresarial inteligente",
      "Flujo de captación y precalificación",
      "CTA por etapa del embudo",
      "Bloques por sector o caso de uso",
      "Base preparada para escalar a sistema interno",
    ],
    whatsappText:
      "Hola Oscar. Quiero avanzar con el plan Automatización Inicial de AYC Web. Ya revisé los datos de pago y quiero continuar.",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: "fiat",
    title: "Pago en fiat",
    description:
      "Transferencia bancaria, billetera o cobro local. Reemplazá estos datos por los reales antes de publicar.",
    details: [
      "Titular: AYC WEB / OSCAR AMARILLA",
      "Banco: TU BANCO AQUÍ",
      "Cuenta: 0000000000",
      "Alias / referencia: AYCWEB",
      "Moneda: Guaraníes (PYG)",
    ],
    qrSrc: "/payments/qr-fiat.png",
    qrAlt: "QR de pago fiat de AYC Web",
    note:
      "Después del pago, tocá el botón de confirmación para enviar el comprobante por WhatsApp.",
  },
  {
    id: "crypto",
    title: "Pago en cripto",
    description:
      "Podés mostrar USDT, BTC u otra red. Reemplazá wallet, red y QR por los definitivos.",
    details: [
      "Moneda sugerida: USDT",
      "Red sugerida: TRC20 o la que uses realmente",
      "Wallet: TU_WALLET_AQUI",
      "Confirmación: enviar hash o captura del envío",
    ],
    qrSrc: "/payments/qr-crypto.png",
    qrAlt: "QR de pago cripto de AYC Web",
    note:
      "Verificá siempre que la red y la wallet coincidan antes de enviar fondos.",
  },
];

const trustPoints = [
  "Automatización pensada para vender, no para decorar.",
  "Embudo lógico: atención, prueba, pago y cierre.",
  "Diseño liviano, mobile-first y sin scripts innecesarios.",
  "Código preparado para SEO, claridad comercial y velocidad.",
];

const results = [
  {
    label: "Respuesta comercial",
    value: "2 horas → 15 segundos",
  },
  {
    label: "Experiencia",
    value: "Embudo simple y sin fricción",
  },
  {
    label: "Enfoque",
    value: "B2B / B2G / PyMEs serias",
  },
];

function makeWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      id={plan.id}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {plan.badge ?? "Plan"}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">
            {plan.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{plan.summary}</p>
        </div>
        <div className="rounded-2xl bg-zinc-950 px-4 py-3 text-right text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">Inversión</p>
          <p className="mt-1 text-xl font-black">{plan.price}</p>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 text-sm text-zinc-700">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-zinc-950" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-sm font-bold text-zinc-950">Embudo de cierre recomendado</p>
        <ol className="mt-3 grid gap-2 text-sm text-zinc-700">
          <li>1. Revisás el plan.</li>
          <li>2. Abrís el método de pago.</li>
          <li>3. Escaneás el QR o copiás los datos.</li>
          <li>4. Confirmás por WhatsApp con mensaje ya preparado.</li>
        </ol>
      </div>

      <div className="mt-6 grid gap-4">
        {paymentMethods.map((method) => {
          const message = `${plan.whatsappText} Método elegido: ${method.title}.`;

          return (
            <details
              key={`${plan.id}-${method.id}`}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 open:border-zinc-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-zinc-950">{method.title}</p>
                  <p className="mt-1 text-sm text-zinc-600">{method.description}</p>
                </div>
                <span className="shrink-0 rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700 transition group-open:border-zinc-950 group-open:text-zinc-950">
                  Ver datos
                </span>
              </summary>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-bold text-zinc-950">Datos de pago</p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                    {method.details.map((detail) => (
                      <li key={detail} className="rounded-xl border border-zinc-200 bg-white px-3 py-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-5 text-zinc-500">{method.note}</p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-zinc-200 p-4 text-center">
                  <Image
                    src={method.qrSrc}
                    alt={method.qrAlt}
                    width={220}
                    height={220}
                    className="h-auto w-full max-w-[220px] rounded-2xl border border-zinc-200"
                  />
                  <p className="mt-3 text-sm font-semibold text-zinc-950">Escaneá el QR para pagar</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Después de pagar, confirmá abajo para acelerar la validación.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={makeWhatsAppLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-zinc-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:opacity-90"
                >
                  Ya hice el pago · Confirmar por WhatsApp
                </a>
                <a
                  href={makeWhatsAppLink(
                    `${plan.whatsappText} Todavía no pagué. Quiero reservar el plan ${plan.name} y necesito asistencia.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-zinc-300 px-5 py-3 text-center text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
                >
                  Quiero reservar y hacer una consulta
                </a>
              </div>
            </details>
          );
        })}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 sm:text-sm">
            Agencia de automatización y sistemas digitales · B2B / B2G · Paraguay
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
              Embudo serio para vender más rápido
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Convertí tu web en un sistema lógico de atención, pago y cierre.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              No vendemos una página linda. Diseñamos una estructura comercial clara para captar,
              mostrar valor, presentar métodos de pago y cerrar por WhatsApp sin perder velocidad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planes"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Ver planes y activar pago
              </a>
              <a
                href={makeWhatsAppLink(
                  "Hola Oscar. Estuve viendo aycweb.com y quiero que me asesores sobre cuál plan me conviene más."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
              >
                Hablar por WhatsApp ahora
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {results.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-black text-zinc-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Qué obtiene el cliente
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Un recorrido sin fricción.
            </h2>
            <ul className="mt-6 grid gap-4">
              {trustPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-sm leading-6 text-zinc-200">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-bold">Ideal para:</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                empresas que quieren vender con más orden, mostrar autoridad y permitir que el cliente
                pague con confianza antes de confirmar la operación.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Captar",
                text: "Mensaje claro, propuesta concreta y CTA sin distracciones.",
              },
              {
                title: "2. Cobrar",
                text: "Métodos de pago visibles con QR y datos accesibles desde el celular.",
              },
              {
                title: "3. Confirmar",
                text: "Botón final con mensaje preconfigurado para validar rápido por WhatsApp.",
              },
            ].map((step) => (
              <article key={step.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {step.title}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Planes listos para vender
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Elegí tu plan, revisá el pago y cerrá en el mismo flujo.
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Cada plan ya incluye el paso lógico de cobro y confirmación. Así el visitante entiende,
            confía y actúa sin perderse.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Objeciones frecuentes
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
                Lo importante no es solo el diseño. Es la lógica comercial.
              </h2>
            </div>
            <div className="grid gap-4">
              {[
                {
                  q: "¿Por qué mostrar el pago antes del WhatsApp?",
                  a: "Porque reduce fricción. El cliente serio quiere ver cuánto cuesta y cómo pagar sin tener que pedir permiso para cada paso.",
                },
                {
                  q: "¿Esto sigue siendo mobile-first?",
                  a: "Sí. Todo está pensado en bloques, lectura simple, botones altos, contraste fuerte y cero dependencia de animaciones pesadas.",
                },
                {
                  q: "¿Se puede mejorar después?",
                  a: "Sí. Esta base está hecha para escalar a casos, sectores, formularios más avanzados y automatizaciones internas.",
                },
              ].map((item) => (
                <article key={item.q} className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-zinc-950">{item.q}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-700">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Cierre directo
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Si querés, la versión ideal es fusionar la claridad de aycweb.com con la fuerza de /oscar.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                Esta propuesta hace exactamente eso: mantiene autoridad, muestra precio, enseña cómo
                pagar y recién después empuja la confirmación por WhatsApp.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href="#planes"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:opacity-90"
              >
                Elegir plan ahora
              </a>
              <a
                href={makeWhatsAppLink(
                  "Hola Oscar. Quiero que implementemos esta nueva landing con embudo lógico, pago visible y cierre por WhatsApp."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-bold text-white transition hover:border-white"
              >
                Pedir implementación por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold text-zinc-950">¿Listo para activar el embudo?</p>
            <p className="text-xs text-zinc-600">Elegí plan, mirá el pago y confirmá por WhatsApp.</p>
          </div>
          <div className="grid gap-3 sm:flex">
            <a
              href="#planes"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Ver planes
            </a>
            <a
              href={makeWhatsAppLink(
                "Hola Oscar. Estoy listo para avanzar y necesito ayuda para elegir el plan correcto."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

