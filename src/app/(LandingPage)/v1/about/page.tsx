"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Globe, Users, Award, Package, TrendingUp, ShieldCheck, Zap, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import HomeNavbar from '@/components/ui/home/navbar';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const founders = [
    {
      name: "Roshan Yadav",
      role: "Co-Founder & CEO",
      image: "/api/placeholder/400/400",
      bio: "Transforming global electronics trade with innovation",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Tejash Mishra",
      role: "Co-Founder & COO",
      image: "/api/placeholder/400/400",
      bio: "Pioneering efficient supply chain solutions",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { value: "10", suffix: "+", label: "Global Markets", icon: Globe },
    { value: "50", suffix: "M+", label: "Products Handled", icon: Package },
    { value: "99", suffix: "%", label: "Client Success", icon: Award },
    { value: "24", suffix: "/7", label: "Support Available", icon: Users }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
        <HomeNavbar/>
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-black" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Hero Section with 3D Text */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ANANTYA
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-4xl font-light text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Revolutionizing Global Electronics Trade
            </motion.p>
            
            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-20 h-20 bg-blue-500/20 rounded-xl backdrop-blur-md"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-md"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Glassmorphic About Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold">
                <span className="block text-zinc-400">Redefining</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Electronics Import
                </span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                At Anantys Overseas, we're not just importers — we're innovators transforming how businesses access global electronics markets.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>Government Certified</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span>Quality Excellence</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Anantys Operations" 
                  className="rounded-2xl object-cover w-full h-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Founders Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Visionaries</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The minds powering the future of electronics import
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} rounded-2xl blur-lg`} />
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="relative w-24 h-24 rounded-2xl object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                      <p className="text-zinc-400">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Stats Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
                  <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{stat.value}</span>
                    <span className="text-2xl text-zinc-400">{stat.suffix}</span>
                  </div>
                  <p className="text-zinc-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Capabilities</span>
          </motion.h2>
          
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {[
                  { icon: Package, title: "Bulk Importing", desc: "Large-scale electronics" },
                  { icon: Globe, title: "Global Sourcing", desc: "Worldwide network" },
                  { icon: Zap, title: "Fast Delivery", desc: "Efficient logistics" },
                  { icon: ShieldCheck, title: "Quality Control", desc: "Rigorous testing" }
                ].map((service, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex-shrink-0 w-80 h-64 bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group hover:border-blue-500/50 transition-all"
                  >
                    <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-zinc-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center">
              <h2 className="text-5xl font-bold mb-8">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Join the future of electronics import with Anantys Overseas
              </p>
              <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}