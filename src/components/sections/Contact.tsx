"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.5 });

  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-black px-6 py-32 text-center"
      aria-label="Contact"
    >
      <div ref={ref} className={cn("reveal flex flex-col items-center", inView && "in-view")}>
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-8 max-w-xl font-serif text-4xl font-light leading-tight text-ivory md:text-5xl">
          Let&rsquo;s bring Aurabox to your space.
        </h2>

        <a
          href="mailto:auraboxoy@gmail.com"
          className="mt-10 font-serif text-2xl italic text-gold transition-colors duration-300 hover:text-ivory"
        >
          auraboxoy@gmail.com
        </a>

        <p className="font-label mt-8 text-[11px] uppercase tracking-[0.4em] text-mist">
          Tampere, Finland
        </p>
      </div>
    </section>
  );
}
