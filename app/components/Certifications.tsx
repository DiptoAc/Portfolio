"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string; // URL to the PDF or image in your /public folder
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      name: "ICPC Regional Participation Certificate",
      issuer: "ICPC Foundation",
      date: "2025",
      link: "/Certificates/icpc_2025.pdf", 
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2024",
      link: "https://www.hackerrank.com/certificates/diptonuntu",
    },
    {
        name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
        issuer: "Amazon Web Services (AWS)",
        date: "2024",
        link: "/Certificates/aws_cloud_foundations.pdf",
    }
    // Add more here...
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank" // Opens in a new page
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400">{cert.issuer}</p>
                  <p className="text-sm text-slate-500 mt-2">{cert.date}</p>
                </div>
                <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}