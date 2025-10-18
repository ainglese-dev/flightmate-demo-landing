"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Package, MapPin, DollarSign, Truck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function HowItWorksPage() {
  const { language } = useLanguage();

  const stepsRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);

  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: 1,
      icon: <Package className="h-6 w-6" />,
      title: language === "en" ? "Submit Your Order" : "Envía tu Orden",
      description: language === "en"
        ? "Fill out the form with product link, WhatsApp, email, and payment method"
        : "Completa el formulario con el link del producto, WhatsApp, email y método de pago"
    },
    {
      number: 2,
      icon: <DollarSign className="h-6 w-6" />,
      title: language === "en" ? "Payment Confirmation" : "Confirmación de Pago",
      description: language === "en"
        ? "Receive payment confirmation via email 📧"
        : "Recibe confirmación de pago por email 📧"
    },
    {
      number: 3,
      icon: <MapPin className="h-6 w-6" />,
      title: language === "en" ? "US Address Provided" : "Dirección USA Proporcionada",
      description: language === "en"
        ? "We send you our Miami address 🏠 and phone number to ship your purchase"
        : "Te enviamos nuestra dirección 🏠 en Miami y teléfono para enviar tu compra"
    },
    {
      number: 4,
      icon: <Truck className="h-6 w-6" />,
      title: language === "en" ? "Upload Tracking" : "Sube el Tracking",
      description: language === "en"
        ? "Upload purchase receipt and tracking # (UPS/USPS/FedEx/Amazon)"
        : "Sube el recibo de compra y número de tracking (UPS/USPS/FedEx/Amazon)"
    },
    {
      number: 5,
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: language === "en" ? "Delivery in Peru" : "Entrega en Perú",
      description: language === "en"
        ? "Track your package until it arrives in Peru! Pick up at our location 🇵🇪"
        : "Rastrea tu paquete hasta que llegue a Perú! Recoge en nuestra ubicación 🇵🇪"
    }
  ];

  const benefits = [
    {
      title: language === "en" ? "Save Money" : "Ahorra Dinero",
      description: language === "en"
        ? "Get products from USA at lower prices than local stores"
        : "Obtén productos de USA a precios más bajos que tiendas locales",
      icon: <DollarSign className="h-8 w-8 text-primary" />
    },
    {
      title: language === "en" ? "No Traveler Contact" : "Sin Contacto con Viajero",
      description: language === "en"
        ? "All communication through our business WhatsApp - safe and secure"
        : "Toda comunicación por WhatsApp de negocio - seguro y confiable",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    {
      title: language === "en" ? "Easy Tracking" : "Fácil Rastreo",
      description: language === "en"
        ? "Track your package from USA to Peru with courier tracking numbers"
        : "Rastrea tu paquete desde USA a Perú con números de tracking de courier",
      icon: <Truck className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "How It Works" : "Cómo Funciona"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Shop from Amazon, eBay, and more. We receive in Miami and deliver to Peru."
              : "Compra en Amazon, eBay y más. Recibimos en Miami y entregamos en Perú."}
          </p>
        </motion.div>

        {/* Steps */}
        <section ref={stepsRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              {language === "en" ? "The Process" : "El Proceso"}
            </h2>
            <p className="text-muted-foreground text-center">
              {language === "en"
                ? "5 simple steps to get your products from USA to Peru"
                : "5 pasos simples para recibir tus productos de USA a Perú"}
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {step.icon}
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {language === "en" ? "Why Choose FlightMate?" : "¿Por Qué Elegir FlightMate?"}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Communication Notice */}
        <section ref={processRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  {language === "en" ? "Important Notice" : "Aviso Importante"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <span>
                    {language === "en"
                      ? "Do NOT contact travelers directly - all communication is through our business WhatsApp"
                      : "NO contactes viajeros directamente - toda comunicación es por WhatsApp de negocio"}
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <span>
                    {language === "en"
                      ? "We work with 2 verified travelers who travel between Miami and Lima every 3 weeks"
                      : "Trabajamos con 2 viajeros verificados que viajan entre Miami y Lima cada 3 semanas"}
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <span>
                    {language === "en"
                      ? "Your package is tracked from USA to Peru with full transparency"
                      : "Tu paquete es rastreado desde USA a Perú con total transparencia"}
                  </span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Coming Soon Notice */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-8 bg-accent/30 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-3">
              {language === "en" ? "More Features Coming Soon!" : "¡Más Funciones Próximamente!"}
            </h3>
            <p className="text-muted-foreground">
              {language === "en"
                ? "We're working on adding more use cases and features to make international shopping even easier."
                : "Estamos trabajando para agregar más casos de uso y funciones para hacer las compras internacionales aún más fáciles."}
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
