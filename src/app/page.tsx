"use client";

import { useState } from "react";
import Navbar from "@/components/energy/Navbar";
import Hero from "@/components/energy/Hero";
import IntroSection from "@/components/energy/IntroSection";
import ServicesSection from "@/components/energy/ServicesSection";
import AboutSection from "@/components/energy/AboutSection";
import ContactSection from "@/components/energy/ContactSection";
import Footer from "@/components/energy/Footer";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const selectService = (title: string) => {
    setSelectedService(title);
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection onSelectService={selectService} />
        <AboutSection />
        <ContactSection initialService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
