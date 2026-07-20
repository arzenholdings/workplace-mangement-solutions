"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  label: string;
  href?: string;
  angle: number;
  radius: number;
  size: number;
  color: string;
};

type OrbNetworkProps = {
  className?: string;
  label?: string;
  orbs?: Orb[];
};

const defaultOrbs: Orb[] = [
  { label: "GoHighLevel", href: "#gohighlevel", angle: -90, radius: 42, size: 9, color: "#f5d18a" },
  { label: "CRM", href: "#capability-crm", angle: -54, radius: 43, size: 8, color: "#5eead4" },
  { label: "Website", href: "#capability-website", angle: -18, radius: 42, size: 9, color: "#7dd3fc" },
  { label: "Lead Capture", href: "#capability-website", angle: 18, radius: 43, size: 8, color: "#67e8f9" },
  { label: "Follow-Up", href: "#capability-follow-up", angle: 54, radius: 42, size: 9, color: "#a5b4fc" },
  { label: "Reporting", href: "#capability-reporting", angle: 90, radius: 43, size: 8, color: "#86efac" },
  { label: "Automation", href: "#capability-ai", angle: 126, radius: 42, size: 9, color: "#c4b5fd" },
  { label: "AI", href: "#capability-ai", angle: 162, radius: 43, size: 8, color: "#d8b4fe" },
  { label: "Staffing", href: "#capability-staffing", angle: 198, radius: 42, size: 9, color: "#93c5fd" },
  { label: "Operations", href: "#capability-diagnosis", angle: 234, radius: 43, size: 8, color: "#99f6e4" },
];

function polarPoint(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: 50 + Math.cos(radians) * radius,
    y: 50 + Math.sin(radians) * radius,
  };
}

export function OrbNetwork({
  className = "",
  label = "AI Ecosystem Core",
  orbs = defaultOrbs,
}: OrbNetworkProps) {
  const reducedMotion = useReducedMotion();
  const [activeOrb, setActiveOrb] = useState(orbs[0]?.label ?? "");
  const rawId = useId().replace(/:/g, "");
  const glowId = `orb-network-glow-${rawId}`;
  const lineId = `orb-network-line-${rawId}`;

  return (
    <div className={`w-full max-w-[620px] ${className}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-full" aria-label="Interactive WMS operating system">
        <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.18),transparent_58%)]" />
        <motion.div
          className="absolute inset-[12%] rounded-full border border-cyan-100/15"
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[22%] rounded-full border border-teal-100/15"
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id={glowId}>
              <feGaussianBlur stdDeviation="0.7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id={lineId} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(103,232,249,0.08)" />
              <stop offset="45%" stopColor="rgba(94,234,212,0.72)" />
              <stop offset="100%" stopColor="rgba(245,209,138,0.28)" />
            </linearGradient>
          </defs>
          {orbs.map((orb) => {
            const point = polarPoint(orb.angle, orb.radius);
            const controlX = 50 + (point.x - 50) * 0.34;
            const controlY = 50 + (point.y - 50) * 0.18;

            return (
              <motion.path
                key={orb.label}
                d={`M 50 50 Q ${controlX.toFixed(2)} ${controlY.toFixed(2)} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`}
                fill="none"
                filter={`url(#${glowId})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: activeOrb === orb.label ? 1 : 0.58 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                stroke={`url(#${lineId})`}
                strokeLinecap="round"
                strokeWidth={activeOrb === orb.label ? "0.3" : "0.16"}
              />
            );
          })}
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 grid h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] border border-cyan-100/35 bg-slate-950/85 text-center shadow-[0_0_72px_rgba(34,211,238,0.34)] backdrop-blur-xl"
          animate={reducedMotion ? undefined : { scale: [1, 1.035, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="px-3 text-[9px] font-semibold uppercase leading-4 tracking-[0.2em] text-cyan-100 sm:text-xs">
            {label}
          </span>
        </motion.div>
        {orbs.map((orb, index) => {
          const point = polarPoint(orb.angle, orb.radius);
          const isActive = activeOrb === orb.label;

          return (
            <motion.a
              key={orb.label}
              href={orb.href ?? "#operating-system"}
              aria-label={`Explore ${orb.label}`}
              aria-current={isActive ? "location" : undefined}
              title={orb.label}
              onClick={() => setActiveOrb(orb.label)}
              className={`group absolute z-10 grid place-items-center rounded-full border bg-slate-950/85 backdrop-blur-md transition focus-visible:z-30 ${
                isActive ? "border-white/55" : "border-white/20 hover:border-white/50"
              }`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: `${orb.size * 0.26 + 1.45}rem`,
                height: `${orb.size * 0.26 + 1.45}rem`,
                translate: "-50% -50%",
                boxShadow: `0 0 ${isActive ? 40 : 24}px ${orb.color}${isActive ? "88" : "44"}`,
              }}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      x: [0, index % 2 === 0 ? 4 : -4, 0],
                      y: [0, index % 3 === 0 ? -5 : 5, 0],
                      scale: isActive ? 1.08 : 1,
                    }
              }
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                x: {
                  duration: 4.6 + index * 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.06,
                },
                y: {
                  duration: 4.6 + index * 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.06,
                },
                scale: { duration: 0.2 },
              }}
            >
              <span
                className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5"
                style={{
                  backgroundColor: orb.color,
                  boxShadow: `0 0 18px ${orb.color}`,
                }}
              />
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-slate-950/95 px-2.5 py-1 text-[10px] font-medium text-white shadow-xl group-hover:block group-focus-visible:block sm:text-xs">
                {orb.label}
              </span>
            </motion.a>
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden" aria-label="Operating system navigation">
        {orbs.map((orb) => (
          <a
            key={orb.label}
            href={orb.href ?? "#operating-system"}
            onClick={() => setActiveOrb(orb.label)}
            className={`rounded-full border px-3 py-2 text-center text-xs transition ${
              activeOrb === orb.label
                ? "border-cyan-100/60 bg-cyan-100/10 text-cyan-50"
                : "border-white/10 bg-white/[0.03] text-slate-300"
            }`}
          >
            {orb.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default OrbNetwork;
