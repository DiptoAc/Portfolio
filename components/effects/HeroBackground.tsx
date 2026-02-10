"use client";

import { motion } from "framer-motion";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
  particles: Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>;
}

export const HeroBackground = ({ mousePosition, particles }: HeroBackgroundProps) => {
  return (
    <>
      {/* Mouse spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.30) 0%, 
            rgba(139, 92, 246, 0.2) 30%, 
            transparent 70%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(148, 163, 184, 0.6) 0%, rgba(148, 163, 184, 0.2) 50%, transparent 100%)`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(148, 163, 184, 0.3)`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(particle.id) * 30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated background blobs with enhanced effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob-rotate animation-delay-6000"
        />
      </div>
    </>
  );
};





/**
 *Used In Hero.tsx 

 * HeroBackground Component
 * -----------------------
 * 1. Mouse Spotlight: A fixed-position radial gradient that tracks 'mousePosition' 
 * with a 300ms transition for a smooth "flashlight" discovery effect.
 * 2. Particle System: Maps the 'particles' state into animated motion.divs with 
 * independent horizontal/vertical physics and randomized opacity/scaling.
 * 3. Reactive Grid: A subtle repeating radial-gradient pattern that provides 
 * architectural scale to the background layer.
 * 4. Ambient Blobs: Large-scale Blur-3XL elements with mix-blend-multiply and 
 * complex keyframe animations (scaling/translating/rotating) to create 
 * depth and visual interest without blocking UI interaction via -z-10.
 */