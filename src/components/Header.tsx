import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
          <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-paper">
            {site.initials}
          </span>
          <span className="hidden font-display text-lg sm:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink md:inline-block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5 md:hidden"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <ul className="flex flex-wrap gap-5">
          {site.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="link-underline hover:text-ink" rel="me noopener">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="link-underline hover:text-ink">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
