import React from "react";
import HomeNavbar from "@/components/ui/home/navbar";
import HeroSection from "@/components/ui/home/herosection";
import About from "@/components/ui/home/about";
import Metrics from "@/components/ui/home/metrics";
import Community from "@/components/ui/home/community";
import Footer from "@/components/ui/home/footer";
import Video from "@/components/ui/home/video";
import Testimonials from "@/components/ui/home/testimonials";
import Partners from "@/components/ui/home/partners";
import Categories from "@/components/ui/home/categories";
import PhoneSidebar from "@/components/ui/home/phonenav";

export default function AnantyaOverseasUI() {
  return (
    <div className="bg-gray-50">

      <PhoneSidebar/>
      {/* Enhanced Navbar */}
      <HomeNavbar />

      {/* Improved Hero Section */}
      <section className="relative h-[480px] sm:h-[500px] w-full mt-22 mx-0 p-0 overflow-x-hidden">
        {/* <Video/> */}
        <Video />
        <HeroSection />
      </section>

      {/* About anantya  overseas */}
      <About />

      {/* metrics */}
      <Metrics />

      {/* Categories */}
      <Categories/>
      {/* Testimonials */}
      <Testimonials />

      {/* <Partners/> */}
      <Partners />

      {/* Community */}
      <Community />

      {/* Footer */}
      <Footer />

      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}
