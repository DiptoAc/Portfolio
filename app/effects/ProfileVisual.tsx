"use client";

import { motion } from "framer-motion";

export const ProfileVisual = () => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="mb-8 relative group"
    >
      {/* Multiple rotating glowing rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-10px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"
      />
      <motion.div 
        animate={{ rotate: 180, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"
      />
      
      {/* Profile picture with static border */}
      <div className="relative z-20 p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
        <motion.img 
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          src="/profilee.jpg"
          alt="Sudipto Acharjee"
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-gray-900 animate-float z-30"
        />
      </div>
      
      {/* Orbiting particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-400 rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI) / 2) * 200, 0],
            y: [0, Math.sin((i * Math.PI) / 2) * 200, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        />
      ))}
    </motion.div>
  );
};


/**
 * Used In Hero.tsx
 * 
 * 
 * ProfileVisual Component
 * -----------------------
 * 1. Framer Motion Wrapper: Handles the initial spring-loaded entry of the profile section.
 * 2. Multi-Layer Glow: Three overlapping radial gradients with different rotation 
 * speeds and directions (linear and ease-in-out) to create a dynamic "nebula" effect.
 * 3. Profile Image: Centered, high-z-index image with a floating CSS animation 
 * and a custom spring-based hover tilt.
 * 4. Orbital System: Maps a 4-unit array to calculate circular trajectories 
 * using sine and cosine, creating synchronized particle orbits.
 */
