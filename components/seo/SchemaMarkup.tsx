/**
 * SchemaMarkup.tsx
 * JSON-LD estructurado para AIO/GEO (AI Optimization / Generative Engine Optimization)
 * Incluye: LocalBusiness + ProfessionalService (B2B)
 */

export function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://aycweb.com/#organization",
    name: "AYCweb",
    alternateName: "AYC SRL",
    foundingDate: "2012",
    description:
      "Firma de infraestructura digital B2B y motores operativos. Construimos ecosistemas digitales que automatizan ventas, cotizaciones y operaciones para empresas y profesionales en Paraguay.",
    url: "https://aycweb.com",
    logo: {
      "@type": "ImageObject",
      url: "https://aycweb.com/logo-ayc.webp",
      width: 200,
      height: 60,
    },
    image: "https://aycweb.com/og-image.jpg",
    founder: {
      "@type": "Person",
      name: "Oscar Amarilla",
      jobTitle: "Fundador & CEO",
      url: "https://aycweb.com/oscar",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressRegion: "Asunción",
      addressCountry: "PY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.2867,
      longitude: -57.647,
    },
    areaServed: [
      "PY",
      {
        "@type": "Country",
        name: "Paraguay",
      },
      {
        "@type": "AdministrativeArea",
        name: "Asunción",
      },
    ],
    serviceType: [
      "Infraestructura Digital B2B",
      "Automatización Comercial",
      "Desarrollo Web Empresarial",
      "Cotizadores Dinámicos",
      "Motores Operativos",
      "Generación de PDFs automatizada",
    ],
    knowsAbout: [
      "Infraestructura digital B2B",
      "Automatización de ventas y operaciones",
      "Sistemas operativos empresariales",
      "Cotizadores dinámicos para empresas",
      "Generación de documentos PDF automatizada",
      "Software empresarial Paraguay",
    ],
    sameAs: [
      "https://aycweb.com",
      "https://www.linkedin.com/company/aycweb",
      "https://www.instagram.com/aycweb",
    ],
    knowsLanguage: ["es", "en", "pt"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://aycweb.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Infraestructura Digital B2B",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Motor Comercial B2B",
            description:
              "Cotizadores dinámicos y sistemas de generación de propuestas para empresas",
            url: "https://aycweb.com/es/empresas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistema Operativo para Profesionales",
            description:
              "Ecosistema digital para profesionales independientes: portafolio, cotizaciones y captación de clientes",
            url: "https://aycweb.com/es/profesionales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Infraestructura Digital a Medida",
            description:
              "Desarrollo de sistemas digitales personalizados para empresas en Paraguay",
            url: "https://aycweb.com/es/onboarding",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aycweb.com/#website",
    name: "AYCweb",
    url: "https://aycweb.com",
    description:
      "Firma de infraestructura digital B2B en Paraguay. Automatizamos ventas, cotizaciones y operaciones empresariales.",
    publisher: {
      "@id": "https://aycweb.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aycweb.com/es/recursos/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
