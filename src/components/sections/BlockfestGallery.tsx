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
        <div className="mt-12 flex flex-col gap-[22px]">
          <Reveal className="ab-label ab-label--mist">{b.overheard}</Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            {b.quotes.map((q, i) => (
              <Reveal key={q} delay={i * 0.08} className="flex items-start gap-3.5">
                <span aria-hidden className="font-serif text-[64px] leading-[0.8] text-gold">
                  “
                </span>
                <blockquote className="m-0 font-serif text-[24px] font-light italic leading-[1.25] text-[#ececec] md:text-[26px]">{q}</blockquote>
              </Reveal>
            ))}
          </div>
        </div>

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
            <img src="/blockfest/before-show.jpg" alt="Festival guests gathered at the Aurabox container" />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.freshUp}</div>
          </Reveal>
          <Reveal className="ab-gcard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/blockfest/lights.jpg" alt="" aria-hidden className="absolute inset-0" style={{ filter: "blur(18px) brightness(0.55)", transform: "scale(1.15)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/blockfest/lights.jpg" alt="Aurabox machine under the stage lights" className="relative" style={{ objectFit: "contain", objectPosition: "50% 50%" }} />
            {shade}
            <div className="absolute bottom-[18px] left-[22px] font-serif text-xl italic text-ivory">{c.lights}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
