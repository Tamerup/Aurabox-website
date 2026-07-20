"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: {
  amount?: number;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { amount = 0.3, once = true } = options ?? {};

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount, once]);

  return { ref, inView };
}
