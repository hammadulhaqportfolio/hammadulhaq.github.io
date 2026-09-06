import { TOOLS, ToolMark } from "./tools";

const FLOATERS = [
  { top: "8%", left: "6%", size: 74, delay: "0s", duration: "19s", opacity: 0.5 },
  { top: "18%", left: "82%", size: 92, delay: "-3s", duration: "23s", opacity: 0.45 },
  { top: "34%", left: "24%", size: 58, delay: "-6s", duration: "17s", opacity: 0.4 },
  { top: "46%", left: "63%", size: 80, delay: "-9s", duration: "26s", opacity: 0.42 },
  { top: "58%", left: "10%", size: 66, delay: "-2s", duration: "21s", opacity: 0.45 },
  { top: "68%", left: "88%", size: 72, delay: "-11s", duration: "24s", opacity: 0.4 },
  { top: "78%", left: "38%", size: 88, delay: "-5s", duration: "20s", opacity: 0.44 },
  { top: "88%", left: "70%", size: 60, delay: "-14s", duration: "27s", opacity: 0.42 },
  { top: "26%", left: "46%", size: 68, delay: "-8s", duration: "22s", opacity: 0.38 },
  { top: "6%", left: "58%", size: 54, delay: "-12s", duration: "18s", opacity: 0.4 },
  { top: "52%", left: "40%", size: 76, delay: "-16s", duration: "25s", opacity: 0.36 },
  { top: "92%", left: "18%", size: 70, delay: "-4s", duration: "23s", opacity: 0.42 },
  { top: "38%", left: "92%", size: 62, delay: "-18s", duration: "28s", opacity: 0.38 },
  { top: "14%", left: "34%", size: 56, delay: "-7s", duration: "20s", opacity: 0.36 },
];

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -left-40 top-[-15%] size-[38rem] animate-drift-a rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -right-32 top-[20%] size-[34rem] animate-drift-b rounded-full bg-primary-glow/30 blur-[130px]" />
      <div className="absolute bottom-[-20%] left-[25%] size-[40rem] animate-drift-a rounded-full bg-accent/60 blur-[140px]" />
      <div
        className="absolute inset-0 animate-sheen opacity-60"
        style={{ backgroundImage: "var(--gradient-veil)" }}
      />
      <div className="absolute inset-0">
        {FLOATERS.map((f, i) => {
          const tool = TOOLS[i % TOOLS.length]!;
          return (
            <span
              key={`${tool.name}-${i}`}
              className="absolute animate-float-slow blur-[2px]"
              style={{
                top: f.top,
                left: f.left,
                opacity: f.opacity,
                animationDelay: f.delay,
                animationDuration: f.duration,
              }}
            >
              <ToolMark tool={tool} size={f.size} />
            </span>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px]" />
    </div>
  );
}
