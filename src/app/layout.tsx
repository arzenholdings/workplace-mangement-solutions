import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  title: {
    default: "Workplace Management Solutions | GoHighLevel, CRM & Workflow Automation",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GoHighLevel implementation",
    "GoHighLevel automation",
    "CRM workflow automation",
    "business process automation",
    "small business CRM systems",
    "automated lead follow-up",
    "workflow improvement",
    "operating systems for small business",
    "business systems consulting",
    "GoHighLevel consultant",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "business services",
  openGraph: {
    title: "Workplace Management Solutions | GoHighLevel, CRM & Workflow Automation",
    description: siteConfig.socialDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} connected lead and workflow operating system`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workplace Management Solutions | GoHighLevel, CRM & Workflow Automation",
    description: siteConfig.socialDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-background text-foreground">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
