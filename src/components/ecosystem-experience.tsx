"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  CircleDot,
  Inbox,
  Menu,
  MessageSquareText,
  PhoneMissed,
  Radar,
  Route,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { GlowGridBackground } from "@/components/glow-grid-background";
import { OrbNetwork } from "@/components/orb-network";
import { ParticleField } from "@/components/particle-field";

const problems = [
  {
    title: "MISSED OPPORTUNITIES",
    copy: "Calls go unanswered, forms sit too long, and prospects move on.",
    icon: PhoneMissed,
  },
  {
    title: "DISCONNECTED TOOLS",
    copy: "Your website, inbox, CRM, calendar, phone, and reporting do not share one workflow.",
    icon: Route,
  },
  {
    title: "OWNER BOTTLENECK",
    copy: "Follow-up, approvals, and decisions still depend on what the owner remembers.",
    icon: CircleDot,
  },
];

const systemModules = [
  {
    title: "CAPTURE",
    copy: "Bring calls, forms, chat, ads, and referrals into one visible pipeline.",
    icon: Inbox,
  },
  {
    title: "RESPOND",
    copy: "Text and email new leads while the opportunity is still active.",
    icon: MessageSquareText,
  },
  {
    title: "BOOK",
    copy: "Give customers a clear next step and move appointments onto the calendar.",
    icon: CalendarCheck2,
  },
  {
    title: "FOLLOW UP",
    copy: "Keep missed calls, open estimates, and old leads moving without relying on memory.",
    icon: Workflow,
  },
  {
    title: "REPORT",
    copy: "See what is working, what is stuck, and where the business is losing momentum.",
    icon: BarChart3,
  },
  {
    title: "IMPROVE",
    copy: "Use automation and AI where they remove work, not where they add complexity.",
    icon: Bot,
  },
];

