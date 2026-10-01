"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Scroll-Fortschritt durch eine hohe Sektion mit Sticky-Bühne: 0 am Anfang, 1 wenn die Bühne endet.
 */
export function useStageProgress(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const next = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      setP((prev) => (Math.abs(prev - next) > 0.0005 ? next : prev));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return p;
}

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
/** Teilbereich [a,b] eines Fortschritts auf 0..1 abbilden. */
export const range = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
