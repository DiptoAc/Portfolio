"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const HeroCTA = () => {
  const router = useRouter();

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-wrap gap-4 justify-center"
    >
      {/* Primary Button: CP Journey */}
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)" 
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/Cp')}
        className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full overflow-hidden shadow-xl font-semibold transition-all"
      >
        <span className="relative z-10 flex items-center gap-2">
          View My CP Journey
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </span>
        
        {/* Background slide effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Secondary Button: Contact */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="px-6 py-3 md:px-8 md:py-4 glass-dark text-blue-300 rounded-full shadow-xl border border-blue-400/30 hover:border-blue-400/60 transition-all font-semibold backdrop-blur-md"
      >
        Get in Touch
      </motion.a>
    </motion.div>
  );
};