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
      className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}+</div>
      <div className="text-gray-700">{label}</div>
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all mb-12"
          >
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6"
            >
              I'm a Computer Science student at <strong>Shahjalal University of Science and Technology</strong> (SUST), 
              passionate about building innovative web and mobile applications. I have experience in <strong>Full-Stack 
              Development, Mobile Development</strong>, and leadership roles across various technical and community initiatives.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 mb-6"
            >
              With expertise in <strong>React Native, Kotlin, and modern web technologies</strong>, I've built employee 
              management systems, cross-platform mobile applications, and IoT-based solutions. I also have a background in 
              <strong> Digital Services Freelancing</strong>, where I developed skills in SEO, visual design, and client management.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700"
            >
              As a competitive programmer, I've solved <strong>1500+ problems</strong> and participated as an 
              <strong> ICPC Regionalist 2025</strong>. When I'm not coding, you'll find me on the sports field - 
              I'm an active player in football, cricket, and basketball tournaments.
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
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">ICPC</div>
              <div className="text-gray-700">Regionalist 2025</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
