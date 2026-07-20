"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LOCATIONS } from "@/data/locations";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Locations() {
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const active = LOCATIONS.find((l) => l.id === activeId) ?? LOCATIONS[0];

  return (
    <section
      id="locations"
      className="relative w-full bg-black px-6 py-32 md:px-12"
      aria-label="Locations"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Eyebrow>Locations</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory md:text-4xl">
          Present where moments happen.
        </h2>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative mx-auto aspect-[3/4] w-full max-w-sm rounded-[24px] border border-hairline bg-charcoal/40"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-[24px] bg-[radial-gradient(90%_60%_at_50%_10%,rgba(212,175,55,0.08),transparent)]"
          />
          <div className="absolute inset-6 border border-dashed border-white/10" />

          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              onMouseEnter={() => setActiveId(loc.id)}
              className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              aria-label={`${loc.city} — ${loc.venue} — ${loc.status === "live" ? "live now" : "coming soon"}`}
              aria-pressed={activeId === loc.id}
            >
              <span
                className={cn(
                  "block h-2 w-2 rounded-full transition-all duration-300",
                  loc.status === "live" ? "bg-gold" : "bg-mist/50",
                  activeId === loc.id && "scale-[1.8]",
                )}
              />
              {loc.status === "live" && (
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/60" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Detail + list */}
        <div className="flex flex-col gap-10 text-center md:text-left">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="border-l-0 pl-0 md:border-l md:border-gold/40 md:pl-8"
          >
            <span
              className={cn(
                "font-label inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em]",
                active.status === "live" ? "text-gold" : "text-mist",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  active.status === "live" ? "bg-gold" : "bg-mist/60",
                )}
              />
              {active.status === "live" ? "Live now" : "Opening soon"}
            </span>
            <h3 className="mt-4 font-serif text-3xl font-light text-ivory">
              {active.city}
            </h3>
            <p className="mt-2 font-serif text-lg italic text-mist">
              {active.venue}
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden bg-hairline sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <li key={loc.id} className="bg-black">
                <button
                  type="button"
                  onClick={() => setActiveId(loc.id)}
                  className={cn(
                    "font-label flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                    activeId === loc.id
                      ? "text-gold"
                      : "text-mist hover:text-ivory",
                  )}
                >
                  <span>{loc.city}</span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      loc.status === "live" ? "bg-gold" : "bg-mist/40",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
