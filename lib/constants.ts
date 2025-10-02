export const ROUTES = {
  peru_cities: ["Lima", "Cusco", "Arequipa"],
  usa_cities: ["Miami", "Fort Lauderdale", "Orlando"],
  popular: [
    { from: "Miami", to: "Lima", price: 15 },
    { from: "Miami", to: "Cusco", price: 18 },
    { from: "Lima", to: "Miami", price: 20 },
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
    titleEs: "Los viajeros publican los detalles de su vuelo",
    description: "Share your route, date, and available luggage space",
    descriptionEs: "Comparte tu ruta, fecha y espacio disponible en tu equipaje",
  },
  {
    number: 2,
    title: "Senders book available space",
    titleEs: "Los remitentes reservan espacio disponible",
    description: "Find a traveler going your way and request delivery",
    descriptionEs: "Encuentra un viajero que vaya en tu dirección y solicita la entrega",
  },
  {
    number: 3,
    title: "Meet, deliver, and earn/save",
    titleEs: "Encuentrense, entreguen y ganen/ahorren",
    description: "Coordinate pickup and delivery, both parties benefit",
    descriptionEs: "Coordinen la recogida y entrega, ambas partes se benefician",
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

export const CAPACITY_TYPES = {
  "hand-carry": {
    icon: "👜",
    weight: "up to 5kg",
    label: "Hand-carry only",
    labelEs: "Solo mano",
    description: "Small items that fit in a handbag or small bag",
    descriptionEs: "Artículos pequeños que caben en un bolso o bolsa pequeña",
  },
  "backpack": {
    icon: "🎒",
    weight: "up to 10kg",
    label: "Backpack/Carry-on",
    labelEs: "Mochila/Equipaje de mano",
    description: "Items that fit in a backpack or carry-on luggage",
    descriptionEs: "Artículos que caben en una mochila o equipaje de mano",
  },
  "checked-luggage": {
    icon: "🧳",
    weight: "up to 20kg",
    label: "Checked luggage",
    labelEs: "Maleta facturada",
    description: "Standard checked luggage allowance",
    descriptionEs: "Equipaje facturado estándar",
  },
  "multiple-bags": {
    icon: "📦",
    weight: "20kg+",
    label: "Multiple bags",
    labelEs: "Múltiples maletas",
    description: "Multiple pieces of luggage or extra capacity",
    descriptionEs: "Múltiples piezas de equipaje o capacidad extra",
  },
} as const;

// CONTACT_INFO has been moved to lib/dev-template-company-info.ts
// Import from there: import { COMPANY_INFO } from "@/lib/dev-template-company-info"
