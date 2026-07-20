"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EXPERIENCES } from "@/data/experiences";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Subtle scroll-linked parallax on the ghost numerals, powered by GSAP +
  // ScrollTrigger. Loaded lazily on the client so it never blocks the
  // critical rendering path.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        panelRefs.current.forEach((panel) => {
          const numeral = panel?.querySelector("[data-parallax-numeral]");
          if (!numeral) return;
          gsap.to(numeral, {
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-black"
      aria-label="The Experience"
    >
      <div className="flex flex-col items-center px-6 pb-8 pt-28 text-center">
        <Eyebrow>The Experience</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory md:text-4xl">
          Not a fragrance. A feeling, dispensed.
        </h2>
      </div>

      {EXPERIENCES.map((exp, i) => (
        <ExperiencePanel
          key={exp.id}
          exp={exp}
          index={i}
          total={EXPERIENCES.length}
          setRef={(el) => {
            panelRefs.current[i] = el;
          }}
        />
      ))}
    </section>
  );
}

function ExperiencePanel({
  exp,
  index,
  total,
  setRef,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
  total: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.15 });
  return (
    <div
      ref={(el) => {
        setRef(el);
        ref.current = el;
      }}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden border-t border-hairline px-6"
      style={{ background: exp.tone }}
    >
      <span
        data-parallax-numeral
        aria-hidden
        className="pointer-events-none absolute -bottom-[8vw] left-1/2 -translate-x-1/2 select-none font-serif text-[42vw] font-light leading-none text-white/[0.025] md:text-[26vw]"
      >
        {exp.number}
      </span>

      <div
        className={cn(
          "reveal relative z-10 flex max-w-3xl flex-col items-center text-center",
          inView && "in-view",
        )}
      >
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-gold">
          {exp.number} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="mt-6 font-serif text-[10vw] font-light leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
          {exp.title}
        </h3>
        <p className="mt-8 font-serif text-xl italic text-mist md:text-2xl">
          {exp.line}
        </p>
      </div>

      {index !== total - 1 && (
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
      )}
    </div>
  );
}
