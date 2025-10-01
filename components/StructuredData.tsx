export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlightMate",
    url: "https://ainglese-dev.github.io/flightmate-demo-landing",
    logo: "https://ainglese-dev.github.io/flightmate-demo-landing/logo.png",
    description: "P2P package delivery marketplace connecting travelers and senders between Peru and Miami",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Spanish"],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Package Delivery Service",
    provider: {
      "@type": "Organization",
      name: "FlightMate",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Peru",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "15",
        priceCurrency: "USD",
        unitText: "per kg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
