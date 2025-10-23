/**
 * Example Component: Testimonials from CMS
 * Demonstrates how to fetch and display testimonials from Decap CMS
 */

import { getTestimonials, getFeaturedTestimonials } from "@/lib/cms-content";
import { Star, Quote } from "lucide-react";

interface TestimonialsListProps {
  featuredOnly?: boolean;
  limit?: number;
}

export default function TestimonialsList({
  featuredOnly = false,
  limit,
}: TestimonialsListProps) {
  // Fetch testimonials at build time
  let testimonials = featuredOnly
    ? getFeaturedTestimonials()
    : getTestimonials();

  // Apply limit if specified
  if (limit) {
    testimonials = testimonials.slice(0, limit);
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No testimonials available. Add testimonials via the CMS at{" "}
          <code>/admin</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.slug}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow relative"
        >
          {/* Featured Badge */}
          {testimonial.content.featured && (
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}

          {/* Quote Icon */}
          <Quote className="w-8 h-8 text-blue-200 mb-4" />

          {/* Testimonial Text */}
          <p className="text-gray-700 mb-4 line-clamp-4">
            &quot;{testimonial.content.testimonialText}&quot;
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < parseInt(testimonial.content.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Customer Info */}
          <div className="border-t pt-4">
            <p className="font-semibold text-sm">
              {testimonial.content.customerName}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {testimonial.content.customerType}
              </span>
              {testimonial.content.route && (
                <span className="text-xs text-gray-500">
                  {testimonial.content.route}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
