import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { Lightbox, MediaTile, useLightbox } from "@/components/site/media-gallery";
import { ToolChip } from "@/components/site/tools";
import { portrait, posts, thumbnails } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hammad Ul Haq — Graphic Designer & Video Editor" },
      {
        name: "description",
        content:
          "Portfolio of Hammad Ul Haq: thumbnails, social media designs, logos, video editing, scriptwriting and virtual assistance.",
      },
      { property: "og:title", content: "Hammad Ul Haq — Graphic Designer & Video Editor" },
      {
        property: "og:description",
        content:
          "1000+ thumbnails, 5000+ social posts and 100+ channels supported. Available full-time, part-time or project based.",
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "1000+", label: "Thumbnails designed" },
  { value: "5000+", label: "Social media posts" },
  { value: "100+", label: "Channels worked with" },
  { value: "4+ yrs", label: "Creative experience" },
];

const HERO_TOOLS = [
  "Adobe Photoshop",
  "Canva",
  "CapCut",
  "MS Excel",
  "MS Word",
  "Claude AI",
  "ChatGPT",
];

function Home() {
  const lightbox = useLightbox();

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Available full-time, part-time or project based
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Hammad Ul Haq
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Graphic designer, social media manager, video editor and{" "}
            <span className="font-semibold text-secondary-foreground">scriptwriter</span> with 4+
            years of experience — with work across{" "}
            <span className="font-semibold text-secondary-foreground">over 100+ channels</span>.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="rounded-full bg-gradient-sky px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sky transition-transform hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-card-soft transition-colors hover:bg-primary-soft"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            {HERO_TOOLS.map((tool) => (
              <ToolChip key={tool} name={tool} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-reveal-delayed">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-sky opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/30 bg-card p-2 shadow-sky-lg">
            <img
              src={portrait}
              alt="Portrait of Hammad Ul Haq"
              className="w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <span className="pointer-events-none absolute -left-3 -top-3 size-16 rounded-tl-[1.75rem] border-l-4 border-t-4 border-primary-glow" />
          <span className="pointer-events-none absolute -bottom-3 -right-3 size-16 rounded-br-[1.75rem] border-b-4 border-r-4 border-primary-glow" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-card-soft backdrop-blur"
          >
            <p className="font-display text-2xl text-gradient-sky sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3 px-5">
          <div>
            <h2 className="text-2xl sm:text-3xl">Selected work</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Hover any piece to pause and see it larger — click to open full size.
            </p>
          </div>
          <Link to="/work" className="text-sm font-medium text-primary hover:underline">
            Full gallery →
          </Link>
        </div>

        <MarqueeRow
          items={thumbnails}
          altPrefix="YouTube thumbnail"
          ratio="video"
          tileWidth="w-[19rem] sm:w-[23rem]"
          onOpen={lightbox.open}
        />
        <MarqueeRow
          items={posts}
          altPrefix="Social media post"
          ratio="portrait"
          tileWidth="w-[13rem] sm:w-[15rem]"
          reverse
          onOpen={lightbox.open}
        />
      </section>

      <Lightbox src={lightbox.src} onClose={lightbox.close} />
    </SiteShell>
  );
}

function MarqueeRow({
  items,
  altPrefix,
  ratio,
  tileWidth,
  reverse = false,
  onOpen,
}: {
  items: string[];
  altPrefix: string;
  ratio: "video" | "portrait";
  tileWidth: string;
  reverse?: boolean;
  onOpen: (src: string) => void;
}) {
  return (
    <div className="group/row relative mt-6 overflow-hidden py-3">
      <div
        className={`flex w-max gap-4 px-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover/row:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((src, i) => (
          <div key={`${src}-${i}`} className={tileWidth}>
            <MediaTile
              src={src}
              alt={`${altPrefix} ${(i % items.length) + 1}`}
              ratio={ratio}
              onOpen={onOpen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
