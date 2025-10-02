/**
 * ============================================================================
 * DEV TEMPLATE: PRODUCT CATEGORIES & QUICK LINKS
 * ============================================================================
 *
 * PURPOSE:
 * Organize popular products by category with quick links to online stores.
 * Complements lib/popular-products.ts by providing category-level organization
 * and bulk shopping links.
 *
 * USAGE:
 * import { productCategories } from '@/lib/dev-template-product-categories'
 * - Used in: Homepage categories section, dedicated Products page
 * - Shows average shipping costs per category
 * - Provides quick links to Amazon, eBay, Best Buy, etc.
 *
 * HOW TO ADD A NEW CATEGORY:
 * 1. Copy the template at the bottom of this file
 * 2. Fill in category details (name, icon, description)
 * 3. Add popular items for that category
 * 4. Include relevant store links
 * 5. Save - new category appears automatically!
 *
 * SCALABILITY:
 * - Add/remove categories easily
 * - Update store links in one place
 * - Bilingual support (EN/ES)
 * - Type-safe structure
 *
 * ============================================================================
 */

/**
 * PRODUCT CATEGORY INTERFACE
 * Defines the structure of each category object
 */
export interface ProductCategory {
  id: string; // Unique identifier (lowercase-hyphenated)
  name: string; // Category name in English
  nameEs: string; // Category name in Spanish
  icon: string; // Lucide icon name (e.g., "Smartphone", "ShoppingBag")
  description: string; // Brief description in English
  descriptionEs: string; // Brief description in Spanish
  popularItems: string[]; // List of popular product names in this category
  averageWeight: string; // Typical weight range (e.g., "0.5-2kg")
  averageShippingCost: string; // Typical shipping cost via FlightMate
  traditionalCourierCost?: string; // Optional: traditional courier cost for comparison
  quickLinks: {
    // Store-specific search links
    amazon?: string;
    ebay?: string;
    bestbuy?: string;
    walmart?: string;
    target?: string;
    macys?: string;
    sephora?: string;
    ulta?: string;
    custom?: { name: string; url: string }[]; // Custom stores
  };
  tags?: string[]; // Optional: SEO tags (e.g., ["gifts", "trending", "tech"])
}

/**
 * ============================================================================
 * PRODUCT CATEGORIES ARRAY
 * Add new categories here by copy-pasting the template below
 * ============================================================================
 */
