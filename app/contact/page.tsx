"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { config, formatFullAddress } from "../../config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please check the consent box to continue.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending your message...");

    // Simulate async behavior
    setTimeout(() => {
      toast.dismiss();
      toast.success(
        "Thank you for your message! We will get back to you soon."
      );

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
      });
      setIsSubmitting(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/contact" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with {config.companyName}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
                Business Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      Company Name
                    </h3>
                    <p className="text-muted-foreground">
                      {config.companyName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      {formatFullAddress()}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">{config.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">{config.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
              Send us a Message
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-border bg-input h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-border bg-input h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="rounded-xl border-border bg-input h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-border bg-input h-12"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="rounded-xl border-border bg-input resize-none"
                  />
                </div>

                {/* SMS Opt-In Language */}
                <div className="bg-muted rounded-xl p-6">
                  <div className="space-y-4 text-sm">
                    <p className="font-medium text-foreground">
                      If you wish to receive SMS text messages from{" "}
                      {config.companyName}, please check the box below.
                    </p>
                    <p className="text-muted-foreground">
                      By checking this box, you give consent to{" "}
                      <span className="font-medium">"{config.smsBrand}"</span>{" "}
                      to send SMS text messages for{" "}
                      <span className="font-medium">{config.useCase}</span>{" "}
                      according to our{" "}
                      <Link
                        href="/terms"
                        className="text-foreground hover:underline font-medium"
                      >
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-foreground hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <p className="text-muted-foreground">
                      Message frequency varies. Standard message and data rates
                      may apply.
                    </p>
                    <p className="text-muted-foreground">
                      For HELP, text {config.phone}.
                    </p>
                    <p className="text-muted-foreground">
                      Text STOP to unsubscribe.
                    </p>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, consent: !!checked }))
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm font-medium text-foreground leading-relaxed cursor-pointer"
                  >
                    Check this box to consent to receiving SMS text messages
                    from {config.smsBrand}
                  </Label>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-full font-medium text-base"
                    disabled={!formData.consent || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
