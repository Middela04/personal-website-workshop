"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let t = 0;

    const blobs = Array.from({ length: 7 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.16 + Math.random() * 0.22,
      vx: (Math.random() * 0.6 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() * 0.6 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
      phase: Math.random() * Math.PI * 2,
      hue: (i * 50 + Math.random() * 40) % 360,
    }));

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;

      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "rgba(0,0,0,1)");
      bg.addColorStop(1, "rgba(8,8,18,1)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      t += 0.008;

      ctx.globalCompositeOperation = "screen";
      for (const b of blobs) {
        b.x = (b.x + b.vx * 0.002 + 0.002 * Math.sin(t + b.phase)) % 1;
        b.y = (b.y + b.vy * 0.002 + 0.002 * Math.cos(t + b.phase)) % 1;

        const cx = b.x * w;
        const cy = b.y * h;
        const r =
          b.r * Math.min(w, h) * (0.9 + 0.12 * Math.sin(t + b.phase));

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `hsla(${b.hue}, 90%, 65%, 0.42)`);
        g.addColorStop(1, `hsla(${(b.hue + 40) % 360}, 90%, 55%, 0.0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      const vignette = ctx.createRadialGradient(
        w / 2,
        h / 2,
        Math.min(w, h) * 0.1,
        w / 2,
        h / 2,
        Math.min(w, h) * 0.78
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.68)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      rafId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] bg-black/25 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="font-galaxy text-xs tracking-[0.35em] text-white/70 sm:text-sm">
          WELCOME ABOARD
        </p>

        <h1 className="galaxy-title font-galaxy mt-3 text-4xl font-semibold tracking-widest text-white sm:text-6xl">
          Nethra Middela
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          I focus on building thoughtful AI + data projects — blending research, ethics, and human-centered design.
        </p>

        {/* “Role chips” */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Chip>AI / Data</Chip>
          <Chip>Research</Chip>
          <Chip>Product-minded</Chip>
          <Chip>Mental Health</Chip>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/projects"
            className="rounded-2xl bg-white/12 px-6 py-3 font-medium text-white transition hover:bg-white/18 active:scale-[0.99]"
          >
            View Projects ✦
          </a>
          <a
            href="/contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10 active:scale-[0.99]"
          >
            Contact ☄︎
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 text-white/50 text-sm">
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}
