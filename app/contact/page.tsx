"use client";

import { useState } from "react";

import Link from "next/link";

import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { config, formatFullAddress } from "@/lib/config";

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

    setTimeout(() => {
      toast.dismiss();
      toast.success(
        "Thank you for your message! We will get back to you soon."
      );

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
    <>
      <div className="mb-12 text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Contact Us
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Get in touch with {config.companyName}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-foreground text-2xl font-bold tracking-tight">
            Business Information
          </h2>

          <div className="space-y-4">
            <Card className="border-border/50 shadow-sm">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Building2 className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-base font-semibold">
                      Company Name
                    </h3>
                    <p className="text-muted-foreground">
                      {config.companyName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-base font-semibold">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      {formatFullAddress()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-base font-semibold">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">{config.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-base font-semibold">
                      Email
                    </h3>
                    <p className="text-muted-foreground">{config.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-foreground mb-6 text-2xl font-bold tracking-tight">
            Send us a Message
          </h2>
          <Card className="border-border/50 shadow-md">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                {/* SMS Consent Checkbox */}
                <Card className="bg-muted/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            consent: !!checked,
                          }))
                        }
                        className="mt-0.5 shrink-0"
                      />
                      <Label
                        htmlFor="consent"
                        className="cursor-pointer text-xs leading-relaxed"
                      >
                        <span className="text-foreground font-medium">
                          By checking this box and providing my phone number, I
                          consent to receive SMS follow-up messages from{" "}
                          {config.companyName} regarding property offers and
                          real estate inquiries. Message frequency varies.
                          Message &amp; data rates may apply. Reply STOP to opt
                          out, HELP for assistance. See our{" "}
                          <Link
                            href="/terms"
                            className="text-foreground font-medium hover:underline"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-foreground font-medium hover:underline"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  className="h-11 w-full rounded-full font-medium shadow-lg"
                  disabled={!formData.consent || isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
