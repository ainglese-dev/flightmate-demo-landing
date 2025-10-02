"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/lib/faq-data";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";

export default function FAQPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Filter questions based on search query and category
  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter((q) => {
      const matchesSearch =
        !searchQuery ||
        (language === "en"
          ? q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
          : q.questionEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answerEs.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        !selectedCategory || category.id === selectedCategory;

      return matchesSearch && matchesCategory;
    }),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en"
              ? "Frequently Asked Questions"
              : "Preguntas Frecuentes"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Find answers to common questions about FlightMate, our platform, and how to get started."
              : "Encuentra respuestas a preguntas comunes sobre FlightMate, nuestra plataforma y cómo comenzar."}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={
                language === "en"
                  ? "Search questions..."
                  : "Buscar preguntas..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            {language === "en" ? "All" : "Todas"}
          </Badge>
          {faqCategories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="mr-1">{category.icon}</span>
              {language === "en" ? category.title : category.titleEs}
            </Badge>
          ))}
        </motion.div>

        {/* FAQ Categories */}
        {filteredCategories.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              {language === "en"
                ? "No questions found matching your search."
                : "No se encontraron preguntas que coincidan con tu búsqueda."}
            </p>
          </motion.div>
        ) : (
          filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className="mb-8"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold">
                      {language === "en" ? category.title : category.titleEs}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((question) => (
                      <AccordionItem key={question.id} value={`item-${question.id}`}>
                        <AccordionTrigger className="text-left">
                          {language === "en" ? question.question : question.questionEs}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {language === "en" ? question.answer : question.answerEs}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 p-6 bg-muted/50 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-2">
            {language === "en"
              ? "Still have questions?"
              : "¿Todavía tienes preguntas?"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === "en"
              ? "Our support team is here to help. Reach out anytime."
              : "Nuestro equipo de soporte está aquí para ayudar. Contáctanos en cualquier momento."}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {language === "en" ? "Contact Support" : "Contactar Soporte"}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
