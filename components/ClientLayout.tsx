"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import PromoBanner from "@/components/PromoBanner";
import UrgencyBanner from "@/components/UrgencyBanner";
import NavBarClient from "@/components/NavBarClient";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PromoBanner />
        <NavBarClient />
        <UrgencyBanner />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <ScrollToTop />
      </LanguageProvider>
    </ThemeProvider>
  );
}
