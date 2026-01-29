"use client";

import { motion } from "framer-motion";

const data = [
  { subject: "Math", value: 95, fullMark: 100 },
  { subject: "DP", value: 80, fullMark: 100 },
  { subject: "Graphs", value: 85, fullMark: 100 },
  { subject: "Data Struct", value: 80, fullMark: 100 },
  { subject: "Strings", value: 60, fullMark: 100 },
  { subject: "Greedy", value: 95, fullMark: 100 },
];

const RADIUS = 150;
const CENTER = 200;
const ANGLE_STEP = (Math.PI * 2) / data.length;

export default function RadarChart() {
  // Generate points for the shape
  const points = data.map((d, i) => {
    const r = (d.value / d.fullMark) * RADIUS;
    const x = CENTER + r * Math.sin(i * ANGLE_STEP);
    const y = CENTER - r * Math.cos(i * ANGLE_STEP);
    return `${x},${y}`;
  }).join(" ");

  return (
    <section className="py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-4xl font-black mb-12 flex flex-col md:flex-row items-center justify-center gap-3 tracking-tighter uppercase italic">
        <span className="text-white">Competitive</span>
        <span className="text-blue-500 italic">Profile</span>
      </h2>
      
      <div className="relative w-full max-w-[500px] aspect-square">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          {/* Background Hexagons */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((tick) => (
            <polygon
              key={tick}
              points={data.map((_, i) => {
                const r = RADIUS * tick;
                const x = CENTER + r * Math.sin(i * ANGLE_STEP);
                const y = CENTER - r * Math.cos(i * ANGLE_STEP);
                return `${x},${y}`;
              }).join(" ")}
              className="fill-none stroke-white/10 stroke-1"
            />
          ))}

          {/* Axis Lines */}
          {data.map((_, i) => {
            const x = CENTER + RADIUS * Math.sin(i * ANGLE_STEP);
            const y = CENTER - RADIUS * Math.cos(i * ANGLE_STEP);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                className="stroke-white/10 stroke-1"
              />
            );
          })}

          {/* Labels */}
          {data.map((d, i) => {
            const x = CENTER + (RADIUS + 30) * Math.sin(i * ANGLE_STEP);
            const y = CENTER - (RADIUS + 30) * Math.cos(i * ANGLE_STEP);
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                className="fill-slate-400 text-[12px] font-bold uppercase tracking-widest"
              >
                {d.subject}
              </text>
            );
          })}

          {/* The Data Shape */}
          <motion.polygon
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            points={points}
            className="fill-blue-500/30 stroke-blue-400 stroke-2"
          />
          
          {/* Data Points (Dots) */}
          {data.map((d, i) => {
            const r = (d.value / d.fullMark) * RADIUS;
            const x = CENTER + r * Math.sin(i * ANGLE_STEP);
            const y = CENTER - r * Math.cos(i * ANGLE_STEP);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                className="fill-blue-400 shadow-xl"
              />
            );
          })}
        </svg>

        {/* Legend/Hint */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-blue-500/10 border border-blue-500/20 px-4 py-1 rounded-full text-[10px] text-blue-300 uppercase tracking-[0.2em]">
          Proficiency Distribution
        </div>
      </div>
    </section>
  );
}