"use client";

import { Navbar } from "@/components/Navbar";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactForm } from "@/components/ContactForm";
import { CarExamples } from "@/components/CarExamples";
import { FAQ } from "@/components/FAQ";
import { Advantages } from "@/components/Advantages";
import { HowItWorks } from "@/components/HowItWorks";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { DeliveryMap } from "@/components/DeliveryMap";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <CostCalculator />
        <Advantages />
        <DeliveryMap />
        <HowItWorks />
        <CarExamples />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
