"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Plane, Search } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export default function NotFound() {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <Plane className="h-32 w-32 mx-auto text-primary/20 transform rotate-45" />
          </div>

          {/* Error Code */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-8xl md:text-9xl font-bold text-primary mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            {t.common.loading === "Loading..."
              ? "Page Not Found"
              : "Página No Encontrada"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8 text-lg"
          >
            {t.common.loading === "Loading..."
              ? "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
              : "¡Ups! La página que buscas no existe. Puede que se haya movido o eliminado."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                {t.common.loading === "Loading..." ? "Go Home" : "Ir al Inicio"}
              </Button>
            </Link>
            <Link href="/trips">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                {t.nav.findTrips}
              </Button>
            </Link>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t"
          >
            <p className="text-sm text-muted-foreground mb-4">
              {t.common.loading === "Loading..."
                ? "Popular pages:"
                : "Páginas populares:"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/post-trip" className="text-primary hover:underline">
                {t.nav.postTrip}
              </Link>
              <Link href="/how-it-works" className="text-primary hover:underline">
                {t.nav.howItWorks}
              </Link>
              <Link href="/contact" className="text-primary hover:underline">
                {t.nav.contact}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
