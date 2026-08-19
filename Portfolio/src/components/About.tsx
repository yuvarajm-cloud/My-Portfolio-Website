export function About() {
  const stats = [
    { k: "Cloud Focus", v: "AWS · Azure" },
    { k: "Orchestration", v: "Kubernetes" },
    { k: "Pipelines", v: "GitHub Actions" },
    { k: "Mindset", v: "Production-first" },
  ];

  return (
    <section id="about" className="section-gap relative">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="02" title="About" />
        <div className="mt-6 grid gap-6 md:grid-cols-5 md:gap-8">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>
              I'm a Computer Science graduate focused on{" "}
              <span className="text-foreground">Cloud</span> and{" "}
              <span className="text-foreground">DevOps engineering</span>. My day-to-day
              is split between AWS consoles, Linux terminals, and YAML files —
              shipping containerized workloads to Kubernetes and keeping the
              pipelines green.
            </p>
            <p>
              I care about the boring stuff that makes production reliable:
              monitoring, least-privilege IAM, immutable infrastructure, and
              clean rollback paths. I write things down so the next engineer
              (often future-me) can pick up where I left off.
            </p>
            <p className="font-mono text-sm text-foreground/70">
              <span className="text-primary">$</span> currently learning →
              Terraform, Prometheus, AWS Solutions Architect Associate
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="glass rounded-xl p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                whoami
              </div>
              <dl className="mt-4 divide-y divide-border">
                {stats.map((s) => (
                  <div key={s.k} className="flex items-center justify-between py-3">
                    <dt className="text-sm text-muted-foreground">{s.k}</dt>
                    <dd className="font-mono text-sm text-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  index, title, id,
}: { index: string; title: string; id?: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span aria-hidden="true" className="font-mono text-sm text-primary">{index}</span>
      <h2 id={id} className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      <span aria-hidden="true" className="hidden h-px flex-1 bg-border md:block" />
    </div>
  );
}
