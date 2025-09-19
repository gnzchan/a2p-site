import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { config } from "../../config";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function SampleMessages() {
  const sampleMessages = config.sampleMessages;

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/sample-messages" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Sample SMS Messages
          </h1>
          <p className="text-xl text-muted-foreground">
            Examples of messages you'll receive from {config.smsBrand}
          </p>
        </div>

        {/* Message Frequency Info */}
        <div className="bg-muted rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Message Frequency
          </h2>
          <div className="space-y-2">
            <p className="font-medium text-foreground">
              Message frequency: {config.messageFrequency}
            </p>
            <p className="text-sm text-muted-foreground">
              Frequency varies based on your interactions with our
              services and your preferences.
            </p>
          </div>
        </div>

        {/* Sample Messages */}
        <div className="space-y-8">
          {sampleMessages.map((msg) => (
            <div key={msg.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">{msg.type}</h3>
                <Badge variant="secondary" className="rounded-full">{msg.frequency}</Badge>
              </div>

              {/* Message Preview */}
              <div className="bg-muted rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-background"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">
                      {config.smsBrand}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    Includes business name
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    Opt-out instructions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    A2P 10DLC compliant
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Information */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
            Compliance Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                Every Message Includes:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Business name ({config.companyName})</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>"Reply STOP to unsubscribe"</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Clear, relevant content</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                A2P 10DLC Compliance:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Explicit opt-in consent</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Easy opt-out mechanism</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Transparent frequency disclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium">
            <Link href="/sms-optin">Subscribe to SMS Updates</Link>
          </Button>
        </div>
      </main>


      <Footer />
    </div>
  );
}
