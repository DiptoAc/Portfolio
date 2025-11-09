"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: "work" | "leadership";
  icon: string;
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Digital Services Freelancer",
      organization: "Fiverr",
      period: "Sep 2021 - Jan 2023",
      description: [
        "Created professional presentations and documents for over 50 clients worldwide",
        "Delivered high-quality SEO-optimized content and visual design services",
        "Maintained 5-star ratings through exceptional customer service",
        "Managed multiple projects simultaneously with strict deadlines"
      ],
      type: "work",
      icon: "💼"
    },
    {
      title: "Rover Scout Leader (RSL)",
      organization: "Feni Rover Scout, Govt. Iqbal Memorial College Unit",
      period: "July 2019 - 2020",
      description: [
        "Directed community campaigns including afforestation initiatives",
        "Oversaw logistics and crowd control for large public events, ensuring safety and order",
        "Trained and mentored junior members in core scouting discipline and emergency preparedness",
        "Organized and led multi-day outdoor activities (camping and hiking) focused on practical leadership and self-reliance skills"
      ],
      type: "leadership",
      icon: "🏕️"
    },
    {
      title: "Math Olympiad Participant",
      organization: "National Mathematics Olympiad",
      period: "2017 - 2019",
      description: [
        "Competed in regional and national mathematics competitions",
        "Developed strong problem-solving and analytical thinking skills",
        "Collaborated with peers to tackle complex mathematical challenges",
        "Enhanced logical reasoning and creative approach to mathematical problems"
      ],
      type: "leadership",
      icon: "🏆"
    },
    {
      title: "Club Member",
      organization: "SUST Math & Programming Club",
      period: "Apr 2024 - Present",
      description: [
        "Active participant in competitive programming activities",
        "Collaborated on problem-solving sessions and contests",
        "Mentored junior members in algorithmic problem-solving",
        "Represented the club in various inter-university competitions"
      ],
      type: "leadership",
      icon: "🧮"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-50 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Experience & Leadership
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Professional experience and leadership roles in tech communities
        </motion.p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-white shadow-lg hidden md:block ${
                    exp.type === "work" 
                      ? "bg-blue-500" 
                      : "bg-purple-500"
                  }`}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className={`ml-0 md:ml-20 bg-gradient-to-br ${
                    exp.type === "work"
                      ? "from-blue-50 to-cyan-50"
                      : "from-purple-50 to-pink-50"
                  } rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl"
                      >
                        {exp.icon}
                      </motion.span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {exp.period}
                  </p>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? "auto" : "0",
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: expandedIndex === index ? 0 : -20,
                            opacity: expandedIndex === index ? 1 : 0
                          }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {expandedIndex !== index && (
                    <p className="text-gray-500 text-sm mt-2 italic">Click to expand details</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
