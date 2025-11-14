"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiGooglecloud,
  SiHeroku,
  SiDocker,
  SiArduino,
} from "react-icons/si";
import { FaCode, FaMicrosoft, FaJava } from "react-icons/fa6";

// Generic fallback icon component
const FallbackIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

// Skill with icon mapping - using fallbacks for icons that don't exist
interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "Java": FaJava,
  "C++": SiCplusplus,
  "C": FaCode,
  "Kotlin": SiKotlin,
  "React Native": SiReact,
  "Expo": SiReact,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "SQLite": SiPostgresql,
  "Arduino IDE": SiArduino,
  "Firebase": SiFirebase,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Git": SiGit,
  "GitHub": SiGithub,
  "VS Code": FallbackIcon,
  "Postman": SiPostman,
  "Figma": SiFigma,
  "Vercel": SiVercel,
  "Google Cloud Platform": SiGooglecloud,
  "Azure": FaMicrosoft,
  "Heroku": SiHeroku,
  "Docker": SiDocker,
};

export default function Skills() {
  // All skills in a flat array for the marquee
  const allSkills: SkillItem[] = [
    { name: "React", icon: skillMap["React"] },
    { name: "Next.js", icon: skillMap["Next.js"] },
    { name: "Node.js", icon: skillMap["Node.js"] },
    { name: "Express.js", icon: skillMap["Express.js"] },
    { name: "TypeScript", icon: skillMap["TypeScript"] },
    { name: "JavaScript", icon: skillMap["JavaScript"] },
    { name: "Python", icon: skillMap["Python"] },
    { name: "Java", icon: skillMap["Java"] },
    { name: "C++", icon: skillMap["C++"] },
    { name: "C", icon: skillMap["C"] },
    { name: "Kotlin", icon: skillMap["Kotlin"] },
    { name: "React Native", icon: skillMap["React Native"] },
    { name: "Expo", icon: skillMap["Expo"] },
    { name: "MongoDB", icon: skillMap["MongoDB"] },
    { name: "PostgreSQL", icon: skillMap["PostgreSQL"] },
    { name: "Supabase", icon: skillMap["Supabase"] },
    { name: "SQLite", icon: skillMap["SQLite"] },
    { name: "Firebase", icon: skillMap["Firebase"] },
    { name: "HTML5", icon: skillMap["HTML5"] },
    { name: "CSS3", icon: skillMap["CSS3"] },
    { name: "Tailwind CSS", icon: skillMap["Tailwind CSS"] },
    { name: "Git", icon: skillMap["Git"] },
    { name: "GitHub", icon: skillMap["GitHub"] },
    { name: "VS Code", icon: skillMap["VS Code"] },
    { name: "Postman", icon: skillMap["Postman"] },
    { name: "Figma", icon: skillMap["Figma"] },
    { name: "Vercel", icon: skillMap["Vercel"] },
    { name: "Google Cloud Platform", icon: skillMap["Google Cloud Platform"] },
    { name: "Azure", icon: skillMap["Azure"] },
    { name: "Heroku", icon: skillMap["Heroku"] },
    { name: "Docker", icon: skillMap["Docker"] },
    { name: "Arduino IDE", icon: skillMap["Arduino IDE"] },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto mt-6"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950 to-transparent z-10 pointer-events-none" />
          
          {/* First marquee - scrolling left */}
          <div className="flex gap-4 mb-4 overflow-hidden">
            <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
              {duplicatedSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={`skill-1-${index}`}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 backdrop-blur-sm text-slate-200 font-medium text-lg whitespace-nowrap hover:border-sky-400/50 hover:from-sky-900/30 hover:to-sky-800/30 transition-all duration-300 hover:scale-105 cursor-default flex-shrink-0 flex items-center gap-3"
                  >
                    <div className="w-6 h-6 flex-shrink-0 icon-wrapper [&>svg]:w-full [&>svg]:h-full">
                      <IconComponent />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second marquee - scrolling right (reverse direction) */}
          <div className="flex gap-4 overflow-hidden">
            <div className="flex gap-4 animate-marquee-reverse" style={{ width: "max-content" }}>
              {duplicatedSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={`skill-2-${index}`}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 backdrop-blur-sm text-slate-200 font-medium text-lg whitespace-nowrap hover:border-fuchsia-400/50 hover:from-fuchsia-900/30 hover:to-fuchsia-800/30 transition-all duration-300 hover:scale-105 cursor-default flex-shrink-0 flex items-center gap-3"
                  >
                    <div className="w-6 h-6 flex-shrink-0 icon-wrapper [&>svg]:w-full [&>svg]:h-full">
                      <IconComponent />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm">
            I constantly try to improve my stack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
