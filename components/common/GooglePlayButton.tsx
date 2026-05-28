/**
 * GooglePlayButton
 *
 * Single reusable component for every Google Play CTA on the site.
 * All variants share the same GraziLink green pill style so the UI
 * feels consistent from Navbar to Footer.
 *
 * The real multicolour Google Play icon is placed inside a small white
 * circle so its blue/green/red/yellow colours are always visible against
 * the green background — no brightness/invert filter is applied.
 *
 * variant="navbar"  — compact, single-line "Download App"
 * variant="hero"    — prominent, stacked "Get it on / Google Play"
 * variant="footer"  — medium, single-line "Download App"
 */

import { SITE } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";

type GooglePlayButtonVariant = "navbar" | "hero" | "footer";

interface GooglePlayButtonProps {
  variant?: GooglePlayButtonVariant;
  /** Override the button label (ignored for hero variant which always stacks) */
  label?: string;
  className?: string;
}

/* ─── Per-variant size tokens ─────────────────────── */
const cfg = {
  navbar: {
    outer:   "px-5 py-2.5 gap-2 text-sm",
    circle:  "w-6 h-6 p-[3px]",
    icon:    "w-[16px] h-[16px]",
  },
  hero: {
    outer:   "px-6 py-3.5 gap-3 text-base",
    circle:  "w-9 h-9 p-[5px]",
    icon:    "w-[22px] h-[22px]",
  },
  footer: {
    outer:   "px-5 py-2.5 gap-2.5 text-sm",
    circle:  "w-[28px] h-[28px] p-[4px]",
    icon:    "w-[18px] h-[18px]",
  },
} as const;

export default function GooglePlayButton({
  variant = "hero",
  label,
  className = "",
}: GooglePlayButtonProps) {
  const { outer, circle, icon } = cfg[variant];
  const defaultLabel = variant === "hero" ? undefined : "Download App";
  const displayLabel = label ?? defaultLabel;

  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download GraziLink on Google Play"
      className={[
        "btn-shine",
        "inline-flex items-center justify-center",
        "bg-[#25D366] text-white rounded-full font-bold",
        "shadow-lg hover:bg-[#1dc55e] hover:shadow-xl",
        "hover:-translate-y-0.5 active:scale-95",
        "transition-all duration-300",
        outer,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/*
        White circle behind the icon — ensures all four colours of the
        Google Play icon (blue, green, red, yellow) are clearly visible
        on the green button without any CSS filter tricks.
      */}
      <span
        className={`bg-white rounded-full flex-shrink-0 flex items-center justify-center ${circle}`}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.logo.playStoreIcon}
          alt=""
          className={`${icon} object-contain`}
        />
      </span>

      {variant === "hero" ? (
        /* Stacked "Get it on / Google Play" */
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-normal text-white/75 tracking-wide mb-0.5">
            Get it on
          </span>
          <span className="font-bold text-[17px] tracking-tight">Google Play</span>
        </span>
      ) : (
        /* Single-line label for navbar / footer */
        <span className="font-semibold">{displayLabel}</span>
      )}
    </a>
  );
}
