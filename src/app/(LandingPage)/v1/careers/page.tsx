"use client";

import { useEffect } from "react";
import HeroBanner from "@/components/careers/HeroBanner";
import JobListings from "@/components/careers/JobListings";
import CompanyCulture from "@/components/careers/CompanyCulture";
import Benefits from "@/components/careers/Benefits";
import Testimonials from "@/components/careers/Testimonials";
import FAQ from "@/components/careers/FAQ";
import ContactCTA from "@/components/careers/ContactCTA";

export default function CareersPage() {
  useEffect(() => {
    // You can add any other initialization logic here
    // without the toast notification
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroBanner />
      
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl">
            We&apos;re on a mission to revolutionize the tech import industry with innovation and excellence.
            Join us and be part of something extraordinary.
          </p>
        </div>
        
        <JobListings />
      </section>
      
      <CompanyCulture />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}