"use client";

import { Navbar } from "@/components/Navbar";
import { CarExamples } from "@/components/CarExamples";
import { Footer } from "@/components/Footer";

export default function ExamplesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <CarExamples />
        <Footer />
      </main>
    </>
  );
}
