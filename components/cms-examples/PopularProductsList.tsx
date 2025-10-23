/**
 * Example Component: Popular Products from CMS
 * Demonstrates how to fetch and display products from Decap CMS
 */

import { getPopularProducts, getFeaturedProducts } from "@/lib/cms-content";
import Image from "next/image";
import Link from "next/link";

interface PopularProductsListProps {
  featuredOnly?: boolean;
  limit?: number;
}

export default function PopularProductsList({
  featuredOnly = false,
  limit,
}: PopularProductsListProps) {
  // Fetch products at build time
  let products = featuredOnly ? getFeaturedProducts() : getPopularProducts();

  // Apply limit if specified
  if (limit) {
    products = products.slice(0, limit);
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No products available. Add products via the CMS at{" "}
          <code>/admin</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.slug}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Product Image */}
          <div className="relative h-48 bg-gray-100">
            {product.content.image ? (
              <Image
                src={product.content.image}
                alt={product.content.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Image
              </div>
            )}
            {product.content.featured && (
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{product.content.name}</h3>
              <span className="text-blue-600 font-bold">
                ${product.content.price}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.content.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {product.content.category}
              </span>

              <div className="flex gap-2">
                {product.content.amazonLink && (
                  <Link
                    href={product.content.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Amazon
                  </Link>
                )}
                {product.content.appleLink && (
                  <Link
                    href={product.content.appleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Apple
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
