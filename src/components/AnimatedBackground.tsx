"use client";

import React from "react";
import { motion } from "framer-motion";

const blobs = [
  {
    className: "top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/20",
    animate: { x: [0, 80, 40, 0], y: [0, 60, 120, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 22,
  },
  {
    className: "top-[20%] right-[-8%] w-[450px] h-[450px] bg-secondary/15",
    animate: { x: [0, -60, -30, 0], y: [0, 80, 40, 0], scale: [1, 0.9, 1.05, 1] },
    duration: 26,
  },
  {
    className: "bottom-[10%] left-[20%] w-[400px] h-[400px] bg-accent/15",
    animate: { x: [0, 50, -40, 0], y: [0, -70, 30, 0], scale: [1, 1.08, 0.92, 1] },
    duration: 20,
  },
  {
    className: "bottom-[-5%] right-[15%] w-[350px] h-[350px] bg-primary/10",
    animate: { x: [0, -50, 60, 0], y: [0, -40, -80, 0], scale: [1, 0.95, 1.1, 1] },
    duration: 24,
  },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated gradient blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-base-100)_75%)] opacity-80" />

      {/* Floating light streak */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
