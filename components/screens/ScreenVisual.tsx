/**
 * ScreenVisual
 *
 * Displays a clean iPhone-mockup screenshot with an optional hover swap
 * between portrait (straight) and left-tilted (3-D perspective) variants.
 *
 * Animation system lives in globals.css (.screen-visual, .screen-image-*).
 * Both images are always mounted — crossfade is pure CSS opacity.
 * No JS state changes on hover → no flicker, no layout shift.
 *
 * Rules:
 *  - Phone frame is already baked into the PNG — do NOT wrap in PhoneMockup.
 *  - Never overlay text on the image.
 *  - Primary image sets the container height; secondary is an absolute overlay.
 */

interface ScreenVisualProps {
  portraitSrc?: string;
  leftSrc?: string;
  alt: string;
  /** Which variant to show by default */
  preferred?: "portrait" | "left";
  /** Swap to the other variant on hover */
  hoverSwap?: boolean;
  /** Pulse green glow halo behind the phone */
  glow?: boolean;
  maxWidth?: number;
  className?: string;
  /**
   * Use a subtler hover lift — pass this inside cards that already
   * translate on hover so the image doesn't double-lift.
   */
  compact?: boolean;
  /**
   * img loading attribute.
   * Pass "eager" for the hero (above-the-fold) image.
   * All other instances default to "lazy".
   */
  loading?: "eager" | "lazy";
}

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
  loading = "lazy",
}: ScreenVisualProps) {
  const primarySrc =
    preferred === "left" ? (leftSrc ?? portraitSrc) : (portraitSrc ?? leftSrc);
  const secondarySrc = preferred === "left" ? portraitSrc : leftSrc;

  const canSwap =
    hoverSwap && !!primarySrc && !!secondarySrc && primarySrc !== secondarySrc;

  if (!primarySrc) return null;

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
      {/*
        Green glow halo.
        Opacity and scale are animated by .screen-glow / .screen-visual:hover .screen-glow
        in globals.css — no JS needed, no conflict with CSS animation.
      */}
      {glow && (
        <div
          className="screen-glow absolute inset-0 bg-[#25D366] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/*
        Primary image — always in the DOM.
        Establishes container height (position: relative, display: block).
        On hover (when canSwap): fades out via .screen-image-primary rule.
        On hover (when !canSwap): shadow deepens via .screen-image-solo rule.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={primarySrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={[
          "screen-image-layer",
          canSwap ? "screen-image-primary" : "screen-image-solo",
          "relative block w-full h-auto",
        ].join(" ")}
        style={{ borderRadius: "2.5rem" }}
      />

      {/*
        Secondary image — always in the DOM when canSwap is true.
        Absolute overlay; does NOT affect container dimensions.
        On hover: fades in via .screen-image-secondary rule.
        Loaded lazily — it's only shown on hover, never above the fold.
      */}
      {canSwap && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={secondarySrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="screen-image-layer screen-image-secondary absolute top-0 left-0 w-full h-auto"
          style={{ borderRadius: "2.5rem" }}
        />
      )}
    </div>
  );
}
