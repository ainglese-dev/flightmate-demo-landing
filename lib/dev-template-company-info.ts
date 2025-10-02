/**
 * ============================================================================
 * DEV TEMPLATE: COMPANY INFO
 * ============================================================================
 *
 * PURPOSE:
 * Single source of truth for all company information, contact details,
 * social media links, and SEO metadata. Update here to propagate changes
 * across the entire application.
 *
 * USAGE:
 * Import specific sections as needed:
 * - import { COMPANY_INFO } from '@/lib/dev-template-company-info'
 * - Used in: Footer, Contact page, WhatsApp button, SEO meta tags
 *
 * SCALABILITY:
 * - Add new social platforms by adding to the 'social' object
 * - Update contact methods in one place
 * - Centralize SEO configuration
 * - Easy handoff to non-technical team members for updates
 *
 * ============================================================================
 */

export const COMPANY_INFO = {
  /**
   * BASIC COMPANY IDENTITY
   * Used in: Navigation bar, footer, page titles
   */
  name: "FlightMate",
  tagline: "Send Packages with Trusted Travelers",
  shortDescription: "Affordable P2P package delivery between Peru and Miami",
  longDescription: "Affordable P2P package delivery between Peru and Miami. Connect with verified travelers. Save 50-70% vs traditional couriers. Starting from $15/kg.",

  /**
   * CONTACT INFORMATION
   * Update phone numbers, emails here - changes reflect everywhere
   * Used in: Footer, Contact page, WhatsApp button, Email forms
   */
  contact: {
    // Main support contact
    email: "support@flightmate.com",

    // WhatsApp business number (include country code, format: +1234567890)
    whatsapp: "+1234567890", // TODO: Replace with actual WhatsApp Business number

    // Phone number (optional)
    phone: "+1 (305) 555-0100", // TODO: Replace with actual phone number

    // Privacy/legal contact
    privacyEmail: "privacy@flightmate.com",

    // Business inquiries
    businessEmail: "business@flightmate.com",
  },

  /**
   * SOCIAL MEDIA LINKS
   * Add/remove platforms as needed
   * Used in: Footer, Share buttons, Social media widgets
   *
   * To add a new platform:
   * 1. Add the URL here (e.g., tiktok: "https://tiktok.com/@flightmate")
   * 2. Import the icon in your component from lucide-react
   * 3. Map it in the component
   */
  social: {
    facebook: "https://facebook.com/flightmate", // TODO: Replace with actual URL
    instagram: "https://instagram.com/flightmate", // TODO: Replace with actual URL
    twitter: "https://twitter.com/flightmate", // TODO: Replace with actual URL
    linkedin: "https://linkedin.com/company/flightmate", // TODO: Replace with actual URL
    youtube: "https://youtube.com/@flightmate", // TODO: Replace with actual URL
    // tiktok: "https://tiktok.com/@flightmate", // Uncomment when ready
    // telegram: "https://t.me/flightmate", // Uncomment when ready
  },

  /**
   * PHYSICAL LOCATIONS
   * Used in: Contact page, About page, Footer
   */
  address: {
    headquarters: {
      city: "Miami",
      state: "FL",
      country: "USA",
      full: "Miami, FL, USA", // TODO: Add full address when ready
    },
    peruOffice: {
      city: "Lima",
      country: "Peru",
      full: "Lima, Peru", // TODO: Add full address when ready
    },
  },

  /**
   * LEGAL & BUSINESS INFORMATION
   * Used in: Footer, Legal pages, Invoices
   */
  legal: {
    registeredName: "FlightMate Inc.", // TODO: Replace with legal entity name
    taxId: "XX-XXXXXXX", // TODO: Replace with actual Tax ID / EIN
    founded: "2024",
    registrationCountry: "United States",
  },

  /**
   * SEO METADATA
   * Used in: app/layout.tsx, page-specific metadata
   * Update these to improve search engine visibility
   */
  seo: {
    // Default page title (appears in browser tab)
    metaTitle: "FlightMate - Send Packages with Trusted Travelers | Peru ↔ Miami",

    // Default meta description (appears in search results)
    metaDescription: "Affordable P2P package delivery between Peru and Miami. Connect with verified travelers. Save 50-70% vs traditional couriers. Starting from $15/kg.",

    // Keywords for search engines
    keywords: [
      "package delivery",
      "Peru to Miami",
      "Miami to Lima",
      "send packages Peru",
      "courier service",
      "travel delivery",
      "p2p shipping",
      "international shipping",
      "affordable courier",
      "verified travelers",
    ],

    // Open Graph image (social media previews)
    ogImage: "/flightmate-demo-landing/og-image.png",

    // Twitter card image
    twitterImage: "/flightmate-demo-landing/og-image.png",

    // Canonical URL (base domain)
    canonicalUrl: "https://ainglese-dev.github.io/flightmate-demo-landing",

    // Alternative language codes
    locales: {
      default: "en_US",
      alternate: ["es_PE", "es_ES"],
    },
  },

  /**
   * BUSINESS HOURS
   * Used in: Contact page, Support widgets
   */
  businessHours: {
    timezone: "EST (UTC-5)",
    support: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed",
    },
  },

  /**
   * STATISTICS & TRUST INDICATORS
   * Update these numbers as your business grows
   * Used in: Homepage, About page, Trust badges
   */
  stats: {
    successfulDeliveries: "500+",
    verifiedTravelers: "200+",
    activeUsers: "1,000+",
    countriesServed: "2",
    averageSaving: "50-70%",
  },
};

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 */

/**
 * Get WhatsApp chat link with pre-filled message
 * @param message - Custom message (optional)
 * @param language - 'en' or 'es'
 */
export function getWhatsAppLink(
  message?: string,
  language: "en" | "es" = "en"
): string {
  const defaultMessage =
    language === "en"
      ? "Hi! I'm interested in FlightMate. Can you help me?"
      : "¡Hola! Estoy interesado en FlightMate. ¿Pueden ayudarme?";

  const text = message || defaultMessage;
  const phoneNumber = COMPANY_INFO.contact.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Get email mailto link
 * @param type - 'support' | 'privacy' | 'business'
 * @param subject - Email subject (optional)
 */
export function getEmailLink(
  type: "support" | "privacy" | "business" = "support",
  subject?: string
): string {
  const emailMap = {
    support: COMPANY_INFO.contact.email,
    privacy: COMPANY_INFO.contact.privacyEmail,
    business: COMPANY_INFO.contact.businessEmail,
  };

  const email = emailMap[type];
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${email}${subjectParam}`;
}
