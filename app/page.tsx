import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { config, formatFullAddress } from "../config";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-semibold text-foreground tracking-tight">
                {config.companyName}
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground font-medium text-sm"
              >
                Home
              </Link>
              <Link
                href="/sms-optin"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                SMS Opt-In
              </Link>
              <Link
                href="/sample-messages"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Sample Messages
              </Link>
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="pt-32 pb-16 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
                {config.companyName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {config.industry}
              </p>
            </div>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium">
                <Link href="/sms-optin">Subscribe to SMS Updates</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Business Overview */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-background"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">
                  Industry
                </p>
                <p className="text-lg font-semibold text-foreground">{config.industry}</p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-background"
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
                <p className="text-sm text-muted-foreground font-medium mb-1">
                  Business Type
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {config.businessType}
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-background"
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
                <p className="text-sm text-muted-foreground font-medium mb-1">
                  Contact
                </p>
                <p className="text-lg font-semibold text-foreground">{config.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 border-t border-border">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact us for more information about our services and SMS updates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Address
                </p>
                <p className="text-base text-foreground">
                  {formatFullAddress()}
                </p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p className="text-base text-foreground">
                  {config.email}
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto py-12 px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-foreground">
                {config.companyName}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Technology Solutions Provider committed to A2P 10DLC compliance.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              &copy; 2024 {config.companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
