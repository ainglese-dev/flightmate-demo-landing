"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function PostTripPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="h-12 w-12 text-accent-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Coming Soon" : "Próximamente"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            {language === "en"
              ? "This feature is currently under development. Check back soon!"
              : "Esta función está en desarrollo. ¡Vuelve pronto!"}
          </p>

          <Link href="/">
            <Button size="lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {language === "en" ? "Back to Home" : "Volver al Inicio"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
