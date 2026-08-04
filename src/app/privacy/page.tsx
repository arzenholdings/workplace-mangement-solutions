import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WmsBrandLogo } from "@/components/wms-brand-logo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy and mobile-information practices for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="wms-grid-bg min-h-screen bg-[#06090b] px-5 py-6 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <WmsBrandLogo priority />
          </Link>
          <Link href="/" className="wms-button-secondary min-h-11 px-4">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </header>

        <article className="policy-copy py-16 sm:py-24">
          <p className="wms-kicker">WMS policy</p>
          <h1>Privacy Policy</h1>
          <p className="policy-date">Effective July 27, 2026</p>

          <p>
            {siteConfig.legalIdentity} (&ldquo;WMS,&rdquo; &ldquo;we,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy. This policy explains how we collect, use,
            disclose, and protect information submitted through our website, Workflow Snapshot,
            chat widget, and other business communications.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you choose to provide, including your name, business name, email
            address, phone number, service area, appointment details, chat messages, and answers
            about your business systems and workflows. We may also collect routine website and
            device information used for security, performance, and reliable operation.
          </p>

          <h2>How we use information</h2>
          <p>
            We use information to respond to inquiries, prepare and follow up on Workflow
            Snapshots, provide customer care, schedule and manage appointments, deliver service
            updates, maintain customer relationships, improve our services, prevent abuse, and
            comply with applicable law. We send promotional text messages only when a person has
            separately and expressly opted in to receive them.
          </p>

          <h2>Mobile information and consent</h2>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. Information sharing to subcontractors in support services, such
            as customer service, is permitted. All other use cases exclude text-messaging
            originator opt-in data and consent; this information will not be shared with third
            parties.
          </p>
          <p>
            SMS consent is optional and is not a condition of purchase. Message frequency varies,
            and message and data rates may apply. Reply STOP to any message to opt out or HELP for
            help. Marketing and non-marketing SMS consent are requested separately where both types
            of messaging are offered.
          </p>

          <h2>Other disclosures and retention</h2>
          <p>
            We do not sell personal information. We may disclose information when required by law,
            to protect rights and safety, or to service providers acting on our instructions for
            website hosting, communications, scheduling, customer service, and business
            operations. We retain information only as long as reasonably necessary for the
            purposes described here, subject to legal and operational requirements.
          </p>

          <h2>Cookies and security</h2>
          <p>
            Our website and hosting providers may use essential cookies, logs, and similar
            technologies for security, performance, and reliable operation. We use reasonable
            administrative and technical safeguards, but no internet transmission or storage
            system can be guaranteed completely secure.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete information you submitted, subject to
            applicable legal exceptions. You may unsubscribe from email using the link in a
            message, and you may opt out of SMS at any time by replying STOP.
          </p>

          <h2>Updates and contact</h2>
          <p>
            We may update this policy when our practices or legal obligations change. The effective
            date above identifies the current version. Our SMS program is also governed by our{" "}
            <Link href="/terms">Terms and Conditions</Link>.
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
