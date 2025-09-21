"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import {
  config,
  getConsentCheckboxText,
  getHelpText,
  getStopText,
} from "../../config";

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

    // Simulate async behavior
    setTimeout(() => {
      toast.dismiss();
      toast.success(
        `Thank you for subscribing! You will receive SMS messages from ${config.smsBrand}.`
      );

      // Clear the form
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
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/sms-optin" />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            SMS Text Message Subscription
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with {config.companyName}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          {/* Compliance Language */}
          <div className="mb-8 p-6 bg-muted rounded-xl">
            <div className="text-sm space-y-4">
              <p className="font-medium text-foreground">
                If you wish to receive SMS text messages from{" "}
                {config.companyName}, please fill out this form.
              </p>
              <p className="text-muted-foreground">
                By completing this form, you give consent to{" "}
                <span className="font-medium">"{config.smsBrand}"</span> to send
                SMS text messages for{" "}
                <span className="font-medium">{config.useCase}</span> according
                to our{" "}
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
                Message frequency varies. Standard message and data rates may
                apply.
              </p>
              <p className="text-muted-foreground">{getHelpText()}.</p>
              <p className="text-muted-foreground">{getStopText()}.</p>
            </div>
          </div>

          {/* Opt-In Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
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
                {getConsentCheckboxText()}
              </Label>
            </div>

            {/* Full Name Field */}
            <div className="space-y-3">
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-foreground"
              >
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
                className="rounded-xl border-border bg-input h-12"
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-3">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-foreground"
              >
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
                className="rounded-xl border-border bg-input h-12"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
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
                className="rounded-xl border-border bg-input h-12"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 rounded-full font-medium text-base"
                disabled={!formData.consent || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Subscribe to SMS Updates"}
              </Button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-8 p-6 bg-muted/50 rounded-xl">
            <h3 className="text-sm font-medium text-foreground mb-3">
              Important Information
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • You can opt out at any time by replying "STOP" to any message
              </li>
              <li>• Message frequency: {config.messageFrequency}</li>
              <li>• Standard message and data rates may apply</li>
              <li>• For help, reply "HELP" to any message</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
