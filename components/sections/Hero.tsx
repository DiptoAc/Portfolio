"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { ProfileVisual } from "../effects/ProfileVisual";
import { HeroBackground } from "../effects/HeroBackground";
import { HeroCTA } from "./Hero/HeroCTA";
import { SocialLinks } from "./Hero/SocialLinks";
import { ScrollIndicator } from "./Hero/ScrollIndicator";
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from "react";

export default function Hero() {
  
  const [isMounted, setIsMounted] = useState(false);
  const { mousePosition, particles } = useHeroAnimation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  
  useEffect(() => {
    setIsMounted(true); // Set to true once mounted in browser
  }, []);
  if (!isMounted) return <section className="min-h-screen bg-slate-950" />;

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900">
      <HeroBackground mousePosition={mousePosition} particles={particles} />
      
      {/* Add flex flex-col items-center here */}
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center" 
        style={{ opacity }}
      >
        <ProfileVisual /> 

        {/* Title & Name */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          <motion.span 
            whileHover={{ filter: "hue-rotate(90deg)", scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent cursor-default"
            // className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent cursor-default"
            //className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent cursor-default"
            //className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent cursor-default"
            //className="bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 bg-clip-text text-transparent cursor-default"
            //className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-default"
            //className="bg-gradient-to-r from-[#3bba9c] via-[#73605B] to-[#D09683] bg-clip-text text-transparent cursor-default"
          >
            Sudipto Acharjee
          </motion.span>
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
                      'Mathematics Enthusiast',
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
            Computer Science Student at SUST | Compititive Programmer | Building innovative solutions with React, Next.js, Python & Cloud Technologies
          </motion.p>

        <HeroCTA />
        <SocialLinks />
      </motion.div>

      <ScrollIndicator opacity={opacity} />
    </section>
  );
}