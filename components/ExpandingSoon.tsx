"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { upcomingCorridors } from "@/lib/corridors";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function ExpandingSoon() {
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "en" ? "Expanding Soon" : "Expandiendo Pronto"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === "en"
              ? "New routes launching across Latin America"
              : "Nuevas rutas próximamente en toda Latinoamérica"}
          </p>
        </motion.div>

        {/* Corridors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {upcomingCorridors.map((corridor, index) => (
            <motion.div
              key={corridor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${corridor.gradientClass} opacity-50`} />

                <CardHeader className="relative">
                  <div className="text-4xl mb-2">{corridor.flag}</div>
                  <CardTitle className="text-lg">
                    {language === "en" ? corridor.route : corridor.routeEs}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <Badge variant="secondary" className="mb-2">
                    {language === "en" ? corridor.comingSoon : corridor.comingSoonEs}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            {language === "en"
              ? "Be the first to know when we launch in your country"
              : "Sé el primero en saber cuando lancemos en tu país"}
          </p>
          <Button size="lg" variant="outline">
            <Bell className="mr-2 h-5 w-5" />
            {language === "en" ? "Join Waitlist" : "Únete a la Lista de Espera"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
