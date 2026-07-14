"use client";

import { ReactNode } from "react";
import { useLenis } from "@/app/hooks/useLenis";
import { useCursorGlow } from "@/app/hooks/useCursorGlow";

export function ClientWrapper({ children }: { children: ReactNode }) {
  useLenis();
  const { position, isVisible } = useCursorGlow(true);

  return (
    <>
      {children}
      <div
        className="fixed top-0 left-0 w-[220px] h-[220px] rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,98,0.08) 0%, transparent 65%)",
          transform: `translate(${position.x - 110}px, ${position.y - 110}px)`,
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
