"use client"

import { useEffect } from "react";
import AboutSection from "@/components/About";
import EventGallery from "@/components/Gallery";
import EventHero from "@/components/MainHero";
import EventManagementServices from "@/components/ServicesHome";
import TestimonialsSection from "@/components/Testimonials";
import VendorCategories from "@/components/Vendors";
import WhyChooseUs from "@/components/WhyUs";

export default function Home() {
  // Add smooth scrolling to the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <div className="snap-start h-screen">
        <EventHero/>
      </div>

      <div className="snap-start min-h-screen">
        <AboutSection/>
      </div>

      <div className="snap-start min-h-screen">
        <VendorCategories/>
      </div>

      <div className="snap-start min-h-screen">
        <WhyChooseUs/>
      </div>

      <div className="snap-start min-h-screen"> 
        <EventManagementServices/>
      </div>

      <div className="snap-start min-h-screen">
        <TestimonialsSection/>
      </div>

      <div className="snap-start min-h-screen">
        <EventGallery/>
      </div>
    </div>
  );
}