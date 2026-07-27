"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDotDashed,
  Clock3,
  Gauge,
  Headphones,
  Menu,
  MessageSquareText,
  Network,
  PhoneCall,
  Radar,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type IconItem = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const problems: IconItem[] = [
  {
    title: "Missed opportunities",
    copy: "Calls go unanswered, forms sit too long, and prospects move on.",
    icon: Route,
  },
  {
    title: "Disconnected tools",
    copy: "Your website, inbox, CRM, calendar, phone, and reporting do not share one workflow.",
    icon: Network,
  },
  {
    title: "Owner bottleneck",
    copy: "Follow-up, approvals, and decisions still depend on what the owner remembers.",
    icon: MessageSquareText,
  },
  {
    title: "Slow follow-up",
    copy: "Missed calls, open estimates, and old leads stop moving when next steps rely on memory.",
    icon: RefreshCw,
  },
];

const capabilities = [
  {
    title: "Capture",
    copy: "Bring calls, forms, chat, ads, and referrals into one visible pipeline.",
    signal: "Calls, forms, chat, ads, referrals",
    icon: Radar,
  },
  {
    title: "Respond",
    copy: "Text and email new leads while the opportunity is still active.",
    signal: "Text and email new leads",
    icon: MessageSquareText,
  },
  {
    title: "Book",
    copy: "Give customers a clear next step and move appointments onto the calendar.",
    signal: "Appointments on the calendar",
    icon: CalendarCheck2,
  },
  {
    title: "Follow up",
    copy: "Keep missed calls, open estimates, and old leads moving without relying on memory.",
    signal: "Missed calls, open estimates, old leads",
    icon: Workflow,
  },
  {
    title: "Report",
    copy: "See what is working, what is stuck, and where the business is losing momentum.",
    signal: "What works, what is stuck",
    icon: BarChart3,
  },
  {
    title: "Improve",
    copy: "Use automation and AI where they remove work, not where they add complexity.",
    signal: "Automation and AI",
    icon: Bot,
  },
  {
    title: "Operate",
    copy: "Connect people, ownership, tools, and reporting so the business is easier to run.",
    signal: "One business operating system",
    icon: UsersRound,
  },
];

const process = [
  ["01", "Diagnose", "Complete the Workflow Snapshot and identify the highest-value bottleneck."],
  [
    "02",
    "Build",
    "WMS configures the page, CRM, pipeline, follow-up, automation, and reporting.",
  ],
  [
    "03",
    "Launch",
    "Your system begins capturing, responding to, and moving opportunities forward.",
  ],
  ["04", "Review", "We review the results and repair weak points."],
  ["05", "Improve", "Expand what works."],
];

const outcomes = [
  { title: "Faster lead response", icon: Clock3 },
  { title: "Fewer missed follow-ups", icon: CheckCircle2 },
  { title: "Clearer pipeline ownership", icon: UserCheck },
  { title: "Reduced repetitive work", icon: RefreshCw },
  { title: "Better management visibility", icon: Gauge },
  { title: "More consistent execution", icon: ShieldCheck },
  { title: "Easier employee onboarding", icon: UsersRound },
  { title: "Fewer disconnected tools", icon: Network },
];

const leadOfferPoints = [
  {
    title: "Qualified home-service companies",
    copy: "Built for companies with the capacity to answer, book, and serve more customers.",
  },
  { title: "One defined market", copy: "One defined market." },
  { title: "One focused campaign", copy: "One focused campaign." },
  {
    title: "One measurable seven-day sprint",
    copy: "One measurable seven-day sprint.",
  },
];

const systemGroups = [
  {
    title: "Lead intake",
    icon: PhoneCall,
    items: ["Missed-call response", "Lead capture", "Website and funnel support"],
  },
  {
    title: "Conversation and booking",
    icon: Headphones,
    items: ["Automated follow-up", "Appointment booking", "Human escalation"],
  },
  {
    title: "Visibility and optimization",
    icon: Gauge,
    items: [
      "CRM organization",
      "Pipeline visibility",
      "Workflow automation",
      "Reporting",
      "Ongoing optimization",
    ],
  },
];

