import { SectionLabel } from "./About";

const posts = [
  {
    date: "2025-04-12",
    title: "Debugging ContainerCreating on a self-hosted K8s cluster",
    tag: "Kubernetes",
    read: "6 min",
  },
  {
    date: "2025-03-02",
    title: "Zero-downtime deploys with GitHub Actions + DockerHub",
    tag: "CI/CD",
    read: "8 min",
  },
  {
    date: "2025-02-10",
    title: "IAM least privilege — a checklist I actually use",
    tag: "AWS · Security",
    read: "5 min",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="06" title="Learning Notes" />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <li key={p.title}>
              <a
                href="#"
                className="group flex items-center gap-6 py-5 transition hover:bg-surface/40"
              >
                <time className="hidden w-28 shrink-0 font-mono text-xs text-muted-foreground md:block">
                  {p.date}
                </time>
                <span className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-primary">
                  {p.tag}
                </span>
                <h3 className="flex-1 text-base font-medium transition group-hover:text-primary">
                  {p.title}
                </h3>
                <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                  {p.read}
                </span>
                <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
