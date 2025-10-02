"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "Last updated: October 2024",
      intro: "At FlightMate, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.",
      sections: [
        {
          title: "1. Information We Collect",
          content: `We collect information that you provide directly to us, including:

• **Personal Information**: Name, email address, phone number, and payment information
• **Profile Data**: User preferences, language settings, and profile photos
• **Travel Information**: Flight details, routes, dates, and luggage capacity
• **Package Information**: Item descriptions, weight, dimensions, and delivery instructions
• **Communication Data**: Messages exchanged between travelers and senders
• **Usage Data**: How you interact with our platform, including pages visited and features used
• **Device Information**: IP address, browser type, operating system, and device identifiers`
        },
        {
          title: "2. How We Use Your Information",
          content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Facilitate connections between travelers and senders
• Process transactions and send transaction notifications
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities
• Detect, prevent, and address technical issues and fraudulent activity
• Personalize your experience and deliver relevant content
• Comply with legal obligations and enforce our Terms of Service`
        },
        {
          title: "3. Information Sharing and Disclosure",
          content: `We may share your information in the following circumstances:

• **With Other Users**: When you post a trip or request delivery, certain information (name, rating, route) is visible to other users
• **With Service Providers**: We work with third-party service providers who perform services on our behalf (payment processing, analytics, email delivery)
• **For Legal Reasons**: We may disclose information if required by law or in response to valid legal requests
• **Business Transfers**: If FlightMate is involved in a merger, acquisition, or sale of assets, your information may be transferred
• **With Your Consent**: We may share information with your explicit consent

We do not sell your personal information to third parties.`
        },
        {
          title: "4. Your Rights and Choices",
          content: `You have the following rights regarding your information:

• **Access**: Request a copy of the personal information we hold about you
• **Correction**: Request correction of inaccurate or incomplete information
• **Deletion**: Request deletion of your personal information
• **Opt-Out**: Unsubscribe from marketing communications
• **Data Portability**: Request your data in a portable format
• **Restrict Processing**: Request limitation of how we use your data

To exercise these rights, contact us at privacy@flightmate.com or visit our Habeas Data page.`
        },
        {
          title: "5. Cookies and Tracking Technologies",
          content: `We use cookies and similar tracking technologies to:

• **Essential Cookies**: Required for the website to function (authentication, security, language preferences)
• **Analytics Cookies**: Help us understand how users interact with our platform (Google Analytics)
• **Preference Cookies**: Remember your settings and preferences

You can control cookies through your browser settings. Note that disabling essential cookies may affect website functionality.`
        },
        {
          title: "6. Data Security",
          content: `We implement appropriate technical and organizational measures to protect your information, including:

• Encryption of data in transit and at rest
• Secure data storage with access controls
• Regular security audits and updates
• Employee training on data protection

However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
        },
        {
          title: "7. International Data Transfers",
          content: `FlightMate operates between the United States and Peru. Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.`
        },
        {
          title: "8. Children's Privacy",
          content: `FlightMate is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
        },
        {
          title: "9. Changes to This Privacy Policy",
          content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.`
        },
        {
          title: "10. Contact Us",
          content: `If you have questions or concerns about this Privacy Policy, please contact us:

• **Email**: privacy@flightmate.com
• **Contact Form**: Visit our Contact page
• **WhatsApp**: Available on our website
• **Mail**: FlightMate Legal Department (address available upon request)`
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      subtitle: "Última actualización: Octubre 2024",
      intro: "En FlightMate, tomamos tu privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando usas nuestra plataforma.",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: `Recopilamos información que nos proporcionas directamente, incluyendo:

• **Información Personal**: Nombre, dirección de correo electrónico, número de teléfono e información de pago
• **Datos de Perfil**: Preferencias de usuario, configuración de idioma y fotos de perfil
• **Información de Viaje**: Detalles del vuelo, rutas, fechas y capacidad de equipaje
• **Información de Paquetes**: Descripciones de artículos, peso, dimensiones e instrucciones de entrega
• **Datos de Comunicación**: Mensajes intercambiados entre viajeros y remitentes
• **Datos de Uso**: Cómo interactúas con nuestra plataforma, incluyendo páginas visitadas y funciones utilizadas
• **Información del Dispositivo**: Dirección IP, tipo de navegador, sistema operativo e identificadores de dispositivo`
        },
        {
          title: "2. Cómo Usamos Tu Información",
          content: `Usamos la información que recopilamos para:

• Proporcionar, mantener y mejorar nuestros servicios
• Facilitar conexiones entre viajeros y remitentes
• Procesar transacciones y enviar notificaciones de transacciones
• Enviarte avisos técnicos, actualizaciones y mensajes de soporte
• Responder a tus comentarios, preguntas y solicitudes de servicio al cliente
• Monitorear y analizar tendencias, uso y actividades
• Detectar, prevenir y abordar problemas técnicos y actividad fraudulenta
• Personalizar tu experiencia y entregar contenido relevante
• Cumplir con obligaciones legales y hacer cumplir nuestros Términos de Servicio`
        },
        {
          title: "3. Compartir y Divulgación de Información",
          content: `Podemos compartir tu información en las siguientes circunstancias:

• **Con Otros Usuarios**: Cuando publicas un viaje o solicitas entrega, cierta información (nombre, calificación, ruta) es visible para otros usuarios
• **Con Proveedores de Servicios**: Trabajamos con proveedores externos que realizan servicios en nuestro nombre (procesamiento de pagos, análisis, entrega de correos)
• **Por Razones Legales**: Podemos divulgar información si lo requiere la ley o en respuesta a solicitudes legales válidas
• **Transferencias Comerciales**: Si FlightMate está involucrado en una fusión, adquisición o venta de activos, tu información puede ser transferida
• **Con Tu Consentimiento**: Podemos compartir información con tu consentimiento explícito

No vendemos tu información personal a terceros.`
        },
        {
          title: "4. Tus Derechos y Opciones",
          content: `Tienes los siguientes derechos respecto a tu información:

• **Acceso**: Solicitar una copia de la información personal que tenemos sobre ti
• **Corrección**: Solicitar corrección de información inexacta o incompleta
• **Eliminación**: Solicitar eliminación de tu información personal
• **Exclusión**: Cancelar suscripción de comunicaciones de marketing
• **Portabilidad de Datos**: Solicitar tus datos en un formato portable
• **Restringir Procesamiento**: Solicitar limitación de cómo usamos tus datos

Para ejercer estos derechos, contáctanos en privacy@flightmate.com o visita nuestra página de Habeas Data.`
        },
        {
          title: "5. Cookies y Tecnologías de Seguimiento",
          content: `Usamos cookies y tecnologías de seguimiento similares para:

• **Cookies Esenciales**: Requeridas para que el sitio web funcione (autenticación, seguridad, preferencias de idioma)
• **Cookies de Análisis**: Nos ayudan a entender cómo los usuarios interactúan con nuestra plataforma (Google Analytics)
• **Cookies de Preferencia**: Recuerdan tus configuraciones y preferencias

Puedes controlar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar las cookies esenciales puede afectar la funcionalidad del sitio web.`
        },
        {
          title: "6. Seguridad de Datos",
          content: `Implementamos medidas técnicas y organizativas apropiadas para proteger tu información, incluyendo:

• Cifrado de datos en tránsito y en reposo
• Almacenamiento seguro de datos con controles de acceso
• Auditorías de seguridad y actualizaciones regulares
• Capacitación de empleados en protección de datos

Sin embargo, ningún método de transmisión por internet es 100% seguro. No podemos garantizar seguridad absoluta.`
        },
        {
          title: "7. Transferencias Internacionales de Datos",
          content: `FlightMate opera entre Estados Unidos y Perú. Tu información puede ser transferida y procesada en países distintos a tu país de residencia. Aseguramos que existan salvaguardas apropiadas para las transferencias internacionales de datos en cumplimiento con las leyes de protección de datos aplicables.`
        },
        {
          title: "8. Privacidad de Menores",
          content: `FlightMate no está destinado a usuarios menores de 18 años. No recopilamos intencionalmente información personal de niños. Si crees que hemos recopilado información de un niño, contáctanos inmediatamente.`
        },
        {
          title: "9. Cambios a Esta Política de Privacidad",
          content: `Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización". El uso continuado de nuestros servicios después de los cambios constituye la aceptación de la política actualizada.`
        },
        {
          title: "10. Contáctanos",
          content: `Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos:

• **Email**: privacy@flightmate.com
• **Formulario de Contacto**: Visita nuestra página de Contacto
• **WhatsApp**: Disponible en nuestro sitio web
• **Correo**: Departamento Legal de FlightMate (dirección disponible bajo solicitud)`
        }
      ]
    }
  };

  const currentContent = language === "en" ? content.en : content.es;

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">{currentContent.title}</h1>
          </div>
          <p className="text-muted-foreground">{currentContent.subtitle}</p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.intro}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {currentContent.sections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center p-6 bg-muted/50 rounded-lg"
        >
          <p className="text-muted-foreground mb-4">
            {language === "en"
              ? "Have questions about our privacy practices?"
              : "¿Tienes preguntas sobre nuestras prácticas de privacidad?"}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {language === "en" ? "Contact Us" : "Contáctanos"}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
