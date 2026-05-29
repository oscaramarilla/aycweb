// ============================================================
// FUENTE ÚNICA DE VERDAD: Número y mensajes de WhatsApp AYCweb
// ============================================================
// Regla: NADIE hardcodea "595985864209" fuera de este archivo.
// Regla: NADIE arma https://wa.me/ fuera de whatsapp-link.ts.
// ============================================================

/** Número de destino WhatsApp (sin +, sin espacios, con código de país). */
export const WHATSAPP_NUMBER = "595985864209";

export type Locale = 'es' | 'en' | 'pt-br';

export const SUPPORTED_LOCALES: Locale[] = ['es', 'en', 'pt-br'];
export const DEFAULT_LOCALE: Locale = 'es';

// ============================================================
// DIAGNÓSTICO COMERCIAL EXPRESS
// ============================================================

/**
 * Datos del formulario de Diagnóstico Comercial Express.
 * Esta interface es la fuente única de verdad del shape del formulario.
 */
export interface DiagnosticoFormData {
  empresa: string;
  sector: string;
  tamanoEquipo: string;
  cuelloBottella: string;
  stackActual: string;
  /** Número completo con prefijo país, ej: +59598XXXXXXX */
  whatsapp: string;
}

/**
 * Templatero de diagnóstico por idioma.
 * Recibe lang y data, devuelve el mensaje en el idioma correspondiente.
 * Fallback a español si el idioma no está soportado.
 */
export function buildMensajeDiagnostico(
  lang: string,
  data: DiagnosticoFormData
): string {
  const locale = resolveLocale(lang);
  return DIAGNOSTICO_TEMPLATES[locale](data);
}

const DIAGNOSTICO_TEMPLATES: Record<Locale, (data: DiagnosticoFormData) => string> = {
  es: (data: DiagnosticoFormData) =>
    [
      `🏢 *Diagnóstico Comercial Express – AYCweb*`,
      ``,
      `📌 *Empresa:* ${data.empresa}`,
      `🏭 *Sector:* ${data.sector}`,
      `👥 *Equipo comercial:* ${data.tamanoEquipo} personas`,
      `🚧 *Cuello de botella:* ${data.cuelloBottella}`,
      `💻 *Stack actual:* ${data.stackActual}`,
      `📱 *WhatsApp del responsable:* ${data.whatsapp}`,
      ``,
      `Solicito un diagnóstico comercial personalizado para mi empresa.`,
    ].join("\n"),

  en: (data: DiagnosticoFormData) =>
    [
      `🏢 *Commercial Diagnostic Express – AYCweb*`,
      ``,
      `📌 *Company:* ${data.empresa}`,
      `🏭 *Sector:* ${data.sector}`,
      `👥 *Sales team:* ${data.tamanoEquipo} people`,
      `🚧 *Bottleneck:* ${data.cuelloBottella}`,
      `💻 *Current stack:* ${data.stackActual}`,
      `📱 *Responsible WhatsApp:* ${data.whatsapp}`,
      ``,
      `I request a personalized commercial diagnostic for my company.`,
    ].join("\n"),

  'pt-br': (data: DiagnosticoFormData) =>
    [
      `🏢 *Diagnóstico Comercial Express – AYCweb*`,
      ``,
      `📌 *Empresa:* ${data.empresa}`,
      `🏭 *Setor:* ${data.sector}`,
      `👥 *Equipe comercial:* ${data.tamanoEquipo} pessoas`,
      `🚧 *Gargalo:* ${data.cuelloBottella}`,
      `💻 *Stack atual:* ${data.stackActual}`,
      `📱 *WhatsApp do responsável:* ${data.whatsapp}`,
      ``,
      `Solicito um diagnóstico comercial personalizado para minha empresa.`,
    ].join("\n"),
};

// ============================================================
// MENSAJES PRE-ARMADOS POR CONTEXTO DE PÁGINA
// ============================================================
// Indexados por Locale para que el mensaje se adapte al idioma
// del prospecto. buildWhatsAppLink recibe el texto ya traducido.
// ============================================================

export type WhatsAppContext = keyof typeof WHATSAPP_TEXTS['es'];

export const WHATSAPP_TEXTS: Record<Locale, Record<string, string>> = {
  es: {
    home: "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación.",
    empresas:
      "Hola Oscar. Estoy viendo AYCweb/empresas y quiero agendar una Auditoría B2B para sistematizar mi operación.",
    profesionales:
      "Hola Oscar. Estoy en AYCweb/profesionales y quiero información sobre cómo captar más clientes con un sistema propio.",
    obras:
      "Hola Oscar. Vi los casos en AYCweb/obras y me interesa hablar sobre un sistema similar para mi empresa.",
    recursos:
      "Hola Oscar. Leí los recursos y quiero agendar una Auditoría B2B.",
    demoCotizador:
      "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación.",
    general:
      "¡Hola! Estoy en la web de AYC y busco agendar un diagnóstico para sistematizar mi negocio.",
    auditB2B: "Hola Oscar, quiero agendar una Auditoría B2B.",
  },

  en: {
    home: "Hi Oscar. I'd like to schedule a B2B Audit for my operation.",
    empresas:
      "Hi Oscar. I'm viewing AYCweb/empresas and I'd like to schedule a B2B Audit to systematize my operation.",
    profesionales:
      "Hi Oscar. I'm on AYCweb/profesionales and I'd like info on how to attract more clients with my own system.",
    obras:
      "Hi Oscar. I saw the cases on AYCweb/obras and I'm interested in a similar system for my company.",
    recursos:
      "Hi Oscar. I read the resources and I'd like to schedule a B2B Audit.",
    demoCotizador:
      "Hi Oscar. I'd like to schedule a B2B Audit for my operation.",
    general:
      "Hi! I'm on AYC's website and I'm looking to schedule a diagnostic to systematize my business.",
    auditB2B: "Hi Oscar, I'd like to schedule a B2B Audit.",
  },

  'pt-br': {
    home: "Olá Oscar. Quero agendar uma Auditoria B2B para minha operação.",
    empresas:
      "Olá Oscar. Estou vendo AYCweb/empresas e quero agendar uma Auditoria B2B para sistematizar minha operação.",
    profesionales:
      "Olá Oscar. Estou no AYCweb/profesionales e quero informações sobre como captar mais clientes com um sistema próprio.",
    obras:
      "Olá Oscar. Vi os casos no AYCweb/obras e tenho interesse em um sistema similar para minha empresa.",
    recursos:
      "Olá Oscar. Li os recursos e quero agendar uma Auditoria B2B.",
    demoCotizador:
      "Olá Oscar. Quero agendar uma Auditoria B2B para minha operação.",
    general:
      "Olá! Estou no site da AYC e busco agendar um diagnóstico para sistematizar meu negócio.",
    auditB2B: "Olá Oscar, quero agendar uma Auditoria B2B.",
  },
};

// ============================================================
// HELPERS
// ============================================================

/**
 * Resuelve un string de idioma a un Locale válido.
 * Fallback a español si no está soportado.
 */
export function resolveLocale(lang: string): Locale {
  if (SUPPORTED_LOCALES.includes(lang as Locale)) return lang as Locale;
  return DEFAULT_LOCALE;
}

/**
 * Obtiene el texto de WhatsApp para un contexto dado, en el idioma indicado.
 */
export function getWhatsAppText(ctx: WhatsAppContext, lang: string): string {
  const locale = resolveLocale(lang);
  return WHATSAPP_TEXTS[locale][ctx] ?? WHATSAPP_TEXTS.es[ctx] ?? "";
}