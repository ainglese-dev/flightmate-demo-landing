import { Package, ShieldCheck, Lock, Umbrella } from "lucide-react";

const iconMap = {
  package: Package,
  "shield-check": ShieldCheck,
  lock: Lock,
  umbrella: Umbrella,
};

interface TrustBadge {
  label: string;
  icon: keyof typeof iconMap;
}

const trustIndicators: TrustBadge[] = [
  { label: "500+ successful deliveries", icon: "package" },
  { label: "Verified travelers only", icon: "shield-check" },
  { label: "Secure payments", icon: "lock" },
  { label: "Full insurance coverage", icon: "umbrella" },
];

export default function TrustBadges() {
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
