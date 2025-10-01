"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import PromoBanner from "@/components/PromoBanner";
import NavBarClient from "@/components/NavBarClient";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PromoBanner />
        <NavBarClient />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
