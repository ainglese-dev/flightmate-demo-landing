"use client";

import { useRef } from "react";
import { ExternalLink, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { popularProducts } from "@/lib/popular-products";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";
import { analytics } from "@/lib/analytics";

export default function PopularProducts() {
  const t = useTranslation();
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.popularProducts.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.popularProducts.subtitle}
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {popularProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {/* Product Gradient Visual */}
                      <div className={`aspect-square mb-4 rounded-lg ${product.gradientClass}`} />

                      {/* Product Header */}
                      <div className="mb-4">
                        <div className="flex gap-2 mb-2 flex-wrap">
                          <Badge variant="secondary">
                            {language === "en" ? product.category : product.categoryEs}
                          </Badge>
                          {product.isGift && (
                            <Badge variant="default" className="bg-pink-500 hover:bg-pink-600">
                              <Gift className="h-3 w-3 mr-1" />
                              {language === "en" ? "Gift" : "Regalo"}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                          {language === "en" ? product.name : product.nameEs}
                        </h3>
                      </div>

                      {/* Product Details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.popularProducts.estimatedCost}:</span>
                          <span className="font-semibold">{product.estimatedCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.popularProducts.weight}:</span>
                          <span className="font-semibold">{product.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t.popularProducts.shippingCost}:</span>
                          <span className="font-semibold text-primary">{product.shippingCost}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          onClick={() => analytics.trackProductClick(product.name, "Amazon")}
                        >
                          <Button variant="default" className="w-full" size="sm">
                            {t.popularProducts.viewOnAmazon}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                        {product.ebayLink && (
                          <a
                            href={product.ebayLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                            onClick={() => analytics.trackProductClick(product.name, "eBay")}
                          >
                            <Button variant="outline" className="w-full" size="sm">
                              {t.popularProducts.viewOnEbay}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Mobile Scroll Hint */}
        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
          {language === "en" ? "← Swipe to see more →" : "← Desliza para ver más →"}
        </p>
      </div>
    </section>
  );
}
