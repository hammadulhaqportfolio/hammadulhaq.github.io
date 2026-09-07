import { TOOLS, ToolMark } from "./tools";

const FLOATERS = [
  { top: "12%", left: "5%", size: 66, delay: "0s", duration: "20s" },
  { top: "19%", left: "87%", size: 76, delay: "-4s", duration: "24s" },
  { top: "48%", left: "10%", size: 54, delay: "-9s", duration: "22s" },
  { top: "62%", left: "89%", size: 62, delay: "-13s", duration: "27s" },
  { top: "82%", left: "19%", size: 58, delay: "-6s", duration: "25s" },
  { top: "87%", left: "76%", size: 64, delay: "-16s", duration: "29s" },
];

const PARTICLES = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 37) % 97}%`,
  top: `${(index * 53) % 91}%`,
  delay: `${-(index % 9)}s`,
}));

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="cinematic-grid absolute inset-0" />
      <div className="absolute -left-52 top-[-22%] size-[42rem] animate-drift-a rounded-full bg-primary/16 blur-[130px]" />
      <div className="absolute -right-48 top-[12%] size-[38rem] animate-drift-b rounded-full bg-primary-glow/12 blur-[145px]" />
      <div className="absolute bottom-[-22%] left-[24%] size-[44rem] animate-drift-a rounded-full bg-accent/30 blur-[160px]" />
      <div className="cinematic-haze absolute inset-0 animate-sheen" />
      <div className="light-streak left-[8%] top-[22%] -rotate-12" />
      <div className="light-streak right-[2%] top-[56%] rotate-12" />
      <div className="absolute inset-0 opacity-55 max-md:opacity-25">
        {PARTICLES.map((particle, index) => (
          <i
            key={index}
            className="absolute size-1 animate-particle rounded-full bg-primary-glow"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          />
        ))}
      </div>
      <div className="absolute inset-0 translate-x-[var(--parallax-x)] translate-y-[var(--parallax-y)] transition-transform duration-700 ease-out max-md:hidden">
        {FLOATERS.map((f, i) => {
          const tool = TOOLS[i % TOOLS.length];
          if (!tool) return null;
          return (
            <span
              key={`${tool.name}-${i}`}
              className="absolute animate-float-slow opacity-25 blur-[0.8px]"
              style={{
                top: f.top,
                left: f.left,
                animationDelay: f.delay,
                animationDuration: f.duration,
              }}
            >
              <ToolMark tool={tool} size={f.size} />
            </span>
          );
        })}
      </div>
      <div className="cinematic-vignette absolute inset-0" />
    </div>
  );
}
