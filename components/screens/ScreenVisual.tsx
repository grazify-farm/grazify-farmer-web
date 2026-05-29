import Image from "next/image";

const PORTRAIT_W = 1419;
const PORTRAIT_H = 2796;
const LEFT_W     = 1857;
const LEFT_H     = 3096;

type ScreenVisualProps = {
  portraitSrc?: string;
  leftSrc?: string;
  alt: string;
  preferred?: "portrait" | "left";
  hoverSwap?: boolean;
  glow?: boolean;
  maxWidth?: number;
  className?: string;
  compact?: boolean;
  priority?: boolean;
};

export default function ScreenVisual({
  portraitSrc,
  leftSrc,
  alt,
  preferred = "left",
  hoverSwap = false,
  glow = false,
  maxWidth = 280,
  className = "",
  compact = false,
  priority = false,
}: ScreenVisualProps) {
  const primaryIsLeft = preferred === "left";
  const primarySrc    = primaryIsLeft ? (leftSrc ?? portraitSrc) : (portraitSrc ?? leftSrc);
  const secondarySrc  = primaryIsLeft ? portraitSrc              : leftSrc;
  const primaryW      = primaryIsLeft ? LEFT_W : PORTRAIT_W;
  const primaryH      = primaryIsLeft ? LEFT_H : PORTRAIT_H;
  const secondaryW    = primaryIsLeft ? PORTRAIT_W : LEFT_W;
  const secondaryH    = primaryIsLeft ? PORTRAIT_H : LEFT_H;

  const canSwap =
    hoverSwap && !!primarySrc && !!secondarySrc && primarySrc !== secondarySrc;

  if (!primarySrc) return null;

  const sizes = `(max-width: 640px) 80vw, ${maxWidth}px`;

  return (
    <div
      className={[
        "screen-visual",
        compact ? "screen-visual-compact" : "",
        "flex-shrink-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ maxWidth, width: "100%" }}
    >
      {glow && (
        <div
          className="screen-glow absolute inset-0 bg-[#25D366] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      <Image
        src={primarySrc}
        alt={alt}
        width={primaryW}
        height={primaryH}
        sizes={sizes}
        priority={priority}
        className={[
          "screen-image-layer",
          canSwap ? "screen-image-primary" : "screen-image-solo",
          "relative block w-full h-auto",
        ].join(" ")}
        style={{ borderRadius: "2.5rem" }}
      />

      {canSwap && secondarySrc && (
        <Image
          src={secondarySrc}
          alt=""
          aria-hidden="true"
          width={secondaryW}
          height={secondaryH}
          sizes={sizes}
          loading="lazy"
          className="screen-image-layer screen-image-secondary absolute top-0 left-0 w-full h-auto"
          style={{ borderRadius: "2.5rem" }}
        />
      )}
    </div>
  );
}
