"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;   // Link to the full certificate
  badge: string;  // Path to the square badge image
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      name: "ICPC Regional Participation Certificate",
      issuer: "ICPC Foundation",
      date: "2025",
      link: "/Certificates/icpc_2025.pdf", 
      badge: "/badges/icpc_badge.jpg",
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2024",
      link: "https://www.hackerrank.com/certificates/a4a1ac8f8500",
      badge: "/badges/Problem_Solving_Badge.png",
    },
    {
        name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
        issuer: "Amazon Web Services (AWS)",
        date: "2024",
        link: "/Certificates/aws_cloud_foundations.pdf",
        badge: "/badges/aws_cloud_foundation_badge.png",
    },
    {
        name: "Ratatype - Touch Typing Certificate",
        issuer: "Ratatype",
        date: "2023",
        link: "/Certificates/ratatype.pdf",
        badge: "badges/ratatype_badge.png",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group backdrop-blur-sm"
            >
              {/* Square Badge Container */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800 border border-slate-700 p-2 group-hover:border-blue-500/30 transition-colors">
                <img 
                  src={cert.badge} 
                  alt={`${cert.name} badge`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-slate-500 font-mono">{cert.date}</span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}