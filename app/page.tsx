import Link from "next/link";

import { Building2, Phone, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { config, formatFullAddress } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="py-12 text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl">
              {config.companyName}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              {config.industry}
            </p>
          </div>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium shadow-lg"
            >
              <Link href="/sms-optin">Subscribe to SMS Updates</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Business Overview */}
      <div className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                <Zap className="text-primary h-8 w-8" />
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Industry
                </p>
                <p className="text-foreground text-lg font-semibold">
                  {config.industry}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm">
            <CardContent className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                <Building2 className="text-primary h-8 w-8" />
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Business Type
                </p>
                <p className="text-foreground text-lg font-semibold">
                  {config.businessType}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm">
            <CardContent className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                <Phone className="text-primary h-8 w-8" />
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Contact
                </p>
                <p className="text-foreground text-lg font-semibold">
                  {config.phone}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-border/50 border-t py-12">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-foreground text-3xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Contact us for more information about our services and SMS
              updates.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="shadow-sm">
              <CardContent>
                <p className="text-muted-foreground mb-2 text-sm font-medium">
                  Address
                </p>
                <p className="text-foreground text-base">
                  {formatFullAddress()}
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent>
                <p className="text-muted-foreground mb-2 text-sm font-medium">
                  Email
                </p>
                <p className="text-foreground text-base">{config.email}</p>
              </CardContent>
            </Card>
          </div>
          <div className="pt-4">
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
