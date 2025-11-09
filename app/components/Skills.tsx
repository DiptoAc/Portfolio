"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Kotlin", "Java", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Web Technologies",
      icon: "🌐",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Mobile Development",
      icon: "📱",
      skills: ["React Native", "Expo", "Android Studio", "Kotlin"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Databases & Backend",
      icon: "🗄️",
      skills: ["PostgreSQL", "Supabase", "SQLite", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Arduino IDE"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      category: "Cloud & Deployment",
      icon: "☁️",
      skills: ["Vercel", "Google Cloud Platform", "Azure", "Heroku"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Technical Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          A comprehensive toolkit for building modern web and mobile applications
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mr-3"
                >
                  {category.icon}
                </motion.div>
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} text-white font-medium shadow-md cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Other Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "REST APIs",
                "Problem Solving",
                "Data Structures & Algorithms",
                "Competitive Programming",
                "Team Leadership",
                "Project Management",
                "UI/UX Design",
                "IoT Development",
                "Machine Learning Basics"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-medium shadow-md cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
