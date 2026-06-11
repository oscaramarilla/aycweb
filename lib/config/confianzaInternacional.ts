// Capa de Confianza Internacional — hub Invertir en Paraguay.
// Señales que un comprador frío de USA/UE necesita: contrato, proceso,
// pagos por etapas, soporte y canales formales (call/email) además de WhatsApp.
// Tono por mercado: es/pt-br cercano; en directo a ROI; de sobrio y formal.

import { buildWaLink } from "@/lib/config/contact";

export type ConfianzaLocale = "es" | "en" | "pt-br" | "de";

export type ConfianzaDict = {
  kicker: string;
  title: string;
  intro: string;
  card1Title: string;
  card1Body: string;
  card2Title: string;
  card2Body: string;
  card3Title: string;
  card3Body: string;
  card4Title: string;
  card4Body: string;
  bookCall: string;
  bookCallWaMsg: string;
  emailLabel: string;
  whatsappLabel: string;
  privacyLabel: string;
  termsLabel: string;
};

export const CONFIANZA_I18N: Record<ConfianzaLocale, ConfianzaDict> = {
  es: {
    kicker: "Cómo trabajamos con clientes del exterior",
    title: "Confianza primero, proyecto después",
    intro: "Entrega remota desde Asunción, Paraguay. Trabajamos con empresas e inversores de LATAM, Brasil, Estados Unidos y Europa con contrato, alcance claro y soporte post-entrega.",
    card1Title: "Contrato y factura",
    card1Body: "Todo encargo arranca con contrato firmado y alcance por escrito. Facturamos como firma registrada en Paraguay (RUC 4499507-5).",
    card2Title: "Pagos por etapas",
    card2Body: "Nunca pagás todo por adelantado: hitos definidos, transferencia internacional (USD), banca local o USDT — lo que mejor encaje con tu operación.",
    card3Title: "Alcance y plazos claros",
    card3Body: "Antes de empezar sabés exactamente qué se entrega, cuándo y qué no está incluido. Sin sorpresas ni letra chica.",
    card4Title: "Soporte post-entrega",
    card4Body: "Los sistemas quedan con mantenimiento y soporte continuo. No desaparecemos después del deploy.",
    bookCall: "Agendar llamada de 15 min",
    bookCallWaMsg: "Hola Oscar, vengo de aycweb.com/invertir-en-paraguay y quiero agendar una llamada de 15 minutos.",
    emailLabel: "Escribir por email",
    whatsappLabel: "WhatsApp directo",
    privacyLabel: "Política de Privacidad",
    termsLabel: "Términos y Condiciones",
  },
  en: {
    kicker: "How we work with international clients",
    title: "Trust first, project second",
    intro: "Remote delivery from Asunción, Paraguay. We serve B2B companies and investors across LATAM, Brazil, the US and Europe — with contracts, staged payments, clear scope and post-launch support.",
    card1Title: "Contract & invoice",
    card1Body: "Every engagement starts with a signed contract and written scope. We invoice as a registered Paraguayan firm (Tax ID 4499507-5).",
    card2Title: "Staged payments",
    card2Body: "You never pay everything upfront: defined milestones, international wire (USD), local banking or USDT — whatever fits your operation.",
    card3Title: "Clear scope & timelines",
    card3Body: "Before we start you know exactly what gets delivered, when, and what's out of scope. No surprises, no fine print.",
    card4Title: "Post-launch support",
    card4Body: "Systems ship with ongoing maintenance and support. We don't disappear after deployment.",
    bookCall: "Book a 15-min call",
    bookCallWaMsg: "Hi Oscar, I'm coming from aycweb.com/invertir-en-paraguay and I'd like to book a 15-minute call.",
    emailLabel: "Email us",
    whatsappLabel: "Direct WhatsApp",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
  "pt-br": {
    kicker: "Como trabalhamos com clientes do exterior",
    title: "Confiança primeiro, projeto depois",
    intro: "Entrega remota desde Assunção, Paraguai. Atendemos empresas e investidores da LATAM, Brasil, Estados Unidos e Europa — com contrato, pagamentos por etapas, escopo claro e suporte pós-entrega.",
    card1Title: "Contrato e fatura",
    card1Body: "Todo projeto começa com contrato assinado e escopo por escrito. Faturamos como firma registrada no Paraguai (RUC 4499507-5).",
    card2Title: "Pagamentos por etapas",
    card2Body: "Você nunca paga tudo adiantado: marcos definidos, transferência internacional (USD), banco local ou USDT — o que melhor encaixar na sua operação.",
    card3Title: "Escopo e prazos claros",
    card3Body: "Antes de começar você sabe exatamente o que será entregue, quando, e o que não está incluído. Sem surpresas nem letras miúdas.",
    card4Title: "Suporte pós-entrega",
    card4Body: "Os sistemas ficam com manutenção e suporte contínuo. Não desaparecemos depois do deploy.",
    bookCall: "Agendar chamada de 15 min",
    bookCallWaMsg: "Olá Oscar, venho de aycweb.com/invertir-en-paraguay e quero agendar uma chamada de 15 minutos.",
    emailLabel: "Falar por e-mail",
    whatsappLabel: "WhatsApp direto",
    privacyLabel: "Política de Privacidade",
    termsLabel: "Termos e Condições",
  },
  de: {
    kicker: "So arbeiten wir mit internationalen Kunden",
    title: "Erst Vertrauen, dann Projekt",
    intro: "Remote-Lieferung aus Asunción, Paraguay. Wir betreuen B2B-Unternehmen und Investoren in Lateinamerika, Brasilien, den USA und Europa — mit Vertrag, Zahlung nach Meilensteinen, klarem Leistungsumfang und Support nach der Übergabe.",
    card1Title: "Vertrag & Rechnung",
    card1Body: "Jedes Mandat beginnt mit unterschriebenem Vertrag und schriftlichem Leistungsumfang. Wir fakturieren als registrierte Firma in Paraguay (Steuernummer 4499507-5).",
    card2Title: "Zahlung nach Meilensteinen",
    card2Body: "Sie zahlen nie alles im Voraus: definierte Meilensteine, internationale Überweisung (USD), lokale Bank oder USDT — was zu Ihrem Betrieb passt.",
    card3Title: "Klarer Umfang & Zeitplan",
    card3Body: "Vor Projektbeginn wissen Sie genau, was geliefert wird, wann — und was nicht enthalten ist. Keine Überraschungen, kein Kleingedrucktes.",
    card4Title: "Support nach der Übergabe",
    card4Body: "Systeme werden mit laufender Wartung und Support übergeben. Wir verschwinden nicht nach dem Deployment.",
    bookCall: "15-Minuten-Gespräch buchen",
    bookCallWaMsg: "Hi Oscar, I'm coming from aycweb.com/invertir-en-paraguay and I'd like to book a 15-minute call.",
    emailLabel: "E-Mail schreiben",
    whatsappLabel: "Direktes WhatsApp",
    privacyLabel: "Datenschutzerklärung",
    termsLabel: "AGB / Nutzungsbedingungen",
  },
};

export function getConfianzaDict(lang: string): ConfianzaDict {
  return CONFIANZA_I18N[(lang in CONFIANZA_I18N ? lang : "es") as ConfianzaLocale];
}

/**
 * URL para "Book a Call". Si NEXT_PUBLIC_BOOKING_URL está definida en Vercel
 * (Calendly, Cal.com, etc.) se usa esa; si no, cae a WhatsApp con mensaje
 * de agenda prellenado en el idioma del visitante.
 */
export function getBookingUrl(lang: string): string {
  const external = process.env.NEXT_PUBLIC_BOOKING_URL;
  if (external && external.startsWith("http")) return external;
  return buildWaLink(getConfianzaDict(lang).bookCallWaMsg);
}
