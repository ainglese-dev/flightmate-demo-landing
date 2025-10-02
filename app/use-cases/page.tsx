"use client";

import { useState, useRef } from "react";
import { useCases } from "@/lib/use-cases-data";
import UseCaseTimeline from "@/components/UseCaseTimeline";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function UseCasesPage() {
  const { language } = useLanguage();
  const [selectedCaseId, setSelectedCaseId] = useState(useCases[0].id);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const selectedCase = useCases.find((uc) => uc.id === selectedCaseId) || useCases[0];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Real Use Cases" : "Casos de Uso Reales"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Discover how FlightMate works in real-world scenarios. From online shopping to store visits, see the complete journey from start to finish."
              : "Descubre cómo funciona FlightMate en escenarios del mundo real. Desde compras online hasta visitas a tiendas, ve el viaje completo de principio a fin."}
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedCaseId(useCase.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedCaseId === useCase.id
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg ${useCase.gradientClass} flex items-center justify-center text-2xl`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      {language === "en" ? useCase.title : useCase.titleEs}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {language === "en" ? useCase.description : useCase.descriptionEs}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Selected Timeline */}
        <motion.div
          key={selectedCaseId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UseCaseTimeline useCase={selectedCase} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center p-8 bg-muted/50 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-3">
            {language === "en" ? "Ready to get started?" : "¿Listo para comenzar?"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === "en"
              ? "Whether you're a traveler or a sender, FlightMate makes package delivery simple, fast, and affordable."
              : "Ya seas viajero o remitente, FlightMate hace que la entrega de paquetes sea simple, rápida y asequible."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/post-trip">
              <Badge className="text-base px-6 py-2 cursor-pointer">
                {language === "en" ? "Post Your Trip" : "Publicar Tu Viaje"}
              </Badge>
            </a>
            <a href="/trips">
              <Badge variant="outline" className="text-base px-6 py-2 cursor-pointer">
                {language === "en" ? "Find Trips" : "Buscar Viajes"}
              </Badge>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
