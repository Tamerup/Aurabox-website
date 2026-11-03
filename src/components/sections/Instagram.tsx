"use client";

import { Marquee } from "@/components/ui/Marquee";
import { useLang } from "@/i18n/LanguageContext";

export function Instagram() {
  const { t } = useLang();
  return (
    <section className="ab-rule border-b border-white/[0.08] py-[34px]" aria-label="Instagram">
      <a href="https://www.instagram.com/aurabox.eu" target="_blank" rel="noreferrer" className="block" aria-label={t.contact.igLabel}>
        <Marquee
          items={t.instagram}
          speed={45}
          render={(line) => (
            <div className="flex items-center gap-10 whitespace-nowrap pr-10">
              <span className="font-serif text-[40px] font-light italic text-[#e8e8e8]">{line}</span>
              <span className="font-label text-[10px] uppercase tracking-[0.35em] text-gold">@aurabox.eu</span>
            </div>
          )}
        />
      </a>
    </section>
  );
}
