import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Radar } from "lucide-react";
import { WmsBrandLogo } from "@/components/wms-brand-logo";
import { WorkflowSnapshotForm } from "@/components/workflow-snapshot-form";

export const metadata: Metadata = {
  title: "WMS Workflow Snapshot | Find the Bottleneck Slowing Your Business",
  description:
    "Complete the WMS Workflow Snapshot to identify lead, CRM, follow-up, automation, and operational bottlenecks inside your business.",
  alternates: { canonical: "/workflow-snapshot" },
  openGraph: {
    title: "WMS Workflow Snapshot | Find the Bottleneck Slowing Your Business",
    description:
      "Complete the WMS Workflow Snapshot to identify lead, CRM, follow-up, automation, and operational bottlenecks inside your business.",
    url: "/workflow-snapshot",
  },
};

export default function WorkflowSnapshotPage() {
  return (
    <main className="wms-grid-bg relative min-h-screen overflow-hidden bg-[#06090b] px-5 pb-20 pt-4 text-white sm:px-8 lg:px-10">
      <div className="wms-hero-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-white/[0.07] py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Workplace Management Solutions home">
            <WmsBrandLogo priority />
          </Link>
          <Link
            href="/"
            className="wms-button-secondary min-h-11 px-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </header>

        <div className="grid gap-12 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-24">
          <div className="lg:sticky lg:top-12">
            <Radar className="h-8 w-8 text-[#73e4fa]" />
            <p className="wms-kicker mt-7">
              WMS Workflow Snapshot
            </p>
            <h1 className="wms-heading mt-6">
              Show us where work is <span className="text-[#39d5f6]">getting stuck.</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-[#a7b2b8]">
              Answer a focused set of questions about your leads, follow-up, tools, and daily
              operations.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#a7b2b8]">
              WMS will use your answers to identify the highest-value workflow problem and recommend
              the best next step.
            </p>
            <a
              href="#snapshot-form"
              className="wms-button mt-8"
            >
              Start my Workflow Snapshot
            </a>
          </div>
          <div id="snapshot-form" className="scroll-mt-6">
            <WorkflowSnapshotForm />
          </div>
        </div>
      </div>
    </main>
  );
}