const implementationSteps = [
  {
    label: "Diagnose",
    copy: "Find the highest-value bottleneck before adding another tool.",
    icon: Radar,
  },
  {
    label: "Configure",
    copy: "WMS configures the page, CRM, pipeline, follow-up, automation, and reporting.",
    icon: Blocks,
  },
  {
    label: "Connect",
    copy: "Connect people, ownership, tools, and reporting so the business is easier to run.",
    icon: Network,
  },
  {
    label: "Improve",
    copy: "We review the results, repair weak points, and expand what works.",
    icon: RefreshCw,
  },
];

const faqItems = [
  {
    question: "How long does setup take?",
    answer:
      "With our done-for-you setup, you can be up and running in less than 24 hours. Your 1-on-1 kickoff call takes about 45 minutes.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. We handle all the technical setup for you, and the platform is designed to be incredibly easy to use from your phone or computer.",
  },
  {
    question: "Can I keep my current website?",
    answer:
      "Yes! While we offer a professional website as part of the package, you can easily integrate our AI chat widget and automations into your existing site.",
  },
  {
    question: "Can AI really book appointments?",
    answer:
      "Yes. Our conversational AI is trained on your specific services, pricing, and availability. It can answer questions and book appointments directly into your calendar without human intervention.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. Our monthly plan is month-to-month, and you can cancel anytime. We also offer an annual plan for those who want to save on two months.",
  },
];

function WmsMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="wms-logo-mark">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className={compact ? "text-sm font-semibold" : "hidden text-sm font-semibold sm:block"}>
        {compact ? "WMS" : "Workplace Management Solutions"}
      </span>
      {!compact && <span className="text-sm font-semibold sm:hidden">WMS</span>}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Solutions", "#operating-system"],
    ["How it works", "#process"],
    ["25 Leads in 7 Days", "https://try.workplacemgtsolutions.com"],
    ["Client login", "https://app.workplacemgtsolutions.com"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#06090b]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Workplace Management Solutions home" className="text-white">
          <WmsMark />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              className="text-xs font-medium text-[#a7b2b8] transition hover:text-white"
              href={href}
            >
              {label}
            </a>
          ))}
          <Link href="/workflow-snapshot" className="wms-button min-h-10 px-5 text-xs">
            Workflow Snapshot
          </Link>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/[0.07] bg-[#081014] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-[1180px] gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                className="rounded-lg px-3 py-3 text-sm text-[#c9d1d5] hover:bg-white/[0.05]"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              href="/workflow-snapshot"
              className="wms-button mt-2 min-h-12"
              onClick={() => setOpen(false)}
            >
              Workflow Snapshot
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="wms-kicker">{kicker}</p>
      <h2 className="wms-heading mt-5">{title}</h2>
      {copy && <p className="mt-6 max-w-2xl text-base leading-7 text-[#a7b2b8] sm:text-lg">{copy}</p>}
    </div>
  );
}

