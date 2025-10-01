"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // In production, this would integrate with EmailJS
    console.log("Contact form submitted:", data);

    // For demo purposes, just save to localStorage
    const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const newMessage = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("contactMessages", JSON.stringify([...existingMessages, newMessage]));

    setSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappNumber = "+1234567890"; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">{t.contact.title}</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Email Us</CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>Get instant support via WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  {t.contact.whatsapp}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {submitted && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm">We'll get back to you as soon as possible.</p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll respond within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder={t.contact.placeholderName}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.formEmail} *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder={t.contact.placeholderEmail}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.formSubject} *
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder={t.contact.placeholderSubject}
                />
                {errors.subject && (
                  <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.formMessage} *
                </label>
                <textarea
                  {...register("message")}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  rows={6}
                  placeholder={t.contact.placeholderMessage}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t.contact.formSubmit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
