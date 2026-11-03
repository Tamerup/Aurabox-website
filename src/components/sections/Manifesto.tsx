"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function Manifesto() {
  const { t } = useLang();
  const [a, b, c, d] = t.manifesto;
  const line = "m-0 font-serif text-[48px] font-light leading-[1.04] md:text-[84px]";
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-[140px] text-center" aria-label="Manifesto">
      <Reveal as="p" className={line}>{a}</Reveal>
      <Reveal as="p" className={line} delay={0.1}>{b}</Reveal>
      <Reveal as="p" className={`${line} italic text-gold`} delay={0.2}>{c}</Reveal>
      <Reveal as="p" className="ab-label ab-label--mist mt-12" delay={0.3}>{d}</Reveal>
    </section>
  );
}
