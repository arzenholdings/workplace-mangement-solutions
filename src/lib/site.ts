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
    "WMS builds websites, CRM, automation, AI, follow-up, and reporting systems that help owner-operated service businesses respond faster and book more work.",
  socialDescription:
    "WMS connects your website, CRM, follow-up, automation, AI, and reporting into one operating system that helps service businesses respond faster and book more work.",
};
