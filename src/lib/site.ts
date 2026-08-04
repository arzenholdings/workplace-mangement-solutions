export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://workplacemanagementsolutions.com";

export const siteConfig = {
  name: "Workplace Management Solutions",
  legalName: "Workplace MGT Solutions",
  legalIdentity:
    "Workplace MGT Solutions doing business as Workplace Management Solutions",
  shortName: "WMS",
  url: siteUrl,
  domain: "workplacemanagementsolutions.com",
  email: "sales@workplacemgtsolutions.com",
  phone: "425-599-1277",
  phoneE164: "+14255991277",
  address: {
    street: "14205 SE 36th St",
    city: "Bellevue",
    region: "WA",
    postalCode: "98006",
    country: "US",
    formatted: "14205 SE 36th St, Bellevue, WA 98006",
  },
  description:
    "WMS brings modern enterprise solutions to small businesses without the enterprise cost or complexity.",
  socialDescription:
    "Modern enterprise solutions built for small business. WMS connects marketing, CRM, automation, communication, workflows, and reporting into one managed system.",
};
