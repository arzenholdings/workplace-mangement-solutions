export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://workplacemanagementsolutions.com";

export const siteConfig = {
  name: "Workplace Management Solutions",
  shortName: "WMS",
  url: siteUrl,
  domain: "workplacemanagementsolutions.com",
  email: "sales@workplacemgtsolutions.com",
  phone: "425-577-4533",
  description:
    "WMS helps businesses find operational bottlenecks and build automated systems using GoHighLevel, CRM, AI, websites, reporting, and workflow design.",
  socialDescription:
    "WMS finds the operational friction slowing a business down, then builds the automated systems that make it easier to run.",
};
