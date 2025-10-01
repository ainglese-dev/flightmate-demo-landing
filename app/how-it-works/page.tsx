import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FEATURES, HOW_IT_WORKS_STEPS, PROHIBITED_ITEMS } from "@/lib/constants";
import { ShieldCheck, AlertTriangle, Plane, Package } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">How FlightMate Works</h1>
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
            <h2 className="text-2xl font-bold">For Travelers</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Earn Money While You Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {FEATURES.travelers.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
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
            <h2 className="text-2xl font-bold">For Senders</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Save Money on Package Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {FEATURES.senders.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
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
            <h2 className="text-2xl font-bold">Safety & Prohibited Items</h2>
          </div>
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle>Items NOT Allowed for Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {PROHIBITED_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>Important:</strong> Travelers have the right to inspect packages before
                  accepting them. Both parties are responsible for ensuring all items comply with
                  international customs regulations.
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
