"use client";
import React from "react";
import {
  Globe,
  Ship,
  Shield,
  Users,
  Menu,
  ChevronRight,
  Box,
  BadgeCheck,
  Clock,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { PackageCheck } from "lucide-react";

export default function AnantyaOverseasUI() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navbar */}
      <header className="fixed top-0 left-0 right-0 z-5000 bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Ship className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                Anantya Overseas
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Improved Hero Section */}
      <section className="relative h-[440px] w-full mt-22 mx-0 bg-amber-700 p-0 overflow-x-hidden">
        <video
          src="/ship.mp4"
          autoPlay
          muted
          loop
          className=" object-cover w-full h-full z-0"
        ></video>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-3 top-0 z-50 w-full h-full flex flex-col items-center justify-items-center"
        >
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-8">
              <BadgeCheck size={18} className="mr-2" />
              Trusted Global Import Partner
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Seamless Global Trade Solutions{" "}
              <span className="text-blue-600">Made Simple</span>
            </h1>

            <p className="text-white md:text-lg">
              Streamline your international procurement with our end-to-end
              import management services and global supplier network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-600 cursor-pointer w-[235px] text-white px-6 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-700 transition-colors text-sm md:text-base">
                <Box size={20} />
                Browse Products
                <ChevronRight size={20} />
              </button>
              <button className="bg-white cursor-pointer w-[205px] border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-50 transition-colors text-sm md:text-base">
                <Clock size={20} />
                Process Timeline
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About anantya  overseas */}
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">Anantya</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  A cutting-edge tech import platform bridging Chinese
                  manufacturers and global buyers since 2018.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We revolutionize technology sourcing through:
                    <span className="block mt-2">
                      ✓ Rigorous quality control
                      <br />
                      ✓ Transparent pricing
                      <br />✓ Efficient logistics
                    </span>
                  </p>
                  <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Global Presence:
                      <span className="text-blue-600 font-medium ml-2">
                        Shanghai • Shenzhen • Bangalore
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Image/Graphic Section */}
              <div className="md:w-1/2 hidden md:block">
                <div className="bg-gray-200 rounded-xl h-96 w-full flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-gray-500">Company Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Anantya?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Curated Products */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <PackageCheck className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Curated Products
                </h3>
                <p className="text-gray-600">
                  Hand-selected technology products meeting global standards
                </p>
              </div>

              {/* Simplified Logistics */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <Ship className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Simplified Logistics
                </h3>
                <p className="text-gray-600">
                  End-to-end shipping and customs clearance assistance
                </p>
              </div>

              {/* Verified Suppliers */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <Shield className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Verified Suppliers
                </h3>
                <p className="text-gray-600">
                  Access to pre-vetted manufacturers and distributors
                </p>
              </div>

              {/* Global Support */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <Globe className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Support
                </h3>
                <p className="text-gray-600">
                  Multilingual assistance across all time zones
                </p>
              </div>
            </div>







            {/* Expertise Section */}
            <div className="mt-16 bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-200 rounded-full opacity-20" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-300 rounded-full opacity-10" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Shield className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Core Expertise
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Expertise 1 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <Users className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Rigorous Supplier Vetting
                      </h4>
                      <p className="text-gray-600">
                        Our industry experts personally inspect and approve
                        every supplier, maintaining a{" "}
                        <span className="text-blue-600 font-medium">99.8%</span>
                        quality satisfaction rate across 500+ partners.
                      </p>
                    </div>
                  </div>

                  {/* Expertise 2 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <Globe className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Global Operational Support
                      </h4>
                      <p className="text-gray-600">
                        Localized assistance through our{" "}
                        <span className="text-blue-600 font-medium">3</span>
                        international hubs, providing{" "}
                        <span className="text-blue-600 font-medium">24/7</span>
                        multilingual support across time zones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-blue-200/50" />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    { number: "500+", label: "Verified Suppliers" },
                    { number: "99.8%", label: "Quality Rate" },
                    { number: "24/7", label: "Support Coverage" },
                    { number: "3", label: "Global Hubs" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/50 backdrop-blur-sm rounded-xl"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}
