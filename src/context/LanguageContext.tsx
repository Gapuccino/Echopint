"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { dictionaries, Dictionary } from "@/i18n/dictionaries";
import { getInternalPath, getLocalizedPath } from "@/i18n/routing";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export type Language = "ES" | "EN" | "FR" | "PT";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isPending: boolean; // Useful if we want to show a spinner in the navbar
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLang }: { children: ReactNode, initialLang?: Language }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [showChatbot, setShowChatbot] = useState(false);
  
  // Derive active language completely from the Server URL parameter
  const upperInitial = initialLang ? (initialLang.toUpperCase() as Language) : undefined;
  const lang = upperInitial && ['ES', 'EN', 'FR', 'PT'].includes(upperInitial) ? upperInitial : 'ES';

  // Sync HTML tag and LocalStorage whenever the language actually changes
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    let mounted = true;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const reveal = () => {
      if (!mounted) return;
      setShowChatbot(true);
      window.removeEventListener("pointerdown", reveal);
      window.removeEventListener("keydown", reveal);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("touchstart", reveal);
    };

    window.addEventListener("pointerdown", reveal, { passive: true });
    window.addEventListener("keydown", reveal);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("touchstart", reveal, { passive: true });

    const win = window as IdleWindow;
    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(reveal, { timeout: 2500 });
    } else {
      timeoutId = setTimeout(reveal, 1800);
    }

    return () => {
      mounted = false;
      window.removeEventListener("pointerdown", reveal);
      window.removeEventListener("keydown", reveal);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("touchstart", reveal);
      if (idleId !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

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
    const dict = dictionaries[lang];
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
      {showChatbot ? <Chatbot /> : null}
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
