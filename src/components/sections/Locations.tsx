import { Eyebrow } from "@/components/ui/Eyebrow";

export function Locations() {
  return (
    <section
      id="locations"
      className="relative w-full bg-black px-6 py-32 md:px-12"
      aria-label="Locations"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Eyebrow>Locations</Eyebrow>
        <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-ivory md:text-4xl">
          Coming soon.
        </h2>
        <p className="mt-6 font-serif text-lg italic text-mist">
          Tampere, Finland · 2026
        </p>
      </div>
    </section>
  );
}