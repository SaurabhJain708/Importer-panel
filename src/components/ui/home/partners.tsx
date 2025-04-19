"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "TechCorp China", logo: "/comp1.png" },
  { name: "Shenzhen Electronics", logo: "/comp2.png" },
  { name: "Global Circuit", logo: "/comp3.png" },
  { name: "ByteWave Tech", logo: "/comp4.png" },
  { name: "Quantum Devices", logo: "/comp5.png" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Partners() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Collaborating with global leaders in tech and logistics to bring you the best.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {partners.map((partner, i) => (
              <m.div
                key={partner.name}
                className="bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition-all duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 20vw, 40vw"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {partner.name}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
