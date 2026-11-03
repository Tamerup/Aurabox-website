"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

type Item = { src: string; poster?: string; video?: boolean; cap: keyof ReturnType<typeof useLang>["t"]["blockfest"]["captions"]; alt: string };

const ITEMS: Item[] = [
  { src: "/blockfest/queue.mp4", poster: "/blockfest/queue.jpg", video: true, cap: "queue", alt: "The queue at the Aurabox container" },
  { src: "/blockfest/skybox.jpg", cap: "skybox", alt: "Blockfest Skybox with Aurabox" },
  { src: "/blockfest/lights.jpg", cap: "lights", alt: "Aurabox under the stage lights" },
  { src: "/blockfest/fresh-up.jpg", cap: "freshUp", alt: "Guests at the Fresh Up container" },
  { src: "/blockfest/after-dark.mp4", poster: "/blockfest/after-dark.jpg", video: true, cap: "afterDark", alt: "Fresh Up container in the evening" },
  { src: "/blockfest/mirror.jpg", cap: "mirror", alt: "Aurabox next to the mirror" },
  { src: "/blockfest/stage.jpg", cap: "stage", alt: "Aurabox by the main stage" },
  { src: "/blockfest/before-show.jpg", cap: "beforeShow", alt: "Guests around the Aurabox container" },
];

export function BlockfestGallery() {
  const { t } = useLang();
  const b = t.blockfest;
  return (
    <section id="blockfest" className="ab-rule py-[130px]" aria-label={b.label}>
      <div className="ab-container">
        <Reveal className="flex max-w-[700px] flex-col gap-[18px]">
          <div className="ab-label">{b.label}</div>
          <h2 className="ab-h2">
            {b.title1} <em>{b.title2}</em>
          </h2>
        </Reveal>
      </div>
      <Marquee
        className="mt-[60px]"
        items={ITEMS}
        speed={70}
        render={(it) => (
          <div className="ab-gcard">
            {it.video ? (
              <video src={it.src} poster={it.poster} autoPlay muted loop playsInline aria-label={it.alt} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.src} alt={it.alt} loading="lazy" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <div className="absolute bottom-4 left-5 font-serif text-lg italic text-ivory">{b.captions[it.cap]}</div>
          </div>
        )}
      />
    </section>
  );
}
