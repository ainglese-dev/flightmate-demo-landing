"use client";

import Link from "next/link";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FlightMate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/trips" className="text-sm font-medium hover:text-primary transition-colors">
              Find Trips
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/post-trip">
              <Button>Post Your Trip</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
