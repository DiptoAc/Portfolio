"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {projects, Project} from "@/data/projects"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();



  const colorMap: Record<string, { hoverText: string; glow: string }> = {
    "border-t-emerald-500": { hoverText: "group-hover:text-emerald-400", glow: "from-emerald-500" },
    "border-t-sky-500": { hoverText: "group-hover:text-sky-400", glow: "from-sky-500" },
    "border-t-indigo-500": { hoverText: "group-hover:text-indigo-400", glow: "from-indigo-500" },
    "border-t-orange-500": { hoverText: "group-hover:text-orange-400", glow: "from-orange-500" },
    "border-t-fuchsia-500": { hoverText: "group-hover:text-fuchsia-400", glow: "from-fuchsia-500" },
  }



  const handleProjectClick = (project: Project) => {
    if (project.customRoute) {
      router.push(project.customRoute);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12"
          >
            Featured Projects
          </motion.h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
            // 1. Logic must be inside curly braces
            const colors = colorMap[project.color || ""] || { 
              hoverText: "group-hover:text-sky-400", 
              glow: "from-sky-500" 
            };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleProjectClick(project)} 
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group border border-slate-600/30 border-t-4 ${project.color || 'border-t-sky-500'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none ${colors.glow} to-transparent`} />
                
                <div className="relative z-10">
                  <h3 className={`text-xl sm:text-2xl font-semibold text-slate-100 mb-3 transition-colors ${colors.hoverText}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-sky-300 text-sm rounded-full border border-slate-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1">
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-fuchsia-400 hover:text-fuchsia-300 font-medium">
                        Live Demo →
                      </a>
                    )}
                    <span className={`text-sm ml-auto font-medium transition-colors text-slate-400 ${colors.hoverText}`}>
                      {project.customRoute ? "View Microprocessor Page →" : "Click for details"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-600/30"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-slate-100">{selectedProject.title}</h2>
                  <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-200 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-slate-300 mb-6">{selectedProject.fullDescription || selectedProject.description}</p>
                
                {selectedProject.highlights && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-300">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-700/50 text-sky-300 rounded-full font-medium border border-slate-600/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-slate-800 text-slate-100 rounded-lg hover:bg-slate-700 transition-colors text-center font-medium border border-slate-600/30">
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-center font-medium">
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}