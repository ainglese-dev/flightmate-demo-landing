// Google Analytics event tracking helper

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined event tracking functions
export const analytics = {
  // CTA clicks
  trackCTA: (label: string) => trackEvent("click", "CTA", label),

  // Navigation
  trackNavigation: (label: string) => trackEvent("click", "Navigation", label),

  // Product clicks
  trackProductClick: (productName: string, platform: "Amazon" | "eBay") =>
    trackEvent("click", "Popular Products", `${productName} - ${platform}`),

  // Language switch
  trackLanguageSwitch: (newLanguage: string) =>
    trackEvent("switch", "Language", newLanguage),

  // Form interactions
  trackFormStart: (formName: string) => trackEvent("start", "Form", formName),
  trackFormSubmit: (formName: string) => trackEvent("submit", "Form", formName),

  // Trip interactions
  trackTripView: (tripId: number) => trackEvent("view", "Trip", `Trip ${tripId}`),
  trackContactTraveler: (tripId: number) => trackEvent("click", "Contact", `Trip ${tripId}`),
};
