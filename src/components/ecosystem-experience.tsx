"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  Cloud,
  Database,
  FileSpreadsheet,
  MessageSquare,
  Network,
  RadioTower,
  Route,
  ShoppingBag,
  Sparkles,
  Store,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Module = {
  name: string;
  short: string;
  icon: LucideIcon;
  angle: number;
  radius: number;
  depth: number;
  color: string;
  group: "systems" | "teams" | "commerce" | "data";
};

type Story = {
  kicker: string;
  title: string;
  copy: string;
};

const modules: Module[] = [
  {
    name: "AI Agents",
    short: "Agents",
    icon: Bot,
    angle: -88,
    radius: 0.38,
    depth: 1.1,
    color: "#67e8f9",
    group: "systems",
  },
  {
    name: "CRM",
    short: "CRM",
    icon: Building2,
    angle: -130,
    radius: 0.56,
    depth: 0.86,
    color: "#5eead4",
    group: "systems",
  },
  {
    name: "QuickBooks",
    short: "Books",
    icon: Calculator,
    angle: -48,
    radius: 0.58,
    depth: 0.9,
    color: "#86efac",
    group: "systems",
  },
  {
    name: "Salesforce",
    short: "Sales",
    icon: Cloud,
    angle: -178,
    radius: 0.69,
    depth: 0.74,
    color: "#7dd3fc",
    group: "systems",
  },
  {
    name: "Excel",
    short: "Excel",
    icon: FileSpreadsheet,
    angle: 128,
    radius: 0.58,
    depth: 0.88,
    color: "#bef264",
    group: "data",
  },
  {
    name: "Shopify",
    short: "Shopify",
    icon: Store,
    angle: 55,
    radius: 0.6,
    depth: 0.86,
    color: "#4ade80",
    group: "commerce",
  },
  {
    name: "Amazon",
    short: "Amazon",
    icon: ShoppingBag,
    angle: 11,
    radius: 0.69,
    depth: 0.72,
    color: "#fbbf24",
    group: "commerce",
  },
  {
    name: "Slack",
    short: "Slack",
    icon: MessageSquare,
    angle: 178,
    radius: 0.42,
    depth: 1,
    color: "#c084fc",
    group: "teams",
  },
  {
    name: "Teams",
    short: "Teams",
    icon: RadioTower,
    angle: 0,
    radius: 0.44,
    depth: 1,
    color: "#a5b4fc",
    group: "teams",
  },
  {
    name: "Linear",
    short: "Linear",
    icon: Route,
    angle: 150,
    radius: 0.78,
    depth: 0.66,
    color: "#d8b4fe",
    group: "data",
  },
  {
    name: "Supabase",
    short: "Data",
    icon: Database,
    angle: 90,
    radius: 0.74,
    depth: 0.72,
    color: "#6ee7b7",
    group: "data",
  },
  {
    name: "Vercel",
    short: "Deploy",
    icon: Zap,
    angle: 31,
    radius: 0.82,
    depth: 0.65,
    color: "#f8fafc",
    group: "data",
  },
  {
    name: "Dashboards",
    short: "Dash",
    icon: ChartNoAxesCombined,
    angle: 96,
    radius: 0.44,
    depth: 1,
    color: "#22d3ee",
    group: "data",
  },
];

const stories: Story[] = [
  {
    kicker: "01 / Signal",
    title: "Your operation becomes visible.",
    copy: "Finance, sales, service, data, and team activity move into one live operating field.",
  },
  {
    kicker: "02 / Orbit",
    title: "Every platform keeps its role.",
    copy: "WMS connects the tools you already trust without forcing a rip and replace program.",
  },
  {
    kicker: "03 / Intelligence",
    title: "AI agents move through governed paths.",
    copy: "Agents triage, draft, route, reconcile, and escalate with business context around every action.",
  },
  {
    kicker: "04 / Command",
    title: "Leaders see the system breathing.",
    copy: "Dashboards shift from rearview reports into a working layer for decisions and accountability.",
  },
  {
    kicker: "05 / Modernize",
    title: "The new operating layer is built to scale.",
    copy: "Workflow design, reporting, integrations, and infrastructure become one durable business system.",
  },
];

const services = [
  "AI Automation",
  "Operational Reporting",
  "Systems Integration",
  "Workflow Design",
  "Infrastructure Modernization",
];

