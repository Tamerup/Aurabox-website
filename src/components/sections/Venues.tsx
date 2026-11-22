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
      <img src="/blockfest/before-show.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.14] grayscale-[0.4]" />
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.4), #000 75%)" }} />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-[72px] px-6 py-[140px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <Reveal className="ab-label">{v.label}</Reveal>
          <Reveal as="h2" className="ab-h2 max-w-[900px]">
            {v.title1} <em>{v.title2}</em>
          </Reveal>
          <Reveal as="p" className="max-w-[560px] text-[17px] leading-relaxed text-[#b8b8b8]">{v.body}</Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {v.benefits.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.06} className="flex flex-col gap-3 bg-[#050505] px-[30px] py-9">
              <div className="ab-label">0{i + 1}</div>
              <div className="font-serif text-[28px] leading-[1.1]">{title}</div>
              <div className="text-sm leading-relaxed text-mist">{body}</div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <Reveal as="h2" className="m-0 text-center font-serif text-[36px] font-light md:text-[44px]">{v.modelsTitle}</Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {v.models.map((m) => (
              <Reveal
                key={m.label}
                className="flex flex-col gap-4 border border-gold/35 p-10"
              >
                <div className="ab-label">{m.label}</div>
                <div className="font-serif text-[34px] leading-[1.05] md:text-[38px]">{m.title}</div>
                <p className="text-base leading-relaxed text-[#cfcfcf]">{m.body}</p>
                <p className="mt-2 border-t border-white/[0.08] pt-4 font-serif text-lg italic text-[#b8b8b8]">{m.fit}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="text-center text-sm text-mist">{v.modelsBoth}</Reveal>
        </div>

        <Reveal className="flex flex-col items-center gap-4 border-y border-gold/25 px-6 py-14 text-center">
          <div className="ab-label">{v.custom.label}</div>
          <div className="font-serif text-[34px] font-light leading-[1.1] md:text-[44px]">{v.custom.title}</div>
          <p className="max-w-[620px] text-[17px] leading-relaxed text-[#b8b8b8]">{v.custom.body}</p>
        </Reveal>

        <div className="flex flex-col items-center gap-[22px] text-center">
          <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label={v.label}>
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
          <div className="relative h-[100px] w-full max-w-[760px]" aria-live="polite">
            {v.tabs.map(([label, line], i) => (
              <p
                key={label}
                className="absolute inset-x-0 top-0 m-0 font-serif text-[28px] font-light italic leading-[1.15] text-ivory transition-all duration-700 md:text-[36px]"
                style={{ opacity: i === active ? 1 : 0, transform: `translateY(${i === active ? 0 : 16}px)` }}
                aria-hidden={i !== active}
              >
                {line}
              </p>
            ))}
          </div>
          <a href="#contact" className="ab-btn-s">
            {v.cta} <span className="ab-dash" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
