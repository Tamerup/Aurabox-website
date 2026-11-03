"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function Venues() {
  const { t } = useLang();
  const v = t.venues;
  const [active, setActive] = useState(0);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    if (picked) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % v.tabs.length), 3600);
    return () => window.clearInterval(id);
  }, [picked, v.tabs.length]);

  return (
    <section id="locations" className="ab-rule relative overflow-hidden" aria-label={v.label}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/blockfest/before-show.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale-[0.4]" />
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5), #000 78%)" }} />
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-[26px] px-6 py-[150px] text-center">
        <Reveal className="ab-label">{v.label}</Reveal>
        <Reveal as="h2" className="ab-h2">
          {v.title1} <em>{v.title2}</em>
        </Reveal>
        <Reveal as="p" className="max-w-[560px] text-[17px] leading-relaxed text-[#b8b8b8]">{v.body}</Reveal>
        <div className="mt-[18px] flex flex-wrap justify-center gap-2.5" role="tablist" aria-label={v.label}>
          {v.tabs.map(([label], i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={i === active}
              className="ab-pill"
              onClick={() => {
                setActive(i);
                setPicked(true);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="relative h-[110px] w-full max-w-[760px]" aria-live="polite">
          {v.tabs.map(([label, line], i) => (
            <p
              key={label}
              className="absolute inset-x-0 top-0 m-0 font-serif text-[30px] font-light italic leading-[1.15] text-ivory transition-all duration-700 md:text-[40px]"
              style={{ opacity: i === active ? 1 : 0, transform: `translateY(${i === active ? 0 : 16}px)` }}
              aria-hidden={i !== active}
            >
              {line}
            </p>
          ))}
        </div>
        <p className="ab-label ab-label--mist">{v.foot}</p>
        <a href="#contact" className="ab-btn-o mt-3.5">
          {v.cta} <span className="ab-dash" aria-hidden />
        </a>
      </div>
    </section>
  );
}
