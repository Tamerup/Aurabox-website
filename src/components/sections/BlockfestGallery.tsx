"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

const shade = <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0" />;

export function BlockfestGallery() {
  const { t } = useLang();
  const b = t.blockfest;
  const c = b.captions;
  return (
    <section id="blockfest" className="ab-rule py-[130px]" aria-label={b.label}>
      <div className="ab-container">
        <Reveal className="flex max-w-[700px] flex-col gap-[18px]">
          <div className="ab-label">{b.label}</div>
          <h2 className="ab-h2">
            {b.title1} <em>{b.title2}</em>
          </h2>
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap gap-12">
          {b.stats.map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1.5">
              <div className="font-serif text-[56px] font-light leading-none text-gold">{n}</div>
              <div className="ab-label ab-label--mist">{l}</div>
            </div>
          ))}
        </Reveal>

        <div className="ab-bento mt-14">
          <Reveal className="ab-gcard ab-bento-a">
            <video src="/blockfest/queue.mp4" poster="/blockfest/queue.jpg" autoPlay muted loop playsInline aria-label="The queue at the Aurabox container at Blockfest" />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.queue}</div>
          </Reveal>
          <Reveal className="ab-gcard ab-bento-b">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/blockfest/skybox.jpg" alt="Blockfest Skybox with the BLOCKFEST sign" style={{ objectPosition: "50% 40%" }} />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.skybox}</div>
          </Reveal>
          <Reveal className="ab-gcard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/blockfest/fresh-up.jpg" alt="Guests gathered at the Aurabox container" />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.freshUp}</div>
          </Reveal>
          <Reveal className="ab-gcard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/blockfest/lights.jpg" alt="Aurabox machine under the stage lights" />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.lights}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
