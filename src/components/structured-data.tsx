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
        name: "GoHighLevel, CRM, and workflow automation systems",
        description: siteConfig.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "United States",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Businesses improving operational workflows",
        },
        serviceType: [
          "Workflow diagnosis and process design",
          "GoHighLevel implementation",
          "CRM and pipeline architecture",
          "Websites and lead capture",
          "Automated lead follow-up",
          "Workflow automation",
          "AI-assisted process automation",
          "Reporting and operating visibility",
          "Staffing workflows and operating procedures",
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

