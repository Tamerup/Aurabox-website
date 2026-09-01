"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  FRAGRANCES_HIM,
  FRAGRANCES_HER,
  FRAGRANCES_UNISEX,
  type Fragrance,
} from "@/data/fragrances";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "For Him", fragrances: FRAGRANCES_HIM },
  { label: "For Her", fragrances: FRAGRANCES_HER },
  { label: "Unisex", fragrances: FRAGRANCES_UNISEX },
];

export function Fragrances() {
  return (
    <section
      id="fragrances"
      className="relative w-full bg-black px-6 py-32 md:px-12"
      aria-label="Fragrances"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Eyebrow>The Fragrances</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory md:text-4xl">
          Thirteen fragrances. Infinite moments.
        </h2>
      </div>

      <div className="mx-auto mt-20 max-w-[1400px] space-y-20">
        {CATEGORIES.map(({ label, fragrances }) => (
          <div key={label}>
            <p className="mb-8 font-label text-[11px] uppercase tracking-[0.4em] text-gold">
              {label}
            </p>
            <div className="grid grid-cols-1 gap-px overflow-hidden bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {fragrances.map((f, i) => (
                <FragranceCard
                  key={f.id}
                  fragrance={f}
                  delay={(i % 3) * 0.1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FragranceCard({
  fragrance: f,
  delay,
}: {
  fragrance: Fragrance;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLElement>({ amount: 0.3 });

  return (
    <article
      ref={ref}
      className={cn(
        "reveal group relative flex min-h-[420px] flex-col justify-between bg-black p-10",
        inView && "in-view",
      )}
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative">
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-gold">
          {f.mood}
        </span>
        <h3 className="mt-5 font-serif text-3xl font-light text-ivory">
          {f.name}
        </h3>
        <p className="mt-3 font-serif text-lg italic text-mist">{f.line}</p>
      </div>

      <div className="relative mt-10 translate-y-2 space-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <NoteRow label="Top" value={f.notes.top} />
        <NoteRow label="Heart" value={f.notes.heart} />
        <NoteRow label="Base" value={f.notes.base} />
      </div>

      <span
        aria-hidden
        className="absolute bottom-8 right-10 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"
      />
    </article>
  );
}

function NoteRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-hairline pt-2 text-left">
      <span className="font-label text-[9px] uppercase tracking-[0.3em] text-mist">
        {label}
      </span>
      <span className="font-sans text-xs text-mist">{value}</span>
    </div>
  );
}