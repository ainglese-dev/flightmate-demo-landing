/**
 * CMS Content Types for Decap CMS
 * These types match the schema defined in /public/admin/config.yml
 */

// Popular Products from CMS
export interface CMSProduct {
  name: string;
  description: string;
  price: number;
  category: "Electronics" | "Fashion" | "Beauty" | "Food" | "Other";
  amazonLink?: string;
  appleLink?: string;
  image: string;
  featured: boolean;
  date: string;
}

// Verified Travelers from CMS
export interface CMSTraveler {
  name: string;
  rating: number;
  photo: string;
  bio: string;
  tripsCompleted: number;
  routes: string[];
  verified: boolean;
  joinDate: string;
}

// Testimonials from CMS
export interface CMSTestimonial {
  customerName: string;
  testimonialText: string;
  rating: "1" | "2" | "3" | "4" | "5";
  customerType: "Sender" | "Traveler";
  route?: string;
  date: string;
  featured: boolean;
}

// Combined type for content with metadata
export interface CMSContent<T> {
  slug: string;
  content: T;
  body?: string; // Optional markdown body content
}
