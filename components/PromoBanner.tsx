"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem("promoBannerDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("promoBannerDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1 justify-center text-center">
            <Sparkles className="h-5 w-5 shrink-0" />
            <p className="text-sm md:text-base font-medium">
              {t.promo.message} <span className="font-bold">{t.promo.code}</span>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="shrink-0 hover:bg-primary-foreground/10 rounded-full"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
