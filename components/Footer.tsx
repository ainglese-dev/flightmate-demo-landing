import Link from "next/link";
import { Plane } from "lucide-react";

export default function Footer() {
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
              Connect travelers and senders for affordable, reliable package delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Travelers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/post-trip" className="text-muted-foreground hover:text-primary transition-colors">
                  Post a Trip
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How to Earn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Senders</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trips" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Trips
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FlightMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
