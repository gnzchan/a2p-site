import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { config } from "../../config";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/terms" />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              {config.companyName}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {config.legal.lastUpdated}
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  By accessing and using the services provided by {config.companyName}, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. SMS Text Message Service Terms
              </h2>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-lg font-medium text-foreground">Consent and Opt-In</h3>
                <p>
                  By providing your mobile phone number and checking the consent box, you expressly consent to receive SMS text messages from "{config.smsBrand}" for {config.useCase}.
                </p>

                <h3 className="text-lg font-medium text-foreground">Message Frequency and Charges</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Message frequency: {config.messageFrequency}</li>
                  <li>Message and data rates may apply</li>
                  <li>Carriers are not liable for delayed or undelivered messages</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Opt-Out Instructions</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Text STOP to {config.phone} to opt out</li>
                  <li>Text HELP to {config.phone} for support</li>
                  <li>You may receive a confirmation message when you opt out</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. A2P 10DLC Compliance
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Our SMS services comply with A2P 10DLC (Application-to-Person 10-Digit Long Code) regulations and the Telephone Consumer Protection Act (TCPA).
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We require explicit opt-in consent before sending messages</li>
                  <li>We provide clear opt-out mechanisms</li>
                  <li>We maintain records of consent and opt-out requests</li>
                  <li>We only send messages for the stated business purposes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Prohibited Uses
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>You agree not to use our services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit unlawful activity</li>
                  <li>To spam, harass, or abuse others</li>
                  <li>To impersonate another person or entity</li>
                  <li>To distribute viruses or malicious code</li>
                  <li>To violate any applicable laws or regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Privacy and Data Protection
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Your privacy is important to us. Please review our{" "}
                  <Link href="/privacy-policy" className="text-foreground hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  {" "}to understand how we collect, use, and protect your information.
                </p>
                <p className="font-medium text-foreground">
                  We will never sell or share your mobile number with third parties for marketing purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  {config.companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Changes to Terms
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Contact Information
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-muted rounded-xl p-6">
                  <p className="font-medium text-foreground">{config.companyName}</p>
                  <p>{config.address.street}</p>
                  <p>{config.address.city}, {config.address.state} {config.address.zip}</p>
                  <p>Phone: {config.phone}</p>
                  <p>Email: {config.email}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Governing Law
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of {config.legal.state}.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}