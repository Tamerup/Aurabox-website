"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FRAGRANCES, type Fragrance } from "@/data/fragrances";
import { useLang } from "@/i18n/LanguageContext";

type Filter = "all" | Fragrance["category"];

const TONES = ["#4a3320", "#1f2b3d", "#5a3a1e", "#25384a", "#2a2a2a", "#5b3b26", "#6a5230", "#5a2430", "#4a1e26", "#4a3f35", "#6b2a22", "#2d4450", "#3a4040"];

const split = (name: string) => {
  const [house, ...rest] = name.split(" - ");
  return { house: house.trim(), scent: rest.join(" - ").trim() };
};
const monogram = (house: string) =>
  house
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

export function Fragrances() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const rail = useRef<HTMLDivElement>(null);
  const f = t.fragrances;

  const shown = FRAGRANCES.map((fr, i) => ({ fr, tone: TONES[i % TONES.length] })).filter(
    ({ fr }) => filter === "all" || fr.category === filter,
  );
  const tabs: [Filter, string][] = [
    ["all", f.tabs.all],
    ["him", f.tabs.him],
    ["her", f.tabs.her],
    ["unisex", f.tabs.unisex],
  ];
  const groupLabel = { him: f.tabs.him, her: f.tabs.her, unisex: f.tabs.unisex };

  const pick = (v: Filter) => {
    setFilter(v);
    rail.current?.scrollTo({ left: 0 });
  };
  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 640, behavior: "smooth" });

  return (
    <section id="fragrances" className="ab-rule py-[130px]" aria-label={f.label}>
      <div className="ab-container flex flex-wrap items-end justify-between gap-8">
        <Reveal className="flex max-w-[680px] flex-col gap-[18px]">
          <div className="ab-label">{f.label}</div>
          <h2 className="ab-h2">
            {f.title1} <em>{f.title2}</em>
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-2.5">
          {tabs.map(([v, label]) => (
            <button key={v} type="button" className="ab-pill" aria-pressed={filter === v} onClick={() => pick(v)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div ref={rail} className="ab-rail mt-14">
        {shown.map(({ fr, tone }) => {
          const { house, scent } = split(fr.name);
          return (
            <article key={fr.id} className="ab-card">
              <div className="ab-card-art" aria-hidden>
                <div className="flex flex-col items-center">
                  <div className="h-6 w-[30px] rounded-[3px]" style={{ background: "linear-gradient(90deg, #8a6f2a, #e6cd7a, #8a6f2a)" }} />
                  <div className="h-[7px] w-3.5 bg-[#2a251c]" />
                  <div
                    className="flex h-[120px] w-[92px] items-center justify-center rounded-lg border border-white/20"
                    style={{ background: `linear-gradient(100deg, ${tone} 0%, ${tone} 55%, rgba(255,255,255,0.18) 62%, ${tone} 70%)` }}
                  >
                    <div className="w-14 bg-black/80 py-1.5 text-center font-serif text-[10px] tracking-[0.18em] text-[#eee]">
                      {monogram(house)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-label flex justify-between gap-2 text-[9px] uppercase tracking-[0.35em]">
                <span className="text-gold">{fr.mood}</span>
                <span className="text-mist">{groupLabel[fr.category]}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="font-label text-[10px] uppercase tracking-[0.25em] text-[#b8b8b8]">{house}</div>
                <h3 className="m-0 font-serif text-[30px] font-normal leading-[1.05]">{scent}</h3>
                <p className="mt-1 font-serif text-lg italic text-[#b8b8b8]">{lang === "fi" ? fr.lineFi : fr.line}</p>
              </div>
              <div className="flex flex-col gap-1.5 border-t border-white/[0.08] pt-3.5 text-xs leading-normal text-mist">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold">{f.notes.top}</span> · {fr.notes.top}
                </div>
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold">{f.notes.heart}</span> · {fr.notes.heart}
                </div>
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold">{f.notes.base}</span> · {fr.notes.base}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="ab-container mt-4 flex items-center justify-between gap-4">
        <span className="ab-label ab-label--mist">
          {shown.length} {f.count}
        </span>
        <div className="flex gap-2.5">
          <button type="button" className="ab-arrow" aria-label={f.prev} onClick={() => scroll(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="ab-arrow ab-arrow--gold" aria-label={f.next} onClick={() => scroll(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
