"use client";

import { Package, ShieldCheck, Lock, Umbrella } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const iconMap = {
  package: Package,
  "shield-check": ShieldCheck,
  lock: Lock,
  umbrella: Umbrella,
};

type IconKey = keyof typeof iconMap;

export default function TrustBadges() {
  const t = useTranslation();

  const trustIndicators: { label: string; icon: IconKey }[] = [
    { label: t.trust.deliveries, icon: "package" },
    { label: t.trust.verified, icon: "shield-check" },
    { label: t.trust.payments, icon: "lock" },
    { label: t.trust.insurance, icon: "umbrella" },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => {
            const Icon = iconMap[indicator.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="h-10 w-10 text-primary mb-3" />
                <p className="text-sm font-medium">{indicator.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
