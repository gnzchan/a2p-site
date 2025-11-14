import Link from "next/link";

import { config } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-6xl p-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-foreground text-sm font-medium">
              {config.companyName}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              Technology Solutions Provider committed to A2P 10DLC compliance.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-muted-foreground text-center text-xs">
            &copy; 2024 {config.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
