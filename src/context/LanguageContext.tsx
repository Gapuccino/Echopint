"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { dictionaries, Dictionary } from "@/i18n/dictionaries";
import { getInternalPath, getLocalizedPath } from "@/i18n/routing";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

export type Language = "ES" | "EN" | "FR" | "PT";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isPending: boolean; // Useful if we want to show a spinner in the navbar
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLang, dictionary }: { children: ReactNode, initialLang?: Language, dictionary: Dictionary }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  
  // Derive active language completely from the Server URL parameter
  const upperInitial = initialLang ? (initialLang.toUpperCase() as Language) : undefined;
  const lang = upperInitial && ['ES', 'EN', 'FR', 'PT'].includes(upperInitial) ? upperInitial : 'ES';

  // Sync HTML tag and LocalStorage whenever the language actually changes
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    
    const newLangLower = newLang.toLowerCase();
    
    // Compute internal path from current external path
    let internalPath = pathname || "/";
    const pathParts = internalPath.split('/');
    if (pathParts[1] && ['es', 'en', 'fr', 'pt'].includes(pathParts[1])) {
      const currentLocale = pathParts[1];
      const restOfPath = internalPath.substring(currentLocale.length + 1);
      internalPath = getInternalPath(currentLocale, restOfPath);
    }
    
    const targetUrl = getLocalizedPath(newLangLower, internalPath);

    // Let Next.js handle the transition naturally
    startTransition(() => {
      router.push(targetUrl);
    });
  };

  const t = (key: string): string => {
    const dict = dictionary;
    const keys = key.split(".");
    let value: any = dict;

    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }

    return value || key; // fallback to key if not found
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isPending }}>
      {children}
      <Chatbot />
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
