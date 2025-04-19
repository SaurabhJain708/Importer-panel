import React from "react";
import HomeNavbar from "@/components/ui/home/navbar";
import HeroSection from "@/components/ui/home/herosection";
import About from "@/components/ui/home/about";
import Metrics from "@/components/ui/home/metrics";
import Community from "@/components/ui/home/community";
import Footer from "@/components/ui/home/footer";
import Video from "@/components/ui/home/video";

export default function AnantyaOverseasUI() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navbar */}
      <HomeNavbar />

      {/* Improved Hero Section */}
      <section className="relative h-[480px] sm:h-[440px] w-full mt-22 mx-0 p-0 overflow-x-hidden">
        {/* <Video/> */}
        <HeroSection />
      </section>

      {/* About anantya  overseas */}
      <About />

      {/* metrics */}
      <Metrics />

      {/* Community */}
      <Community/>

      {/* Footer */}
      <Footer/>
      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}
