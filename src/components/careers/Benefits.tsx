"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Coffee, Globe, GraduationCap, Award } from "lucide-react";
import { benefits } from "@/lib/careers/data";

const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="h-6 w-6" />;
      case "Heart":
        return <Heart className="h-6 w-6" />;
      case "Coffee":
        return <Coffee className="h-6 w-6" />;
      case "Globe":
        return <Globe className="h-6 w-6" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6" />;
      case "Award":
        return <Award className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Employee Benefits</h2>
          <p className="text-muted-foreground">
            We believe in taking care of our team members with comprehensive benefits
            that support their wellbeing, growth, and work-life balance.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.id} 
              variants={item}
              className="bg-card p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">We also offer additional benefits based on location and position</p>
          <div className="inline-flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Retirement Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Parental Leave</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Hybrid Work Options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Skill Development Budget</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Team Events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;