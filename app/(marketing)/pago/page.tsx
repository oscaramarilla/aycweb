"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

type CopyFieldProps = {
  label: string;
  value: string;
  helper?: string;
};

function CopyField({ label, value, helper }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="break-all text-base font-bold text-white">{value}</div>
          {helper ? <div className="mt-1 text-xs text-zinc-400">{helper}</div> : null}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-zinc-700"
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
    </div>
  );
}

export default function PagoFastTrack() {
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;

  const whatsappMsgPago = encodeURIComponent(
    "Hola Oscar. Ya realicé el pago o seña para iniciar mi sistema con AYCweb. Te adjunto el comprobante."
  );

  return (
    <div className="min-h-screen bg-zinc-950 pb-24 pt-12 text-zinc-50 md:pt-20">
      <section className="relative mx-auto mb-16 mt-10 max-w-4xl px-6 text-center">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[100px]" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/50 bg-emerald-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Acceso fast-track
        </div>

        <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
          Asegurá tu infraestructura operativa
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Para empresas y profesionales decididos. Elegí tu método de pago,
          enviá el comprobante y pasamos a la arquitectura de tu sistema.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl border border-zinc-800 bg-black p-8">
            <h2 className="mb-6 text-2xl font-black text-white">
              Nuestro flujo de trabajo
            </h2>

            <div className="space-y-5">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="mb-2 text-sm font-black text-blue-400">1. Diagnóstico</div>
                <p className="text-sm text-zinc-400">
                  Auditamos tu negocio para identificar cuellos de botella reales.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="mb-2 text-sm font-black text-blue-400">2. Arquitectura</div>
                <p className="text-sm text-zinc-400">
                  Diseñamos el sistema y los flujos exactos para tu operación.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="mb-2 text-sm font-black text-blue-400">3. Implementación</div>
                <p className="text-sm text-zinc-400">
                  Desarrollamos, desplegamos y dejamos todo listo para producción.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 text-center">
            <span className="mb-4 block text-4xl">🛡️</span>
            <h3 className="mb-3 text-lg font-bold text-white">Política de admisión</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Solo trabajamos con negocios alineados a nuestra visión. Si luego del
              diagnóstico inicial detectamos que no somos el equipo correcto para
              tu caso, te devolvemos el dinero correspondiente a la seña inicial.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <h3 className="mb-3 text-lg font-bold text-white">Antes de pagar</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Confirmá con nosotros el monto, la modalidad y el alcance del sistema.
              Luego elegí el método que más te convenga y enviá el comprobante por WhatsApp.
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl border-2 border-zinc-800 bg-black p-8 shadow-2xl md:p-10">
          <div className="mb-2 inline-block rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Checkout AYCweb
          </div>

          <h2 className="mb-2 mt-4 text-2xl font-black text-white">
            Coordenadas de pago
          </h2>
          <p className="mb-8 text-sm text-zinc-400">
            Podés pagar por transferencia fiat o por crypto. Ambos métodos terminan
            con confirmación por WhatsApp.
          </p>

          <div className="mb-6 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span className="text-lg">🏦</span> Pago Fiat
            </div>

            <div className="mb-5 grid grid-cols-1 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                <div className="mb-2 text-sm font-bold text-white">Ueno Bank</div>
                <div className="mb-3 text-sm text-zinc-400">
                  Titular: Oscar Amarilla
                </div>
                <CopyField
                  label="CI / Alias"
                  value="4499507"
                  helper="Vinculado a Ueno Bank"
                />
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                <div className="mb-2 text-sm font-bold text-white">Itaú Paraguay</div>
                <div className="mb-3 text-sm text-zinc-400">
                  Titular: Oscar Amarilla
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <CopyField
                    label="Celular"
                    value="0985864209"
                    helper="Vinculado a Itaú"
                  />
                  <CopyField
                    label="Número de cuenta"
                    value="720601573"
                    helper="Banco Itaú"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-white p-3">
              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <Image
                  src="/qr-fiat.webp"
                  alt="QR fiat de pago"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              <span className="text-lg">💰</span> Pago Crypto
            </div>

            <p className="mb-5 text-sm leading-relaxed text-zinc-400">
              Escaneá el QR para acceder a la billetera o link de pago internacional.
            </p>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-white p-3">
              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <Image
                  src="/qr-crypto.webp"
                  alt="QR crypto de pago"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgPago}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-center font-black text-black transition hover:bg-zinc-200"
          >
            Enviar comprobante por WhatsApp
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <div className="mt-4 text-center text-xs text-zinc-500">
            Luego del pago, enviá tu comprobante y te guiamos con el siguiente paso.
          </div>

          <Link
            href="/soluciones"
            className="mt-6 text-center text-sm font-bold text-zinc-400 transition hover:text-white"
          >
            ← Volver a soluciones
          </Link>
        </div>
      </div>
    </div>
  );
}
