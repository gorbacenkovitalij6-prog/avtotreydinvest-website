"use client";

import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}
