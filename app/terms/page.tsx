import Link from "next/link";

import { config } from "@/lib/config";

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-foreground mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-xl">{config.companyName}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Last updated: {config.legal.lastUpdated}
          </p>
        </div>

        <div className="bg-card border-border space-y-8 rounded-2xl border p-8">
          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                By accessing and using the services provided by{" "}
                {config.companyName}, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              2. SMS Text Message Service Terms
            </h2>
            <div className="text-muted-foreground space-y-4">
              <h3 className="text-foreground text-lg font-medium">
                Consent and Opt-In
              </h3>
              <p>
                By checking the consent box and providing your mobile phone
                number, you expressly consent to receive SMS follow-up messages
                from {config.companyName} regarding your property inquiry,
                including requests for additional details, scheduling calls, and
                providing offer updates.
              </p>

              <h3 className="text-foreground text-lg font-medium">
                Message Frequency and Charges
              </h3>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Message frequency: {config.messageFrequency}</li>
                <li>Message and data rates may apply</li>
                <li>
                  Carriers are not liable for delayed or undelivered messages
                </li>
              </ul>

              <h3 className="text-foreground text-lg font-medium">
                Opt-Out Instructions
              </h3>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Reply STOP to any message to opt out</li>
                <li>Reply HELP to any message for assistance</li>
                <li>You may receive a confirmation message when you opt out</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              3. A2P 10DLC Compliance
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Our SMS services comply with A2P 10DLC (Application-to-Person
                10-Digit Long Code) regulations and the Telephone Consumer
                Protection Act (TCPA).
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>
                  We require explicit opt-in consent before sending messages
                </li>
                <li>We provide clear opt-out mechanisms</li>
                <li>We maintain records of consent and opt-out requests</li>
                <li>We only send messages for the stated business purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              4. Prohibited Uses
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>You agree not to use our services:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>
                  For any unlawful purpose or to solicit unlawful activity
                </li>
                <li>To spam, harass, or abuse others</li>
                <li>To impersonate another person or entity</li>
                <li>To distribute viruses or malicious code</li>
                <li>To violate any applicable laws or regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              5. Privacy and Data Protection
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Your privacy is important to us. Please review our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-foreground font-medium hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information.
              </p>
              <p className="text-foreground font-medium">
                We will never sell or share your mobile number with third
                parties for marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              6. Limitation of Liability
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                {config.companyName} shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              7. Changes to Terms
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of our services constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              8. Contact Information
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-muted rounded-xl p-6">
                <p className="text-foreground font-medium">
                  {config.companyName}
                </p>
                <p>{config.address.street}</p>
                <p>
                  {config.address.city}, {config.address.state}{" "}
                  {config.address.zip}
                </p>
                <p>Phone: {config.phone}</p>
                <p>Email: {config.email}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              9. Governing Law
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of {config.legal.state}.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
