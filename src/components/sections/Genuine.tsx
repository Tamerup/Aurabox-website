"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function Genuine() {
  const { t } = useLang();
  const g = t.genuine;
  return (
    <section className="ab-rule px-6 py-[140px]" aria-label={g.label}>
      <div className="ab-split mx-auto grid max-w-[1400px] grid-cols-2 items-end gap-[72px]">
        <div className="flex flex-col gap-6">
          <Reveal className="ab-label">{g.label}</Reveal>
          <Reveal as="h2" className="m-0 font-serif text-[48px] font-light leading-[0.98] md:text-[84px]">
            {g.title1}
            <br />
            <em className="text-gold">{g.title2}</em>
          </Reveal>
          <Reveal as="p" className="ab-lead max-w-[440px]">{g.body}</Reveal>
        </div>
        <div className="flex flex-col">
          {g.facts.map((f, i) => (
            <Reveal key={i} delay={i * 0.08} className="grid grid-cols-[150px_minmax(0,1fr)] items-baseline gap-6 border-t border-white/[0.08] py-7">
              <div className="ab-label">{f.label}</div>
              <div className="flex flex-col gap-1.5">
                <div className="font-serif text-[26px]">{f.title}</div>
                <div className="text-sm leading-relaxed text-mist">{f.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
