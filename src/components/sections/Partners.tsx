"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { PARTNER_CATEGORIES } from "@/data/partners";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Partners() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.4 });

  return (
    <section
      className="relative w-full bg-black px-6 py-32 md:px-12"
      aria-label="Trusted by"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Eyebrow>Trusted By</Eyebrow>
        <h2 className="mt-6 max-w-xl font-serif text-2xl font-light leading-tight text-ivory md:text-3xl">
          Present in the spaces where first impressions are made.
        </h2>

        <div
          ref={ref}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden bg-hairline sm:grid-cols-3"
        >
          {PARTNER_CATEGORIES.map((category, i) => (
            <div
              key={category}
              className={cn(
                "reveal-fade flex items-center justify-center bg-black px-6 py-10",
                inView && "in-view",
              )}
              style={{ ["--reveal-delay" as string]: `${i * 0.08}s` }}
            >
              <span className="font-serif text-lg tracking-[0.08em] text-mist transition-colors duration-300 hover:text-gold">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
