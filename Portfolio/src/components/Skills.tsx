import { SectionLabel } from "./About";
import { FlipCard } from "./FlipCard";
import { TechIcon, TECH } from "./TechIcon";

const stack = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Linux",
  "GitHub",
  "Git",
  "Python",
  "Prometheus",
  "Grafana",
  "Ansible",
  "Apache",
];

const projects = [
  {
    title: "CloudMart DevOps Deployment",
    icons: [
      "AWS",
      "Terraform",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Route 53",
    ],
    description:
      "End-to-end e-commerce deployment using AWS EC2, Terraform, Jenkins CI/CD, Docker, Kubernetes, monitoring, ALB, and Route 53.",
    techUsed: "AWS · Terraform · Jenkins · Docker · K8s · Prometheus · Grafana · Route 53",
  },
  {
    title: "Kubernetes Website Deployment",
    icons: ["Kubernetes", "Docker", "AWS EC2"],
    description:
      "Deployed a containerized website on AWS EC2 Kubernetes cluster using Deployment, Service, and NodePort.",
    techUsed: "Kubernetes · Docker · AWS EC2",
  },
  {
    title: "Jenkins CI/CD Pipeline",
    icons: ["Jenkins", "GitHub", "Linux", "Apache"],
    description:
      "Automated GitHub to Apache deployment using Jenkins pipeline on Linux server.",
    techUsed: "Jenkins · GitHub · Linux · Apache",
  },
  {
    title: "Azure VM Web Server Deployment",
    icons: ["Azure", "Linux", "Apache", "Security"],
    description:
      "Provisioned Azure Ubuntu VM and deployed a web server using Apache with basic security configuration.",
    techUsed: "Azure · Linux · Apache · Security",
  },
];

const panelClass =
  "glass flex h-full flex-col rounded-2xl border border-white/10 bg-surface/70 p-3 shadow-[0_16px_64px_-36px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-3.5 lg:min-h-[372px]";

export function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="01" title="Tech Stack & Projects" />
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          Cloud, containers, automation, and observability — paired with hands-on
          deployments across AWS, Azure, and Kubernetes.
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
          {/* Left: Tech Stack */}
          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
              Tech Stack
            </h3>
            <div className={panelClass}>
              <ul className="grid flex-1 grid-cols-2 content-start gap-x-2 gap-y-1.5 sm:grid-cols-4">
                {stack.map((name) => {
                  const t = TECH[name];
                  if (!t) return null;
                  return (
                    <li
                      key={name}
                      className="group mx-auto flex h-[85px] w-full max-w-[85px] flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-1.5 py-1.5 text-center shadow-[0_8px_28px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white/10 hover:shadow-[0_12px_36px_-22px_rgba(120,81,255,0.28)]"
                    >
                      <TechIcon name={name} color={t.color} size={40} variant="plain" />
                      <span className="text-[10px] font-medium tracking-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right: Projects */}
          <div id="projects" className="flex flex-1 flex-col">
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
              Projects
            </h3>
            <div className={panelClass}>
              <div className="grid h-full flex-1 grid-cols-1 gap-2 sm:auto-rows-fr sm:grid-cols-2 sm:grid-rows-2">
                {projects.map((p) => (
                  <FlipCard
                    key={p.title}
                    title={p.title}
                    icons={p.icons}
                    description={p.description}
                    techUsed={p.techUsed}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
