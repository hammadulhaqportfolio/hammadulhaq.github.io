import { useEffect, useRef } from "react";

export function CursorAtmosphere() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
        document.documentElement.style.setProperty(
          "--parallax-x",
          `${(event.clientX / window.innerWidth - 0.5) * 18}px`,
        );
        document.documentElement.style.setProperty(
          "--parallax-y",
          `${(event.clientY / window.innerHeight - 0.5) * 18}px`,
        );
        if (glowRef.current) glowRef.current.dataset.visible = "true";
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="cursor-atmosphere" />;
}