import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  max?: number;
}

/**
 * 3D tilt + glow-border hover wrapper.
 * Adds a CSS-variable driven spotlight that follows the cursor.
 * Disables tilt for users who prefer reduced motion.
 */
export function TiltCard({ children, className = "", as = "article", max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedRef = useRef<boolean>(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (reducedRef.current) return;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`tilt-card group relative rounded-xl ${className}`}
    >
      <span className="tilt-spotlight" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
