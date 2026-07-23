import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy and Terms",
  description: "Privacy, form data, communications, and website terms for Workplace Management Solutions.",
  alternates: { canonical: "/policy" },
};

export default function PolicyPage() {
  return (
    <main className="wms-grid-bg min-h-screen bg-[#06090b] px-5 py-6 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Workplace Management Solutions home">
            <span className="wms-logo-mark">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="hidden text-sm font-semibold sm:block">{siteConfig.name}</span>
            <span className="text-sm font-semibold sm:hidden">WMS</span>
          </Link>
          <Link href="/" className="wms-button-secondary min-h-11 px-4">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </header>

        <article className="policy-copy py-16 sm:py-24">
          <p className="wms-kicker">WMS policy</p>
          <h1>Privacy Policy and Terms</h1>
          <p className="policy-date">Effective July 19, 2026</p>

          <h2>Privacy policy</h2>
          <p>
            Workplace Management Solutions collects information you choose to provide through this
            website, including your name, business name, email address, phone number, service area,
            and answers about your business systems and workflows.
          </p>
          <p>
            We use this information to respond to your request, prepare your Workflow Snapshot,
            recommend services, maintain our customer relationship, improve our website, prevent
            abuse, and comply with applicable law. Form submissions are stored in our customer
            relationship management system and may be processed by service providers that support
            website hosting, communications, scheduling, and business operations.
          </p>
          <p>
            We do not sell your personal information. We may disclose information when required by
            law, to protect rights and safety, or to service providers acting on our instructions.
            We retain information for as long as reasonably necessary for the purposes described
            here, subject to legal and operational requirements.
          </p>

          <h2>Email and phone consent</h2>
          <p>
            When you submit a form and check the consent box, you agree that WMS may contact you by
            email and phone about your request. Message and data rates may apply. Consent is not a
            condition of purchase. You may unsubscribe from email using the link in a message and
            may ask us to stop calling or messaging you at any time.
          </p>
          <p>
            WMS does not send promotional SMS messages from the Workflow Snapshot unless separate
            consent has been obtained where required.
          </p>

          <h2>Cookies and security</h2>
          <p>
            The website and its hosting providers may use essential cookies, logs, and similar
            technologies for security, performance, and reliable operation. We use reasonable
            administrative and technical safeguards, but no internet transmission or storage system
            can be guaranteed completely secure.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete information you submitted, subject to
            applicable legal exceptions. Contact us using the details below.
          </p>

          <h2>Website terms</h2>
          <p>
            This website provides general information about WMS services. It is not a guarantee of
            results, professional legal or financial advice, or an offer that becomes binding
            without a separate written agreement. You agree not to misuse the website, interfere
            with its operation, submit unlawful material, or attempt unauthorized access.
          </p>
          <p>
            Website content, design, and branding are owned by or licensed to WMS. You may view and
            use the website for legitimate business evaluation, but you may not reproduce or
            redistribute substantial portions without permission.
          </p>
          <p>
            To the extent permitted by law, the website is provided as available without warranties
            of uninterrupted operation. WMS is not liable for indirect or consequential losses
            arising solely from use of the public website.
          </p>

          <h2>Updates and contact</h2>
          <p>
            We may update this policy when our practices or legal obligations change. The effective
            date above identifies the current version.
          </p>
          <address>
            Workplace Management Solutions
            <br />
            Bellevue, Washington
            <br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <a href="tel:+14255774533">{siteConfig.phone}</a>
          </address>
        </article>
      </div>
    </main>
  );
}
