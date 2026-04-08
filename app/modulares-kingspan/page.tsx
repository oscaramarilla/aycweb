import React from "react";
import Link from "next/link";
import { ModularesKingspanConfig } from "@/lib/config/client";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function ModularesKingspanLanding() {
  const { contact, hero, benefits, cta } = ModularesKingspanConfig;
  const whatsappNumber = contact?.whatsappNumber ?? AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsg = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    AYCWEB_CONTACT.clientMessages?.modularesKingspan?.quotation ?? AYCWEB_CONTACT.globalMessages.generalInquiry
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Soluciones de Construcción Modular B2B
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            {hero.title.split(":")[0]} <br /><span className="text-blue-500">{hero.title.split(":")[1]}</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* BENEFICIOS Y CARACTERÍSTICAS */}
      <section className="py-16 px-6 bg-zinc-900 border-t border-b border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
         {benefits?.map((benefit, index) => (
            <div key={index} className="p-6 bg-zinc-950 rounded-xl border border-zinc-800 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">{benefit}</h3>
              <p className="text-zinc-400">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{cta?.title}</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            {cta?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappMsg}
              target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
            >
           {String(hero?.callToAction)}
            </a>
            <Link href="/contacto" className="bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 text-white font-bold py-4 px-10 rounded-xl transition-all">
              {cta?.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
