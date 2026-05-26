"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

type ParticleFieldProps = {
  className?: string;
  density?: "low" | "medium" | "high";
  tone?: "cyan" | "teal" | "violet" | "mixed";
};

const densityMap = {
  low: 24,
  medium: 42,
  high: 68,
} satisfies Record<NonNullable<ParticleFieldProps["density"]>, number>;

const toneStyles = {
  cyan: {
    primary: "rgba(103,232,249,0.82)",
    secondary: "rgba(14,165,233,0.34)",
  },
  teal: {
    primary: "rgba(94,234,212,0.82)",
    secondary: "rgba(20,184,166,0.34)",
  },
  violet: {
    primary: "rgba(196,181,253,0.82)",
    secondary: "rgba(124,58,237,0.34)",
  },
  mixed: {
    primary: "rgba(165,243,252,0.84)",
    secondary: "rgba(167,139,250,0.34)",
  },
} satisfies Record<NonNullable<ParticleFieldProps["tone"]>, { primary: string; secondary: string }>;

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const x = (index * 37 + index * index * 11) % 100;
    const y = (index * 53 + index * index * 7) % 100;

    return {
      id: index,
      x,
      y,
      size: 1.5 + (index % 5) * 0.72,
      delay: (index % 13) * 0.18,
      duration: 4.8 + (index % 9) * 0.52,
      opacity: 0.28 + (index % 6) * 0.08,
    };
  });
}

export function ParticleField({
  className = "",
  density = "medium",
  tone = "mixed",
}: ParticleFieldProps) {
  const reducedMotion = useReducedMotion();
  const particleCount = densityMap[density];
  const particles = useMemo(() => makeParticles(particleCount), [particleCount]);
  const colors = toneStyles[tone];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 20% 18%, ${colors.secondary}, transparent 28%), radial-gradient(circle at 76% 66%, rgba(45,212,191,0.18), transparent 30%)`,
        }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: colors.primary,
            boxShadow: `0 0 ${10 + particle.size * 4}px ${colors.primary}`,
            opacity: particle.opacity,
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: [particle.opacity * 0.35, particle.opacity, particle.opacity * 0.5],
                  scale: [0.78, 1.38, 0.92],
                  x: [0, particle.id % 2 === 0 ? 16 : -14, 0],
                  y: [0, particle.id % 3 === 0 ? -22 : 18, 0],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleField;
