"use client";

import { motion, useReducedMotion } from "framer-motion";

type GlowGridBackgroundProps = {
  className?: string;
  intensity?: "subtle" | "normal" | "strong";
};

const intensityStyles = {
  subtle: {
    opacity: 0.42,
    glow: "rgba(103,232,249,0.14)",
    grid: "rgba(255,255,255,0.035)",
  },
  normal: {
    opacity: 0.64,
    glow: "rgba(103,232,249,0.2)",
    grid: "rgba(255,255,255,0.05)",
  },
  strong: {
    opacity: 0.82,
    glow: "rgba(103,232,249,0.28)",
    grid: "rgba(255,255,255,0.068)",
  },
} satisfies Record<NonNullable<GlowGridBackgroundProps["intensity"]>, { opacity: number; glow: string; grid: string }>;

export function GlowGridBackground({
  className = "",
  intensity = "normal",
}: GlowGridBackgroundProps) {
  const reducedMotion = useReducedMotion();
  const styles = intensityStyles[intensity];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#05070d] ${className}`}
    >
      <div
        className="absolute -inset-[12%]"
        style={{
          background: `radial-gradient(circle at 22% 18%, ${styles.glow}, transparent 30%), radial-gradient(circle at 78% 22%, rgba(167,139,250,0.18), transparent 28%), radial-gradient(circle at 52% 76%, rgba(20,184,166,0.16), transparent 34%), linear-gradient(180deg, #05070d 0%, #07111d 52%, #020617 100%)`,
        }}
      />
      <motion.div
        className="absolute -inset-[10%]"
        style={{
          opacity: styles.opacity,
          backgroundImage: `linear-gradient(${styles.grid} 1px, transparent 1px), linear-gradient(90deg, ${styles.grid} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        animate={reducedMotion ? undefined : { x: [-18, 18], y: [18, -18] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[76vmin] w-[76vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10"
        animate={reducedMotion ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[112vmin] w-[112vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/10"
        animate={reducedMotion ? undefined : { rotate: -360, scale: [1.04, 1, 1.04] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_34%,rgba(2,6,23,0.78)_100%)]" />
    </div>
  );
}

export default GlowGridBackground;
