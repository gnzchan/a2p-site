"use client";

import { useState } from "react";

import Link from "next/link";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { config } from "@/lib/config";

export default function SMSOptIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    propertyDetails: "",
    smsConsent: false,
    termsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.smsConsent || !formData.termsConsent) {
      toast.error("Please check both consent boxes to continue.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Processing your subscription...");

    setTimeout(() => {
      toast.dismiss();
      toast.success(
        `Thank you for subscribing! You will receive SMS messages from ${config.smsBrand}.`
      );

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        propertyDetails: "",
        smsConsent: false,
        termsConsent: false,
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
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Property Inquiry SMS Consent
        </h1>
        <p className="text-muted-foreground text-xl">{config.companyName}</p>
      </div>

      <Card className="border-border/50 shadow-lg">
        <CardContent>
          {/* Compliance Language */}
          <Card className="bg-muted/50 border-border/50 mb-8">
            <CardContent className="p-4">
              <p className="text-foreground text-sm font-medium">
                To receive SMS messages from {config.companyName} about your
                property inquiry or request for an offer, please complete this
                form.
              </p>
            </CardContent>
          </Card>

          {/* Opt-In Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your Full Name"
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Your Phone Number"
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email Address"
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyDetails" className="text-sm font-medium">
                Property Details
              </Label>
              <Textarea
                id="propertyDetails"
                name="propertyDetails"
                value={formData.propertyDetails}
                onChange={handleInputChange}
                placeholder="Enter your property address and any relevant details (e.g., 123 Main St, Austin, TX 78701 - 3 bed/2 bath single family home)"
                required
                rows={4}
                className="resize-none"
              />
            </div>

            {/* SMS Consent Checkbox */}
            <Card className="bg-muted/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
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
                      By checking this box and providing my phone number, I
                      consent to receive SMS follow-up messages from{" "}
                      {config.companyName} regarding my property inquiry,
                      including requests for additional details, scheduling, and
                      offer updates. Message frequency varies. Message &amp;
                      data rates may apply. Reply STOP to opt out, HELP for
                      assistance.
                    </span>
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Terms & Privacy Consent Checkbox */}
            <Card className="bg-muted/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
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
                      I have read and agree to the{" "}
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
              disabled={
                !formData.smsConsent || !formData.termsConsent || isSubmitting
              }
            >
              {isSubmitting ? "Processing..." : "Confirm SMS Consent"}
            </Button>
          </form>

          {/* Additional Information */}
          <Card className="bg-muted/50 border-border/50 mt-8">
            <CardContent className="p-4">
              <h3 className="text-foreground mb-3 text-sm font-semibold">
                Important Information
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  • Reply STOP to any message to opt out at any time
                </li>
                <li>
                  • Reply HELP to any message for assistance
                </li>
                <li>
                  • Message frequency varies based on your inquiry
                </li>
                <li>• Standard message and data rates may apply</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
