"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  tech: string[];
  github: string | null;
  live: string | null;
  highlights?: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "EcoNest – Employee Management Service",
      description: "Developed an RBAC office management system with 6 different roles. Cross-platform access on phones, tablets, and computers for modern hybrid workplace.",
      fullDescription: "A comprehensive employee management system with Role-Based Access Control (RBAC) featuring 6 distinct user roles. The system provides seamless cross-platform access across phones, tablets, and computers, making it ideal for modern hybrid workplaces. Features include hybrid manual/AI operations and dynamic, shareable table architecture with secure user permissions.",
      tech: ["React Native", "PostgreSQL", "Supabase", "Expo", "JavaScript"],
      github: "https://github.com/Brikkhobondhon/EcoNest",
      live: null,
      highlights: [
        "6 different role-based access levels",
        "Cross-platform compatibility (mobile, tablet, desktop)",
        "Hybrid manual/AI operations",
        "Secure user permission system",
        "Real-time data synchronization"
      ]
    },
    {
      title: "AttManager App: Attendance Management System",
      description: "Implemented robust core application logic and attendance management using Kotlin. Designed responsive, native UI/UX layouts for Android devices.",
      fullDescription: "A native Android application built with Kotlin that streamlines attendance management. Features robust core application logic, responsive UI/UX design using XML, and local data persistence for offline functionality and stability.",
      tech: ["Kotlin", "Android Studio", "XML"],
      github: "https://github.com/DiptoAc/Android_App_Kt",
      live: null,
      highlights: [
        "Native Android development with Kotlin",
        "Responsive UI/UX with XML layouts",
        "Local data persistence",
        "Offline functionality",
        "Material Design implementation"
      ]
    },
    {
      title: "Professional Employee Directory",
      description: "Complete management system featuring CRUD operations and robust data persistence using local SQLite. Professional UI/UX with form validation and confirmation dialogs.",
      fullDescription: "A cross-platform mobile application built with React Native and Expo, featuring complete CRUD operations and robust local data persistence using SQLite. The app includes professional UI/UX design, comprehensive form validation, and confirmation dialogs to ensure data safety and integrity.",
      tech: ["React Native", "TypeScript", "Expo", "SQLite"],
      github: "https://github.com/DiptoAc/Mock_App",
      live: null,
      highlights: [
        "Full CRUD operations",
        "SQLite local database",
        "Form validation",
        "Confirmation dialogs for data safety",
        "Cross-platform (iOS & Android)"
      ]
    },
    {
      title: "Traffic Violation Detection System",
      description: "Automated traffic violation detection using Arduino UNO, ESP32-CAM, and ultrasonic sensors. Real-time image capture to Telegram bot with 95%+ accuracy.",
      fullDescription: "An IoT-based smart monitoring system for automated traffic violation detection. Uses Arduino UNO, ESP32-CAM, and ultrasonic sensors (HC-SR04) to detect violations in real-time. Features intelligent traffic light control with automated interval management, Wi-Fi connectivity for cloud communication, and instant image transmission to Telegram bot with 95%+ reliability.",
      tech: ["Arduino", "ESP32-CAM", "C++", "IoT", "Telegram API"],
      github: "https://github.com/rayhanulamint2/Traffic-Violation-Detection-System",
      live: null,
      highlights: [
        "95%+ detection accuracy",
        "Real-time image capture",
        "Automated traffic light control",
        "Wi-Fi cloud communication",
        "Instant Telegram notifications"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-slate-100 mb-12"
          >
            Featured Projects
          </motion.h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group border border-slate-600/30"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-slate-700/50 text-sky-300 text-sm rounded-full border border-slate-600/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-fuchsia-400 hover:text-fuchsia-300 font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                    <span className="text-slate-400 text-sm ml-auto">Click for details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
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
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-slate-300 mb-6">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                
                {selectedProject.highlights && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-700/50 text-sky-300 rounded-full font-medium border border-slate-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-slate-800 text-slate-100 rounded-lg hover:bg-slate-700 transition-colors text-center font-medium border border-slate-600/30"
                    >
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-center font-medium"
                    >
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
