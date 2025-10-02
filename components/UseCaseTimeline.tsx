"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  MapPin,
  Package,
  Plane,
  Home,
  CheckCircle,
  MessageSquare,
  DollarSign,
  Store,
  Bike,
  Zap
} from "lucide-react";
import type { UseCase } from "@/lib/use-cases-data";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

interface UseCaseTimelineProps {
  useCase: UseCase;
}

const iconMap = {
  ShoppingCart,
  MapPin,
  Package,
  Plane,
  Home,
  CheckCircle,
  MessageSquare,
  DollarSign,
  Store,
  Bike,
  Zap,
};

export default function UseCaseTimeline({ useCase }: UseCaseTimelineProps) {
  const { language } = useLanguage();
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-50px" });

  return (
    <div ref={timelineRef} className="relative">
      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className={`w-full h-32 rounded-lg ${useCase.gradientClass} mb-4 flex items-center justify-center`}>
              <div className="text-6xl">
                {iconMap[useCase.icon as keyof typeof iconMap] &&
                  (() => {
                    const Icon = iconMap[useCase.icon as keyof typeof iconMap];
                    return <Icon className="h-16 w-16 text-primary" />;
                  })()
                }
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {language === "en" ? useCase.title : useCase.titleEs}
            </h3>
            <p className="text-muted-foreground">
              {language === "en" ? useCase.description : useCase.descriptionEs}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Vertical line - Mobile: left side, Desktop: center */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        {/* Steps */}
        {useCase.steps.map((step, index) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Desktop Layout: Alternating sides */}
              <div className="hidden md:grid md:grid-cols-[1fr,auto,1fr] md:gap-8 md:items-center">
                {/* Left side content (for even indexes) */}
                {isLeft ? (
                  <>
                    <div className="flex justify-end">
                      <Card className="hover:shadow-lg transition-shadow max-w-md">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            {Icon && <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />}
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-1">
                                {language === "en" ? step.title : step.titleEs}
                              </h4>
                              {step.duration && (
                                <Badge variant="secondary" className="mb-2">
                                  ⏱️ {language === "en" ? step.duration : step.durationEs}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {language === "en" ? step.description : step.descriptionEs}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                        {Icon && <Icon className="h-7 w-7 text-primary-foreground" />}
                      </div>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                        {Icon && <Icon className="h-7 w-7 text-primary-foreground" />}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <Card className="hover:shadow-lg transition-shadow max-w-md">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            {Icon && <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />}
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-1">
                                {language === "en" ? step.title : step.titleEs}
                              </h4>
                              {step.duration && (
                                <Badge variant="secondary" className="mb-2">
                                  ⏱️ {language === "en" ? step.duration : step.durationEs}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {language === "en" ? step.description : step.descriptionEs}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout: All cards on right side */}
              <div className="md:hidden flex items-start gap-6">
                {/* Icon circle on left */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                    {Icon && <Icon className="h-7 w-7 text-primary-foreground" />}
                  </div>
                </div>

                {/* Card on right */}
                <div className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        {Icon && <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">
                            {language === "en" ? step.title : step.titleEs}
                          </h4>
                          {step.duration && (
                            <Badge variant="secondary" className="mb-2">
                              ⏱️ {language === "en" ? step.duration : step.durationEs}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {language === "en" ? step.description : step.descriptionEs}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
