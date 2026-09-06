// Third-party brand marks. Brand colours are data (not theme tokens), so they
// live here in one place instead of being sprinkled across components.
export type Tool = {
  name: string;
  short: string;
  from: string;
  to: string;
};

export const TOOLS: Tool[] = [
  { name: "Adobe Photoshop", short: "Ps", from: "#0b2c50", to: "#31a8ff" },
  { name: "Canva", short: "Cv", from: "#00c4cc", to: "#7d2ae8" },
  { name: "CapCut", short: "Cc", from: "#111827", to: "#00d1c1" },
  { name: "ChatGPT", short: "AI", from: "#0f9d7a", to: "#10a37f" },
  { name: "Claude AI", short: "Cl", from: "#d97757", to: "#f2a488" },
  { name: "Gemini", short: "Gm", from: "#4285f4", to: "#9b72cb" },
  { name: "Gmail", short: "M", from: "#ea4335", to: "#fbbc04" },
  { name: "Google Calendar", short: "31", from: "#1a73e8", to: "#4dabf7" },
  { name: "Google Sheets", short: "Sh", from: "#0f9d58", to: "#34a853" },
  { name: "MS Excel", short: "X", from: "#107c41", to: "#21a366" },
  { name: "MS Word", short: "W", from: "#185abd", to: "#2b7cd3" },
  { name: "YouTube", short: "▶", from: "#ff0000", to: "#ff5252" },
  { name: "Instagram", short: "Ig", from: "#f9ce34", to: "#ee2a7b" },
  { name: "Facebook", short: "f", from: "#1877f2", to: "#4293ff" },
];

export const toolByName = (name: string) => TOOLS.find((t) => t.name === name);

export function ToolMark({
  tool,
  className = "",
  size = 36,
}: {
  tool: Tool;
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-[28%] font-display font-semibold text-white ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, size * 0.4),
        background: `linear-gradient(140deg, ${tool.from}, ${tool.to})`,
        boxShadow: `0 6px 18px -8px ${tool.from}`,
      }}
    >
      {tool.short}
    </span>
  );
}

export function ToolChip({ name }: { name: string }) {
  const tool = toolByName(name);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-card-foreground shadow-card-soft">
      {tool ? (
        <ToolMark tool={tool} size={22} />
      ) : (
        <span aria-hidden="true" className="size-2 rounded-full bg-gradient-sky" />
      )}
      {name}
    </span>
  );
}
