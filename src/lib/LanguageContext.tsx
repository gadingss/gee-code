"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, dict } from "./dictionary";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof dict.EN; // Expose current dictionary mapped object
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved === "EN" || saved === "IN") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("app_lang", lang);
    }
  }, [lang, mounted]);

  const value = {
    lang,
    setLang,
    t: dict[lang]
  };

  // We could return null while !mounted to prevent hydration flicker, 
  // but it blocks render. Returning children means fast networks might see EN flicker to IN.
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
