"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }) {
  const paths = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}
          C-${380 - i * 5 * position} -${189 + i * 6}
          -${312 - i * 5 * position} ${216 - i * 6}
          ${152 - i * 5 * position} ${343 - i * 6}
          C${616 - i * 5 * position} ${470 - i * 6}
          ${684 - i * 5 * position} ${875 - i * 6}
          ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
      opacity: 0.04 + i * 0.02,   // opacidad suave
      duration: 20 + i * 0.4,
    }));
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="white"                // ← BLANCO
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.2 }}
            animate={{
              pathLength: 1,
              pathOffset: [0, 1, 0],
              opacity: [path.opacity, path.opacity + 0.25, path.opacity],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Viñeta para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />
    </div>
  );
}
