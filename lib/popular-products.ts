export interface PopularProduct {
  id: number;
  name: string;
  nameEs: string;
  category: string;
  categoryEs: string;
  estimatedCost: string;
  weight: string;
  shippingCost: string;
  amazonLink: string;
  ebayLink?: string;
  imageUrl?: string;
}

export const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "AirPods Pro (2nd Gen)",
    nameEs: "AirPods Pro (2da Gen)",
    category: "Electronics",
    categoryEs: "Electrónica",
    estimatedCost: "$249",
    weight: "0.1kg",
    shippingCost: "$1.50",
    amazonLink: "https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=airpods+pro+2nd+generation",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    nameEs: "iPhone 15 Pro",
    category: "Electronics",
    categoryEs: "Electrónica",
    estimatedCost: "$999",
    weight: "0.2kg",
    shippingCost: "$3",
    amazonLink: "https://www.amazon.com/Apple-iPhone-15-Pro-Titanium/dp/B0CMTFG6B6",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=iphone+15+pro",
  },
  {
    id: 3,
    name: "Nike Air Max Sneakers",
    nameEs: "Zapatillas Nike Air Max",
    category: "Fashion",
    categoryEs: "Moda",
    estimatedCost: "$150",
    weight: "1.0kg",
    shippingCost: "$15",
    amazonLink: "https://www.amazon.com/s?k=nike+air+max",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=nike+air+max",
  },
  {
    id: 4,
    name: "Estée Lauder Skincare Set",
    nameEs: "Set de Cuidado Estée Lauder",
    category: "Beauty",
    categoryEs: "Belleza",
    estimatedCost: "$89",
    weight: "0.3kg",
    shippingCost: "$4.50",
    amazonLink: "https://www.amazon.com/s?k=estee+lauder+skincare+set",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=estee+lauder+skincare",
  },
  {
    id: 5,
    name: "Nature Made Vitamins",
    nameEs: "Vitaminas Nature Made",
    category: "Health",
    categoryEs: "Salud",
    estimatedCost: "$45",
    weight: "0.5kg",
    shippingCost: "$7.50",
    amazonLink: "https://www.amazon.com/s?k=nature+made+vitamins",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=nature+made+vitamins",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    nameEs: "Apple Watch Series 9",
    category: "Electronics",
    categoryEs: "Electrónica",
    estimatedCost: "$399",
    weight: "0.15kg",
    shippingCost: "$2.25",
    amazonLink: "https://www.amazon.com/Apple-Smartwatch-Aluminum-Fitness-Detection/dp/B0CHX9CY7W",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=apple+watch+series+9",
  },
  {
    id: 7,
    name: "Beats Studio Pro",
    nameEs: "Beats Studio Pro",
    category: "Electronics",
    categoryEs: "Electrónica",
    estimatedCost: "$349",
    weight: "0.3kg",
    shippingCost: "$4.50",
    amazonLink: "https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PYX9SJ",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=beats+studio+pro",
  },
  {
    id: 8,
    name: "Lululemon Yoga Mat",
    nameEs: "Tapete de Yoga Lululemon",
    category: "Fitness",
    categoryEs: "Fitness",
    estimatedCost: "$88",
    weight: "1.2kg",
    shippingCost: "$18",
    amazonLink: "https://www.amazon.com/s?k=lululemon+yoga+mat",
    ebayLink: "https://www.ebay.com/sch/i.html?_nkw=lululemon+yoga+mat",
  },
];
