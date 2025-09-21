"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { config } from "../config";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-4">
        <div
          className={`
            relative transition-all duration-500 ease-out transform
            ${
              isScrolled
                ? "bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg shadow-black/5"
                : "bg-transparent"
            }
          `}
        >
          <div className="flex justify-between items-center h-16 px-6">
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-xl font-semibold text-foreground tracking-tight group-hover:scale-105 transition-transform duration-200">
                {config.companyName}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                    hover:scale-105 hover:-translate-y-0.5
                    ${
                      currentPage === item.href
                        ? "text-background bg-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage === item.href && (
                    <div className="absolute inset-0 bg-foreground rounded-full animate-pulse opacity-20" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
