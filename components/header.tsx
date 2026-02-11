"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sms-optin", label: "SMS Opt-In" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "transition-all duration-300",
            isScrolled || isMobileMenuOpen
              ? "bg-background/80 border-border/50 rounded-2xl border shadow-lg shadow-black/5 backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Link
              href="/"
              className="flex-shrink-0 transition-transform hover:scale-105"
            >
              <span className="text-foreground text-xl font-semibold tracking-tight">
                {config.companyName}
              </span>
            </Link>

            <div className="hidden items-center space-x-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    currentPage === item.href
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="border-border/50 border-t px-6 pb-4 md:hidden">
              <div className="flex flex-col space-y-1 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                      currentPage === item.href
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
