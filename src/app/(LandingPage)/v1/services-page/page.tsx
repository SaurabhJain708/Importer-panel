'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  FileCheck,
  Ship,
  Package,
  CreditCard,
  FileSpreadsheet,
  Users,
  Shield,
  Clock,
  ThumbsUp
} from 'lucide-react';
import HomeNavbar from '@/components/ui/home/navbar';
import Footer from '@/components/ui/home/footer';

// Service type definition
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: "International Trade Facilitation",
      description: "We streamline your import-export processes with comprehensive trade facilitation services, ensuring seamless cross-border transactions and regulatory compliance.",
      icon: <Globe className="h-8 w-8" />,
      benefits: [
        "End-to-end trade documentation management",
        "Customs clearance assistance",
        "Trade compliance advisory",
        "Global market access strategies"
      ],
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: 2,
      title: "Supply Chain Optimization",
      description: "Our supply chain solutions optimize your logistics operations, reducing costs and enhancing efficiency across your entire international supply network.",
      icon: <TrendingUp className="h-8 w-8" />,
      benefits: [
        "Supply chain analysis and redesign",
        "Logistics optimization",
        "Inventory management systems",
        "Cost reduction strategies"
      ],
      color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      id: 3,
      title: "Regulatory Compliance",
      description: "Navigate complex international regulations with our compliance services that keep your business operations legally sound across multiple jurisdictions.",
      icon: <FileCheck className="h-8 w-8" />,
      benefits: [
        "International regulatory consulting",
        "Compliance documentation",
        "Risk assessment and mitigation",
        "Regulatory updates and advisory"
      ],
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      id: 4,
      title: "Freight Forwarding",
      description: "Our premium freight forwarding services ensure your goods reach their destination efficiently, with optimized routes and carrier selection for maximum value.",
      icon: <Ship className="h-8 w-8" />,
      benefits: [
        "Air, ocean, and land freight",
        "Multimodal transportation",
        "Consolidation services",
        "Track and trace systems"
      ],
      color: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      id: 5,
      title: "Warehouse & Distribution",
      description: "Leverage our strategic warehousing and distribution services to position your products closer to your customers while optimizing storage costs.",
      icon: <Package className="h-8 w-8" />,
      benefits: [
        "Global warehouse network",
        "Inventory management",
        "Order fulfillment",
        "Distribution center operations"
      ],
      color: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: 6,
      title: "Trade Finance Solutions",
      description: "Access tailored financial solutions designed to support your international trade operations, from letters of credit to working capital optimization.",
      icon: <CreditCard className="h-8 w-8" />,
      benefits: [
        "Letters of credit management",
        "Trade credit insurance",
        "International payment solutions",
        "Currency risk management"
      ],
      color: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      id: 7,
      title: "Trade Documentation",
      description: "Ensure accuracy and compliance with our comprehensive trade documentation services that handle all paperwork required for international shipping.",
      icon: <FileSpreadsheet className="h-8 w-8" />,
      benefits: [
        "Export/import documentation",
        "Certificate of origin processing",
        "Electronic documentation systems",
        "Document verification"
      ],
      color: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: 8,
      title: "Trade Consultancy",
      description: "Gain strategic insights with our specialized trade consultancy services that help you navigate market entry, expansion, and optimization opportunities.",
      icon: <Users className="h-8 w-8" />,
      benefits: [
        "Market entry strategies",
        "Trade route optimization",
        "Partner identification",
        "International business development"
      ],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  // Features section data
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Operations in over 50 countries with a network of trusted partners worldwide"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Excellence",
      description: "ISO 9001, AEO, and IATA certified operations ensuring highest standards"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service across all time zones"
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "Client Satisfaction",
      description: "98% client retention rate with exceptional satisfaction scores"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <HomeNavbar/>
      {/* Hero Section */}
      <section className="relative mt-8 bg-gradient-to-r from-blue-800 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%" height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid" width="40" height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none" stroke="white" strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
              Global Trade Services
            </h1>
            <p className="text-lg md:text-xl text-blue-500 mb-8">
              Empowering your international business with comprehensive trade solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Explore Services
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                Our Approach
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,160C672,117,768,75,864,69.3C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-800 mb-2">100%</p>
              <p className="text-gray-600">Transparency</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-800 mb-2">50+</p>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-800 mb-2">1,200+</p>
              <p className="text-gray-600">Clients Worldwide</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-800 mb-2">10,000+</p>
              <p className="text-gray-600">Shipments Annually</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Tab Interface */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600">
              Anantya Overseas provides end-to-end international trade services designed to simplify global commerce for businesses of all sizes.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
                <div className="p-6 bg-blue-800 text-white">
                  <h3 className="text-xl font-semibold">Our Services</h3>
                  <p className="text-blue-100 mt-1">Select a service to learn more</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      className={`w-full px-6 py-4 text-left flex items-center gap-3 transition-colors duration-300 ${
                        activeTab === service.id
                          ? "bg-blue-50 text-blue-800"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                      onClick={() => setActiveTab(service.id)}
                    >
                      <div className={`p-2 rounded-lg ${
                        service.color.split(' ')[0] + ' ' + service.color.split(' ')[1]
                      }`}>
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Service Details */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                  </div>
                  <div className={`p-6 rounded-xl ${activeService.color}`}>
                    <div className="w-16 h-16 flex items-center justify-center">
                      {activeService.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{activeService.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits</h4>
                  <ul className="grid md:grid-cols-2 gap-3 mb-8">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                      Learn More
                    </button>
                    <button className="text-blue-700 hover:text-blue-800 font-medium flex items-center gap-1">
                      <span>Service Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Anantya Overseas</h2>
            <p className="text-lg text-blue-100">
              With decades of experience in global trade, we deliver unmatched expertise and personalized solutions for your business.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Our specialized services cater to a diverse range of industries with unique shipping and compliance requirements.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {[
              "Manufacturing",
              "Pharmaceuticals",
              "Electronics",
              "Automotive",
              "Textiles",
              "Agriculture",
              "Food & Beverage",
              "Chemicals",
              "Consumer Goods",
              "Aerospace",
              "Fashion & Apparel",
              "Furniture"
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 rounded-xl p-4 text-center transition-colors duration-300"
              >
                <div className="aspect-square flex items-center justify-center mb-3">
                  <img
                    src={`/api/placeholder/64/64`}
                    alt={industry}
                    className="w-12 h-12 object-contain opacity-70"
                  />
                </div>
                <p className="font-medium text-gray-800">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative px-6 py-20 md:p-16 text-center md:text-left md:flex items-center justify-between">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cta-grid)" />
                </svg>
              </div>
              
              <div className="md:max-w-xl relative z-10 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Simplify Your Global Trade?
                </h2>
                <p className="text-lg text-blue-100 mb-0 md:pr-8">
                  Let our experts create a tailored solution for your specific international trade requirements.
                </p>
              </div>
              
              <div className="relative z-10">
                <button className="bg-white hover:bg-blue-50 text-blue-800 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}