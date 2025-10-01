export const ROUTES = {
  peru_cities: ["Lima", "Cusco", "Arequipa"],
  usa_cities: ["Miami", "Fort Lauderdale", "Orlando"],
  popular: [
    { from: "Lima", to: "Miami", price: 15 },
    { from: "Miami", to: "Lima", price: 18 },
    { from: "Cusco", to: "Miami", price: 20 },
  ],
};

export const FEATURES = {
  travelers: [
    "Earn $100-300 per trip",
    "Verified sender identity",
    "Flexible pickup locations",
  ],
  senders: [
    "Save 50-70% vs courier",
    "Track your package",
    "Direct communication",
  ],
};

export const TRUST_INDICATORS = [
  { label: "500+ successful deliveries", icon: "package" },
  { label: "Verified travelers only", icon: "shield-check" },
  { label: "Secure payments", icon: "lock" },
  { label: "Full insurance coverage", icon: "umbrella" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Travelers post their flight details",
    description: "Share your route, date, and available luggage space",
  },
  {
    number: 2,
    title: "Senders book available space",
    description: "Find a traveler going your way and request delivery",
  },
  {
    number: 3,
    title: "Meet, deliver, and earn/save",
    description: "Coordinate pickup and delivery, both parties benefit",
  },
];

export const PROHIBITED_ITEMS = [
  "Illegal substances",
  "Weapons and ammunition",
  "Hazardous materials",
  "Live animals",
  "Perishable goods (unless agreed)",
  "Currency over legal limits",
];
