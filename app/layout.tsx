import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ainglese-dev.github.io/flightmate-demo-landing"),
  title: "FlightMate - Send Packages with Trusted Travelers | Peru ↔ Miami",
  description: "Affordable P2P package delivery between Peru and Miami. Connect with verified travelers. Save 50-70% vs traditional couriers. Starting from $15/kg.",
  keywords: ["package delivery", "Peru to Miami", "Miami to Lima", "send packages Peru", "courier service", "travel delivery", "p2p shipping"],
  authors: [{ name: "FlightMate" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_PE"],
    url: "https://ainglese-dev.github.io/flightmate-demo-landing",
    siteName: "FlightMate",
    title: "FlightMate - Send Packages with Trusted Travelers",
    description: "Affordable P2P package delivery between Peru and Miami. Starting from $15/kg.",
    images: [
      {
        url: "/flightmate-demo-landing/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlightMate - Package Delivery Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlightMate - Send Packages with Trusted Travelers",
    description: "Affordable P2P package delivery between Peru and Miami. Starting from $15/kg.",
    images: ["/flightmate-demo-landing/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
