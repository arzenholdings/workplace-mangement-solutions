"use client";

import { useEffect, useRef } from "react";

type InteractiveDotGridProps = {
  className?: string;
};

const GRID_SPACING = 28;
const BASE_RADIUS = 0.72;
const GLOW_RADIUS = 170;
const MAX_DEVICE_PIXEL_RATIO = 2;

type PointerState = {
  x: number;
  y: number;
  opacity: number;
  targetOpacity: number;
};

function prefersStaticGrid() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function InteractiveDotGrid({ className = "" }: InteractiveDotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let frameId = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let isStatic = prefersStaticGrid();
    const pointer: PointerState = {
      x: -GLOW_RADIUS,
      y: -GLOW_RADIUS,
      opacity: 0,
      targetOpacity: 0,
    };

    const drawBaseGrid = () => {
      context.save();
      context.fillStyle = "rgba(115, 228, 250, 0.105)";
      context.beginPath();

      for (let x = GRID_SPACING / 2; x < width; x += GRID_SPACING) {
        for (let y = GRID_SPACING / 2; y < height; y += GRID_SPACING) {
          context.moveTo(x + BASE_RADIUS, y);
          context.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
        }
      }

      context.fill();
      context.restore();
    };

    const drawInteractiveDots = () => {
      if (isStatic || pointer.opacity < 0.01) {
        return;
      }

      const minX = Math.max(GRID_SPACING / 2, pointer.x - GLOW_RADIUS);
      const maxX = Math.min(width, pointer.x + GLOW_RADIUS);
      const minY = Math.max(GRID_SPACING / 2, pointer.y - GLOW_RADIUS);
      const maxY = Math.min(height, pointer.y + GLOW_RADIUS);
      const firstX =
        Math.ceil((minX - GRID_SPACING / 2) / GRID_SPACING) * GRID_SPACING +
        GRID_SPACING / 2;
      const firstY =
        Math.ceil((minY - GRID_SPACING / 2) / GRID_SPACING) * GRID_SPACING +
        GRID_SPACING / 2;

      context.save();
      context.globalCompositeOperation = "lighter";

      for (let x = firstX; x <= maxX; x += GRID_SPACING) {
        for (let y = firstY; y <= maxY; y += GRID_SPACING) {
          const distance = Math.hypot(x - pointer.x, y - pointer.y);

          if (distance >= GLOW_RADIUS) {
            continue;
          }

          const proximity = 1 - distance / GLOW_RADIUS;
          const intensity = proximity * proximity * pointer.opacity;
          const radius = BASE_RADIUS + intensity * 2.35;
          const red = Math.round(139 - intensity * 82);
          const green = Math.round(92 + intensity * 136);
          const blue = Math.round(246 + intensity * 4);

          context.shadowBlur = 8 + intensity * 18;
          context.shadowColor = `rgba(${red}, ${green}, ${blue}, ${0.3 + intensity * 0.6})`;
          context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.22 + intensity * 0.78})`;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.restore();
    };

    const render = () => {
      pointer.opacity += (pointer.targetOpacity - pointer.opacity) * 0.14;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      drawBaseGrid();
      drawInteractiveDots();

      if (Math.abs(pointer.targetOpacity - pointer.opacity) > 0.01) {
        frameId = window.requestAnimationFrame(render);
      } else {
        pointer.opacity = pointer.targetOpacity;
        frameId = 0;
      }
    };

    const queueRender = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
      canvas.width = Math.max(1, Math.round(width * devicePixelRatio));
      canvas.height = Math.max(1, Math.round(height * devicePixelRatio));
      queueRender();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isStatic || event.pointerType === "touch") {
        return;
      }

      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const isInside = x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height;

      pointer.x = x;
      pointer.y = y;
      pointer.targetOpacity = isInside ? 1 : 0;
      canvas.dataset.active = isInside ? "true" : "false";
      queueRender();
    };

    const handlePointerLeave = () => {
      pointer.targetOpacity = 0;
      canvas.dataset.active = "false";
      queueRender();
    };

    const handleMotionPreference = () => {
      isStatic = prefersStaticGrid();
      pointer.targetOpacity = 0;
      canvas.dataset.mode = isStatic ? "static" : "interactive";
      queueRender();
    };

    const resizeObserver = new ResizeObserver(resize);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerPreference = window.matchMedia("(pointer: coarse)");

    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    motionPreference.addEventListener("change", handleMotionPreference);
    pointerPreference.addEventListener("change", handleMotionPreference);
    canvas.dataset.mode = isStatic ? "static" : "interactive";
    resize();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      motionPreference.removeEventListener("change", handleMotionPreference);
      pointerPreference.removeEventListener("change", handleMotionPreference);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-active="false"
      data-interactive-dot-grid
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

export default InteractiveDotGrid;
