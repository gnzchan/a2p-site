import Link from "next/link";
import { config } from "../config";

export function Footer() {
  return (
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
  );
}