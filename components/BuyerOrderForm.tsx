"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageProvider";
import { ShoppingBag, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  phone: string;
  whatsapp: string;
  email: string;
  productLink: string;
  eta: string;
  paymentMethod: string;
}

export default function BuyerOrderForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    whatsapp: "",
    email: "",
    productLink: "",
    eta: "",
    paymentMethod: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHuman, setIsHuman] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS or Google Forms)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      phone: "",
      whatsapp: "",
      email: "",
      productLink: "",
      eta: "",
      paymentMethod: "",
    });
    setIsHuman(false);
  };

  const isFormValid =
    formData.phone &&
    formData.whatsapp &&
    formData.email &&
    formData.productLink &&
    formData.eta &&
    formData.paymentMethod &&
    isHuman;

  return (
    <>
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">
                {language === "en" ? "Order from USA" : "Ordena desde USA"}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === "en"
                ? "Fill out this form and we'll handle the rest"
                : "Completa este formulario y nosotros nos encargamos del resto"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                {language === "en" ? "Phone Number" : "Teléfono"} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+51 999 999 999"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+51 999 999 999"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>

            {/* Product Link */}
            <div>
              <label htmlFor="productLink" className="block text-sm font-medium mb-1">
                {language === "en" ? "Product Link 🎁" : "Link del Producto 🎁"} *
              </label>
              <input
                type="url"
                id="productLink"
                name="productLink"
                value={formData.productLink}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://www.amazon.com/..."
              />
            </div>

            {/* ETA */}
            <div>
              <label htmlFor="eta" className="block text-sm font-medium mb-1">
                {language === "en" ? "Expected Delivery Date" : "Fecha Estimada de Entrega"} *
              </label>
              <input
                type="date"
                id="eta"
                name="eta"
                value={formData.eta}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium mb-1">
                {language === "en" ? "Payment Method" : "Método de Pago"} *
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              >
                <option value="">
                  {language === "en" ? "Select payment method" : "Selecciona método de pago"}
                </option>
                <option value="yape">Yape</option>
                <option value="plin">Plin</option>
                <option value="bank_transfer">{language === "en" ? "Bank Transfer" : "Transferencia Bancaria"}</option>
                <option value="cash">{language === "en" ? "Cash (on delivery)" : "Efectivo (contra entrega)"}</option>
              </select>
            </div>

            {/* Human Verification */}
            <div className="flex items-start gap-3 p-4 border rounded-md bg-muted/30">
              <input
                type="checkbox"
                id="human-check"
                checked={isHuman}
                onChange={(e) => setIsHuman(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-input"
              />
              <label htmlFor="human-check" className="text-sm cursor-pointer">
                {language === "en"
                  ? "I confirm I am a human and agree to the terms of service"
                  : "Confirmo que soy humano y acepto los términos de servicio"}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting
                ? (language === "en" ? "Submitting..." : "Enviando...")
                : (language === "en" ? "Submit Order" : "Enviar Orden")}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {language === "en" ? "Order Received!" : "¡Orden Recibida!"}
                </h3>
                <div className="text-left space-y-3 text-sm">
                  <p className="font-semibold">
                    {language === "en" ? "What happens next:" : "Qué sucede ahora:"}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>
                      {language === "en"
                        ? "You'll receive payment confirmation via email 📧"
                        : "Recibirás confirmación de pago por email 📧"}
                    </li>
                    <li>
                      {language === "en"
                        ? "We'll send you the US address 🏠 and phone number for delivery"
                        : "Te enviaremos la dirección 🏠 en USA y teléfono para la entrega"}
                    </li>
                    <li>
                      {language === "en"
                        ? "All communication will be via our business WhatsApp"
                        : "Toda comunicación será por WhatsApp de negocio"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Upload purchase receipt & tracking # (UPS/USPS/FedEx/Amazon)"
                        : "Sube el recibo de compra y número de tracking (UPS/USPS/FedEx/Amazon)"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Track your package until it arrives in Peru! 🇵🇪"
                        : "Rastrea tu paquete hasta que llegue a Perú! 🇵🇪"}
                    </li>
                  </ol>
                </div>
                <Button
                  onClick={() => setShowSuccess(false)}
                  className="w-full mt-6"
                >
                  {language === "en" ? "Got it!" : "¡Entendido!"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
