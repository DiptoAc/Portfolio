"use client";

import { motion } from "framer-motion";

export default function CpStats() {
  return (
    <section className="mb-20">

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Card 1: Codeforces Expert */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-8 rounded-2xl bg-[#0a0f1a] border border-blue-900/40 flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-blue-500 text-xl font-bold">Codeforces</h3>
            <span className="text-blue-500/50 text-xl">&lt;&gt;</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              Expert <span className="text-sm font-normal text-slate-400 ml-2">Max Rating: <span className="text-blue-500">1640</span></span>
            </p>
          </div>
        </motion.div>

        {/* Card 2: Leetcode */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-8 rounded-2xl bg-[#0f0d0a] border border-yellow-700/30 flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-yellow-600 text-xl font-bold">Leetcode</h3>
            <span className="text-yellow-600/50 text-xl">&lt;&gt;</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              200+ solve 
            </p>
          </div>
        </motion.div>

        {/* Card 3: Problems Solved */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
        >
          <div className="text-purple-500 text-4xl mb-4">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" strokeDasharray="4 4"/>
              <circle cx="12" cy="12" r="6" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-4xl font-bold text-white mb-2">More than 2000</p>
          <p className="text-slate-400 font-medium">Problems Solved</p>
        </motion.div>

        {/* Card 4: IUPC Participation */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
        >
          <div className="text-purple-500 text-4xl mb-4">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6m0 0H8m4 0h4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v10a1 1 0 001 1h16a1 1 0 001-1V10M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </div>
          <p className="text-4xl font-bold text-white mb-2">Participated in 10+</p>
          <p className="text-slate-400 font-medium">IUPC / Regional</p>
        </motion.div>

      </div>
    </section>
  );
}