const proofPoints = [
  ["42%", "faster exception handling"],
  ["18 hrs", "saved per reporting cycle"],
  ["31%", "higher on-time completion"],
];

const groupVisibility = {
  systems: [0.11, 0.22],
  teams: [0.21, 0.33],
  commerce: [0.32, 0.44],
  data: [0.42, 0.56],
} satisfies Record<Module["group"], [number, number]>;

function polarToPoint(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  const toFixedPoint = (value: number) => Number(value.toFixed(3));

  return {
    x: toFixedPoint(50 + Math.cos(radians) * radius * 45),
    y: toFixedPoint(50 + Math.sin(radians) * radius * 45),
  };
}

function useSceneValue<T>(
  progress: MotionValue<number>,
  values: T[],
): MotionValue<T> {
  return useTransform(progress, [0, 0.22, 0.44, 0.66, 0.84], values);
}

function SceneCopyPanel({
  progress,
  story,
  storyIndex,
}: {
  progress: MotionValue<number>;
  story: Story;
  storyIndex: number;
}) {
  const center = storyIndex === 0 ? 0.04 : storyIndex * 0.2;
  const start = Math.max(0, center - 0.08);
  const end = Math.min(1, storyIndex * 0.2 + 0.18);
  const opacity = useTransform(
    progress,
    [start, center, end],
    [0, 1, storyIndex === stories.length - 1 ? 1 : 0],
  );
  const y = useTransform(progress, [start, center, end], [26, 0, -18]);

  return (
    <motion.div
      className="absolute left-0 top-0"
      style={{ opacity, y }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-100/75">
        {story.kicker}
      </p>
      <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
        {story.title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
        {story.copy}
      </p>
    </motion.div>
  );
}

function SceneCopy({ progress }: { progress: MotionValue<number> }) {
  const index = useTransform(progress, [0, 0.2, 0.4, 0.6, 0.8], [0, 1, 2, 3, 4]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-30 mx-auto flex h-full max-w-7xl items-start px-5 pt-24 sm:px-8 lg:px-10 lg:pt-28"
    >
      <div className="relative h-48 w-full max-w-xl">
        {stories.map((story, storyIndex) => (
          <SceneCopyPanel
            key={story.title}
            progress={progress}
            story={story}
            storyIndex={storyIndex}
          />
        ))}
        <motion.div
          className="absolute -bottom-10 left-0 h-px w-64 bg-gradient-to-r from-cyan-200 via-teal-200 to-transparent"
          style={{
            scaleX: useTransform(index, [0, 4], [0.35, 1]),
            transformOrigin: "left",
          }}
        />
      </div>
    </div>
  );
}

function Particles({
  disabled,
  progress,
}: {
  disabled: boolean;
  progress: MotionValue<number>;
}) {
  const drift = useTransform(progress, [0, 1], [-80, 120]);

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden opacity-80"
      style={{ y: drift }}
      aria-hidden="true"
    >
      {Array.from({ length: disabled ? 12 : 22 }).map((_, index) => {
        const left = (index * 37) % 100;
        const top = (index * 53) % 100;
        const size = 2 + (index % 4);
        return (
          <motion.span
            key={left + top + index}
            className="absolute rounded-full bg-cyan-100/60 shadow-[0_0_18px_rgba(103,232,249,0.85)] will-change-transform"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              height: size,
              width: size,
            }}
            animate={
              disabled
                ? undefined
                : {
                    opacity: [0.1, 0.85, 0.2],
                    scale: [0.7, 1.3, 0.8],
                  }
            }
            transition={{
              duration: 4 + (index % 7) * 0.45,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.11,
            }}
          />
        );
      })}
    </motion.div>
  );
}

