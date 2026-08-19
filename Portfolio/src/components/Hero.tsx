export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 md:pt-28">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          status: available for cloud / devops roles
        </div>

        <h1 className="text-gradient text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          Yuvaraj M
        </h1>
        <h2 className="mt-3 font-mono text-lg text-primary md:text-xl">
          Cloud &amp; DevOps Engineer
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build scalable cloud infrastructure on{" "}
          <span className="text-foreground">AWS</span>, ship containerized workloads
          with <span className="text-foreground">Docker</span> &amp;{" "}
          <span className="text-foreground">Kubernetes</span>, and automate
          everything with <span className="text-foreground">CI/CD pipelines</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 accent-glow"
          >
            View Projects
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="/YUVARAJ%20M.pdf"
            download="YUVARAJ M.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium transition hover:border-primary/50"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/yuvarajm-cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/yuvarajm-1810m/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            linkedin ↗
          </a>
          <a
            href="mailto:yuvarajm18.tech@gmail.com"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            email ↗
          </a>
        </div>

      </div>
    </section>
  );
}
