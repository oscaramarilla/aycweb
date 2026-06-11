import { SECTOR_LABELS, CAPITAL_LABELS, type LeadParaguay } from "@/lib/domain/leadParaguay";
import type { LeadTier } from "@/lib/domain/leadScoring";

// Datos en vivo desde Supabase: siempre dinámico, nunca cacheado.
export const dynamic = "force-dynamic";

type LeadRow = LeadParaguay & {
  id: string;
  source: string;
  locale?: string;
  score?: number;
  tier?: LeadTier;
  created_at: string;
};

const TIER_STYLE: Record<string, string> = {
  A: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  B: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  C: "bg-slate-500/15 text-slate-400 border-slate-600/40",
};

async function fetchLeads(tierFilter?: string): Promise<LeadRow[] | null> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !supabaseKey) return null;

  const params = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
    limit: "200",
  });
  if (tierFilter && ["A", "B", "C"].includes(tierFilter)) {
    params.set("tier", `eq.${tierFilter}`);
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/leads_paraguay?${params}`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as LeadRow[];
  } catch {
    return null;
  }
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("es-PY", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function LeadsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;
  const leads = await fetchLeads(tier);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-2">
            AYCweb · Control Room
          </p>
          <h1 className="text-3xl font-black text-white">
            Leads · Invertir en Paraguay
          </h1>
        </div>

        <nav className="flex items-center gap-2 text-sm font-bold">
          {[
            { label: "Todos", href: "/admin/leads", active: !tier },
            { label: "Tier A 🔥", href: "/admin/leads?tier=A", active: tier === "A" },
            { label: "Tier B", href: "/admin/leads?tier=B", active: tier === "B" },
            { label: "Tier C", href: "/admin/leads?tier=C", active: tier === "C" },
          ].map((f) => (
            <a
              key={f.label}
              href={f.href}
              className={`rounded-lg border px-4 py-2 transition-colors ${
                f.active
                  ? "border-blue-500/60 bg-blue-600/20 text-blue-300"
                  : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
              }`}
            >
              {f.label}
            </a>
          ))}
        </nav>
      </header>

      {leads === null && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-8 text-amber-200">
          <p className="font-bold mb-2">Supabase no configurado o sin conexión.</p>
          <p className="text-sm text-amber-200/80">
            Definí <code className="font-mono">SUPABASE_URL</code> y{" "}
            <code className="font-mono">SUPABASE_SERVICE_KEY</code> en las variables de
            entorno, y creá la tabla con <code className="font-mono">supabase/leads_paraguay.sql</code>.
          </p>
        </div>
      )}

      {leads !== null && leads.length === 0 && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10 text-center text-slate-400">
          Sin leads {tier ? `en tier ${tier}` : "todavía"}.
        </div>
      )}

      {leads !== null && leads.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-900 text-[11px] uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">País / Idioma</th>
                <th className="px-4 py-3">Sector</th>
                <th className="px-4 py-3">Capital</th>
                <th className="px-4 py-3">Horizonte</th>
                <th className="px-4 py-3">Contacto</th>
                <th className="px-4 py-3">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-black ${
                        TIER_STYLE[l.tier ?? "C"]
                      }`}
                    >
                      {l.tier ?? "–"} · {l.score ?? "–"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-white">{l.nombre}</div>
                    {l.empresa && <div className="text-xs text-slate-500">{l.empresa}</div>}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {l.pais}
                    {l.locale && (
                      <span className="ml-2 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold uppercase text-slate-400">
                        {l.locale}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{SECTOR_LABELS[l.sector] ?? l.sector}</td>
                  <td className="px-4 py-3 text-slate-400">{CAPITAL_LABELS[l.capital] ?? l.capital}</td>
                  <td className="px-4 py-3 text-slate-400">{l.horizonte}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${l.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-emerald-600/20 border border-emerald-500/40 px-2.5 py-1 text-xs font-bold text-emerald-300 hover:bg-emerald-600/30"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${l.email}`}
                        className="rounded-lg bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700"
                      >
                        Email
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{fmtDate(l.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {leads !== null && (
        <p className="mt-4 text-xs text-slate-600">
          {leads.length} leads · ordenados por fecha · tier A ≥70 pts, B 40–69, C &lt;40
        </p>
      )}
    </main>
  );
}
