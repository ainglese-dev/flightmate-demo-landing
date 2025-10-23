/**
 * Example Component: Verified Travelers from CMS
 * Demonstrates how to fetch and display travelers from Decap CMS
 */

import { getVerifiedTravelers } from "@/lib/cms-content";
import Image from "next/image";
import { Star, CheckCircle2, MapPin } from "lucide-react";

interface VerifiedTravelersListProps {
  limit?: number;
}

export default function VerifiedTravelersList({
  limit,
}: VerifiedTravelersListProps) {
  // Fetch travelers at build time
  let travelers = getVerifiedTravelers();

  // Apply limit if specified
  if (limit) {
    travelers = travelers.slice(0, limit);
  }

  if (travelers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No travelers available. Add travelers via the CMS at{" "}
          <code>/admin</code>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {travelers.map((traveler) => (
        <div
          key={traveler.slug}
          className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          {/* Traveler Photo and Name */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              {traveler.content.photo ? (
                <Image
                  src={traveler.content.photo}
                  alt={traveler.content.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                  No Photo
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{traveler.content.name}</h3>
                {traveler.content.verified && (
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">
                  {traveler.content.rating.toFixed(1)}
                </span>
                <span className="text-xs text-gray-500">
                  ({traveler.content.tripsCompleted} trips)
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {traveler.content.bio}
          </p>

          {/* Routes */}
          {traveler.content.routes && traveler.content.routes.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>Frequent Routes:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {traveler.content.routes.map((route, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                  >
                    {route}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
