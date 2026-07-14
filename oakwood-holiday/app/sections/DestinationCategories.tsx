"use client";

import { motion } from "framer-motion";
import { DESTINATION_CATEGORIES, POPULAR_DESTINATIONS } from "@/app/lib/constants";
import { DestinationCard } from "@/app/components/DestinationCard";
import { Reveal } from "@/app/components/Reveal";
import { useState } from "react";

export function DestinationCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDestinations =
    activeCategory === "All"
      ? POPULAR_DESTINATIONS
      : POPULAR_DESTINATIONS.filter((d) => d.category === activeCategory);

  return (
    <section id="destinations" className="py-24 md:py-36 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-6">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Curated Destinations
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto">
            Where Will Your Next Journey Take You?
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-16">
          {DESTINATION_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-neutral-950"
                  : "glass text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              layout
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <DestinationCard destination={destination} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
