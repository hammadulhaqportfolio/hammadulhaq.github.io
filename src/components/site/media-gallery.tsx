import { useEffect, useState } from "react";

type Ratio = "video" | "portrait" | "square";

const ratioClass: Record<Ratio, string> = {
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function MediaTile({
  src,
  alt,
  ratio = "video",
  onOpen,
}: {
  src: string;
  alt: string;
  ratio?: Ratio;
  onOpen?: (src: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(src)}
      className={`group relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card-soft transition-all duration-500 hover:z-20 hover:-translate-y-1 hover:scale-[1.06] hover:shadow-sky-lg ${ratioClass[ratio]}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-sky opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
    </button>
  );
}

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-foreground/70 p-4 backdrop-blur-md"
    >
      <img
        src={src}
        alt="Portfolio piece shown full size"
        className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-sky-lg"
      />
    </div>
  );
}

export function useLightbox() {
  const [src, setSrc] = useState<string | null>(null);
  return { src, open: setSrc, close: () => setSrc(null) };
}
