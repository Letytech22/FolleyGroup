import type { ReactNode } from "react";

import { FolleyLanguageProvider } from "@/components/folley/Language";

import { Header } from "@/components/folley/layout/Header";
import { Footer } from "@/components/folley/layout/Footer";
import { WhatsAppButton } from "@/components/folley/layout/WhatsAppButton";
import { Preloader } from "./Preloader";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function FolleySiteShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <FolleyLanguageProvider>
      <Preloader/>
      <Header />

      <main>{children}</main>

      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </FolleyLanguageProvider>
  );
}