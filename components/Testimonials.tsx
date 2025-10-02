"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/testimonials";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "en" ? "What Our Users Say" : "Lo Que Dicen Nuestros Usuarios"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === "en"
              ? "Real experiences from travelers and senders"
              : "Experiencias reales de viajeros y remitentes"}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-none w-[320px] md:w-[380px] snap-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Avatar with gradient */}
                  <div className={`w-16 h-16 rounded-full mb-4 ${testimonial.gradientClass}`} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-4 line-clamp-4">
                    "{language === "en" ? testimonial.quote : testimonial.quoteEs}"
                  </p>

                  {/* Name and Role */}
                  <div className="border-t pt-4">
                    <p className="font-semibold">
                      {language === "en" ? testimonial.name : testimonial.nameEs}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? testimonial.role : testimonial.roleEs} • {testimonial.route}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
