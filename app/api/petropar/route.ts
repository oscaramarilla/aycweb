import { NextResponse } from "next/server";
import fs from "fs/promises";
import os from "os";
import path from "path";

const CACHE_FILE_NAME = "aycweb-petropar-cache.json";
const CACHE_FILE_PATH = path.join(os.tmpdir(), CACHE_FILE_NAME);
const DEFAULT_PRICES = { dieselPora: 6700, naftaOikoite93: 6140 };

function extractPrice(html: string, label: string): number | null {
  const normalized = html.replace(/\s+/g, " ");
  const regex = new RegExp(`${label}\\s*-?\\s*G\\.\\s*([\\d\\.]+)`, "i");
  const match = normalized.match(regex);

  if (!match) return null;

  const numeric = match[1].replace(/\./g, "");
  const value = Number(numeric);

  return Number.isFinite(value) ? value : null;
}

async function writeCache(data: unknown) {
  try {
    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(data), "utf8");
  } catch {
    // No queremos bloquear la respuesta si el sistema de caché no está disponible.
  }
}

async function readCache() {
  try {
    const raw = await fs.readFile(CACHE_FILE_PATH, "utf8");
    return JSON.parse(raw) as {
      ok: boolean;
      fuente: string;
      actualizado: string;
      precios: { dieselPora: number; naftaOikoite93: number };
    };
  } catch {
    return null;
  }
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

    const payload = {
      ok: true,
      fuente: "PETROPAR",
      actualizado: new Date().toISOString(),
      precios: {
        dieselPora: dieselPora ?? DEFAULT_PRICES.dieselPora,
        naftaOikoite93: oikoite93 ?? DEFAULT_PRICES.naftaOikoite93,
      },
    };

    await writeCache(payload);
    return NextResponse.json(payload);
  } catch (error) {
    const cached = await readCache();

    if (cached) {
      return NextResponse.json({
        ...cached,
        ok: false,
        fallback: true,
        error: error instanceof Error ? error.message : "Error desconocido",
      });
    }

    return NextResponse.json({
      ok: false,
      fallback: true,
      actualizado: new Date().toISOString(),
      precios: DEFAULT_PRICES,
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
}
