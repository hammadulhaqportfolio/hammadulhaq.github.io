import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteShell } from "@/components/site/site-shell";
import { Lightbox, MediaTile, useLightbox } from "@/components/site/media-gallery";
import { logos, posts, thumbnails } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Thumbnails, Social Posts & Logos | Hammad Ul Haq" },
      {
        name: "description",
        content:
          "Selected portfolio: YouTube thumbnails, social media post designs and logo identities by Hammad Ul Haq.",
      },
      { property: "og:title", content: "Selected work by Hammad Ul Haq" },
      {
        property: "og:description",
        content: "A selection from 1000+ thumbnails, 5000+ social posts and brand identities.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  const lightbox = useLightbox();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Selected portfolio"
        title="Work designed to stop the scroll."
        intro="A selection from 1000+ thumbnails, 5000+ social posts and a growing collection of brand identities. Hover any piece to enlarge it, or click to view it full size."
      />

      <Section title="YouTube thumbnails">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thumbnails.map((src, i) => (
            <MediaTile
              key={src}
              src={src}
              alt={`YouTube thumbnail design ${i + 1}`}
              ratio="video"
              onOpen={lightbox.open}
            />
          ))}
        </div>
      </Section>

      <Section title="Social media posts">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {posts.map((src, i) => (
            <MediaTile
              key={src}
              src={src}
              alt={`Social media post design ${i + 1}`}
              ratio="portrait"
              onOpen={lightbox.open}
            />
          ))}
        </div>
      </Section>

      <Section title="Logo designs">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((src, i) => (
            <MediaTile
              key={src}
              src={src}
              alt={`Logo design ${i + 1}`}
              ratio="square"
              onOpen={lightbox.open}
            />
          ))}
        </div>
      </Section>

      <Lightbox src={lightbox.src} onClose={lightbox.close} />
    </SiteShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <h2 className="mb-5 flex items-center gap-3 text-xl sm:text-2xl">
        <span className="h-1.5 w-8 rounded-full bg-gradient-sky" />
        {title}
      </h2>
      {children}
    </section>
  );
}
