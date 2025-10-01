"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Package } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { analytics } from "@/lib/analytics";

export default function Hero() {
  const t = useTranslation();

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            {t.hero.headline}{" "}
            <span className="text-primary">{t.hero.headlineHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {t.hero.subheading} <span className="font-bold text-primary">$15/kg</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/post-trip" onClick={() => analytics.trackCTA("Post Your Trip - Hero")}>
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">
                <Plane className="mr-2 h-5 w-5" />
                {t.hero.ctaPostTrip}
              </Button>
            </Link>
            <Link href="/trips" onClick={() => analytics.trackCTA("Send Package - Hero")}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:scale-105 transition-transform">
                <Package className="mr-2 h-5 w-5" />
                {t.hero.ctaSendPackage}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
              <div className="text-center">
                <Plane className="h-24 w-24 mx-auto text-primary mb-4" />
                <p className="text-muted-foreground">{t.hero.heroImageAlt}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
