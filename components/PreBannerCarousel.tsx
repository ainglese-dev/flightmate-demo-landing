"use client";

import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { popularProducts } from "@/lib/popular-products";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

export default function PreBannerCarousel() {
  const { language } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-muted/30 py-4 border-b">
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {popularProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-auto">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 bg-background rounded-lg px-4 py-2 border hover:border-primary transition-colors min-w-[250px]">
                    <div className={`w-12 h-12 rounded ${product.gradientClass} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">
                        {language === "en" ? product.name : product.nameEs}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {product.shippingCost}
                        </Badge>
                        {product.isGift && (
                          <span className="text-xs">🎁</span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
