"use client";

import { useState } from "react";

import Link from "next/link";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { config } from "@/lib/config";

export default function SMSOptIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
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
        consent: false,
      });
      setIsSubmitting(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
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

            {/* Consent Checkbox */}
            <Card className="bg-muted/50 border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, consent: !!checked }))
                    }
                    className="mt-0.5 shrink-0"
                  />
                  <Label
                    htmlFor="consent"
                    className="cursor-pointer text-xs leading-relaxed"
                  >
                    <span className="text-foreground font-medium">
                      I consent to receive SMS messages from{" "}
                      {config.companyName} related to my property inquiry.
                      Message frequency varies. Message &amp; data rates may
                      apply. Reply STOP to unsubscribe, HELP for help. See our{" "}
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
                  • You can opt out at any time by replying &ldquo;STOP&rdquo;
                  to any message
                </li>
                <li>
                  • Message frequency: Varies depending on your property inquiry
                </li>
                <li>• Standard message and data rates may apply</li>
                <li>• For help, reply &ldquo;HELP&rdquo; to any message</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
