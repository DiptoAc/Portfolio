"use client";

import { motion } from "framer-motion";

interface Achievement {
  rank: string;
  event: string;
  link?: string;
  year: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  { rank: "TBA", year: "2026", event: "ICPC Asia West Continent Final", highlight: true },
  { rank: "13th", year: "2025", event: "ICPC Asia Dhaka Regional Contest", link: "https://icpc.global/regionals/finder/Dhaka-2026/standings", highlight: true },
  { rank: "20th", year: "2025", event: "ICPC Preliminary Dhaka Site", link: "https://icpc.bubt.edu.bd/standing.php", highlight: true },
  { rank: "18th", year: "2025", event: "Metropoliton University IUPC", link: "https://toph.co/c/inter-university-mu-cse-fest-2025/standings" },
  { rank: "37th", year: "2024", event: "ICPC Preliminary Dhaka Site", link: "https://bapsoj.org/contests/icpc-preliminary-dhaka-site-2024/standings" },
  { rank: "26th", year: "2025", event: "Miaki Presents KUET IUPC onsite", link: "https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings" },
  { rank: "31st", year: "2025", event: "UIU Inter-University Programming Contest", link: "https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025" },
  { rank: "29th", year: "2025", event: "Uttara University Inter-University Programming Contest 2025", link: "https://toph.co/c/uttara-university-inter-university-2025/standings" },
  { rank: "46th", year: "2025", event: "MTB Presents AUST Inter University Programming Contest 2025", link: "https://toph.co/c/mtb-presents-aust-inter-university-2025/standings" },
  { rank: "30th", year: "2024", event: "Inter University Programming Contest - SUST CSE Carnival", link: "https://toph.co/c/inter-university-sust-cse-carnival-2024/standings" },
  { rank: "77th", year: "2024", event: "ICPC Dhaka Regional Site (hosted by DIU)", link: "https://icpc.global/regionals/finder/Dhaka-2025/standings" },
  { rank: "11th", year: "2023", event: "IIUC Inter University Programming Contest 2023", link: "https://toph.co/c/15th-iiuc-inter-university-2023/standings" },
  { rank: "4th", year: "2024", event: "ShellBeeHaken Presents Intra SUST Programming Contest" },
  { rank: "14th", year: "2023", event: "BrainCraft Intra SUST Programming Contest" },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              Competitive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Milestones
              </span>
            </h2>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-[2px] w-12 bg-indigo-500" />
              <p className="text-slate-400 font-mono text-sm uppercase tracking-[0.3em]">leaderboard_data</p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ x: 10, scale: 1.01 }}
              className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border transition-all ${
                item.highlight 
                ? "bg-white/5 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="relative">
                  <span className={`text-3xl font-black italic ${item.highlight ? "text-indigo-400" : "text-slate-600"} transition-colors`}>
                    {item.rank}
                  </span>
                  {item.highlight && (
                    <div className="absolute inset-0 blur-lg bg-indigo-500/20" />
                  )}
                </div>
                <div>
                  <h4 className="text-slate-100 font-bold text-lg leading-tight group-hover:text-white">
                    {item.event}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase tracking-tighter">
                      Season {item.year}
                    </span>
                    {item.highlight && <span className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />}
                  </div>
                </div>
              </div>
              
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-0 px-5 py-2 rounded-xl bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all border border-slate-700 hover:border-indigo-400"
                >
                  View Standings
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Special Contributions - Neon Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 relative group"
          >
            <div className="absolute top-6 right-10 text-indigo-500/10 text-6xl font-black">SET</div>
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">Authored Content</p>
            <h3 className="text-3xl font-bold text-white mb-2">"Monkey's Dilemma"</h3>
            <p className="text-slate-400 leading-relaxed">Accepted & featured in <span className="text-indigo-300 font-bold">NHSPC 2025</span></p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/20 relative"
          >
            <div className="absolute top-6 right-10 text-emerald-500/10 text-6xl font-black">SOLVE</div>
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Total Grit</p>
            <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">2000+</h3>
            <p className="text-slate-400 leading-relaxed">Problems solved across <span className="text-emerald-300 font-bold">Codeforces & Vjudge</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}