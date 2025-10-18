"use client";

import { ExternalLink, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PopularProduct } from "@/lib/popular-products";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: PopularProduct;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
        <CardContent className="p-4">
          {/* Product Gradient Visual */}
          <div className={`aspect-video mb-3 rounded-lg ${product.gradientClass}`} />

          {/* Product Header */}
          <div className="mb-3">
            <div className="flex gap-2 mb-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                {language === "en" ? product.category : product.categoryEs}
              </Badge>
              {product.isGift && (
                <Badge variant="default" className="bg-secondary hover:bg-secondary/90 text-xs">
                  <Gift className="h-3 w-3 mr-1" />
                  {language === "en" ? "Gift" : "Regalo"}
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-base mb-1">
              {language === "en" ? product.name : product.nameEs}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === "en" ? "Shipping" : "Envío"}: <span className="text-primary font-semibold">{product.shippingCost}</span>
            </p>
          </div>

          {/* Action Button */}
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="default" className="w-full" size="sm">
              {language === "en" ? "View" : "Ver"}
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
