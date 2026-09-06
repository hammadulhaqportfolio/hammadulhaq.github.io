import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteShell } from "@/components/site/site-shell";
import { portrait } from "@/data/portfolio";
import { ToolChip } from "@/components/site/tools";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hammad Ul Haq — Designer, Editor & Scriptwriter" },
      {
        name: "description",
        content:
          "4+ years across social media management, graphic design, video editing, YouTube automation, content creation and virtual assistance.",
      },
      { property: "og:title", content: "About Hammad Ul Haq" },
      {
        property: "og:description",
        content:
          "Creative thinking with practical execution: design, editing, scriptwriting, publishing workflows and virtual assistance.",
      },
    ],
  }),
  component: About,
});

const PARAGRAPHS = [
  "Over the last 4+ years, I have worked across social media management, graphic design, video editing, YouTube automation, content creation, and virtual assistance, supporting businesses, channels, and private clients with their day-to-day digital operations.",
  "I have created 1,000+ thumbnails and 5,000+ social media posts while working with 100+ channels and private clients. My experience covers everything from designing social media content in Adobe Photoshop and Canva to editing both short- and long-form videos using CapCut.",
  "Beyond design and editing, I also handle content research, content planning, scriptwriting, creative ideation, social media management, content uploading, scheduling, and complete publishing workflows. I can take a project from the initial idea and research stage through content creation, editing, publishing, and organization.",
  "As a Virtual Assistant, I am comfortable handling administrative tasks, online research, client communication, task management, data organization, and managing multiple responsibilities independently. I also use AI tools such as ChatGPT, Claude AI, Gemini, and other AI platforms for research, brainstorming, writing, content development, and improving workflow efficiency.",
  "I bring a combination of creative thinking and practical execution to every project. My focus is not only on creating good-looking content, but also on solving problems, organizing workloads, meeting deadlines, maintaining consistency, and managing complete workflows efficiently.",
];

const DAILY_TOOLS = [
  "Adobe Photoshop",
  "Canva",
  "CapCut",
  "ChatGPT",
  "Claude AI",
  "Gemini",
  "Gmail",
  "Google Calendar",
  "Google Sheets",
  "MS Excel",
  "MS Word",
];

function About() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About me"
        title="Creative thinking, built for real-world results."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-xs lg:sticky lg:top-28">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-sky opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/30 bg-card p-2 shadow-sky-lg">
            <img
              src={portrait}
              alt="Hammad Ul Haq, graphic designer and video editor"
              className="w-full rounded-[1.2rem] object-cover"
            />
          </div>
          <span className="pointer-events-none absolute -left-2.5 -top-2.5 size-14 rounded-tl-[1.5rem] border-l-4 border-t-4 border-primary-glow" />
          <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 size-14 rounded-br-[1.5rem] border-b-4 border-r-4 border-primary-glow" />
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Rawalpindi, Pakistan — working with clients worldwide.
          </p>
        </div>

        <div className="space-y-5">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-card-soft backdrop-blur">
            <h2 className="text-lg">Tools I use every day</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {DAILY_TOOLS.map((tool) => (
                <ToolChip key={tool} name={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
