"use client";

import { motion } from "framer-motion";
import { popularProducts } from "@/lib/popular-products";
import ProductCard from "@/components/ProductCard";
import BuyerOrderForm from "@/components/BuyerOrderForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();

  // Show first 3 products in hero
  const featuredProducts = popularProducts.slice(0, 3);

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {language === "en" ? (
              <>
                Shop from <span className="text-primary">USA</span> to{" "}
                <span className="text-secondary">Peru</span>
              </>
            ) : (
              <>
                Compra desde <span className="text-primary">USA</span> a{" "}
                <span className="text-secondary">Perú</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Order products from Amazon, eBay & more. We receive in Miami and deliver to Peru."
              : "Ordena productos de Amazon, eBay y más. Recibimos en Miami y entregamos en Perú."}
          </p>
        </motion.div>

        {/* Split Layout: Products Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              {language === "en" ? "Popular Products" : "Productos Populares"}
            </h2>
            <div className="grid gap-4">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right: Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <BuyerOrderForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
