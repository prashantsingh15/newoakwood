"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_VIDEOS } from "@/app/lib/constants";
import { SplitText } from "@/app/components/SplitText";
import { GlassSearchCard } from "@/app/components/GlassSearchCard";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 8 : Math.min(24, Math.floor(window.innerWidth / 60));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: Math.random() * -0.3 - 0.1,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.y += p.speedY;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[3] pointer-events-none will-change-transform"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[110svh] md:min-h-screen w-full overflow-hidden flex flex-col md:items-center md:justify-center">
      {/* Video backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {HERO_VIDEOS.map((video, index) =>
            index === activeIndex ? (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={video.fallbackImage}
                  className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
                  preload="metadata"
                  aria-label={`${video.label} travel scene`}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 z-[2] cloud-overlay" />

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-[4] flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-8 md:pb-44 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
          >
            Luxury Travel Membership
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] mb-6 md:mb-8">
            <SplitText
              text="Discover Extraordinary Journeys Across The World"
              delay={0.5}
              stagger={0.05}
              duration={1}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-white/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Explore handpicked destinations, premium stays, exclusive member
            benefits, and unforgettable travel experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center justify-center gap-3"
          >
            {HERO_VIDEOS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-10 bg-gold"
                    : "w-4 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Show ${HERO_VIDEOS[index].label} scene`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Search card — in flow on mobile, absolute on desktop */}
      <div className="relative md:absolute bottom-0 md:bottom-8 lg:bottom-12 left-0 right-0 z-[5] px-4 sm:px-6 lg:px-8 pb-8 md:pb-0">
        <GlassSearchCard />
      </div>
    </section>
  );
}
