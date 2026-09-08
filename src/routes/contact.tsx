import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteShell } from "@/components/site/site-shell";
import { CONTACT } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hammad Ul Haq — Designer & Video Editor" },
      {
        name: "description",
        content:
          "Available full-time, part-time or project based for thumbnails, social campaigns, logo design, video editing and virtual assistance.",
      },
      { property: "og:title", content: "Contact Hammad Ul Haq" },
      {
        property: "og:description",
        content: "Email or connect on social media to start a project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const LINKS = [
  { label: "Facebook", href: CONTACT.facebook },
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "X (Twitter)", href: CONTACT.x },
];

function Contact() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title="Let's create something people notice."
        intro="For thumbnails, social campaigns, logo design, video editing, scriptwriting or ongoing content support — send me an email or connect on social media. I'm available full-time, part-time or project based."
      />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border/70 bg-card/85 p-7 shadow-card-soft backdrop-blur">
          <h2 className="text-xl">Start a project</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tell me what you need, your deadline and where the work will be published, and I'll
            reply with a plan and timeline.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-6 inline-flex rounded-full bg-gradient-sky px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sky transition-transform hover:-translate-y-0.5"
          >
            Email {CONTACT.email}
          </a>
          <p className="mt-5 text-sm text-muted-foreground">{CONTACT.location}</p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/85 p-7 shadow-card-soft backdrop-blur">
          <h2 className="text-xl">Find me online</h2>
          <ul className="mt-4 divide-y divide-border">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-muted-foreground">Open profile →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
