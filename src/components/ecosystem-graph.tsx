"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Cloud,
  Database,
  FileSpreadsheet,
  MessageSquare,
  Network,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

type EcosystemNode = {
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  angle: number;
  radius: number;
  color: string;
};

type EcosystemGraphProps = {
  className?: string;
  title?: string;
  nodes?: EcosystemNode[];
};

const defaultNodes: EcosystemNode[] = [
  { label: "AI Agents", shortLabel: "AI", icon: Bot, angle: -90, radius: 0.4, color: "#67e8f9" },
  { label: "CRM", shortLabel: "CRM", icon: Building2, angle: -145, radius: 0.58, color: "#5eead4" },
  { label: "Sales Cloud", shortLabel: "Sales", icon: Cloud, angle: -36, radius: 0.6, color: "#7dd3fc" },
  { label: "Dashboards", shortLabel: "Dash", icon: ChartNoAxesCombined, angle: 18, radius: 0.72, color: "#a5b4fc" },
  { label: "Commerce", shortLabel: "Shop", icon: ShoppingBag, angle: 72, radius: 0.56, color: "#fbbf24" },
  { label: "Data Layer", shortLabel: "Data", icon: Database, angle: 126, radius: 0.7, color: "#6ee7b7" },
  { label: "Spreadsheets", shortLabel: "Sheets", icon: FileSpreadsheet, angle: 168, radius: 0.48, color: "#bef264" },
  { label: "Team Comms", shortLabel: "Comms", icon: MessageSquare, angle: 218, radius: 0.62, color: "#c4b5fd" },
];

function nodePoint(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: Number((50 + Math.cos(radians) * radius * 45).toFixed(2)),
    y: Number((50 + Math.sin(radians) * radius * 45).toFixed(2)),
  };
}

export function EcosystemGraph({
  className = "",
  title = "Operations Core",
  nodes = defaultNodes,
}: EcosystemGraphProps) {
  const reducedMotion = useReducedMotion();
  const rawId = useId().replace(/:/g, "");
  const glowId = `ecosystem-graph-glow-${rawId}`;
  const lineId = `ecosystem-graph-line-${rawId}`;

  return (
    <div
      className={`relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:min-h-[560px] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(167,139,250,0.14),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[78vmin] max-h-[560px] w-[78vmin] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="0.65" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={lineId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(103,232,249,0.08)" />
            <stop offset="44%" stopColor="rgba(45,212,191,0.74)" />
            <stop offset="100%" stopColor="rgba(196,181,253,0.28)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" fill="rgba(103,232,249,0.08)" r="14" />
        {nodes.map((node, index) => {
          const point = nodePoint(node.angle, node.radius);
          const controlX = Number((50 + (point.x - 50) * 0.38).toFixed(2));
          const controlY = Number((50 + (point.y - 50) * 0.16).toFixed(2));

          return (
            <g key={node.label}>
              <motion.path
                d={`M 50 50 Q ${controlX} ${controlY} ${point.x} ${point.y}`}
                fill="none"
                filter={`url(#${glowId})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.78 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
                stroke={`url(#${lineId})`}
                strokeLinecap="round"
                strokeWidth="0.18"
              />
              <motion.path
                d={`M 50 50 Q ${controlX} ${controlY} ${point.x} ${point.y}`}
                fill="none"
                initial={{ strokeDashoffset: 180 }}
                animate={reducedMotion ? undefined : { strokeDashoffset: 0 }}
                transition={{ duration: 5.8 + index * 0.25, repeat: Infinity, ease: "linear" }}
                stroke={node.color}
                strokeDasharray="5 175"
                strokeLinecap="round"
                strokeWidth="0.34"
              />
            </g>
          );
        })}
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.75rem] border border-cyan-100/35 bg-slate-950/85 text-center shadow-[0_0_84px_rgba(34,211,238,0.36)] backdrop-blur-xl sm:h-44 sm:w-44"
        animate={reducedMotion ? undefined : { scale: [1, 1.04, 1], rotate: [0, 1.4, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit className="h-8 w-8 text-cyan-100 sm:h-10 sm:w-10" />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/70">
            AI Layer
          </p>
          <p className="mt-2 px-3 text-sm font-semibold leading-5 text-white sm:text-base">
            {title}
          </p>
        </div>
      </motion.div>
      {nodes.map((node, index) => {
        const point = nodePoint(node.angle, node.radius);
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className="absolute z-20 flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-medium text-white backdrop-blur-xl sm:px-4 sm:py-3 sm:text-sm"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              translate: "-50% -50%",
              borderColor: `${node.color}66`,
              background: `linear-gradient(135deg, ${node.color}24, rgba(2,6,23,0.76))`,
              boxShadow: `0 0 34px ${node.color}28`,
            }}
            initial={{ opacity: 0, scale: 0.72 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, index % 2 === 0 ? -7 : 7, 0],
                    rotate: [0, index % 2 === 0 ? 1.2 : -1.2, 0],
                  }
            }
            transition={{
              duration: 4.8 + index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.08,
            }}
          >
            <Icon className="h-4 w-4 shrink-0" style={{ color: node.color }} />
            <span className="hidden sm:inline">{node.label}</span>
            <span className="sm:hidden">{node.shortLabel}</span>
          </motion.div>
        );
      })}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_46%,rgba(2,6,23,0.72)_100%)]" />
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300 backdrop-blur-xl sm:bottom-6 sm:left-6">
        <Network className="h-4 w-4 text-cyan-100" />
        <span>Live system topology</span>
      </div>
    </div>
  );
}

export default EcosystemGraph;
