"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { HOW_IT_WORKS_STEPS, PROHIBITED_ITEMS } from "@/lib/constants";
import { useCases } from "@/lib/use-cases-data";
import UseCaseTimeline from "@/components/UseCaseTimeline";
import { ShieldCheck, AlertTriangle, Plane, Package, Shield } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function HowItWorksPage() {
  const t = useTranslation();
  const { language } = useLanguage();
  const [selectedCaseId, setSelectedCaseId] = useState(useCases[0].id);

  const stepsRef = useRef(null);
  const scenariosRef = useRef(null);
  const travelersRef = useRef(null);
  const sendersRef = useRef(null);
  const insuranceRef = useRef(null);
  const safetyRef = useRef(null);
  const faqRef = useRef(null);

  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const scenariosInView = useInView(scenariosRef, { once: true, margin: "-100px" });
  const travelersInView = useInView(travelersRef, { once: true, margin: "-100px" });
  const sendersInView = useInView(sendersRef, { once: true, margin: "-100px" });
  const insuranceInView = useInView(insuranceRef, { once: true, margin: "-100px" });
  const safetyInView = useInView(safetyRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const selectedCase = useCases.find((uc) => uc.id === selectedCaseId) || useCases[0];

  const insuranceTiers = [
    {
      name: language === "en" ? "Basic" : "Básico",
      price: "$0",
      coverage: language === "en" ? "$500" : "$500",
      color: "border-gray-300",
      features: language === "en"
        ? ["Included free", "Lost/damaged coverage", "24-hour claim processing", "Standard support"]
        : ["Incluido gratis", "Cobertura de pérdida/daño", "Procesamiento de reclamos en 24 horas", "Soporte estándar"]
    },
    {
      name: language === "en" ? "Standard" : "Estándar",
      price: "$5",
      coverage: language === "en" ? "$1,500" : "$1,500",
      color: "border-primary",
      badge: true,
      features: language === "en"
        ? ["3x coverage", "Theft protection", "12-hour claim processing", "Priority support", "Customs assistance"]
        : ["Cobertura 3x", "Protección contra robo", "Procesamiento de reclamos en 12 horas", "Soporte prioritario", "Asistencia aduanera"]
    },
    {
      name: language === "en" ? "Premium" : "Premium",
      price: "$15",
      coverage: language === "en" ? "$5,000" : "$5,000",
      color: "border-amber-500",
      features: language === "en"
        ? ["Maximum coverage", "All-risk protection", "6-hour claim processing", "24/7 concierge support", "Legal assistance", "Express customs clearance"]
        : ["Cobertura máxima", "Protección todo riesgo", "Procesamiento de reclamos en 6 horas", "Soporte concierge 24/7", "Asistencia legal", "Despacho aduanero express"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          {t.howItWorksPage.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-12 text-center"
        >
          {t.howItWorksPage.subtitle}
        </motion.p>

        {/* How It Works Steps */}
        <section ref={stepsRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            {t.howItWorksPage.processTitle}
          </motion.h2>
          <div className="space-y-6">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="mb-2">
                        {language === "en" ? step.title : step.titleEs}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {language === "en" ? step.description : step.descriptionEs}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section ref={scenariosRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={scenariosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            {language === "en" ? "Real-World Scenarios" : "Escenarios del Mundo Real"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={scenariosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {language === "en"
              ? "See how FlightMate works in practice with these detailed step-by-step scenarios."
              : "Ve cómo funciona FlightMate en la práctica con estos escenarios detallados paso a paso."}
          </motion.p>

          {/* Scenario Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={scenariosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <motion.button
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={scenariosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
        </section>

        {/* For Travelers */}
        <section ref={travelersRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={travelersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Plane className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.forTravelers}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={travelersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
            <CardHeader>
              <CardTitle>{t.howItWorksPage.travelerTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.travelerBenefit1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.travelerBenefit2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.travelerBenefit3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.travelerBenefit4}</span>
                </li>
              </ul>
              <Link href="/post-trip" className="block mt-6">
                <Button className="w-full">{t.nav.postTrip}</Button>
              </Link>
            </CardContent>
          </Card>
          </motion.div>
        </section>

        {/* For Senders */}
        <section ref={sendersRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sendersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Package className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.forSenders}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sendersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
            <CardHeader>
              <CardTitle>{t.howItWorksPage.senderTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.senderBenefit1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.senderBenefit2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.senderBenefit3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t.howItWorksPage.senderBenefit4}</span>
                </li>
              </ul>
              <Link href="/trips" className="block mt-6">
                <Button className="w-full">{t.nav.findTrips}</Button>
              </Link>
            </CardContent>
          </Card>
          </motion.div>
        </section>

        {/* Insurance & Coverage */}
        <section ref={insuranceRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">
              {language === "en" ? "Insurance & Coverage" : "Seguro y Cobertura"}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {language === "en"
              ? "All deliveries include Basic insurance. Upgrade for enhanced protection and peace of mind."
              : "Todas las entregas incluyen seguro Básico. Actualiza para mayor protección y tranquilidad."}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {insuranceTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className={`border-2 ${tier.color} ${tier.badge ? 'shadow-lg' : ''} h-full`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      {tier.badge && (
                        <Badge className="bg-primary">
                          {language === "en" ? "Popular" : "Popular"}
                        </Badge>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-primary">{tier.price}</div>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? "Coverage up to" : "Cobertura hasta"} {tier.coverage}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Safety & Prohibited Items */}
        <section ref={safetyRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={safetyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.safety}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={safetyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle>{t.howItWorksPage.prohibited}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t.howItWorksPage.prohibitedList}</p>
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  {t.howItWorksPage.safetyDesc}
                </p>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </section>

        {/* Quick FAQ */}
        <section ref={faqRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold mb-2">{t.howItWorksPage.faqTitle}</h2>
            <p className="text-sm text-muted-foreground">
              {language === "en" ? (
                <>
                  Quick answers to common questions. See our{" "}
                  <Link href="/faq" className="text-primary hover:underline">
                    full FAQ
                  </Link>{" "}
                  for more.
                </>
              ) : (
                <>
                  Respuestas rápidas a preguntas comunes. Ver nuestras{" "}
                  <Link href="/faq" className="text-primary hover:underline">
                    Preguntas Frecuentes completas
                  </Link>{" "}
                  para más información.
                </>
              )}
            </p>
          </motion.div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.howItWorksPage.faqQ1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t.howItWorksPage.faqA1}
                </p>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.howItWorksPage.faqQ2}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t.howItWorksPage.faqA2}
                </p>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.howItWorksPage.faqQ3}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t.howItWorksPage.faqA3}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
