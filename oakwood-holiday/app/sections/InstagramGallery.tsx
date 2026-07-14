"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Reveal } from "@/app/components/Reveal";
import { Lightbox } from "@/app/components/Lightbox";
import { GALLERY_IMAGES } from "@/app/lib/constants";

export function InstagramGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
    );

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );

  return (
    <section className="py-24 md:py-36 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Instagram
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto mb-6">
            Moments From Around the Globe
          </h2>
          <a
            href="https://instagram.com/oakwoodholiday"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm"
          >
            <Camera className="w-4 h-4" />
            @oakwoodholiday
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                image.span || ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
