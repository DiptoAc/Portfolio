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
  color?: string; // Brand color for the icon
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

// Brand colors for icons
const iconColors: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "Node.js": "#339933",
  "Express.js": "#000000",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Python": "#3776AB",
  "Java": "#ED8B00",
  "C++": "#00599C",
  "C": "#A8B9CC",
  "Kotlin": "#7F52FF",
  "React Native": "#61DAFB",
  "Expo": "#000020",
  "MongoDB": "#47A248",
  "PostgreSQL": "#336791",
  "Supabase": "#3ECF8E",
  "SQLite": "#003B57",
  "Firebase": "#FFCA28",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Git": "#F05032",
  "GitHub": "#181717",
  "VS Code": "#007ACC",
  "Postman": "#FF6C37",
  "Figma": "#F24E1E",
  "Vercel": "#000000",
  "Google Cloud Platform": "#4285F4",
  "Azure": "#0078D4",
  "Heroku": "#430098",
  "Docker": "#2496ED",
  "Arduino IDE": "#00979D",
};

export default function Skills() {
  // All skills in a flat array for the marquee
  const allSkills: SkillItem[] = [
    { name: "React", icon: skillMap["React"], color: iconColors["React"] },
    { name: "Next.js", icon: skillMap["Next.js"], color: iconColors["Next.js"] },
    { name: "Node.js", icon: skillMap["Node.js"], color: iconColors["Node.js"] },
    { name: "Express.js", icon: skillMap["Express.js"], color: iconColors["Express.js"] },
    { name: "TypeScript", icon: skillMap["TypeScript"], color: iconColors["TypeScript"] },
    { name: "JavaScript", icon: skillMap["JavaScript"], color: iconColors["JavaScript"] },
    { name: "Python", icon: skillMap["Python"], color: iconColors["Python"] },
    { name: "Java", icon: skillMap["Java"], color: iconColors["Java"] },
    { name: "C++", icon: skillMap["C++"], color: iconColors["C++"] },
    { name: "C", icon: skillMap["C"], color: iconColors["C"] },
    { name: "Kotlin", icon: skillMap["Kotlin"], color: iconColors["Kotlin"] },
    { name: "React Native", icon: skillMap["React Native"], color: iconColors["React Native"] },
    { name: "Expo", icon: skillMap["Expo"], color: iconColors["Expo"] },
    { name: "MongoDB", icon: skillMap["MongoDB"], color: iconColors["MongoDB"] },
    { name: "PostgreSQL", icon: skillMap["PostgreSQL"], color: iconColors["PostgreSQL"] },
    { name: "Supabase", icon: skillMap["Supabase"], color: iconColors["Supabase"] },
    { name: "SQLite", icon: skillMap["SQLite"], color: iconColors["SQLite"] },
    { name: "Firebase", icon: skillMap["Firebase"], color: iconColors["Firebase"] },
    { name: "HTML5", icon: skillMap["HTML5"], color: iconColors["HTML5"] },
    { name: "CSS3", icon: skillMap["CSS3"], color: iconColors["CSS3"] },
    { name: "Tailwind CSS", icon: skillMap["Tailwind CSS"], color: iconColors["Tailwind CSS"] },
    { name: "Git", icon: skillMap["Git"], color: iconColors["Git"] },
    { name: "GitHub", icon: skillMap["GitHub"], color: iconColors["GitHub"] },
    { name: "VS Code", icon: skillMap["VS Code"], color: iconColors["VS Code"] },
    { name: "Postman", icon: skillMap["Postman"], color: iconColors["Postman"] },
    { name: "Figma", icon: skillMap["Figma"], color: iconColors["Figma"] },
    { name: "Vercel", icon: skillMap["Vercel"], color: iconColors["Vercel"] },
    { name: "Google Cloud Platform", icon: skillMap["Google Cloud Platform"], color: iconColors["Google Cloud Platform"] },
    { name: "Azure", icon: skillMap["Azure"], color: iconColors["Azure"] },
    { name: "Heroku", icon: skillMap["Heroku"], color: iconColors["Heroku"] },
    { name: "Docker", icon: skillMap["Docker"], color: iconColors["Docker"] },
    { name: "Arduino IDE", icon: skillMap["Arduino IDE"], color: iconColors["Arduino IDE"] },
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
                    <div 
                      className="w-6 h-6 flex-shrink-0 skill-icon [&>svg]:w-full [&>svg]:h-full"
                      style={{ color: skill.color || 'currentColor' }}
                    >
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
                    <div 
                      className="w-6 h-6 flex-shrink-0 skill-icon [&>svg]:w-full [&>svg]:h-full"
                      style={{ color: skill.color || 'currentColor' }}
                    >
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
