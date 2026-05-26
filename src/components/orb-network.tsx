"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  label: string;
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
  { label: "Signal", angle: -90, radius: 36, size: 10, color: "#67e8f9" },
  { label: "Data", angle: -36, radius: 45, size: 8, color: "#5eead4" },
  { label: "Agents", angle: 18, radius: 34, size: 12, color: "#a5b4fc" },
  { label: "Workflow", angle: 74, radius: 46, size: 9, color: "#86efac" },
  { label: "Systems", angle: 142, radius: 39, size: 11, color: "#c4b5fd" },
  { label: "Command", angle: 204, radius: 48, size: 8, color: "#7dd3fc" },
  { label: "Revenue", angle: 260, radius: 33, size: 9, color: "#fbbf24" },
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
  const rawId = useId().replace(/:/g, "");
  const glowId = `orb-network-glow-${rawId}`;
  const lineId = `orb-network-line-${rawId}`;

  return (
    <div
      className={`relative aspect-square w-full max-w-[620px] overflow-hidden rounded-full ${className}`}
    >
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
            <stop offset="100%" stopColor="rgba(196,181,253,0.24)" />
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
              animate={{ pathLength: 1, opacity: 0.78 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              stroke={`url(#${lineId})`}
              strokeLinecap="round"
              strokeWidth="0.18"
            />
          );
        })}
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/2 grid h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] border border-cyan-100/35 bg-slate-950/80 text-center shadow-[0_0_72px_rgba(34,211,238,0.34)] backdrop-blur-xl"
        animate={reducedMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="px-3 text-[10px] font-semibold uppercase leading-4 tracking-[0.22em] text-cyan-100 sm:text-xs">
          {label}
        </span>
      </motion.div>
      {orbs.map((orb, index) => {
        const point = polarPoint(orb.angle, orb.radius);

        return (
          <motion.div
            key={orb.label}
            className="absolute grid place-items-center rounded-full border border-white/20 bg-slate-950/75 backdrop-blur-md"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${orb.size * 0.34 + 1.8}rem`,
              height: `${orb.size * 0.34 + 1.8}rem`,
              translate: "-50% -50%",
              boxShadow: `0 0 ${22 + orb.size * 2}px ${orb.color}55`,
            }}
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, index % 2 === 0 ? 8 : -8, 0],
                    y: [0, index % 3 === 0 ? -10 : 10, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 4.6 + index * 0.28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.08,
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
              style={{
                backgroundColor: orb.color,
                boxShadow: `0 0 22px ${orb.color}`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default OrbNetwork;
