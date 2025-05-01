import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import HomeNavbar from "@/components/ui/home/navbar";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HomeNavbar/>
      {/* Hero Section */}
      <section className="mb-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Anantya Overseas
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We are a leading export company committed to delivering
              high-quality products to international markets, building strong
              partnerships, and setting new industry standards.
            </p>
            <div className="flex gap-2  sm:gap-4 ">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-2xl text-primary">15+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-2xl text-primary">50+</h3>
                <p className="text-sm">Countries Served</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-2xl text-primary">500+</h3>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-10 rounded-2xl"></div>
            <Image
              src="/anan.png"
              alt="Anantya Overseas Headquarters"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            The journey of Anantya Overseas is a testament to innovation,
            resilience, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Beginning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Founded in 2008, Anantya Overseas started as a small export
                business with big dreams. Our founder&apos;s vision was to create a
                global network of reliable trade partnerships.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth & Expansion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Over the years, we&apos;ve expanded our operations across continents,
                diversified our product range, and built a reputation for
                reliability and excellence in the global market.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Today, Anantya Overseas stands as a leading name in the export
                industry, known for quality, innovation, and customer-centric
                approach to business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20 bg-slate-50 p-12 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <Separator className="w-24 mb-6" />
            <p className="text-gray-700 mb-6">
              To provide exceptional products and services that exceed our
              customers&apos; expectations, foster long-term relationships with our
              partners, and contribute to the economic growth of the regions we
              operate in.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                  ✓
                </div>
                <span>Deliver premium quality products consistently</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                  ✓
                </div>
                <span>
                  Build lasting relationships with clients and suppliers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                  ✓
                </div>
                <span>
                  Maintain ethical business practices and transparency
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <Separator className="w-24 mb-6" />
            <p className="text-gray-700 mb-6">
              To be the most trusted and preferred export partner globally,
              known for our quality, reliability, and innovation, while setting
              new standards in the industry.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">Core Values</h3>
              <div className="sm:grid sm:grid-cols-2 flex flex-wrap  gap-4">
                <div className="p-3 bg-primary/5 rounded-lg text-center">
                  <p className="font-medium">Integrity</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg text-center">
                  <p className="font-medium">Excellence</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg text-center">
                  <p className="font-medium">Innovation</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg text-center">
                  <p className="font-medium">Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries behind Anantya Overseas who drive our success
            with their expertise and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {[
            {
              name: "Roshan Yadav",
              position: "CEO & Founder",
              bio: "With over 20 years of experience in international trade, Roshan leads our company vision and strategy.",
            },
            {
              name: "Tejash Mishra",
              position: "Operations Director",
              bio: "Tejash ensures seamless operations across all our facilities and oversees quality management systems.",
            },
          ].map((member, index) => (
            <Card key={index}>
              <div className="h-48 lg:h-96 bg-gray-200 relative">
                <Image
                  src={`/avatar.png`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our competitive advantages have established us as industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Assurance",
              description:
                "Rigorous quality control processes ensure that every product meets international standards.",
            },
            {
              title: "Global Network",
              description:
                "Our extensive network of suppliers and distributors enables seamless operations worldwide.",
            },
            {
              title: "Customer-First Approach",
              description:
                "We prioritize customer satisfaction through personalized service and flexible solutions.",
            },
            {
              title: "Sustainable Practices",
              description:
                "We&apos;re committed to environmentally responsible operations across our supply chain.",
            },
            {
              title: "Technological Integration",
              description:
                "Advanced technology enhances our efficiency, transparency, and customer experience.",
            },
            {
              title: "Industry Expertise",
              description:
                "Our team brings decades of combined experience and deep industry knowledge.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-xl mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            From our headquarters in India, we serve clients across continents,
            bringing quality products to global markets.
          </p>
        </div>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden">
          <Image
            src="/worldmap.png"
            alt="Global Presence Map"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {["Asia", "Europe", "North America", "Africa"].map(
            (region, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-medium">{region}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Get In Touch */}
      <section className="bg-primary text-white p-12 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="max-w-2xl mx-auto">
            Connect with our team to discuss how Anantya Overseas can meet your
            export needs and become your trusted business partner.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
