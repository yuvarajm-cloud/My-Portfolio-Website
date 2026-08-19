import { SectionLabel } from "./About";
import { TiltCard } from "./TiltCard";
import { TechIcon, TECH } from "./TechIcon";

const projects = [
  {
    title: "CloudMart – End-to-End DevOps Deployment on AWS",
    blurb:
      "Automated cloud infrastructure deployment with AWS, Terraform, Jenkins, Docker, and Kubernetes.",
    stack: [
      "AWS EC2",
      "Terraform",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "GitHub",
      "Route 53",
      "Application Load Balancer",
      "Prometheus",
      "Grafana",
    ],
    metrics: [
      { k: "Availability", v: "99.9%" },
      { k: "Tools", v: "Terraform + Jenkins" },
      { k: "Monitoring", v: "Prometheus" },
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "AWS Static Website Hosting using S3 & Route 53",
    blurb:
      "Static site hosting on Amazon S3 with DNS configuration via Route 53.",
    stack: ["AWS S3", "Route 53", "DNS", "IAM"],
    metrics: [
      { k: "Performance", v: "Fast delivery" },
      { k: "DNS", v: "Route 53" },
      { k: "Security", v: "Bucket policies" },
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Azure VM Web Server Deployment",
    blurb:
      "Provisioned Ubuntu VM infrastructure in Azure and deployed web services on Linux.",
    stack: ["Azure", "Linux", "Apache", "IAM"],
    metrics: [
      { k: "Cloud", v: "Microsoft Azure" },
      { k: "OS", v: "Ubuntu" },
      { k: "Security", v: "IAM config" },
    ],
    repo: "#",
    live: "#",
  },
  {
    title: "Kubernetes Website Deployment on AWS EC2",
    blurb:
      "Built a self-practice CI/CD workflow with Jenkins and GitHub for AWS EC2 deployments.",
    stack: ["AWS EC2", "Jenkins", "GitHub", "Linux", "Docker", "Kubernetes"],
    metrics: [
      { k: "Pipeline", v: "Jenkins" },
      { k: "Source", v: "GitHub" },
      { k: "Deployment", v: "AWS EC2" },
    ],
    repo: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="04" title="Featured Projects" id="projects-title" />
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Real deployments — each one ships with a Dockerfile, manifests, an
          architecture diagram, and a runbook.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <TiltCard key={p.title} className="glass p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <div className="flex shrink-0 gap-2">
                  <a
                    href={p.repo}
                    aria-label={`${p.title} — source repository`}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs transition hover:border-primary/50 hover:text-primary"
                  >
                    repo
                  </a>
                  <a
                    href={p.live}
                    aria-label={`${p.title} — live deployment`}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs transition hover:border-primary/50 hover:text-primary"
                  >
                    live ↗
                  </a>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

              <dl className="my-5 grid grid-cols-3 divide-x divide-border rounded-lg border border-border bg-surface/40">
                {p.metrics.map((m) => (
                  <div key={m.k} className="px-3 py-3 text-center">
                    <dd className="font-mono text-base font-semibold text-primary">
                      {m.v}
                    </dd>
                    <dt className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {m.k}
                    </dt>
                  </div>
                ))}
              </dl>

              <ul aria-label="Tech stack" className="flex flex-wrap items-center gap-2">
                {p.stack.map((s) =>
                  TECH[s] ? (
                    <li
                      key={s}
                      className="flex items-center justify-center rounded-xl border border-border bg-surface/70 p-2"
                    >
                      <TechIcon name={s} slug={TECH[s].slug} color={TECH[s].color} size={28} />
                    </li>
                  ) : null,
                )}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
