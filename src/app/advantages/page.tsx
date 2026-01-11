"use client";

import { Navbar } from "@/components/Navbar";
import { Advantages } from "@/components/Advantages";
import { Footer } from "@/components/Footer";

export default function AdvantagesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Advantages />
        <Footer />
      </main>
    </>
  );
}
