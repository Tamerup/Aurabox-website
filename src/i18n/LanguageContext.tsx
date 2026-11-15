"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DICTIONARIES, type Dictionary, type Lang } from "./dictionary";

type Ctx = { lang: Lang; t: Dictionary; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  t: DICTIONARIES.en,
  setLang: () => {},
});

const STORAGE_KEY = "aurabox-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "fi" || saved === "en") setLangState(saved);
      else if (/^fi/i.test(navigator.languages?.[0] || navigator.language || "")) setLangState("fi");
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t: DICTIONARIES[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
