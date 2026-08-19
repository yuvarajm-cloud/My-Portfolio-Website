import { SectionLabel } from "./About";
import { TechIcon, TECH } from "./TechIcon";

export function CaseStudy() {
  return (
    <section id="case-studies" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="05" title="Architecture Case Study" />

        <div className="mt-10 glass rounded-xl p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-xs text-primary">
              CASE-001
            </span>
            <h3 className="text-2xl font-semibold">
              Scalable Kubernetes Web Deployment on AWS EC2
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Block label="Problem">
              Static website needed a scalable, fault-tolerant deployment that
              could roll out new versions without downtime — and didn't blow up
              the Free Tier budget.
            </Block>
            <Block label="Solution">
              Built a Docker image, wrote Deployment + Service manifests, and
              ran a Kubernetes cluster on AWS EC2. Exposed via NodePort behind
              Nginx; rolling updates handle releases.
            </Block>
            <Block label="Stack">
              <div className="flex flex-wrap items-center gap-2">
                {["AWS EC2", "Docker", "Kubernetes", "Nginx", "Bash", "Security Groups"].map((s) =>
                  TECH[s] ? (
                    <span
                      key={s}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/70 p-2"
                    >
                      <TechIcon name={s} slug={TECH[s].slug} color={TECH[s].color} size={24} />
                    </span>
                  ) : null,
                )}
              </div>
            </Block>
            <Block label="Challenges">
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>NodePort traffic blocked by Security Groups</li>
                <li>ContainerCreating stuck on image pull</li>
                <li>Tuning resource requests to fit t3.micro</li>
              </ul>
            </Block>
          </div>

          {/* ASCII Architecture */}
          <div className="mt-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Architecture
            </div>
            <pre className="overflow-x-auto rounded-lg border border-border bg-surface/60 p-5 font-mono text-[13px] leading-relaxed text-foreground/90">
{`        ┌──────────┐
        │   User   │
        └────┬─────┘
             │  HTTPS
             ▼
     ┌───────────────┐
     │  CloudFront   │  (CDN + TLS)
     └──────┬────────┘
            ▼
     ┌───────────────┐
     │     Nginx     │  (reverse proxy)
     └──────┬────────┘
            ▼
   ┌──────────────────┐
   │   K8s Service    │  NodePort :30080
   └──────┬───────────┘
          ▼
   ┌─────────────────────────────┐
   │  Deployment · 3 replicas    │
   │  ┌──────┐ ┌──────┐ ┌──────┐ │
   │  │ Pod  │ │ Pod  │ │ Pod  │ │
   │  └──────┘ └──────┘ └──────┘ │
   └─────────────────────────────┘
          │
          ▼
   ┌──────────────────┐
   │ Prometheus +     │
   │ Grafana (metrics)│
   └──────────────────┘`}
            </pre>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Outcome label="Deployment" value="successful" />
            <Outcome label="Replicas" value="3 pods" />
            <Outcome label="Cost" value="$0 / mo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
        {label}
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function Outcome({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface/50 p-4">
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-mono text-lg font-semibold text-primary">{value}</div>
    </div>
  );
}
