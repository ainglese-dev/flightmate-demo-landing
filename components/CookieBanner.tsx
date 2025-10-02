"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <Card className="mx-auto max-w-4xl shadow-2xl border-2">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Cookie className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    {language === "en" ? "We use cookies" : "Usamos cookies"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking \"Accept,\" you agree to our website's cookie use as described in our "
                      : "Usamos cookies esenciales para que nuestro sitio funcione. Con tu consentimiento, también podemos usar cookies no esenciales para mejorar la experiencia del usuario y analizar el tráfico del sitio web. Al hacer clic en \"Aceptar\", aceptas el uso de cookies de nuestro sitio web como se describe en nuestra "}
                    <Link
                      href="/privacy-policy"
                      className="text-primary hover:underline font-medium"
                    >
                      {language === "en" ? "Privacy Policy" : "Política de Privacidad"}
                    </Link>
                    .
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={handleReject}
                    className="flex-1 sm:flex-none"
                  >
                    {language === "en" ? "Reject" : "Rechazar"}
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none"
                  >
                    {language === "en" ? "Accept" : "Aceptar"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
