"use client";

import { useState } from "react";
import TripCard from "@/components/TripCard";
import { mockTrips } from "@/lib/mock-data";
import { ROUTES } from "@/lib/constants";

export default function TripsPage() {
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");

  const filteredTrips = mockTrips.filter((trip) => {
    const matchesFrom = !fromFilter || trip.from === fromFilter;
    const matchesTo = !toFilter || trip.to === toFilter;
    return matchesFrom && matchesTo;
  });

  const allCities = [...ROUTES.peru_cities, ...ROUTES.usa_cities];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Find Available Trips</h1>

        {/* Filters */}
        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">From</label>
              <select
                className="w-full px-4 py-2 rounded-md border bg-background"
                value={fromFilter}
                onChange={(e) => setFromFilter(e.target.value)}
              >
                <option value="">All Cities</option>
                {allCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">To</label>
              <select
                className="w-full px-4 py-2 rounded-md border bg-background"
                value={toFilter}
                onChange={(e) => setToFilter(e.target.value)}
              >
                <option value="">All Cities</option>
                {allCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFromFilter("");
                  setToFilter("");
                }}
                className="w-full px-4 py-2 rounded-md border hover:bg-muted transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Found {filteredTrips.length} trip{filteredTrips.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        {filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No trips found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
