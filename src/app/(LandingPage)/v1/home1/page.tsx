import React from "react";
import HomeNavbar from "@/components/ui/home/navbar";
import HeroSection from "@/components/ui/home/herosection";
import About from "@/components/ui/home/about";
import Metrics from "@/components/ui/home/metrics";
import Community from "@/components/ui/home/community";
import Footer from "@/components/ui/home/footer";
import Video from "@/components/ui/home/video";
import Testimonials from "@/components/ui/home/testimonials";

export default function AnantyaOverseasUI() {

  const categories = [
    {
      id: "electronics",
      title: "Electronics",
      description: "Premium laptops, smartphones, and gadgets from leading Chinese manufacturers",
      image: "/api/placeholder/400/300",
      products: [
        { name: "Ultra Slim Laptop", price: "$499", rating: 4.8 },
        { name: "Smart Wearable", price: "$129", rating: 4.6 },
        { name: "4K Drone", price: "$399", rating: 4.7 }
      ]
    },
    {
      id: "components",
      title: "Components",
      description: "High-quality electronic components for manufacturing and assembly",
      image: "/api/placeholder/400/300",
      products: [
        { name: "PCB Boards", price: "$79", rating: 4.9 },
        { name: "Semiconductor Sets", price: "$199", rating: 4.8 },
        { name: "LED Panels", price: "$149", rating: 4.7 }
      ]
    },
    {
      id: "accessories",
      title: "Accessories",
      description: "Complementary accessories for all your tech needs",
      image: "/api/placeholder/400/300",
      products: [
        { name: "Premium Headphones", price: "$89", rating: 4.5 },
        { name: "Power Banks", price: "$49", rating: 4.7 },
        { name: "Wireless Chargers", price: "$39", rating: 4.6 }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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


      {/* Testimonials */}
      <Testimonials />

      {/* Community */}
      <Community />

      {/* Footer */}
      <Footer />
      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}
