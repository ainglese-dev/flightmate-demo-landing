"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/i18n/translations";

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}
