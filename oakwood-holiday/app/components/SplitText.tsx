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
  duration = 0.8,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".split-word");

    gsap.fromTo(
      words,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
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
          className="split-word inline-block mr-[0.25em]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
