import { TechIcon, TECH } from "./TechIcon";

type FlipCardProps = {
  title: string;
  icons: string[];
  description: string;
  techUsed: string;
};

export function FlipCard({ title, icons, description, techUsed }: FlipCardProps) {
  const toolsLabel = icons.join(" • ");

  return (
    <div
      className="flip-card group h-full min-h-[164px] w-full outline-none sm:min-h-0"
      tabIndex={0}
      role="article"
      aria-label={title}
    >
      <div className="flip-card-inner h-full w-full">
        <div className="flip-card-face flip-card-front glass flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center shadow-[0_12px_40px_-24px_rgba(0,0,0,0.65)] sm:gap-2 sm:p-3">
          <h3 className="text-sm font-semibold leading-snug text-foreground">{title}</h3>
          <p className="text-[10px] leading-snug text-muted-foreground">
            <span className="font-medium text-foreground/80">Tools:</span> {toolsLabel}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Technologies">
            {icons.map((name) =>
              TECH[name] ? (
                <li key={name}>
                  <TechIcon name={name} color={TECH[name].color} size={22} variant="plain" />
                </li>
              ) : null,
            )}
          </ul>
        </div>

        <div className="flip-card-face flip-card-back glass flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-primary/30 bg-white/5 p-2.5 text-center shadow-[0_12px_40px_-24px_rgba(120,81,255,0.35)] sm:gap-2 sm:p-3">
          <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
          <p className="text-[10px] leading-snug text-primary/90">
            <span className="font-mono font-medium uppercase tracking-wide">Tech used:</span>{" "}
            {techUsed}
          </p>
        </div>
      </div>
    </div>
  );
}
