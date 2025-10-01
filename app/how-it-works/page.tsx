"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HOW_IT_WORKS_STEPS, PROHIBITED_ITEMS } from "@/lib/constants";
import { ShieldCheck, AlertTriangle, Plane, Package } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function HowItWorksPage() {
  const t = useTranslation();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">{t.howItWorksPage.title}</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Connecting travelers and senders for affordable, reliable package delivery
        </p>

        {/* How It Works Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Process</h2>
          <div className="space-y-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="mb-2">{step.title}</CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* For Travelers */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Plane className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.forTravelers}</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Earn Money While You Travel</CardTitle>
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
                <Button className="w-full">Post Your Trip</Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* For Senders */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.forSenders}</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Save Money on Package Delivery</CardTitle>
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
                <Button className="w-full">Find Available Trips</Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Safety & Prohibited Items */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold">{t.howItWorksPage.safety}</h2>
          </div>
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
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is FlightMate safe?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We verify traveler identities and encourage both parties to meet in public places.
                  All transactions are tracked, and we recommend using our secure payment system when
                  it becomes available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much can I save/earn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Senders typically save 50-70% compared to traditional courier services. Travelers
                  can earn $100-300 per trip depending on available space and demand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What about customs and regulations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Both travelers and senders are responsible for ensuring packages comply with all
                  customs regulations. We recommend declaring all items and checking with customs
                  authorities before traveling.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
