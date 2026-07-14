"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Destination } from "@/app/types";
import { MagneticButton } from "./MagneticButton";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative h-[360px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer will-change-transform"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-white/90">
          From ${destination.priceFrom.toLocaleString()}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
        <p className="text-gold text-sm font-medium mb-1">
          {destination.country}
        </p>
        <h3 className="text-2xl font-serif text-white mb-2">
          {destination.name}
        </h3>
        <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {destination.description}
        </p>
        <MagneticButton
          className="bg-white text-neutral-950 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gold-light transition-colors"
          strength={0.2}
        >
          Book Now
        </MagneticButton>
      </div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(201,169,98,0.15)]" />
    </motion.div>
  );
}
