"use client";

import { useEffect, useRef } from "react";

export default function CursorGradient() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        // Using animate for a smooth trailing effect
        blobRef.current.animate(
          {
            transform: `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`
          },
          {
            duration: 3000,
            fill: "forwards",
            easing: "ease-out"
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div 
        ref={blobRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-500/20 dark:bg-purple-600/15 rounded-full blur-[120px] will-change-transform"
      />
    </div>
  );
}
