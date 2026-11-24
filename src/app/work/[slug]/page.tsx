import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { ProjectCover } from "@/components/ProjectCover";
import { CropMarks } from "@/components/CropMarks";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: { title: project.title, description: project.summary, url: `/work/${slug}/`, type: "article", images: ["/og.png"] },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const { default: Body } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <article>
      <header className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
        <Link href="/#work" className="font-mono text-xs text-muted transition-colors duration-150 hover:text-ink">
          Back to all work
        </Link>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1] tracking-[-0.02em]">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-xs text-muted">Client</dt>
            <dd className="mt-1">{project.client}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Stack</dt>
            <dd className="mt-1">{project.stack.join(", ")}</dd>
          </div>
        </dl>
      </header>
      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <div className="relative">
          <CropMarks />
          <ProjectCover project={project} className="block aspect-[16/8] w-full rounded-[4px]" />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="prose">
          <Body />
        </div>
        {project.link && (
          <p className="mt-12">
            <a href={project.link.href} className="inline-flex rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper" rel="noopener">
              {project.link.label}
            </a>
          </p>
        )}
      </div>
      <nav aria-label="Next project" className="border-t border-line">
        <Link href={`/work/${next.slug}/`} className="group mx-auto flex max-w-6xl flex-col gap-2 px-5 py-14 sm:px-8">
          <span className="font-mono text-xs text-muted">Next case study</span>
          <span className="font-display text-3xl tracking-tight sm:text-5xl">
            <span className="link-underline">{next.title}</span>
          </span>
        </Link>
      </nav>
    </article>
  );
}
