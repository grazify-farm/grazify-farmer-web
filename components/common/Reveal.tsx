"use client";

/**
 * Reveal
 *
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * When the element enters the viewport it transitions from
 * opacity-0 / translateY-28 to opacity-1 / translateY-0.
 *
 * CSS lives in globals.css (.reveal / .reveal-visible).
 * prefers-reduced-motion is respected there.
 *
 * Usage:
 *   <Reveal delay={160}>
 *     <SomeCard />
 *   </Reveal>
 *
 * Inside a CSS grid the Reveal wrapper div becomes the grid cell —
 * pass className for any col-span / layout classes needed on that cell.
 */

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Extra classes applied to the wrapper div (e.g. grid col-span) */
  className?: string;
  /**
   * Transition delay in ms.
   * Use increasing multiples (0, 80, 160 …) to stagger card grids.
   */
  delay?: number;
  /**
   * Animate only once — element stays visible after first reveal.
   * Default: true.
   */
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
        // Trigger slightly before the element fully enters the viewport
        // so the animation is already running when the user sees it.
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
