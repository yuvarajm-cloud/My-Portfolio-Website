import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let topId = active;
        let topRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }
        if (topRatio > 0) setActive(topId);
      },
      {
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => setOpen(false);
  const isActive = (href: string) => href.slice(1) === active;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all ${
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10"
        >
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary">▲</span>
            <span>
              yuvaraj<span className="text-primary">.dev</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const activeLink = isActive(l.href);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={activeLink ? "true" : undefined}
                    className={`relative rounded-md px-3 py-1.5 text-sm transition ${
                      activeLink
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {activeLink && (
                      <span className="pointer-events-none absolute -bottom-0.5 left-3 right-3 h-px bg-primary/70" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="/YUVARAJ%20M.pdf"
              download="YUVARAJ M.pdf"
              className="hidden rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-foreground transition hover:border-primary/50 hover:text-primary md:inline-flex"
            >
              resume.pdf ↓
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              className="relative z-[60] inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 bg-foreground transition-all ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4 bg-foreground transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-0.5 w-4 bg-foreground transition-all ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs border-l border-border bg-background/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center px-5 font-mono text-sm font-semibold">
            <span className="text-muted-foreground">~/menu</span>
          </div>
          <ul className="flex flex-col gap-1 px-4 pb-6">
            {links.map((l) => {
              const activeLink = isActive(l.href);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    aria-current={activeLink ? "true" : undefined}
                    className={`block rounded-md px-3 py-3 text-base transition ${
                      activeLink
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-3">
              <a
                href="/YUVARAJ%20M.pdf"
                download="YUVARAJ M.pdf"
                onClick={close}
                className="block rounded-md border border-border bg-surface px-3 py-3 text-center font-mono text-xs text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                resume.pdf ↓
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
