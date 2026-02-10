"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CpStats from "../../components/sections/Cp/CpStats";
import SkillTree from "../../components/sections/Cp/SkillTree";
import RadarChart from "../../components/sections/Cp/RadarChart";
import DifficultyMatrix from "../../components/sections/Cp/DifficultyMatrix";
import TopicList from "../../components/sections/Cp/TopicList";
import Achievements from "../../components/sections/Cp/Achivements";

const platformLinks = [
  {
    name: "Codeforces",
    handle: "stupido",
    url: "https://codeforces.com/profile/stupido",
    color: "text-blue-400",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
  },
  {
    name: "CodeChef",
    handle: "diptonuntu",
    url: "https://www.codechef.com/users/diptonuntu",
    color: "text-amber-600",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-chef-3628694-3029919.png",
  },
  {
    name: "LeetCode",
    handle: "Stupido",
    url: "https://leetcode.com/u/Stupido/",
    color: "text-yellow-500",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
  },
  {
    name: "HackerRank",
    handle: "diptonuntu",
    url: "https://www.hackerrank.com/profile/diptonuntu",
    color: "text-green-500",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628859-3030034.png",
  },
  {
    name: "VJudge",
    handle: "2020331064",
    url: "https://vjudge.net/user/2020331064",
    color: "text-slate-400",
    icon: "https://vjudge.net/static/favicon.ico",
  },
];

const icpcEvents = [
  {
    year: "2025",
    title: "ICPC Dhaka Regional by BUBT",
    rank: "14th Place (National)",
    image: "/icpc_2025.jpeg", // Ensure these are in your /public folder
  },
  {
    year: "2024",
    title: "ICPC Asia Dhaka Regional",
    rank: "37th Place (Prili)",
    image: "/icpc_2024.jpg",
  },
];

export default function CpPage() {
  return (
    
    <main className="min-h-screen bg-[#0172a] text-slate-100 py-12 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main Light Source: Increased opacity (#3b82f630) and spread (70%) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#3b82f630,transparent_70%)]" />
        
        {/* Secondary Accent: Added a fuchsia tint to break the blue monotony */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#a855f720,transparent_50%)]" />
        
        {/* Ambient Floor: Subtle teal glow for the bottom left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,#14b8a615,transparent_50%)]" />
      </div>

      <div className="max-w-[70%] mx-auto relative z-10">
        {/* Header */}
        <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors mb-8 inline-block group">
          <span className="inline-block transform group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
        </Link>
        

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Competitive Programming
        </motion.h1>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          Turning logic into code, one contest at a time. Solving algorithmic puzzles across major platforms.
        </p>
        <CpStats />

        <h2 className="text-4xl md:text-5xl font-black mb-12 flex flex-col md:flex-row items-center justify-center gap-3 tracking-tighter uppercase italic">
          <span className="text-white">Online</span>
          <span className="text-blue-500 italic">Judges</span>
        </h2>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {platformLinks.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl flex items-center gap-4 hover:border-white/20 transition-all"
            >
              <img src={platform.icon} alt={platform.name} className="w-10 h-10 rounded-lg" />
              <div>
                <h3 className="font-bold text-lg">{platform.name}</h3>
                <p className={`text-sm ${platform.color}`}>@{platform.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ICPC Section */}
        
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-12 flex flex-col md:flex-row items-center justify-center gap-3 tracking-tighter uppercase italic">
            <div className="flex items-center gap-4">
              <span className="text-white">ICPC</span>
              <span className="text-blue-500 italic">REGIONALS</span>
            </div>
            <motion.span 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]"
            >
              🏆
            </motion.span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {icpcEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, scale: .9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/5"
              >
                <div className="aspect-video relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold border border-sky-500/30 mb-3 inline-block">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-purple-400 font-medium">{event.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        

        
        <Achievements />
        <DifficultyMatrix />
        <RadarChart />
        <TopicList />
        {/*<SkillTree />*/} 

        {/* Footer Note */}
        <div className="mt-20 flex flex-col items-center gap-6 py-12 border-t border-white/10">
          {/* The Centered Back Button */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 px-8 py-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-full text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
          >
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform font-bold">
              ←
            </span>
            <span className="text-sm font-black uppercase tracking-widest">
              Back to Portfolio
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}