import { ReactNode } from "react";

import { Toaster } from "sonner";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface A2PLayoutProps {
  children: ReactNode;
}

export default async function A2PLayout({ children }: A2PLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-24 pb-16 lg:px-8">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
