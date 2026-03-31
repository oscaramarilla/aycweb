"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ES" | "EN" | "PT";

const translations = {
  ES: {
    heroBadge: "Infraestructura Digital B2B",
    heroTitle1: "Diseñamos sistemas que",
    heroTitleHighlight: "venden, automatizan y ordenan",
    heroTitle2: "empresas.",
    heroSubtitle: "No hacemos \"webs decorativas\". Construimos cotizadores, embudos, contratos automáticos y dashboards que reducen errores, aceleran ventas y eliminan el caos manual.",
    btnPlanes: "Ver Planes y Precios",
    btnCuello: "Mostranos tu cuello de botella",
    statsActivos: "Sistemas B2B Activos",
    statsSpeed: "PageSpeed Performance",
    statsRUC: "4499507-5 (Asunción, PY)",
    statsSectores: "Sectores Optimizados",
    ecoTitle: "El fin del trabajo manual",
    ecoSub: "Elegí el módulo que necesita tu operación hoy.",
    eco1Title: "Captación & Ventas",
    eco1Desc: "Embudos B2B, precalificación automática y rutas directas a tu WhatsApp corporativo.",
    eco1Link: "Ver infraestructura de ventas →",
    eco2Title: "Operativa Automática",
    eco2Desc: "Motores de cálculo, cotizadores dinámicos y emisión de PDFs en segundos sin tocar Excel.",
    eco2Link: "Ver cotizadores dinámicos →",
    eco3Title: "Sistemas a Medida",
    eco3Desc: "Portales institucionales, dashboards de control y sistemas centralizados para escalar sin caos.",
    eco3Link: "Ver portales corporativos →",
    casoPre: "No lo prometemos. Lo demostramos.",
    casoBadge: "✓ Caso: Metal Mad E.A.S.",
    casoQuote: "\"De tardar 2 horas cotizando en Excel, a generar un presupuesto B2B en 45 segundos.\"",
    casoDesc: "El equipo comercial perdía horas valiosas calculando fletes y materiales a mano. Desarrollamos un motor logístico integrado que emite PDFs formales al instante, eliminando el margen de error.",
    casoLink: "Ver este y otros casos operativos →",
    casoMetric: "Tiempo de cotización",
    autTitle: "Antes de escribir código, operamos en la vida real.",
    autDesc: "AYCweb no nació en un escritorio de diseño gráfico. Nacimos en el barro de la logística, la manufactura y las licitaciones. Conocemos el caos empresarial porque lo vivimos, y construimos el software para solucionarlo.",
    autLink: "Conocé nuestra historia de operador a constructor →",
    cierrePre: "El próximo paso",
    cierreTitle: "¿Cuál es el cuello de botella de tu empresa hoy?",
    cierreDesc: "Hablemos 5 minutos. Nos contás dónde estás perdiendo tiempo o ventas, y te decimos exactamente qué sistema te conviene construir primero.",
    cierreBtn1: "Agendar Diagnóstico Operativo",
    cierreBtn2: "Ver Escalera de Planes"
  },
  EN: {
    heroBadge: "B2B Digital Infrastructure",
    heroTitle1: "We design systems that",
    heroTitleHighlight: "sell, automate, and organize",
    heroTitle2: "businesses.",
    heroSubtitle: "We don't build \"decorative websites\". We build dynamic quoters, sales funnels, automated contracts, and dashboards that reduce errors, accelerate sales, and eliminate manual chaos.",
    btnPlanes: "View Plans & Pricing",
    btnCuello: "Show us your bottleneck",
    statsActivos: "Active B2B Systems",
    statsSpeed: "PageSpeed Performance",
    statsRUC: "Tax ID: 4499507-5 (Asuncion, PY)",
    statsSectores: "Optimized Sectors",
    ecoTitle: "The end of manual work",
    ecoSub: "Choose the module your operation needs today.",
    eco1Title: "Capture & Sales",
    eco1Desc: "B2B funnels, automatic pre-qualification, and direct routes to your corporate WhatsApp.",
    eco1Link: "View sales infrastructure →",
    eco2Title: "Automated Operations",
    eco2Desc: "Calculation engines, dynamic quoters, and PDF generation in seconds without touching Excel.",
    eco2Link: "View dynamic quoters →",
    eco3Title: "Custom Systems",
    eco3Desc: "Institutional portals, control dashboards, and centralized systems to scale without chaos.",
    eco3Link: "View corporate portals →",
    casoPre: "We don't just promise. We prove it.",
    casoBadge: "✓ Case: Metal Mad E.A.S.",
    casoQuote: "\"From taking 2 hours to quote in Excel, to generating an automated B2B PDF quote in 45 seconds.\"",
    casoDesc: "The commercial team wasted valuable hours calculating freight and materials by hand. We developed an integrated logistics engine that issues formal PDFs instantly, eliminating the margin of error.",
    casoLink: "View this and other operational cases →",
    casoMetric: "Quoting time",
    autTitle: "Before writing code, we operated in real life.",
    autDesc: "AYCweb wasn't born at a graphic design desk. We were born in the mud of logistics, manufacturing, and public bidding. We know business chaos because we lived it, and we built the software to solve it.",
    autLink: "Discover our story from operator to builder →",
    cierrePre: "The next step",
    cierreTitle: "What is your company's bottleneck today?",
    cierreDesc: "Let's talk for 5 minutes. Tell us where you are losing time or sales, and we will tell you exactly which system you should build first.",
    cierreBtn1: "Schedule Operational Audit",
    cierreBtn2: "View Plans Ladder"
  },
  PT: {
    heroBadge: "Infraestrutura Digital B2B",
    heroTitle1: "Projetamos sistemas que",
    heroTitleHighlight: "vendem, automatizam e organizam",
    heroTitle2: "empresas.",
    heroSubtitle: "Não fazemos \"sites decorativos\". Construímos cotadores dinâmicos, funis, contratos automáticos e dashboards que reduzem erros, aceleram vendas e eliminam o caos manual.",
    btnPlanes: "Ver Planos e Preços",
    btnCuello: "Mostre-nos o seu gargalo",
    statsActivos: "Sistemas B2B Ativos",
    statsSpeed: "Desempenho PageSpeed",
    statsRUC: "CNPJ/RUC: 4499507-5 (Assunção, PY)",
    statsSectores: "Setores Otimizados",
    ecoTitle: "O fim do trabalho manual",
    ecoSub: "Escolha o módulo que a sua operação precisa hoje.",
    eco1Title: "Captação e Vendas",
    eco1Desc: "Funis B2B, pré-qualificação automática e rotas diretas para o seu WhatsApp corporativo.",
    eco1Link: "Ver infraestrutura de vendas →",
    eco2Title: "Operação Automática",
    eco2Desc: "Motores de cálculo, cotadores dinâmicos e emissão de PDFs em segundos sem tocar no Excel.",
    eco2Link: "Ver cotadores dinâmicos →",
    eco3Title: "Sistemas Sob Medida",
    eco3Desc: "Portais institucionais, dashboards de controle e sistemas centralizados para escalar sem caos.",
    eco3Link: "Ver portais corporativos →",
    casoPre: "Não prometemos apenas. Nós provamos.",
    casoBadge: "✓ Caso: Metal Mad E.A.S.",
    casoQuote: "\"De levar 2 horas cotando no Excel, para gerar um orçamento B2B em 45 segundos.\"",
    casoDesc: "A equipe comercial perdia horas valiosas calculando fretes e materiais à mão. Desenvolvemos um motor logístico integrado que emite PDFs formais instantaneamente, eliminando a margem de erro.",
    casoLink: "Ver este e outros casos operacionais →",
    casoMetric: "Tempo de cotação",
    autTitle: "Antes de escrever código, operamos na vida real.",
    autDesc: "A AYCweb não nasceu em uma mesa de design gráfico. Nascemos na lama da logística, da manufatura e das licitações. Conhecemos o caos empresarial porque o vivemos, e construímos o software para resolvê-lo.",
    autLink: "Conheça nossa história de operador a construtor →",
    cierrePre: "O próximo passo",
    cierreTitle: "Qual é o gargalo da sua empresa hoje?",
    cierreDesc: "Vamos conversar por 5 minutos. Diga-nos onde você está perdendo tempo ou vendas, e nós lhe diremos exatamente qual sistema você deve construir primeiro.",
    cierreBtn1: "Agendar Diagnóstico Operacional",
    cierreBtn2: "Ver Escada de Planos"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations["ES"]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ES");

  const t = (key: keyof typeof translations["ES"]) => {
    return translations[language][key] || translations["ES"][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
