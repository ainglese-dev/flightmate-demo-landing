"use client";

import Link from "next/link";
import { Plane } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FlightMate</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.forTravelers}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/post-trip" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.postTrip}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.howToEarn}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.forSenders}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trips" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.findTrips}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
