"use client";

import { useState } from "react";
import Navbar from "@/components/energy/Navbar";
import Hero from "@/components/energy/Hero";
import ServicesSection from "@/components/energy/ServicesSection";
import WhyUsSection from "@/components/energy/WhyUsSection";
import ContactSection from "@/components/energy/ContactSection";
import Footer from "@/components/energy/Footer";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection onSelectService={setSelectedService} />
        <WhyUsSection />
        <ContactSection initialService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
