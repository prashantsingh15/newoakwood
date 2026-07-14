"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/app/components/Reveal";
import { PackageCard } from "@/app/components/PackageCard";
import { HOLIDAY_PACKAGES } from "@/app/lib/constants";

export function HolidayPackages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="packages" className="py-24 md:py-36 bg-gradient-to-b from-neutral-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
              Holiday Packages
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-2xl">
              Curated Journeys, Ready to Book
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full glass text-white hover:bg-white/10 transition-colors"
              aria-label="Scroll packages left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full glass text-white hover:bg-white/10 transition-colors"
              aria-label="Scroll packages right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
      >
        {HOLIDAY_PACKAGES.map((packageItem, index) => (
          <div key={packageItem.id} className="snap-start">
            <PackageCard packageItem={packageItem} index={index} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
