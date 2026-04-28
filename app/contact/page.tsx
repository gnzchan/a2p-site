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

import {
  config,
  formatFullAddress,
  getMarketingConsentLanguage,
  getTransactionalConsentLanguage,
  isLvm,
} from "@/lib/config";

export default function Contact() {
  const lvm = isLvm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    smsConsent: false,
    transactionalConsent: false,
    marketingConsent: false,
    termsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (lvm && !formData.termsConsent) {
      toast.error(
        "Please accept the Terms of Service and Privacy Policy to continue.",
      );
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending your message...");

    setTimeout(() => {
      toast.dismiss();
      const optedIn = lvm
        ? formData.transactionalConsent || formData.marketingConsent
        : formData.smsConsent;
      const smsNote = optedIn
        ? " You've also opted in to receive SMS updates."
        : "";
      toast.success(
        `Thank you for your message! We will get back to you soon.${smsNote}`,
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        smsConsent: false,
        transactionalConsent: false,
        marketingConsent: false,
        termsConsent: false,
      });
      setIsSubmitting(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

                {/* SMS Consent (use-case-aware) */}
                <Card className="bg-muted/50 border-border/50">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground mb-3 text-xs font-medium">
                      Optional: Opt in to SMS updates
                    </p>
                    <div className="space-y-4">
                      {lvm ? (
                        <>
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="transactionalConsent"
                              checked={formData.transactionalConsent}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  transactionalConsent: !!checked,
                                }))
                              }
                              className="mt-0.5 shrink-0"
                            />
                            <Label
                              htmlFor="transactionalConsent"
                              className="cursor-pointer text-xs leading-relaxed"
                            >
                              <span className="text-foreground font-medium">
                                {getTransactionalConsentLanguage()}
                              </span>
                            </Label>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="marketingConsent"
                              checked={formData.marketingConsent}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  marketingConsent: !!checked,
                                }))
                              }
                              className="mt-0.5 shrink-0"
                            />
                            <Label
                              htmlFor="marketingConsent"
                              className="cursor-pointer text-xs leading-relaxed"
                            >
                              <span className="text-foreground font-medium">
                                {getMarketingConsentLanguage()}
                              </span>
                            </Label>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="smsConsent"
                            checked={formData.smsConsent}
                            onCheckedChange={(checked) =>
                              setFormData((prev) => ({
                                ...prev,
                                smsConsent: !!checked,
                              }))
                            }
                            className="mt-0.5 shrink-0"
                          />
                          <Label
                            htmlFor="smsConsent"
                            className="cursor-pointer text-xs leading-relaxed"
                          >
                            <span className="text-foreground font-medium">
                              By checking, you consent to receive SMS messages
                              from {config.companyName} related to your property
                              inquiry, including requests for additional
                              details, scheduling, and offer updates related to
                              your submission. Message frequency may vary.
                              Message and data rates may apply. Reply HELP for
                              help or STOP to opt-out.
                            </span>
                          </Label>
                        </div>
                      )}
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="termsConsent"
                          checked={formData.termsConsent}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              termsConsent: !!checked,
                            }))
                          }
                          className="mt-0.5 shrink-0"
                        />
                        <Label
                          htmlFor="termsConsent"
                          className="cursor-pointer text-xs leading-relaxed"
                        >
                          <span className="text-foreground font-medium">
                            By checking, I accept{" "}
                            <Link
                              href="/terms"
                              className="text-foreground font-medium hover:underline"
                            >
                              Terms of Service
                            </Link>{" "}
                            &amp;{" "}
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
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  className="h-11 w-full rounded-full font-medium shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>

              {lvm && (
                <Card className="bg-muted/50 border-border/50 mt-8">
                  <CardContent className="p-4">
                    <h3 className="text-foreground mb-3 text-sm font-semibold">
                      Important Information
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Reply STOP to any message to opt out at any time</li>
                      <li>• Reply HELP to any message for assistance</li>
                      <li>• Message frequency varies based on your inquiry</li>
                      <li>• Standard message and data rates may apply</li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
