import { Globe, PackageCheck, Shield, Ship, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
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
              <div className="bg-gray-200 rounded-xl h-96 w-full relative overflow-hidden flex items-center justify-center">
                {/* Replace with actual image */}
                <Image
                  src="/Anan.png"
                  alt="Company Logo"
                  className="object-cover object-center"
                  fill
                />{" "}
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
                      Our industry experts personally inspect and approve every
                      supplier, maintaining a{" "}
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
  );
}
