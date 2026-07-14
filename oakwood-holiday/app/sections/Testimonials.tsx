"use client";

import { useRef, useEffect, useState } from "react";

import { Reveal } from "@/app/components/Reveal";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { TESTIMONIALS } from "@/app/lib/constants";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = scrollContainer.scrollLeft;
    const speed = 0.5;

    const animate = () => {
      if (!scrollContainer) return;
      scrollPos += speed;

      if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPos = 0;
      }

      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-24 md:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl">
            Loved by Discerning Travelers
          </h2>
        </Reveal>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-4"
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
