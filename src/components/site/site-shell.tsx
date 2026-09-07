import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AnimatedBackground } from "./animated-background";
import { CursorAtmosphere } from "./cursor-atmosphere";
import { CONTACT } from "@/data/portfolio";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <CursorAtmosphere />
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-sky font-display text-sm text-primary-foreground shadow-sky">
              HH
            </span>
            <span className="font-display text-base font-medium tracking-tight">
              Hammad Ul Haq
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary-soft hover:text-secondary-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-secondary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-full bg-gradient-sky px-4 py-2 text-sm font-medium text-primary-foreground shadow-sky transition-transform hover:-translate-y-0.5"
          >
            Hire me
          </a>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 pb-2.5 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-muted-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-secondary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="mt-24 border-t border-border/70 bg-card/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hammad Ul Haq — Available full-time, part-time or project based.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-secondary-foreground" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <a className="hover:text-secondary-foreground" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-secondary-foreground" href={CONTACT.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </section>
  );
}
