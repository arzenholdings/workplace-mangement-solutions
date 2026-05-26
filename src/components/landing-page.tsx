"use client";

import {
  Activity,
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  FileSpreadsheet,
  Layers3,
  LineChart,
  Network,
  RadioTower,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const integrations = [
  { name: "AI Agents", x: 50, y: 16, icon: Bot, accent: "cyan" },
  { name: "CRM", x: 23, y: 27, icon: Blocks, accent: "teal" },
  { name: "QuickBooks", x: 76, y: 28, icon: FileSpreadsheet, accent: "emerald" },
  { name: "Salesforce", x: 18, y: 54, icon: CloudCog, accent: "sky" },
  { name: "Excel", x: 38, y: 71, icon: FileSpreadsheet, accent: "lime" },
  { name: "Shopify", x: 63, y: 72, icon: DatabaseZap, accent: "green" },
  { name: "Amazon", x: 83, y: 55, icon: Layers3, accent: "amber" },
  { name: "Slack", x: 33, y: 41, icon: RadioTower, accent: "violet" },
  { name: "Teams", x: 67, y: 42, icon: Network, accent: "indigo" },
  { name: "Linear", x: 29, y: 84, icon: Route, accent: "purple" },
  { name: "Supabase", x: 50, y: 91, icon: DatabaseZap, accent: "emerald" },
  { name: "Vercel", x: 71, y: 84, icon: Zap, accent: "zinc" },
];

const services = [
  {
    title: "AI Automation",
    icon: BrainCircuit,
    copy: "Agentic workflows that triage work, route exceptions, prepare reports, and keep operators focused on judgment calls.",
    signal: "Intake, routing, approvals, follow-up",
  },
  {
    title: "Operational Reporting",
    icon: LineChart,
    copy: "Executive dashboards and working reports that connect finance, sales, service, inventory, and fulfillment data.",
    signal: "KPIs, variance analysis, live scorecards",
  },
  {
    title: "Systems Integration",
    icon: Blocks,
    copy: "Reliable connections between CRMs, ERPs, accounting, ecommerce, databases, and team communication platforms.",
    signal: "APIs, middleware, sync rules, data quality",
  },
  {
    title: "Workflow Design",
    icon: Workflow,
    copy: "Process maps, operating rhythms, and automation logic built around how your team actually makes decisions.",
    signal: "SOPs, handoffs, controls, escalation paths",
  },
  {
    title: "Infrastructure Modernization",
    icon: ShieldCheck,
    copy: "Cloud-ready operational foundations with stronger reliability, observability, governance, and deployment practices.",
    signal: "Vercel, Supabase, secure data pipelines",
  },
];

const caseStudies = [
  {
    eyebrow: "Distribution Operations",
    title: "Automated order exception control tower",
    copy: "Connected ecommerce, inventory, accounting, and Slack signals into one operating view with AI-drafted resolution paths.",
    metric: "42%",
    label: "faster exception handling",
  },
  {
    eyebrow: "Professional Services",
    title: "Client profitability reporting suite",
    copy: "Unified CRM, timesheet, QuickBooks, and spreadsheet data into dashboards leaders could trust every Monday morning.",
    metric: "18 hrs",
    label: "saved per reporting cycle",
  },
  {
    eyebrow: "Field Teams",
    title: "Workflow redesign for service dispatch",
    copy: "Rebuilt intake, scheduling, documentation, and escalation workflows around real-time status and workload visibility.",
    metric: "31%",
    label: "higher on-time completion",
  },
];

const stats = [
  ["AI-first", "workflow architecture"],
  ["Enterprise", "infrastructure experience"],
  ["Operator-led", "process optimization"],
];

const accentClasses: Record<string, string> = {
  amber: "border-amber-300/40 bg-amber-300/10 text-amber-100 shadow-amber-300/20",
  cyan: "border-cyan-300/40 bg-cyan-300/10 text-cyan-100 shadow-cyan-300/20",
  emerald:
    "border-emerald-300/40 bg-emerald-300/10 text-emerald-100 shadow-emerald-300/20",
  green: "border-green-300/40 bg-green-300/10 text-green-100 shadow-green-300/20",
  indigo:
    "border-indigo-300/40 bg-indigo-300/10 text-indigo-100 shadow-indigo-300/20",
  lime: "border-lime-300/40 bg-lime-300/10 text-lime-100 shadow-lime-300/20",
  purple:
    "border-purple-300/40 bg-purple-300/10 text-purple-100 shadow-purple-300/20",
  sky: "border-sky-300/40 bg-sky-300/10 text-sky-100 shadow-sky-300/20",
  teal: "border-teal-300/40 bg-teal-300/10 text-teal-100 shadow-teal-300/20",
  violet:
    "border-violet-300/40 bg-violet-300/10 text-violet-100 shadow-violet-300/20",
  zinc: "border-zinc-200/40 bg-zinc-200/10 text-zinc-100 shadow-zinc-200/20",
};

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>
    </motion.div>
  );
}

