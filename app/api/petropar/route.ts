import { NextResponse } from "next/server";
function extractPrice(html: string, label: string): number | null {
  const normalized = html.replace(/\s+/g, " ");
  const regex = new RegExp(`${label}\\s*-?\\s*G\\.\\s*([\\d\\.]+)`, "i");
  const match = normalized.match(regex);

  if (!match) return null;

  const numeric = match[1].replace(/\./g, "");
  const value = Number(numeric);

  return Number.isFinite(value) ? value : null;
}

export async function GET() {
  try {
    const res = await fetch("https://www.petropar.gov.py/wp-content/price/index.html", {
      next: { revalidate: 60 * 60 * 6 }, // 6 horas
      headers: {
        "User-Agent": "Mozilla/5.0 AYCweb Fuel Bot",
      },
    });

    if (!res.ok) {
      throw new Error(`Petropar respondió ${res.status}`);
    }

    const html = await res.text();

    const dieselPora = extractPrice(html, "DIESEL PORA");
    const oikoite93 = extractPrice(html, "OIKOITE 93");

    return NextResponse.json({
      ok: true,
      fuente: "PETROPAR",
      actualizado: new Date().toISOString(),
      precios: {
        dieselPora: dieselPora ?? 6700,
        naftaOikoite93: oikoite93 ?? 6140,
      },
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      fallback: true,
      actualizado: new Date().toISOString(),
      precios: {
        dieselPora: 6700,
        naftaOikoite93: 6140,
      },
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
}
