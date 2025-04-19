"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { BadgeCheck, Box, ChevronRight, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-3 top-0 z-1 w-full h-full flex flex-col items-center justify-items-center p-3"
      >
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-8">
            <BadgeCheck size={18} className="mr-2" />
            Trusted Global Import Partner
          </div>

          <h1 className="text-2xl sm:text-5xl font-extrabold text-white leading-tight">
            Seamless Global Trade Solutions{" "}
            <span className="text-blue-600">Made Simple</span>
          </h1>

          <p className="text-white text-sm text-shadow-amber-50 md:text-lg text-wrap font-bold">
            Streamline your international procurement with our end-to-end import
            management services and global supplier network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-blue-600 cursor-pointer sm:w-[245px] w-[235px] text-white px-6 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-700 transition-colors text-sm md:text-base">
              <Box size={20} />
              Browse Products
              <ChevronRight size={20} />
            </button>
            <button className="bg-white cursor-pointer sm:w-[220px] w-[205px] border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-50 transition-colors text-sm md:text-base">
              <Clock size={20} />
              Process Timeline
            </button>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
