"use client";

import { useState } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/config/contacto";
import { LEGAL_INFO } from "@/lib/config/legal";

type CopyFieldProps = {
  label: string;
  value: string;
};

const CopyField = ({ label, value }: CopyFieldProps) => {
  const [copied, setCopied] = useState(false);

  const executeCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm group">
      <div className="flex min-w-0 flex-col gap-1 overflow-hidden sm:flex-row sm:items-center">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {label}
        </span>
        <span className="truncate font-mono text-sm text-zinc-200">{value}</span>
      </div>

      <button
        onClick={executeCopy}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          copied
            ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default function OnboardingPage() {
  const whatsappNumber = WHATSAPP_NUMBER;
  const whatsappClosingMsg = encodeURIComponent("Hello AYC, I have just completed my onboarding and payment to start the development of my system. Attached is the receipt.");
  
  // State for International Accounts Tab
  const [tabIntl, setTabIntl] = useState<'USA' | 'EUR' | 'MEX'>('USA');

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Client Portal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Three ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">ignite the engine.</span>
          </h1>
          <h2 className="mb-3 text-lg text-slate-200 font-bold opacity-90">
            Operational Onboarding for Approved Clients
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-6">
            This activation and payment gateway is strictly designated for clients who have completed the commercial diagnostic, or for express activations previously agreed upon with our firm.
          </p>
        </div>
      </section>

      {/* ── INSTITUTIONAL TRUST CARD ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto mb-8">
        <div className="relative bg-slate-900/50 border border-slate-700/60 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/20 via-transparent to-emerald-900/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/oscar.jpg"
                alt="Oscar Amarilla"
                className="w-16 h-16 rounded-full object-cover bg-slate-800 border-2 border-slate-700"
              />
            </div>

            <div className="flex-1">
              <p className="text-white font-bold text-base mb-1">
                I'm Oscar Amarilla, Director at AYCweb and your Lead Technical Manager.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We operate under <span className="text-slate-300 font-semibold">Tax ID (RUC) 4499507-5</span>, fully registered and compliant with the <span className="text-slate-300 font-semibold">National Directorate of Tax Revenues (DNIT)</span> in Paraguay. Every transaction is legally backed by an officially incorporated firm.
              </p>
            </div>

            <div className="flex-shrink-0 text-center hidden md:block">
              <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-4 py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-400 mb-0.5">Verified Entity</p>
                <p className="text-white font-mono font-bold text-sm">4499507-5</p>
                <p className="text-[9px] text-slate-500 mt-0.5">DNIT Paraguay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 1: MASTER SERVICE AGREEMENT (MSA) ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto mb-12">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📝</span>
              <h3 className="text-lg md:text-xl font-black text-white">
                Step 1: Review & Sign the Master Service Agreement (MSA)
              </h3>
            </div>

            <p className="text-sm text-slate-400 bg-slate-950/60 border border-slate-700 rounded-xl px-5 py-4 mb-6 leading-relaxed">
              To protect your infrastructure and our development time, we operate under formal agreements. Please review the terms, sign the contract (digitally or manually), and forward it via WhatsApp to secure your project slot.
            </p>

            <div className="max-h-[400px] overflow-y-auto bg-slate-900 border border-slate-800 p-6 rounded-md text-sm text-slate-300 mb-6 custom-scrollbar">
              <h3 className="text-base font-black text-white mb-4 tracking-tight uppercase">
                Digital Infrastructure Master Service Agreement
              </h3>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Clause 1 — Scope of Work</h4>
              <p className="mb-3 leading-relaxed">
                AYCweb commits to developing, deploying, and maintaining the Client's digital infrastructure. The Minimum Viable Product (MVP) consists of a fully functional production domain with the technical and commercial features agreed upon during the diagnostic phase. The Client agrees to a minimum service term of twelve (12) months from the launch date.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Clause 2 — Financial Structure & Flexible Payments</h4>
              <p className="mb-3 leading-relaxed">
                The financial agreement is divided into a Monthly Maintenance Fee and a Construction (Setup) Fee. The total contract values are based on the selected tier:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li><strong className="text-slate-200">Starter Plan:</strong> $240 Total ($15/mo maintenance + $60 setup).</li>
                <li><strong className="text-slate-200">Business Plan:</strong> $1,260 Total ($30/mo maintenance + $900 setup).</li>
                <li><strong className="text-slate-200">Enterprise Plan:</strong> $2,340 Total ($45/mo maintenance + $1,800 setup).</li>
              </ul>
              <p className="mb-3 leading-relaxed">
                <strong className="text-white">Payment Terms & Incentives:</strong> To initiate onboarding, only the first month's maintenance fee is required. The Construction Setup can be paid in 1, 4, 6, or 12 interest-free installments. 
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li><strong>30% Off:</strong> Applied to the total contract if paid upfront in a single transaction.</li>
                <li><strong>1 Setup Installment:</strong> Waives the first 3 months of maintenance.</li>
                <li><strong>4 Setup Installments:</strong> Waives the first 2 months of maintenance.</li>
                <li><strong>6 Setup Installments:</strong> Waives the first 1 month of maintenance.</li>
              </ul>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Clause 3 — Bi-weekly Reporting</h4>
              <p className="mb-3 leading-relaxed">
                During the MVP development phase, AYCweb will deliver bi-weekly progress reports detailing completion percentages, milestones reached, identified bottlenecks, and projections. The Client has 48 business hours to raise any objections; otherwise, the report is deemed approved.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Clause 4 — Intellectual Property Vesting & Exit Strategy</h4>
              <p className="mb-3 leading-relaxed">
                We view our client relationships as long-term partnerships. The custom infrastructure and proprietary codebase are built with a 12-month vesting schedule. 
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li><strong className="text-emerald-400">Successful Completion:</strong> After fulfilling the 12-month term, the Client gains full perpetual rights and access to the custom source code, which can be migrated or managed independently.</li>
                <li><strong className="text-amber-400">Early Termination:</strong> Should the Client exit the agreement before the 12-month mark, their business data, customer lists, and content remain 100% theirs and will be exported in standard formats (CSV/JSON). However, early termination will forfeit the transfer of the proprietary codebase to protect AYCweb's upfront architectural investments.</li>
              </ul>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Clause 5 — Confidentiality</h4>
              <p className="mb-3 leading-relaxed">
                Both parties agree to maintain strict confidentiality regarding all technical, commercial, and strategic information exchanged during the contract and for two (2) years following its termination.
              </p>

              <p className="mt-6 pt-4 border-t border-slate-700 text-[11px] text-slate-500 text-center">
                This is a summary of the Master Service Agreement. The full legal version is available for digital signature below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/docs/AYCweb-MSA-Contract.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-5 py-3 text-sm font-bold text-slate-300 transition-all hover:border-emerald-500 hover:text-emerald-400 active:scale-95 flex-1"
              >
                📄 Download PDF Contract
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello AYC, here is my signed contract to proceed with the onboarding.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500 active:scale-95 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex-1"
              >
                📲 Send Signed Contract
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 2: PAYMENT METHODS ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto">
        <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
          <span className="text-2xl">💳</span> Step 2: Select Financial Rail
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. INTERNATIONAL BANKING (PRIORITY) */}
          <div className="bg-[#070810] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm">
              Global Expansion
            </div>
            <div className="mb-6 flex items-center justify-between mt-2">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl text-blue-400">🌎</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">INTL</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">International Wire</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Local accounts in the US, Europe, or Mexico to receive your payments without cross-border friction.
            </p>

            <div className="flex gap-1.5 mb-5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800/80">
              <button
                onClick={() => setTabIntl('USA')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'USA' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇺🇸</span> USA
              </button>
              <button
                onClick={() => setTabIntl('EUR')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'EUR' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇪🇺</span> EUR
              </button>
              <button
                onClick={() => setTabIntl('MEX')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'MEX' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇲🇽</span> MEX
              </button>
            </div>

            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1">
              {tabIntl === 'USA' && (
                <div className="animate-in fade-in duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Account Holder</p>
                    <p className="font-bold text-white text-sm">Oscar Emigdio Amarilla Caceres</p>
                  </div>
                  <div className="space-y-1 mb-3">
                    <CopyField label="Account No." value="216348580540" />
                    <CopyField label="Routing No." value="101019644" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/50">
                    <p><strong className="text-slate-300">Bank:</strong> Lead Bank</p>
                    <p><strong className="text-slate-300">Type:</strong> Checking</p>
                    <p><strong className="text-slate-300">Address:</strong> 1801 Main St., Kansas City, MO 64108</p>
                  </div>
                </div>
              )}

              {tabIntl === 'EUR' && (
                <div className="animate-in fade-in duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Account Holder</p>
                    <p className="font-bold text-white text-[13px]">Bridge Building Sp. Z.o.o.</p>
                    <p className="text-[9px] text-emerald-400 mt-1 font-medium bg-emerald-500/10 inline-block px-2 py-0.5 rounded border border-emerald-500/20">Exclusive IBAN assigned to you</p>
                  </div>
                  <div className="space-y-1 mb-3">
                    <CopyField label="IBAN" value="LU144080000029777809" />
                    <CopyField label="BIC" value="BCIRLULL" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/50">
                    <p><strong className="text-slate-300">Bank:</strong> Banking Circle S.A.</p>
                    <p><strong className="text-slate-300">Address:</strong> 2 Boulevard de la Foire, L-1528 Luxembourg</p>
                  </div>
                </div>
              )}

              {tabIntl === 'MEX' && (
                <div className="animate-in fade-in duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Account Holder</p>
                    <p className="font-bold text-white text-sm">Oscar Emigdio Amarilla Caceres</p>
                  </div>
                  <div className="space-y-1 mb-4">
                    <CopyField label="CLABE" value="646180546711227774" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 space-y-1.5">
                    <p className="flex items-start gap-1.5"><span className="text-emerald-500">✓</span> <span>Deposits: Cost 1 USD, min. 50 MXN.</span></p>
                    <p className="flex items-start gap-1.5"><span className="text-emerald-500">✓</span> <span>Automatic conversion to USDC.</span></p>
                  </div>
                </div>
              )}
            </div>
            
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] mt-auto">
              Transfer Completed — Send Receipt
            </a>
          </div>

          {/* 2. CRYPTO (USDT) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-teal-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-teal-900/20 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400">⚡</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">TRC20</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Crypto (USDT)</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Ideal for immediate settlements, zero banking friction, and zero cross-border delays.
            </p>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1 flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                <div className="relative h-40 w-40 rounded-xl border-4 border-teal-500/30 bg-white p-2">
                   <Image src="/qr-crypto.webp" alt="QR USDT TRC20" fill className="rounded-lg object-contain p-1" />
                </div>
              </div>

              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 text-center font-bold mt-2">Tron Network (TRC20)</p>
              <CopyField label="Wallet" value="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700 mt-auto">
              Send Hash (TXID)
            </a>
          </div>

          {/* 3. LOCAL TRANSFER (PYG) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-emerald-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">🇵🇾</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">PYG</span>
            </div>

            <div className="flex justify-center mb-5">
              <div className="relative h-40 w-40 rounded-xl border-4 border-emerald-500/30 bg-white p-2">
                <Image src="/qr-fiat.webp" alt="QR Transferencia PYG" fill className="rounded-lg object-contain p-1" />
              </div>
            </div>

            <h3 className="font-bold text-xl text-white mb-2">Local Transfer</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Exclusive for companies and professionals operating with domestic banks in Paraguay.
            </p>
            <div className="space-y-4 mb-8 flex-1">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <div className="mb-3 border-b border-zinc-800 pb-3">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Account Holder</p>
                  <p className="font-bold text-white text-sm">Oscar Emigdio Amarilla Caceres</p>
                </div>

                <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Option 1: Ueno ID</p>
                <CopyField label="ID Document" value="4499507" />

                <p className="mt-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Option 2: Itaú Bank</p>
                <CopyField label="Phone Alias" value="0985864209" />
                <CopyField label="Account No." value="720601573" />
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 transition-all shadow-[0_0_20px_-5px_rgba(37,211,102,0.4)] mt-auto">
              Transfer Completed — Send Receipt
            </a>
          </div>

        </div>
      </section>

      {/* ── METHODOLOGY: AI + PROFESSIONALS ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto py-12 md:py-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg md:text-xl font-black text-white">Methodology: AI Agents + Human Expertise</h3>
            </div>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              We leverage <strong>Artificial Intelligence Agents</strong> and <strong>Coding Agents</strong> for assisted heavy-lifting, 
              <strong> heavily supervised by seasoned professionals</strong>. 
              This means every deliverable is a hybrid output combining:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-blue-400 font-bold text-sm mb-2">🤖 AI Agents</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Automated analysis, foundational code generation, and real-time logic optimization.
                </p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-cyan-400 font-bold text-sm mb-2">⚙️ Coding Agents</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Assisted development, automated test scripts, and rapid systems integration.
                </p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-emerald-400 font-bold text-sm mb-2">👨‍💼 Professional Lead</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Strategic direction, architectural validation, and rigorous human review for every milestone.
                </p>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs md:text-sm mt-6 bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3">
              <strong>The Result:</strong> Faster, more reliable, and highly scalable digital infrastructures. Every line of code passes through human validation.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto mt-6 mb-2">
        <p className="text-center text-[11px] text-slate-600 border-t border-white/[0.04] pt-5">
          Invoice issued by {LEGAL_INFO.razonSocial} · RUC {LEGAL_INFO.ruc}
        </p>
      </div>
    </div>
  );
}
