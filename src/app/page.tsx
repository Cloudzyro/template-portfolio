import Link from "next/link";
import { site, projects, about, experience, skills, education } from "@/content/site";
import { ProjectCover } from "@/components/ProjectCover";
import { ContactForm } from "@/components/ContactForm";

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_320px] lg:pb-28">
          <div className="rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.95] tracking-[-0.03em] [font-variation-settings:'SOFT'_50,'opsz'_144]">
              {site.name}
              <span className="mt-3 block text-[0.42em] italic leading-tight tracking-[-0.01em] text-muted">
                {site.role}, {site.location}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">{site.headline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#work" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5">
                See selected work
              </Link>
              <Link href="/#contact" className="rounded-full border border-ink/80 px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="rise hidden lg:block" style={{ animationDelay: "120ms" }} aria-hidden="true">
            <svg viewBox="0 0 320 420" className="h-full w-full">
              <g fill="none" className="stroke-ink" strokeWidth="1">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <path key={i} d={`M ${20 + i * 14} 400 A ${140 - i * 14} ${140 - i * 14} 0 0 1 ${300 - i * 14} 400`} opacity={1 - i * 0.12} />
                ))}
              </g>
              <circle cx="160" cy="150" r="58" className="fill-accent" />
              <circle cx="160" cy="150" r="58" fill="none" className="stroke-ink" strokeDasharray="3 6" transform="translate(16 16)" />
              <text x="20" y="40" className="fill-muted font-mono text-[11px]">EST. 2017</text>
              <text x="300" y="40" textAnchor="end" className="fill-muted font-mono text-[11px]">45.52 N</text>
            </svg>
          </div>
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
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <ProjectCover project={p} className="aspect-[10/7] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-tight">
                      <span className="link-underline">{p.title}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{p.year}</span>
                  </div>
                  <p className="mt-2 text-muted">{p.summary}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
                    {p.client} <span aria-hidden="true">/</span> {p.role}
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
              Design-minded, <em className="text-accent">engineering-led.</em>
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
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.label}</dt>
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
              <a href={site.cvFile} className="rounded-full border border-ink/80 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper" download>
                Download CV (PDF)
              </a>
            )}
          </div>
          <div className="mt-14 grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            <ol className="relative border-l border-line">
              {experience.map((job) => (
                <li key={job.company + job.period} className="relative pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-paper bg-accent ring-1 ring-accent" aria-hidden="true" />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">{job.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {job.role} <span className="font-normal text-muted">at {job.company}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{job.detail}</p>
                </li>
              ))}
            </ol>
            <div className="space-y-10">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{s.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Education</h3>
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
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
              <span className="text-accent">04</span>
              <span className="h-px w-8 bg-paper/30" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Have something worth <em className="text-accent">building?</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-paper/70">
              Tell me about the problem, the people who have it, and when you&apos;d like to start. I reply to every message.
            </p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block font-display text-xl underline decoration-accent decoration-2 underline-offset-4 break-all">
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl bg-paper p-6 text-ink sm:p-8">
            <ContactForm email={site.email} />
          </div>
        </div>
      </section>
    </>
  );
}
