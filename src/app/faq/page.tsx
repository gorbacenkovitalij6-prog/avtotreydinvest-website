"use client";

import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
