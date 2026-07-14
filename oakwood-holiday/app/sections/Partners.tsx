"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/app/components/Reveal";
import { PARTNERS } from "@/app/lib/constants";

export function Partners() {
  return (
    <section className="py-20 md:py-28 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
            Trusted by the World&apos;s Finest Brands
          </p>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-xl md:text-2xl font-serif text-white/40 hover:text-white/90 transition-colors duration-500 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
