# Workplace Management Solutions Deployment Checklist

## Vercel Project

- [ ] Import this repository into Vercel as a Next.js project.
- [ ] Set the production domain to `workplacemanagementsolutions.com`.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://workplacemanagementsolutions.com` in Vercel Production, Preview, and Development environments.
- [ ] Confirm the Vercel build command is `npm run build`.
- [ ] Confirm the install command is `npm install`.
- [ ] Confirm the output directory is managed by Next.js. Do not set a custom output directory.

## Production Readiness

- [ ] `npm run lint` passes locally.
- [ ] `npm run build` passes locally.
- [ ] `/`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image`, `/twitter-image`, `/icon`, and `/apple-icon` return successfully after deploy.
- [ ] Browser console has no errors on desktop and mobile widths.
- [ ] Responsive pass completed at 390px, 768px, 1024px, and 1440px.
- [ ] Keyboard focus is visible for header, scroll, and contact links.
- [ ] Reduced-motion mode keeps content usable without continuous decorative animation.

## Domain Cutover

- [ ] Add the apex/root domain and `www` domain in Vercel.
- [ ] Configure DNS records exactly as Vercel recommends.
- [ ] Verify SSL certificate issuance in Vercel.
- [ ] Test canonical metadata points to `https://workplacemanagementsolutions.com`.
- [ ] Test Open Graph preview in Slack, LinkedIn, and X/Twitter card validators.
- [ ] Submit `https://workplacemanagementsolutions.com/sitemap.xml` in Google Search Console.
