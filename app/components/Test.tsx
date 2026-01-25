"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-600/30"
    >
      <div className="text-3xl sm:text-4xl font-bold text-sky-400 mb-2">{count}+</div>
      <div className="text-slate-200">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-slate-600/30 bg-gradient-to-br from-slate-900/10 via-slate-800/35 to-slate-900/5 p-6 sm:p-8 shadow-2xl hover:shadow-[0_30px_60px_rgba(14,116,144,0.35)] transition-all mb-10 sm:mb-12 backdrop-blur"
          >
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base sm:text-lg text-slate-200 mb-4 sm:mb-6"
            >
              I&apos;m a Computer Science student at <strong className="text-sky-300">Shahjalal University of Science and Technology</strong> (SUST), 
              passionate about building innovative web and mobile applications. I have experience in <strong className="text-sky-300">Full-Stack 
              Development, Mobile Development</strong>, and leadership roles across various technical and community initiatives.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 mb-4 sm:mb-6"
            >
              With expertise in <strong className="text-sky-300">React Native, Kotlin, and modern web technologies</strong>, I&apos;ve built employee 
              management systems, cross-platform mobile applications, and IoT-based solutions. I also have a background in 
              <strong className="text-sky-300"> Digital Services Freelancing</strong>, where I developed skills in SEO, visual design, and client management.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-slate-200"
            >
              As a competitive programmer, I&apos;ve solved <strong className="text-sky-300">1500+ problems</strong> and participated as an 
              <strong className="text-sky-300"> ICPC Regionalist 2025</strong>. When I&apos;m not coding, you&apos;ll find me on the sports field - 
              I&apos;m an active player in football, cricket, and basketball tournaments.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <AnimatedCounter target={1500} label="Problems Solved" />
            <AnimatedCounter target={4} label="Major Projects" />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-600/30"
            >
              <div className="text-3xl sm:text-4xl font-bold text-fuchsia-400 mb-2">ICPC</div>
              <div className="text-slate-200">Regionalist 2025</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
