import Link from "next/link";
import { site, projects, about, experience, skills, education } from "@/content/site";
import { ProjectCover } from "@/components/ProjectCover";
import { ContactForm } from "@/components/ContactForm";
import { CropMarks } from "@/components/CropMarks";

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs text-muted">
      <span className="text-accent">{index}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1fr_340px] lg:gap-16 lg:py-16">
          <div className="rise">
            <h1 className="font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.95] tracking-[-0.03em] [font-variation-settings:'SOFT'_50,'opsz'_144]">
              {site.name}
            </h1>
            <p className="mt-4 text-lg text-muted sm:text-xl">
              {site.role}, {site.location}
            </p>
            <p className="mt-10 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">{site.headline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#work" className="rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-ink/85 active:scale-[0.98]">
                See selected work
              </Link>
              <Link href="/#contact" className="rounded-lg border border-ink/30 px-5 py-3 text-sm font-medium transition-[border-color,transform] duration-150 hover:border-ink active:scale-[0.98]">
                Start a conversation
              </Link>
            </div>
          </div>
          <aside className="rise" style={{ animationDelay: "60ms" }} aria-label="Availability and selected work">
            <div className="relative border border-line bg-paper p-6">
              <CropMarks />
              <p className="font-mono text-xs text-muted">Availability</p>
              <p className="mt-1">{site.availability}</p>
              <p className="mt-6 border-t border-line pt-5 font-mono text-xs text-muted">Selected work</p>
              <ol className="mt-2">
                {projects.map((p, i) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}/`} className="group grid grid-cols-[20px_12px_1fr_auto] items-center gap-3 py-2">
                      <span className="font-mono text-xs text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="size-3 ring-1 ring-ink/10 ring-inset" style={{ background: p.cover.from }} aria-hidden="true" />
                      <span className="link-underline justify-self-start">{p.title}</span>
                      <span className="font-mono text-xs text-muted tabular-nums">{p.year}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="01">Selected work</SectionLabel>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Case studies</h2>
            </div>
            <p className="max-w-sm text-muted">A few projects from the last four years, with the thinking behind the decisions.</p>
          </div>
          <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((p, i) => (
              <li key={p.slug} className={i % 2 === 1 ? "md:mt-16" : ""}>
                <Link href={`/work/${p.slug}/`} className="group block">
                  <div className="relative">
                    <CropMarks />
                    <ProjectCover project={p} className="block aspect-[10/7] w-full rounded-[4px]" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-tight">
                      <span className="link-underline">{p.title}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{p.year}</span>
                  </div>
                  <p className="mt-2 text-muted">{p.summary}</p>
                  <p className="mt-4 font-mono text-xs text-muted">
                    {p.client}, {p.role}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionLabel index="02">About</SectionLabel>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Design-minded, engineering-led
            </h2>
          </div>
          <div>
            {about.paragraphs.map((para) => (
              <p key={para.slice(0, 20)} className="mb-5 text-lg leading-relaxed">
                {para}
              </p>
            ))}
            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {about.facts.map((f) => (
                <div key={f.label} className="bg-paper-2 p-5">
                  <dt className="font-mono text-xs text-muted">{f.label}</dt>
                  <dd className="mt-1.5">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="03">Resume</SectionLabel>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Experience and skills</h2>
            </div>
            {site.cvFile && (
              <a href={site.cvFile} className="rounded-lg border border-ink/30 px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:border-ink" download>
                Download CV (PDF)
              </a>
            )}
          </div>
          <div className="mt-14 grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            <ol className="relative border-l border-line">
              {experience.map((job) => (
                <li key={job.company + job.period} className="relative pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-paper bg-accent ring-1 ring-accent" aria-hidden="true" />
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <h3 className="mt-2 text-xl font-medium">
                    {job.role} <span className="font-normal text-muted">at {job.company}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{job.detail}</p>
                </li>
              ))}
            </ol>
            <div className="space-y-10">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="font-mono text-xs text-muted">{s.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {s.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="font-mono text-xs text-muted">Education</h3>
                {education.map((e) => (
                  <p key={e.title} className="mt-3">
                    {e.title}
                    <span className="block text-sm text-muted">
                      {e.place}, {e.period}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs text-paper/60">
              <span className="text-accent">04</span>
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Have something worth building?
            </h2>
            <p className="mt-6 max-w-md text-lg text-paper/70">
              Tell me about the problem, the people who have it, and when you&apos;d like to start. I reply to every message.
            </p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block font-display text-xl underline decoration-accent decoration-2 underline-offset-4 break-all">
              {site.email}
            </a>
          </div>
          <div className="rounded-xl bg-paper p-6 text-ink sm:p-8">
            <ContactForm email={site.email} />
          </div>
        </div>
      </section>
    </>
  );
}
