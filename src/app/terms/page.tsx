import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WmsBrandLogo } from "@/components/wms-brand-logo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Website and SMS program terms for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="wms-grid-bg min-h-screen bg-[#06090b] px-5 py-6 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-4">
          <a
            href={siteConfig.onboardingUrl}
            className="flex items-center gap-3"
            aria-label={`Start with ${siteConfig.name}`}
          >
            <WmsBrandLogo priority />
          </a>
          <Link href="/" className="wms-button-secondary min-h-11 px-4">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </header>

        <article className="policy-copy py-16 sm:py-24">
          <p className="wms-kicker">WMS terms</p>
          <h1>Terms and Conditions</h1>
          <p className="policy-date">Effective July 27, 2026</p>

          <p>
            These terms govern this website and the Workplace Management Solutions SMS Program,
            operated by {siteConfig.legalIdentity} (&ldquo;WMS,&rdquo; &ldquo;we,&rdquo; or
            &ldquo;us&rdquo;).
          </p>

          <h2>Workplace Management Solutions SMS Program</h2>
          <p>
            The program sends customer-care replies, Workflow Snapshot follow-up, appointment
            confirmations and reminders, and service updates. Promotional messages may also be sent
            to people who separately and expressly opt in to receive marketing SMS.
          </p>
          <p>
            Message frequency varies. Message and data rates may apply. Consent to receive SMS is
            not a condition of purchase. Reply STOP to any message to opt out. After you send STOP,
            you may receive one final message confirming your opt-out. Reply HELP for help, email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or call{" "}
            <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>.
          </p>
          <p>
            Mobile carriers are not liable for delayed or undelivered messages. Message delivery is
            subject to effective transmission by your carrier and network provider. For details
            about how we handle personal and mobile information, see our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Eligibility</h2>
          <p>
            You must be 18 years of age or older to participate in the Workplace Management
            Solutions SMS Program.
          </p>

          <h2>Website use</h2>
          <p>
            This website provides general information about WMS services. It is not a guarantee of
            results, professional legal or financial advice, or an offer that becomes binding
            without a separate written agreement. You agree not to misuse the website, interfere
            with its operation, submit unlawful material, or attempt unauthorized access.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Website content, design, and branding are owned by or licensed to WMS. You may view and
            use the website for legitimate business evaluation, but you may not reproduce or
            redistribute substantial portions without permission.
          </p>

          <h2>Availability and liability</h2>
          <p>
            To the extent permitted by law, the website and SMS program are provided as available
            without warranties of uninterrupted operation. WMS is not liable for indirect or
            consequential losses arising solely from use of the public website or delayed or
            undelivered messages.
          </p>

          <h2>Changes and contact</h2>
          <p>
            We may update these terms when our services, messaging practices, or legal obligations
            change. The effective date above identifies the current version.
          </p>
          <address>
            {siteConfig.legalName}
            <br />
            Doing business as {siteConfig.name}
            <br />
            {siteConfig.address.formatted}
            <br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
          </address>
        </article>
      </div>
    </main>
  );
}
