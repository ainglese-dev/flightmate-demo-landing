"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HOW_IT_WORKS_STEPS, PROHIBITED_ITEMS } from "@/lib/constants";
import { ShieldCheck, AlertTriangle, Plane, Package } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function HowItWorksPage() {
  const t = useTranslation();
  const { language } = useLanguage();
  const stepsRef = useRef(null);
  const travelersRef = useRef(null);
  const sendersRef = useRef(null);
  const safetyRef = useRef(null);
  const faqRef = useRef(null);

  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const travelersInView = useInView(travelersRef, { once: true, margin: "-100px" });
  const sendersInView = useInView(sendersRef, { once: true, margin: "-100px" });
  const safetyInView = useInView(safetyRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

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

        {/* FAQ */}
        <section ref={faqRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            {t.howItWorksPage.faqTitle}
          </motion.h2>
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
