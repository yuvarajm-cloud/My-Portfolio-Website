import { useEffect, useRef } from "react";

/**
 * Global fixed background layer:
 *  - parallax gradient blobs that drift with the cursor
 *  - radial cursor glow that follows the pointer
 *  - lightweight particle field on canvas
 *  - floating cloud/devops glyphs with gentle parallax
 * Respects `prefers-reduced-motion`.
 */
export function InteractiveBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pointer parallax + glow
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      const w = window.innerWidth, h = window.innerHeight;
      const nx = (cx / w - 0.5) * 2;
      const ny = (cy / h - 0.5) * 2;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      }
      if (!reduced) {
        if (blobARef.current) blobARef.current.style.transform = `translate3d(${nx * -30}px, ${ny * -30}px, 0)`;
        if (blobBRef.current) blobBRef.current.style.transform = `translate3d(${nx * 40}px, ${ny * 40}px, 0)`;
        if (iconsRef.current) iconsRef.current.style.transform = `translate3d(${nx * -12}px, ${ny * -12}px, 0)`;
      }
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // Particle canvas
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let parts: P[] = [];
    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.floor((W * H) / 22000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.5 + 0.2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let pRaf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -5) p.x = W + 5; else if (p.x > W + 5) p.x = -5;
        if (p.y < -5) p.y = H + 5; else if (p.y > H + 5) p.y = -5;
        ctx.beginPath();
        ctx.fillStyle = `oklch(0.85 0.12 220 / ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) pRaf = requestAnimationFrame(draw);
    };
    if (!reduced) pRaf = requestAnimationFrame(draw);
    else draw();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(pRaf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* animated gradient blobs */}
      <div
        ref={blobARef}
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl will-change-transform animate-blob-slow"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 220 / 0.55), transparent 65%)" }}
      />
      <div
        ref={blobBRef}
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl will-change-transform animate-blob-slower"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.15 280 / 0.5), transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl animate-blob-slow"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.16 160 / 0.45), transparent 65%)" }}
      />

      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* floating glyphs */}
      <div ref={iconsRef} className="absolute inset-0 will-change-transform">
        {[
          { c: "☁", t: "12%", l: "8%", d: "0s", s: "text-2xl" },
          { c: "⎈", t: "22%", l: "82%", d: "1.4s", s: "text-3xl" },
          { c: "⌘", t: "68%", l: "12%", d: "0.7s", s: "text-2xl" },
          { c: "λ", t: "78%", l: "72%", d: "2.1s", s: "text-3xl" },
          { c: "▲", t: "44%", l: "92%", d: "1.1s", s: "text-xl" },
          { c: "{ }", t: "85%", l: "45%", d: "1.8s", s: "text-base" },
        ].map((g, i) => (
          <span
            key={i}
            className={`absolute font-mono ${g.s} text-primary/25 animate-float`}
            style={{ top: g.t, left: g.l, animationDelay: g.d }}
          >
            {g.c}
          </span>
        ))}
      </div>

      {/* cursor glow */}
      <div
        ref={glowRef}
        className="absolute h-[600px] w-[600px] rounded-full opacity-40 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 220 / 0.35), transparent 60%)",
        }}
      />
    </div>
  );
}
