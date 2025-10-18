"use client";

import { CheckCircle, Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Traveler } from "@/lib/travelers";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

interface TravelerCardProps {
  traveler: Traveler;
  index: number;
}

export default function TravelerCard({ traveler, index }: TravelerCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
        <CardContent className="p-6">
          {/* Avatar/Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
              {traveler.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg">{traveler.name}</h3>
                {traveler.verified && (
                  <CheckCircle className="h-5 w-5 text-primary fill-primary" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{traveler.rating}</span>
                <span>({traveler.totalTrips} {language === "en" ? "trips" : "viajes"})</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium">{language === "en" ? traveler.location : traveler.locationEs}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{language === "en" ? traveler.travelFrequency : traveler.travelFrequencyEs}</span>
            </div>

            <div className="pt-2">
              <Badge variant="secondary" className="w-full justify-center py-2">
                {language === "en" ? traveler.route : traveler.routeEs}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
