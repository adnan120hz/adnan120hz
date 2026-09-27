"use client";

import { motion, useReducedMotion } from "framer-motion";

type Blob = {
  className: string;
  background: string;
  animate: { x: number[]; y: number[]; scale: number[] };
  duration: number;
  size: string;
};

const BLOBS: Blob[] = [
  {
    className: "left-[-10%] top-[-10%]",
    size: "38rem",
    background:
      "radial-gradient(circle at center, rgba(14,165,233,0.55) 0%, rgba(14,165,233,0) 70%)",
    animate: { x: [0, 120, -60, 0], y: [0, 80, -40, 0], scale: [1, 1.25, 0.9, 1] },
    duration: 34,
  },
  {
    className: "right-[-12%] top-[20%]",
    size: "42rem",
    background:
      "radial-gradient(circle at center, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 70%)",
    animate: { x: [0, -140, 60, 0], y: [0, -60, 90, 0], scale: [1, 0.85, 1.2, 1] },
    duration: 42,
  },
  {
    className: "left-[20%] bottom-[-18%]",
    size: "36rem",
    background:
      "radial-gradient(circle at center, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0) 70%)",
    animate: { x: [0, 90, -110, 0], y: [0, -90, 40, 0], scale: [1, 1.15, 0.95, 1] },
    duration: 38,
  },
  {
    className: "right-[25%] bottom-[8%]",
    size: "30rem",
    background:
      "radial-gradient(circle at center, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 70%)",
    animate: { x: [0, -80, 100, 0], y: [0, 70, -70, 0], scale: [1, 1.3, 0.9, 1] },
    duration: 46,
  },
];

export default function AuroraBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl mix-blend-screen opacity-50 ${blob.className}`}
          style={{ width: blob.size, height: blob.size, background: blob.background }}
          animate={reduceMotion ? undefined : blob.animate}
          transition={
            reduceMotion
              ? undefined
              : { duration: blob.duration, repeat: Infinity, ease: "easeInOut" }
          }
        />
      ))}
    </div>
  );
}
