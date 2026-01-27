"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectDetails = {
  title: "Traffic Violation Detection System",
  subtitle: "Microprocessor & IoT Engineering Case Study",
  fullDescription: "A sophisticated microprocessor-driven solution designed to automate traffic enforcement. By integrating ultrasonic precision with real-time visual capture, the system identifies vehicles breaching traffic signals and instantly logs evidence via cloud communication.",
  tech: [
    { name: "Arduino UNO", role: "Main Controller", icon: "📟" },
    { name: "ESP32-CAM", role: "Vision & Wi-Fi", icon: "📷" },
    { name: "HC-SR04", role: "Detection", icon: "📡" },
    { name: "Telegram API", role: "Reporting", icon: "📲" },
    { name: "C++", role: "Firmware", icon: "💻" }
  ],
  highlights: [
    { title: "95%+ Accuracy", desc: "Advanced calibration of HC-SR04 sensors to ignore non-vehicular movement." },
    { title: "Evidence Capture", desc: "Automated trigger system for ESP32-CAM to capture violation frames in <200ms." },
    { title: "Smart Logic", desc: "Dynamic traffic light sequencing based on real-time lane occupancy." },
    { title: "Bot Integration", desc: "Secured web-hook communication with Telegram for instant law enforcement alerts." }
  ],
  images: [
    { src: "/Micro1.jpg", alt: "Hardware Setup", title: "Prototype Layout" },
    { src: "/Micro2.jpg", alt: "Circuit Diagram", title: "System Schema" },
    { src: "/Micro3.jpg", alt: "Telegram Alert", title: "The Team" },
  ]
};

export default function MicroprocessorPage() {
  return (
    <main className="min-h-screen bg-slate-400 text-slate-900 py-16 px-6 relative">
      {/* Structural Accents (Replacing Glows with crisp Lines/Dots) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation - Clean & Bold */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-all mb-16 font-bold text-sm tracking-wide group">
          <span className="bg-indigo-50 p-2 rounded-lg group-hover:bg-indigo-100 transition-colors">←</span>
          BACK TO PORTFOLIO
        </Link>

        {/* Header - High Contrast */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-tighter rounded-md">IoT Project</span>
              <span className="w-12 h-[2px] bg-slate-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
              {projectDetails.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              {projectDetails.fullDescription}
            </p>
          </motion.div>
        </header>

        {/* System Components - Solid Cards with Soft Shadows */}
        <section className="mb-32">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-10 border-l-4 border-indigo-500 pl-4">Hardware Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectDetails.tech.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-slate-900 font-bold text-base leading-tight">{item.name}</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase mt-1 tracking-wider">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Highlights - High Visibility Grid */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Project Capabilities</h2>
            <p className="text-slate-400 text-lg mb-8">
              Engineered to operate in high-density urban environments where manual monitoring is inefficient.
            </p>
            <div className="space-y-4">
               {['Low latency', 'Fault tolerance', 'Encrypted logs'].map((tag) => (
                 <div key={tag} className="flex items-center gap-2 text-emerald-400 font-mono text-sm uppercase">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" /> {tag}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {projectDetails.highlights.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-indigo-500 p-8 rounded-tr-3xl rounded-br-3xl shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery - Modern Clean Cards */}
        <section className="mb-32">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-10 border-l-4 border-indigo-500 pl-4">Visualization</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectDetails.images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-crosshair"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 border-4 border-white shadow-xl mb-6">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all" 
                  />
                </div>
                <h4 className="text-slate-900 font-black uppercase text-sm tracking-widest text-center">{img.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Action Footer */}
        <footer className="bg-cyan-600 rounded-[3rem] p-12 text-center shadow-2xl shadow-indigo-200">
          <h2 className="text-3xl font-bold text-white mb-8">Want to see the logic?</h2>
          <a 
            href="https://github.com/rayhanulamint2/Traffic-Violation-Detection-System" 
            target="_blank"
            className="inline-block px-12 py-4 bg-white text-indigo-600 rounded-full font-black hover:bg-slate-100 transition-all uppercase tracking-widest text-sm"
          >
            Review Code on GitHub
          </a>
        </footer>
      </div>
    </main>
  );
}