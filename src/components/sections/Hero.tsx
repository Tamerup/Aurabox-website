import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-black"
      aria-label="Aurabox — Feel The Luxury"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,#151312_0%,#000000_65%)]" />
        <div
          className="animate-drift absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_70%,#000_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="animate-fade-in font-serif text-sm tracking-[0.55em] text-gold opacity-0 [animation-delay:0.1s] md:text-base">
        AURABOX
        </span>

        <h1 className="animate-fade-up mt-8 font-serif text-[13vw] font-light leading-[0.95] text-ivory opacity-0 [animation-delay:0.15s] sm:text-[9vw] md:text-[6.5vw] lg:text-[88px]">
          Feel The Luxury.
        </h1>

        <p className="animate-fade-up mt-7 font-serif text-lg italic text-mist opacity-0 [animation-delay:0.8s] md:text-xl">
          Luxury. Exactly when it matters.
        </p>

        <div className="animate-fade-up mt-14 opacity-0 [animation-delay:1.3s]">
          <Button href="#locations" variant="outline">
            Find Aurabox
          </Button>
        </div>
      </div>

      <div
        className="animate-fade-in absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 opacity-0 [animation-delay:2s]"
        aria-hidden
      >
        <span className="h-12 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
        <span className="font-label text-[9px] uppercase tracking-[0.4em] text-mist">
          Scroll
        </span>
      </div>
    </section>
  );
}
