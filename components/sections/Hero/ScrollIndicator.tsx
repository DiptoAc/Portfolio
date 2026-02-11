"use client";

import { motion, MotionValue } from "framer-motion";

interface ScrollIndicatorProps {
  opacity: MotionValue<number>;
}

export const ScrollIndicator = ({ opacity }: ScrollIndicatorProps) => {
  return (
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      style={{ opacity }}
    >
      <motion.div 
        className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden glass-dark"
        whileHover={{ scale: 1.1, borderColor: "rgba(139, 92, 246, 1)" }}
      >
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
        />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-blue-300 text-xs mt-2 text-center font-medium"
      >
        Scroll
      </motion.p>
    </motion.div>
  );
};



/**
 * COMPONENT: ScrollIndicator
 * PURPOSE: A visual cue (mouse-shaped icon) that encourages the user to scroll down.
 * * USED IN: 
 * - Hero.tsx (Main landing section)
 * 
 * * FEATURES:
 * - Dynamic Opacity: Connected to the parent's scroll progress (scrollY) via MotionValue.
 * - Looping Animations: Vertical bobbing effect and a moving "scroll wheel" to catch the eye.
 * - Interactive Hover: Changes border color and scales up slightly when hovered.
 * - Glassmorphism: Uses 'glass-dark' for a high-end, semi-transparent tech look.
 * 
 * * PROPS:
 * - opacity: A Framer Motion 'MotionValue' that allows the component to fade out as the user scrolls.
 * * HOW TO EXTEND/ADJUST:
 * - To change movement speed: Adjust 'duration' in the transition objects (currently 2s).
 * - To change movement distance: Modify the 'y' arrays (currently [0, 15, 0] and [0, 16, 0]).
 * - To change colors: Update the 'border-blue-400' and 'bg-gradient-to-b' Tailwind classes.
 */