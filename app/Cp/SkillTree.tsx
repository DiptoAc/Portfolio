"use client";

import { motion } from "framer-motion";

interface SkillNode {
  category: string;
  topics: { name: string; level: number }[];
  icon: string;
  color: string;
  glow: string;
}

const skills: SkillNode[] = [
  {
    category: "Basics & Math",
    icon: "🔢",
    color: "from-blue-400 to-cyan-400",
    glow: "shadow-blue-500/20",
    topics: [
      { name: "Number Theory (Sieve, GCD, Modulo)", level: 90 },
      { name: "Combinatorics & Probability", level: 75 },
      { name: "Bit Manipulation", level: 85 },
    ],
  },
  {
    category: "Data Structures",
    icon: "🌲",
    color: "from-emerald-400 to-teal-400",
    glow: "shadow-emerald-500/20",
    topics: [
      { name: "Segment Tree & Fenwick Tree", level: 80 },
      { name: "Disjoint Set Union (DSU)", level: 95 },
      { name: "Sparse Table & LCA", level: 70 },
    ],
  },
  {
    category: "Dynamic Programming",
    icon: "🧠",
    color: "from-fuchsia-400 to-purple-400",
    glow: "shadow-fuchsia-500/20",
    topics: [
      { name: "Classical DP (LCS, LIS, Knapsack)", level: 95 },
      { name: "Digit DP & DP on Trees", level: 65 },
      { name: "Bitmask DP", level: 70 },
    ],
  },
  {
    category: "Graph Theory",
    icon: "🕸️",
    color: "from-orange-400 to-red-400",
    glow: "shadow-orange-500/20",
    topics: [
      { name: "Shortest Paths (Dijkstra, BFS/DFS)", level: 90 },
      { name: "Flows & Matching", level: 50 },
      { name: "SCC & Bridge Finding", level: 75 },
    ],
  },
];

export default function SkillTree() {
  return (
    <section className="py-20 relative w-full overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-24 text-center text-white tracking-tight">
        Algorithm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mastery Tree</span>
      </h2>

      {/* Increased max-width to 7xl to spread content further */}
      <div className="max-w-8xl mx-auto relative px-6 md:px-12">
        
        {/* Colorful Animated Trunk */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-fuchsia-500 to-orange-500 transform md:-translate-x-1/2 rounded-full opacity-30" />

        <div className="space-y-32"> {/* Increased vertical spacing between nodes */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start md:items-center w-full`}
            >
              {/* Glowing Node Icon */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`absolute left-4 md:left-1/2 w-14 h-14 bg-slate-900 border-2 rounded-2xl flex items-center justify-center z-20 transform md:-translate-x-1/2 shadow-lg border-white/20`}
                style={{ boxShadow: `0 0 30px rgba(255, 255, 255, 0.15)` }}
              >
                <span className="text-3xl">{skill.icon}</span>
              </motion.div>

              {/* Content Card - Increased width to md:w-[46%] to push closer to edges */}
              <div className={`ml-16 md:ml-0 w-full md:w-[46%] ${
                index % 2 === 0 ? "md:text-right md:pr-20" : "md:text-left md:pl-20"
              }`}>
                <div className={`bg-white/10 border border-white/20 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl transition-all hover:bg-white/15 ${skill.glow} shadow-2xl`}>
                  <h3 className={`text-3xl font-black mb-8 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.category}
                  </h3>
                  
                  <div className="space-y-8">
                    {skill.topics.map((topic, topicIdx) => (
                      <div key={`${skill.category}-${topicIdx}`}>
                        <div className={`flex justify-between text-base font-bold mb-3 text-white`}>
                          <span>{topic.name}</span>
                          <span className="font-mono opacity-80">{topic.level}%</span>
                        </div>
                        <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden p-[2px]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${topic.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}