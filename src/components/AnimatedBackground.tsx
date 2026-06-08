"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 80;

// Explicitly selected solid tech colors, completely avoiding pinks/purples
const PARTICLE_COLORS = [
  "bg-cyan-500",
  "bg-blue-500",
  "bg-teal-400",
  "bg-emerald-500",
  "bg-slate-300",
  "bg-indigo-500",
  "bg-sky-400",
  "bg-white"
];

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles on the client to avoid SSR hydration mismatch
    const generatedParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const size = Math.random() * 10 + 4; // Small particles between 4px and 14px
      const left = Math.random() * 100; // Random horizontal position 0-100%
      const duration = Math.random() * 20 + 15; // Animation duration 15s-35s
      const delay = Math.random() * 20; // Start delay 0s-20s
      const colorClass = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const wobbleWidth = Math.random() * 40 + 10; // Sway distance
      
      return { id: i, size, left, duration, delay, colorClass, wobbleWidth };
    });
    
    setParticles(generatedParticles);
  }, []);

  return (
    // We add bg-base-100 here to ensure the background is completely solid
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-base-100" aria-hidden="true">
      
      {/* Render all the small solid particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full shadow-sm ${particle.colorClass}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: 0, 
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: ["110vh", "-10vh"], // Move upwards from below the screen to above it
            x: [0, particle.wobbleWidth, -particle.wobbleWidth, 0], // Gentle side-to-side sway
            opacity: [0, 1, 1, 0] // Fade in, remain solid, fade out at the very top
          }}
          transition={{
            y: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            },
            x: {
              duration: particle.duration / 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            },
            opacity: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }
          }}
        />
      ))}
    </div>
  );
}
