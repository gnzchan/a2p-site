import { ReactNode } from "react";

import { Toaster } from "sonner";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = config.site.title;
const description = config.site.description;

export const metadata: Metadata = {
  title,
  description,
  icons: [`https://${config.site.domain}/favicon.ico`],
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL(`https://${config.site.domain}`),
};

export default async function A2PLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.className, geistMono.className)}>
        <div className="bg-background flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-24 pb-16 lg:px-8">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </div>
      </body>
    </html>
  );
}
