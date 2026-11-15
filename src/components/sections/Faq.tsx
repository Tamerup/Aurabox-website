"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="ab-rule px-6 py-[130px]" aria-label={t.faq.label}>
      <div className="ab-split mx-auto grid max-w-[1100px] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-[72px]">
        <div className="flex flex-col gap-5">
          <Reveal className="ab-label">{t.faq.label}</Reveal>
          <Reveal as="h2" className="ab-h2">{t.faq.title}</Reveal>
        </div>
        <div className="flex flex-col">
          {t.faq.items.map(([q, a]) => (
            <details key={q} className="ab-faq group border-t border-white/10">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-[22px] font-serif text-2xl">
                {q}
                <span aria-hidden className="text-[22px] text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mb-6 max-w-[620px] text-[15px] leading-relaxed text-[#b8b8b8]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
