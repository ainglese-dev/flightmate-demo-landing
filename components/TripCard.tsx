"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Plane } from "lucide-react";
import type { Trip } from "@/lib/mock-data";
import { useTranslation } from "@/hooks/useTranslation";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const t = useTranslation();
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-2">{trip.route}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{trip.traveler}</span>
              {trip.verified && (
                <ShieldCheck className="h-4 w-4 text-primary" />
              )}
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {trip.rating}
              </span>
            </div>
          </div>
          <Badge variant={trip.verified ? "default" : "secondary"}>
            {trip.verified ? t.trips.verified : "New"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Travel Date</span>
            <span className="font-medium">{trip.date}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Available Space</span>
            <span className="font-medium">{trip.space}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{trip.price}</span>
            <Button>{t.trips.contactTraveler}</Button>
          </div>

          {trip.notes && (
            <p className="text-sm text-muted-foreground pt-2 border-t">
              {trip.notes}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
