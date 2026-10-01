"use client";

import { useState } from "react";
import Navbar from "@/components/energy/Navbar";
import Hero from "@/components/energy/Hero";
import ServicesSection from "@/components/energy/ServicesSection";
import WhyUsSection from "@/components/energy/WhyUsSection";
import CalculatorSection from "@/components/energy/CalculatorSection";
import ProcessSection from "@/components/energy/ProcessSection";
import ProjectsSection from "@/components/energy/ProjectsSection";
import ContactSection from "@/components/energy/ContactSection";
import Footer from "@/components/energy/Footer";

export default function HomePage() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>("");

  const handleSelectService = (title: string) => {
    setSelectedServiceForQuote(title);
  };

  const handleCalculatorQuote = (info: string) => {
    setSelectedServiceForQuote(info);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection onSelectServiceForQuote={handleSelectService} />
        <WhyUsSection />
        <CalculatorSection onQuoteWithData={handleCalculatorQuote} />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection initialService={selectedServiceForQuote} />
      </main>
      <Footer />
    </div>
  );
}