function WorkflowSnapshotLink({
  children = "Get my Workflow Snapshot",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link href="/workflow-snapshot" className={`wms-button ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

function LeadCommandCenter() {
  const leads = [
    ["New website inquiry", "Captured · Home remodeling", "Now"],
    ["Missed call recovered", "Responded · Plumbing service", "2m"],
    ["Estimate follow-up", "Assigned · Roof repair", "12m"],
    ["Appointment booked", "Booked · HVAC service", "Today"],
  ];

  return (
    <div className="wms-console wms-accent-edge relative">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <div>
          <p className="wms-console-label">WMS command center</p>
          <p className="mt-1 text-sm font-medium text-white">Lead operations</p>
        </div>
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.17em] text-[#7f8d94]">
          <span className="h-2 w-2 rounded-full bg-[#54e1a4] shadow-[0_0_12px_rgba(84,225,164,.75)]" />
          System active
        </span>
      </div>
      <div className="grid gap-px bg-white/[0.06] lg:grid-cols-[1.2fr_.8fr]">
        <div className="bg-[#0b1115] p-4 sm:p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="wms-console-label">Live opportunity flow</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">Every lead, visible</p>
            </div>
            <span className="rounded-full border border-[#39d5f6]/20 bg-[#39d5f6]/[0.07] px-3 py-1 text-xs text-[#73e4fa]">
              Routing on
            </span>
          </div>
          <div className="mt-5 space-y-2">
            {leads.map(([name, detail, time], index) => (
              <div
                key={name}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-3"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    index === 0
                      ? "bg-[#39d5f6]"
                      : index === 1
                        ? "bg-[#8B5CF6]"
                        : index === 2
                          ? "bg-[#D946EF]"
                          : "bg-[#54e1a4]"
                  }`}
                />
                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-[#e9eef0] sm:text-sm">
                    {name}
                  </span>
                  <span className="mt-0.5 block truncate text-[10px] text-[#718087] sm:text-xs">
                    {detail}
                  </span>
                </span>
                <span className="font-mono text-[10px] text-[#718087]">{time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-px bg-white/[0.06]">
          <div className="bg-[#0d1418] p-4 sm:p-5">
            <p className="wms-console-label">Missed-call recovery</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#39d5f6]/20 bg-[#39d5f6]/10 text-[#73e4fa]">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">Automatic text sent</p>
                <p className="mt-1 text-xs text-[#718087]">Next step: booking link</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0d1418] p-4 sm:p-5">
            <p className="wms-console-label">Pipeline visibility</p>
            <div className="mt-5 flex h-20 items-end gap-2" aria-hidden="true">
              {[38, 57, 46, 72, 62, 84, 76].map((height, index) => (
                <span
                  key={height}
                  className={`flex-1 rounded-t-sm ${
                    index === 5
                      ? "bg-[#39d5f6]"
                      : index === 3
                        ? "bg-[#8B5CF6]"
                        : index === 6
                          ? "bg-[#D946EF]"
                          : "bg-[#1b3b46]"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] text-[#718087]">
              <span>Inquiry</span>
              <span>Booked work</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-[#27414b] bg-[#102028] px-4 py-3 shadow-2xl sm:left-auto sm:w-[310px]">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-xs text-[#c9d1d5]">
            <Zap className="h-3.5 w-3.5 text-[#73e4fa]" aria-hidden="true" />
            Follow-up sequence active
          </span>
          <span className="font-mono text-[10px] text-[#54e1a4]">ON</span>
        </div>
      </div>
    </div>
  );
}

function WorkflowLeakConsole() {
  return (
    <div className="wms-console">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="wms-console-label">Workflow diagnostic</p>
          <p className="mt-1 text-sm font-medium text-white">Opportunity leak map</p>
        </div>
        <CircleDotDashed className="h-5 w-5 text-[#39d5f6]" aria-hidden="true" />
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <div
              key={problem.title}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] p-3.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md border border-[#27414b] bg-[#111b20] text-[#73e4fa]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-[#eef2f3]">{problem.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#718087]">{problem.copy}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${
                  index < 2
                    ? "bg-[#f3c96a]/10 text-[#f3c96a]"
                    : "bg-[#39d5f6]/10 text-[#73e4fa]"
                }`}
              >
                {index < 2 ? "Leak" : "Friction"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OperatingSystemMap() {
  const statuses = [
    "Inquiry received",
    "Response sent",
    "Booking offered",
    "Sequence active",
    "Pipeline visible",
    "Review ready",
    "System connected",
  ];

  return (
    <div className="wms-console wms-product-proof overflow-visible">
      <div className="border-b border-white/[0.07] px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="wms-console-label">Connected operating system</p>
            <p className="mt-1 text-sm font-medium text-white">From first inquiry to ongoing follow-up</p>
          </div>
          <span className="rounded-full border border-[#27414b] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#718087]">
            One visible pipeline
          </span>
        </div>
      </div>
      <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-7">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <div
              key={capability.title}
              className={`relative bg-[#0d1418] px-4 py-6 text-center ${
                index === 1 ? "lg:bg-[#100f1b]" : ""
              }`}
            >
              <span
                className={`mx-auto grid h-10 w-10 place-items-center rounded-md border bg-[#111b20] ${
                  index === 1
                    ? "border-[#8B5CF6]/40 text-[#c4b5fd]"
                    : "border-[#27414b] text-[#73e4fa]"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-medium text-white">{capability.title}</p>
              <p className="mt-2 text-[10px] uppercase leading-4 tracking-[0.07em] text-[#718087]">
                {capability.signal}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[9px] font-medium text-[#a7b2b8]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === 1
                      ? "bg-[#8B5CF6]"
                      : index === 5
                        ? "bg-[#F472B6]"
                        : "bg-[#39d5f6]"
                  }`}
                />
                {statuses[index]}
              </span>
              {index < capabilities.length - 1 && (
                <ArrowRight
                  className={`absolute -right-2 top-9 z-10 hidden h-3.5 w-3.5 lg:block ${
                    index === 0 ? "text-[#8B5CF6]" : "text-[#39d5f6]"
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="grid gap-px bg-white/[0.06] sm:grid-cols-3">
        <div className="bg-[#0b1115] p-5">
          <p className="wms-console-label">Current stage</p>
          <p className="mt-2 text-xl font-semibold text-white">Appointment booked</p>
          <p className="mt-2 text-xs text-[#718087]">Owner: scheduling workflow</p>
        </div>
        <div className="bg-[#0b1115] p-5">
          <p className="wms-console-label">Next action</p>
          <p className="mt-2 text-xl font-semibold text-white">Confirmation sent</p>
          <p className="mt-2 text-xs text-[#718087]">Follow-up remains visible</p>
        </div>
        <div className="bg-[#0b1115] p-5">
          <p className="wms-console-label">System status</p>
          <p className="mt-2 flex items-center gap-2 text-xl font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#54e1a4]" />
            Connected
          </p>
          <p className="mt-2 text-xs text-[#718087]">No manual handoff required</p>
        </div>
      </div>
    </div>
  );
}

function SnapshotDiagnostic() {
  const areas = [
    ["Lead flow", "Review"],
    ["Handoffs", "Review"],
    ["Tools", "Mapped"],
    ["Follow-up", "Priority"],
    ["Operational bottlenecks", "Review"],
    ["What to fix first", "Output"],
  ];

  return (
    <div className="wms-console">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="wms-console-label">WMS Workflow Snapshot</p>
          <p className="mt-1 text-sm font-medium text-white">Business diagnostic</p>
        </div>
        <span className="rounded-full bg-[#39d5f6]/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#73e4fa]">
          15 minutes
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-5 flex gap-1.5" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <span
              key={item}
              className={`h-1 flex-1 rounded-full ${
                item < 3
                  ? "bg-[#39d5f6]"
                  : item === 3
                    ? "bg-gradient-to-r from-[#39d5f6] to-[#8B5CF6]"
                    : "bg-white/[0.08]"
              }`}
            />
          ))}
        </div>
        <div className="space-y-2">
          {areas.map(([area, status], index) => (
            <div
              key={area}
              className="flex items-center justify-between gap-4 rounded-lg border border-white/[0.06] bg-white/[0.025] px-4 py-3"
            >
              <span className="flex items-center gap-3 text-sm text-[#dce3e6]">
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border ${
                    index === 3
                      ? "border-[#f3c96a]/40 bg-[#f3c96a]/10 text-[#f3c96a]"
                      : "border-[#39d5f6]/30 bg-[#39d5f6]/10 text-[#73e4fa]"
                  }`}
                >
                  {index < 3 ? <Check className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                </span>
                {area}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#718087]">
                {status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-[#27414b] bg-[#102028] p-4">
          <p className="wms-console-label text-[#73e4fa]">Diagnostic output</p>
          <p className="mt-2 text-sm leading-6 text-[#dce3e6]">
            Identify the highest-value workflow problem and recommend the best next step.
          </p>
        </div>
      </div>
    </div>
  );
}

function FounderLedSection() {
  return (
    <section
      id="founder-led"
      className="wms-section wms-founder-section scroll-mt-20 border-b border-white/[0.06]"
    >
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
        <figure className="wms-founder-photo">
          <Image
            src="/wms-founder-led-operations.jpg"
            alt="A consultant and business owner reviewing an operational workflow together on a laptop."
            width={1600}
            height={1066}
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="h-auto w-full object-cover"
          />
          <div className="wms-founder-photo-shade" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 p-5 text-xs text-[#dce3e6] sm:p-6">
            <span className="h-px w-8 bg-gradient-to-r from-[#39d5f6] to-[#8B5CF6]" />
            Systems are built with people, not handed off to them.
          </figcaption>
        </figure>

        <div>
          <p className="wms-kicker wms-kicker-violet">Founder-led implementation</p>
          <h2 className="wms-heading mt-5">
            Built by an <span className="text-[#39d5f6]">operator,</span> not another software vendor.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#a7b2b8] sm:text-lg sm:leading-8">
            WMS was created by Ben Bentitou after more than two decades working across systems
            engineering, business technology, and operations. The goal is straightforward:
            connect the tools, people, and follow-up processes that turn interest into booked work.
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
            <span className="wms-founder-monogram" aria-hidden="true">
              WMS
            </span>
            <p className="max-w-xl text-sm font-medium leading-6 text-[#dce3e6]">
              You work directly with the person helping design and implement the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#05080a] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 text-sm text-[#718087] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <WmsMark compact />
          <a className="mt-4 block hover:text-[#73e4fa]" href={`tel:${siteConfig.phoneE164}`}>
            {siteConfig.phone}
          </a>
          <a className="mt-1 block hover:text-[#73e4fa]" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <p className="mt-1">{siteConfig.address.formatted}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link className="hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-white" href="/terms">
            Terms
          </Link>
          <a className="hover:text-white" href="https://try.workplacemgtsolutions.com">
            25 Leads in 7 Days
          </a>
          <a className="hover:text-white" href="https://app.workplacemgtsolutions.com">
            Client login
          </a>
        </div>
      </div>
    </footer>
  );
}

export function EcosystemExperience() {
  return (
    <main id="top" className="bg-[#06090b] text-white">
      <Header />

      <section className="wms-grid-bg relative overflow-hidden border-b border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="wms-hero-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <p className="wms-kicker">Workflow. Follow-up. Growth.</p>
            <h1 className="wms-display mt-6 max-w-[680px]">
              Build the system that turns leads into <span className="text-[#39d5f6]">booked work.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#a7b2b8]">
              WMS connects your website, CRM, follow-up, automation, AI, and reporting into one
              operating system for owner-operated service businesses.
            </p>
            <p className="mt-4 text-base text-[#718087]">
              Respond faster. Book more work. Run with less chaos.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WorkflowSnapshotLink>Get my Workflow Snapshot</WorkflowSnapshotLink>
              <a href="#process" className="wms-button-secondary">
                See how it works
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/[0.08] pt-5 text-xs text-[#718087]">
              <span>Respond faster</span>
              <span className="border-l border-white/[0.08] pl-4">More booked work</span>
              <span className="border-l border-white/[0.08] pl-4">Run with less chaos</span>
            </div>
          </div>
          <div className="pb-5">
            <LeadCommandCenter />
          </div>
        </div>
      </section>

      <section id="how-we-help" className="wms-section">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            kicker="The revenue leak"
            title={
              <>
                Your business does not need more software.{" "}
                <span className="text-[#39d5f6]">It needs a system.</span>
              </>
            }
            copy="Every missed call, forgotten estimate, disconnected form, and manual handoff creates another place for revenue to disappear."
          />
          <WorkflowLeakConsole />
        </div>
      </section>

      <section className="wms-section wms-section-alt border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            kicker="Managed implementation"
            title={
              <>
                We do not just give you software.{" "}
                <span className="text-[#39d5f6]">We help you implement it.</span>
              </>
            }
            copy="Most software companies hand you a login and wish you luck. We do the opposite."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[#1a292f] bg-[#1a292f] md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.label} className="bg-[#0d1418] p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#27414b] bg-[#111b20] text-[#73e4fa]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] text-[#4f6068]">0{index + 1}</span>
                  </div>
                  <h3 className="wms-card-title mt-8">{step.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8d9ba2]">{step.copy}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-5 rounded-xl border border-[#1a292f] bg-[#0d1418] p-6 sm:flex-row sm:items-center">
            <p className="max-w-3xl text-sm leading-7 text-[#a7b2b8]">
              Every new customer receives a one-on-one onboarding session where we help configure
              your website, connect your phone number, set up AI automations, and launch review
              requests.
            </p>
            <span className="shrink-0 text-sm font-medium text-[#73e4fa]">
              Platform + people
            </span>
          </div>
        </div>
      </section>

      <FounderLedSection />

      <section id="operating-system" className="wms-section scroll-mt-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            kicker="The WMS operating system"
            title={
              <>
                One operating system from first click to{" "}
                <span className="text-[#39d5f6]">closed job.</span>
              </>
            }
            copy="Capture the opportunity, respond while it is active, and keep every next step visible."
          />
          <div className="mt-14">
            <OperatingSystemMap />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="wms-feature-row">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#27414b] bg-[#111b20] text-[#73e4fa]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{capability.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#8d9ba2]">{capability.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#1a292f] bg-[#1a292f] lg:grid-cols-3">
            {systemGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="bg-[#0d1418] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#27414b] bg-[#111b20] text-[#73e4fa]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="wms-card-title">{group.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#a7b2b8]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#39d5f6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="wms-section wms-section-alt scroll-mt-20 border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            kicker="How it works"
            title={
              <>
                Diagnose. Build. Launch. <span className="text-[#39d5f6]">Improve.</span>
              </>
            }
            copy="Start with the highest-value bottleneck, build the supporting system, then improve what the results reveal."
          />
          <ol className="relative mt-14 grid gap-4 lg:grid-cols-5">
            {process.map(([number, title, copy], index) => (
              <li key={title} className="wms-process-card">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#73e4fa]">{number}</span>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-[#315260] lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="wms-card-title mt-8">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#8d9ba2]">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wms-section">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="WMS Workflow Snapshot"
              title={
                <>
                  Show us the workflow slowing your{" "}
                  <span className="text-[#39d5f6]">business down.</span>
                </>
              }
              copy="Complete a focused 15-minute assessment. We will map your lead flow, handoffs, tools, follow-up, and operational bottlenecks, then show you what to fix first."
            />
            <p className="mt-8 text-base font-medium text-white">
              Start with the Workflow Snapshot and identify what to fix first.
            </p>
            <WorkflowSnapshotLink className="mt-7">Start my Workflow Snapshot</WorkflowSnapshotLink>
          </div>
          <SnapshotDiagnostic />
        </div>
      </section>

      <section className="wms-section wms-section-alt border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              kicker="For home-service businesses"
              title={
                <>
                  Need demand now? <span className="text-[#39d5f6]">25 leads in 7 days.</span>
                </>
              }
              copy="Built for qualified home-service companies with the capacity to answer, book, and serve more customers. One defined market. One focused campaign. One measurable seven-day sprint."
            />
            <div className="rounded-xl border border-[#1a292f] bg-[#0d1418] p-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <p className="wms-console-label">Launch program</p>
                  <p className="mt-1 text-sm font-medium text-white">Seven-day demand sprint</p>
                </div>
                <span className="rounded-full bg-[#39d5f6]/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#73e4fa]">
                  Qualified companies
                </span>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {leadOfferPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <span className="font-mono text-[9px] text-[#4f6068]">0{index + 1}</span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#8d9ba2]">{point.copy}</p>
                  </article>
                ))}
              </div>
              <a
                href="https://try.workplacemgtsolutions.com"
                className="wms-button mt-5 w-full"
              >
                Explore the program
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="wms-section">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            kicker="The result"
            title={
              <>
                Respond faster. Book more work.{" "}
                <span className="text-[#39d5f6]">Run with less chaos.</span>
              </>
            }
            copy="The system should make opportunities easier to see, next steps easier to execute, and performance easier to improve."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[#1a292f] bg-[#1a292f] sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div key={outcome.title} className="flex items-center gap-3 bg-[#0d1418] p-5">
                  <Icon className="h-4 w-4 shrink-0 text-[#73e4fa]" aria-hidden="true" />
                  <p className="text-sm font-medium text-[#dce3e6]">{outcome.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wms-section wms-section-alt border-y border-white/[0.06]">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            kicker="Frequently asked questions"
            title={
              <>
                Everything you need to know about the{" "}
                <span className="text-[#39d5f6]">platform.</span>
              </>
            }
            copy="How the system works, what implementation requires, and what you can keep."
          />
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-white">
                  {item.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-[#73e4fa] transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#8d9ba2]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wms-section">
        <div className="wms-final-panel mx-auto grid max-w-[1180px] gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
          <div>
            <p className="wms-kicker">Your next system</p>
            <h2 className="wms-heading mt-5 max-w-4xl">
              Your next system should make work easier,{" "}
              <span className="text-[#39d5f6]">not add another login.</span>
            </h2>
            <p className="mt-5 text-base text-[#a7b2b8]">Start with the Workflow Snapshot.</p>
          </div>
          <WorkflowSnapshotLink className="w-full lg:w-auto">
            Get my Workflow Snapshot
          </WorkflowSnapshotLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}