function EcosystemMap() {
  return (
    <motion.div
      className="relative mx-auto mt-12 min-h-[640px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#07101b]/80 p-4 shadow-2xl shadow-cyan-950/40 sm:min-h-[680px] sm:p-8"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_82%_62%,rgba(168,85,247,0.14),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full border border-cyan-200/15"
        style={{ translate: "-50% -50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full border border-violet-200/10"
        style={{ translate: "-50% -50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.08)" />
            <stop offset="52%" stopColor="rgba(45,212,191,0.42)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.16)" />
          </linearGradient>
        </defs>
        {integrations.map((item) => (
          <motion.line
            key={item.name}
            x1="50"
            x2={item.x}
            y1="52"
            y2={item.y}
            stroke="url(#lineGlow)"
            strokeWidth="0.26"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-[52%] z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-cyan-200/40 bg-slate-950/80 text-center shadow-2xl shadow-cyan-400/20 backdrop-blur sm:h-40 sm:w-40"
        style={{ translate: "-50% -50%" }}
        animate={{
          boxShadow: [
            "0 0 42px rgba(34,211,238,0.18)",
            "0 0 72px rgba(45,212,191,0.34)",
            "0 0 42px rgba(34,211,238,0.18)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="h-8 w-8 text-cyan-200" />
        <span className="mt-3 text-sm font-semibold text-white sm:text-base">
          Dashboards
        </span>
        <span className="mt-1 px-3 text-[11px] text-slate-300 sm:text-xs">
          Reporting intelligence
        </span>
      </motion.div>

      {integrations.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.name}
            className={`absolute z-20 flex min-w-24 items-center gap-2 rounded-xl border px-3 py-2 text-xs shadow-lg backdrop-blur-md sm:min-w-32 sm:px-4 sm:py-3 sm:text-sm ${
              accentClasses[item.accent]
            }`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              translate: "-50% -50%",
            }}
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -7, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.04 },
              scale: { duration: 0.5, delay: index * 0.04 },
              y: {
                duration: 4.5 + (index % 4) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              },
            }}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate font-medium">{item.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <section className="relative min-h-screen px-5 pb-20 pt-6 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(99,102,241,0.18),transparent_26%),linear-gradient(180deg,rgba(5,7,13,0),#05070d_92%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col">
          <header className="flex items-center justify-between py-3">
            <a
              href="#top"
              className="group flex items-center gap-3"
              aria-label="Workplace Management Solutions home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/30 bg-cyan-200/10 shadow-lg shadow-cyan-400/10">
                <Sparkles className="h-5 w-5 text-cyan-100" />
              </span>
              <span className="hidden text-sm font-semibold text-white sm:block">
                Workplace Management Solutions
              </span>
              <span className="text-sm font-semibold text-white sm:hidden">WMS</span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
              <a className="transition hover:text-white" href="#ecosystem">
                Ecosystem
              </a>
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#case-studies">
                Case Studies
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
            >
              Book a Call
            </a>
          </header>

          <div
            id="top"
            className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr]"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                AI operations consulting
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
              >
                Modern operating systems for businesses ready to move faster.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
              >
                Workplace Management Solutions builds AI workflows, automation,
                reporting systems, and enterprise-grade infrastructure that turn
                fragmented operations into a connected command center.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:bg-white"
                >
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-teal-200/50 hover:bg-white/10"
                >
                  Explore the Ecosystem
                </a>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {stats.map(([title, copy]) => (
                  <div
                    key={title}
                    className="border-l border-white/15 pl-4 text-left"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative min-h-[430px] rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_30%,rgba(45,212,191,0.24),transparent_34%),radial-gradient(circle_at_70%_72%,rgba(168,85,247,0.18),transparent_32%)]" />
              <div className="relative h-full min-h-[398px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      Operations cockpit
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Connected workflow health
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                  </div>
                </div>
                <div className="grid gap-4 p-5">
                  {[
                    ["Agent Queue", "84%", "Exceptions drafted and routed"],
                    ["Revenue Ops", "$2.8M", "Pipeline, orders, and cash signals"],
                    ["Reporting SLA", "99.6%", "Daily dashboards published on time"],
                  ].map(([label, value, copy], index) => (
                    <motion.div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      animate={{ opacity: [0.72, 1, 0.72] }}
                      transition={{
                        duration: 4,
                        delay: index * 0.55,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-slate-300">{label}</p>
                        <p className="font-mono text-xl font-semibold text-cyan-100">
                          {value}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-slate-500">{copy}</p>
                    </motion.div>
                  ))}
                  <div className="mt-2 h-28 rounded-2xl border border-cyan-200/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(20,184,166,0.06),rgba(168,85,247,0.12))] p-4">
                    <div className="flex h-full items-end gap-2">
                      {[34, 58, 44, 72, 52, 81, 66, 92, 76].map((height, index) => (
                        <motion.span
                          key={height + index}
                          className="flex-1 rounded-t bg-cyan-100/70"
                          style={{ height: `${height}%` }}
                          animate={{ scaleY: [0.72, 1, 0.8] }}
                          transition={{
                            duration: 2.8,
                            delay: index * 0.13,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Connected ecosystem"
            title="A living operations map for the tools your business already runs on."
            copy="We design the connective tissue between human teams, AI agents, revenue systems, finance, spreadsheets, dashboards, and infrastructure so each workflow has context before it acts."
          />
          <EcosystemMap />
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What we build"
            title="Consulting that leaves you with stronger systems, not just better slides."
            copy="Every engagement pairs strategy with implementation, documentation, measurement, and operator training so your team can own the new way of working."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="group min-h-[320px] rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  variants={fadeUp}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.copy}
                  </p>
                  <p className="mt-6 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-[0.16em] text-teal-200/80">
                    {service.signal}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="case-studies" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Proof of motion"
            title="Operational upgrades designed around measurable business pressure."
            copy="Representative engagements show how WMS turns disconnected tools and manual routines into connected, visible, and accountable operating systems."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                variants={fadeUp}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-300" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/75">
                  {study.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {study.title}
                </h3>
                <p className="mt-4 min-h-28 text-sm leading-7 text-slate-300">
                  {study.copy}
                </p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-mono text-3xl font-semibold text-cyan-100">
                    {study.metric}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{study.label}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 pt-20 sm:px-8 lg:px-10">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[#08111e] px-6 py-16 text-center shadow-2xl shadow-cyan-950/30 sm:px-10 lg:py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_10%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">
              Build the next operating layer
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
              Bring us your workflow friction. We will map the system that fixes it.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Start with a focused discovery call. We will identify the highest
              leverage automation, reporting, and infrastructure opportunities
              hiding inside your current operations.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@workplacemanagementsolutions.com?subject=Discovery%20Call%20Request"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-xl shadow-white/10 transition hover:bg-cyan-100 sm:w-auto"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@workplacemanagementsolutions.com"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10 sm:w-auto"
              >
                hello@workplacemanagementsolutions.com
              </a>
            </div>
          </div>
        </motion.div>
        <footer className="mx-auto flex max-w-7xl flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Workplace Management Solutions. All rights reserved.</p>
          <p>AI workflows, reporting, integrations, and infrastructure.</p>
        </footer>
      </section>
    </main>
  );
}
