"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HomeNavbar from '@/components/ui/home/navbar';
import Footer from '@/components/ui/home/footer';

// Components
const AnimatedText = ({ text, className }:{text:string,className:string}) => {
  return (
    <motion.h2 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  );
};

const ValueCard = ({ icon, title, description }:{icon:React.ReactNode,title:string,description:string}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FounderCard = ({ name, title, bio, imageUrl }:{name:string,title:string,bio:string,imageUrl:string}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Image 
          src={imageUrl || "/api/placeholder/400/500"} 
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-2xl font-bold mb-1 text-indigo-800">{name}</h3>
        <h4 className="text-lg font-medium mb-4 text-indigo-600">{title}</h4>
        <p className="text-gray-700">{bio}</p>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <HomeNavbar/>

      {/* Hero Section with Parallax */}
      <div className="relative h-96 overflow-hidden mt-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')", 
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundPosition: 'center 50%'
          }}
        />
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Anatya Overseas</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Bridging global markets with integrity, expertise, and innovation</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded with a vision to bridge global markets, Anatya Overseas has established itself as a trusted name in the international trade facilitation sector.
              </p>
              <p className="text-lg text-gray-700">
                What began as a collaboration between three industry professionals with complementary expertise has evolved into a dynamic enterprise connecting businesses across continents.
              </p>
            </motion.div>
            <motion.div
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image 
                src="/api/placeholder/800/600" 
                alt="Anatya Overseas Story" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-24">
          <AnimatedText text="Our Mission" className="text-3xl font-bold text-center text-indigo-800 mb-12" />
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-xl text-gray-800 leading-relaxed">
                At Anatya Overseas, we are dedicated to simplifying international trade by creating seamless connections between exporters and importers worldwide. We strive to eliminate boundaries in global commerce, ensuring businesses of all sizes can access international markets with confidence and ease.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-24">
          <AnimatedText text="Our Values" className="text-3xl font-bold text-center text-indigo-800 mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon="🤝" 
              title="Integrity" 
              description="We conduct business with unwavering honesty and transparency, building trust with every interaction." 
            />
            <ValueCard 
              icon="✨" 
              title="Excellence" 
              description="We are committed to delivering exceptional service and results that exceed expectations." 
            />
            <ValueCard 
              icon="💡" 
              title="Innovation" 
              description="We continuously seek better solutions to evolving trade challenges in a dynamic global market." 
            />
            <ValueCard 
              icon="🌉" 
              title="Partnership" 
              description="We build lasting relationships based on mutual growth and success with our clients and partners." 
            />
            <ValueCard 
              icon="🌏" 
              title="Global Perspective" 
              description="We embrace diverse business cultures while maintaining universal standards of quality." 
            />
            <ValueCard 
              icon="📊" 
              title="Results-Driven" 
              description="We measure our success by the tangible outcomes we create for our clients worldwide." 
            />
          </div>
        </section>

        {/* Meet Our Founders Section */}
        <section className="mb-24">
          <AnimatedText text="Meet Our Founders" className="text-3xl font-bold text-center text-indigo-800 mb-12" />
          
          <div className="flex flex-col space-y-12">
            <FounderCard 
              name="John Doe" 
              title="Co-Founder & Chief Executive Officer"
              bio="With over 15 years of experience in international trade and logistics, John brings strategic vision and leadership to Anatya Overseas. His expertise in market analysis and business development has been instrumental in establishing our global network and reputation for excellence."
              imageUrl="/api/placeholder/400/500"
            />
            
            <FounderCard 
              name="Jane Smith" 
              title="Co-Founder & Chief Operations Officer"
              bio="Jane's background in supply chain management and cross-border regulations forms the backbone of our operational efficiency. Her methodical approach to complex trade logistics ensures smooth transactions for our clients across diverse regulatory environments."
              imageUrl="/api/placeholder/400/500"
            />
            
            <FounderCard 
              name="Michael Chen" 
              title="Co-Founder & Chief Business Development Officer"
              bio="A pioneer in relationship-building across cultural boundaries, Michael has developed Anatya's extensive network of trusted partners worldwide. His intuitive understanding of different market dynamics enables us to create perfect matches between exporters and importers."
              imageUrl="/api/placeholder/400/500"
            />
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-24">
          <AnimatedText text="Our Approach" className="text-3xl font-bold text-center text-indigo-800 mb-12" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/api/placeholder/800/600" 
                alt="Our Approach" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 mb-4">
                Anatya Overseas distinguishes itself through its personalized approach to international trade facilitation. We recognize that each business has unique needs and aspirations in the global marketplace.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team conducts thorough analyses of both exporter capabilities and importer requirements to ensure ideal partnerships. Our comprehensive knowledge of international trade regulations, documentation requirements, and logistics solutions allows us to navigate the complexities of cross-border commerce on behalf of our clients.
              </p>
              <p className="text-lg text-gray-700">
                We don&apos;t just connect businesses; we facilitate successful, sustainable trading relationships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section>
          <AnimatedText text="Global Presence" className="text-3xl font-bold text-center text-indigo-800 mb-12" />
          
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden shadow-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="/api/placeholder/1200/600" 
              alt="Global Presence" 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Worldwide Network</h3>
              <p className="text-lg max-w-2xl">
                With strategic partnerships in key markets across Asia, Europe, Americas, Africa, and Oceania, 
                Anatya Overseas offers truly global trade facilitation services.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700">
              Our global presence enables us to understand local market nuances, navigate regional regulations, 
              and identify opportunities that others might miss. Wherever your business aims to expand, 
              Anatya Overseas has the connections and expertise to make it happen.
            </p>
          </motion.div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-800 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let&apos;s connect and explore how Anatya Overseas can help your business thrive in international markets.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-indigo-800 rounded-full text-lg font-bold shadow-lg hover:bg-indigo-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
}