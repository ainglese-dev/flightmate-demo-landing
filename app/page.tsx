"use client";

import PreBannerCarousel from "@/components/PreBannerCarousel";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TravelerCard from "@/components/TravelerCard";
import { travelers } from "@/lib/travelers";
import PopularProducts from "@/components/PopularProducts";
import Testimonials from "@/components/Testimonials";
import ExpandingSoon from "@/components/ExpandingSoon";
import { ROUTES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const t = useTranslation();
  const howItWorksRef = useRef(null);
  const routesRef = useRef(null);
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const routesInView = useInView(routesRef, { once: true, margin: "-100px" });

  const howItWorksSteps = [
    { number: 1, title: t.howItWorks.step1Title, description: t.howItWorks.step1Desc },
    { number: 2, title: t.howItWorks.step2Title, description: t.howItWorks.step2Desc },
    { number: 3, title: t.howItWorks.step3Title, description: t.howItWorks.step3Desc },
  ];

  return (
    <div className="min-h-screen">
      <PreBannerCarousel />
      <Hero />
      <TrustBadges />

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t.howItWorks.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Travelers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.language === "en" ? "Our Verified Travelers" : "Nuestros Viajeros Verificados"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.language === "en"
                ? "Trusted travelers who receive packages in Miami and deliver to Peru"
                : "Viajeros de confianza que reciben paquetes en Miami y entregan en Perú"}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {travelers.map((traveler, index) => (
              <TravelerCard key={traveler.id} traveler={traveler} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <PopularProducts />

      {/* Testimonials */}
      <Testimonials />

      {/* Popular Routes */}
      <section ref={routesRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={routesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t.routes.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ROUTES.popular.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={routesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg hover:scale-105 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {route.from} → {route.to}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {t.routes.starting} ${route.price}/kg
                    </p>
                    <Link href="/trips">
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        {t.routes.viewTrips}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanding Soon */}
      <ExpandingSoon />
    </div>
  );
}
