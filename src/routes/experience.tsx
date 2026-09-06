import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteShell } from "@/components/site/site-shell";
import { APEX_SPORTS_URL } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Hammad Ul Haq | Social Media & Content" },
      {
        name: "description",
        content:
          "4+ years of experience: Social Media Manager at Apex Sports, YouTube automation, freelance design across 100+ channels, plus education and certification.",
      },
      { property: "og:title", content: "Experience — Hammad Ul Haq" },
      {
        property: "og:description",
        content:
          "Social Media Manager at Apex Sports, Pakistan's largest sports channel, plus YouTube automation and freelance design.",
      },
    ],
  }),
  component: Experience,
});

const ROLES = [
  {
    period: "2026 — Present",
    title: "YouTube Automation & Content Creator",
    company: "Self-employed",
    verified: false,
    body: "Managing end-to-end YouTube workflows: research, topic selection, scriptwriting, visual production, editing, uploading, scheduling and publishing.",
    points: [
      "Content research, planning and scriptwriting",
      "Thumbnail design and channel branding",
      "Uploading, scheduling and publishing workflows",
    ],
  },
  {
    period: "2024 — 2026",
    title: "Social Media Manager",
    company: "Apex Sports",
    verified: true,
    body: "Created social posts, graphic designs and short- and long-form videos for Pakistan's largest sports channel while managing its publishing schedule.",
    points: [
      "Daily social media posts and match-day graphics",
      "Short- and long-form video editing in CapCut",
      "Content calendar, scheduling and page management",
    ],
  },
  {
    period: "2022 — Present",
    title: "Freelance Graphic Designer & Virtual Assistant",
    company: "Private clients & 100+ channels",
    verified: false,
    body: "Delivered click-focused thumbnails, campaign artwork, logos and video edits while handling admin tasks, research, data entry and high-volume workloads.",
    points: [
      "1000+ thumbnails and 5000+ social media posts delivered",
      "Logo and brand identity design",
      "Data entry, spreadsheets and client communication",
    ],
  },
];

function Experience() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Experience"
        title="Four years of ideas, deadlines and delivery."
        intro="Creative work across private clients, over 100+ channels, YouTube operations and Pakistan's largest sports channel. Available full-time, part-time or project based."
      />

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <ol className="relative space-y-5 border-l border-border pl-6 sm:pl-8">
          {ROLES.map((role) => (
            <li key={role.title} className="relative">
              <span className="absolute -left-[calc(1.5rem+7px)] top-6 size-3.5 rounded-full bg-gradient-sky shadow-sky sm:-left-[calc(2rem+7px)]" />
              <article className="rounded-2xl border border-border/70 bg-card/85 p-6 shadow-card-soft backdrop-blur transition-shadow hover:shadow-sky">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {role.period}
                </p>
                <h2 className="mt-2 text-xl">{role.title}</h2>

                {role.verified ? (
                  <a
                    href={APEX_SPORTS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary-soft/70 py-1.5 pl-1.5 pr-4 transition-colors hover:bg-primary-soft"
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-sky font-display text-sm text-primary-foreground">
                      AS
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-secondary-foreground">
                      {role.company}
                      <VerifiedBadge />
                    </span>
                    <span className="text-xs text-muted-foreground">Visit profile →</span>
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{role.company}</p>
                )}

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{role.body}</p>
                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/70 bg-card/85 p-6 shadow-card-soft backdrop-blur">
          <h2 className="text-lg">Education</h2>
          <p className="mt-2 font-medium">FA — Intermediate</p>
          <p className="text-sm text-muted-foreground">Completed 2024</p>
        </div>
        <div className="rounded-2xl border border-border/70 bg-card/85 p-6 shadow-card-soft backdrop-blur">
          <h2 className="text-lg">Certification</h2>
          <p className="mt-2 font-medium">NEBOSH IGC</p>
          <p className="text-sm text-muted-foreground">International General Certificate, 2025</p>
        </div>
      </section>
    </SiteShell>
  );
}

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified"
      role="img"
      className="size-4 text-primary"
      fill="currentColor"
    >
      <path d="M12 1.5l2.4 2.1 3.2-.3.9 3.1 2.8 1.6-1.2 3 1.2 3-2.8 1.6-.9 3.1-3.2-.3L12 22.5l-2.4-2.1-3.2.3-.9-3.1L2.7 16l1.2-3-1.2-3 2.8-1.6.9-3.1 3.2.3L12 1.5z" />
      <path
        d="M10.8 15.3l-2.9-2.9 1.2-1.2 1.7 1.7 4.1-4.1 1.2 1.2-5.3 5.3z"
        fill="var(--card)"
      />
    </svg>
  );
}
