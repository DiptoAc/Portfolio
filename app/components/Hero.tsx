"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, startTransition } from "react";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
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
        // Smooth interpolation (easing factor)
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        
        setMousePosition({ x: currentX, y: currentY });
        
        // Continue animating if we're not close enough
        if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"
    >
      {/* Mouse spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.08) 0%, 
            rgba(139, 92, 246, 0.05) 30%, 
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
      <div className="absolute inset-0 opacity-10">
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
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center text-center">
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
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/profilee.jpg"
                alt="Sudipto Acharjee"
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-gray-900 animate-float"
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
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Sudipto Acharjee
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mb-6"
          >
            <motion.div
              className="text-base sm:text-lg md:text-2xl font-semibold glass-dark px-5 py-2 sm:px-6 sm:py-3 rounded-full inline-block min-h-[3rem] flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'AI Enthusiast',
                      'Competitive Programmer',
                      'Next.js Specialist'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </span>
            </motion.div>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
          >
            Computer Science Student at SUST | Building innovative solutions with React, Next.js, Python & Cloud Technologies
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group relative px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full overflow-hidden shadow-xl font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 glass-dark text-blue-300 rounded-full shadow-xl border border-blue-400/30 hover:border-blue-400/60 transition-all font-semibold backdrop-blur-md"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 sm:gap-6 mt-6 sm:mt-8"
          >
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/DiptoAc"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 glass rounded-full text-slate-200 hover:text-sky-300 transition-all tilt-card"
            >
              <svg className="w-8 h-8 relative z-10" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: -360,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/sudipto-acharjee-036179315/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 glass rounded-full text-slate-200 hover:text-fuchsia-300 transition-all tilt-card"
            >
              <svg className="w-8 h-8 relative z-10" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced Scroll indicator */}
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
    </section>
  );
}
