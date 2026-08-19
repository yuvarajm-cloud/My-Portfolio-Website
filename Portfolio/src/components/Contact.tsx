import { type FormEvent, useState } from "react";
import { SectionLabel } from "./About";

const contactPanelClass =
  "glass flex h-full flex-col rounded-2xl border border-white/10 bg-surface/70 p-5 shadow-[0_16px_64px_-36px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6";

export function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    jobTitle: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Opportunity Inquiry — ${form.fullName} @ ${form.company}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Company: ${form.company}`,
        `Work Email: ${form.email}`,
        `Job Title: ${form.jobTitle}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:yuvarajm18.tech@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-gap">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="03" title="Contact" />

        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
          {/* Left: terminal contact card */}
          <div className={contactPanelClass}>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Let&apos;s Connect
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Open to Cloud, DevOps, Platform Engineering, and Infrastructure
                opportunities.
              </p>
            </div>

            <div className="mt-5 flex flex-1 flex-col justify-end">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                ~/contact $ cat info.txt
              </div>
              <div className="mt-3 space-y-2.5 font-mono text-sm">
                <a href="mailto:yuvarajm18.tech@gmail.com" className="block hover:text-primary">
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">email:</span>{" "}
                  yuvarajm18.tech@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvarajm-1810m/"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-primary"
                >
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">linkedin:</span>{" "}
                  linkedin.com/in/yuvarajm-1810m
                </a>
                <a
                  href="https://github.com/yuvarajm-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-primary"
                >
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">github:</span>{" "}
                  github.com/yuvarajm-cloud
                </a>
                <div>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">location:</span>{" "}
                  Hosur, India
                </div>
              </div>
            </div>
          </div>

          {/* Right: recruiter inquiry form */}
          <div className={contactPanelClass}>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              ~/hire $ opportunity_inquiry --recruiter
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Hiring managers, recruiters, and HR teams — share role details or
              opportunity briefs below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-1 flex-col gap-3"
              noValidate
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="recruiter-field"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Company Name
                  </span>
                  <input
                    type="text"
                    name="company"
                    required
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                    className="recruiter-field"
                    placeholder="Acme Cloud Corp"
                  />
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Work Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="recruiter-field"
                    placeholder="jane.smith@company.com"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Job Title
                  </span>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={form.jobTitle}
                    onChange={(e) => setForm((prev) => ({ ...prev, jobTitle: e.target.value }))}
                    className="recruiter-field"
                    placeholder="Technical Recruiter"
                  />
                </label>
              </div>

              <label className="block flex-1 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="recruiter-field min-h-[96px] resize-y"
                  placeholder="Share role details, team context, and how you'd like to connect."
                />
              </label>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 accent-glow sm:w-auto sm:self-start"
              >
                Send Message
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
