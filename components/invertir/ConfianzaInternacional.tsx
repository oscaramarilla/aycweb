import Link from "next/link";
import type { ConfianzaDict } from "@/lib/config/confianzaInternacional";
import { AYCWEB_CONTACT, buildWaLink } from "@/lib/config/contact";

type Props = {
  dict: ConfianzaDict;
  bookingUrl: string;
  lang: string;
};

// Sección de confianza internacional del funnel Invertir en Paraguay.
// Server component sin estado: solo dibuja la capa config.
export default function ConfianzaInternacional({ dict, bookingUrl, lang }: Props) {
  const cards = [
    ["📄", dict.card1Title, dict.card1Body],
    ["🪜", dict.card2Title, dict.card2Body],
    ["🎯", dict.card3Title, dict.card3Body],
    ["🛠️", dict.card4Title, dict.card4Body],
  ] as const;

  return (
    <section className="border-y border-stone-800 bg-stone-900/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
          {dict.kicker}
        </p>
        <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
          {dict.title}
        </h2>
        <p className="mb-10 max-w-3xl text-base leading-8 text-stone-400">
          {dict.intro}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([icon, title, body]) => (
            <div key={title} className="rounded-2xl border border-stone-800 bg-stone-950/60 p-6">
              <p className="mb-3 text-2xl">{icon}</p>
              <h3 className="mb-2 font-bold text-white">{title}</h3>
              <p className="text-sm leading-6 text-stone-500">{body}</p>
            </div>
          ))}
        </div>

        {/* Canales formales de contacto */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-emerald-300 active:scale-95"
          >
            {dict.bookCall}
          </a>
          <a
            href={`mailto:${AYCWEB_CONTACT.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-stone-700 bg-stone-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-stone-800"
          >
            {dict.emailLabel}
          </a>
          <a
            href={buildWaLink(dict.bookCallWaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-stone-700 bg-stone-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-stone-800"
          >
            {dict.whatsappLabel}
          </a>
        </div>

        {/* Links legales */}
        <p className="mt-8 text-xs text-stone-600">
          <Link href={`/${lang}/privacidad`} className="underline decoration-stone-700 transition hover:text-stone-400">
            {dict.privacyLabel}
          </Link>
          {" · "}
          <Link href={`/${lang}/legal`} className="underline decoration-stone-700 transition hover:text-stone-400">
            {dict.termsLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
