"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const LINES = ["There is always", "a moment", "before", "the moment."];

export function Manifesto() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.6 });

  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center bg-black px-6 py-32"
      aria-label="Manifesto"
    >
      <div
        ref={ref}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <div className="font-serif text-[11vw] font-light leading-[1.05] text-ivory sm:text-[8vw] md:text-[64px] lg:text-[76px]">
          {LINES.map((line, i) => (
            <div
              key={line}
              className={cn(
                "reveal",
                inView && "in-view",
                i === LINES.length - 1 ? "italic text-gold" : "",
              )}
              style={{ ["--reveal-delay" as string]: `${i * 0.18}s` }}
            >
              {line}
            </div>
          ))}
        </div>

        <p
          className={cn(
            "reveal-fade mt-16 font-label text-[11px] uppercase tracking-[0.4em] text-mist",
            inView && "in-view",
          )}
          style={{ ["--reveal-delay" as string]: "0.9s" }}
        >
          Aurabox exists for that moment.
        </p>
      </div>
    </section>
  );
}
