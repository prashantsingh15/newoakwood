"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { Testimonial } from "@/app/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-3xl p-6 md:p-8 min-w-[300px] md:min-w-[380px] max-w-[420px] flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-gold fill-gold"
                : "text-white/20"
            }`}
          />
        ))}
      </div>

      <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/30">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-white/50 text-xs">{testimonial.role}</p>
          <p className="text-white/40 text-xs flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" />
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
