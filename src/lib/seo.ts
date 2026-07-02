// Configuração central de SEO — atualize SITE_URL quando o domínio final for definido.
export const SITE_URL = "https://www.evomatic.com.br";
export const SITE_NAME = "Evomatic";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Evomatic",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Empresa de TI em Jundiaí/SP especializada em infraestrutura, cloud, segurança da informação, LGPD e suporte técnico para empresas em Jundiaí, Campinas e região.",
  areaServed: [
    { "@type": "City", name: "Jundiaí" },
    { "@type": "City", name: "Campinas" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Jundiaí" },
    { "@type": "State", name: "São Paulo" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [] as string[],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Evomatic",
  image: `${SITE_URL}/favicon.png`,
  url: SITE_URL,
  telephone: "",
  priceRange: "$$",
  description:
    "Há mais de 12 anos organizando, protegendo e evoluindo ambientes de TI com soluções completas em infraestrutura, cloud, segurança e LGPD para empresas em Jundiaí, Campinas e região.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Jundiaí" },
    { "@type": "City", name: "Campinas" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Jundiaí" },
  ],
  serviceType: [
    "Suporte e Gestão de TI",
    "Infraestrutura e Servidores",
    "Cloud e Colaboração",
    "Segurança da Informação",
    "Adequação à LGPD",
    "Licenciamento de Software",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Jundiaí" },
      { "@type": "City", name: "Campinas" },
      { "@type": "AdministrativeArea", name: "Região Metropolitana de Jundiaí" },
    ],
  };
}
