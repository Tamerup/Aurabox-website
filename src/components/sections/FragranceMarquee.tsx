import { Marquee } from "@/components/ui/Marquee";
import { FRAGRANCES } from "@/data/fragrances";
 
// "Parfums de Marly - Layton Exclusif" -> house + scent
const split = (name: string) => {
  const [house, ...rest] = name.split(" - ");
  return { house: house.trim(), scent: rest.join(" - ").trim() };
};
 
const HOUSES = Array.from(new Set(FRAGRANCES.map((f) => split(f.name).house)));
const SCENTS = FRAGRANCES.map((f) => split(f.name).scent);
 
export function FragranceMarquee() {
  return (
    <section
      aria-label="Fragrance houses"
      className="flex w-full flex-col gap-6 border-y border-hairline bg-black py-10 md:py-12"
    >
      <Marquee
        items={HOUSES}
        speed={42}
        render={(house) => (
          <div className="flex items-center gap-10 pr-10 md:gap-12 md:pr-12">
            <span className="whitespace-nowrap font-serif text-3xl font-light text-ivory md:text-5xl">
              {house}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
        )}
      />
      <Marquee
        items={SCENTS}
        speed={42}
        reverse
        render={(scent) => (
          <span className="whitespace-nowrap pr-10 font-label text-[11px] uppercase tracking-[0.35em] text-mist md:text-xs">
            {scent}
          </span>
        )}
      />
    </section>
  );
}
 
