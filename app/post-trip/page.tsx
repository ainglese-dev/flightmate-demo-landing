"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/hooks/useTranslation";

const tripSchema = z.object({
  from: z.string().min(1, "Origin is required"),
  to: z.string().min(1, "Destination is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  availableSpace: z.number().min(1).max(20),
  pricePerKg: z.number().min(1),
  returnDate: z.string().optional(),
  contact: z.string().min(1, "Contact information is required"),
  notes: z.string().optional(),
});

type TripFormData = z.infer<typeof tripSchema>;

export default function PostTripPage() {
  const t = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TripFormData>({
    resolver: zodResolver(tripSchema),
  });

  const onSubmit = (data: TripFormData) => {
    // Save to localStorage
    const existingTrips = JSON.parse(localStorage.getItem("userTrips") || "[]");
    const newTrip = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("userTrips", JSON.stringify([...existingTrips, newTrip]));

    setSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const allCities = [...ROUTES.peru_cities, ...ROUTES.usa_cities];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{t.postTrip.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t.postTrip.subtitle}
        </p>

        {submitted && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">Trip posted successfully!</p>
            <p className="text-sm">Your trip has been saved and will be visible to senders.</p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>
              Fill in your travel information. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.postTrip.formOrigin} *
                  </label>
                  <select
                    {...register("from")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  >
                    <option value="">{t.postTrip.selectCity}</option>
                    {allCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.from && (
                    <p className="text-sm text-red-500 mt-1">{errors.from.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.postTrip.formDestination} *
                  </label>
                  <select
                    {...register("to")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  >
                    <option value="">{t.postTrip.selectCity}</option>
                    {allCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.to && (
                    <p className="text-sm text-red-500 mt-1">{errors.to.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.postTrip.formDate} *
                  </label>
                  <input
                    type="date"
                    {...register("travelDate")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                  {errors.travelDate && (
                    <p className="text-sm text-red-500 mt-1">{errors.travelDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Return Date (optional)
                  </label>
                  <input
                    type="date"
                    {...register("returnDate")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.postTrip.formSpace} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    {...register("availableSpace", { valueAsNumber: true })}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="1-20 kg"
                  />
                  {errors.availableSpace && (
                    <p className="text-sm text-red-500 mt-1">{errors.availableSpace.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.postTrip.formPrice} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    {...register("pricePerKg", { valueAsNumber: true })}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="$15"
                  />
                  {errors.pricePerKg && (
                    <p className="text-sm text-red-500 mt-1">{errors.pricePerKg.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.postTrip.formContact} *
                </label>
                <input
                  type="text"
                  {...register("contact")}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder={t.postTrip.placeholderContact}
                />
                {errors.contact && (
                  <p className="text-sm text-red-500 mt-1">{errors.contact.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.postTrip.formNotes}
                </label>
                <textarea
                  {...register("notes")}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  rows={4}
                  placeholder={t.postTrip.placeholderNotes}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t.postTrip.formSubmit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
