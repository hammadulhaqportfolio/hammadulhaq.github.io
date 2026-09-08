import photoshopLogo from "@/assets/tool-logos/photoshop.svg";
import canvaLogo from "@/assets/tool-logos/canva.svg";
import capcutLogo from "@/assets/tool-logos/capcut.svg";
import chatgptLogo from "@/assets/tool-logos/chatgpt.svg";
import claudeLogo from "@/assets/tool-logos/claude.svg";
import geminiLogo from "@/assets/tool-logos/gemini.svg";
import gmailLogo from "@/assets/tool-logos/gmail.svg";
import calendarLogo from "@/assets/tool-logos/calendar.svg";
import meetLogo from "@/assets/tool-logos/meet.svg";
import excelLogo from "@/assets/tool-logos/excel.svg";
import wordLogo from "@/assets/tool-logos/word.svg";
import youtubeLogo from "@/assets/tool-logos/youtube.svg";

export type Tool = {
  name: string;
  icon: string;
};

export const TOOLS: Tool[] = [
  { name: "Adobe Photoshop", icon: photoshopLogo },
  { name: "Canva", icon: canvaLogo },
  { name: "CapCut", icon: capcutLogo },
  { name: "ChatGPT", icon: chatgptLogo },
  { name: "Claude AI", icon: claudeLogo },
  { name: "Gemini", icon: geminiLogo },
  { name: "Gmail", icon: gmailLogo },
  { name: "Google Calendar", icon: calendarLogo },
  { name: "Google Meet", icon: meetLogo },
  { name: "Google Sheets", icon: excelLogo },
  { name: "MS Excel", icon: excelLogo },
  { name: "MS Word", icon: wordLogo },
  { name: "YouTube", icon: youtubeLogo },
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
      className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-border/80 bg-secondary/90 shadow-card-soft backdrop-blur-md ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <img src={tool.icon} alt="" className="size-[68%] object-contain drop-shadow-sm" />
    </span>
  );
}

export function ToolChip({ name }: { name: string }) {
  const tool = toolByName(name);
  return (
    <span className="group inline-flex items-center gap-2.5 rounded-lg border border-border/80 bg-card/75 px-3 py-2 text-sm text-card-foreground shadow-card-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sky">
      {tool ? (
        <ToolMark tool={tool} size={22} />
      ) : (
        <span aria-hidden="true" className="size-2 rounded-full bg-gradient-sky" />
      )}
      {name}
    </span>
  );
}
