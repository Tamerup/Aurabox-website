import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#machine", label: "Machine" },
  { href: "#fragrances", label: "Fragrances" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-hairline bg-black px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link
            href="#top"
            className="font-serif text-base tracking-[0.5em] text-ivory"
          >
            AURABOX
          </Link>
          <p className="font-serif text-sm italic text-mist">
            Feel The Luxury.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label text-[10px] uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="font-label flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist md:items-end">
          <span>&copy; {year} Aurabox. All rights reserved.</span>
          <span>Helsinki, Finland</span>
        </div>
      </div>
    </footer>
  );
}
