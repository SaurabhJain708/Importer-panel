"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CompanyCulture = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Culture & Values</h2>
            <p className="text-muted-foreground mb-6">
              At our core, we believe in fostering an environment where innovation thrives, 
              diverse perspectives are valued, and everyone has the opportunity to make an impact.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation & Excellence</h3>
                  <p className="text-muted-foreground">
                    We continuously push boundaries to deliver the best tech products and solutions to our customers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration & Respect</h3>
                  <p className="text-muted-foreground">
                    We work together across borders and cultures, respecting diverse perspectives and ideas.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrity & Transparency</h3>
                  <p className="text-muted-foreground">
                    We conduct business with the highest ethical standards and maintain transparent relationships.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth & Development</h3>
                  <p className="text-muted-foreground">
                    We invest in our people's professional growth and provide opportunities for continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-1 lg:order-2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src="/loginvid.mp4" 
                  alt="Team collaboration" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src="/worldmap.png"
                  alt="Company culture" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src="/worldmap.png"
                  alt="Office environment" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src="/worldmap.png"
                  alt="Team building" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;