"use client";

import { Navbar } from "@/components/Navbar";
import { CostCalculator } from "@/components/CostCalculator";
import { Footer } from "@/components/Footer";

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <CostCalculator />
        <Footer />
      </main>
    </>
  );
}
