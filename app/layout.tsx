import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acme Solutions LLC - A2P 10DLC Compliant SMS Service",
  description:
    "Technology Solutions Provider committed to A2P 10DLC compliance. Subscribe to SMS updates for order notifications and promotional offers.",
  keywords:
    "A2P 10DLC, SMS compliance, technology solutions, business communications",
  authors: [{ name: "Acme Solutions LLC" }],
  openGraph: {
    title: "Acme Solutions LLC - A2P 10DLC Compliant SMS Service",
    description:
      "Technology Solutions Provider committed to A2P 10DLC compliance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
