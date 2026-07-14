"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Package } from "@/app/types";
import { MagneticButton } from "./MagneticButton";

interface PackageCardProps {
  packageItem: Package;
  index?: number;
}

export function PackageCard({ packageItem, index = 0 }: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-[320px] md:w-[400px] rounded-3xl overflow-hidden glass will-change-transform"
    >
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          fill
          sizes="(max-width: 768px) 320px, 400px"
          className="object-cover transition-opacity duration-500"
          style={{ opacity: isHovered && packageItem.video ? 0 : 1 }}
        />

        {packageItem.video && (
          <video
            src={packageItem.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
            autoPlay={isHovered}
          />
        )}

        <div className="absolute top-4 right-4 glass px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
          <span className="text-xs font-semibold text-white">
            {packageItem.rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-white/60 text-xs mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {packageItem.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {packageItem.duration}
          </span>
        </div>

        <h3 className="text-xl font-serif text-white mb-3">
          {packageItem.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {packageItem.highlights.map((highlight, i) => (
            <span
              key={i}
              className="text-xs glass px-2.5 py-1 rounded-full text-white/80"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif text-white">
              ${packageItem.price.toLocaleString()}
            </span>
            <span className="text-white/50 text-xs"> / person</span>
          </div>
          <MagneticButton
            className="bg-white text-neutral-950 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gold-light transition-colors flex items-center gap-1.5 group/btn"
            strength={0.2}
          >
            Book
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}
