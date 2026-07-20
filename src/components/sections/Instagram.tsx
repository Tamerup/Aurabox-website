"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const TILES = [
  { caption: "Before the meeting.", tone: "160deg, #1c1812, #000 70%" },
  { caption: "After hours.", tone: "200deg, #171310, #000 70%" },
  { caption: "The last spray.", tone: "120deg, #1a1611, #000 70%" },
  { caption: "Gate 14.", tone: "180deg, #16130f, #000 70%" },
  { caption: "One touch.", tone: "140deg, #191510, #000 70%" },
  { caption: "Still here.", tone: "220deg, #151210, #000 70%" },
];

export function Instagram() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.3 });

  return (
    <section
      className="relative w-full bg-black px-6 py-32 md:px-12"
      aria-label="Aurabox on Instagram"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Eyebrow>@aurabox.eu</Eyebrow>
        <h2 className="mt-6 max-w-xl font-serif text-2xl font-light leading-tight text-ivory md:text-3xl">
          Feel The Luxury.
        </h2>

        <div
          ref={ref}
          className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden bg-hairline sm:grid-cols-3"
        >
          {TILES.map((tile, i) => (
            <div
              key={tile.caption}
              className={cn(
                "reveal-fade group relative aspect-square overflow-hidden bg-black",
                inView && "in-view",
              )}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 0.08}s` }}
            >
              <div
                className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                style={{ background: `linear-gradient(${tile.tone})` }}
              />
              <div className="absolute inset-0 flex items-end bg-black/0 p-5 opacity-0 transition-all duration-500 group-hover:bg-black/40 group-hover:opacity-100">
                <span className="font-serif text-sm italic text-ivory">
                  {tile.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="font-label mt-14 text-[11px] uppercase tracking-[0.4em] text-mist">
          Follow @aurabox.eu
        </p>
      </div>
    </section>
  );
}
