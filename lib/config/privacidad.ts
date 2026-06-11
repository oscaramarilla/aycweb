// Política de Privacidad / GDPR — contenido por idioma (capa config).
// NOTA: redactada como aviso estándar de privacidad; debe ser revisada por
// asesoría legal antes de tratarla como cumplimiento formal de GDPR/LOPD.

export type PrivacidadLocale = "es" | "en" | "pt-br" | "de";

type Section = { h: string; p: string };

export type PrivacidadDict = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  updated: string;
  sections: Section[];
};

const EMAIL = "hola@aycweb.com";

export const PRIVACIDAD_I18N: Record<PrivacidadLocale, PrivacidadDict> = {
  es: {
    metaTitle: "Política de Privacidad | AYCweb",
    metaDescription: "Cómo AYCweb recolecta, usa y protege tus datos personales, y qué derechos tenés sobre ellos (GDPR).",
    badge: "Privacidad · GDPR",
    title: "Política de Privacidad",
    updated: "Última actualización: junio 2026",
    sections: [
      { h: "1. Responsable del tratamiento", p: `AYCweb, firma de infraestructura digital B2B operada por Oscar Amarilla Cáceres (RUC 4499507-5), Asunción, Paraguay. Contacto para temas de privacidad: ${EMAIL}.` },
      { h: "2. Qué datos recolectamos", p: "Datos que vos nos das voluntariamente a través de formularios y del asistente de chat: nombre, empresa, email, teléfono/WhatsApp, país, sector de interés y el contenido de tus mensajes. Además, datos técnicos agregados de navegación (páginas visitadas, dispositivo) vía Vercel Analytics, sin cookies de publicidad ni perfiles individuales." },
      { h: "3. Para qué los usamos", p: "Para responder tu consulta, enviarte el material que pediste (ej. dossier por sector), coordinar llamadas, hacer seguimiento comercial de tu solicitud y mejorar el sitio. No vendemos ni alquilamos tus datos a terceros." },
      { h: "4. Base legal", p: "Tratamos tus datos sobre la base de tu consentimiento (al enviar un formulario o escribir al asistente) y de nuestro interés legítimo en responder solicitudes comerciales que vos iniciás. Podés retirar tu consentimiento en cualquier momento." },
      { h: "5. Dónde se procesan", p: "Usamos proveedores de infraestructura que pueden procesar datos fuera de tu país: Vercel (hosting), Supabase (base de datos), Anthropic (procesamiento de las conversaciones del asistente de chat), Resend (envío de emails) y WhatsApp/Meta cuando elegís contactarnos por esa vía. Cada proveedor aplica sus propias salvaguardas de protección de datos." },
      { h: "6. Cuánto tiempo los guardamos", p: "Conservamos los datos de contacto y consultas mientras exista una relación comercial activa o potencial, y los eliminamos a pedido tuyo o cuando dejan de ser necesarios." },
      { h: "7. Tus derechos", p: `Podés pedir en cualquier momento acceso, rectificación, eliminación o portabilidad de tus datos, y oponerte a su tratamiento (derechos reconocidos por el GDPR, arts. 15–21). Escribinos a ${EMAIL} y respondemos dentro de los 30 días.` },
      { h: "8. Cambios a esta política", p: "Si cambiamos esta política publicaremos la nueva versión en esta misma página con la fecha de actualización." },
    ],
  },
  en: {
    metaTitle: "Privacy Policy | AYCweb",
    metaDescription: "How AYCweb collects, uses and protects your personal data, and the rights you have over it (GDPR).",
    badge: "Privacy · GDPR",
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      { h: "1. Data controller", p: `AYCweb, a B2B digital infrastructure firm operated by Oscar Amarilla Cáceres (Paraguayan Tax ID 4499507-5), Asunción, Paraguay. Privacy contact: ${EMAIL}.` },
      { h: "2. What data we collect", p: "Data you voluntarily provide through forms and the chat assistant: name, company, email, phone/WhatsApp, country, sector of interest and the content of your messages. We also collect aggregated technical browsing data (pages visited, device) via Vercel Analytics — no advertising cookies, no individual profiling." },
      { h: "3. How we use it", p: "To answer your inquiry, send the material you requested (e.g. a sector dossier), coordinate calls, follow up on your request and improve the site. We do not sell or rent your data to third parties." },
      { h: "4. Legal basis", p: "We process your data based on your consent (when you submit a form or write to the assistant) and on our legitimate interest in responding to commercial requests you initiate. You can withdraw consent at any time." },
      { h: "5. Where it is processed", p: "We use infrastructure providers that may process data outside your country: Vercel (hosting), Supabase (database), Anthropic (processing of chat assistant conversations), Resend (email delivery) and WhatsApp/Meta when you choose to contact us that way. Each provider applies its own data-protection safeguards." },
      { h: "6. How long we keep it", p: "We keep contact and inquiry data while there is an active or potential business relationship, and delete it at your request or when it is no longer needed." },
      { h: "7. Your rights", p: `You may at any time request access, rectification, erasure or portability of your data, and object to its processing (rights under GDPR arts. 15–21). Write to ${EMAIL} and we will respond within 30 days.` },
      { h: "8. Changes to this policy", p: "If we change this policy we will publish the new version on this page with its update date." },
    ],
  },
  "pt-br": {
    metaTitle: "Política de Privacidade | AYCweb",
    metaDescription: "Como a AYCweb coleta, usa e protege seus dados pessoais, e quais direitos você tem sobre eles (GDPR/LGPD).",
    badge: "Privacidade · GDPR",
    title: "Política de Privacidade",
    updated: "Última atualização: junho 2026",
    sections: [
      { h: "1. Controlador dos dados", p: `AYCweb, firma de infraestrutura digital B2B operada por Oscar Amarilla Cáceres (RUC paraguaio 4499507-5), Assunção, Paraguai. Contato de privacidade: ${EMAIL}.` },
      { h: "2. Quais dados coletamos", p: "Dados que você fornece voluntariamente por formulários e pelo assistente de chat: nome, empresa, e-mail, telefone/WhatsApp, país, setor de interesse e o conteúdo das suas mensagens. Também coletamos dados técnicos agregados de navegação (páginas visitadas, dispositivo) via Vercel Analytics — sem cookies de publicidade nem perfis individuais." },
      { h: "3. Como usamos", p: "Para responder sua consulta, enviar o material solicitado (ex. dossiê por setor), coordenar chamadas, fazer o acompanhamento comercial do seu pedido e melhorar o site. Não vendemos nem alugamos seus dados a terceiros." },
      { h: "4. Base legal", p: "Tratamos seus dados com base no seu consentimento (ao enviar um formulário ou escrever ao assistente) e no nosso interesse legítimo em responder solicitações comerciais iniciadas por você. Você pode retirar o consentimento a qualquer momento." },
      { h: "5. Onde são processados", p: "Usamos provedores de infraestrutura que podem processar dados fora do seu país: Vercel (hospedagem), Supabase (banco de dados), Anthropic (processamento das conversas do assistente), Resend (envio de e-mails) e WhatsApp/Meta quando você escolhe nos contatar por essa via. Cada provedor aplica suas próprias salvaguardas de proteção de dados." },
      { h: "6. Por quanto tempo guardamos", p: "Mantemos os dados de contato e consultas enquanto existir uma relação comercial ativa ou potencial, e os eliminamos a seu pedido ou quando deixam de ser necessários." },
      { h: "7. Seus direitos", p: `Você pode a qualquer momento solicitar acesso, retificação, eliminação ou portabilidade dos seus dados, e se opor ao tratamento (direitos do GDPR, arts. 15–21, e análogos da LGPD). Escreva para ${EMAIL} e respondemos em até 30 dias.` },
      { h: "8. Alterações desta política", p: "Se alterarmos esta política, publicaremos a nova versão nesta página com a data de atualização." },
    ],
  },
  de: {
    metaTitle: "Datenschutzerklärung | AYCweb",
    metaDescription: "Wie AYCweb Ihre personenbezogenen Daten erhebt, nutzt und schützt — und welche Rechte Sie haben (DSGVO).",
    badge: "Datenschutz · DSGVO",
    title: "Datenschutzerklärung",
    updated: "Stand: Juni 2026",
    sections: [
      { h: "1. Verantwortlicher", p: `AYCweb, eine B2B-Firma für digitale Infrastruktur, betrieben von Oscar Amarilla Cáceres (paraguayische Steuernummer 4499507-5), Asunción, Paraguay. Datenschutz-Kontakt: ${EMAIL}.` },
      { h: "2. Welche Daten wir erheben", p: "Daten, die Sie freiwillig über Formulare und den Chat-Assistenten angeben: Name, Unternehmen, E-Mail, Telefon/WhatsApp, Land, Interessensektor und der Inhalt Ihrer Nachrichten. Zusätzlich aggregierte technische Nutzungsdaten (besuchte Seiten, Gerät) über Vercel Analytics — ohne Werbe-Cookies und ohne individuelles Profiling." },
      { h: "3. Wofür wir sie nutzen", p: "Zur Beantwortung Ihrer Anfrage, zum Versand angeforderter Unterlagen (z. B. Sektor-Dossier), zur Terminkoordination, zur kommerziellen Nachverfolgung Ihrer Anfrage und zur Verbesserung der Website. Wir verkaufen oder vermieten Ihre Daten nicht an Dritte." },
      { h: "4. Rechtsgrundlage", p: "Wir verarbeiten Ihre Daten auf Grundlage Ihrer Einwilligung (beim Absenden eines Formulars oder Schreiben an den Assistenten) sowie unseres berechtigten Interesses, von Ihnen initiierte geschäftliche Anfragen zu beantworten. Sie können Ihre Einwilligung jederzeit widerrufen." },
      { h: "5. Wo die Verarbeitung stattfindet", p: "Wir nutzen Infrastrukturanbieter, die Daten außerhalb Ihres Landes verarbeiten können: Vercel (Hosting), Supabase (Datenbank), Anthropic (Verarbeitung der Chat-Konversationen), Resend (E-Mail-Versand) und WhatsApp/Meta, wenn Sie diesen Kontaktweg wählen. Jeder Anbieter wendet eigene Datenschutz-Garantien an." },
      { h: "6. Speicherdauer", p: "Wir bewahren Kontakt- und Anfragedaten auf, solange eine aktive oder potenzielle Geschäftsbeziehung besteht, und löschen sie auf Ihren Wunsch oder sobald sie nicht mehr erforderlich sind." },
      { h: "7. Ihre Rechte", p: `Sie können jederzeit Auskunft, Berichtigung, Löschung oder Übertragbarkeit Ihrer Daten verlangen und der Verarbeitung widersprechen (Rechte nach Art. 15–21 DSGVO). Schreiben Sie an ${EMAIL}; wir antworten innerhalb von 30 Tagen.` },
      { h: "8. Änderungen dieser Erklärung", p: "Bei Änderungen veröffentlichen wir die neue Version auf dieser Seite mit dem Aktualisierungsdatum." },
    ],
  },
};

export function getPrivacidadDict(lang: string): PrivacidadDict {
  return PRIVACIDAD_I18N[(lang in PRIVACIDAD_I18N ? lang : "es") as PrivacidadLocale];
}
