import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">This page wandered off.</h1>
      <p className="mt-4 text-muted">The link may be old, or the page has moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">Back home</Link>
    </section>
  );
}
