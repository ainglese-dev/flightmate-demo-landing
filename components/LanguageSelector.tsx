"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label="Toggle language"
        disabled
      >
        <span className="text-sm font-bold">ES</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      aria-label="Toggle language"
      title={language === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <span className="text-sm font-bold">
        {language.toUpperCase()}
      </span>
    </Button>
  );
}
