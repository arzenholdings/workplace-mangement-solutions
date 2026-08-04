import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
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
