"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progress (0–1) of scrolling through a tall section whose child stage is
 * `position: sticky`. 0 when the section top reaches the viewport top,
 * 1 when the section bottom reaches the viewport bottom.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      setProgress((prev) => (Math.abs(prev - p) > 0.0005 ? p : prev));
      setWidth(el.clientWidth);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress, width };
}
