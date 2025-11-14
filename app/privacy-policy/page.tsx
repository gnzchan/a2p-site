import { config } from "@/lib/config";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-foreground mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-xl">{config.companyName}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Last updated: {config.legal.lastUpdated}
          </p>
        </div>

        <div className="bg-card border-border space-y-8 rounded-2xl border p-8">
          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              1. Information We Collect
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Subscribe to our SMS text message service</li>
                <li>Contact us through our website or customer service</li>
                <li>Provide your contact information for business purposes</li>
              </ul>
              <p>The types of information we may collect include:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>
                  Name and contact information (phone number, email address)
                </li>
                <li>Business information relevant to our services</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              2. How We Use Your Information
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Send you SMS text messages related to our services</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our services and customer experience</li>
                <li>
                  Comply with legal obligations and regulatory requirements
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              3. SMS Text Message Service
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p className="text-foreground font-medium">
                Important: Mobile information will NOT be shared with third
                parties for marketing purposes.
              </p>
              <p>When you subscribe to our SMS text message service:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>We will send you messages related to {config.useCase}</li>
                <li>Message frequency: {config.messageFrequency}</li>
                <li>Standard message and data rates may apply</li>
                <li>
                  You can opt out at any time by replying &ldquo;STOP&rdquo; to
                  any message
                </li>
                <li>For help, text &ldquo;HELP&rdquo; to {config.phone}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              4. Information Sharing and Disclosure
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p className="text-foreground font-medium">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties for marketing purposes.
              </p>
              <p>
                We may share your information only in the following
                circumstances:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>
                  To protect our rights, property, or safety, or that of our
                  customers
                </li>
                <li>
                  With trusted service providers who assist us in operating our
                  business
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              5. A2P 10DLC Compliance
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                {config.companyName} is committed to compliance with all
                applicable messaging laws and regulations, including A2P 10DLC
                requirements.
              </p>
              <p>Our SMS messaging practices include:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Explicit opt-in consent before sending messages</li>
                <li>Clear opt-out mechanisms in every message</li>
                <li>Transparent disclosure of message frequency and costs</li>
                <li>Compliance with TCPA requirements</li>
                <li>Proper business registration and verification</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-foreground mb-4 text-2xl font-semibold">
              6. Contact Information
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please
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
        </div>
      </div>
    </div>
  );
}