export const productCategories: ProductCategory[] = [
  /**
   * CATEGORY #1 - ELECTRONICS
   */
  {
    id: "electronics",
    name: "Electronics & Gadgets",
    nameEs: "Electrónica y Gadgets",
    icon: "Smartphone",
    description: "Latest smartphones, laptops, tablets, smartwatches, and tech accessories",
    descriptionEs: "Últimos smartphones, laptops, tablets, smartwatches y accesorios tecnológicos",
    popularItems: [
      "iPhone 15 Pro",
      "AirPods Pro",
      "Apple Watch Series 9",
      "iPad Air",
      "MacBook Air",
      "Samsung Galaxy S24",
      "Sony WH-1000XM5 Headphones",
      "GoPro Hero 12",
    ],
    averageWeight: "0.2-2kg",
    averageShippingCost: "$3-$30",
    traditionalCourierCost: "$50-$200",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=electronics",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=electronics",
      bestbuy: "https://www.bestbuy.com/site/electronics/top-deals/pcmcat1563299784494.c",
    },
    tags: ["tech", "trending", "high-value", "gifts"],
  },

  /**
   * CATEGORY #2 - FASHION & FOOTWEAR
   */
  {
    id: "fashion-footwear",
    name: "Fashion & Footwear",
    nameEs: "Moda y Calzado",
    icon: "ShoppingBag",
    description: "Designer clothing, sneakers, shoes, bags, and fashion accessories",
    descriptionEs: "Ropa de diseñador, zapatillas, zapatos, bolsos y accesorios de moda",
    popularItems: [
      "Nike Air Max Sneakers",
      "Adidas Ultraboost",
      "Levi's Jeans",
      "North Face Jackets",
      "Ray-Ban Sunglasses",
      "Michael Kors Bags",
      "Tommy Hilfiger Apparel",
      "Vans Shoes",
    ],
    averageWeight: "0.5-2kg",
    averageShippingCost: "$7.50-$30",
    traditionalCourierCost: "$60-$150",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=fashion+clothing",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=fashion+sneakers",
      macys: "https://www.macys.com/",
      target: "https://www.target.com/c/clothing-shoes-accessories/-/N-5xtdi",
    },
    tags: ["fashion", "shoes", "apparel", "gifts"],
  },

  /**
   * CATEGORY #3 - BEAUTY & SKINCARE
   */
  {
    id: "beauty-skincare",
    name: "Beauty & Skincare",
    nameEs: "Belleza y Cuidado de la Piel",
    icon: "Sparkles",
    description: "Makeup, skincare, fragrances, hair care, and beauty tools",
    descriptionEs: "Maquillaje, cuidado de la piel, fragancias, cuidado del cabello y herramientas de belleza",
    popularItems: [
      "Estée Lauder Skincare Sets",
      "MAC Cosmetics",
      "Clinique Products",
      "The Ordinary Serums",
      "CeraVe Moisturizers",
      "Dyson Hair Tools",
      "Olaplex Hair Treatments",
      "Victoria's Secret Fragrances",
    ],
    averageWeight: "0.2-1kg",
    averageShippingCost: "$3-$15",
    traditionalCourierCost: "$40-$100",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=beauty+skincare",
      sephora: "https://www.sephora.com/",
      ulta: "https://www.ulta.com/",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=beauty+products",
    },
    tags: ["beauty", "skincare", "makeup", "gifts", "trending"],
  },

  /**
   * CATEGORY #4 - HEALTH & SUPPLEMENTS
   */
  {
    id: "health-supplements",
    name: "Health & Supplements",
    nameEs: "Salud y Suplementos",
    icon: "Heart",
    description: "Vitamins, supplements, protein powders, health monitors, and wellness products",
    descriptionEs: "Vitaminas, suplementos, proteínas en polvo, monitores de salud y productos de bienestar",
    popularItems: [
      "Nature Made Vitamins",
      "Centrum Multivitamins",
      "Whey Protein Powder",
      "Omega-3 Fish Oil",
      "Glucosamine Supplements",
      "Blood Pressure Monitors",
      "Thermometers",
      "First Aid Kits",
    ],
    averageWeight: "0.3-1.5kg",
    averageShippingCost: "$4.50-$22.50",
    traditionalCourierCost: "$50-$120",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=vitamins+supplements",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=health+supplements",
      walmart: "https://www.walmart.com/browse/health/vitamins-supplements/976760_1005863",
    },
    tags: ["health", "wellness", "supplements", "medical"],
  },

  /**
   * CATEGORY #5 - FITNESS & SPORTS
   */
  {
    id: "fitness-sports",
    name: "Fitness & Sports",
    nameEs: "Fitness y Deportes",
    icon: "Dumbbell",
    description: "Workout equipment, yoga gear, athletic wear, and sports accessories",
    descriptionEs: "Equipo de entrenamiento, equipo de yoga, ropa deportiva y accesorios deportivos",
    popularItems: [
      "Lululemon Yoga Mats",
      "Resistance Bands",
      "Fitbit Fitness Trackers",
      "Nike Athletic Wear",
      "Under Armour Gear",
      "Foam Rollers",
      "Jump Ropes",
      "Water Bottles (Hydro Flask)",
    ],
    averageWeight: "0.5-2kg",
    averageShippingCost: "$7.50-$30",
    traditionalCourierCost: "$60-$150",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=fitness+equipment",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=fitness+sports",
      target: "https://www.target.com/c/sports-outdoors/-/N-5xt4z",
    },
    tags: ["fitness", "sports", "workout", "athletic"],
  },

  /**
   * CATEGORY #6 - BABY & KIDS
   */
  {
    id: "baby-kids",
    name: "Baby & Kids",
    nameEs: "Bebé y Niños",
    icon: "Baby",
    description: "Baby formula, diapers, toys, children's clothing, and parenting essentials",
    descriptionEs: "Fórmula infantil, pañales, juguetes, ropa infantil y artículos esenciales para padres",
    popularItems: [
      "Enfamil Baby Formula",
      "Similac Formula",
      "Pampers Diapers",
      "Baby Monitors",
      "Fisher-Price Toys",
      "Carter's Baby Clothes",
      "Strollers (foldable)",
      "Baby Bottles (Dr. Brown's)",
    ],
    averageWeight: "0.5-3kg",
    averageShippingCost: "$7.50-$45",
    traditionalCourierCost: "$60-$200",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=baby+products",
      walmart: "https://www.walmart.com/browse/baby/5427",
      target: "https://www.target.com/c/baby/-/N-5xtly",
    },
    tags: ["baby", "kids", "children", "parenting", "formula"],
  },

  /**
   * CATEGORY #7 - HOME & KITCHEN
   */
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    nameEs: "Hogar y Cocina",
    icon: "Home",
    description: "Small appliances, cookware, home decor, and kitchen gadgets",
    descriptionEs: "Electrodomésticos pequeños, utensilios de cocina, decoración del hogar y gadgets de cocina",
    popularItems: [
      "Instant Pot",
      "Ninja Blenders",
      "Air Fryers",
      "Coffee Makers (Keurig)",
      "KitchenAid Stand Mixers",
      "Cookware Sets",
      "Bed Sheets (Egyptian Cotton)",
      "Smart Light Bulbs",
    ],
    averageWeight: "1-5kg",
    averageShippingCost: "$15-$75",
    traditionalCourierCost: "$80-$300",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=home+kitchen",
      walmart: "https://www.walmart.com/browse/home/4044",
      target: "https://www.target.com/c/home/-/N-5xtnr",
    },
    tags: ["home", "kitchen", "appliances", "decor"],
  },

  /**
   * CATEGORY #8 - TOYS & GAMES
   */
  {
    id: "toys-games",
    name: "Toys & Games",
    nameEs: "Juguetes y Juegos",
    icon: "Gamepad2",
    description: "Video games, board games, action figures, LEGO, and educational toys",
    descriptionEs: "Videojuegos, juegos de mesa, figuras de acción, LEGO y juguetes educativos",
    popularItems: [
      "PlayStation 5 Games",
      "Nintendo Switch Games",
      "LEGO Sets",
      "Hot Wheels Collections",
      "Barbie Dolls",
      "Monopoly / Board Games",
      "Funko Pop Figures",
      "Nerf Blasters",
    ],
    averageWeight: "0.3-2kg",
    averageShippingCost: "$4.50-$30",
    traditionalCourierCost: "$50-$150",
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=toys+games",
      walmart: "https://www.walmart.com/browse/toys/4171",
      target: "https://www.target.com/c/toys/-/N-5xt0g",
    },
    tags: ["toys", "games", "kids", "gifts", "entertainment"],
  },
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * Filter and organize categories for different use cases
 * ============================================================================
 */

