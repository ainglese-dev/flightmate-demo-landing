"use client";

import { useState } from "react";
import { X, Flame } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-primary/10 border-b border-primary/20"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <Flame className="h-5 w-5 text-primary animate-pulse" />
                <p className="text-sm md:text-base font-medium">
                  {language === "en"
                    ? "5 travelers departing Miami → Lima this week!"
                    : "¡5 viajeros salen de Miami → Lima esta semana!"}
                </p>
                <Link href="/trips">
                  <Button variant="link" size="sm" className="hidden sm:inline-flex">
                    {language === "en" ? "View Trips" : "Ver Viajes"}
                  </Button>
                </Link>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-muted rounded-full transition-colors"
                aria-label={language === "en" ? "Close banner" : "Cerrar banner"}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
