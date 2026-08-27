// NEXORA Signal Atelier｜全站語言狀態。此檔案只負責讓三語內容在所有頁面間保持一致，不承擔視覺樣式。
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "zh-TW" | "zh-CN" | "en";

export const langNames: Record<Lang, string> = {
  "zh-TW": "繁中",
  "zh-CN": "简中",
  en: "EN",
};

type SiteContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh-TW");
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteProvider");
  return context;
}

export function pick<T>(value: Record<Lang, T>, lang: Lang): T {
  return value[lang];
}
