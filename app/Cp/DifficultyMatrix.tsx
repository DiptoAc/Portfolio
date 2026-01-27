"use client";

import { motion } from "framer-motion";

const topics = [
  { name: "Mathematics", levels: [100, 100, 90, 75] },
  { name: "Dynamic Programming", levels: [100, 95, 75, 40] },
  { name: "Graph Theory", levels: [100, 90, 75, 60] },
  { name: "Data Structures", levels: [100, 100, 85, 50] },
  { name: "String Algorithms", levels: [100, 70, 40, 20] },
  { name: "Greedy / Constructive", levels: [100, 95, 85, 70] },
  { name: "Game Theory", levels: [100, 100, 95, 90] },
  { name: "Geometry", levels: [100, 90, 85, 55] }
];

const difficultyLabels = ["800-1200", "1200-1600", "1600-2000", "2000+"];

const getMasteryStyles = (value: number) => {
  if (value > 80) return {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/40",
    text: "text-emerald-400",
    shadow: "shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    label: "High Mastery"
  };
  if (value > 50) return {
    bg: "bg-amber-500/10",
    border: "border-amber-500/40",
    text: "text-amber-400",
    shadow: "shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    label: "Comfortable"
  };
  return {
    bg: "bg-rose-500/10",
    border: "border-rose-500/40",
    text: "text-rose-400",
    shadow: "shadow-[0_0_15px_rgba(244,63,94,0.1)]",
    label: "Growth Area"
  };
};

export default function DifficultyMatrix() {
  return (
    <section className="py-20 w-full relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter"
          >
            PROFICIENCY <span className="text-blue-500 italic">MATRIX</span>
          </motion.h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Real-time mastery assessment based on Codeforces difficulty scales and successful submission rates.
          </p>
        </div>

        <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-spacing-y-4 border-separate">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-black uppercase tracking-[0.2em] text-slate-500">Algorithm</th>
                  {difficultyLabels.map((label) => (
                    <th key={label} className="p-4 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topics.map((topic, rowIndex) => (
                  <tr key={topic.name} className="group">
                    <td className="p-4">
                      <span className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                        {topic.name}
                      </span>
                    </td>
                    {topic.levels.map((value, colIndex) => {
                      const styles = getMasteryStyles(value);
                      return (
                        <td key={colIndex} className="p-2 min-w-[120px]">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (rowIndex * 0.05) + (colIndex * 0.03) }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className={`
                              ${styles.bg} ${styles.border} ${styles.text} ${styles.shadow}
                              border-2 h-16 rounded-2xl flex flex-col items-center justify-center
                              transition-all duration-300 backdrop-blur-sm cursor-default
                            `}
                          >
                            <span className="text-xl font-black">{value}%</span>
                            <span className="text-[10px] uppercase font-bold opacity-60 tracking-tighter">
                              Mastery
                            </span>
                          </motion.div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {["emerald", "amber", "rose"].map((color, i) => {
            const label = i === 0 ? "High Mastery" : i === 1 ? "Comfortable" : "Growth Area";
            const borderColor = i === 0 ? "border-emerald-500/50" : i === 1 ? "border-amber-500/50" : "border-rose-500/50";
            const textColor = i === 0 ? "text-emerald-400" : i === 1 ? "text-amber-400" : "text-rose-400";
            
            return (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-md border-2 ${borderColor} bg-${color}-500/10`} />
                <span className={`text-xs font-black uppercase tracking-widest ${textColor}`}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}