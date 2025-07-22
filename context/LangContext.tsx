"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "id";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "id") {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used inside LangProvider");
  return context;
};
