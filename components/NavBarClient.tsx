"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

export default function NavBarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FlightMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.howItWorks}
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.faq}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.contact}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-medium hover:text-primary transition-colors px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium hover:text-primary transition-colors px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.faq}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
