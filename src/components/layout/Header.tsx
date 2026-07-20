"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#fragrances", label: "Fragrances" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-black/90 py-4 backdrop-blur-md border-b border-hairline"
          : "bg-transparent py-7 border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
        <Link
          href="#top"
          className="font-serif text-lg tracking-[0.5em] text-ivory"
          aria-label="Aurabox — home"
        >
          AURABOX
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label text-[10px] font-medium uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#locations"
          className="font-label hidden border border-gold/50 px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-gold transition-all duration-300 hover:bg-gold hover:text-black md:inline-flex"
        >
          Find Aurabox
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-end gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={cn(
              "h-px bg-ivory transition-all duration-300",
              open ? "w-6 translate-y-[3px] rotate-45" : "w-6",
            )}
          />
          <span
            className={cn(
              "h-px bg-ivory transition-all duration-300",
              open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4",
            )}
          />
        </button>
      </div>

      <nav
        className={cn(
          "grid overflow-hidden border-hairline bg-black transition-[grid-template-rows] duration-[400ms] ease-out md:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0",
        )}
        aria-label="Mobile"
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-7 px-6 py-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-label text-xs font-medium uppercase tracking-[0.3em] text-mist hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#locations"
              onClick={() => setOpen(false)}
              className="font-label mt-2 inline-flex w-fit border border-gold/50 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-gold"
            >
              Find Aurabox
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
