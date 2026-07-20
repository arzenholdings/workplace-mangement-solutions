"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Gauge,
  Globe2,
  Handshake,
  Layers3,
  Menu,
  MessageSquareText,
  Network,
  Radar,
  RefreshCw,
  Route,
  Sparkles,
  Timer,
  UserCheck,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { GlowGridBackground } from "@/components/glow-grid-background";
import { OrbNetwork } from "@/components/orb-network";
import { ParticleField } from "@/components/particle-field";

const problems = [
  {
    title: "Broken Handoffs",
    copy: "Leads, approvals, tasks, and customer requests stall between people, tools, and departments.",
    icon: Route,
  },
  {
    title: "Disconnected Systems",
    copy: "Your website, GoHighLevel, email, calendar, reporting, and internal workflows do not operate as one system.",
    icon: Network,
  },
  {
    title: "Lost Follow-Up",
    copy: "Opportunities disappear because ownership, reminders, and next steps are unclear.",
    icon: MessageSquareText,
  },
  {
    title: "Administrative Drag",
    copy: "Your team spends too much time copying information, chasing updates, and repeating work that should be automated.",
    icon: RefreshCw,
  },
];

const capabilities = [
  {
    id: "capability-diagnosis",
    title: "Workflow Diagnosis",
    copy: "We identify where work slows down, breaks, repeats, or disappears.",
    icon: Radar,
    signal: "Friction, ownership, handoffs",
  },
  {
    id: "capability-crm",
    title: "GoHighLevel & CRM Architecture",
    copy: "We configure pipelines, forms, calendars, contacts, ownership, reminders, and follow-up around the way your business actually works.",
    icon: Blocks,
    signal: "Pipelines, calendars, routing",
    featured: true,
  },
  {
    id: "capability-follow-up",
    title: "Automated Follow-Up",
    copy: "We build practical email, SMS, task, notification, and appointment workflows so opportunities do not depend on memory.",
    icon: Workflow,
    signal: "Email, SMS, tasks, reminders",
  },
  {
    id: "capability-website",
    title: "Website & Lead Capture",
    copy: "We improve how prospects understand the business, trust the offer, and enter the right workflow.",
    icon: Globe2,
    signal: "Pages, forms, conversion paths",
  },
  {
    id: "capability-reporting",
    title: "Reporting & Visibility",
    copy: "We create clearer dashboards, operating metrics, and management reporting so owners can see what is happening.",
    icon: BarChart3,
    signal: "Dashboards, metrics, accountability",
  },
  {
    id: "capability-ai",
    title: "AI & Process Automation",
    copy: "We use AI and automation to reduce repetitive administrative work, improve response time, and create more consistent execution.",
    icon: Bot,
    signal: "Automation with operator control",
  },
  {
    id: "capability-staffing",
    title: "Staffing & Operating Structure",
    copy: "We clarify roles, handoffs, accountability, and operating rhythm so the system works across people as well as software.",
    icon: UsersRound,
    signal: "Roles, SOPs, operating rhythm",
  },
];

const goHighLevelCapabilities = [
  "Centralized lead and customer data",
  "Automated email and SMS follow-up",
  "Pipeline and opportunity tracking",
  "Forms, calendars, and landing pages",
  "Workflow automation",
  "Reporting and accountability",
];

const operatorPoints = [
  {
    title: "Multi-location operating experience",
    copy: "Systems designed with the handoffs, visibility, and accountability of real operations in mind.",
    icon: Building2,
  },
  {
    title: "Enterprise technology background",
    copy: "Practical systems thinking across CRM, reporting, security, facilities, and business infrastructure.",
    icon: Layers3,
  },
  {
    title: "GoHighLevel implementation",
    copy: "Hands-on configuration of lead capture, pipelines, calendars, communication, and workflows.",
    icon: Zap,
  },
  {
    title: "Executive and operator support",
    copy: "Grounded guidance that connects technology decisions to ownership, process, and daily execution.",
    icon: Handshake,
  },
];

const process = [
  ["01", "Diagnose", "Identify where work gets stuck, duplicated, delayed, or lost."],
  ["02", "Map", "Document the current workflow, ownership, tools, and handoffs."],
  ["03", "Design", "Define the better process before configuring the technology."],
  [
    "04",
    "Build",
    "Implement the GoHighLevel, CRM, automation, AI, website, reporting, or process solution.",
  ],
  [
    "05",
    "Train and Improve",
    "Make the system usable, measure the result, and improve the next bottleneck.",
  ],
];

