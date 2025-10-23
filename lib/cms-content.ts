/**
 * CMS Content Reading Utilities
 * Reads markdown files from Decap CMS content folders at build time
 * Uses gray-matter to parse frontmatter metadata
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  CMSProduct,
  CMSTraveler,
  CMSTestimonial,
  CMSContent,
} from "./types";

// Base content directory
const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Generic function to read all markdown files from a collection folder
 */
function getContentFromCollection<T>(
  collectionName: string
): CMSContent<T>[] {
  const collectionPath = path.join(CONTENT_DIR, collectionName);

  // Check if directory exists
  if (!fs.existsSync(collectionPath)) {
    console.warn(`Content directory not found: ${collectionPath}`);
    return [];
  }

  // Read all markdown files
  const fileNames = fs.readdirSync(collectionPath);
  const markdownFiles = fileNames.filter(
    (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
  );

  // Parse each file
  const content = markdownFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(collectionPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse frontmatter with gray-matter
    const { data, content: body } = matter(fileContents);

    return {
      slug,
      content: data as T,
      body,
    };
  });

  return content;
}

/**
 * Get all popular products from CMS
 * Sorted by featured first, then by date
 */
export function getPopularProducts(): CMSContent<CMSProduct>[] {
  const products = getContentFromCollection<CMSProduct>("popular-products");

  // Sort: featured first, then by date (newest first)
  return products.sort((a, b) => {
    if (a.content.featured && !b.content.featured) return -1;
    if (!a.content.featured && b.content.featured) return 1;

    const dateA = new Date(a.content.date).getTime();
    const dateB = new Date(b.content.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get all verified travelers from CMS
 * Sorted by rating (highest first), then by trips completed
 */
export function getVerifiedTravelers(): CMSContent<CMSTraveler>[] {
  const travelers = getContentFromCollection<CMSTraveler>("verified-travelers");

  // Sort: verified first, then by rating, then by trips completed
  return travelers.sort((a, b) => {
    if (a.content.verified && !b.content.verified) return -1;
    if (!a.content.verified && b.content.verified) return 1;

    if (a.content.rating !== b.content.rating) {
      return b.content.rating - a.content.rating;
    }

    return b.content.tripsCompleted - a.content.tripsCompleted;
  });
}

/**
 * Get all testimonials from CMS
 * Sorted by featured first, then by date
 */
export function getTestimonials(): CMSContent<CMSTestimonial>[] {
  const testimonials =
    getContentFromCollection<CMSTestimonial>("testimonials");

  // Sort: featured first, then by date (newest first)
  return testimonials.sort((a, b) => {
    if (a.content.featured && !b.content.featured) return -1;
    if (!a.content.featured && b.content.featured) return 1;

    const dateA = new Date(a.content.date).getTime();
    const dateB = new Date(b.content.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get a single product by slug
 */
export function getProductBySlug(slug: string): CMSContent<CMSProduct> | null {
  const products = getPopularProducts();
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Get a single traveler by slug
 */
export function getTravelerBySlug(
  slug: string
): CMSContent<CMSTraveler> | null {
  const travelers = getVerifiedTravelers();
  return travelers.find((t) => t.slug === slug) || null;
}

/**
 * Get a single testimonial by slug
 */
export function getTestimonialBySlug(
  slug: string
): CMSContent<CMSTestimonial> | null {
  const testimonials = getTestimonials();
  return testimonials.find((t) => t.slug === slug) || null;
}

/**
 * Helper: Get featured products only
 */
export function getFeaturedProducts(): CMSContent<CMSProduct>[] {
  return getPopularProducts().filter((p) => p.content.featured);
}

/**
 * Helper: Get featured testimonials only
 */
export function getFeaturedTestimonials(): CMSContent<CMSTestimonial>[] {
  return getTestimonials().filter((t) => t.content.featured);
}
