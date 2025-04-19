"use client"
import { m , LazyMotion, domAnimation } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechSolutions Inc.",
      content:
        "Anantya transformed our supply chain. Their tech imports are consistently high-quality with competitive pricing.",
      image: "/api/placeholder/64/64",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Procurement Manager, Gadget World",
      content:
        "Working with Anantya has been seamless. Their platform simplifies the entire import process.",
      image: "/api/placeholder/64/64",
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "CEO, InnovateTech",
      content:
        "The quality control and verification processes at Anantya give us confidence in every shipment we receive.",
      image: "/api/placeholder/64/64",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <m.section
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
            <h2 className="text-3xl font-bold text-white">
              Client Success Stories
            </h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                {/* Decorative quote marks */}
                <div className="absolute top-4 right-4 text-5xl font-serif text-blue-100">
                  "
                </div>

                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 italic">"{testimonial.content}"</p>

                <div className="mt-4 text-yellow-500">★★★★★</div>
              </m.div>
            ))}
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