/**
 * Get category by ID
 */
export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.id === id);
}

/**
 * Get categories by tag
 */
export function getCategoriesByTag(tag: string): ProductCategory[] {
  return productCategories.filter((cat) => cat.tags?.includes(tag));
}

/**
 * Get all unique tags from all categories
 */
export function getAllTags(): string[] {
  const allTags = productCategories.flatMap((cat) => cat.tags || []);
  return Array.from(new Set(allTags));
}

/**
 * Get gift-suitable categories
 */
export function getGiftCategories(): ProductCategory[] {
  return getCategoriesByTag("gifts");
}

/**
 * Get trending categories
 */
export function getTrendingCategories(): ProductCategory[] {
  return getCategoriesByTag("trending");
}

/**
 * Search categories by name or description
 */
export function searchCategories(query: string, language: "en" | "es" = "en"): ProductCategory[] {
  const lowerQuery = query.toLowerCase();
  return productCategories.filter((cat) => {
    const name = language === "en" ? cat.name : cat.nameEs;
    const description = language === "en" ? cat.description : cat.descriptionEs;
    return (
      name.toLowerCase().includes(lowerQuery) ||
      description.toLowerCase().includes(lowerQuery) ||
      cat.popularItems.some((item) => item.toLowerCase().includes(lowerQuery))
    );
  });
}

/**
 * ============================================================================
 * COPY-PASTE TEMPLATE FOR NEW CATEGORIES
 * ============================================================================
 *
 * Copy the block below and add to the productCategories array:
 *
  {
    id: "category-slug", // lowercase-hyphenated
    name: "Category Name",
    nameEs: "Nombre de Categoría",
    icon: "IconName", // From lucide-react
    description: "Brief description in English",
    descriptionEs: "Breve descripción en español",
    popularItems: [
      "Product 1",
      "Product 2",
      "Product 3",
    ],
    averageWeight: "0.5-2kg",
    averageShippingCost: "$7.50-$30",
    traditionalCourierCost: "$60-$150", // Optional
    quickLinks: {
      amazon: "https://www.amazon.com/s?k=search+term",
      ebay: "https://www.ebay.com/sch/i.html?_nkw=search+term",
      // Add more stores as needed
    },
    tags: ["tag1", "tag2"], // Optional
  },
 *
 * ============================================================================
 */
