import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: "+1-425-577-4533",
        areaServed: "United States",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "CRM, automation, and lead follow-up systems",
        description: siteConfig.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "United States",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Owner-operated service businesses",
        },
        serviceType: [
          "Websites and landing pages",
          "CRM pipelines",
          "Lead response and follow-up",
          "Workflow automation",
          "AI reception and support",
          "Reporting and dashboards",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

