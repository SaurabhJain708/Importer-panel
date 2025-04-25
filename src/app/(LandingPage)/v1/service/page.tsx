"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Briefcase, Users, Truck } from "lucide-react"

// Logo component for reuse - Fixed by removing image reference
import Image from 'next/image';

const AnantyaLogo = ({ className = "", logoSize = "xlarge" }) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
    xlarge: 150
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/anan.png"
        alt="Anantya Overseas Logo"
        width={sizeMap[logoSize]}
        height={sizeMap[logoSize]}
        className="mr-2"
      />
    </div>
  );
};

export default function ServicesPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-black text-white">
        <div className="container mx-auto flex justify-between items-center">
          <AnantyaLogo />
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="/services" className="text-yellow-400 font-medium">Services</a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Get a Quote</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">Services</h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We Provide Product Sourcing</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              We sell products to wholesalers, connect with manufacturers, and handle all aspects of freight forward.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                Our Services
              </Button>
          {/* Contact Us button with red background */}
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
               Contact Us
            </Button>
          </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 relative">
              Our Services
              <span className="block w-24 h-1 bg-red-600 mx-auto mt-4"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-2 bg-yellow-500"></div>
                <CardContent className="pt-6 p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-black rounded-full p-4 text-white">
                      <Briefcase className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Product Sourcing</h3>
                  <p className="text-gray-600 text-center">
                    We identify and acquire high-quality products from trusted global sources tailored to your business needs and market demands.
                  </p>
                  <div className="mt-6 text-center">
                    <Button variant="ghost" className="text-black hover:text-red-600 p-0 group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-2 bg-red-600"></div>
                <CardContent className="pt-6 p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-black rounded-full p-4 text-white">
                      <Users className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Manufacturer Connections</h3>
                  <p className="text-gray-600 text-center">
                    We establish and nurture direct relationships with manufacturers to ensure quality, competitive pricing, and reliable production timelines.
                  </p>
                  <div className="mt-6 text-center">
                    <Button variant="ghost" className="text-black hover:text-red-600 p-0 group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-2 bg-yellow-500"></div>
                <CardContent className="pt-6 p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-black rounded-full p-4 text-white">
                      <Truck className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Freight Forwarding</h3>
                  <p className="text-gray-600 text-center">
                    We manage the entire logistics process including shipping, customs clearance, documentation, and final delivery to your specified location.
                  </p>
                  <div className="mt-6 text-center">
                    <Button variant="ghost" className="text-black hover:text-red-600 p-0 group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold mb-6 relative">
                  Our Global Reach
                  <span className="block w-16 h-1 bg-red-600 mt-4"></span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  With strategic partnerships across Asia, Europe, North America, and beyond, we connect you to a world of opportunities for sourcing premium products.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our extensive network enables us to navigate international markets with ease, identifying the best suppliers and negotiating favorable terms on your behalf.
                </p>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Explore Our Network
                </Button>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <div className="relative">
                  <img 
                    src="/worldmap.png" 
                    alt="World Map" 
                    className="w-full h-auto rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 relative">
              Why Choose Us
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-400">Rigorous quality control at every stage ensures only the best products reach you.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-400">Efficient processes and established relationships ensure timely delivery.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-400">Direct manufacturer relationships allow us to secure the best possible prices.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                <p className="text-gray-400">Our experienced team provides personalized guidance throughout the entire process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
            <p className="text-center text-lg mb-12">Contact us today to learn more about our services</p>
            
            {isSubmitted ? (
              <div className="max-w-md mx-auto text-center p-8 bg-red-50 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been submitted. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Full Name" 
                      {...register("name", { required: "Name is required" })}
                      className="border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Company Name" 
                      {...register("company")}
                      className="border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="How can we help you?" 
                      {...register("message", { required: "Message is required" })}
                      className="border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                      rows={4}
                    />
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Submit</Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-6">
                <AnantyaLogo className="scale-90 origin-left" />
              </div>
              <p className="text-gray-400">Your trusted partner for global product sourcing and logistics. Connecting businesses with quality manufacturers worldwide since 2015.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 relative">
                Quick Links
                <span className="block w-12 h-1 bg-red-600 mt-2"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Services</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Products</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 relative">
                Contact Info
                <span className="block w-12 h-1 bg-red-600 mt-2"></span>
              </h3>
              <address className="text-gray-400 not-italic space-y-3">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  123 Business Avenue, Trade District, City, Country
                  <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  info@anantyaoverseas.com
                </p>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Mon-Fri: 9:00 AM - 6:00 PM
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Anantya Overseas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}