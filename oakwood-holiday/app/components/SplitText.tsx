"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  duration = 0.7,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".split-word");

    gsap.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power2.out",
      }
    );
  }, [delay, duration, stagger]);

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word inline-block mr-[0.25em] will-change-transform"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
