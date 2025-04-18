"use client"

// pages/index.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Fix this import
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Separate this
import { Badge } from "@/components/ui/badge"; // Add this import
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Separate this
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Separate this
import {
  ChevronRight,
  ArrowRight,
  ShoppingBag,
  Truck,
  Users,
  BarChart3,
  Globe,
  PhoneCall,
  Mail,
  MessageCircle,
  Send
} from "lucide-react";
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("electronics");
  const [stats, setStats] = useState({ products: 0, partners: 0, clients: 0 });
  const [isClient,setIsClient] = useState(false);
  const [radius,setRadius] = useState(240);

  // Radius handling
  useEffect(()=>{
    setIsClient(true)
    const handleResize =()=>{
      setRadius(()=>{
     return  window.innerWidth < 768 ? 180 : 240
      })
    }
    handleResize()
    window.addEventListener("resize",handleResize)

    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
  },[])

  // Analytics counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        products: prev.products < 5000 ? prev.products + 50 : 5000,
        partners: prev.partners < 120 ? prev.partners + 1 : 120,
        clients: prev.clients < 2500 ? prev.clients + 25 : 2500,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Product categories
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

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechSolutions Inc.",
      content: "Anantya transformed our supply chain. Their tech imports are consistently high-quality with competitive pricing.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Procurement Manager, Gadget World",
      content: "Working with Anantya has been seamless. Their platform simplifies the entire import process.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "CEO, InnovateTech",
      content: "The quality control and verification processes at Anantya give us confidence in every shipment we receive.",
      image: "/api/placeholder/64/64"
    }
  ];

  // Partners
  const partners = [
    { name: "TechCorp China", logo: "/comp1.png", },
    { name: "Shenzhen Electronics", logo: "/comp2.png", },
    { name: "Global Circuit", logo: "/comp3.png", },
    { name: "ByteWave Tech", logo: "/comp4.png", },
    { name: "Quantum Devices", logo: "/comp5.png", }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Unique Header Positioning - Top left corner with diagonal component */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="relative">
              <div className="absolute -top-12 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
              <h1 className="text-3xl font-extrabold text-blue-900 relative z-10">
                Anantya
                <span className="text-blue-600 ml-1">.</span>
              </h1>
              <p className="text-sm text-gray-600 relative z-10">Global Tech Import Solutions</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hover:bg-blue-50">Login</Button>
              <Button variant="outline" size="sm" className="hover:bg-blue-50">Seller Registration</Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Buyer Registration</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Graphics */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Your Gateway to Premium <span className="text-blue-600">Tech Imports</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Anantya connects you with verified manufacturers, streamlines logistics, and ensures quality at every step.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Explore Products <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50 px-6 py-3">
                  How It Works <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
              <img src="/port.jpg" alt="Tech Import Visualization" className="rounded-lg shadow-2xl relative z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">About Anantya</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Anantya is a cutting-edge tech import platform that bridges the gap between Chinese manufacturers and global buyers. Founded in 2018, we've revolutionized how businesses source technology products by implementing rigorous quality control processes, transparent pricing, and efficient logistics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Our team of industry experts personally vets each supplier, ensuring you receive only the highest quality products. With offices in Shanghai, Shenzhen, and Bangalore, we facilitate seamless transactions and provide localized support.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-sm"
              >
                <ShoppingBag className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Curated Products</h3>
                <p className="mt-2 text-gray-600">Hand-selected technology products meeting global standards</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-sm"
              >
                <Truck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Simplified Logistics</h3>
                <p className="mt-2 text-gray-600">End-to-end shipping and customs clearance assistance</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-sm"
              >
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Verified Suppliers</h3>
                <p className="mt-2 text-gray-600">Access to pre-vetted manufacturers and distributors</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-xl shadow-sm"
              >
                <Globe className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Global Support</h3>
                <p className="mt-2 text-gray-600">Multilingual assistance across all time zones</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Analytics Section */}
      <motion.section 
        className="py-16 bg-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.products.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Products Available</p>
            </div>
            
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.clients.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Satisfied Clients</p>
            </div>
            
            <div className="p-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.partners.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Global Partners</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Categories - Alibaba-like */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Browse Categories</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our extensive range of tech products sourced directly from leading Chinese manufacturers
            </p>
          </div>
          
          <Tabs 
            defaultValue="electronics" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-8">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-lg py-3"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  <div className="lg:col-span-1">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                    <h3 className="text-xl font-semibold mt-4">{category.title}</h3>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      View All Products
                    </Button>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {category.products.map((product, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          }}
                          className="bg-white p-4 rounded-lg shadow-md"
                        >
                          <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                            <img 
                              src="/api/placeholder/150/150" 
                              alt={product.name} 
                              className="max-h-full"
                            />
                          </div>
                          <h4 className="font-medium">{product.name}</h4>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-blue-600 font-semibold">{product.price}</span>
                            <span className="text-yellow-500 text-sm flex items-center">
                              ★★★★★ {product.rating}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                      {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-gray-800">Sub-category {index + 1}</h4>
                          <p className="text-sm text-gray-500 mt-1">50+ products</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>  
      </section>

      {/* Testimonials - Unique Design */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
        style={{
          backgroundImage: "url('/testimonial.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                {/* Decorative quote marks */}
                <div className="absolute top-4 right-4 text-5xl font-serif text-blue-100">"</div>
                
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                
                <div className="mt-4 text-yellow-500">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners - Enhanced Rotating Design */}
<section className="py-24 px-4 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
      <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We collaborate with leading tech manufacturers and logistics providers across the globe
      </p>
    </div>
    
    <motion.div 
      className="relative h-96 md:h-[500px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeIn}
    >
      {/* Center circle - enlarged */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-50 flex items-center justify-center shadow-inner border border-blue-100">
          <img 
            src="/your-logo-here.png" 
            alt="Your Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain" 
          />
        </div>
      </div>
      
      {/* Orbiting partners - enlarged */}
      {partners.map((partner, index) => {
        const angle = (index / partners.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (!isClient) return null; // Ensure this only runs on the client side
        return (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center bg-white p-4 rounded-xl shadow-lg border border-gray-100"
            style={{
              top: `calc(50% - 50px + ${y}px)`,
              left: `calc(50% - 75px + ${x}px)`,
              width: "150px",
              height: "100px"
            }}
            whileHover={{ 
              scale: 1.15,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="w-full h-full object-contain p-2" 
              title={partner.name}
            />
          </motion.div>
        );
      })}
    </motion.div>

    {/* Partner names as captions (optional) */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
      {partners.map((partner, index) => (
        <div key={index} className="text-gray-700 font-medium">
          {partner.name}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Community Links - Background Image Version */}
<section className="relative py-24 px-4 text-white overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/community.jpg" 
      alt="Community Background" 
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-blue-900/80"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
      <p className="text-xl text-blue-100 mb-10">
        Connect with fellow importers, get exclusive deals, and stay updated with the latest tech trends.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
          <MessageCircle className="h-6 w-6" />
          WhatsApp Community
        </Button>
        
        <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
          <Send className="h-6 w-6" />
          Telegram Channel
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Anantya</h3>
              <p className="mb-4">Your trusted partner for premium tech imports.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.045 10.045 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.92 13.92 0 007.548 2.212c9.054 0 14-7.503 14-14 0-.214-.005-.428-.015-.64A10.025 10.025 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Products</a></li>
                <li><a href="#" className="hover:text-blue-300">Services</a></li>
                <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Supplier Verification</a></li>
                <li><a href="#" className="hover:text-blue-300">Product Sourcing</a></li>
                <li><a href="#" className="hover:text-blue-300">Quality Inspection</a></li>
                <li><a href="#" className="hover:text-blue-300">Logistics Management</a></li>
                <li><a href="#" className="hover:text-blue-300">Market Research</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-400" />
                  <span>info@anantya.com</span>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-2 text-blue-400 mt-1" />
                  <span>
                    Office 501, Tech Park,<br />
                    Bengaluru 560001,<br />
                    Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Anantya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}