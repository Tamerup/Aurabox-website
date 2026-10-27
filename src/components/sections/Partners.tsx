import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";
import { PARTNER_CATEGORIES } from "@/data/partners";
 
// Rullaava nauha vasta kun nimiä on tarpeeksi
const MARQUEE_MIN = 4;
 
function PartnerTile({ name }: { name: string }) {
  return (
    <div className="flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-hairline px-8 md:h-24 md:min-w-[240px]">
      <span className="whitespace-nowrap font-serif text-lg uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:text-gold md:text-2xl">
        {name}
      </span>
    </div>
  );
}
 
export function Partners() {
  const useMarquee = PARTNER_CATEGORIES.length >= MARQUEE_MIN;
 
  return (
    <section
      className="relative w-full bg-black py-24 md:py-32"
      aria-label="Trusted by"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 text-center md:px-12">
        <Eyebrow>Trusted By</Eyebrow>
      </div>
 
      {useMarquee ? (
        <Marquee
          className="mt-12"
          items={PARTNER_CATEGORIES}
          speed={28}
          render={(name) => (
            <div className="mr-4 md:mr-6">
              <PartnerTile name={name} />
            </div>
          )}
        />
      ) : (
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4 px-6 md:gap-6">
          {PARTNER_CATEGORIES.map((name) => (
            <PartnerTile key={name} name={name} />
          ))}
        </div>
      )}
    </section>
  );
}
 