const outcomes = [
  { title: "Faster lead response", icon: Timer },
  { title: "Fewer missed follow-ups", icon: CheckCircle2 },
  { title: "Clearer pipeline ownership", icon: UserCheck },
  { title: "Reduced repetitive work", icon: RefreshCw },
  { title: "Better management visibility", icon: Eye },
  { title: "More consistent execution", icon: Gauge },
  { title: "Easier employee onboarding", icon: FileText },
  { title: "Fewer disconnected tools", icon: Network },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["How We Help", "#how-we-help"],
    ["Operating System", "#operating-system"],
    ["GoHighLevel", "#gohighlevel"],
    ["Process", "#process"],
    ["About", "#about"],
    ["Workflow Snapshot", "/workflow-snapshot"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 shadow-2xl shadow-black/15 backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          aria-label="Workplace Management Solutions home"
          className="flex min-w-0 items-center gap-3"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-100/30 bg-cyan-100/10 shadow-lg shadow-cyan-300/10">
            <Sparkles className="h-5 w-5 text-cyan-100" aria-hidden="true" />
          </span>
          <span className="hidden truncate text-sm font-semibold text-white sm:block">
            Workplace Management Solutions
          </span>
          <span className="text-sm font-semibold text-white sm:hidden">WMS</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                className="text-xs font-medium text-slate-300 transition hover:text-white"
                href={href}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                className="text-xs font-medium text-slate-300 transition hover:text-white"
                href={href}
              >
                {label}
              </a>
            ),
          )}
          <Link
            href="/workflow-snapshot"
            className="rounded-full bg-cyan-100 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-white"
          >
            Request a Workflow Snapshot
          </Link>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl xl:hidden"
        >
          {links.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                className="rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                className="rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ),
          )}
          <Link
            href="/workflow-snapshot"
            className="mt-1 rounded-xl bg-cyan-100 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            onClick={() => setOpen(false)}
          >
            Request a Workflow Snapshot
          </Link>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-4xl ${className}`}>
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-100/75">
          {kicker}
        </p>
      )}
      <h2 className="mt-5 text-3xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>}
    </div>
  );
}

function WorkflowSnapshotLink({
  children = "Request a Workflow Snapshot",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/workflow-snapshot"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-center text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-300/15 transition hover:bg-white ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-slate-400 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-white">Workplace Management Solutions</p>
          <p className="mt-2">425-577-4533</p>
          <a
            className="mt-1 block hover:text-cyan-100"
            href="mailto:sales@workplacemgtsolutions.com"
          >
            sales@workplacemgtsolutions.com
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link className="hover:text-white" href="/policy">
            Privacy &amp; Terms
          </Link>
          <a className="hover:text-white" href="https://try.workplacemgtsolutions.com">
            25 Leads in 7 Days
          </a>
          <a className="hover:text-white" href="https://app.workplacemgtsolutions.com">
            Client Login
          </a>
        </div>
      </div>
    </footer>
  );
}

export function EcosystemExperience() {
  return (
    <main id="top" className="overflow-hidden bg-[#05070d] text-white">
      <Header />

      <section className="relative flex min-h-[100svh] items-center px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <GlowGridBackground intensity="strong" />
        <ParticleField density="low" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(75,113,170,0.34),transparent_28%),radial-gradient(circle_at_78%_44%,rgba(20,184,166,0.13),transparent_31%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.85 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-100">
              OPERATOR-LED BUSINESS SYSTEMS &amp; AUTOMATION
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              SHOW US THE WORKFLOW SLOWING YOUR BUSINESS DOWN.
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-cyan-50">
              We find the friction, map the process, and build the automated system that makes your
              business easier to run.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              WMS helps owners uncover bottlenecks, clean up broken workflows, and connect the
              systems behind the business. We use GoHighLevel, CRM, automation, AI, websites,
              reporting, and process design to reduce friction and improve execution.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <WorkflowSnapshotLink />
              <a
                href="#process"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-cyan-100/50 hover:bg-white/10"
              >
                See How WMS Works
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <span>Process first</span>
              <span>Technology configured around it</span>
              <span>One workflow at a time</span>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto w-full max-w-[620px]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.12 }}
          >
            <OrbNetwork label="WMS Operating System" />
            <p className="mt-2 text-center text-xs leading-5 text-slate-500">
              Select a node to explore the connected capability.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="how-we-help"
        className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(45,212,191,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            kicker="THE OPERATIONAL PROBLEM"
            title="YOUR BUSINESS SHOULD NOT BE THIS HARD TO OPERATE."
            copy="Growth often creates more tools, more handoffs, more follow-up, and more administrative work. WMS finds where the system is breaking and rebuilds the workflow around how the business actually operates."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <motion.article
                  key={problem.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-100/25 hover:bg-white/[0.06]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-100/20 bg-cyan-100/10">
                    <Icon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-xl font-semibold text-white">{problem.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{problem.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="operating-system"
        className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <GlowGridBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            kicker="WHAT WMS BUILDS"
            title="ONE CONNECTED OPERATING SYSTEM INSTEAD OF ANOTHER DISCONNECTED TOOL."
            copy="WMS designs the process first, then configures the technology around it."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.article
                  id={capability.id}
                  key={capability.title}
                  className={`scroll-mt-28 rounded-[1.9rem] border p-7 transition hover:-translate-y-1 ${
                    capability.featured
                      ? "border-[#f5d18a]/30 bg-[linear-gradient(145deg,rgba(245,209,138,0.08),rgba(255,255,255,0.035))]"
                      : "border-white/10 bg-slate-950/65 hover:border-cyan-100/30 hover:bg-white/[0.055]"
                  } ${index === capabilities.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center justify-between gap-5">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl border ${
                        capability.featured
                          ? "border-[#f5d18a]/35 bg-[#f5d18a]/10 text-[#f5d18a]"
                          : "border-cyan-100/20 bg-cyan-100/10 text-cyan-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{capability.copy}</p>
                  <p
                    className={`mt-7 border-t pt-4 font-mono text-[11px] uppercase tracking-[0.18em] ${
                      capability.featured
                        ? "border-[#f5d18a]/15 text-[#f5d18a]/80"
                        : "border-white/10 text-cyan-100/65"
                    }`}
                  >
                    {capability.signal}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="gohighlevel"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            className="relative min-h-[440px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900"
          >
            <Image
              src="/wms-workflow-review.jpg"
              alt="Business operators reviewing a workflow together"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#f5d18a]">
                PLATFORM + OPERATING DESIGN
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                The workflow determines the configuration—not the other way around.
              </p>
            </div>
          </motion.div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#f5d18a]">
              WHY GOHIGHLEVEL
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.05] text-white sm:text-5xl">
              GOHIGHLEVEL IS THE PLATFORM. THE OPERATING SYSTEM IS THE VALUE.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              WMS uses GoHighLevel as a central platform for CRM, lead capture, calendars,
              communication, follow-up, pipelines, and automation. We configure it around the
              business rather than forcing the business into a generic template.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {goHighLevelCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#f5d18a]"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-slate-200">{capability}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-white">
              The technology matters. The operating design matters more.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <ParticleField density="low" tone="violet" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeading
              kicker="OPERATOR CREDIBILITY"
              title="BUILT BY OPERATORS FOR BUSINESSES THAT NEED REAL STRUCTURE."
              copy="WMS brings an operator's view to CRM, staffing, websites, reporting, automation, security, facilities, and daily execution. We do not install technology in isolation. We build systems that fit the way the business needs to run."
            />
            <motion.div
              className="relative min-h-[330px] overflow-hidden rounded-[2.25rem] border border-white/10"
            >
              <Image
                src="/wms-operators.jpg"
                alt="Business operators working through an operating decision"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent" />
            </motion.div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {operatorPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.article
                  key={point.title}
                  className="flex gap-5 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-100/20 bg-cyan-100/10">
                    <Icon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{point.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="HOW IT WORKS"
            title="START WITH ONE WORKFLOW."
            copy="WMS begins with the operating friction, defines the better process, and only then builds the supporting system."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map(([number, title, copy]) => (
              <motion.li
                key={title}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="font-mono text-xs text-cyan-100">{number}</span>
                <h3 className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-white">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <GlowGridBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            kicker="OPERATIONAL OUTCOMES"
            title="THE SYSTEM SHOULD CREATE MEASURABLE OPERATIONAL IMPROVEMENT."
            copy="The goal is not more software. The goal is clearer ownership, less friction, and more consistent execution."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/65 p-5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-cyan-100" aria-hidden="true" />
                  <p className="font-medium text-slate-100">{outcome.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <motion.div
          className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.75rem] border border-cyan-100/20 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(245,209,138,0.08),transparent_30%),linear-gradient(135deg,#07111f,#030712)] p-8 sm:p-12 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:p-16"
        >
          <div className="relative z-10">
            <ClipboardCheck className="h-9 w-9 text-cyan-100" aria-hidden="true" />
            <h2 className="mt-7 max-w-4xl text-3xl font-semibold leading-[1.05] text-white sm:text-5xl">
              SHOW US THE WORKFLOW SLOWING YOUR BUSINESS DOWN.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Complete a short assessment so WMS can understand the business, identify the likely
              bottleneck, and determine whether a systems review makes sense.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[#f5d18a]">
              No generic software pitch. We start with the workflow.
            </p>
          </div>
          <WorkflowSnapshotLink className="relative z-10 w-full lg:justify-self-end" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
