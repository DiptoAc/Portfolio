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
  return (
    <section id="about" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Glows - Matching the senior's layout depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full filter blur-[120px]"></div>
      </div>

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
          {/* Main Card: Glassmorphism Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              
              {/* LEFT SIDE: Image with Gradient Border */}
              <div className="md:w-4/12 w-full">
                <div className="relative aspect-square group">
                  {/* The Gradient Glow from Kiriti Bhai's code */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-slate-900 rounded-2xl p-4 h-full w-full overflow-hidden">
                    <img
                      src="/about_image.jpg"
                      alt="Sudipto Acharjee"
                      className="rounded-xl w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Text Content */}
              <div className="md:w-7/12 space-y-6">
                <div className="space-y-4">
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-300 leading-relaxed"
                  >
                    </motion.p>
                    As an <span className="text-pink-400 font-semibold">ICPC Regionalist 2025 (Rank 13)</span>, I've tackled <span className="text-pink-300 font-semibold">1500+ problems</span>. Currently based in <span className="text-pink-400 font-semibold">Sylhet, Bangladesh</span>, I enjoy collaborating on high-impact projects and leading technical communities.
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-slate-300 leading-relaxed"
                  >
                    I specialize in <span className="text-purple-400 font-semibold">React Native, Next.js, and Python</span>. I love shipping features that combine smooth UI with reliable backend systems, and I'm currently exploring the potential of <span className="text-purple-300 font-semibold">AI/ML workflows</span>.
                  </motion.p>

                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-slate-300 leading-relaxed"
                  >
                    As a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> and CS student at <span className="text-blue-300 font-semibold">SUST</span>, focused on building scalable web applications and solving complex algorithmic challenges.
                    </motion.p>
                </div>

                {/* Badge Tags: Dark Styled */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-medium">Problem Solver</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full text-sm font-medium">ICPC Regionalist</span>
                  <span className="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/20 rounded-full text-sm font-medium">SUST(cse)</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-sm font-medium">Competitive Programmer</span>
                </motion.div>
            
                
              </div>
            </div>
          </motion.div>

          {/* Statistics Counters(3 box in the bottom) */}
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