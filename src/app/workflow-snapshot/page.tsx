import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Radar, Sparkles } from "lucide-react";
import { GlowGridBackground } from "@/components/glow-grid-background";
import { ParticleField } from "@/components/particle-field";
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
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] px-5 pb-20 pt-6 text-white sm:px-8 lg:px-10">
      <GlowGridBackground intensity="normal" />
      <ParticleField density="low" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Workplace Management Solutions home">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-100/30 bg-cyan-100/10">
              <Sparkles className="h-5 w-5 text-cyan-100" />
            </span>
            <span className="hidden text-sm font-semibold sm:block">Workplace Management Solutions</span>
            <span className="text-sm font-semibold sm:hidden">WMS</span>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </header>

        <div className="grid gap-12 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-24">
          <div className="lg:sticky lg:top-12">
            <Radar className="h-8 w-8 text-cyan-100" />
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.3em] text-cyan-100">
              WMS WORKFLOW SNAPSHOT
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] sm:text-6xl">
              SHOW US WHERE WORK IS GETTING STUCK.
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-300">
              Answer a focused set of questions about your leads, follow-up, tools, and daily
              operations.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              WMS will use your answers to identify the highest-value workflow problem and recommend
              the best next step.
            </p>
            <a
              href="#snapshot-form"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-100/30 bg-cyan-100/10 px-6 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-100 hover:text-slate-950"
            >
              Start My Workflow Snapshot
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

