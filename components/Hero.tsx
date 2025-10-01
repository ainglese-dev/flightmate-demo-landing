"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Package } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Send Packages with{" "}
            <span className="text-primary">Trusted Travelers</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Peru ↔ Miami from <span className="font-bold text-primary">$15/kg</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/post-trip">
              <Button size="lg" className="w-full sm:w-auto">
                <Plane className="mr-2 h-5 w-5" />
                Post Your Trip
              </Button>
            </Link>
            <Link href="/trips">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Package className="mr-2 h-5 w-5" />
                Send a Package
              </Button>
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
              <div className="text-center">
                <Plane className="h-24 w-24 mx-auto text-primary mb-4" />
                <p className="text-muted-foreground">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
