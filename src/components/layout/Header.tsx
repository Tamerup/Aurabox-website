"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#how", label: t.nav.how },
    { href: "#locations", label: t.nav.venues },
    { href: "#fragrances", label: t.nav.fragrances },
    { href: "#contact", label: t.nav.contact },
  ];

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

  const LangSwitch = (
    <div className="flex items-center" role="group" aria-label="Language">
      <button type="button" className="ab-lang" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
      <span aria-hidden className="text-[#555]">
        |
      </span>
      <button type="button" className="ab-lang" aria-pressed={lang === "fi"} onClick={() => setLang("fi")}>
        FI
      </button>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-out",
        scrolled || open
          ? "border-hairline bg-black/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-6">
        <Link href="#top" className="font-serif text-[22px] tracking-[0.4em] text-gold" aria-label="Aurabox — home">
          AURABOX
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label text-[10px] uppercase tracking-[0.35em] text-mist transition-colors duration-300 hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {LangSwitch}
          <Link
            href="#contact"
            className="font-label inline-flex min-h-11 items-center bg-gold px-5 text-[10px] font-medium uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-ivory"
          >
            {t.nav.find}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {LangSwitch}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-end justify-center gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={cn("h-px bg-ivory transition-all duration-300", open ? "w-6 translate-y-[3px] rotate-45" : "w-6")} />
            <span className={cn("h-px bg-ivory transition-all duration-300", open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4")} />
          </button>
        </div>
      </div>

      <nav
        className={cn(
          "grid overflow-hidden border-hairline bg-black transition-[grid-template-rows] duration-[400ms] ease-out lg:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0",
        )}
        aria-label="Mobile"
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-7 px-6 py-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-label text-xs uppercase tracking-[0.3em] text-mist hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-label mt-2 inline-flex w-fit border border-gold/50 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              {t.nav.find}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
