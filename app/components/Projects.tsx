export default function Projects() {
  const projects = [
    {
      title: "FinBot – AI-Powered Finance Management",
      description: "Multilingual (Bengali + English) full-stack AI platform for managing structured data through chat and voice commands. Integrated MCP for direct LLM-database communication and real-time voice chat via WebRTC.",
      tech: ["Next.js", "Django REST", "Claude AI", "WebRTC", "MCP"],
      github: "https://github.com/MehediHasan-75/FinanaceManagement",
      live: null
    },
    {
      title: "GameVerse: Video Game Discovery Platform",
      description: "Responsive game discovery application with dynamic filtering, search, and sorting. Integrated RAWG API for 10,000+ games with platform filtering, genre categories, and dark mode support.",
      tech: ["React", "TypeScript", "Chakra UI", "RAWG API"],
      github: "https://github.com/MD-Al-Fahad/GameVerse",
      live: "https://gameverse-hub.vercel.app/"
    },
    {
      title: "Traffic Violation Detection System",
      description: "Automated traffic violation detection using Arduino UNO, ESP32-CAM, and ultrasonic sensors. Real-time image capture to Telegram bot with 95%+ accuracy for law enforcement support.",
      tech: ["Arduino", "ESP32-CAM", "C++", "IoT", "Telegram API"],
      github: "https://github.com/rayhanulamint2/Traffic-Violation-Detection-System",
      live: null
    },
    {
      title: "BMI Calculator",
      description: "Interactive BMI calculator with real-time metric conversion and health category classification. Implemented form validation and responsive UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MD-Al-Fahad/Webb/tree/master/JS/Projects/BMIcalculator",
      live: "https://bmi-calculator-one-dusky.vercel.app/"
    },
    {
      title: "Number Guessing Game",
      description: "Interactive browser game with real-time feedback, attempt tracking, input validation, and win/loss conditions. Features guess history and restart functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MD-Al-Fahad/Webb/tree/master/JS/Projects/guessTheNumber",
      live: "https://guess-the-number-azure-chi.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Code →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

