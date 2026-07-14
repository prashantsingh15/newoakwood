"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/app/components/Reveal";
import { POPULAR_DESTINATIONS } from "@/app/lib/constants";

const CONTINENTS = [
  // North America
  "M50,28 L52,22 L58,18 L70,16 L82,18 L88,24 L92,30 L88,38 L80,42 L72,44 L64,42 L56,40 L50,36 Z",
  // South America
  "M58,52 L66,50 L74,52 L78,60 L76,72 L70,84 L62,88 L56,82 L52,70 L54,58 Z",
  // Europe
  "M94,26 L102,22 L112,20 L120,22 L124,28 L122,34 L116,36 L106,36 L96,34 Z",
  // Africa
  "M96,40 L108,38 L118,40 L122,50 L120,64 L114,76 L104,80 L96,74 L92,60 Z",
  // Asia
  "M126,24 L140,18 L158,20 L170,28 L176,40 L172,52 L160,56 L146,54 L134,48 L126,38 Z",
  // Australia
  "M150,68 L162,64 L172,68 L174,78 L166,84 L154,84 L148,76 Z",
];

export function InteractiveWorldMap() {
  return (
    <section className="py-24 md:py-36 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Global Reach
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto mb-6">
            Explore Our Destinations Around the World
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From tropical islands to alpine peaks, every marker represents a
            handpicked luxury experience waiting for you.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl glass p-4 md:p-8 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <svg
              viewBox="0 0 200 100"
              className="w-full h-full relative z-10"
              aria-label="Interactive world map with destination markers"
            >
              {CONTINENTS.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="rgba(255,255,255,0.06)"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              ))}

              {POPULAR_DESTINATIONS.map((destination) =>
                destination.coordinates ? (
                  <g key={destination.id}>
                    <circle
                      cx={destination.coordinates.x}
                      cy={destination.coordinates.y}
                      r="3"
                      fill="rgba(201,169,98,0.3)"
                      className="animate-pulse-dot"
                    />
                    <circle
                      cx={destination.coordinates.x}
                      cy={destination.coordinates.y}
                      r="2"
                      fill="#c9a962"
                    />
                    <text
                      x={destination.coordinates.x}
                      y={destination.coordinates.y - 6}
                      textAnchor="middle"
                      fill="white"
                      fontSize="3"
                      fontFamily="var(--font-inter)"
                      opacity="0.9"
                    >
                      {destination.name}
                    </text>
                  </g>
                ) : null
              )}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
