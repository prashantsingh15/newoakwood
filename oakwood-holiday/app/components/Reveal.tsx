"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