const process = [
  ["01", "DIAGNOSE", "Complete the Workflow Snapshot and identify the highest-value bottleneck."],
  ["02", "BUILD", "WMS configures the page, CRM, pipeline, follow-up, automation, and reporting."],
  ["03", "LAUNCH", "Your system begins capturing, responding to, and moving opportunities forward."],
  ["04", "IMPROVE", "We review the results, repair weak points, and expand what works."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Solutions", "#solutions"],
    ["How It Works", "#how-it-works"],
    ["Workflow Snapshot", "/workflow-snapshot"],
    ["25 Leads in 7 Days", "https://try.workplacemgtsolutions.com"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          aria-label="Workplace Management Solutions home"
          className="flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-100/30 bg-cyan-100/10 shadow-lg shadow-cyan-300/10">
            <Sparkles className="h-5 w-5 text-cyan-100" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Workplace Management Solutions
          </span>
          <span className="text-sm font-semibold text-white sm:hidden">WMS</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              className="text-sm text-slate-300 transition hover:text-white"
              href={href}
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.workplacemgtsolutions.com"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-100/50 hover:bg-white/10"
          >
            Client Login
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl lg:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              className="rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.workplacemgtsolutions.com"
            className="rounded-xl bg-cyan-100 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            Client Login
          </a>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker?: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <motion.div
      className="max-w-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      variants={fadeUp}
    >
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-100/75">
          {kicker}
        </p>
      )}
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-slate-400 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-white">Workplace Management Solutions</p>
          <p className="mt-2">425-577-4533</p>
          <a className="mt-1 block hover:text-cyan-100" href="mailto:sales@workplacemgtsolutions.com">
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
  const reducedMotion = useReducedMotion();

  return (
    <main id="top" className="overflow-hidden bg-[#05070d] text-white">
      <Header />

      <section className="relative flex min-h-[100svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <GlowGridBackground intensity="strong" />
        <ParticleField density="medium" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.85 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-100">
              WORKFLOW. FOLLOW-UP. GROWTH.
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              BUILD THE SYSTEM THAT TURNS LEADS INTO BOOKED WORK.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              WMS connects your website, CRM, follow-up, automation, AI, and reporting into one
              operating system for owner-operated service businesses.
            </p>
            <p className="mt-4 text-lg font-medium text-cyan-50">
              Respond faster. Book more work. Run with less chaos.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/workflow-snapshot"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:bg-white"
              >
                Get My Workflow Snapshot
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://try.workplacemgtsolutions.com"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-cyan-100/50 hover:bg-white/10"
              >
                See the 7-Day Lead Engine
              </a>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto w-full max-w-[620px]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <OrbNetwork
              label="WMS Operating System"
              orbs={[
                { label: "Website", angle: -90, radius: 36, size: 10, color: "#67e8f9" },
                { label: "CRM", angle: -35, radius: 45, size: 8, color: "#5eead4" },
                { label: "Follow-Up", angle: 18, radius: 34, size: 12, color: "#a5b4fc" },
                { label: "Calendar", angle: 74, radius: 46, size: 9, color: "#86efac" },
                { label: "AI", angle: 142, radius: 39, size: 11, color: "#c4b5fd" },
                { label: "Reporting", angle: 204, radius: 48, size: 8, color: "#7dd3fc" },
              ]}
            />
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            title={
              <>
                YOUR BUSINESS DOES NOT NEED MORE SOFTWARE.
                <br />
                <span className="text-cyan-100">IT NEEDS A SYSTEM.</span>
              </>
            }
            copy="Every missed call, forgotten estimate, disconnected form, and manual handoff creates another place for revenue to disappear."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.article
                  key={problem.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Icon className="h-7 w-7 text-cyan-100" />
                  <h3 className="mt-8 font-mono text-sm tracking-[0.2em] text-white">{problem.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{problem.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <GlowGridBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading title="ONE OPERATING SYSTEM FROM FIRST CLICK TO CLOSED JOB." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {systemModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.article
                  key={module.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6 transition hover:border-cyan-100/30 hover:bg-white/[0.06]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-cyan-100" />
                    <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 font-mono text-sm tracking-[0.22em] text-white">{module.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{module.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.5rem] border border-cyan-100/20 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(135deg,#07111f,#030712)] p-8 sm:p-12 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:p-16">
          <div>
            <Radar className="h-8 w-8 text-cyan-100" />
            <h2 className="mt-7 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
              SHOW US THE WORKFLOW SLOWING YOUR BUSINESS DOWN.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Complete a focused 15-minute assessment.
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
              We will map your lead flow, handoffs, tools, follow-up, and operational bottlenecks,
              then show you what to fix first.
            </p>
          </div>
          <Link
            href="/workflow-snapshot"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white lg:justify-self-end"
          >
            Get My Workflow Snapshot
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">
        <ParticleField density="low" tone="violet" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-violet-100/20 bg-violet-100/[0.06] p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-100">
              FOR HOME-SERVICE BUSINESSES
            </p>
            <h2 className="mt-7 text-4xl font-semibold leading-[0.98] sm:text-6xl">
              NEED DEMAND NOW?
              <br />
              <span className="text-cyan-100">25 LEADS IN 7 DAYS.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Built for qualified home-service companies with the capacity to answer, book, and
              serve more customers.
            </p>
            <div className="mt-7 space-y-3 text-lg font-medium text-white">
              <p>One defined market.</p>
              <p>One focused campaign.</p>
              <p>One measurable seven-day sprint.</p>
            </div>
            <a
              href="https://try.workplacemgtsolutions.com"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Check My Market
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="HOW IT WORKS" title="FROM BOTTLENECK TO OPERATING SYSTEM." />
          <ol className="mt-14 grid gap-5 lg:grid-cols-4">
            {process.map(([number, title, copy], index) => (
              <motion.li
                key={title}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="font-mono text-xs text-cyan-100">{number}</span>
                <h3 className="mt-8 font-mono text-sm tracking-[0.22em] text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative flex min-h-[82svh] items-center px-5 py-24 text-center sm:px-8 lg:px-10">
        <GlowGridBackground intensity="normal" />
        <motion.div
          className="relative z-10 mx-auto max-w-5xl"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <CheckCircle2 className="mx-auto h-9 w-9 text-cyan-100" />
          <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
            YOUR NEXT SYSTEM SHOULD MAKE WORK EASIER, NOT ADD ANOTHER LOGIN.
          </h2>
          <p className="mt-7 text-xl text-slate-300">Start with the Workflow Snapshot.</p>
          <Link
            href="/workflow-snapshot"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-7 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            Get My Workflow Snapshot
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
