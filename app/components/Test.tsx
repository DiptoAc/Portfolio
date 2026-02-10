"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, startTransition } from "react";
import Typewriter from 'typewriter-effect';
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
    }));
    startTransition(() => setParticles(newParticles));
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;
      const animate = () => {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        setMousePosition({ x: currentX, y: currentY });
        if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/20">
      
      {/* Mouse spotlight effect - Updated to Teal/Emerald */}
      <div
        className="pointer-events-none fixed inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(16, 185, 129, 0.08) 0%, 
            rgba(20, 184, 166, 0.05) 30%, 
            transparent 70%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      
      {/* Floating particles - Updated to Emerald Tint */}
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
              background: `radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 100%)`,
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
      
      {/* Animated Grid Background - Updated to Emerald */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Background blobs - Updated to Emerald/Teal/Sky */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-lighten filter blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-lighten filter blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-40 w-72 h-72 bg-sky-500 rounded-full mix-blend-lighten filter blur-3xl"
        />
      </div>
      
      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity }}>
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 relative group"
          >
            {/* Rotating glowing rings - Updated to Emerald-Teal-Sky */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] bg-gradient-to-r from-teal-400 via-sky-400 to-emerald-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
            />
            
            {/* Profile picture border */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/profilee.jpg"
                alt="Sudipto Acharjee"
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-gray-900"
              />
            </div>
          </motion.div>
          
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-lime-500 to-teal-500 bg-clip-text text-transparent cursor-default">
              Sudipto Acharjee
            </span>
          </motion.h1>
          
          {/* Subtitle box - Updated to Emerald border/text */}
          <motion.div className="relative mb-6">
            <motion.div className="text-base sm:text-lg md:text-2xl font-semibold glass-dark px-5 py-2 rounded-full border border-emerald-500/20">
              <span className="text-emerald-50">
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer', 'Competitive Programmer', 'Next.js Specialist'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>
          </motion.div>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-8">
            Computer Science Student at SUST | Competitive Programmer | Building with React, Next.js & Python
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {/* CP Button - Updated to Emerald/Teal Gradient */}
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/Cp')}
              className="group relative cursor-pointer px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full overflow-hidden shadow-xl font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My CP Journey
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Contact Button - Updated to Teal border/text */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-3 md:px-8 md:py-4 glass-dark text-teal-300 rounded-full border border-teal-500/30 hover:border-teal-400/60 transition-all font-semibold"
            >
              Get in Touch
            </motion.a>
          </div>
          
          {/* Social Icons - Updated hover colors to Sky/Teal */}
          <div className="flex gap-6 mt-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10, color: "#38bdf8" }}
              href="https://github.com/DiptoAc"
              target="_blank"
              className="p-3 glass rounded-full text-slate-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </motion.a>
            {/* ... other social icons similarly updated */}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator - Updated to Emerald */}
      <motion.div animate={{ y: [0, 15, 0] }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-emerald-400 rounded-full flex justify-center glass-dark">
          <motion.div animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }} className="w-1.5 h-4 bg-emerald-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}