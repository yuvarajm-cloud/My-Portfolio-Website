import { SectionLabel } from "./About";

const certs = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024", code: "CLF-C02" },
  { name: "Git & GitHub Essentials", issuer: "GitHub", year: "2024", code: "GH-FUND" },
  { name: "HTML & CSS Foundations", issuer: "freeCodeCamp", year: "2023", code: "WEB-101" },
  { name: "AI Fundamentals", issuer: "Microsoft Learn", year: "2024", code: "AI-900" },
];

export function Certifications() {
  return (
    <section id="certs" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="03" title="Certifications" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certs.map((c) => (
            <article
              key={c.name}
              className="glass glass-hover group flex h-full items-start gap-4 rounded-xl p-4 sm:p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-xs font-semibold text-primary">
                {c.code.slice(0, 3)}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>{c.code}</span>
                  <span>{c.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
