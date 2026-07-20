"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Machine() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.3 });

  return (
    <section
      id="machine"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-32"
      aria-label="The Machine"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[160px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Eyebrow>The Machine</Eyebrow>
        <h2 className="mt-6 max-w-xl font-serif text-3xl font-light leading-tight text-ivory md:text-4xl">
          Engineered like a jewel. Not a dispenser.
        </h2>
      </div>

      <div
        ref={ref}
        className={cn(
          "reveal relative z-10 mt-20 flex items-end justify-center",
          inView && "in-view",
        )}
      >
        <MachineGlyph />
      </div>

      <p
        className={cn(
          "reveal-fade relative z-10 mt-16 max-w-md text-center font-serif text-lg italic text-mist",
          inView && "in-view",
        )}
        style={{ ["--reveal-delay" as string]: "0.5s" }}
      >
        Brushed edges. Silent motion. One touch between you and the moment.
      </p>
    </section>
  );
}

function MachineGlyph() {
  return (
    <div className="relative h-[62vh] max-h-[560px] w-[min(48vw,320px)]">
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-[#161616] via-[#0c0c0c] to-black shadow-[0_0_120px_rgba(212,175,55,0.08)] ring-1 ring-white/[0.06]" />

      <div className="absolute inset-x-6 top-8 bottom-24 overflow-hidden rounded-[16px] bg-black ring-1 ring-white/[0.05]">
        <div
          className="animate-glow absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(212,175,55,0.18) 0%, transparent 45%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-4xl italic tracking-wide text-gold/80">
            A
          </span>
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="absolute inset-x-10 bottom-10 h-2 rounded-full bg-black ring-1 ring-white/10" />
      <div className="absolute inset-x-16 bottom-14 h-px bg-gold/40" />

      <div
        aria-hidden
        className="absolute -inset-x-10 -bottom-10 h-24 rounded-full bg-gold/10 blur-3xl"
      />
    </div>
  );
}
