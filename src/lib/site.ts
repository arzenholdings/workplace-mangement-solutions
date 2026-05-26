export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://workplacemanagementsolutions.com";

export const siteConfig = {
  name: "Workplace Management Solutions",
  shortName: "WMS",
  url: siteUrl,
  domain: "workplacemanagementsolutions.com",
  email: "hello@workplacemanagementsolutions.com",
  description:
    "Premium AI automation, operational reporting, systems integration, workflow design, and infrastructure modernization for ambitious teams.",
  socialDescription:
    "Modernize operations with AI workflows, automation, reporting systems, and enterprise infrastructure expertise.",
};
