"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
};

type Streak = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const MAX_STARS = 140;

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let streaks: Streak[] = [];
    let raf = 0;
    let running = true;
    let nextStreakAt = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedStars() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      stars = Array.from({ length: MAX_STARS }, () => ({
        x: random(0, w),
        y: random(0, h),
        r: random(0.4, 1.6),
        phase: random(0, Math.PI * 2),
        speed: random(0.5, 2),
      }));
    }

    function drawStatic() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = 0.35 + 0.35 * Math.abs(Math.sin(s.phase));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx!.fill();
      }
    }

    function tick(now: number) {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = now / 1000;
      ctx!.clearRect(0, 0, w, h);

      for (const s of stars) {
        const alpha = 0.25 + 0.55 * Math.abs(Math.sin(s.phase + t * s.speed));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx!.fill();
      }

      // Occasional diagonal falling streaks.
      if (now >= nextStreakAt && streaks.length < 4) {
        const sx = random(w * 0.2, w);
        const speed = random(280, 560);
        const angle = Math.PI / 4.2;
        streaks.push({
          x: sx,
          y: -20,
          vx: -Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: random(0.8, 1.4),
        });
        nextStreakAt = now + random(1800, 5200);
      }

      const dt = 1 / 60;
      streaks = streaks.filter((st) => {
        st.life += dt;
        st.x += st.vx * dt;
        st.y += st.vy * dt;
        if (st.life >= st.maxLife) return false;
        const fade = 1 - st.life / st.maxLife;
        const tail = 90;
        const grad = ctx!.createLinearGradient(
          st.x,
          st.y,
          st.x - st.vx * (tail / 560),
          st.y - st.vy * (tail / 560)
        );
        grad.addColorStop(0, `rgba(186,230,253,${(0.9 * fade).toFixed(3)})`);
        grad.addColorStop(1, "rgba(186,230,253,0)");
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.6;
        ctx!.beginPath();
        ctx!.moveTo(st.x, st.y);
        ctx!.lineTo(
          st.x - st.vx * (tail / 560),
          st.y - st.vy * (tail / 560)
        );
        ctx!.stroke();
        return true;
      });

      raf = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        running = true;
        nextStreakAt = performance.now() + 1200;
        raf = requestAnimationFrame(tick);
      }
    }

    resize();
    seedStars();

    if (reduceMotion) {
      // Static stars only — no animation loop.
      drawStatic();
    } else {
      nextStreakAt = performance.now() + 1500;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
