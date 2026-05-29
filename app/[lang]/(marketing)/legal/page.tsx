import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | AYCweb",
  description:
    "Términos y Condiciones de Servicio de AYCweb, incluyendo la Política de Pagos con Criptoactivos (USDT TRC20) para operaciones internacionales.",
  alternates: {
    canonical: "https://aycweb.com/es/legal",
  },
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">

      {/* ═══════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="px-6 pt-28 pb-12 text-center border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full mb-5">
            Documento Legal · Legal Document
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            Términos y Condiciones de Servicio
            <span className="block text-slate-500 text-xl md:text-2xl mt-2 font-bold">
              Terms of Service
            </span>
          </h1>
          <p className="text-slate-500 text-sm">
            AYCweb · aycweb.com · Última actualización / Last updated:{" "}
            <time dateTime="2026-05-29">29 de mayo de 2026</time>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTENIDO PRINCIPAL
      ════════════════════════════════════════════════════ */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* ── 1. Objeto del Servicio ── */}
        <section>
          <h2 className="text-xl font-black text-white mb-4 pb-2 border-b border-slate-800">
            1. Objeto del Servicio
          </h2>
          <p className="text-slate-400 leading-relaxed text-[15px]">
            AYCweb (en adelante &ldquo;el Proveedor&rdquo;) ofrece servicios de infraestructura digital B2B
            —incluyendo diseño, desarrollo, despliegue y mantenimiento de sistemas web— a empresas y
            profesionales independientes. La contratación implica la aceptación plena de los presentes
            Términos y Condiciones.
          </p>
        </section>

        {/* ── 2. Política de Pagos con Criptoactivos ── */}
        <section id="cripto" className="scroll-mt-24">
          {/* Badge decorativo */}
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
            ⬡ Política de Pagos con Criptoactivos
          </span>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
            Política de Pagos con Criptoactivos{" "}
            <span className="text-emerald-400">(USDT TRC20)</span>
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Cryptocurrency Payment Policy · Política de Pagamentos com Criptoativos
          </p>

          {/* ── Bloque EN ESPAÑOL ── */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇪🇸</span>
              <h3 className="text-lg font-black text-white">Español</h3>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-slate-600 font-bold">
                ES
              </span>
            </div>

            <p className="text-slate-400 text-[14px] leading-relaxed mb-5">
              El Proveedor acepta pagos en{" "}
              <strong className="text-white">USDT (Tether) sobre la red TRC20 (TRON)</strong> como método
              de pago válido para todos sus servicios. Al elegir esta modalidad, el Cliente declara
              conocer y aceptar las siguientes condiciones:
            </p>

            <ol className="space-y-4 text-[14px] text-slate-300 list-none">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Irreversibilidad de transacciones en blockchain
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Los pagos realizados mediante criptoactivos son <strong className="text-slate-200">irreversibles por naturaleza tecnológica</strong>.
                    Una vez confirmada la transacción en la red TRON (mínimo 1 confirmación de bloque),
                    el Proveedor no podrá revertirla bajo ningún concepto. El Cliente es el único responsable
                    de verificar la dirección de destino y la red seleccionada (exclusivamente TRC20) antes de
                    ejecutar la transferencia. Envíos realizados a redes incorrectas (ERC20, BEP20, u otras)
                    son irrecuperables y el Proveedor no asume responsabilidad alguna por dichas pérdidas.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Confirmación del servicio y comprobante de pago
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    La activación del servicio quedará sujeta a la <strong className="text-slate-200">confirmación del pago</strong>{" "}
                    mediante el envío del hash (ID) de transacción al canal oficial de WhatsApp del Proveedor.
                    El Proveedor se reserva el derecho de verificar la transacción on-chain antes de iniciar
                    cualquier despliegue. El tiempo de procesamiento estándar es de hasta{" "}
                    <strong className="text-slate-200">24 horas hábiles</strong> desde la confirmación recibida.
                    Pagos no confirmados o con hash inválido no activarán el servicio.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Cumplimiento normativo y declaración de origen de fondos
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    El Cliente declara bajo su exclusiva responsabilidad que los fondos utilizados para el pago
                    son de <strong className="text-slate-200">origen lícito</strong> y no provienen de actividades prohibidas
                    por la legislación vigente en su jurisdicción ni por normativas internacionales antilavado
                    (AML/CFT). El Proveedor cumple con la normativa paraguaya aplicable y se reserva el derecho
                    de rechazar o reembolsar pagos que presenten señales de alerta o provengan de wallets
                    identificadas por organismos de control internacionales como de riesgo elevado o sancionadas.
                    Asimismo, queda prohibido el uso de este servicio por parte de personas físicas o jurídicas
                    incluidas en listas de sanciones internacionales (OFAC, ONU, UE).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* ── Bloque EN PORTUGUÉS ── */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇧🇷</span>
              <h3 className="text-lg font-black text-white">Português</h3>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-slate-600 font-bold">
                PT
              </span>
            </div>

            <p className="text-slate-400 text-[14px] leading-relaxed mb-5">
              O Provedor aceita pagamentos em{" "}
              <strong className="text-white">USDT (Tether) na rede TRC20 (TRON)</strong> como método de
              pagamento válido para todos os seus serviços. Ao escolher esta modalidade, o Cliente declara
              conhecer e aceitar as seguintes condições:
            </p>

            <ol className="space-y-4 text-[14px] text-slate-300 list-none">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Irreversibilidade de transações em blockchain
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Os pagamentos realizados por meio de criptoativos são{" "}
                    <strong className="text-slate-200">irreversíveis por natureza tecnológica</strong>.
                    Uma vez confirmada a transação na rede TRON (mínimo 1 confirmação de bloco), o Provedor
                    não poderá revertê-la sob nenhuma circunstância. O Cliente é o único responsável por
                    verificar o endereço de destino e a rede selecionada (exclusivamente TRC20) antes de
                    executar a transferência. Envios realizados para redes incorretas (ERC20, BEP20 ou outras)
                    são irrecuperáveis e o Provedor não assume qualquer responsabilidade por tais perdas.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Confirmação do serviço e comprovante de pagamento
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    A ativação do serviço estará sujeita à{" "}
                    <strong className="text-slate-200">confirmação do pagamento</strong> mediante o envio do
                    hash (ID) da transação ao canal oficial de WhatsApp do Provedor. O Provedor reserva-se
                    o direito de verificar a transação on-chain antes de iniciar qualquer implantação. O
                    prazo padrão de processamento é de até{" "}
                    <strong className="text-slate-200">24 horas úteis</strong> a partir da confirmação
                    recebida. Pagamentos não confirmados ou com hash inválido não ativarão o serviço.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white block mb-1">
                    Conformidade normativa e declaração de origem de fundos
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    O Cliente declara sob sua exclusiva responsabilidade que os fundos utilizados para o
                    pagamento são de <strong className="text-slate-200">origem lícita</strong> e não provêm
                    de atividades proibidas pela legislação vigente em sua jurisdição nem por normas
                    internacionais antilavagem (AML/CFT). O Provedor cumpre com a regulamentação paraguaia
                    aplicável e reserva-se o direito de recusar ou reembolsar pagamentos que apresentem
                    sinais de alerta ou provenham de carteiras identificadas por organismos de controle
                    internacionais como de alto risco ou sancionadas. Também fica proibido o uso deste
                    serviço por pessoas físicas ou jurídicas incluídas em listas de sanções internacionais
                    (OFAC, ONU, UE).
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ── 3. Garantía y Devoluciones ── */}
        <section>
          <h2 className="text-xl font-black text-white mb-4 pb-2 border-b border-slate-800">
            3. Garantía y Devoluciones
          </h2>
          <p className="text-slate-400 leading-relaxed text-[15px]">
            AYCweb ofrece una garantía de <strong className="text-white">30 días</strong> desde el despliegue
            del sistema. En caso de solicitud de reembolso dentro de dicho plazo, el Proveedor evaluará la
            solicitud y, de ser procedente, realizará la devolución mediante el mismo método de pago
            utilizado. Para pagos en criptoactivos, el reembolso se realizará en USDT al tipo de cambio
            vigente en el momento de la devolución, no en el momento del pago original, dada la volatilidad
            inherente a los mercados de activos digitales.
          </p>
        </section>

        {/* ── 4. Jurisdicción ── */}
        <section>
          <h2 className="text-xl font-black text-white mb-4 pb-2 border-b border-slate-800">
            4. Jurisdicción y Ley Aplicable
          </h2>
          <p className="text-slate-400 leading-relaxed text-[15px]">
            Estos Términos y Condiciones se rigen por las leyes de la{" "}
            <strong className="text-white">República del Paraguay</strong>. Cualquier controversia derivada
            de la relación contractual entre el Cliente y el Proveedor será sometida a la jurisdicción
            de los Tribunales competentes de Asunción, Paraguay, con renuncia expresa a cualquier otro
            fuero que pudiera corresponder.
          </p>
        </section>

        {/* ── 5. Contacto ── */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 md:p-8">
          <h2 className="text-xl font-black text-white mb-3">
            5. Contacto y Consultas Legales
          </h2>
          <p className="text-slate-400 text-[14px] leading-relaxed mb-4">
            Para consultas relacionadas con estos Términos y Condiciones, la Política de Pagos con
            Criptoactivos u otras cuestiones legales, podés contactarnos a través de:
          </p>
          <ul className="space-y-2 text-[14px]">
            <li className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400">→</span>
              <span>
                <strong className="text-white">Web:</strong>{" "}
                <a
                  href="https://aycweb.com"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
                >
                  aycweb.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400">→</span>
              <span>
                <strong className="text-white">WhatsApp:</strong> Canal oficial indicado en cada propuesta comercial
              </span>
            </li>
          </ul>
        </section>

        {/* ── Aviso final ── */}
        <p className="text-center text-xs text-slate-600 border-t border-slate-900 pt-8">
          © {new Date().getFullYear()} AYCweb · Todos los derechos reservados ·{" "}
          <span className="text-slate-700">aycweb.com</span>
        </p>

      </div>
    </div>
  );
}
