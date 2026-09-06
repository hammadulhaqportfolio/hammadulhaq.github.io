import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteShell } from "@/components/site/site-shell";
import { toolByName, ToolMark } from "@/components/site/tools";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Design, Editing, Scriptwriting & Data Entry" },
      {
        name: "description",
        content:
          "Photoshop, Canva, CapCut, scriptwriting, social media management, AI tools, MS Word, MS Excel, Google Sheets, Calendar, Gmail and data entry.",
      },
      { property: "og:title", content: "Skills — Hammad Ul Haq" },
      {
        property: "og:description",
        content:
          "A complete content production toolkit: design, video, scriptwriting, AI tools and daily office and data entry work.",
      },
    ],
  }),
  component: Skills,
});

type Group = {
  title: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    title: "Design",
    items: [
      "Adobe Photoshop",
      "Canva",
      "Thumbnail design",
      "Social media creatives",
      "Logo design",
    ],
  },
  {
    title: "Video & content",
    items: [
      "CapCut",
      "Short-form videos",
      "Long-form videos",
      "Transitions & effects",
      "Sound design",
      "Scriptwriting",
    ],
  },
  {
    title: "Social & YouTube",
    items: [
      "Social media management",
      "Content planning",
      "Posting & scheduling",
      "YouTube automation",
      "Uploading & publishing",
    ],
  },
  {
    title: "AI tools",
    items: ["ChatGPT", "Claude AI", "Gemini", "Research & prompting", "Content development"],
  },
  {
    title: "Daily office tools",
    items: [
      "MS Word",
      "MS Excel",
      "Google Sheets",
      "Google Calendar",
      "Gmail",
      "Data entry",
    ],
  },
  {
    title: "Virtual assistance",
    items: [
      "Administrative tasks",
      "Online research",
      "Client communication",
      "Task management",
      "Workload & time management",
    ],
  },
];

function Skills() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Capabilities"
        title="A complete content production toolkit."
        intro="From the first idea and script to the final design, edit and upload, I can handle the full creative workflow — plus the daily office, spreadsheet and data entry work that keeps it organised. Available full-time, part-time or project based."
      />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-border/70 bg-card/85 p-6 shadow-card-soft backdrop-blur transition-shadow hover:shadow-sky"
          >
            <h2 className="flex items-center gap-3 text-lg">
              <span className="h-1.5 w-7 rounded-full bg-gradient-sky" />
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => {
                const tool = toolByName(item);
                return (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <span className="grid size-[26px] shrink-0 place-items-center">
                      {tool ? (
                        <ToolMark tool={tool} size={26} />
                      ) : (
                        <span className="grid size-[26px] place-items-center rounded-[28%] bg-primary-soft text-[11px] font-semibold text-secondary-foreground">
                          ✓
                        </span>
                      )}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
