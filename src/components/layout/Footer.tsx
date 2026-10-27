import Link from "next/link";
const FOOTER_LINKS = [
  { href: "#experience", label: "Experience" },
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
          <span>Tampere, Finland</span>
          <a
            href="https://www.instagram.com/aurabox.eu"
            target="_blank"
            rel="noreferrer"
            aria-label="Aurabox on Instagram"
            className="mt-2 inline-flex items-center gap-2 text-ivory transition-colors duration-300 hover:text-gold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
            @aurabox.eu
          </a>
          <Link
            href="/privacy"
            className="transition-colors duration-300 hover:text-gold"
          >
            Tietosuoja & Käyttöehdot
          </Link>
        </div>
      </div>
    </footer>
  );
}
