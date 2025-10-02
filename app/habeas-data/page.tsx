"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scale, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useInView } from "framer-motion";

export default function HabeasDataPage() {
  const { language } = useLanguage();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const content = {
    en: {
      title: "Habeas Data - Your Data Protection Rights",
      subtitle: "Exercise your constitutional right to control your personal information",
      intro: "Habeas Data is a fundamental constitutional right recognized in Peru and other Latin American countries that allows you to access, correct, update, or delete your personal information held by organizations.",
      sections: [
        {
          title: "What is Habeas Data?",
          content: `Habeas Data is a constitutional right that protects individuals' personal data. It originates from Peru's Personal Data Protection Law (Ley N° 29733) and the Peruvian Constitution.

This right allows you to:
• Know what personal information organizations have about you
• Request corrections to inaccurate or outdated information
• Demand deletion of information that was collected unlawfully
• Object to the processing of your data for specific purposes
• Request that your data not be provided to third parties`
        },
        {
          title: "Your Rights Under Peruvian Law (Ley N° 29733)",
          content: `As a Peruvian citizen or resident, you have the following rights:

**Right to Information**
• Know whether your personal data is being processed
• Access the complete content of your stored data
• Know the origin of your data and who it's been shared with

**Right to Rectification**
• Request correction of inaccurate, incomplete, or outdated data
• Update your personal information at any time

**Right to Cancellation (Deletion)**
• Request deletion of data that is excessive, unnecessary, or unlawfully processed
• Demand removal of data when the purpose for collection has been fulfilled

**Right to Opposition**
• Object to processing of your data for direct marketing purposes
• Refuse data sharing with third parties for commercial purposes

**Right to Non-Provision**
• Prevent your data from being provided to third parties without your consent`
        },
        {
          title: "How to Exercise Your Rights with FlightMate",
          content: `To exercise your Habeas Data rights, you can:

**1. Submit a Written Request**
Send an email to: privacy@flightmate.com with:
• Your full name and ID number
• Description of the right you wish to exercise
• Specific data or information you're referring to
• Your preferred contact method for our response

**2. Use Our Contact Form**
Visit our Contact page and select "Data Protection Request"

**3. WhatsApp Request**
Send a message through our WhatsApp button with your request

**Required Information:**
• Valid government-issued ID (for identity verification)
• Clear description of your request
• Proof of data ownership (if applicable)`
        },
        {
          title: "Response Timeline",
          content: `According to Peruvian law, FlightMate will respond to your request within:

• **10 business days**: For information access requests
• **15 business days**: For rectification or cancellation requests
• **30 business days**: For complex requests requiring additional investigation

We may request additional information or clarification within 5 business days of receiving your request.

If we deny your request, we will provide written justification and inform you of your right to file a complaint with the National Authority for the Protection of Personal Data (ANPD).`
        },
        {
          title: "Filing a Complaint",
          content: `If you believe your Habeas Data rights have been violated or are unsatisfied with our response, you can file a complaint with:

**National Authority for the Protection of Personal Data (ANPD)**
• Website: www.minjus.gob.pe/direccion-general-de-proteccion-de-datos-personales/
• Email: dpd@minjus.gob.pe
• Phone: +51 1 311-2930

**Constitutional Tribunal of Peru**
For constitutional Habeas Data actions (if administrative remedies are exhausted)

**Defensoría del Pueblo (Ombudsman's Office)**
For assistance and guidance on data protection rights
• Website: www.defensoria.gob.pe
• Phone: 0800-15170 (toll-free)`
        },
        {
          title: "Data Controller Information",
          content: `**Data Controller**: FlightMate Inc.

**Registered Address**: [To be provided upon request]

**Privacy Officer**: privacy@flightmate.com

**Purpose of Data Processing**:
• Facilitate peer-to-peer package delivery services
• Connect travelers with senders
• Process payments and communications
• Comply with legal obligations
• Improve our services

**Legal Basis for Processing**:
• Contractual necessity (to provide our services)
• Legitimate interests (business operations, security)
• Legal compliance (tax, regulatory requirements)
• Consent (marketing, analytics)

**Data Retention**:
• Account data: Duration of active account + 5 years
• Transaction records: 7 years (tax compliance)
• Communications: 2 years
• Marketing data: Until consent is withdrawn`
        },
        {
          title: "International Data Transfers",
          content: `FlightMate operates between the United States and Peru. Your data may be transferred to:

• **United States**: For data processing and storage (adequate safeguards in place)
• **Cloud Service Providers**: AWS, Google Cloud (compliant with international standards)
• **Payment Processors**: Stripe, PayPal (PCI-DSS certified)

All international transfers comply with:
• Peru's Personal Data Protection Law (Ley N° 29733)
• Standard Contractual Clauses (SCC)
• Adequate level of protection requirements`
        },
        {
          title: "Contact Our Privacy Team",
          content: `For any questions or to exercise your rights:

• **Email**: privacy@flightmate.com (Response within 48 hours)
• **WhatsApp**: Available on our website
• **Contact Form**: /contact
• **Phone**: [Available upon request]

Our privacy team is committed to respecting your data protection rights and will assist you promptly.`
        }
      ],
      actions: {
        title: "Quick Actions",
        accessData: "Request My Data",
        deleteData: "Delete My Data",
        updateData: "Update My Data",
        contact: "Contact Privacy Team"
      }
    },
    es: {
      title: "Habeas Data - Tus Derechos de Protección de Datos",
      subtitle: "Ejerce tu derecho constitucional a controlar tu información personal",
      intro: "El Habeas Data es un derecho constitucional fundamental reconocido en Perú y otros países latinoamericanos que te permite acceder, corregir, actualizar o eliminar tu información personal mantenida por organizaciones.",
      sections: [
        {
          title: "¿Qué es el Habeas Data?",
          content: `El Habeas Data es un derecho constitucional que protege los datos personales de las personas. Se origina en la Ley de Protección de Datos Personales de Perú (Ley N° 29733) y la Constitución Peruana.

Este derecho te permite:
• Saber qué información personal tienen las organizaciones sobre ti
• Solicitar correcciones a información inexacta o desactualizada
• Exigir la eliminación de información recopilada ilegalmente
• Oponerte al procesamiento de tus datos para propósitos específicos
• Solicitar que tus datos no sean proporcionados a terceros`
        },
        {
          title: "Tus Derechos Bajo la Ley Peruana (Ley N° 29733)",
          content: `Como ciudadano o residente peruano, tienes los siguientes derechos:

**Derecho de Información**
• Saber si tus datos personales están siendo procesados
• Acceder al contenido completo de tus datos almacenados
• Conocer el origen de tus datos y con quién se han compartido

**Derecho de Rectificación**
• Solicitar corrección de datos inexactos, incompletos o desactualizados
• Actualizar tu información personal en cualquier momento

**Derecho de Cancelación (Eliminación)**
• Solicitar eliminación de datos excesivos, innecesarios o procesados ilegalmente
• Exigir la eliminación de datos cuando se ha cumplido el propósito de recopilación

**Derecho de Oposición**
• Oponerte al procesamiento de tus datos para fines de marketing directo
• Rechazar el compartir datos con terceros para fines comerciales

**Derecho de No Provisión**
• Evitar que tus datos sean proporcionados a terceros sin tu consentimiento`
        },
        {
          title: "Cómo Ejercer Tus Derechos con FlightMate",
          content: `Para ejercer tus derechos de Habeas Data, puedes:

**1. Enviar una Solicitud Escrita**
Envía un correo a: privacy@flightmate.com con:
• Tu nombre completo y número de DNI
• Descripción del derecho que deseas ejercer
• Datos o información específica a la que te refieres
• Tu método de contacto preferido para nuestra respuesta

**2. Usar Nuestro Formulario de Contacto**
Visita nuestra página de Contacto y selecciona "Solicitud de Protección de Datos"

**3. Solicitud por WhatsApp**
Envía un mensaje a través de nuestro botón de WhatsApp con tu solicitud

**Información Requerida:**
• DNI válido (para verificación de identidad)
• Descripción clara de tu solicitud
• Prueba de titularidad de datos (si aplica)`
        },
        {
          title: "Plazo de Respuesta",
          content: `Según la ley peruana, FlightMate responderá a tu solicitud dentro de:

• **10 días hábiles**: Para solicitudes de acceso a información
• **15 días hábiles**: Para solicitudes de rectificación o cancelación
• **30 días hábiles**: Para solicitudes complejas que requieren investigación adicional

Podemos solicitar información adicional o aclaración dentro de 5 días hábiles de recibir tu solicitud.

Si denegamos tu solicitud, proporcionaremos justificación escrita y te informaremos de tu derecho a presentar una queja ante la Autoridad Nacional de Protección de Datos Personales (ANPD).`
        },
        {
          title: "Presentar una Queja",
          content: `Si crees que tus derechos de Habeas Data han sido violados o no estás satisfecho con nuestra respuesta, puedes presentar una queja ante:

**Autoridad Nacional de Protección de Datos Personales (ANPD)**
• Sitio web: www.minjus.gob.pe/direccion-general-de-proteccion-de-datos-personales/
• Email: dpd@minjus.gob.pe
• Teléfono: +51 1 311-2930

**Tribunal Constitucional del Perú**
Para acciones constitucionales de Habeas Data (si se han agotado los remedios administrativos)

**Defensoría del Pueblo**
Para asistencia y orientación sobre derechos de protección de datos
• Sitio web: www.defensoria.gob.pe
• Teléfono: 0800-15170 (línea gratuita)`
        },
        {
          title: "Información del Responsable de Datos",
          content: `**Responsable de Datos**: FlightMate Inc.

**Dirección Registrada**: [Se proporcionará bajo solicitud]

**Oficial de Privacidad**: privacy@flightmate.com

**Propósito del Procesamiento de Datos**:
• Facilitar servicios de entrega de paquetes persona a persona
• Conectar viajeros con remitentes
• Procesar pagos y comunicaciones
• Cumplir con obligaciones legales
• Mejorar nuestros servicios

**Base Legal para el Procesamiento**:
• Necesidad contractual (para proporcionar nuestros servicios)
• Intereses legítimos (operaciones comerciales, seguridad)
• Cumplimiento legal (requisitos fiscales, regulatorios)
• Consentimiento (marketing, análisis)

**Retención de Datos**:
• Datos de cuenta: Duración de cuenta activa + 5 años
• Registros de transacciones: 7 años (cumplimiento fiscal)
• Comunicaciones: 2 años
• Datos de marketing: Hasta que se retire el consentimiento`
        },
        {
          title: "Transferencias Internacionales de Datos",
          content: `FlightMate opera entre Estados Unidos y Perú. Tus datos pueden ser transferidos a:

• **Estados Unidos**: Para procesamiento y almacenamiento de datos (salvaguardas adecuadas implementadas)
• **Proveedores de Servicios en la Nube**: AWS, Google Cloud (cumpliendo estándares internacionales)
• **Procesadores de Pago**: Stripe, PayPal (certificados PCI-DSS)

Todas las transferencias internacionales cumplen con:
• Ley de Protección de Datos Personales de Perú (Ley N° 29733)
• Cláusulas Contractuales Estándar (CCE)
• Requisitos de nivel adecuado de protección`
        },
        {
          title: "Contacta a Nuestro Equipo de Privacidad",
          content: `Para cualquier pregunta o para ejercer tus derechos:

• **Email**: privacy@flightmate.com (Respuesta en 48 horas)
• **WhatsApp**: Disponible en nuestro sitio web
• **Formulario de Contacto**: /contact
• **Teléfono**: [Disponible bajo solicitud]

Nuestro equipo de privacidad está comprometido a respetar tus derechos de protección de datos y te asistirá rápidamente.`
        }
      ],
      actions: {
        title: "Acciones Rápidas",
        accessData: "Solicitar Mis Datos",
        deleteData: "Eliminar Mis Datos",
        updateData: "Actualizar Mis Datos",
        contact: "Contactar Equipo de Privacidad"
      }
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
            <Scale className="h-12 w-12 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">{currentContent.title}</h1>
          </div>
          <p className="text-muted-foreground text-lg">{currentContent.subtitle}</p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentContent.intro}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4">{currentContent.actions.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                {currentContent.actions.accessData}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                {currentContent.actions.deleteData}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                {currentContent.actions.updateData}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                {currentContent.actions.contact}
              </Button>
            </Link>
          </div>
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
          className="mt-12 text-center p-8 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-3">
            {language === "en"
              ? "Need Help Exercising Your Rights?"
              : "¿Necesitas Ayuda para Ejercer Tus Derechos?"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === "en"
              ? "Our privacy team is ready to assist you with any data protection request."
              : "Nuestro equipo de privacidad está listo para asistirte con cualquier solicitud de protección de datos."}
          </p>
          <Link href="/contact">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              {language === "en" ? "Contact Us" : "Contáctanos"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
