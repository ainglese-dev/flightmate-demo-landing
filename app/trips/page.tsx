"use client";

import { useState } from "react";
import TripCard from "@/components/TripCard";
import { mockTrips } from "@/lib/mock-data";
import type { CapacityType } from "@/lib/mock-data";
import { ROUTES, CAPACITY_TYPES } from "@/lib/constants";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function TripsPage() {
  const t = useTranslation();
  const { language } = useLanguage();
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");
  const [capacityFilter, setCapacityFilter] = useState<CapacityType | "">("");

  const filteredTrips = mockTrips.filter((trip) => {
    const matchesFrom = !fromFilter || trip.from === fromFilter;
    const matchesTo = !toFilter || trip.to === toFilter;
    const matchesCapacity = !capacityFilter || trip.capacityType === capacityFilter;
    return matchesFrom && matchesTo && matchesCapacity;
  });

  const allCities = [...ROUTES.peru_cities, ...ROUTES.usa_cities];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          {t.trips.title}
        </motion.h1>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-muted/50 p-6 rounded-lg mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.trips.filterFrom}</label>
              <select
                className="w-full px-4 py-2 rounded-md border bg-background"
                value={fromFilter}
                onChange={(e) => setFromFilter(e.target.value)}
              >
                <option value="">{t.trips.allCities}</option>
                {allCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.trips.filterTo}</label>
              <select
                className="w-full px-4 py-2 rounded-md border bg-background"
                value={toFilter}
                onChange={(e) => setToFilter(e.target.value)}
              >
                <option value="">{t.trips.allCities}</option>
                {allCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "en" ? "Capacity" : "Capacidad"}
              </label>
              <select
                className="w-full px-4 py-2 rounded-md border bg-background"
                value={capacityFilter}
                onChange={(e) => setCapacityFilter(e.target.value as CapacityType | "")}
              >
                <option value="">
                  {language === "en" ? "All capacities" : "Todas las capacidades"}
                </option>
                {Object.entries(CAPACITY_TYPES).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.icon} {language === "en" ? value.label : value.labelEs}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFromFilter("");
                  setToFilter("");
                  setCapacityFilter("");
                }}
                className="w-full px-4 py-2 rounded-md border hover:bg-muted transition-colors"
              >
                {t.trips.clearFilters}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-muted-foreground">
            {t.trips.found} {filteredTrips.length} {filteredTrips.length !== 1 ? t.trips.trips : t.trips.trip}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredTrips.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              {t.trips.noTrips}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