function ConnectionField({
  progress,
  disabled,
}: {
  progress: MotionValue<number>;
  disabled: boolean;
}) {
  const pathOpacity = useTransform(progress, [0.12, 0.32, 0.66], [0, 0.55, 0.9]);
  const pathLength = useTransform(progress, [0.08, 0.48], [0.05, 1]);
  const pulseOffset = useTransform(progress, [0.22, 0.92], [340, 0]);

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 z-10 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient id="wmsNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(103,232,249,0.8)" />
          <stop offset="100%" stopColor="rgba(103,232,249,0)" />
        </radialGradient>
        <linearGradient id="wmsLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(103,232,249,0.1)" />
          <stop offset="40%" stopColor="rgba(45,212,191,0.85)" />
          <stop offset="100%" stopColor="rgba(196,181,253,0.28)" />
        </linearGradient>
        <filter id="wmsGlow">
          <feGaussianBlur stdDeviation="0.7" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="50" cy="50" fill="url(#wmsNodeGlow)" opacity="0.24" r="13" />

      {modules.map((module) => {
        const point = polarToPoint(module.angle, module.radius);
        const controlX = 50 + (point.x - 50) * 0.45;
        const controlY = 50 + (point.y - 50) * 0.18;
        return (
          <g key={module.name}>
            <motion.path
              d={`M 50 50 Q ${controlX} ${controlY} ${point.x} ${point.y}`}
              fill="none"
              filter="url(#wmsGlow)"
              pathLength="1"
              stroke="url(#wmsLineGradient)"
              strokeLinecap="round"
              strokeWidth="0.18"
              style={{ opacity: pathOpacity, pathLength }}
            />
            {!disabled && (
              <motion.path
                d={`M 50 50 Q ${controlX} ${controlY} ${point.x} ${point.y}`}
                fill="none"
                pathLength="1"
                stroke={module.color}
                strokeDasharray="8 332"
                strokeLinecap="round"
                strokeWidth="0.32"
                style={{
                  opacity: pathOpacity,
                  strokeDashoffset: pulseOffset,
                }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function OrbitModule({
  module,
  index,
  progress,
  disabled,
}: {
  module: Module;
  index: number;
  progress: MotionValue<number>;
  disabled: boolean;
}) {
  const point = polarToPoint(module.angle, module.radius);
  const visibility = groupVisibility[module.group];
  const opacity = useTransform(progress, [visibility[0], visibility[1]], [0, 1]);
  const scale = useTransform(progress, [visibility[0], visibility[1], 0.78], [0.5, 1, 1.08]);
  const x = useTransform(
    progress,
    [0, 0.72, 1],
    [0, (point.x - 50) * 8, (point.x - 50) * 11.5],
  );
  const y = useTransform(
    progress,
    [0, 0.72, 1],
    [0, (point.y - 50) * 5.6, (point.y - 50) * 7.4],
  );
  const Icon = module.icon;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20 will-change-transform"
      data-module={module.name}
      style={{
        x,
        y,
        opacity,
        scale,
        translate: "-50% -50%",
      }}
    >
      <motion.div
        className="flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-medium backdrop-blur-xl sm:px-4 sm:py-3 sm:text-sm"
        style={{
          borderColor: `${module.color}66`,
          background: `linear-gradient(135deg, ${module.color}20, rgba(2,6,23,0.72))`,
          boxShadow: `0 0 ${18 + module.depth * 10}px ${module.color}22`,
        }}
        animate={
          disabled
            ? undefined
            : {
                rotate: [0, index % 2 === 0 ? 1.4 : -1.4, 0],
                y: [0, -6 * module.depth, 0],
              }
        }
        transition={{
          duration: 5.5 + index * 0.18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.07,
        }}
      >
        <Icon className="h-4 w-4 shrink-0" style={{ color: module.color }} />
        <span className="hidden text-white/95 sm:block">{module.name}</span>
        <span className="text-white/95 sm:hidden">{module.short}</span>
      </motion.div>
    </motion.div>
  );
}

function CentralCore({
  progress,
  disabled,
}: {
  progress: MotionValue<number>;
  disabled: boolean;
}) {
  const coreScale = useTransform(progress, [0, 0.22, 0.55, 0.88], [0.8, 1, 1.16, 0.92]);
  const coreY = useTransform(progress, [0, 0.4, 0.78], [74, 0, -10]);
  const coreRotate = useTransform(progress, [0, 1], [-18, 18]);
  const glowOpacity = useTransform(progress, [0, 0.4, 0.8], [0.18, 0.52, 0.72]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20 grid h-56 w-56 place-items-center rounded-full will-change-transform sm:h-72 sm:w-72 lg:h-80 lg:w-80"
      style={{
        scale: coreScale,
        y: coreY,
        rotate: coreRotate,
        translate: "-50% -50%",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-300 blur-3xl"
        style={{ opacity: glowOpacity }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-cyan-100/30"
        animate={disabled ? undefined : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-10 rounded-full border border-teal-100/20"
        animate={disabled ? undefined : { rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative grid h-36 w-36 place-items-center rounded-[2rem] border border-cyan-100/35 bg-slate-950/80 shadow-2xl shadow-cyan-400/30 backdrop-blur-xl sm:h-44 sm:w-44">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.32),transparent_58%)]" />
        <BrainCircuit className="relative h-10 w-10 text-cyan-100 sm:h-12 sm:w-12" />
        <div className="relative text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-100/70">
            WMS
          </p>
          <p className="mt-2 text-sm font-semibold text-white sm:text-base">
            Operations Core
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function EcosystemStage({ progress }: { progress: MotionValue<number> }) {
  const reducedMotion = useReducedMotion();
  const worldScale = useTransform(progress, [0, 0.35, 0.72, 1], [0.72, 0.96, 1.08, 1.22]);
  const worldY = useTransform(progress, [0, 0.45, 1], [100, 0, -72]);
  const worldX = useTransform(progress, [0, 0.5, 1], ["0vw", "2vw", "4vw"]);
  const backgroundX = useTransform(progress, [0, 1], ["-8%", "8%"]);
  const layerOne = useTransform(progress, [0, 1], [-50, 70]);
  const layerTwo = useTransform(progress, [0, 1], [90, -100]);
  const vignetteOpacity = useTransform(progress, [0, 0.5, 1], [0.45, 0.1, 0.5]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[18%] bg-[radial-gradient(circle_at_24%_22%,rgba(45,212,191,0.2),transparent_28%),radial-gradient(circle_at_72%_30%,rgba(129,140,248,0.22),transparent_25%),radial-gradient(circle_at_50%_76%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(180deg,#030712_0%,#06111d_52%,#020617_100%)]"
        style={{ x: backgroundX }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25"
        style={{ y: layerOne }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] rounded-full border border-cyan-100/10"
        style={{ y: layerTwo, translate: "-50% -50%" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[94vmin] w-[94vmin] rounded-full border border-violet-100/10"
        style={{ y: layerOne, translate: "-50% -50%" }}
      />
      <Particles disabled={Boolean(reducedMotion)} progress={progress} />
      <motion.div
        className="absolute inset-0 z-10 will-change-transform lg:ml-[22vw]"
        style={{ scale: worldScale, x: worldX, y: worldY }}
      >
        <ConnectionField progress={progress} disabled={Boolean(reducedMotion)} />
        <CentralCore progress={progress} disabled={Boolean(reducedMotion)} />
        {modules.map((module, index) => (
          <OrbitModule
            key={module.name}
            disabled={Boolean(reducedMotion)}
            index={index}
            module={module}
            progress={progress}
          />
        ))}
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_50%_50%,transparent_34%,rgba(2,6,23,0.78)_100%)]"
        style={{ opacity: vignetteOpacity }}
      />
    </div>
  );
}

function ProgressDot({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const center = index === 0 ? 0.04 : index * 0.2;
  const start = Math.max(0, center - 0.06);
  const end = Math.min(1, center + 0.12);
  const opacity = useTransform(
    progress,
    [start, center, end],
    [0.35, 1, 0.35],
  );
  const scale = useTransform(
    progress,
    [start, center, end],
    [1, 1.8, 1],
  );

  return (
    <motion.div
      className="h-2 w-2 rounded-full bg-white/25"
      style={{ opacity, scale }}
    />
  );
}

function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="pointer-events-none absolute right-5 top-1/2 z-40 hidden h-56 -translate-y-1/2 items-center gap-4 md:flex">
      <div className="h-full w-px overflow-hidden rounded-full bg-white/15">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-cyan-200 via-teal-200 to-violet-200"
          style={{ scaleY }}
        />
      </div>
      <div className="grid gap-4">
        {stories.map((story, index) => (
          <ProgressDot key={story.kicker} index={index} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function OpeningHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.2),transparent_30%),radial-gradient(circle_at_78%_62%,rgba(99,102,241,0.18),transparent_32%),linear-gradient(180deg,#05070d_0%,#07111f_76%,#030712_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-30"
      />
      <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a
          aria-label="Workplace Management Solutions home"
          className="flex items-center gap-3"
          href="#top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-100/30 bg-white/10 shadow-lg shadow-cyan-400/15 backdrop-blur">
            <Sparkles className="h-5 w-5 text-cyan-100" />
          </span>
          <span className="text-sm font-semibold text-white">WMS</span>
        </a>
        <a
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-100/50 hover:bg-cyan-100/10"
          href="#contact"
        >
          Book a Call
        </a>
      </header>
      <motion.div
        className="relative z-10 mx-auto min-w-0 w-full max-w-7xl pt-20"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="min-w-0 max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-cyan-100/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            AI operations ecosystem
          </p>
          <h1 className="mt-8 max-w-full text-3xl font-semibold leading-tight text-white sm:text-7xl sm:leading-[0.92] lg:text-8xl">
            Your business systems, moving as one intelligent field.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">
            Workplace Management Solutions modernizes operations with AI agents,
            automation, reporting, integrations, workflow design, and enterprise
            infrastructure experience.
          </p>
        </div>
      </motion.div>
      <motion.a
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-400"
        href="#ecosystem"
        animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <span className="h-12 w-px bg-gradient-to-b from-cyan-100 to-transparent" />
      </motion.a>
    </section>
  );
}

function EcosystemNarrative() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const phaseLabel = useSceneValue(scrollYProgress, [
    "Signal",
    "Orbit",
    "Intelligence",
    "Command",
    "Scale",
  ]);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      aria-label="AI operations ecosystem narrative"
      className="relative hidden h-[650vh] md:block"
    >
      <div className="sr-only">
        <h2>AI operations ecosystem narrative</h2>
        {stories.map((story) => (
          <article key={story.kicker}>
            <h3>{story.title}</h3>
            <p>{story.copy}</p>
          </article>
        ))}
      </div>
      <div className="sticky top-0 h-screen overflow-hidden">
        <EcosystemStage progress={scrollYProgress} />
        <SceneCopy progress={scrollYProgress} />
        <ProgressRail progress={scrollYProgress} />
        <div className="absolute bottom-6 left-5 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 text-xs text-slate-300 backdrop-blur sm:left-8 lg:left-10">
          <Network className="h-4 w-4 text-cyan-100" />
          <motion.span>{phaseLabel}</motion.span>
        </div>
      </div>
    </section>
  );
}

function MobileNarrative() {
  return (
    <section
      aria-labelledby="mobile-ecosystem-title"
      className="relative overflow-hidden px-5 py-20 md:hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_80%_52%,rgba(129,140,248,0.14),transparent_32%),linear-gradient(180deg,#030712_0%,#07111f_54%,#030712_100%)]"
      />
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/75">
          AI operations ecosystem
        </p>
        <h2
          id="mobile-ecosystem-title"
          className="mt-5 text-3xl font-semibold leading-tight text-white"
        >
          A connected operating layer built around the tools your team already
          trusts.
        </h2>
        <div className="mt-10 grid gap-4">
          {stories.map((story) => (
            <article
              key={story.kicker}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-100/70">
                {story.kicker}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-white">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {story.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingScene() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(45,212,191,0.24),transparent_30%),radial-gradient(circle_at_72%_70%,rgba(168,85,247,0.16),transparent_34%),linear-gradient(180deg,#030712_0%,#07111f_54%,#05070d_100%)]"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-100/75">
            Build the operating layer
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            Turn workflow friction into a connected system of action.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Start with a discovery call. WMS will map your highest leverage
            automation, reporting, integration, and infrastructure opportunities.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:bg-white"
              href="mailto:hello@workplacemanagementsolutions.com?subject=Discovery%20Call%20Request"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center break-all rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-100/50 hover:bg-white/10 sm:h-12 sm:break-normal sm:py-0"
              href="mailto:hello@workplacemanagementsolutions.com"
            >
              hello@workplacemanagementsolutions.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-5"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-100/75">
              Engagement modules
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {proofPoints.map(([metric, label]) => (
              <div
                key={metric}
                className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-3xl font-semibold text-cyan-100">
                  {metric}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EcosystemExperience() {
  return (
    <main id="top" className="bg-[#05070d] text-white">
      <OpeningHero />
      <EcosystemNarrative />
      <MobileNarrative />
      <ClosingScene />
    </main>
  );
}
